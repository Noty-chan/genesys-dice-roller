import * as React from "react";
import { difference } from "lodash-es";

import { AllowedDice, AllowedResults } from "src/model/dice";
import { AbilityDie, ProficiencyDie, BoostDie, DifficultyDie, ChallengeDie, SetbackDie, PercentileDie } from "src/model/dice";
import html2canvas from "html2canvas";
import { getWebhook, Username, AutoDiscord } from "src/model/settings";
import { removeOpposingSymbols, adjudicateRoll } from "src/util/adjudicate";
import { orderSymbols } from "src/util/order";
import Symbols from "src/model/symbols";
import Result from "src/model/result";

import DiceControls from "src/view/dice-controls";
import DiceList from "src/view/dice-list";
import RollResults from "src/view/roll-results";
import { orderDice } from "src/util/order";

type diceTypes = "ability" | "proficiency" | "boost" | "difficulty" | "challenge" | "setback" | "percentile";
const diceTypes: Readonly<diceTypes[]> = Object.freeze(["ability", "proficiency", "boost", "difficulty", "challenge", "setback"]);

export default class MainAppArea extends React.Component<{}, { dice: AllowedDice[], selected: AllowedDice[], results: AllowedResults[] }> {

    resultsRef: React.RefObject<HTMLDivElement> = React.createRef();
    private updateAutoDiscord = () => this.forceUpdate();

    constructor(props: {}) {
        super(props);
        this.state = { dice: [], selected: [], results: [] };

        this.addDie = this.addDie.bind(this);
        this.clearDice = this.clearDice.bind(this);
        this.toggleSelection = this.toggleSelection.bind(this);
        this.roll = this.roll.bind(this);
        this.sendToDiscord = this.sendToDiscord.bind(this);
    }

    componentDidMount() {
        AutoDiscord.on(this.updateAutoDiscord);
    }

    componentWillUnmount() {
        AutoDiscord.off(this.updateAutoDiscord);
    }

    addDie(newDie: AllowedDice): void {
        const { dice } = this.state;
        this.setState({ ...this.state, dice: dice.concat([newDie]).sort(orderDice) });
    }

    clearDice(): void {

        const { dice, selected } = this.state;

        if (selected.length) {

            const remainingDice = difference(dice, selected);
            this.setState({
                dice: remainingDice,
                selected: [],
                results: remainingDice.map(die => die.currentResult)
            });

        } else {
            this.setState({ dice: [], selected: [], results: [] });
        }
    }

    toggleSelection(toggledDie: AllowedDice): void {

        const { selected } = this.state;
        if (selected.includes(toggledDie)) {
            this.setState({ ...this.state, selected: selected.filter(die => die !== toggledDie) });
        } else {
            this.setState({ ...this.state, selected: selected.concat([toggledDie]) });
        }
    }

    roll() {

        const { dice, selected } = this.state;

        if (selected.length) {

            selected.forEach(die => die.roll());
            this.setState({
                dice,
                selected: [],
                results: dice.map(die => die.currentResult)
            }, () => { if (AutoDiscord.get()) this.sendToDiscord(); });

        } else {
            this.setState({ ...this.state, results: this.state.dice.map(die => die.roll()) },
                () => { if (AutoDiscord.get()) this.sendToDiscord(); });
        }
    }

    async sendToDiscord() {
        const webhook = getWebhook();
        if (!webhook || !this.resultsRef.current) { return; }

        await new Promise(res => setTimeout(res, 500));

        const canvas = await html2canvas(this.resultsRef.current, { scale: 2 });
        const blob: Blob = await new Promise(resolve =>
            canvas.toBlob((b: Blob | null) => resolve(b!), "image/png")
        );

        const form = new FormData();
        form.append("file", blob, "roll.png");
        form.append("username", Username.get() || "Genesys Roller");
        form.append("content", this.summariseResults());

        fetch(webhook, { method: "POST", body: form });
    }

    summariseResults(): string {
        const symbols: Symbols[] = [];
        const numbers: number[] = [];
        this.state.results.forEach(r => {
            if (Array.isArray(r)) { symbols.push(...r); } else if (typeof r === "number") { numbers.push(r); }
        });
        const flat = removeOpposingSymbols(symbols).sort(orderSymbols);
        const result = symbols.length ? adjudicateRoll(flat) : Result.NEUTRAL;
        const counts = new Map<Symbols, number>();
        flat.forEach(s => counts.set(s, (counts.get(s) || 0) + 1));
        const names: Record<Symbols, string> = {
            [Symbols.SUCCESS]: "успех",
            [Symbols.FAILURE]: "неудача",
            [Symbols.ADVANTAGE]: "преимущество",
            [Symbols.THREAT]: "угроза",
            [Symbols.TRIUMPH]: "триумф",
            [Symbols.DESPAIR]: "отчаяние",
        } as any;
        let text = result === Result.SUCCESS ? "Итог: успех" : result === Result.FAILURE ? "Итог: провал" : "Итог:";
        text += "\n" + Array.from(counts.entries()).map(([sym, count]) => `${names[sym]}: ${count}`).join("\n");
        if (numbers.length) text += "\nЧисла: " + numbers.join(", ");
        return text;
    }

    render() {
        return <div className="dice-area">
            <DiceControls callback={this.addDie}/>
            <div ref={this.resultsRef} style={{ width: "100%" }}>
                <DiceList dice={this.state.dice} selected={this.state.selected} selectCallback={this.toggleSelection} />
                <RollResults results={this.state.results} />
            </div>
            <div className="actions">
                <button id="roll" onClick={this.roll}>{this.state.selected.length ? "Re-roll Selected" : "Roll"}</button>
                <button id="clear" onClick={this.clearDice}>{this.state.selected.length ? "Remove Selected" : "Clear"}</button>
                  {getWebhook() && !AutoDiscord.get() && this.state.results.length > 0 &&
                    <button id="discord" onClick={this.sendToDiscord}>Отправить в Discord</button>}
            </div>
        </div>;
    }

}

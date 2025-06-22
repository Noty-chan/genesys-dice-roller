import * as React from "react";
import { Webhooks, WebhookPriority, Username, Theme, AutoDiscord } from "src/model/settings";
type MenuProps = { toggleCallback?: (open: boolean) => void };

export default class Menu extends React.PureComponent<MenuProps> {
    state = { webhooks: Webhooks.get().length ? Webhooks.get() : [""], priority: WebhookPriority.get(), username: Username.get() || "", theme: Theme.get() || "", autoDiscord: AutoDiscord.get() || false };

    handleWebhook = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const webhooks = this.state.webhooks.slice();
        webhooks[idx] = e.target.value;
        this.setState({ webhooks });
        Webhooks.set(webhooks.filter(w => w));
    };

    addWebhookField = () => {
        if (this.state.webhooks.length < 5) {
            this.setState({ webhooks: this.state.webhooks.concat([""]) });
        }
    };

    removeWebhookField = (idx: number) => {
        if (this.state.webhooks.length > 1) {
            const webhooks = this.state.webhooks.slice();
            webhooks.splice(idx, 1);
            const priority = Math.min(this.state.priority, webhooks.length - 1);
            this.setState({ webhooks, priority });
            Webhooks.set(webhooks.filter(w => w));
            WebhookPriority.set(priority);
        }
    };
    
    handlePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const priority = parseInt(e.target.value, 10);
        this.setState({ priority });
        WebhookPriority.set(priority);
    };

    handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        this.setState({ username });
        Username.set(username);
    };

    handleTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const theme = e.target.value as "light" | "dark" | "";
        this.setState({ theme });
        Theme.set(theme || null);
    };

    handleAutoDiscord = (e: React.ChangeEvent<HTMLInputElement>) => {
        const auto = e.target.checked;
        this.setState({ autoDiscord: auto });
        AutoDiscord.set(auto);
    };

    render() {
        return <div className="menu">
            {this.state.webhooks.map((hook, i) => <label key={i}>Вебхук #{i + 1}
                <input type="url" value={hook} onChange={e => this.handleWebhook(i, e)} />
            </label>)}
            {this.state.webhooks.length < 5 && <button onClick={this.addWebhookField}>Добавить вебхук</button>}
            {this.state.webhooks.length > 1 && <label>Приоритетный канал
                <select value={this.state.priority} onChange={this.handlePriority}>
                    {this.state.webhooks.map((_, i) => <option value={i} key={"p" + i}>Вебхук #{i + 1}</option>)}
                </select>
            </label>}
            <label>Имя
                <input type="text" value={this.state.username} onChange={this.handleUsername}/>
            </label>
            <label className="checkbox">Автоотправка в Discord
                <input type="checkbox" checked={this.state.autoDiscord} onChange={this.handleAutoDiscord}/>
            </label>
            <label>Тема
                <select value={this.state.theme} onChange={this.handleTheme}>
                    <option value="">Системная</option>
                    <option value="light">Светлая</option>
                    <option value="dark">Тёмная</option>
                </select>
            </label>
            {this.props.toggleCallback && <button onClick={() => this.props.toggleCallback!(false)}>Закрыть</button>}
        </div>;
    }
}

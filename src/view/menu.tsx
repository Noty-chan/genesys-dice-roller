import * as React from "react";
import { Webhooks, WebhookNames, WebhookPriority, Username, Theme, AutoDiscord } from "src/model/settings";
type MenuProps = { toggleCallback?: (open: boolean) => void };

export default class Menu extends React.PureComponent<MenuProps> {
    state = {
        webhooks: Webhooks.get().length ? Webhooks.get() : [""],
        names: WebhookNames.get().slice(),
        priority: WebhookPriority.get(),
        username: Username.get() || "",
        theme: Theme.get() || "",
        autoDiscord: AutoDiscord.get() || false
    };

    private webhookApi(url: string): string | null {
        const match = url.match(/\/api\/webhooks\/(\d+)\/([^/]+)/);
        return match ? `https://discord.com/api/webhooks/${match[1]}/${match[2]}` : null;
    }

    private async updateName(idx: number, url: string) {
        const api = this.webhookApi(url);
        if (!api) { return; }
        try {
            const res = await fetch(api);
            if (!res.ok) { return; }
            const data = await res.json();
            const names = this.state.names.slice();
            names[idx] = data.name || `Вебхук #${idx + 1}`;
            this.setState({ names });
            WebhookNames.set(names);
        } catch (err) {
            console.error(err);
        }
    }

    handleWebhook = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const webhooks = this.state.webhooks.slice();
        const names = this.state.names.slice();
        webhooks[idx] = e.target.value;
        names[idx] = names[idx] || "";
        this.setState({ webhooks, names });
        Webhooks.set(webhooks.filter(w => w));
        WebhookNames.set(names);
        if (webhooks[idx]) {
            this.updateName(idx, webhooks[idx]);
        }
    };

    addWebhookField = () => {
        if (this.state.webhooks.length < 5) {
            this.setState({
                webhooks: this.state.webhooks.concat([""]),
                names: this.state.names.concat([""])
            });
        }
    };

    removeWebhookField = (idx: number) => {
        if (this.state.webhooks.length > 1) {
            const webhooks = this.state.webhooks.slice();
            const names = this.state.names.slice();
            webhooks.splice(idx, 1);
            names.splice(idx, 1);
            const priority = Math.min(this.state.priority, webhooks.length - 1);
            this.setState({ webhooks, names, priority });
            Webhooks.set(webhooks.filter(w => w));
            WebhookNames.set(names);
            WebhookPriority.set(priority);
        }
    };

    componentDidMount() {
        this.state.webhooks.forEach((hook, i) => {
            if (hook && !this.state.names[i]) {
                this.updateName(i, hook);
            }
        });
    }

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
            {this.state.webhooks.map((hook, i) => <label key={i}>{this.state.names[i] || `Вебхук #${i + 1}`}
              <span className="field">
                    <input type="url" value={hook} onChange={e => this.handleWebhook(i, e)} />
                    {this.state.webhooks.length > 1 && <button type="button" className="remove" onClick={() => this.removeWebhookField(i)}>×</button>}
                </span>
            </label>)}
            {this.state.webhooks.length < 5 && <button onClick={this.addWebhookField}>Добавить вебхук</button>}
            {this.state.webhooks.length > 1 && <label>Приоритетный канал
                <select value={this.state.priority} onChange={this.handlePriority}>
                    {this.state.webhooks.map((_, i) => <option value={i} key={"p" + i}>{this.state.names[i] || `Вебхук #${i + 1}`}</option>)}
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

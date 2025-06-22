import * as React from "react";
import { Webhook, Username, Theme, AutoDiscord } from "src/model/settings";
type MenuProps = { toggleCallback?: (open: boolean) => void };

export default class Menu extends React.PureComponent<MenuProps> {
    state = { webhook: Webhook.get() || "", username: Username.get() || "", theme: Theme.get() || "", autoDiscord: AutoDiscord.get() || false };

    handleWebhook = (e: React.ChangeEvent<HTMLInputElement>) => {
        const webhook = e.target.value;
        this.setState({ webhook });
        Webhook.set(webhook || null);
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
            <label>Адрес вебхука
                <input type="url" value={this.state.webhook} onChange={this.handleWebhook}/>
            </label>
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

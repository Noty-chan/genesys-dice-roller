import * as React from "react";
import { Webhook, Username, Theme } from "src/model/settings";
type MenuProps = { toggleCallback?: (open: boolean) => void };

export default class Menu extends React.PureComponent<MenuProps> {
    state = { webhook: Webhook.get() || "", username: Username.get() || "", theme: Theme.get() || "" };

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

    render() {
        return <div className="menu">
            <label>Webhook URL
                <input type="url" value={this.state.webhook} onChange={this.handleWebhook}/>
            </label>
            <label>Имя
                <input type="text" value={this.state.username} onChange={this.handleUsername}/>
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

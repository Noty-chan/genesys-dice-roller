import * as React from "react";
import * as ReactDOM from "react-dom";

import { Theme } from "src/model/settings";
import MainAppArea from "src/view/main-app-area";
import NavButton from "src/view/nav-button";
import Menu from "src/view/menu";

class App extends React.Component<{ themeSettings: typeof Theme }, { menuOpen: boolean }> {

    constructor(props: { themeSettings: typeof Theme }) {
        super(props);
        this.state = { menuOpen: false };
        this.switchTheme = this.switchTheme.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(open: boolean): void {
        this.setState({ menuOpen: open });
    }

    switchTheme(): void {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(this.props.themeSettings.getClass());
    }

    componentDidMount() {
        this.props.themeSettings.on(this.switchTheme);
        this.switchTheme();
    }

    componentWillUnmount() {
        this.props.themeSettings.off(this.switchTheme);
    }

    render() {
        return <React.Fragment>
            <NavButton toggleCallback={this.toggleMenu}/>
            {this.state.menuOpen && <Menu toggleCallback={this.toggleMenu}/>} 
            <h1 onClick={() => this.props.themeSettings.toggle()}><span className="logo">Genesys</span> Dice Roller</h1>
            <MainAppArea/>
        </React.Fragment>;
    }
}

// Remove fallback no-JS content and remove the class from the <body> tag
document.body.classList.remove("no-js");

ReactDOM.render(<App themeSettings={Theme} />, document.getElementById("app")!);

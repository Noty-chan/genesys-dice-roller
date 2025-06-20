import * as React from "react";
import { isArray } from "lodash-es";
import Symbols from "src/model/symbols";

/** Map every Genesys symbol to its SVG representation. */
function renderSymbol(symbol: Symbols): JSX.Element {
    switch (symbol) {
        case Symbols.SUCCESS:
            return <polygon points="5,1 9,5 5,9 1,5" />;
        case Symbols.FAILURE:
            return <g><line x1="1" y1="1" x2="9" y2="9" /><line x1="1" y1="9" x2="9" y2="1" /></g>;
        case Symbols.ADVANTAGE:
            return <polygon points="5,1 9,9 1,9" />;
        case Symbols.THREAT:
            return <polygon points="1,1 9,1 5,9" />;
        case Symbols.TRIUMPH:
            return <g><circle cx="5" cy="5" r="4" fill="none" /><polygon points="5,1 9,5 5,9 1,5" /></g>;
        case Symbols.DESPAIR:
            return <g><circle cx="5" cy="5" r="4" fill="none" /><line x1="1" y1="1" x2="9" y2="9" /><line x1="1" y1="9" x2="9" y2="1" /></g>;
        default:
            return <></>;
    }
}

/** Render Genesys dice symbols using inline SVG icons. */
const SymbolDisplay: React.SFC<{ symbol: Symbols | Symbols[] }> = ({ symbol }) => {
    const list = isArray(symbol) ? symbol : [symbol];
    return (
        <span className="dice-symbol">
            {list.map((s, i) => (
                <svg key={i} viewBox="0 0 10 10">{renderSymbol(s)}</svg>
            ))}
        </span>
    );
};
export default SymbolDisplay;

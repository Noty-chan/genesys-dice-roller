import * as React from "react";
import { isArray } from "lodash-es";
import Symbols from "src/model/symbols";

/** Render Genesys dice symbols using the dedicated font. */
const SymbolDisplay: React.SFC<{ symbol: Symbols | Symbols[] }> = ({ symbol }) => {
    const list = isArray(symbol) ? symbol : [symbol];
    return <span className="dice-symbol">{list.join("")}</span>;
};
export default SymbolDisplay;

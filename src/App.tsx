import React from "react";

// Components
import Clock from "./pages/Clock";

// Utils
import { getColors } from "./utils/getColors";

// Styles
import "./styles.css";

function App() {
    const currentColors = getColors(new Date().getDay());
    return (
        <div
            className="app"
            style={{ backgroundColor: currentColors.mainBackground }}
        >
            <header
                style={{ backgroundColor: currentColors.secondBackground }}
            ></header>
            <Clock currentColors={currentColors} />
            <footer
                style={{
                    backgroundColor: currentColors.secondBackground,
                    color: currentColors.darkFontColor,
                }}
            >
                <p>Powered by: SRM-99</p>
            </footer>
        </div>
    );
}

export default App;

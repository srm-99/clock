import React, { useState } from "react";

// Components
import Clock from "./pages/Clock";

// Utils
import { getDateObject } from "./utils/getDateObject";
import { getColors } from "./utils/getColors";

// Styles
import "./styles.css";

// Types
import { FormattedDate } from "./types";

function App() {
    const [date, setDate] = useState<FormattedDate>(getDateObject(new Date()));
    const currentColors = getColors(1);
    setInterval(() => {
        setDate(getDateObject(new Date()));
    }, 1000);

    return (
        <div
            className="app"
            style={{ backgroundColor: currentColors.mainBackground }}
        >
            <header
                style={{ backgroundColor: currentColors.secondBackground }}
            ></header>
            <Clock date={date} currentColors={currentColors} />
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

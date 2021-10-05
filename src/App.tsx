import React, { useState } from "react";

// Components
import Clock from "./pages/Clock/Clock";

// Utils
import { getDateObject } from "./utils/getDateObject";

// Types
import { FormattedDate } from "./types";

function App() {
    const [date, setDate] = useState<FormattedDate>(getDateObject(new Date()));

    setInterval(() => {
        setDate(getDateObject(new Date()));
    }, 1000);

    return (
        <>
            <Clock date={date} />
        </>
    );
}

export default App;

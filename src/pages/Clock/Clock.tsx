import React, { FC } from "react";

// Types
import { ClockPropsType } from "./types";

const Clock: FC<ClockPropsType> = ({ date }) => {
    return (
        <div className="clock-container">
            <div className="time">time: {date.time}</div>
            <div className="seconds">seconds {date.seconds}</div>
            <div className="date">date {date.date}</div>
        </div>
    );
};

export default Clock;

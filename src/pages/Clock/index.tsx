import React, { FC, useState } from "react";

// Utils
import { getDateObject } from "../../utils/getDateObject";

// Styles
import "./styles.css";

// Types
import { ClockPropsType } from "./types";
import { FormattedDate } from "../../types";

const Clock: FC<ClockPropsType> = ({ currentColors }) => {
    const [date, setDate] = useState<FormattedDate>(getDateObject(new Date()));

    setInterval(() => {
        setDate(getDateObject(new Date()));
    }, 1000);

    return (
        <div className="clock-container">
            <div
                className="big-ellipse"
                style={{
                    border: `1px solid ${currentColors.lightFontColor}`,
                }}
            >
                <div
                    className="dash-ellipse"
                    style={{
                        border: `4px dashed ${currentColors.secondBackground}`,
                    }}
                >
                    <div
                        className="small-ellipse"
                        style={{
                            border: `2px solid ${currentColors.lightFontColor}`,
                        }}
                    >
                        <div
                            className="time"
                            style={{
                                color: `${currentColors.lightFontColor}`,
                            }}
                        >
                            {date.time}
                        </div>
                        <div
                            className="seconds"
                            style={{
                                color: `${currentColors.lightFontColor}`,
                            }}
                        >
                            {date.seconds}
                        </div>
                        <div
                            className="location"
                            style={{
                                backgroundColor: `${currentColors.secondBackground}`,
                                color: `${currentColors.darkFontColor}`,
                            }}
                        >
                            LA UNIÓN VALLE
                        </div>
                        <div
                            className="date"
                            style={{
                                color: `${currentColors.lightFontColor}`,
                            }}
                        >
                            {date.date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clock;

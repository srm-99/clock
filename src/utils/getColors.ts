// Types
import { IdDayType, ColorType, ColorsType } from "./types";

export const getColors = (idDay: IdDayType): ColorType => {
    const colors: ColorsType = [
        {
            // RED 900
            mainBackground: "#B71C1C",
            // RED 300
            secondBackground: "#E57373",
            // GRAY 900
            darkFontColor: "#212121",
            // GRAY 50
            lightFontColor: "#FAFAFA",
        },
    ];
    return colors[idDay - 1];
};

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
        {
            // BLUE 900
            mainBackground: "#0D47A1",
            // BLUE 300
            secondBackground: "#64B5F6",
            // GRAY 900
            darkFontColor: "#212121",
            // GRAY 50
            lightFontColor: "#FAFAFA",
        },
        {
            // GREEN 900
            mainBackground: "#1B5E20",
            // GREEN 300
            secondBackground: "#81C784",
            // GRAY 900
            darkFontColor: "#212121",
            // GRAY 50
            lightFontColor: "#FAFAFA",
        },
        {
            // PURPLE 900
            mainBackground: "#4A148C",
            // PURPLE 300
            secondBackground: "#BA68C8",
            // GRAY 900
            darkFontColor: "#212121",
            // GRAY 50
            lightFontColor: "#FAFAFA",
        },
        {
            // INDIGO 900
            mainBackground: "#1A237E",
            // INDIGO 300
            secondBackground: "#7986CB",
            // GRAY 900
            darkFontColor: "#212121",
            // GRAY 50
            lightFontColor: "#FAFAFA",
        },
        {
            // ORANGE 900
            mainBackground: "#E65100",
            // ORANGE 300
            secondBackground: "#FFB74D",
            // GRAY 900
            darkFontColor: "#212121",
            // GRAY 50
            lightFontColor: "#FAFAFA",
        },
        {
            // TEAL 900
            mainBackground: "#004D40",
            // TEAL 300
            secondBackground: "#4DB6AC",
            // GRAY 900
            darkFontColor: "#212121",
            // GRAY 50
            lightFontColor: "#FAFAFA",
        },
    ];
    return colors[idDay - 1];
};

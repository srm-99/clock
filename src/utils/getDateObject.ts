// Types
import { FormattedDate } from "../types";

export const getDateObject = (date: Date): FormattedDate => ({
    time: date.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
    }),
    seconds: date.getSeconds().toString(),
    date: date
        .toLocaleTimeString("es-ES", {
            weekday: "short",
            month: "short",
            day: "numeric",
        })
        .slice(0, -9),
});

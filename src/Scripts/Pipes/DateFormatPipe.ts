import { IConfigurations } from "../CommonInterfacesAndEnums";
import { Pipe, PipeTransform, Inject } from "@angular/core";

@Pipe({
    name: "DateFormat",
    pure: true
})
export class DateFormatPipe implements PipeTransform {
    constructor(
        @Inject("Configuration") private configuration: IConfigurations) {
    }

    transform(value: Date, format: string, value2: Date): string {
        var culture = this.configuration.culture || "en-ca";
        var res = "";
        switch (format) {
            case "day":
                res = value.toLocaleDateString(culture, { day: "numeric" })
                break;
            case "date":
                res = value.toLocaleDateString(culture, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
                break;
            case "week":
                var startOfWeek = new Date(value.valueOf());
                startOfWeek.setDate(startOfWeek.getDate() - 6);
                res = startOfWeek.toLocaleDateString(culture, { weekday: "long", day: "numeric", month: "long", year: "numeric" }) +
                    " - " +
                    value.toLocaleDateString(culture, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
                break;
            case "month":
                res = value.toLocaleDateString(culture, { month: "long", year: "numeric" });
                break;
            case "weekLabel":
                res = value.toLocaleDateString(culture, { month: "short", day: "2-digit" });
                break;
            case "weekDay":
                res = value.toLocaleDateString(culture, { weekday: "long" });
                break;
            case "timeHint":
                res = value.toLocaleTimeString(culture, { hour: "2-digit", minute: "2-digit" }) +
                    " - " +
                    value2.toLocaleTimeString(culture, { hour: "2-digit", minute: "2-digit" });
                break;
        }
        return res;

    }
} 
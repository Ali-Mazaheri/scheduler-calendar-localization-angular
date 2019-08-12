import { DayOfWeek, IConfigurations } from "./CommonInterfacesAndEnums";
import { NgModule, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterMoudule } from "./Router.Module";
import { Navigation } from "./Navigation";

import { MonthCell } from "./Components/MonthCell";
import { WeekCell } from "./Components/WeekCell";
import { DayCell } from "./Components/DayCell";
import { DaySubCell } from "./Components/DaySubCell";
import { DateNavigation } from "./Components/DateNavigation";
import { WeeklyView } from "./Components/WeeklyView";
import { DailyView } from "./Components/DailyView";
import { DailyContent } from "./Components/DailyContent";

import { ModalWindow } from "./Components/ModalWindow";

import { DayDataStore } from "./Services/DayDataStore";
import { DateFormatPipe } from "./Pipes/DateFormatPipe";
import { LocalizationPipe } from "./Pipes/LocalizationPipe";


//enableProdMode();

var configuration: IConfigurations = {
    dbVersion: "10",
    startTime: 9,
    endTime: 16,
    repeatEveryMinute: 60,
    durationInMinute: 40,
    startOfWeek: DayOfWeek.Monday,
    culture: window.localStorage.getItem("lang-code") || "en-ca"
};

@NgModule({
    imports: [BrowserModule, RouterMoudule],
    declarations: [ModalWindow, Navigation, DateNavigation, MonthCell, WeekCell, DayCell, DaySubCell, WeeklyView, DailyView, DailyContent, DateFormatPipe, LocalizationPipe],
    bootstrap: [Navigation],
    providers: [
        DayDataStore,
        { provide: "Configuration", useValue: configuration }
    ]
})
export class AppModule {
}

import { Route, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"

import { MonthCell } from "./Components/MonthCell"
import { WeeklyView } from "./Components/WeeklyView"
import { DailyView } from "./Components/DailyView"

var route: Route[] = [
    { path: '', redirectTo: "monthly", pathMatch: 'full' },
    { path: 'monthly', component: MonthCell },
    { path: 'monthly/:month', component: MonthCell },
    { path: 'weekly', component: WeeklyView },
    { path: 'weekly/:week', component: WeeklyView },
    { path: 'daily', component: DailyView },
    { path: 'daily/:date', component: DailyView },
    { path: '**', redirectTo: "monthly", pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule],
})
export class RouterMoudule {

}
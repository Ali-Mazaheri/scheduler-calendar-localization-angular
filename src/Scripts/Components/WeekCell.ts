import { ICellData } from "../CommonInterfacesAndEnums";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "weekcell",
    templateUrl: "../../staticViews/components/WeekCell.html",
    styleUrls: ["../../Styles/WeekCell.css"]

})
export class WeekCell implements OnInit {
    @Input("days") days: ICellData[];
    weekLabel: string = "";
    routeParam: string = "";

    ngOnInit() {
        this.routeParam = this._getRoutingParameter(this.days[0].date);
    }
    _getRoutingParameter(date: Date): string {
        return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    }
}

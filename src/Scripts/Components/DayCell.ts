import { IDayCellData, ICellData } from "../CommonInterfacesAndEnums";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { DayDataStore } from "../Services/DayDataStore";

@Component({
    selector: "daycell",
    templateUrl: "../../staticViews/components/DayCell.html",
    styleUrls: ["../../Styles/DayCell.css"]
})
export class DayCell implements OnInit {
    @Input("day") day: ICellData;
    classN: string = "offMonth";
    dayInfo: string = "";
    cellDetails: IDayCellData[] = [];
    activeCell: boolean = true;
    constructor( @Inject(DayDataStore) private dayStore: DayDataStore) {
    }
    ngOnInit(): void {
        var today = new Date();
        var cellDay = this.day.date;
        this.dayInfo = `${cellDay.getFullYear()}-${("0" + (cellDay.getMonth() + 1)).slice(-2)}-${("0" + cellDay.getDate()).slice(-2)}`;

        var toMonth = new Date(today.valueOf());
        toMonth.setHours(0, 0, 0, 0);
        toMonth.setDate(1);

        var cellMonth = new Date(cellDay.valueOf());
        cellMonth.setHours(0, 0, 0, 0);
        cellMonth.setDate(1);

        this.activeCell = (cellDay.valueOf() > today.valueOf());
        var dayClass = this.activeCell ? "available" : "passed";

        if (cellMonth.valueOf() > toMonth.valueOf()) {
            dayClass = "nextMonth";
        }
        if (cellMonth.valueOf() < toMonth.valueOf()) {
            dayClass = "previousMonth";
            this.activeCell = false;
        }

        this.classN = dayClass;

        this._updateDayInfo();
    }

    _updateDayInfo(): void {
        this.cellDetails = this.dayStore.getDayData(this.day.date);
    }
}

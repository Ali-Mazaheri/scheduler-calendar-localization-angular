import { IDayCellData } from "../CommonInterfacesAndEnums";
import { Component, Input, Inject, DoCheck, OnChanges, SimpleChanges, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DayDataStore } from "../Services/DayDataStore";

@Component({
    selector: "dailycontent",
    templateUrl: "../../staticViews/components/DailyContent.html",
    styleUrls: ["../../Styles/DailyContent.css"]
})
export class DailyContent implements DoCheck, OnChanges, OnInit {
    @Input("currentDate") currentDate: Date;
    @Input("displayDateFormat") displayDateFormat: string;
    dayInfo: string;
    availabilities: IDayCellData[] = [];
    constructor( @Inject(DayDataStore) private dayStore: DayDataStore) {
    }

    ngOnInit(): void {
        this.dayInfo = `${this.currentDate.getFullYear()}-${("0" + (this.currentDate.getMonth() + 1)).slice(-2)}-${("0" + this.currentDate.getDate()).slice(-2)}`;
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes["currentDate"]) {
            if (this.currentDate.constructor.toString().indexOf("Date") < 0) {
                this.currentDate = new Date();
                this.currentDate.setHours(0, 0, 0, 0);
            }
            this._createAvailability();
        }
    }

    ngDoCheck(): void {
        this._save();
    }

    _createAvailability(): void {
        this.availabilities = this.dayStore.getDayData(this.currentDate);
    }

    _save(): void {
        this.dayStore.saveData(this.currentDate, this.availabilities);
    }
}
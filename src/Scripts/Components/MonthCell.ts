import { ICellData, IConfigurations, TimeConstant } from "../CommonInterfacesAndEnums";
import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "monthcell",
    templateUrl: "../../staticViews/components/MonthCell.html",
    styleUrls: ["../../Styles/MonthCell.css"]
})
export class MonthCell implements OnInit {
    weeks: ICellData[][] = [];
    currentDate: Date;
    subscribtionHandler: any;
    constructor(
        @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute,
        @Inject(Router) private router: Router,
        @Inject("Configuration") private configuration: IConfigurations) {
    }

    ngOnInit(): void {
        this.subscribtionHandler = this.activatedRoute.params.subscribe(params => {
            var parameters: any[] = (params["month"] && params["month"].split("-")) || [];
            var isValidParams: boolean = parameters.reduce((x: boolean, y: number) => x && !isNaN(y), !!parameters.length);
            if (isValidParams) {
                this.currentDate = new Date(parameters[0], parameters[1] - 1, 1, 0, 0, 0, 0);
            } else {
                this.currentDate = new Date();
                this.currentDate.setDate(1);
            }
            this._prepareData();
        });
    }

    ngOnDestroy(): void {
        this.subscribtionHandler.unsubscribe();
    }
    _prepareData(): void {
        var dayCellArray: ICellData[] = [];
        var dayCellByWeek: ICellData[][] = [];

        var month: number = this.currentDate.getMonth();
        var year: number = this.currentDate.getFullYear();
        var oneDay: number = TimeConstant.day;
        var newDate: Date = new Date(year, month, 1, 0, 0, 0, 0); // first of the month
        var endOfTheMonth: Date = new Date(year, month + 1, 0, 0, 0, 0, 0); // end of the month

        var ind: number = 0;
        while (newDate.getDay() !== this.configuration.startOfWeek) {
            newDate = new Date(newDate.valueOf() - oneDay);
            dayCellArray.unshift({ date: newDate });
            ind++;
        }
        newDate = new Date(newDate.valueOf() + oneDay * ind);
        while (newDate.valueOf() <= endOfTheMonth.valueOf()) {
            dayCellArray.push({ date: newDate });
            newDate = new Date(newDate.valueOf() + oneDay);
        }
        while (newDate.getDay() !== this.configuration.startOfWeek) {
            dayCellArray.push({ date: newDate });
            newDate = new Date(newDate.valueOf() + oneDay);
        }

        var cc: number = 0;
        dayCellArray.forEach((item: ICellData, index: number) => {
            ind = Math.floor((index - cc) / 7);
            if (!index || (dayCellArray[index].date.getDate() !== dayCellArray[index - 1].date.getDate())) {
                if (dayCellByWeek[ind]) {

                    dayCellByWeek[ind].push(item);

                } else {
                    dayCellByWeek[ind] = [item];
                }
            } else {
                cc = 1;
            }
        });
        this.weeks = dayCellByWeek;
    }
}
import { IConfigurations } from "../CommonInterfacesAndEnums";
import { Component, Input, Inject, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "datenavigation",
    templateUrl: "../../staticViews/components/DateNavigation.html",
    styleUrls: ["../../Styles/DateNavigation.css"]
})
export class DateNavigation implements OnInit, OnDestroy {
    @Input("inputType") inputType: string;
    @Input("routePath") routePath: string;
    @Input("currentDate") currentDate: Date;
    pikerType: string = "date";
    showPicker: boolean = false;
    pickerValue: string = "";
    private subscribtionHandler: any;
    constructor(
        @Inject(Router) private router: Router,
        @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute,
        @Inject("Configuration") private configuration: IConfigurations) {
    }

    ngOnInit(): void {

        this.subscribtionHandler = this.activatedRoute.params.subscribe(params => {
            this.pikerType = (this.inputType === "month") ? "month" : "date";
            this.showPicker = false;
            var date: Date = new Date();

            var CParam: string = params["date"] || params["month"] || params["week"];
            var parameters: any[] = (CParam && CParam.split("-")) || [];
            var isValidParams: boolean = parameters.reduce((x: boolean, y: number) => x && !isNaN(y), !!parameters.length);

            if (isValidParams) {
                date = new Date(parameters[0], parameters[1] - 1, parameters[2] ? parameters[2] : 1);
            }

            this.pickerValue = this._getPickerValue(this._getRoutingParameter(date));
        });
    }

    _getPickerValue(rawParam: string): string {
        if (this.inputType === "month") {
            return rawParam.slice(0, 7);
        } else if (this.inputType === "date" || this.inputType === "week") {
            return rawParam;
        }
    }

    ngOnDestroy(): void {
        this.subscribtionHandler.unsubscribe();
    }

    onChanged(routeParam: string): void {
        var date: Date = new Date();
        if (routeParam && routeParam.length) {
            var params: any[] = routeParam.split("-");
            date = new Date(params[0], params[1] - 1, params[2] ? params[2] : 1);
        }

        if (this.inputType === "week") {
            date = this._getStartOfWeek(date);
        }

        this.router.navigate([this.routePath, this._getRoutingParameter(date)]);
    }

    _getRoutingParameter(date: Date): string {
        return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    }

    goForward(): void {
        if (this.inputType === "date") {
            this.currentDate.setDate(this.currentDate.getDate() + 1);
        } else if (this.inputType === "month") {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        } else if (this.inputType === "week") {
            this.currentDate.setDate(this.currentDate.getDate() + 7);
        }
        this.goToDate(this.currentDate);
    }

    goBack(): void {
        if (this.inputType === "date") {
            this.currentDate.setDate(this.currentDate.getDate() - 1);
        } else if (this.inputType === "month") {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        } else if (this.inputType === "week") {
            this.currentDate.setDate(this.currentDate.getDate() - 7);
        }
        this.goToDate(this.currentDate);
    }

    goToDate(date: Date): void {
        if (this.inputType === "week") {
            date = this._getStartOfWeek(date);
        }

        var month: any = date.getMonth() + 1;
        var year: number = this.currentDate.getFullYear();
        var navigationPayload: string = "";
        if (this.inputType === "date" || this.inputType === "week") {

            var day: string = ("0" + date.getDate()).slice(-2);
            month = ("0" + month).slice(-2);
            navigationPayload = `${year}-${month}-${day}`;

        } else if (this.inputType === "month") {

            if (month > 12) {
                year += parseInt((month / 12).toString(), 10);
                month -= 12;
            }
            month = ("0" + month).slice(-2);
            navigationPayload = `${year}-${month}`;
        }

        this.router.navigate([this.routePath, navigationPayload]);

    }

    _getStartOfWeek(date: Date): Date {
        var day: number = date.getDay();

        while (day !== this.configuration.startOfWeek) {
            date.setDate(date.getDate() - 1);
            day = date.getDay();
        }

        return date;
    }
}
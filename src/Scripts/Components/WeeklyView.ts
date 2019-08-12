import { IConfigurations } from "../CommonInterfacesAndEnums";
import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "weeklyview",
    templateUrl: "../../staticViews/components/WeeklyView.html",
    styleUrls: ["../../Styles/WeeklyView.css"]
})
export class WeeklyView implements OnInit, OnDestroy {
    private subscribtionHandler: any;
    startOfWeek: Date = null; // startOfWeek
    weekDays: Date[] = [];
    constructor(
        @Inject(ActivatedRoute) private route: ActivatedRoute,
        @Inject(Router) private router: Router,
        @Inject("Configuration") private configuration: IConfigurations) {
    }

    ngOnInit(): void {
        this.subscribtionHandler = this.route.params.subscribe(params => {
            var parameters: any[] = (params["week"] && params["week"].split("-")) || [];
            var isValidParams: boolean = parameters.reduce((x: boolean, y: number) => x && !isNaN(y), !!parameters.length);
            var startOfWeek: Date;
            if (isValidParams) {
                startOfWeek = new Date(parameters[0], parameters[1] - 1, parameters[2], 0, 0, 0, 0);
            } else {
                var today: Date = new Date();
                today.setHours(0, 0, 0, 0);
                startOfWeek = today;
            }

            this.startOfWeek = this._getStartOfWeek(startOfWeek);;
            var weekDays: Date[] = [new Date(this.startOfWeek.valueOf())];
            for (var i: number = 0; i < 6; i++) {
                weekDays.push(new Date(this.startOfWeek.setDate(this.startOfWeek.getDate() + 1)));
            }
            this.weekDays = weekDays;

        });
    }

    ngOnDestroy(): void {
        this.subscribtionHandler.unsubscribe();
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
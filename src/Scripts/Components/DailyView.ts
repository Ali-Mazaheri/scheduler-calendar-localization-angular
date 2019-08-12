import { Component, Input, OnInit, OnDestroy, Inject } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'dailyview',
    templateUrl: '../../staticViews/components/DailyView.html',
    styleUrls: ['../../Styles/DailyView.css']
})
export class DailyView implements OnInit, OnDestroy {
    private subscribtionHandler: any;
    currentDate: Date;
    constructor(
        @Inject(ActivatedRoute) private route: ActivatedRoute,
        @Inject(Router) private router: Router) {
    }

    ngOnInit() {
        this.subscribtionHandler = this.route.params.subscribe(params => {
            var parameters: any[] = (params['date'] && params['date'].split('-')) || [];
            var isValidParams = parameters.reduce((x, y) => x && !isNaN(y), !!parameters.length);
            if (isValidParams) {
                this.currentDate = new Date(parameters[0], parameters[1] - 1, parameters[2], 0, 0, 0, 0);
            } else {
                var today = new Date();
                today.setHours(0, 0, 0, 0);
                this.currentDate = today;
            }

        });
    }

    ngOnDestroy() {
        this.subscribtionHandler.unsubscribe();
    }
}
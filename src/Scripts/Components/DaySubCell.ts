import { IDayCellData } from "../CommonInterfacesAndEnums";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "daysubcell",
    template: `<hr [title]="(status.startTime|DateFormat:'timeHint':status.endTime)+ ' --> ' + status.comment " [style.border]="border"/>`,
    styles: [":host(.hide) hr{filter: grayscale(60%);} hr{margin: 3px 5px; border-radius: 20px;}"]
})
export class DaySubCell implements OnInit {
    @Input("status") status: IDayCellData;

    isNotAvailable: boolean;
    title: string;
    border: string;

    ngOnInit(): void {
        this.isNotAvailable = this.status.isNotAvailable;
        this.border = this.status.isNotAvailable ? "solid 2px red" : "solid 2px green";
    }
}
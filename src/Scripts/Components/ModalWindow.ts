import { Component, Input, HostBinding } from "@angular/core";

@Component({
    selector: "modalwindow",
    templateUrl: "../../staticViews/components/ModalWindow.html",
    styleUrls: ["../../Styles/ModalWindow.css"]
})
export class ModalWindow {
    @HostBinding("class") className: string = "clsHide";
    @Input("leftBtnName") leftBtnName: string = "";
    @Input("rightBtnName") rightBtnName: string = "";
    @Input("leftBtnVisibility") leftBtnVisibility: boolean = false;
    @Input("rightBtnVisibility") rightBtnVisibility: boolean = false;
    @Input("title") title: string = "";

    show(): void {
        this.className = "clsShow";
    }

    hide(): void {
        this.className = "clsHide";
    }

    rightBtnClicked(): void {
        this.hide();
    }

    leftBtnClicked(): void {
        this.hide();
    }
}
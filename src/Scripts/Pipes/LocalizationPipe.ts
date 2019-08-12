import { IConfigurations } from "../CommonInterfacesAndEnums";
import { Pipe, PipeTransform, Inject } from "@angular/core";

@Pipe({
    name: "Localization",
    pure: true
})
export class LocalizationPipe implements PipeTransform {
    constructor(
        @Inject("Configuration") private configuration: IConfigurations) {
        this.targetLang = (this.configuration.culture.split("-")[0]) || "en";
    }
    static cache: { [key: string]: string } = {};
    sourceLang = "en";
    targetLang = "en";
    baseUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=";
    transform(value: string): Promise<string> {
        return new Promise((x, y) => {

            if (!LocalizationPipe.cache[value]) {
                if (window.navigator.onLine && this.targetLang.indexOf("en") < 0) {
                    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + this.sourceLang + "&tl=" + this.targetLang + "&dt=t&q=" + encodeURI(value);
                    (<any>window).fetch(url).then((x: any) => x.text()).then((y: string) => {
                        var res = eval(y)[0][0][0];
                        LocalizationPipe.cache[value] = res;
                        x(res);
                    })
                } else {
                    x(value);
                }
            } else {
                x(LocalizationPipe.cache[value]);
            }
        });
    }
} 
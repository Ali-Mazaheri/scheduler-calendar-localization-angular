import { Component, ViewChild } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { ModalWindow } from "./Components/ModalWindow"

@Component({
    selector: 'navigation',
    templateUrl: '../staticViews/Navigation.html',
    styleUrls: ['../Styles/Navigation.css']
})
export class Navigation {
    langCodes = langCode;
    slectedLang = localStorage.getItem('lang-code') || 'en-CA';
    @ViewChild(ModalWindow) modal: ModalWindow;
    applyCulture(code) {
        localStorage.setItem('lang-code', code);
        if ((<any>window).isPlunker) {
            this.modal.show();
        } else {
            location.reload();
        }
    }

}


//Kind of dity!!!
var langCode = [
    {
        "languageCultureCode": "af-ZA",
        "displayName": "Afrikaans-South Africa"
    },
    {
        "languageCultureCode": "sq-AL",
        "displayName": "Albanian-Albania"
    },
    {
        "languageCultureCode": "ar-DZ",
        "displayName": "Arabic-Algeria"
    },
    {
        "languageCultureCode": "ar-BH",
        "displayName": "Arabic-Bahrain"
    },
    {
        "languageCultureCode": "ar-EG",
        "displayName": "Arabic-Egypt"
    },
    {
        "languageCultureCode": "ar-IQ",
        "displayName": "Arabic-Iraq"
    },
    {
        "languageCultureCode": "ar-JO",
        "displayName": "Arabic-Jordan"
    },
    {
        "languageCultureCode": "ar-KW",
        "displayName": "Arabic-Kuwait"
    },
    {
        "languageCultureCode": "ar-LB",
        "displayName": "Arabic-Lebanon"
    },
    {
        "languageCultureCode": "ar-LY",
        "displayName": "Arabic-Libya"
    },
    {
        "languageCultureCode": "ar-MA",
        "displayName": "Arabic-Morocco"
    },
    {
        "languageCultureCode": "ar-OM",
        "displayName": "Arabic-Oman"
    },
    {
        "languageCultureCode": "ar-QA",
        "displayName": "Arabic-Qatar"
    },
    {
        "languageCultureCode": "ar-SA",
        "displayName": "Arabic-Saudi Arabia"
    },
    {
        "languageCultureCode": "ar-SY",
        "displayName": "Arabic-Syria"
    },
    {
        "languageCultureCode": "ar-TN",
        "displayName": "Arabic-Tunisia"
    },
    {
        "languageCultureCode": "ar-AE",
        "displayName": "Arabic-United Arab Emirates"
    },
    {
        "languageCultureCode": "ar-YE",
        "displayName": "Arabic-Yemen"
    },
    {
        "languageCultureCode": "hy-AM",
        "displayName": "Armenian-Armenia"
    },
    {
        "languageCultureCode": "eu-ES",
        "displayName": "Basque-Basque"
    },
    {
        "languageCultureCode": "be-BY",
        "displayName": "Belarusian-Belarus"
    },
    {
        "languageCultureCode": "bg-BG",
        "displayName": "Bulgarian-Bulgaria"
    },
    {
        "languageCultureCode": "ca-ES",
        "displayName": "Catalan-Catalan"
    },
    {
        "languageCultureCode": "zh-CN",
        "displayName": "Chinese-China"
    },
    {
        "languageCultureCode": "zh-HK",
        "displayName": "Chinese-Hong Kong SAR"
    },
    {
        "languageCultureCode": "zh-MO",
        "displayName": "Chinese-Macau SAR"
    },
    {
        "languageCultureCode": "zh-SG",
        "displayName": "Chinese-Singapore"
    },
    {
        "languageCultureCode": "zh-TW",
        "displayName": "Chinese-Taiwan"
    },
    {
        "languageCultureCode": "zh-CHS",
        "displayName": "Chinese (Simplified)"
    },
    {
        "languageCultureCode": "zh-CHT",
        "displayName": "Chinese (Traditional)"
    },
    {
        "languageCultureCode": "hr-HR",
        "displayName": "Croatian-Croatia"
    },
    {
        "languageCultureCode": "cs-CZ",
        "displayName": "Czech-Czech Republic"
    },
    {
        "languageCultureCode": "da-DK",
        "displayName": "Danish-Denmark"
    },
    {
        "languageCultureCode": "div-MV",
        "displayName": "Dhivehi-Maldives"
    },
    {
        "languageCultureCode": "nl-BE",
        "displayName": "Dutch-Belgium"
    },
    {
        "languageCultureCode": "nl-NL",
        "displayName": "Dutch-The Netherlands"
    },
    {
        "languageCultureCode": "en-AU",
        "displayName": "English-Australia"
    },
    {
        "languageCultureCode": "en-BZ",
        "displayName": "English-Belize"
    },
    {
        "languageCultureCode": "en-CA",
        "displayName": "English-Canada"
    },
    {
        "languageCultureCode": "en-CB",
        "displayName": "English-Caribbean"
    },
    {
        "languageCultureCode": "en-IE",
        "displayName": "English-Ireland"
    },
    {
        "languageCultureCode": "en-JM",
        "displayName": "English-Jamaica"
    },
    {
        "languageCultureCode": "en-NZ",
        "displayName": "English-New Zealand"
    },
    {
        "languageCultureCode": "en-PH",
        "displayName": "English-Philippines"
    },
    {
        "languageCultureCode": "en-ZA",
        "displayName": "English-South Africa"
    },
    {
        "languageCultureCode": "en-TT",
        "displayName": "English-Trinidad and Tobago"
    },
    {
        "languageCultureCode": "en-GB",
        "displayName": "English-United Kingdom"
    },
    {
        "languageCultureCode": "en-US",
        "displayName": "English-United States"
    },
    {
        "languageCultureCode": "en-ZW",
        "displayName": "English-Zimbabwe"
    },
    {
        "languageCultureCode": "et-EE",
        "displayName": "Estonian-Estonia"
    },
    {
        "languageCultureCode": "fa-IR",
        "displayName": "Farsi-Iran"
    },
    {
        "languageCultureCode": "fi-FI",
        "displayName": "Finnish-Finland"
    },
    {
        "languageCultureCode": "fr-BE",
        "displayName": "French-Belgium"
    },
    {
        "languageCultureCode": "fr-CA",
        "displayName": "French-Canada"
    },
    {
        "languageCultureCode": "fr-FR",
        "displayName": "French-France"
    },
    {
        "languageCultureCode": "fr-LU",
        "displayName": "French-Luxembourg"
    },
    {
        "languageCultureCode": "fr-MC",
        "displayName": "French-Monaco"
    },
    {
        "languageCultureCode": "fr-CH",
        "displayName": "French-Switzerland"
    },
    {
        "languageCultureCode": "gl-ES",
        "displayName": "Galician-Galician"
    },
    {
        "languageCultureCode": "ka-GE",
        "displayName": "Georgian-Georgia"
    },
    {
        "languageCultureCode": "de-AT",
        "displayName": "German-Austria"
    },
    {
        "languageCultureCode": "de-DE",
        "displayName": "German-Germany"
    },
    {
        "languageCultureCode": "de-LI",
        "displayName": "German-Liechtenstein"
    },
    {
        "languageCultureCode": "de-LU",
        "displayName": "German-Luxembourg"
    },
    {
        "languageCultureCode": "de-CH",
        "displayName": "German-Switzerland"
    },
    {
        "languageCultureCode": "el-GR",
        "displayName": "Greek-Greece"
    },
    {
        "languageCultureCode": "gu-IN",
        "displayName": "Gujarati-India"
    },
    {
        "languageCultureCode": "he-IL",
        "displayName": "Hebrew-Israel"
    },
    {
        "languageCultureCode": "hi-IN",
        "displayName": "Hindi-India"
    },
    {
        "languageCultureCode": "hu-HU",
        "displayName": "Hungarian-Hungary"
    },
    {
        "languageCultureCode": "is-IS",
        "displayName": "Icelandic-Iceland"
    },
    {
        "languageCultureCode": "id-ID",
        "displayName": "Indonesian-Indonesia"
    },
    {
        "languageCultureCode": "it-IT",
        "displayName": "Italian-Italy"
    },
    {
        "languageCultureCode": "it-CH",
        "displayName": "Italian-Switzerland"
    },
    {
        "languageCultureCode": "ja-JP",
        "displayName": "Japanese-Japan"
    },
    {
        "languageCultureCode": "kn-IN",
        "displayName": "Kannada-India"
    },
    {
        "languageCultureCode": "kk-KZ",
        "displayName": "Kazakh-Kazakhstan"
    },
    {
        "languageCultureCode": "kok-IN",
        "displayName": "Konkani-India"
    },
    {
        "languageCultureCode": "ko-KR",
        "displayName": "Korean-Korea"
    },
    {
        "languageCultureCode": "ky-KZ",
        "displayName": "Kyrgyz-Kazakhstan"
    },
    {
        "languageCultureCode": "lv-LV",
        "displayName": "Latvian-Latvia"
    },
    {
        "languageCultureCode": "lt-LT",
        "displayName": "Lithuanian-Lithuania"
    },
    {
        "languageCultureCode": "mk-MK",
        "displayName": "Macedonian (FYROM)"
    },
    {
        "languageCultureCode": "ms-BN",
        "displayName": "Malay-Brunei"
    },
    {
        "languageCultureCode": "ms-MY",
        "displayName": "Malay-Malaysia"
    },
    {
        "languageCultureCode": "mr-IN",
        "displayName": "Marathi-India"
    },
    {
        "languageCultureCode": "mn-MN",
        "displayName": "Mongolian-Mongolia"
    },
    {
        "languageCultureCode": "nb-NO",
        "displayName": "Norwegian (Bokmål)-Norway"
    },
    {
        "languageCultureCode": "nn-NO",
        "displayName": "Norwegian (Nynorsk)-Norway"
    },
    {
        "languageCultureCode": "pl-PL",
        "displayName": "Polish-Poland"
    },
    {
        "languageCultureCode": "pt-BR",
        "displayName": "Portuguese-Brazil"
    },
    {
        "languageCultureCode": "pt-PT",
        "displayName": "Portuguese-Portugal"
    },
    {
        "languageCultureCode": "pa-IN",
        "displayName": "Punjabi-India"
    },
    {
        "languageCultureCode": "ro-RO",
        "displayName": "Romanian-Romania"
    },
    {
        "languageCultureCode": "ru-RU",
        "displayName": "Russian-Russia"
    },
    {
        "languageCultureCode": "sa-IN",
        "displayName": "Sanskrit-India"
    },
    {
        "languageCultureCode": "sk-SK",
        "displayName": "Slovak-Slovakia"
    },
    {
        "languageCultureCode": "sl-SI",
        "displayName": "Slovenian-Slovenia"
    },
    {
        "languageCultureCode": "es-AR",
        "displayName": "Spanish-Argentina"
    },
    {
        "languageCultureCode": "es-BO",
        "displayName": "Spanish-Bolivia"
    },
    {
        "languageCultureCode": "es-CL",
        "displayName": "Spanish-Chile"
    },
    {
        "languageCultureCode": "es-CO",
        "displayName": "Spanish-Colombia"
    },
    {
        "languageCultureCode": "es-CR",
        "displayName": "Spanish-Costa Rica"
    },
    {
        "languageCultureCode": "es-DO",
        "displayName": "Spanish-Dominican Republic"
    },
    {
        "languageCultureCode": "es-EC",
        "displayName": "Spanish-Ecuador"
    },
    {
        "languageCultureCode": "es-SV",
        "displayName": "Spanish-El Salvador"
    },
    {
        "languageCultureCode": "es-GT",
        "displayName": "Spanish-Guatemala"
    },
    {
        "languageCultureCode": "es-HN",
        "displayName": "Spanish-Honduras"
    },
    {
        "languageCultureCode": "es-MX",
        "displayName": "Spanish-Mexico"
    },
    {
        "languageCultureCode": "es-NI",
        "displayName": "Spanish-Nicaragua"
    },
    {
        "languageCultureCode": "es-PA",
        "displayName": "Spanish-Panama"
    },
    {
        "languageCultureCode": "es-PY",
        "displayName": "Spanish-Paraguay"
    },
    {
        "languageCultureCode": "es-PE",
        "displayName": "Spanish-Peru"
    },
    {
        "languageCultureCode": "es-PR",
        "displayName": "Spanish-Puerto Rico"
    },
    {
        "languageCultureCode": "es-ES",
        "displayName": "Spanish-Spain"
    },
    {
        "languageCultureCode": "es-UY",
        "displayName": "Spanish-Uruguay"
    },
    {
        "languageCultureCode": "es-VE",
        "displayName": "Spanish-Venezuela"
    },
    {
        "languageCultureCode": "sw-KE",
        "displayName": "Swahili-Kenya"
    },
    {
        "languageCultureCode": "sv-FI",
        "displayName": "Swedish-Finland"
    },
    {
        "languageCultureCode": "sv-SE",
        "displayName": "Swedish-Sweden"
    },
    {
        "languageCultureCode": "ta-IN",
        "displayName": "Tamil-India"
    },
    {
        "languageCultureCode": "te-IN",
        "displayName": "Telugu-India"
    },
    {
        "languageCultureCode": "th-TH",
        "displayName": "Thai-Thailand"
    },
    {
        "languageCultureCode": "tr-TR",
        "displayName": "Turkish-Turkey"
    },
    {
        "languageCultureCode": "uk-UA",
        "displayName": "Ukrainian-Ukraine"
    },
    {
        "languageCultureCode": "ur-PK",
        "displayName": "Urdu-Pakistan"
    },
    {
        "languageCultureCode": "vi-VN",
        "displayName": "Vietnamese-Vietnam"
    }
];
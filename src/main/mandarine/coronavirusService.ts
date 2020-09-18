import { Service } from "https://deno.land/x/mandarinets@v2.0.0/mod.ts";

class DataCoronavirus {
    public continent: string;
    public country: string;
    public population: number;
    public cases: object;
    public deaths: object;
    public tests: object;
    public day: string;
    public time: string;
}

@Service()
export class CoronavirusService {
    dataCoronavirus: Array<DataCoronavirus>;
    constructor(){
        this.dataCoronavirus =
        [
            {
                "continent": "Asia",
                "country": "China",
                "population": 1439323776,
                "cases": {
                    "new": "+32",
                    "active": 165,
                    "critical": 3,
                    "recovered": 80456,
                    "1M_pop": "59",
                    "total": 85255
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "3",
                    "total": 4634
                },
                "tests": {
                    "1M_pop": "111163",
                    "total": 160000000
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Italy",
                "population": 60442647,
                "cases": {
                    "new": "+1585",
                    "active": 41413,
                    "critical": 212,
                    "recovered": 215954,
                    "1M_pop": "4848",
                    "total": 293025
                },
                "deaths": {
                    "new": "+13",
                    "1M_pop": "590",
                    "total": 35658
                },
                "tests": {
                    "1M_pop": "167867",
                    "total": 10146324
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Spain",
                "population": 46758670,
                "cases": {
                    "new": "+11291",
                    "active": 0,
                    "critical": 1331,
                    "recovered": 0,
                    "1M_pop": "13380",
                    "total": 625651
                },
                "deaths": {
                    "new": "+162",
                    "1M_pop": "650",
                    "total": 30405
                },
                "tests": {
                    "1M_pop": "230050",
                    "total": 10756835
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "USA",
                "population": 331420450,
                "cases": {
                    "new": "+46295",
                    "active": 2517344,
                    "critical": 14227,
                    "recovered": 4155039,
                    "1M_pop": "20743",
                    "total": 6874596
                },
                "deaths": {
                    "new": "+879",
                    "1M_pop": "610",
                    "total": 202213
                },
                "tests": {
                    "1M_pop": "287354",
                    "total": 95235022
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Germany",
                "population": 83841193,
                "cases": {
                    "new": "+2177",
                    "active": 18285,
                    "critical": 237,
                    "recovered": 241300,
                    "1M_pop": "3209",
                    "total": 269042
                },
                "deaths": {
                    "new": "+8",
                    "1M_pop": "113",
                    "total": 9457
                },
                "tests": {
                    "1M_pop": "173627",
                    "total": 14557136
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Iran",
                "population": 84218051,
                "cases": {
                    "new": "+2815",
                    "active": 35493,
                    "critical": 3848,
                    "recovered": 353848,
                    "1M_pop": "4906",
                    "total": 413149
                },
                "deaths": {
                    "new": "+176",
                    "1M_pop": "283",
                    "total": 23808
                },
                "tests": {
                    "1M_pop": "43548",
                    "total": 3667551
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "France",
                "population": 65304439,
                "cases": {
                    "new": "+10593",
                    "active": 293546,
                    "critical": 800,
                    "recovered": 90840,
                    "1M_pop": "6362",
                    "total": 415481
                },
                "deaths": {
                    "new": "+50",
                    "1M_pop": "476",
                    "total": 31095
                },
                "tests": {
                    "1M_pop": "153129",
                    "total": 10000000
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "S-Korea",
                "population": 51278779,
                "cases": {
                    "new": "+126",
                    "active": 2635,
                    "critical": 150,
                    "recovered": 19771,
                    "1M_pop": "444",
                    "total": 22783
                },
                "deaths": {
                    "new": "+5",
                    "1M_pop": "7",
                    "total": 377
                },
                "tests": {
                    "1M_pop": "43027",
                    "total": 2206365
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Switzerland",
                "population": 8668032,
                "cases": {
                    "new": "+530",
                    "active": 6853,
                    "critical": 27,
                    "recovered": 39900,
                    "1M_pop": "5629",
                    "total": 48795
                },
                "deaths": {
                    "new": "+3",
                    "1M_pop": "236",
                    "total": 2042
                },
                "tests": {
                    "1M_pop": "142780",
                    "total": 1237621
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "UK",
                "population": 67961895,
                "cases": {
                    "new": "+3395",
                    "active": 0,
                    "critical": 124,
                    "recovered": 0,
                    "1M_pop": "5615",
                    "total": 381614
                },
                "deaths": {
                    "new": "+21",
                    "1M_pop": "614",
                    "total": 41705
                },
                "tests": {
                    "1M_pop": "301952",
                    "total": 20521243
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Netherlands",
                "population": 17142990,
                "cases": {
                    "new": "+1753",
                    "active": 0,
                    "critical": 66,
                    "recovered": 0,
                    "1M_pop": "5138",
                    "total": 88073
                },
                "deaths": {
                    "new": "+6",
                    "1M_pop": "366",
                    "total": 6266
                },
                "tests": {
                    "1M_pop": "119167",
                    "total": 2042887
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Austria",
                "population": 9017323,
                "cases": {
                    "new": "+780",
                    "active": 7051,
                    "critical": 55,
                    "recovered": 28044,
                    "1M_pop": "3976",
                    "total": 35853
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "84",
                    "total": 758
                },
                "tests": {
                    "1M_pop": "154715",
                    "total": 1395111
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Belgium",
                "population": 11600376,
                "cases": {
                    "new": "+1153",
                    "active": 67203,
                    "critical": 74,
                    "recovered": 18810,
                    "1M_pop": "8271",
                    "total": 95948
                },
                "deaths": {
                    "new": "+5",
                    "1M_pop": "856",
                    "total": 9935
                },
                "tests": {
                    "1M_pop": "233779",
                    "total": 2711919
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Norway",
                "population": 5430329,
                "cases": {
                    "new": null,
                    "active": 2007,
                    "critical": 2,
                    "recovered": 10371,
                    "1M_pop": "2328",
                    "total": 12644
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "49",
                    "total": 266
                },
                "tests": {
                    "1M_pop": "170896",
                    "total": 928024
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Sweden",
                "population": 10112810,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 15,
                    "recovered": 0,
                    "1M_pop": "8690",
                    "total": 87885
                },
                "deaths": {
                    "new": "+5",
                    "1M_pop": "580",
                    "total": 5864
                },
                "tests": {
                    "1M_pop": "137762",
                    "total": 1393161
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Canada",
                "population": 37812954,
                "cases": {
                    "new": "+1120",
                    "active": 8558,
                    "critical": 76,
                    "recovered": 123109,
                    "1M_pop": "3725",
                    "total": 140867
                },
                "deaths": {
                    "new": "+7",
                    "1M_pop": "243",
                    "total": 9200
                },
                "tests": {
                    "1M_pop": "169838",
                    "total": 6422063
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Denmark",
                "population": 5796558,
                "cases": {
                    "new": "+453",
                    "active": 3840,
                    "critical": 3,
                    "recovered": 16918,
                    "1M_pop": "3691",
                    "total": 21393
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "110",
                    "total": 635
                },
                "tests": {
                    "1M_pop": "550666",
                    "total": 3191967
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Portugal",
                "population": 10190277,
                "cases": {
                    "new": "+770",
                    "active": 19714,
                    "critical": 59,
                    "recovered": 44794,
                    "1M_pop": "6516",
                    "total": 66396
                },
                "deaths": {
                    "new": "+10",
                    "1M_pop": "185",
                    "total": 1888
                },
                "tests": {
                    "1M_pop": "230188",
                    "total": 2345680
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Malaysia",
                "population": 32452825,
                "cases": {
                    "new": "+21",
                    "active": 674,
                    "critical": 13,
                    "recovered": 9250,
                    "1M_pop": "310",
                    "total": 10052
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "4",
                    "total": 128
                },
                "tests": {
                    "1M_pop": "43668",
                    "total": 1417154
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "South-America",
                "country": "Brazil",
                "population": 212883816,
                "cases": {
                    "new": "+35757",
                    "active": 569330,
                    "critical": 8318,
                    "recovered": 3753082,
                    "1M_pop": "20938",
                    "total": 4457443
                },
                "deaths": {
                    "new": "+857",
                    "1M_pop": "634",
                    "total": 135031
                },
                "tests": {
                    "1M_pop": "68666",
                    "total": 14617980
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Oceania",
                "country": "Australia",
                "population": 25562804,
                "cases": {
                    "new": "+51",
                    "active": 2234,
                    "critical": 16,
                    "recovered": 23793,
                    "1M_pop": "1051",
                    "total": 26864
                },
                "deaths": {
                    "new": "+5",
                    "1M_pop": "33",
                    "total": 837
                },
                "tests": {
                    "1M_pop": "281738",
                    "total": 7202011
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Japan",
                "population": 126392677,
                "cases": {
                    "new": "+561",
                    "active": 6283,
                    "critical": 167,
                    "recovered": 69253,
                    "1M_pop": "609",
                    "total": 77009
                },
                "deaths": {
                    "new": "+12",
                    "1M_pop": "12",
                    "total": 1473
                },
                "tests": {
                    "1M_pop": "14133",
                    "total": 1786342
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Czechia",
                "population": 10713238,
                "cases": {
                    "new": "+3123",
                    "active": 20289,
                    "critical": 91,
                    "recovered": 23377,
                    "1M_pop": "4122",
                    "total": 44155
                },
                "deaths": {
                    "new": "+7",
                    "1M_pop": "46",
                    "total": 489
                },
                "tests": {
                    "1M_pop": "104844",
                    "total": 1123221
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Turkey",
                "population": 84529937,
                "cases": {
                    "new": "+1648",
                    "active": 26979,
                    "critical": 1372,
                    "recovered": 263745,
                    "1M_pop": "3526",
                    "total": 298039
                },
                "deaths": {
                    "new": "+66",
                    "1M_pop": "87",
                    "total": 7315
                },
                "tests": {
                    "1M_pop": "106059",
                    "total": 8965165
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Israel",
                "population": 9197590,
                "cases": {
                    "new": "+4791",
                    "active": 47758,
                    "critical": 573,
                    "recovered": 126329,
                    "1M_pop": "19055",
                    "total": 175256
                },
                "deaths": {
                    "new": "+8",
                    "1M_pop": "127",
                    "total": 1169
                },
                "tests": {
                    "1M_pop": "318753",
                    "total": 2931763
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Ireland",
                "population": 4949376,
                "cases": {
                    "new": "+224",
                    "active": 6870,
                    "critical": 14,
                    "recovered": 23364,
                    "1M_pop": "6470",
                    "total": 32023
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "361",
                    "total": 1789
                },
                "tests": {
                    "1M_pop": "202378",
                    "total": 1001647
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": null,
                "country": "Diamond-Princess-",
                "population": null,
                "cases": {
                    "new": null,
                    "active": 82,
                    "critical": 10,
                    "recovered": 619,
                    "1M_pop": null,
                    "total": 712
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 11
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-04-09",
                "time": "2020-04-09T15:45:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Luxembourg",
                "population": 628094,
                "cases": {
                    "new": "+147",
                    "active": 776,
                    "critical": 1,
                    "recovered": 6641,
                    "1M_pop": "12006",
                    "total": 7541
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "197",
                    "total": 124
                },
                "tests": {
                    "1M_pop": "1222258",
                    "total": 767693
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Pakistan",
                "population": 221777121,
                "cases": {
                    "new": "+545",
                    "active": 6066,
                    "critical": 593,
                    "recovered": 291169,
                    "1M_pop": "1369",
                    "total": 303634
                },
                "deaths": {
                    "new": "+6",
                    "1M_pop": "29",
                    "total": 6399
                },
                "tests": {
                    "1M_pop": "13783",
                    "total": 3056795
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "South-America",
                "country": "Chile",
                "population": 19151322,
                "cases": {
                    "new": "+1863",
                    "active": 15080,
                    "critical": 895,
                    "recovered": 413928,
                    "1M_pop": "23035",
                    "total": 441150
                },
                "deaths": {
                    "new": "+84",
                    "1M_pop": "634",
                    "total": 12142
                },
                "tests": {
                    "1M_pop": "153653",
                    "total": 2942651
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Poland",
                "population": 37837676,
                "cases": {
                    "new": "+837",
                    "active": 11593,
                    "critical": 84,
                    "recovered": 62725,
                    "1M_pop": "2024",
                    "total": 76571
                },
                "deaths": {
                    "new": "+16",
                    "1M_pop": "60",
                    "total": 2253
                },
                "tests": {
                    "1M_pop": "80894",
                    "total": 3060844
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "South-America",
                "country": "Ecuador",
                "population": 17699585,
                "cases": {
                    "new": "+732",
                    "active": 14165,
                    "critical": 375,
                    "recovered": 97063,
                    "1M_pop": "6907",
                    "total": 122257
                },
                "deaths": {
                    "new": "+33",
                    "1M_pop": "623",
                    "total": 11029
                },
                "tests": {
                    "1M_pop": "20953",
                    "total": 370864
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Greece",
                "population": 10411998,
                "cases": {
                    "new": "+359",
                    "active": 10271,
                    "critical": 69,
                    "recovered": 3804,
                    "1M_pop": "1383",
                    "total": 14400
                },
                "deaths": {
                    "new": "+9",
                    "1M_pop": "31",
                    "total": 325
                },
                "tests": {
                    "1M_pop": "112398",
                    "total": 1170292
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Finland",
                "population": 5542566,
                "cases": {
                    "new": "+49",
                    "active": 760,
                    "critical": 3,
                    "recovered": 7700,
                    "1M_pop": "1588",
                    "total": 8799
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "61",
                    "total": 339
                },
                "tests": {
                    "1M_pop": "153648",
                    "total": 851605
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Qatar",
                "population": 2807805,
                "cases": {
                    "new": "+244",
                    "active": 2872,
                    "critical": 58,
                    "recovered": 119613,
                    "1M_pop": "43697",
                    "total": 122693
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "74",
                    "total": 208
                },
                "tests": {
                    "1M_pop": "252557",
                    "total": 709132
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Iceland",
                "population": 341719,
                "cases": {
                    "new": "+17",
                    "active": 84,
                    "critical": 0,
                    "recovered": 2112,
                    "1M_pop": "6456",
                    "total": 2206
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "29",
                    "total": 10
                },
                "tests": {
                    "1M_pop": "708702",
                    "total": 242177
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Indonesia",
                "population": 274132173,
                "cases": {
                    "new": "+3635",
                    "active": 56720,
                    "critical": 0,
                    "recovered": 166686,
                    "1M_pop": "849",
                    "total": 232628
                },
                "deaths": {
                    "new": "+122",
                    "1M_pop": "34",
                    "total": 9222
                },
                "tests": {
                    "1M_pop": "10203",
                    "total": 2796924
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Singapore",
                "population": 5860205,
                "cases": {
                    "new": "+18",
                    "active": 466,
                    "critical": 0,
                    "recovered": 57039,
                    "1M_pop": "9817",
                    "total": 57532
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "5",
                    "total": 27
                },
                "tests": {
                    "1M_pop": "426277",
                    "total": 2498073
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Thailand",
                "population": 69837459,
                "cases": {
                    "new": null,
                    "active": 107,
                    "critical": 1,
                    "recovered": 3325,
                    "1M_pop": "50",
                    "total": 3490
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "0.8",
                    "total": 58
                },
                "tests": {
                    "1M_pop": "10728",
                    "total": 749213
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Saudi-Arabia",
                "population": 34926695,
                "cases": {
                    "new": "+593",
                    "active": 16538,
                    "critical": 1180,
                    "recovered": 307207,
                    "1M_pop": "9395",
                    "total": 328144
                },
                "deaths": {
                    "new": "+30",
                    "1M_pop": "126",
                    "total": 4399
                },
                "tests": {
                    "1M_pop": "169417",
                    "total": 5917184
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Slovenia",
                "population": 2078999,
                "cases": {
                    "new": "+104",
                    "active": 1025,
                    "critical": 11,
                    "recovered": 2897,
                    "1M_pop": "1952",
                    "total": 4058
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "65",
                    "total": 136
                },
                "tests": {
                    "1M_pop": "92728",
                    "total": 192781
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Romania",
                "population": 19209726,
                "cases": {
                    "new": "+1679",
                    "active": 61134,
                    "critical": 460,
                    "recovered": 43244,
                    "1M_pop": "5658",
                    "total": 108690
                },
                "deaths": {
                    "new": "+27",
                    "1M_pop": "224",
                    "total": 4312
                },
                "tests": {
                    "1M_pop": "112478",
                    "total": 2160669
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "India",
                "population": 1382863649,
                "cases": {
                    "new": "+96793",
                    "active": 1018454,
                    "critical": 8944,
                    "recovered": 4109828,
                    "1M_pop": "3769",
                    "total": 5212686
                },
                "deaths": {
                    "new": "+1174",
                    "1M_pop": "61",
                    "total": 84404
                },
                "tests": {
                    "1M_pop": "43797",
                    "total": 60565728
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "South-America",
                "country": "Peru",
                "population": 33069039,
                "cases": {
                    "new": null,
                    "active": 125632,
                    "critical": 1452,
                    "recovered": 587717,
                    "1M_pop": "22510",
                    "total": 744400
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "939",
                    "total": 31051
                },
                "tests": {
                    "1M_pop": "108628",
                    "total": 3592221
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Bahrain",
                "population": 1713495,
                "cases": {
                    "new": "+705",
                    "active": 6885,
                    "critical": 40,
                    "recovered": 56087,
                    "1M_pop": "36877",
                    "total": 63189
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "127",
                    "total": 217
                },
                "tests": {
                    "1M_pop": "759366",
                    "total": 1301170
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Philippines",
                "population": 109886120,
                "cases": {
                    "new": "+3375",
                    "active": 63408,
                    "critical": 1048,
                    "recovered": 208096,
                    "1M_pop": "2514",
                    "total": 276289
                },
                "deaths": {
                    "new": "+53",
                    "1M_pop": "44",
                    "total": 4785
                },
                "tests": {
                    "1M_pop": "29438",
                    "total": 3234856
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Russia",
                "population": 145947910,
                "cases": {
                    "new": "+5762",
                    "active": 170352,
                    "critical": 2300,
                    "recovered": 895868,
                    "1M_pop": "7436",
                    "total": 1085281
                },
                "deaths": {
                    "new": "+144",
                    "1M_pop": "131",
                    "total": 19061
                },
                "tests": {
                    "1M_pop": "286054",
                    "total": 41748928
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Estonia",
                "population": 1326727,
                "cases": {
                    "new": "+22",
                    "active": 377,
                    "critical": 1,
                    "recovered": 2337,
                    "1M_pop": "2094",
                    "total": 2778
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "48",
                    "total": 64
                },
                "tests": {
                    "1M_pop": "136026",
                    "total": 180469
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Egypt",
                "population": 102733067,
                "cases": {
                    "new": "+141",
                    "active": 8768,
                    "critical": 41,
                    "recovered": 87158,
                    "1M_pop": "989",
                    "total": 101641
                },
                "deaths": {
                    "new": "+19",
                    "1M_pop": "56",
                    "total": 5715
                },
                "tests": {
                    "1M_pop": "1314",
                    "total": 135000
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Hong-Kong",
                "population": 7509846,
                "cases": {
                    "new": "+9",
                    "active": 210,
                    "critical": 14,
                    "recovered": 4682,
                    "1M_pop": "665",
                    "total": 4994
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "14",
                    "total": 102
                },
                "tests": {
                    "1M_pop": "370598",
                    "total": 2783134
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "South-Africa",
                "population": 59465326,
                "cases": {
                    "new": "+2128",
                    "active": 54497,
                    "critical": 539,
                    "recovered": 585303,
                    "1M_pop": "11024",
                    "total": 655572
                },
                "deaths": {
                    "new": "+67",
                    "1M_pop": "265",
                    "total": 15772
                },
                "tests": {
                    "1M_pop": "66989",
                    "total": 3983533
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Lebanon",
                "population": 6818813,
                "cases": {
                    "new": "+685",
                    "active": 16288,
                    "critical": 128,
                    "recovered": 10217,
                    "1M_pop": "3926",
                    "total": 26768
                },
                "deaths": {
                    "new": "+4",
                    "1M_pop": "39",
                    "total": 263
                },
                "tests": {
                    "1M_pop": "101075",
                    "total": 689210
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Iraq",
                "population": 40407380,
                "cases": {
                    "new": "+4326",
                    "active": 57953,
                    "critical": 586,
                    "recovered": 241100,
                    "1M_pop": "7607",
                    "total": 307385
                },
                "deaths": {
                    "new": "+84",
                    "1M_pop": "206",
                    "total": 8332
                },
                "tests": {
                    "1M_pop": "49454",
                    "total": 1998295
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Croatia",
                "population": 4099756,
                "cases": {
                    "new": "+250",
                    "active": 2108,
                    "critical": 24,
                    "recovered": 11933,
                    "1M_pop": "3483",
                    "total": 14279
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "58",
                    "total": 238
                },
                "tests": {
                    "1M_pop": "59244",
                    "total": 242886
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Mexico",
                "population": 129221511,
                "cases": {
                    "new": "+3182",
                    "active": 123518,
                    "critical": 2557,
                    "recovered": 488416,
                    "1M_pop": "5294",
                    "total": 684113
                },
                "deaths": {
                    "new": "+201",
                    "1M_pop": "559",
                    "total": 72179
                },
                "tests": {
                    "1M_pop": "11992",
                    "total": 1549643
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Panama",
                "population": 4329082,
                "cases": {
                    "new": "+672",
                    "active": 24044,
                    "critical": 152,
                    "recovered": 77881,
                    "1M_pop": "24055",
                    "total": 104138
                },
                "deaths": {
                    "new": "+15",
                    "1M_pop": "511",
                    "total": 2213
                },
                "tests": {
                    "1M_pop": "96468",
                    "total": 417620
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "South-America",
                "country": "Colombia",
                "population": 50996981,
                "cases": {
                    "new": "+7568",
                    "active": 104823,
                    "critical": 863,
                    "recovered": 615457,
                    "1M_pop": "14588",
                    "total": 743945
                },
                "deaths": {
                    "new": "+187",
                    "1M_pop": "464",
                    "total": 23665
                },
                "tests": {
                    "1M_pop": "64679",
                    "total": 3298415
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Slovakia",
                "population": 5460210,
                "cases": {
                    "new": "+161",
                    "active": 2694,
                    "critical": 22,
                    "recovered": 3288,
                    "1M_pop": "1103",
                    "total": 6021
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "7",
                    "total": 39
                },
                "tests": {
                    "1M_pop": "72802",
                    "total": 397513
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Kuwait",
                "population": 4283910,
                "cases": {
                    "new": "+825",
                    "active": 9338,
                    "critical": 94,
                    "recovered": 87911,
                    "1M_pop": "22835",
                    "total": 97824
                },
                "deaths": {
                    "new": "+4",
                    "1M_pop": "134",
                    "total": 575
                },
                "tests": {
                    "1M_pop": "162365",
                    "total": 695556
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Serbia",
                "population": 8729741,
                "cases": {
                    "new": "+82",
                    "active": 445,
                    "critical": 21,
                    "recovered": 31512,
                    "1M_pop": "3745",
                    "total": 32695
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "85",
                    "total": 738
                },
                "tests": {
                    "1M_pop": "120995",
                    "total": 1056256
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Bulgaria",
                "population": 6937028,
                "cases": {
                    "new": "+154",
                    "active": 4404,
                    "critical": 37,
                    "recovered": 13391,
                    "1M_pop": "2673",
                    "total": 18544
                },
                "deaths": {
                    "new": "+10",
                    "1M_pop": "108",
                    "total": 749
                },
                "tests": {
                    "1M_pop": "69601",
                    "total": 482823
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "San-Marino",
                "population": 33946,
                "cases": {
                    "new": "+1",
                    "active": 18,
                    "critical": 3,
                    "recovered": 663,
                    "1M_pop": "21299",
                    "total": 723
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "1237",
                    "total": 42
                },
                "tests": {
                    "1M_pop": "217316",
                    "total": 7377
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Armenia",
                "population": 2964430,
                "cases": {
                    "new": "+295",
                    "active": 3515,
                    "critical": 0,
                    "recovered": 42231,
                    "1M_pop": "15744",
                    "total": 46671
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "312",
                    "total": 925
                },
                "tests": {
                    "1M_pop": "85061",
                    "total": 252158
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "South-America",
                "country": "Argentina",
                "population": 45284429,
                "cases": {
                    "new": "+12701",
                    "active": 132906,
                    "critical": 3108,
                    "recovered": 456347,
                    "1M_pop": "13287",
                    "total": 601713
                },
                "deaths": {
                    "new": "+344",
                    "1M_pop": "275",
                    "total": 12460
                },
                "tests": {
                    "1M_pop": "36516",
                    "total": 1653616
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Taiwan",
                "population": 23826013,
                "cases": {
                    "new": "+3",
                    "active": 18,
                    "critical": 0,
                    "recovered": 478,
                    "1M_pop": "21",
                    "total": 503
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "0.3",
                    "total": 7
                },
                "tests": {
                    "1M_pop": "3795",
                    "total": 90431
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "UAE",
                "population": 9915462,
                "cases": {
                    "new": "+786",
                    "active": 10049,
                    "critical": 0,
                    "recovered": 72117,
                    "1M_pop": "8327",
                    "total": 82568
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "41",
                    "total": 402
                },
                "tests": {
                    "1M_pop": "853715",
                    "total": 8464974
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Algeria",
                "population": 44014897,
                "cases": {
                    "new": "+228",
                    "active": 12865,
                    "critical": 31,
                    "recovered": 34675,
                    "1M_pop": "1118",
                    "total": 49194
                },
                "deaths": {
                    "new": "+9",
                    "1M_pop": "38",
                    "total": 1654
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Latvia",
                "population": 1881616,
                "cases": {
                    "new": "+8",
                    "active": 210,
                    "critical": 0,
                    "recovered": 1248,
                    "1M_pop": "794",
                    "total": 1494
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "19",
                    "total": 36
                },
                "tests": {
                    "1M_pop": "153402",
                    "total": 288643
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Costa-Rica",
                "population": 5104063,
                "cases": {
                    "new": null,
                    "active": 37490,
                    "critical": 245,
                    "recovered": 22662,
                    "1M_pop": "11916",
                    "total": 60818
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "130",
                    "total": 666
                },
                "tests": {
                    "1M_pop": "37822",
                    "total": 193045
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Dominican-Republic",
                "population": 10870825,
                "cases": {
                    "new": "+615",
                    "active": 24751,
                    "critical": 210,
                    "recovered": 79363,
                    "1M_pop": "9763",
                    "total": 106136
                },
                "deaths": {
                    "new": "+13",
                    "1M_pop": "186",
                    "total": 2022
                },
                "tests": {
                    "1M_pop": "38826",
                    "total": 422070
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "South-America",
                "country": "Uruguay",
                "population": 3476301,
                "cases": {
                    "new": "+20",
                    "active": 248,
                    "critical": 1,
                    "recovered": 1582,
                    "1M_pop": "540",
                    "total": 1876
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "13",
                    "total": 46
                },
                "tests": {
                    "1M_pop": "59918",
                    "total": 208293
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Hungary",
                "population": 9655048,
                "cases": {
                    "new": "+710",
                    "active": 10280,
                    "critical": 21,
                    "recovered": 4227,
                    "1M_pop": "1571",
                    "total": 15170
                },
                "deaths": {
                    "new": "+9",
                    "1M_pop": "69",
                    "total": 663
                },
                "tests": {
                    "1M_pop": "60080",
                    "total": 580072
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Jordan",
                "population": 10224476,
                "cases": {
                    "new": "+279",
                    "active": 1690,
                    "critical": 13,
                    "recovered": 2415,
                    "1M_pop": "404",
                    "total": 4131
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "3",
                    "total": 26
                },
                "tests": {
                    "1M_pop": "101123",
                    "total": 1033934
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Lithuania",
                "population": 2713898,
                "cases": {
                    "new": "+62",
                    "active": 1268,
                    "critical": 0,
                    "recovered": 2149,
                    "1M_pop": "1291",
                    "total": 3504
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "32",
                    "total": 87
                },
                "tests": {
                    "1M_pop": "262025",
                    "total": 711108
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Morocco",
                "population": 37002355,
                "cases": {
                    "new": "+2488",
                    "active": 17860,
                    "critical": 261,
                    "recovered": 74930,
                    "1M_pop": "2554",
                    "total": 94504
                },
                "deaths": {
                    "new": "+28",
                    "1M_pop": "46",
                    "total": 1714
                },
                "tests": {
                    "1M_pop": "62045",
                    "total": 2295811
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Vietnam",
                "population": 97523480,
                "cases": {
                    "new": "+3",
                    "active": 91,
                    "critical": 0,
                    "recovered": 940,
                    "1M_pop": "11",
                    "total": 1066
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "0.4",
                    "total": 35
                },
                "tests": {
                    "1M_pop": "10348",
                    "total": 1009145
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Bosnia-and-Herzegovina",
                "population": 3276376,
                "cases": {
                    "new": "+394",
                    "active": 6639,
                    "critical": 0,
                    "recovered": 17219,
                    "1M_pop": "7510",
                    "total": 24605
                },
                "deaths": {
                    "new": "+11",
                    "1M_pop": "228",
                    "total": 747
                },
                "tests": {
                    "1M_pop": "65834",
                    "total": 215696
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Faeroe-Islands",
                "population": 48903,
                "cases": {
                    "new": "+1",
                    "active": 17,
                    "critical": 0,
                    "recovered": 412,
                    "1M_pop": "8772",
                    "total": 429
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "2301086",
                    "total": 112530
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Andorra",
                "population": 77291,
                "cases": {
                    "new": "+45",
                    "active": 376,
                    "critical": 4,
                    "recovered": 1054,
                    "1M_pop": "19187",
                    "total": 1483
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "686",
                    "total": 53
                },
                "tests": {
                    "1M_pop": "1778435",
                    "total": 137457
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "North-Macedonia",
                "population": 2083356,
                "cases": {
                    "new": "+186",
                    "active": 1964,
                    "critical": 3,
                    "recovered": 13635,
                    "1M_pop": "7811",
                    "total": 16274
                },
                "deaths": {
                    "new": "+7",
                    "1M_pop": "324",
                    "total": 675
                },
                "tests": {
                    "1M_pop": "82154",
                    "total": 171155
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Cyprus",
                "population": 1209221,
                "cases": {
                    "new": "+10",
                    "active": 254,
                    "critical": 2,
                    "recovered": 1282,
                    "1M_pop": "1288",
                    "total": 1558
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "18",
                    "total": 22
                },
                "tests": {
                    "1M_pop": "285168",
                    "total": 344831
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Brunei",
                "population": 438362,
                "cases": {
                    "new": null,
                    "active": 1,
                    "critical": 0,
                    "recovered": 141,
                    "1M_pop": "331",
                    "total": 145
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "7",
                    "total": 3
                },
                "tests": {
                    "1M_pop": "126051",
                    "total": 55256
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Moldova",
                "population": 4031937,
                "cases": {
                    "new": "+622",
                    "active": 10574,
                    "critical": 549,
                    "recovered": 33239,
                    "1M_pop": "11157",
                    "total": 44983
                },
                "deaths": {
                    "new": "+11",
                    "1M_pop": "290",
                    "total": 1170
                },
                "tests": {
                    "1M_pop": "61202",
                    "total": 246764
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Sri-Lanka",
                "population": 21432641,
                "cases": {
                    "new": "+5",
                    "active": 220,
                    "critical": 0,
                    "recovered": 3043,
                    "1M_pop": "153",
                    "total": 3276
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "0.6",
                    "total": 13
                },
                "tests": {
                    "1M_pop": "12242",
                    "total": 262378
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Albania",
                "population": 2877120,
                "cases": {
                    "new": "+132",
                    "active": 4813,
                    "critical": 18,
                    "recovered": 6788,
                    "1M_pop": "4153",
                    "total": 11948
                },
                "deaths": {
                    "new": "+4",
                    "1M_pop": "121",
                    "total": 347
                },
                "tests": {
                    "1M_pop": "25309",
                    "total": 72818
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Belarus",
                "population": 9448654,
                "cases": {
                    "new": "+224",
                    "active": 1249,
                    "critical": 0,
                    "recovered": 72967,
                    "1M_pop": "7936",
                    "total": 74987
                },
                "deaths": {
                    "new": "+4",
                    "1M_pop": "82",
                    "total": 771
                },
                "tests": {
                    "1M_pop": "178461",
                    "total": 1686218
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Malta",
                "population": 441795,
                "cases": {
                    "new": "+35",
                    "active": 601,
                    "critical": 2,
                    "recovered": 1978,
                    "1M_pop": "5874",
                    "total": 2595
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "36",
                    "total": 16
                },
                "tests": {
                    "1M_pop": "506339",
                    "total": 223698
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "South-America",
                "country": "Venezuela",
                "population": 28418294,
                "cases": {
                    "new": null,
                    "active": 11200,
                    "critical": 146,
                    "recovered": 52564,
                    "1M_pop": "2262",
                    "total": 64284
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "18",
                    "total": 520
                },
                "tests": {
                    "1M_pop": "65615",
                    "total": 1864663
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Burkina-Faso",
                "population": 21019299,
                "cases": {
                    "new": "+19",
                    "active": 545,
                    "critical": 0,
                    "recovered": 1166,
                    "1M_pop": "84",
                    "total": 1767
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "3",
                    "total": 56
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Tunisia",
                "population": 11844645,
                "cases": {
                    "new": "+470",
                    "active": 6095,
                    "critical": 47,
                    "recovered": 2342,
                    "1M_pop": "724",
                    "total": 8570
                },
                "deaths": {
                    "new": "+4",
                    "1M_pop": "11",
                    "total": 133
                },
                "tests": {
                    "1M_pop": "15115",
                    "total": 179035
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Guadeloupe",
                "population": 400139,
                "cases": {
                    "new": "+346",
                    "active": 2563,
                    "critical": 28,
                    "recovered": 837,
                    "1M_pop": "8562",
                    "total": 3426
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "65",
                    "total": 26
                },
                "tests": {
                    "1M_pop": "96229",
                    "total": 38505
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Senegal",
                "population": 16833475,
                "cases": {
                    "new": "+50",
                    "active": 3395,
                    "critical": 31,
                    "recovered": 10923,
                    "1M_pop": "868",
                    "total": 14618
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "18",
                    "total": 300
                },
                "tests": {
                    "1M_pop": "9672",
                    "total": 162811
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Kazakhstan",
                "population": 18823820,
                "cases": {
                    "new": "+72",
                    "active": 3930,
                    "critical": 221,
                    "recovered": 101455,
                    "1M_pop": "5687",
                    "total": 107056
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "89",
                    "total": 1671
                },
                "tests": {
                    "1M_pop": "145213",
                    "total": 2733455
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Azerbaijan",
                "population": 10158470,
                "cases": {
                    "new": "+119",
                    "active": 1917,
                    "critical": 0,
                    "recovered": 36289,
                    "1M_pop": "3817",
                    "total": 38777
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "56",
                    "total": 571
                },
                "tests": {
                    "1M_pop": "101914",
                    "total": 1035286
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Cambodia",
                "population": 16767934,
                "cases": {
                    "new": null,
                    "active": 1,
                    "critical": 0,
                    "recovered": 274,
                    "1M_pop": "16",
                    "total": 275
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "7248",
                    "total": 121530
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Palestine",
                "population": 5125985,
                "cases": {
                    "new": "+837",
                    "active": 10539,
                    "critical": 0,
                    "recovered": 23060,
                    "1M_pop": "6602",
                    "total": 33843
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "48",
                    "total": 244
                },
                "tests": {
                    "1M_pop": "70206",
                    "total": 359873
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Oceania",
                "country": "New-Zealand",
                "population": 5002100,
                "cases": {
                    "new": "+7",
                    "active": 70,
                    "critical": 4,
                    "recovered": 1714,
                    "1M_pop": "362",
                    "total": 1809
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "5",
                    "total": 25
                },
                "tests": {
                    "1M_pop": "179340",
                    "total": 897077
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Oman",
                "population": 5133398,
                "cases": {
                    "new": "+557",
                    "active": 6287,
                    "critical": 180,
                    "recovered": 84648,
                    "1M_pop": "17874",
                    "total": 91753
                },
                "deaths": {
                    "new": "+13",
                    "1M_pop": "159",
                    "total": 818
                },
                "tests": {
                    "1M_pop": "60235",
                    "total": 309212
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Georgia",
                "population": 3987514,
                "cases": {
                    "new": "+179",
                    "active": 1496,
                    "critical": 0,
                    "recovered": 1422,
                    "1M_pop": "737",
                    "total": 2937
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "5",
                    "total": 19
                },
                "tests": {
                    "1M_pop": "129803",
                    "total": 517590
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Trinidad-and-Tobago",
                "population": 1400456,
                "cases": {
                    "new": "+107",
                    "active": 1905,
                    "critical": 6,
                    "recovered": 1469,
                    "1M_pop": "2452",
                    "total": 3434
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "43",
                    "total": 60
                },
                "tests": {
                    "1M_pop": "20346",
                    "total": 28493
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Ukraine",
                "population": 43676580,
                "cases": {
                    "new": "+3584",
                    "active": 88931,
                    "critical": 177,
                    "recovered": 73913,
                    "1M_pop": "3806",
                    "total": 166244
                },
                "deaths": {
                    "new": "+60",
                    "1M_pop": "78",
                    "total": 3400
                },
                "tests": {
                    "1M_pop": "44085",
                    "total": 1925482
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "R&eacute;union",
                "population": 896666,
                "cases": {
                    "new": "+97",
                    "active": 1290,
                    "critical": 0,
                    "recovered": 1794,
                    "1M_pop": "3456",
                    "total": 3099
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "17",
                    "total": 15
                },
                "tests": {
                    "1M_pop": "39501",
                    "total": 35419
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Uzbekistan",
                "population": 33570386,
                "cases": {
                    "new": "+612",
                    "active": 3244,
                    "critical": 243,
                    "recovered": 45970,
                    "1M_pop": "1478",
                    "total": 49627
                },
                "deaths": {
                    "new": "+6",
                    "1M_pop": "12",
                    "total": 413
                },
                "tests": {
                    "1M_pop": "41046",
                    "total": 1377915
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Cameroon",
                "population": 26678625,
                "cases": {
                    "new": "+32",
                    "active": 1051,
                    "critical": 30,
                    "recovered": 18837,
                    "1M_pop": "761",
                    "total": 20303
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "16",
                    "total": 415
                },
                "tests": {
                    "1M_pop": "5585",
                    "total": 149000
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Martinique",
                "population": 375203,
                "cases": {
                    "new": "+183",
                    "active": 1006,
                    "critical": 5,
                    "recovered": 98,
                    "1M_pop": "2990",
                    "total": 1122
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "48",
                    "total": 18
                },
                "tests": {
                    "1M_pop": "52062",
                    "total": 19534
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Liechtenstein",
                "population": 38151,
                "cases": {
                    "new": "+1",
                    "active": 3,
                    "critical": 0,
                    "recovered": 108,
                    "1M_pop": "2936",
                    "total": 112
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "26",
                    "total": 1
                },
                "tests": {
                    "1M_pop": "23590",
                    "total": 900
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Channel-Islands",
                "population": 174206,
                "cases": {
                    "new": "+5",
                    "active": 21,
                    "critical": 1,
                    "recovered": 575,
                    "1M_pop": "3697",
                    "total": 644
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "276",
                    "total": 48
                },
                "tests": {
                    "1M_pop": "524046",
                    "total": 91292
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Bangladesh",
                "population": 165035061,
                "cases": {
                    "new": "+1593",
                    "active": 88993,
                    "critical": 0,
                    "recovered": 250412,
                    "1M_pop": "2086",
                    "total": 344264
                },
                "deaths": {
                    "new": "+36",
                    "1M_pop": "29",
                    "total": 4859
                },
                "tests": {
                    "1M_pop": "10808",
                    "total": 1783779
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Afghanistan",
                "population": 39107897,
                "cases": {
                    "new": "+17",
                    "active": 4931,
                    "critical": 93,
                    "recovered": 32505,
                    "1M_pop": "994",
                    "total": 38872
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "37",
                    "total": 1436
                },
                "tests": {
                    "1M_pop": "2758",
                    "total": 107858
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Honduras",
                "population": 9937364,
                "cases": {
                    "new": "+1040",
                    "active": 47575,
                    "critical": 26,
                    "recovered": 19983,
                    "1M_pop": "7010",
                    "total": 69660
                },
                "deaths": {
                    "new": "+15",
                    "1M_pop": "212",
                    "total": 2102
                },
                "tests": {
                    "1M_pop": "16250",
                    "total": 161483
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "DRC",
                "population": 90108576,
                "cases": {
                    "new": "+28",
                    "active": 335,
                    "critical": 0,
                    "recovered": 9840,
                    "1M_pop": "116",
                    "total": 10442
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "3",
                    "total": 267
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Nigeria",
                "population": 207180371,
                "cases": {
                    "new": "+131",
                    "active": 7550,
                    "critical": 7,
                    "recovered": 48092,
                    "1M_pop": "274",
                    "total": 56735
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "5",
                    "total": 1093
                },
                "tests": {
                    "1M_pop": "2328",
                    "total": 482321
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Cuba",
                "population": 11325127,
                "cases": {
                    "new": "+57",
                    "active": 594,
                    "critical": 20,
                    "recovered": 4230,
                    "1M_pop": "436",
                    "total": 4933
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "10",
                    "total": 109
                },
                "tests": {
                    "1M_pop": "45560",
                    "total": 515969
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Ghana",
                "population": 31208065,
                "cases": {
                    "new": "+59",
                    "active": 524,
                    "critical": 5,
                    "recovered": 44896,
                    "1M_pop": "1465",
                    "total": 45714
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "9",
                    "total": 294
                },
                "tests": {
                    "1M_pop": "14647",
                    "total": 457092
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": null,
                "country": "Puerto-Rico",
                "population": null,
                "cases": {
                    "new": "+8",
                    "active": 36,
                    "critical": 0,
                    "recovered": 1,
                    "1M_pop": "14",
                    "total": 39
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 2
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-03-25",
                "time": "2020-03-25T06:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Jamaica",
                "population": 2963922,
                "cases": {
                    "new": "+210",
                    "active": 3098,
                    "critical": 8,
                    "recovered": 1225,
                    "1M_pop": "1476",
                    "total": 4374
                },
                "deaths": {
                    "new": "+5",
                    "1M_pop": "17",
                    "total": 51
                },
                "tests": {
                    "1M_pop": "23643",
                    "total": 70077
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "South-America",
                "country": "Bolivia",
                "population": 11706734,
                "cases": {
                    "new": "+547",
                    "active": 34192,
                    "critical": 71,
                    "recovered": 87716,
                    "1M_pop": "11055",
                    "total": 129419
                },
                "deaths": {
                    "new": "+33",
                    "1M_pop": "642",
                    "total": 7511
                },
                "tests": {
                    "1M_pop": "24160",
                    "total": 282838
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "South-America",
                "country": "Guyana",
                "population": 787371,
                "cases": {
                    "new": "+69",
                    "active": 665,
                    "critical": 16,
                    "recovered": 1302,
                    "1M_pop": "2574",
                    "total": 2027
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "76",
                    "total": 60
                },
                "tests": {
                    "1M_pop": "14620",
                    "total": 11511
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "South-America",
                "country": "Paraguay",
                "population": 7151143,
                "cases": {
                    "new": "+694",
                    "active": 14216,
                    "critical": 137,
                    "recovered": 16313,
                    "1M_pop": "4351",
                    "total": 31113
                },
                "deaths": {
                    "new": "+18",
                    "1M_pop": "82",
                    "total": 584
                },
                "tests": {
                    "1M_pop": "33818",
                    "total": 241837
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Macao",
                "population": 650919,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 0,
                    "recovered": 46,
                    "1M_pop": "71",
                    "total": 46
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "6511",
                    "total": 4238
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Monaco",
                "population": 39301,
                "cases": {
                    "new": "+5",
                    "active": 38,
                    "critical": 1,
                    "recovered": 147,
                    "1M_pop": "4733",
                    "total": 186
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "25",
                    "total": 1
                },
                "tests": {
                    "1M_pop": "1321926",
                    "total": 51953
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "South-America",
                "country": "French-Guiana",
                "population": 300276,
                "cases": {
                    "new": "+28",
                    "active": 291,
                    "critical": 4,
                    "recovered": 9267,
                    "1M_pop": "32047",
                    "total": 9623
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "216",
                    "total": 65
                },
                "tests": {
                    "1M_pop": "204715",
                    "total": 61471
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Guatemala",
                "population": 17984076,
                "cases": {
                    "new": "+740",
                    "active": 7368,
                    "critical": 5,
                    "recovered": 73260,
                    "1M_pop": "4652",
                    "total": 83664
                },
                "deaths": {
                    "new": "+27",
                    "1M_pop": "169",
                    "total": 3036
                },
                "tests": {
                    "1M_pop": "15768",
                    "total": 283578
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Rwanda",
                "population": 13017622,
                "cases": {
                    "new": "+19",
                    "active": 1813,
                    "critical": 0,
                    "recovered": 2817,
                    "1M_pop": "357",
                    "total": 4653
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "2",
                    "total": 23
                },
                "tests": {
                    "1M_pop": "36122",
                    "total": 470218
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Montenegro",
                "population": 628083,
                "cases": {
                    "new": "+212",
                    "active": 2482,
                    "critical": 0,
                    "recovered": 4892,
                    "1M_pop": "11946",
                    "total": 7503
                },
                "deaths": {
                    "new": "+3",
                    "1M_pop": "205",
                    "total": 129
                },
                "tests": {
                    "1M_pop": "95546",
                    "total": 60011
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Togo",
                "population": 8318907,
                "cases": {
                    "new": "+10",
                    "active": 334,
                    "critical": 0,
                    "recovered": 1243,
                    "1M_pop": "194",
                    "total": 1618
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "5",
                    "total": 41
                },
                "tests": {
                    "1M_pop": "9679",
                    "total": 80522
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Oceania",
                "country": "French-Polynesia",
                "population": 281258,
                "cases": {
                    "new": null,
                    "active": 425,
                    "critical": 3,
                    "recovered": 672,
                    "1M_pop": "3907",
                    "total": 1099
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "7",
                    "total": 2
                },
                "tests": {
                    "1M_pop": "66850",
                    "total": 18802
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": null,
                "country": "Guam",
                "population": null,
                "cases": {
                    "new": "+3",
                    "active": 31,
                    "critical": 0,
                    "recovered": 0,
                    "1M_pop": "190",
                    "total": 32
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 1
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-03-25",
                "time": "2020-03-25T06:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Mauritius",
                "population": 1272220,
                "cases": {
                    "new": "+1",
                    "active": 18,
                    "critical": 0,
                    "recovered": 338,
                    "1M_pop": "288",
                    "total": 366
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "8",
                    "total": 10
                },
                "tests": {
                    "1M_pop": "188021",
                    "total": 239204
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Barbados",
                "population": 287451,
                "cases": {
                    "new": null,
                    "active": 7,
                    "critical": 0,
                    "recovered": 171,
                    "1M_pop": "644",
                    "total": 185
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "24",
                    "total": 7
                },
                "tests": {
                    "1M_pop": "72249",
                    "total": 20768
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Ivory-Coast",
                "population": 26511343,
                "cases": {
                    "new": "+26",
                    "active": 708,
                    "critical": 0,
                    "recovered": 18330,
                    "1M_pop": "723",
                    "total": 19158
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "5",
                    "total": 120
                },
                "tests": {
                    "1M_pop": "5566",
                    "total": 147565
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Kyrgyzstan",
                "population": 6546548,
                "cases": {
                    "new": "+81",
                    "active": 2773,
                    "critical": 24,
                    "recovered": 41317,
                    "1M_pop": "6897",
                    "total": 45153
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "162",
                    "total": 1063
                },
                "tests": {
                    "1M_pop": "40895",
                    "total": 267718
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Maldives",
                "population": 542542,
                "cases": {
                    "new": "+67",
                    "active": 1428,
                    "critical": 12,
                    "recovered": 8033,
                    "1M_pop": "17499",
                    "total": 9494
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "61",
                    "total": 33
                },
                "tests": {
                    "1M_pop": "250594",
                    "total": 135958
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Mayotte",
                "population": 274176,
                "cases": {
                    "new": null,
                    "active": 537,
                    "critical": 2,
                    "recovered": 2964,
                    "1M_pop": "12915",
                    "total": 3541
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "146",
                    "total": 40
                },
                "tests": {
                    "1M_pop": "47415",
                    "total": 13000
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Gibraltar",
                "population": 33689,
                "cases": {
                    "new": "+3",
                    "active": 30,
                    "critical": 0,
                    "recovered": 313,
                    "1M_pop": "10181",
                    "total": 343
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "1227226",
                    "total": 41344
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Mongolia",
                "population": 3289263,
                "cases": {
                    "new": null,
                    "active": 10,
                    "critical": 1,
                    "recovered": 301,
                    "1M_pop": "95",
                    "total": 311
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "19080",
                    "total": 62758
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Ethiopia",
                "population": 115543700,
                "cases": {
                    "new": "+689",
                    "active": 38768,
                    "critical": 300,
                    "recovered": 27085,
                    "1M_pop": "579",
                    "total": 66913
                },
                "deaths": {
                    "new": "+15",
                    "1M_pop": "9",
                    "total": 1060
                },
                "tests": {
                    "1M_pop": "10180",
                    "total": 1176252
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Kenya",
                "population": 54014150,
                "cases": {
                    "new": "+183",
                    "active": 12323,
                    "critical": 44,
                    "recovered": 23611,
                    "1M_pop": "677",
                    "total": 36576
                },
                "deaths": {
                    "new": "+5",
                    "1M_pop": "12",
                    "total": 642
                },
                "tests": {
                    "1M_pop": "9349",
                    "total": 504988
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Seychelles",
                "population": 98476,
                "cases": {
                    "new": "+1",
                    "active": 5,
                    "critical": 0,
                    "recovered": 136,
                    "1M_pop": "1432",
                    "total": 141
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "52805",
                    "total": 5200
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Equatorial-Guinea",
                "population": 1412192,
                "cases": {
                    "new": "+2",
                    "active": 410,
                    "critical": 0,
                    "recovered": 4509,
                    "1M_pop": "3542",
                    "total": 5002
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "59",
                    "total": 83
                },
                "tests": {
                    "1M_pop": "40447",
                    "total": 57119
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Tanzania",
                "population": 59886383,
                "cases": {
                    "new": null,
                    "active": 305,
                    "critical": 7,
                    "recovered": 183,
                    "1M_pop": "8",
                    "total": 509
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "0.4",
                    "total": 21
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": null,
                "country": "US-Virgin-Islands",
                "population": null,
                "cases": {
                    "new": "+11",
                    "active": 17,
                    "critical": 0,
                    "recovered": 0,
                    "1M_pop": "163",
                    "total": 17
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-03-25",
                "time": "2020-03-25T06:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Gabon",
                "population": 2236319,
                "cases": {
                    "new": "+24",
                    "active": 798,
                    "critical": 5,
                    "recovered": 7827,
                    "1M_pop": "3880",
                    "total": 8678
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "24",
                    "total": 53
                },
                "tests": {
                    "1M_pop": "64390",
                    "total": 143996
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Aruba",
                "population": 106863,
                "cases": {
                    "new": "+54",
                    "active": 1617,
                    "critical": 11,
                    "recovered": 1742,
                    "1M_pop": "31648",
                    "total": 3382
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "215",
                    "total": 23
                },
                "tests": {
                    "1M_pop": "255907",
                    "total": 27347
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Saint-Martin",
                "population": 38803,
                "cases": {
                    "new": null,
                    "active": 118,
                    "critical": 11,
                    "recovered": 206,
                    "1M_pop": "8504",
                    "total": 330
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "155",
                    "total": 6
                },
                "tests": {
                    "1M_pop": "76489",
                    "total": 2968
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "South-America",
                "country": "Suriname",
                "population": 587742,
                "cases": {
                    "new": "+26",
                    "active": 416,
                    "critical": 7,
                    "recovered": 4160,
                    "1M_pop": "7947",
                    "total": 4671
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "162",
                    "total": 95
                },
                "tests": {
                    "1M_pop": "21203",
                    "total": 12462
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Bahamas",
                "population": 394047,
                "cases": {
                    "new": "+90",
                    "active": 1482,
                    "critical": 65,
                    "recovered": 1626,
                    "1M_pop": "8062",
                    "total": 3177
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "175",
                    "total": 69
                },
                "tests": {
                    "1M_pop": "41584",
                    "total": 16386
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Oceania",
                "country": "New-Caledonia",
                "population": 286039,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 0,
                    "recovered": 26,
                    "1M_pop": "91",
                    "total": 26
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "47067",
                    "total": 13463
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Cayman-Islands",
                "population": 65886,
                "cases": {
                    "new": null,
                    "active": 3,
                    "critical": 0,
                    "recovered": 204,
                    "1M_pop": "3157",
                    "total": 208
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "15",
                    "total": 1
                },
                "tests": {
                    "1M_pop": "568027",
                    "total": 37425
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Cura&ccedil;ao",
                "population": 164236,
                "cases": {
                    "new": "+18",
                    "active": 135,
                    "critical": 1,
                    "recovered": 74,
                    "1M_pop": "1279",
                    "total": 210
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "6",
                    "total": 1
                },
                "tests": {
                    "1M_pop": "6576",
                    "total": 1080
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Cabo-Verde",
                "population": 557273,
                "cases": {
                    "new": "+85",
                    "active": 549,
                    "critical": 0,
                    "recovered": 4465,
                    "1M_pop": "9085",
                    "total": 5063
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "88",
                    "total": 49
                },
                "tests": {
                    "1M_pop": "137412",
                    "total": 76576
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "CAR",
                "population": 4846940,
                "cases": {
                    "new": "+7",
                    "active": 2890,
                    "critical": 2,
                    "recovered": 1830,
                    "1M_pop": "987",
                    "total": 4782
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "13",
                    "total": 62
                },
                "tests": {
                    "1M_pop": "6535",
                    "total": 31677
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Congo",
                "population": 5544650,
                "cases": {
                    "new": "+6",
                    "active": 959,
                    "critical": 0,
                    "recovered": 3887,
                    "1M_pop": "890",
                    "total": 4934
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "16",
                    "total": 88
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "El-Salvador",
                "population": 6493172,
                "cases": {
                    "new": "+86",
                    "active": 6056,
                    "critical": 94,
                    "recovered": 20392,
                    "1M_pop": "4197",
                    "total": 27249
                },
                "deaths": {
                    "new": "+5",
                    "1M_pop": "123",
                    "total": 801
                },
                "tests": {
                    "1M_pop": "55028",
                    "total": 357309
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Liberia",
                "population": 5081970,
                "cases": {
                    "new": "+1",
                    "active": 37,
                    "critical": 0,
                    "recovered": 1214,
                    "1M_pop": "262",
                    "total": 1333
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "16",
                    "total": 82
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Madagascar",
                "population": 27835714,
                "cases": {
                    "new": "+54",
                    "active": 1162,
                    "critical": 25,
                    "recovered": 14547,
                    "1M_pop": "572",
                    "total": 15925
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "8",
                    "total": 216
                },
                "tests": {
                    "1M_pop": "2372",
                    "total": 66036
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Namibia",
                "population": 2550426,
                "cases": {
                    "new": "+114",
                    "active": 2285,
                    "critical": 16,
                    "recovered": 7685,
                    "1M_pop": "3951",
                    "total": 10078
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "42",
                    "total": 108
                },
                "tests": {
                    "1M_pop": "33205",
                    "total": 84688
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "St-Barth",
                "population": 9883,
                "cases": {
                    "new": "+2",
                    "active": 7,
                    "critical": 0,
                    "recovered": 16,
                    "1M_pop": "2327",
                    "total": 23
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "209956",
                    "total": 2075
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Zimbabwe",
                "population": 14908051,
                "cases": {
                    "new": "+35",
                    "active": 1568,
                    "critical": 0,
                    "recovered": 5841,
                    "1M_pop": "512",
                    "total": 7633
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "15",
                    "total": 224
                },
                "tests": {
                    "1M_pop": "10541",
                    "total": 157144
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Sudan",
                "population": 44050115,
                "cases": {
                    "new": "+19",
                    "active": 5940,
                    "critical": 0,
                    "recovered": 6759,
                    "1M_pop": "307",
                    "total": 13535
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "19",
                    "total": 836
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Angola",
                "population": 33071366,
                "cases": {
                    "new": "+114",
                    "active": 2240,
                    "critical": 16,
                    "recovered": 1405,
                    "1M_pop": "115",
                    "total": 3789
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "4",
                    "total": 144
                },
                "tests": {
                    "1M_pop": "1994",
                    "total": 65951
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Benin",
                "population": 12188538,
                "cases": {
                    "new": null,
                    "active": 290,
                    "critical": 0,
                    "recovered": 1950,
                    "1M_pop": "187",
                    "total": 2280
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "3",
                    "total": 40
                },
                "tests": {
                    "1M_pop": "13871",
                    "total": 169063
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Bermuda",
                "population": 62229,
                "cases": {
                    "new": "+1",
                    "active": 5,
                    "critical": 0,
                    "recovered": 164,
                    "1M_pop": "2860",
                    "total": 178
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "145",
                    "total": 9
                },
                "tests": {
                    "1M_pop": "911601",
                    "total": 56728
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Bhutan",
                "population": 773394,
                "cases": {
                    "new": null,
                    "active": 71,
                    "critical": 0,
                    "recovered": 175,
                    "1M_pop": "318",
                    "total": 246
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "154984",
                    "total": 119864
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Oceania",
                "country": "Fiji",
                "population": 897822,
                "cases": {
                    "new": null,
                    "active": 4,
                    "critical": 1,
                    "recovered": 26,
                    "1M_pop": "36",
                    "total": 32
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "2",
                    "total": 2
                },
                "tests": {
                    "1M_pop": "10659",
                    "total": 9570
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Greenland",
                "population": 56791,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 0,
                    "recovered": 14,
                    "1M_pop": "247",
                    "total": 14
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "130672",
                    "total": 7421
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Guinea",
                "population": 13203978,
                "cases": {
                    "new": "+43",
                    "active": 479,
                    "critical": 24,
                    "recovered": 9612,
                    "1M_pop": "769",
                    "total": 10154
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "5",
                    "total": 63
                },
                "tests": {
                    "1M_pop": "2199",
                    "total": 29031
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Haiti",
                "population": 11431672,
                "cases": {
                    "new": "+15",
                    "active": 2021,
                    "critical": 0,
                    "recovered": 6315,
                    "1M_pop": "748",
                    "total": 8556
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "19",
                    "total": 220
                },
                "tests": {
                    "1M_pop": "2253",
                    "total": 25752
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Isle-of-Man",
                "population": 85130,
                "cases": {
                    "new": null,
                    "active": 3,
                    "critical": 0,
                    "recovered": 312,
                    "1M_pop": "3982",
                    "total": 339
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "282",
                    "total": 24
                },
                "tests": {
                    "1M_pop": "134723",
                    "total": 11469
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Mauritania",
                "population": 4674801,
                "cases": {
                    "new": "+14",
                    "active": 320,
                    "critical": 3,
                    "recovered": 6865,
                    "1M_pop": "1571",
                    "total": 7346
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "34",
                    "total": 161
                },
                "tests": {
                    "1M_pop": "16535",
                    "total": 77298
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Nicaragua",
                "population": 6640659,
                "cases": {
                    "new": "+143",
                    "active": 1901,
                    "critical": 0,
                    "recovered": 2913,
                    "1M_pop": "747",
                    "total": 4961
                },
                "deaths": {
                    "new": "+3",
                    "1M_pop": "22",
                    "total": 147
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Saint-Lucia",
                "population": 183808,
                "cases": {
                    "new": null,
                    "active": 1,
                    "critical": 0,
                    "recovered": 26,
                    "1M_pop": "147",
                    "total": 27
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "41059",
                    "total": 7547
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Zambia",
                "population": 18488027,
                "cases": {
                    "new": "+41",
                    "active": 573,
                    "critical": 0,
                    "recovered": 13029,
                    "1M_pop": "753",
                    "total": 13928
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "18",
                    "total": 326
                },
                "tests": {
                    "1M_pop": "7303",
                    "total": 135021
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Nepal",
                "population": 29245267,
                "cases": {
                    "new": "+1246",
                    "active": 16241,
                    "critical": 0,
                    "recovered": 42949,
                    "1M_pop": "2037",
                    "total": 59573
                },
                "deaths": {
                    "new": "+4",
                    "1M_pop": "13",
                    "total": 383
                },
                "tests": {
                    "1M_pop": "30190",
                    "total": 882915
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "North-America",
                "country": "Antigua-and-Barbuda",
                "population": 98098,
                "cases": {
                    "new": null,
                    "active": 1,
                    "critical": 1,
                    "recovered": 91,
                    "1M_pop": "968",
                    "total": 95
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "31",
                    "total": 3
                },
                "tests": {
                    "1M_pop": "23262",
                    "total": 2282
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Chad",
                "population": 16520979,
                "cases": {
                    "new": "+25",
                    "active": 72,
                    "critical": 0,
                    "recovered": 962,
                    "1M_pop": "67",
                    "total": 1115
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "5",
                    "total": 81
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Djibouti",
                "population": 990997,
                "cases": {
                    "new": null,
                    "active": 5,
                    "critical": 0,
                    "recovered": 5333,
                    "1M_pop": "5448",
                    "total": 5399
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "62",
                    "total": 61
                },
                "tests": {
                    "1M_pop": "74083",
                    "total": 73416
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Eritrea",
                "population": 3556540,
                "cases": {
                    "new": null,
                    "active": 59,
                    "critical": 0,
                    "recovered": 305,
                    "1M_pop": "102",
                    "total": 364
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Gambia",
                "population": 2430575,
                "cases": {
                    "new": "+33",
                    "active": 1415,
                    "critical": 0,
                    "recovered": 1951,
                    "1M_pop": "1429",
                    "total": 3473
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "44",
                    "total": 107
                },
                "tests": {
                    "1M_pop": "5988",
                    "total": 14554
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Europe",
                "country": "Vatican-City",
                "population": 801,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 0,
                    "recovered": 12,
                    "1M_pop": "14981",
                    "total": 12
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Montserrat",
                "population": 4993,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 0,
                    "recovered": 12,
                    "1M_pop": "2604",
                    "total": 13
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "200",
                    "total": 1
                },
                "tests": {
                    "1M_pop": "74705",
                    "total": 373
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Niger",
                "population": 24382599,
                "cases": {
                    "new": "+1",
                    "active": 10,
                    "critical": 0,
                    "recovered": 1104,
                    "1M_pop": "49",
                    "total": 1183
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "3",
                    "total": 69
                },
                "tests": {
                    "1M_pop": "812",
                    "total": 19794
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Oceania",
                "country": "Papua-New-Guinea",
                "population": 8981560,
                "cases": {
                    "new": "+5",
                    "active": 278,
                    "critical": 0,
                    "recovered": 232,
                    "1M_pop": "57",
                    "total": 516
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "0.7",
                    "total": 6
                },
                "tests": {
                    "1M_pop": "1923",
                    "total": 17276
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "St-Vincent-Grenadines",
                "population": 111015,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 0,
                    "recovered": 64,
                    "1M_pop": "576",
                    "total": 64
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "41463",
                    "total": 4603
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Sint-Maarten",
                "population": 42978,
                "cases": {
                    "new": "+8",
                    "active": 61,
                    "critical": 6,
                    "recovered": 477,
                    "1M_pop": "12960",
                    "total": 557
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "442",
                    "total": 19
                },
                "tests": {
                    "1M_pop": "63288",
                    "total": 2720
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Somalia",
                "population": 15981658,
                "cases": {
                    "new": "+1",
                    "active": 480,
                    "critical": 0,
                    "recovered": 2812,
                    "1M_pop": "212",
                    "total": 3390
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "6",
                    "total": 98
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Eswatini",
                "population": 1162693,
                "cases": {
                    "new": "+36",
                    "active": 649,
                    "critical": 11,
                    "recovered": 4439,
                    "1M_pop": "4465",
                    "total": 5191
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "89",
                    "total": 103
                },
                "tests": {
                    "1M_pop": "27321",
                    "total": 31766
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Timor-Leste",
                "population": 1323423,
                "cases": {
                    "new": null,
                    "active": 1,
                    "critical": 0,
                    "recovered": 26,
                    "1M_pop": "20",
                    "total": 27
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "3888",
                    "total": 5146
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Uganda",
                "population": 46030454,
                "cases": {
                    "new": "+114",
                    "active": 2831,
                    "critical": 0,
                    "recovered": 2489,
                    "1M_pop": "117",
                    "total": 5380
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "1",
                    "total": 60
                },
                "tests": {
                    "1M_pop": "9596",
                    "total": 441710
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "All",
                "country": "All",
                "population": null,
                "cases": {
                    "new": "+3938",
                    "active": 7359516,
                    "critical": 61163,
                    "recovered": 22030334,
                    "1M_pop": "3892",
                    "total": 30340279
                },
                "deaths": {
                    "new": "+244",
                    "1M_pop": "121.9",
                    "total": 950429
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Mozambique",
                "population": 31432436,
                "cases": {
                    "new": "+167",
                    "active": 2729,
                    "critical": 0,
                    "recovered": 3393,
                    "1M_pop": "196",
                    "total": 6161
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "1",
                    "total": 39
                },
                "tests": {
                    "1M_pop": "3808",
                    "total": 119689
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Syria",
                "population": 17587362,
                "cases": {
                    "new": "+37",
                    "active": 2623,
                    "critical": 0,
                    "recovered": 903,
                    "1M_pop": "210",
                    "total": 3691
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "9",
                    "total": 165
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Grenada",
                "population": 112591,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 0,
                    "recovered": 24,
                    "1M_pop": "213",
                    "total": 24
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "55528",
                    "total": 6252
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Dominica",
                "population": 72021,
                "cases": {
                    "new": "+2",
                    "active": 6,
                    "critical": 0,
                    "recovered": 18,
                    "1M_pop": "333",
                    "total": 24
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "28839",
                    "total": 2077
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Turks-and-Caicos",
                "population": 38828,
                "cases": {
                    "new": "+9",
                    "active": 93,
                    "critical": 3,
                    "recovered": 561,
                    "1M_pop": "16972",
                    "total": 659
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "129",
                    "total": 5
                },
                "tests": {
                    "1M_pop": "76440",
                    "total": 2968
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Belize",
                "population": 399121,
                "cases": {
                    "new": "+8",
                    "active": 821,
                    "critical": 3,
                    "recovered": 696,
                    "1M_pop": "3848",
                    "total": 1536
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "48",
                    "total": 19
                },
                "tests": {
                    "1M_pop": "29961",
                    "total": 11958
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Myanmar",
                "population": 54487182,
                "cases": {
                    "new": "+222",
                    "active": 3039,
                    "critical": 0,
                    "recovered": 944,
                    "1M_pop": "74",
                    "total": 4043
                },
                "deaths": {
                    "new": "+20",
                    "1M_pop": "1",
                    "total": 60
                },
                "tests": {
                    "1M_pop": "3518",
                    "total": 191696
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Laos",
                "population": 7297582,
                "cases": {
                    "new": null,
                    "active": 1,
                    "critical": 0,
                    "recovered": 22,
                    "1M_pop": "3",
                    "total": 23
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "6289",
                    "total": 45897
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Libya",
                "population": 6890822,
                "cases": {
                    "new": "+886",
                    "active": 11505,
                    "critical": 0,
                    "recovered": 13908,
                    "1M_pop": "3747",
                    "total": 25822
                },
                "deaths": {
                    "new": "+15",
                    "1M_pop": "59",
                    "total": 409
                },
                "tests": {
                    "1M_pop": "25129",
                    "total": 173161
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Mali",
                "population": 20368508,
                "cases": {
                    "new": null,
                    "active": 527,
                    "critical": 0,
                    "recovered": 2311,
                    "1M_pop": "146",
                    "total": 2966
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "6",
                    "total": 128
                },
                "tests": {
                    "1M_pop": "2307",
                    "total": 46993
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Guinea-Bissau",
                "population": 1977502,
                "cases": {
                    "new": null,
                    "active": 1109,
                    "critical": 5,
                    "recovered": 1127,
                    "1M_pop": "1150",
                    "total": 2275
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "20",
                    "total": 39
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "British-Virgin-Islands",
                "population": 30274,
                "cases": {
                    "new": null,
                    "active": 28,
                    "critical": 2,
                    "recovered": 40,
                    "1M_pop": "2279",
                    "total": 69
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "33",
                    "total": 1
                },
                "tests": {
                    "1M_pop": "127436",
                    "total": 3858
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Saint-Kitts-and-Nevis",
                "population": 53280,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 0,
                    "recovered": 17,
                    "1M_pop": "319",
                    "total": 17
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "40128",
                    "total": 2138
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Anguilla",
                "population": 15028,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 0,
                    "recovered": 3,
                    "1M_pop": "200",
                    "total": 3
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "61751",
                    "total": 928
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": null,
                "country": "MS-Zaandam-",
                "population": null,
                "cases": {
                    "new": "+7",
                    "active": 7,
                    "critical": 0,
                    "recovered": 0,
                    "1M_pop": null,
                    "total": 9
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": null,
                    "total": 2
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-04-09",
                "time": "2020-04-09T15:45:06+00:00"
            },
            {
                "continent": null,
                "country": "MS-Zaandam",
                "population": null,
                "cases": {
                    "new": null,
                    "active": 7,
                    "critical": 0,
                    "recovered": 0,
                    "1M_pop": null,
                    "total": 9
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 2
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Botswana",
                "population": 2361404,
                "cases": {
                    "new": "+104",
                    "active": 1930,
                    "critical": 1,
                    "recovered": 624,
                    "1M_pop": "1087",
                    "total": 2567
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "6",
                    "total": 13
                },
                "tests": {
                    "1M_pop": "66085",
                    "total": 156054
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Sierra-Leone",
                "population": 8009931,
                "cases": {
                    "new": "+7",
                    "active": 415,
                    "critical": 0,
                    "recovered": 1646,
                    "1M_pop": "266",
                    "total": 2133
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "9",
                    "total": 72
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Burundi",
                "population": 11963031,
                "cases": {
                    "new": "+1",
                    "active": 98,
                    "critical": 0,
                    "recovered": 374,
                    "1M_pop": "40",
                    "total": 473
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "0.08",
                    "total": 1
                },
                "tests": {
                    "1M_pop": "2327",
                    "total": 27836
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Caribbean-Netherlands",
                "population": 26274,
                "cases": {
                    "new": "+4",
                    "active": 14,
                    "critical": 0,
                    "recovered": 17,
                    "1M_pop": "1218",
                    "total": 32
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "38",
                    "total": 1
                },
                "tests": {
                    "1M_pop": "57700",
                    "total": 1516
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Malawi",
                "population": 19230396,
                "cases": {
                    "new": "+7",
                    "active": 1532,
                    "critical": 4,
                    "recovered": 4000,
                    "1M_pop": "297",
                    "total": 5711
                },
                "deaths": {
                    "new": "+1",
                    "1M_pop": "9",
                    "total": 179
                },
                "tests": {
                    "1M_pop": "2566",
                    "total": 49341
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "South-America",
                "country": "Falkland-Islands",
                "population": 3501,
                "cases": {
                    "new": null,
                    "active": 0,
                    "critical": 0,
                    "recovered": 13,
                    "1M_pop": "3713",
                    "total": 13
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "645815",
                    "total": 2261
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Western-Sahara",
                "population": 596831,
                "cases": {
                    "new": "+1",
                    "active": 1,
                    "critical": 0,
                    "recovered": 8,
                    "1M_pop": "17",
                    "total": 10
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "2",
                    "total": 1
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "South-Sudan",
                "population": 11221627,
                "cases": {
                    "new": "+5",
                    "active": 1260,
                    "critical": 0,
                    "recovered": 1290,
                    "1M_pop": "232",
                    "total": 2599
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "4",
                    "total": 49
                },
                "tests": {
                    "1M_pop": "1073",
                    "total": 12044
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "Saint-Pierre-Miquelon",
                "population": 5788,
                "cases": {
                    "new": "+1",
                    "active": 6,
                    "critical": 0,
                    "recovered": 5,
                    "1M_pop": "1900",
                    "total": 11
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 0
                },
                "tests": {
                    "1M_pop": "181583",
                    "total": 1051
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Sao-Tome-and-Principe",
                "population": 220000,
                "cases": {
                    "new": null,
                    "active": 19,
                    "critical": 0,
                    "recovered": 873,
                    "1M_pop": "4123",
                    "total": 907
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "68",
                    "total": 15
                },
                "tests": {
                    "1M_pop": "20150",
                    "total": 4433
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "North-America",
                "country": "North-America",
                "population": null,
                "cases": {
                    "new": "+3182",
                    "active": 2814197,
                    "critical": 17762,
                    "recovered": 5083460,
                    "1M_pop": null,
                    "total": 8192885
                },
                "deaths": {
                    "new": "+201",
                    "1M_pop": null,
                    "total": 295228
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Europe",
                "country": "Europe",
                "population": null,
                "cases": {
                    "new": null,
                    "active": 1761712,
                    "critical": 6922,
                    "recovered": 2296857,
                    "1M_pop": null,
                    "total": 4273419
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 214850
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Asia",
                "country": "Asia",
                "population": null,
                "cases": {
                    "new": "+158",
                    "active": 1540024,
                    "critical": 19601,
                    "recovered": 7388219,
                    "1M_pop": null,
                    "total": 9099964
                },
                "deaths": {
                    "new": "+5",
                    "1M_pop": null,
                    "total": 171721
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "South-America",
                "country": "South-America",
                "population": null,
                "cases": {
                    "new": "+547",
                    "active": 1023164,
                    "critical": 15393,
                    "recovered": 6096511,
                    "1M_pop": null,
                    "total": 7353934
                },
                "deaths": {
                    "new": "+33",
                    "1M_pop": null,
                    "total": 234259
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Oceania",
                "country": "Oceania",
                "population": null,
                "cases": {
                    "new": "+51",
                    "active": 3011,
                    "critical": 24,
                    "recovered": 26463,
                    "1M_pop": null,
                    "total": 30346
                },
                "deaths": {
                    "new": "+5",
                    "1M_pop": null,
                    "total": 872
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Africa",
                "population": null,
                "cases": {
                    "new": "+8610",
                    "active": 217353,
                    "critical": 1457,
                    "recovered": 1138173,
                    "1M_pop": null,
                    "total": 1389010
                },
                "deaths": {
                    "new": "+176",
                    "1M_pop": null,
                    "total": 33484
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": null,
                "country": "Diamond-Princess",
                "population": null,
                "cases": {
                    "new": null,
                    "active": 48,
                    "critical": 4,
                    "recovered": 651,
                    "1M_pop": null,
                    "total": 712
                },
                "deaths": {
                    "new": null,
                    "1M_pop": null,
                    "total": 13
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Yemen",
                "population": 29960653,
                "cases": {
                    "new": "+3",
                    "active": 216,
                    "critical": 0,
                    "recovered": 1221,
                    "1M_pop": "67",
                    "total": 2022
                },
                "deaths": {
                    "new": "+2",
                    "1M_pop": "20",
                    "total": 585
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Asia",
                "country": "Tajikistan",
                "population": 9581524,
                "cases": {
                    "new": "+43",
                    "active": 1153,
                    "critical": 0,
                    "recovered": 7988,
                    "1M_pop": "962",
                    "total": 9214
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "8",
                    "total": 73
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:06+00:00"
            },
            {
                "continent": "Africa",
                "country": "Comoros",
                "population": 873456,
                "cases": {
                    "new": "+3",
                    "active": 14,
                    "critical": 0,
                    "recovered": 449,
                    "1M_pop": "538",
                    "total": 470
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "8",
                    "total": 7
                },
                "tests": {
                    "1M_pop": null,
                    "total": null
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            },
            {
                "continent": "Africa",
                "country": "Lesotho",
                "population": 2145796,
                "cases": {
                    "new": "+82",
                    "active": 607,
                    "critical": 0,
                    "recovered": 687,
                    "1M_pop": "618",
                    "total": 1327
                },
                "deaths": {
                    "new": null,
                    "1M_pop": "15",
                    "total": 33
                },
                "tests": {
                    "1M_pop": "8044",
                    "total": 17261
                },
                "day": "2020-09-18",
                "time": "2020-09-18T02:00:07+00:00"
            }
        ]
    
    }
}
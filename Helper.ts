/// <reference path="../scripts/typings/chart.js/index.d.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

module Helpers {
    export class ChartTitle { text: string; display: boolean; }
    export class UserOptions {
        responsive: boolean;
        title: ChartTitle;
    }
    export class ChartHelper {
        constructor(private userOptions: UserOptions) { }
        createChart(chartDataSourceUrl: string, canvasId: string) {
            var chart: Chart;
            $.ajax({
                dataType: "json",
                type: "GET",
                url: chartDataSourceUrl,
                success: (serverData) => {
                    var finalData = JSON.parse(serverData);
                    finalData["options"] = this.userOptions;
                    console.log(finalData);
                    chart = new Chart(<HTMLCanvasElement>document.getElementById(canvasId), finalData);
                }
            });
        }
    }
}
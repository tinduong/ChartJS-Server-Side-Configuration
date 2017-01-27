/// <reference path="../typings/bootstrap.datepicker/bootstrap.datepicker.d.ts" />
/// <reference path="../typings/toastr/toastr.d.ts" />
/// <reference path="../typings/jquery.datatables/jquery.datatables.d.ts" />
module Home {
   

    export class HomePage {
        // this.Variables
        chartDataUrl: string;
        userOptions: Helpers.UserOptions;
        table: DataTables.DataTable;

        // Start Application
        start(): void {
            this.buildUserOptions();
            var helper = new Helpers.ChartHelper(this.userOptions);
            helper.createChart(this.chartDataUrl, "myChart");
        }

        buildUserOptions(): void {
            this.userOptions = new Helpers.UserOptions();
            this.userOptions.responsive = true;
            this.userOptions.title = new Helpers.ChartTitle();
            this.userOptions.title.text = "Chart Title 3";
            this.userOptions.title.display = true;
        }
    }
}


module Helpers {
    export class ChartTitle { text: string; display: boolean; }
    export class UserOptions {
        responsive: boolean;
        title: ChartTitle;
    }
    export class ChartHelper {
        constructor(private userOptions: UserOptions) {  }
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

$(() => {
    // Get All URLs Here
    var chartDataUrl = $("#chart-data-url").attr("data-chartDataUrl");



    // init App
    var home = new Home.HomePage();
    home.chartDataUrl = chartDataUrl;

    // start app
    home.start();


});
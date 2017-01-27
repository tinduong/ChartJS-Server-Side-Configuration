/// <reference path="../typings/bootstrap.datepicker/bootstrap.datepicker.d.ts" />
/// <reference path="../typings/toastr/toastr.d.ts" />
/// <reference path="../typings/jquery.datatables/jquery.datatables.d.ts" />
var Home;
(function (Home) {
    var HomePage = (function () {
        function HomePage() {
        }
        // Start Application
        HomePage.prototype.start = function () {
            this.buildUserOptions();
            var helper = new Helpers.ChartHelper(this.userOptions);
            helper.createChart(this.chartDataUrl, "myChart");
        };
        HomePage.prototype.buildUserOptions = function () {
            this.userOptions = new Helpers.UserOptions();
            this.userOptions.responsive = true;
            this.userOptions.title = new Helpers.ChartTitle();
            this.userOptions.title.text = "Chart Title 3";
            this.userOptions.title.display = true;
        };
        return HomePage;
    }());
    Home.HomePage = HomePage;
})(Home || (Home = {}));
var Helpers;
(function (Helpers) {
    var ChartTitle = (function () {
        function ChartTitle() {
        }
        return ChartTitle;
    }());
    Helpers.ChartTitle = ChartTitle;
    var UserOptions = (function () {
        function UserOptions() {
        }
        return UserOptions;
    }());
    Helpers.UserOptions = UserOptions;
    var ChartHelper = (function () {
        function ChartHelper(userOptions) {
            this.userOptions = userOptions;
        }
        ChartHelper.prototype.createChart = function (chartDataSourceUrl, canvasId) {
            var _this = this;
            var chart;
            $.ajax({
                dataType: "json",
                type: "GET",
                url: chartDataSourceUrl,
                success: function (serverData) {
                    var finalData = JSON.parse(serverData);
                    finalData["options"] = _this.userOptions;
                    console.log(finalData);
                    chart = new Chart(document.getElementById(canvasId), finalData);
                }
            });
        };
        return ChartHelper;
    }());
    Helpers.ChartHelper = ChartHelper;
})(Helpers || (Helpers = {}));
$(function () {
    // Get All URLs Here
    var chartDataUrl = $("#chart-data-url").attr("data-chartDataUrl");
    // init App
    var home = new Home.HomePage();
    home.chartDataUrl = chartDataUrl;
    // start app
    home.start();
});

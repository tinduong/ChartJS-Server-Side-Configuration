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
            this.createChart(this.chartDataUrl, "myChart");
        };
        HomePage.prototype.createChart = function (chartDataSourceUrl, canvasId) {
            var chart;
            $.ajax({
                dataType: "json",
                type: "GET",
                url: chartDataSourceUrl,
                success: function (serverData) {
                    chart = new Chart(document.getElementById(canvasId), JSON.parse(serverData));
                }
            });
        };
        return HomePage;
    }());
    Home.HomePage = HomePage;
})(Home || (Home = {}));
$(function () {
    // Get All URLs Here
    var chartDataUrl = $("#chart-data-url").attr("data-chartDataUrl");
    // init App
    var home = new Home.HomePage();
    home.chartDataUrl = chartDataUrl;
    // start app
    home.start();
});
//# sourceMappingURL=Home.js.map
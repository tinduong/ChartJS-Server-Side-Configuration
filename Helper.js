/// <reference path="../scripts/typings/chart.js/index.d.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
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
//# sourceMappingURL=Helper.js.map
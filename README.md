# ChartJS-Server-Side-Configuration
Construct Chart configuration from server side and consume them for chart js
Created readme file testing

##How to use this with MVC
### Get Data Method (Controller)
```C#
  [HttpGet]
        public async Task<JsonResult> ChartData()
        {

            var chartConfig = CreateServerConfiguration();
            var test = chartConfig.MakeChart();
            return Json(chartConfig.MakeChart(), JsonRequestBehavior.AllowGet);
        }
        
     /// <summary>
        /// You can construct your configuration here
        /// You can call database to get data and fill your data set
        /// </summary>
        /// <returns></returns>
        private static ChartConfiguration CreateServerConfiguration()
        {
            var chartConfig = new ChartConfiguration
            {
                Type = ChartType.bar.GetChartType(),
                Data =
                {
                    Labels = {"Red", "Blue", "Yellow", "Green", "Purple", "Orange"},
                    Datasets =
                    {
                        new DataSetItem()
                        {
                            Label = "Test",
                            Data = new List<int> {12, 19, 3, 5, 20, 3},
                            BorderWidth = 1,
                            BackgroundColor = new List<string>
                            {
                                "rgba(255, 99, 132, 0.8)",
                                "rgba(54, 162, 235, 0.8)",
                                "rgba(255, 206, 86, 0.8)",
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(153, 102, 255, 0.8)",
                                "rgba(255, 159, 64, 0.8)"
                            }
                        }, new DataSetItem()
                        {
                            Label = "Test2",
                            Data = new List<int> {212, 42, 32, 15, 2, 3},
                            BorderWidth = 1,
                            BackgroundColor = new List<string>
                            {
                                "rgba(255, 99, 132, 0.8)",
                                "rgba(54, 162, 235, 0.8)",
                                "rgba(255, 206, 86, 0.8)",
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(153, 102, 255, 0.8)",
                                "rgba(255, 159, 64, 0.8)"
                            }
                        }
                    }
                },
                Options =
                {
                    DefaultFontSize = 50
                }
            };
            return chartConfig;
        }
        
```
### In the view
```html
<div>
    <canvas id="myChart" width="100" height="100"></canvas>
</div>
```
### Script
```javascript
 <script type="text/javascript">
        $(() => {
            var helper = new Helpers.ChartHelper(userOption);
            helper.createChart("@Url.Action("ChartData")","myChart");
        })
  </script>
 ```

# ChartJS-Server-Side-Configuration
Construct Chart configuration from server side and consume them for chart js
Created readme file testing

##Usage
### Get Data Method (Controller)
```C#
  [HttpGet]
        public async Task<JsonResult> ChartData()
        {
            var chartConfig = new ChartConfiguration
            {
                type = "bar",
                data = new Data
                {
                    labels = new List<string> { "Red", "Blue", "Yellow", "Green", "Purple", "Orange" },
                }

            };
            chartConfig.data.datasets = new List<DataSetItem>()
            {
                new DataSetItem()
                {
                    label = "Test",
                    data = new List<int> {12, 19, 3, 5, 2, 3},
                    borderWidth = 1,
                    backgroundColor = new List<string>
                    {
                        "rgba(255, 99, 132, 0.8)",
                        "rgba(54, 162, 235, 0.8)",
                        "rgba(255, 206, 86, 0.8)",
                        "rgba(75, 192, 192, 0.8)",
                        "rgba(153, 102, 255, 0.8)",
                        "rgba(255, 159, 64, 0.8)"
                    }
                }
            };



            var result = JsonConvert.SerializeObject(chartConfig);
            return Json(result, JsonRequestBehavior.AllowGet);
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
            var userOption = new Helpers.UserOptions();
            var helper = new Helpers.ChartHelper(userOption);

            helper.createChart("@Url.Action("ChartData")","myChart");
        })
  </script>
    ```

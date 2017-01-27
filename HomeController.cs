using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using BillyCorner.Common.Interface;
using BillyCorner.Common.Model;
using BillyCorner.Common.ViewModel;
using Newtonsoft.Json;

namespace BillyCorner.MVC.Controllers
{
    public class HomeController : Controller
    {
        private IRepository _repository;

        public HomeController(IRepository repository)
        {
            _repository = repository;
        }

        public ActionResult Index()
        {
            return View();
        }

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
                    label = "Test", data = new List<int> {12, 19, 3, 5, 2, 3}, borderWidth = 1,
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


    }

    public class ChartConfiguration
    {
        public string type { get; set; }
        public Data data { get; set; }
    }

    public class Options
    {
    }

    public class Data
    {
        // string array of lable
        public List<string> labels { get; set; }
        public List<DataSetItem> datasets { get; set; }

    }

    public class DataSets
    {
        public List<DataSetItem> datasetitems { get; set; }
    }

    public class DataSetItem
    {
        public string label { get; set; }
        public List<int> data { get; set; }
        public int borderWidth { get; set; }
        public List<string> backgroundColor { get; set; }

    }
}
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Formatting = System.Xml.Formatting;

namespace ChartServerConfiguration.Model
{
    /// <summary>
    /// Chart creating helper
    /// </summary>
    public static class Extensions
    {
        public static string GetChartType(this ChartType chartType)
        {
            return chartType.ToString();
        }

        public static string MakeChart(this ChartConfiguration configuration)
        {
            var result = JsonConvert.SerializeObject(configuration,(Newtonsoft.Json.Formatting) Formatting.Indented, new JsonSerializerSettings() { ContractResolver = new CamelCasePropertyNamesContractResolver() });
            return result;
        }
    }
}
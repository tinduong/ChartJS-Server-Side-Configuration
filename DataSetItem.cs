using System.Collections.Generic;

namespace ChartServerConfiguration.Model
{
    public class DataSetItem
    {
        public string label { get; set; }
        public List<int> data { get; set; }
        public int borderWidth { get; set; }
        public List<string> backgroundColor { get; set; }

    }
}
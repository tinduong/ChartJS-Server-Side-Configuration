using System.Collections.Generic;

namespace ChartServerConfiguration.Model
{
    public class Data
    {
        // string array of lable
        public List<string> labels { get; set; }
        public List<DataSetItem> datasets { get; set; }

    }
}
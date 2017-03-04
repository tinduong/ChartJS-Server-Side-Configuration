using System.Collections.Generic;

namespace ChartServerConfiguration.Model
{
    public class Data
    {
        public Data()
        {
            Labels = new List<string>();
            Datasets = new List<DataSetItem>();
        }
        // string array of lable
        public List<string> Labels { get; set; }
        public List<DataSetItem> Datasets { get; set; }
    }
}
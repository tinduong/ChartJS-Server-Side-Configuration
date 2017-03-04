using System.Collections.Generic;

namespace ChartServerConfiguration.Model
{
    public class DataSetItem
    {
        public string Label { get; set; }
        public List<int> Data { get; set; }
        public int BorderWidth { get; set; }
        public List<string> BackgroundColor { get; set; }

    }
}
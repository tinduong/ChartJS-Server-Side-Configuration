namespace ChartServerConfiguration.Model
{
    /// <summary>
    /// Chart configuration
    /// </summary>
    public class ChartConfiguration
    {
        public ChartConfiguration()
        {
            Options = new Options();
            Data = new Data();
        }

        public string Type { get; set; }
        public Data Data { get; set; }
        public Options Options { get; set; }
    }
}
using System.Security.AccessControl;

namespace ChartServerConfiguration.Model
{
    public class Options
    {
        public Options()
        {
            Title = new Title();
        }
        public string DefaultColor { get; set; }
        public int DefaultFontSize { get; set; } = 50;
        public Title Title { get; set; }
        public bool Responsive { get; set; } = true;

    }

    public class Title
    {
        public string Text { get; set; } = "Your Chart Title";
        public string Position { get; set; } = "top";
        public bool Display { get; set; } = true;
    }

    public class Animation
    {

    }
}
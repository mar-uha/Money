namespace Money.API.Models
{
    public class DashboardYear
    {
        public int Year { get; set; }

        public IEnumerable<DashboardMonth> Months { get; set; }
    }
}
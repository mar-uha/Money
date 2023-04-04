namespace Money.API.Models
{
    public class DashboardMonth
    {
        public int Month { get; set; }
        public IEnumerable<SumByCategory> Categories { get; set; }
    }
}
namespace Money.API.Models
{
    public class DashboardMonth
    {
        public int Month { get; set; }
        public decimal Credit { get; set; }
        public decimal Debit { get; set; }
        public IEnumerable<SumByCategory> Categories { get; set; }
    }
}
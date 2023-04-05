namespace Money.API.Models
{
    public class SumByCategory
    {
        public string Name { get; set; }

        public decimal Amount { get; set; }
        public decimal Percentage { get; set; }

        public IEnumerable<SumByCategory> SubCategory { get; set; }
    }
}
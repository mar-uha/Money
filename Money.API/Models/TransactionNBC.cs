namespace Money.API.Models
{
    public class TransactionNBC
    {
        public DateOnly Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public decimal Debit { get; set; }
        public decimal Credit { get; set; }
        public decimal Balance { get; set; }
    }
}

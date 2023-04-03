using CsvHelper.Configuration.Attributes;

namespace Money.API.Models
{
    public class TransactionNBC
    {
        public DateOnly Date { get; set; }
        public string Description { get; set; }
        public string Categorie { get; set; }
        public decimal Debit { get; set; }
        public decimal Credit { get; set; }
        public decimal Solde { get; set; }
    }
}

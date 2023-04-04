using CsvHelper.Configuration;
using CsvHelper;
using Money.API.Models;
using System.Globalization;
using Money.API.Data;

namespace Money.API.Services
{
    public class TransactionService : ITransactionService
    {
        private readonly ApiDbContext _context;

        public TransactionService(ApiDbContext ctx)
        {
            _context = ctx;
        }

        public void Import(IFormFile file)
        {
            List<TransactionNBC> transactions = new List<TransactionNBC>();

            var config = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                Delimiter = ";"
            };

            using (var stream = file.OpenReadStream())
            using (var sr = new StreamReader(stream))
            using (var csv = new CsvReader(sr, config))
            {
                var records = csv.GetRecords<TransactionNBC>();

                foreach (TransactionNBC record in records)
                {
                    var transaction = this._context.Transactions
                        .Where(t => t.Date == record.Date &&
                            t.Description == record.Description &&
                            t.Debit == t.Debit &&
                            t.Credit == t.Credit)
                        .SingleOrDefault();
                    
                    var category = this._context.Categories.Where(c => c.Name == record.Category).SingleOrDefault();

                    if (transaction == null)
                    {
                        this._context.Transactions.Add(new Transaction()
                        {
                            Description = record.Description,
                            Debit = record.Debit,
                            Credit = record.Credit,
                            Date = record.Date,
                            CategoryId = category.Id
                        });
                    }
                    else
                    {
                        transaction.CategoryId = category.Id;
                        this._context.Transactions.Update(transaction);
                    }
                }
                this._context.SaveChanges();
            }
        }
    }
}

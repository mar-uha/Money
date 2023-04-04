using Money.API.Models;

namespace Money.API.Services
{
    public interface ITransactionService
    {
        public Task<List<Transaction>> GetTransactionsAsync();
        public void Import(IFormFile file);
    }
}

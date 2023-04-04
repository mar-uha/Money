namespace Money.API.Services
{
    public interface ITransactionService
    {
        public void Import(IFormFile file);
    }
}

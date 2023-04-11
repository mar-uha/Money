using Money.API.Models;

namespace Money.API.Services
{
    public interface ICategoriesService
    {
        public Task<List<Category>> GetCategoriesAsync();

        public Task<int> UpdateBudgetAsync(long id, int budget);
    }
}

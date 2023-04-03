using Money.API.Models;

namespace Money.API.Services
{
    public interface ICategoryService
    {
        public Task<List<Category>> GetCategoriesAsync();
    }
}

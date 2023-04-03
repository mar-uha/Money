using Microsoft.EntityFrameworkCore;
using Money.API.Data;
using Money.API.Models;

namespace Money.API.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ApiDbContext _context;

        public CategoryService(ApiDbContext ctx)
        {
            _context = ctx;
        }

        public async Task<List<Category>> GetCategoriesAsync()
        {
            return await this._context.Categories.ToListAsync();
        }
    }
}

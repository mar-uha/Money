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
            return await this._context.Categories
                .Include(e => e.Children)
                .Where(c => c.ParentId == null)
                .ToListAsync();
        }

        public async Task<int> UpdateBudgetAsync(long id, int budget)
        {
            var category = _context.Categories.Where(c => c.Id == id).SingleOrDefault();
            category.Budget = budget;

            return await _context.SaveChangesAsync();
        }
    }
}

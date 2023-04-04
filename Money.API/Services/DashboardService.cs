using Money.API.Data;
using Money.API.Models;
using System.Data;

namespace Money.API.Services
{
    public class DashboardService : IDashboardService
    {
        private readonly ApiDbContext _context;

        public DashboardService(ApiDbContext ctx)
        {
            _context = ctx;
        }

        public DashboardYear GetDashboard(int year)
        {
            var transactions = _context.Transactions
                .Where(t => t.Date.Year == year)
                .Select(t => new
                {
                    t.CategoryId,
                    CategoryName = t.Category.Name,
                    t.Date.Month,
                    t.Date.Year,
                    Amount = t.Credit == 0 ? -t.Debit : t.Credit,
                    t.Debit,
                    t.Credit,
                }).ToList();

             return transactions.GroupBy(d => d.Year)
                .Select(d => new DashboardYear
                {
                    Year = d.Key,
                    Months = d.GroupBy(m => m.Month)
                              .Select(m => new DashboardMonth
                              {
                                  Month = m.Key,
                                  Debit = m.Sum(d => -d.Debit),
                                  Credit = m.Sum(d => d.Credit),
                                  Categories = m.GroupBy(c => new { c.CategoryId, c.CategoryName })
                                                .Select(c => new SumByCategory
                                                {
                                                    Name = c.Key.CategoryName,
                                                    Amount = c.Sum(u => u.Amount),
                                                })
                                                .OrderBy(o => o.Amount)
                              })
                })
                .SingleOrDefault();
        }
    }
}

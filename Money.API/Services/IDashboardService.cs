using Money.API.Models;

namespace Money.API.Services
{
    public interface IDashboardService
    {
        public IEnumerable<DashboardYear> GetDashboardAsync();
    }
}

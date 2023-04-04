using Money.API.Models;

namespace Money.API.Services
{
    public interface IDashboardService
    {
        public DashboardYear GetDashboard(int year);
    }
}

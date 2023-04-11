using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Money.API.Data;
using Money.API.Models;
using Money.API.Services;
using System.Text.Json;

namespace Money.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DashboardController : ControllerBase
    {

        private readonly ILogger<CategoriesController> _logger;
        private readonly IDashboardService _service;

        public DashboardController(ILogger<CategoriesController> logger, IDashboardService service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet]
        public DashboardYear Get(int year)
        {
            return _service.GetDashboard(year);
        }
    }
}
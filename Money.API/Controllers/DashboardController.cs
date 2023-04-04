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

        private readonly ILogger<CategoryController> _logger;
        private readonly IDashboardService _service;

        public DashboardController(ILogger<CategoryController> logger, IDashboardService service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet]
        public IEnumerable<DashboardYear> Get()
        {
            return _service.GetDashboardAsync();
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Money.API.Models;
using Money.API.Services;

namespace Money.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController : ControllerBase
    {

        private readonly ILogger<CategoriesController> _logger;
        private readonly ICategoriesService _service;

        public CategoriesController(ILogger<CategoriesController> logger, ICategoriesService service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet]
        public async Task<List<Category>> Get()
        {
            return await _service.GetCategoriesAsync();
        }

        [HttpPut("{id}/updateBudget")]
        public async Task<IActionResult> PutBudget(long id, [FromBody]int budget)
        {
            if (budget < 0)
            {
                return BadRequest();
            }

            await this._service.UpdateBudgetAsync(id, budget);

            return NoContent();
        }
    }
}
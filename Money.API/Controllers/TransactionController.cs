using Microsoft.AspNetCore.Mvc;
using Money.API.Models;
using Money.API.Services;

namespace Money.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransactionController : ControllerBase
    {

        private readonly ILogger<TransactionController> _logger;
        private readonly ITransactionService _service;

        public TransactionController(ILogger<TransactionController> logger, ITransactionService service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet]
        public async Task<List<Transaction>> Get()
        {
            return await _service.GetTransactionsAsync();
        }

        /// <summary>
        /// Single File Upload
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        [HttpPost("Import")]
        public async Task<ActionResult> ImportAsync([FromForm] IFormFile transactionsFile)
        {
            if (transactionsFile == null)
            {
                return BadRequest();
            }

            try
            {
                this._service.Import(transactionsFile);

                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Money.API.Data;
using Money.API.Models;
using Money.API.Services;
using System.Formats.Asn1;
using System.Globalization;
using System;
using System.Text.Json;
using CsvHelper;
using CsvHelper.Configuration;
using static System.Runtime.InteropServices.JavaScript.JSType;
using CsvHelper.TypeConversion;
using System.Reflection.PortableExecutable;

namespace Money.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransactionController : ControllerBase
    {

        private readonly ILogger<TransactionController> _logger;
        private readonly ICategoryService _service;

        public TransactionController(ILogger<TransactionController> logger, ICategoryService service)
        {
            _logger = logger;
            _service = service;
        }

        /// <summary>
        /// Single File Upload
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        [HttpPost("Import")]
        public async Task<ActionResult> Import([FromForm] IFormFile transactionsFile)
        {
            if (transactionsFile == null)
            {
                return BadRequest();
            }

            try
            {
                List<TransactionNBC> transactions = new List<TransactionNBC>();

                var config = new CsvConfiguration(CultureInfo.InvariantCulture)
                {
                    Delimiter = ";"
                };

                using (var stream = transactionsFile.OpenReadStream())
                using (var sr = new StreamReader(stream))
                using (var csv = new CsvReader(sr, config))
                {
                    var records = csv.GetRecords<TransactionNBC>();
                    transactions = records.ToList();
                }

                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
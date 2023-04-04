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
        private readonly ITransactionService _service;

        public TransactionController(ILogger<TransactionController> logger, ITransactionService service)
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
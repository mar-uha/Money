using Microsoft.EntityFrameworkCore;
using Money.API.Data;
using Money.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<ApiDbContext>(options =>
    options.UseSqlite("DataSource=money.db; Cache=Shared"));

builder.Services.AddScoped<ICategoryService, CategoryService>()
    .AddScoped<ITransactionService, TransactionService>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

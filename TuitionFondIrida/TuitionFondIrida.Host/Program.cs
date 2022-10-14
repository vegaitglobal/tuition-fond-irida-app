using MediatR;
using TuitionFondIrida.Api.Mappers;
using TuitionFondIrida.Domain.Repositories;
using TuitionFondIrida.Persistence.Repositories.Read;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IProductReadRepository, ProductReadRepository>();
builder.Services.AddScoped<IProductMapper, ProductMapper>();
builder.Services.AddMediatR(typeof(TuitionFondIrida.Application.Product.Queries.FindAll.FindAllProductsQuery).Assembly);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
using System.Text;
using System.Text.Json.Serialization;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using dotenv.net;
using TuitionFondIrida.Host;
using IPersistenceProductMapper = TuitionFondIrida.Persistence.Mappers.Abstractions.IProductMapper;
using PersistenceProductMapper = TuitionFondIrida.Persistence.Mappers.ProductMapper;

// load env vars with the specified options
DotEnv.Fluent()
    .WithExceptions()
    .WithTrimValues()
    .WithEncoding(Encoding.UTF8)
    .WithOverwriteExistingVars()
    .WithProbeForEnv(6)
    .Load();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Configuration
    .AddJsonFile("appsettings.json", false, false)
    .AddEnvironmentVariables()
    .AddInMemoryCollection()
    .AddCommandLine(args);

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
    })
    .AddControllersAsServices(); // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
    containerBuilder.RegisterModule(new CompositionRootModule(builder.Configuration)));

// Add Cors for SPA / Third Parties
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyPolicy",
        policy =>
        {
            policy.WithOrigins(
                    "https://localhost:3000",
                    "https://api.fond-irida.codeforacause.rs"
                )
                .WithMethods("PUT", "DELETE", "GET", "POST")
                .AllowAnyHeader();
        });
});


var app = builder.Build();

app.UseRouting();

app.UseCors("MyPolicy");

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
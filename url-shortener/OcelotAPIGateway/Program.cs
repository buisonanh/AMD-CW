//declare Ocelot libraries
using Ocelot.Cache.CacheManager;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// (A) config Ocelot gateway
builder.Configuration.AddJsonFile(
  "gateway.json",
  optional: false,
  reloadOnChange: true
  );

// (B) setup cache manager for Ocelot
builder.Services.AddOcelot(builder.Configuration).AddCacheManager(x =>
{
    x.WithDictionaryHandle();
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000") 
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

// app.UseHttpsRedirection();

app.UseCors("AllowFrontend");

// (C) enable Ocelot
await app.UseOcelot();


app.Run();
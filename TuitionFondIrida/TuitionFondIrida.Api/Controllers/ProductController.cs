using MediatR;
using Microsoft.AspNetCore.Mvc;
using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Application.Product.Queries.FindAll;

namespace TuitionFondIrida.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class ProductController : ControllerBase
{
    private readonly IMediator mediator;
    private readonly IProductMapper productMapper;

    public ProductController(IMediator mediator, IProductMapper productMapper)
    {
        this.mediator = mediator;
        this.productMapper = productMapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductDto>>> FindAllAsync([FromQuery] int pageNumber, CancellationToken cancellationToken)
    {
        var products = await this.mediator.Send(new FindAllProductsQuery(pageNumber), cancellationToken);

        return this.Ok(products.Select(this.productMapper.Create));
    }
}
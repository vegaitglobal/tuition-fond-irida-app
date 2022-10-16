using MediatR;
using Microsoft.AspNetCore.Mvc;
using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Application.Blog.Queries;

namespace TuitionFondIrida.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class BlogController : ControllerBase
{
    private readonly IMediator mediator;
    private readonly IBlogMapper blogMapper;

    public BlogController(IMediator mediator, IBlogMapper blogMapper)
    {
        this.mediator = mediator;
        this.blogMapper = blogMapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<PageOfDto<BlogDto>>>> FindAllAsync([FromQuery] int? pageNumber,
        CancellationToken cancellationToken)
    {
        var pageOfProducts = await this.mediator.Send(new FindAllBlogsQuery(pageNumber ?? 1), cancellationToken);

        return this.Ok(new PageOfDto<BlogDto> {
            Total = pageOfProducts.Total,
            Items = pageOfProducts.Items.Select(this.blogMapper.Create),
            PageSize = pageOfProducts.PageSize
        });   
    }
}
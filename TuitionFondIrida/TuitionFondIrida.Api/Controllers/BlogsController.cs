using MediatR;
using Microsoft.AspNetCore.Mvc;
using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Application.Blog.Queries.FindAll;
using TuitionFondIrida.Application.Blog.Queries.FindById;

namespace TuitionFondIrida.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class BlogsController : ControllerBase
{
    private readonly IMediator mediator;
    private readonly IBlogMapper blogMapper;

    public BlogsController(IMediator mediator, IBlogMapper blogMapper)
    {
        this.mediator = mediator;
        this.blogMapper = blogMapper;
    }

    [HttpGet]
    public async Task<ActionResult<PageOfDto<BlogDto>>> FindAllAsync([FromQuery] int? pageNumber, [FromQuery] string? blogCategory = "",
        CancellationToken cancellationToken = default)
    {
        var pageOfProducts = await this.mediator.Send(new FindAllBlogsQuery(pageNumber ?? 1, blogCategory), cancellationToken);

        return this.Ok(new PageOfDto<BlogDto>
        {
            Total = pageOfProducts.Total,
            Items = pageOfProducts.Items.Select(this.blogMapper.Create),
            PageSize = pageOfProducts.PageSize
        });
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<BlogDto>> FindByIdAsync([FromRoute] string id,
        CancellationToken cancellationToken)
    {
        var blog = await this.mediator.Send(new FindByIdQuery(id), cancellationToken);

        return this.blogMapper.Create(blog);
    }

    [HttpGet]
    [Route("Categories")]
    public async Task<ActionResult<IList<string>>> FindAllBlogsCategoriesAsync(CancellationToken cancellationToken = default) =>
        Ok(await this.mediator.Send(new FindAllBlogsCategoriesQuery(), cancellationToken));
}
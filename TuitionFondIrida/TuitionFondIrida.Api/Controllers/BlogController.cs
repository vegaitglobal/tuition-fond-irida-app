using MediatR;
using Microsoft.AspNetCore.Mvc;
using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Application.Blog.Queries;

namespace TuitionFondIrida.Api.Controllers
{
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
        public async Task<ActionResult<IEnumerable<BlogDto>>> FindAllAsync(CancellationToken cancellationToken)
        {
            var blogs = await mediator.Send(new FindAllBlogsQuery(), cancellationToken);

            return Ok(blogs.Select(blogMapper.Create));   
        }
    }
}

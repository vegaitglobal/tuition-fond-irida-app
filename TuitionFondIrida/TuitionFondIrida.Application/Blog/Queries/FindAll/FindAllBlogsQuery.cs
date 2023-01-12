using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Models.Common;

namespace TuitionFondIrida.Application.Blog.Queries.FindAll;

public class FindAllBlogsQuery : IQuery<PageOf<Domain.Models.Read.Blog>>
{
    public FindAllBlogsQuery(int pageNumber, string blogCategory)
    {
        this.PageNumber = pageNumber;
        this.BlogCategory = blogCategory;

    }

    public int PageNumber { get; }
    public string BlogCategory { get; }
}
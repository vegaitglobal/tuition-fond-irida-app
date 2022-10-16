using TuitionFondIrida.Application.Abstractions;

namespace TuitionFondIrida.Application.Blog.Queries.FindById;

public class FindByIdQuery : IQuery<Domain.Models.Read.Blog>
{
    public FindByIdQuery(string id)
    {
        this.Id = id;
    }

    public string Id { get; }
}
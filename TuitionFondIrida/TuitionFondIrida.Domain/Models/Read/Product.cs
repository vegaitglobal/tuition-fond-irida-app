using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class Product : IProduct
{
    public Product(Guid id, string title)
    {
        this.Id = id;
        this.Title = title;
    }

    public Guid Id { get; }

    public string Title { get; }
}
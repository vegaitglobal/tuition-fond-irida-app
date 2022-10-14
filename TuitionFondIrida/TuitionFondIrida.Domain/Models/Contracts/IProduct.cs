namespace TuitionFondIrida.Domain.Models.Contracts;

public interface IProduct
{
    Guid Id { get; }

    string Title { get; }
}
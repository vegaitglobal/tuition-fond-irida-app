using CSharpFunctionalExtensions;
using TuitionFondIrida.Domain.Models.Contracts;
using TuitionFondIrida.Domain.ValueObjects;

namespace TuitionFondIrida.Domain.Models.Write;

public class Product : IProduct
{
    private Product(Guid id, string title)
    {
        this.Id = id;
        this.Title = title;
    }

    public Guid Id { get; }

    public string Title { get; }

    public Result<Product> Create(Guid id, string title)
    {
        var idResult = Result.SuccessIf(id != Guid.Empty, "Id must not be empty");
        var titleResult = EntityTitle.Create(title);
        var result = Result.Combine(idResult, titleResult);

        return result.IsSuccess
            ? Result.Success(new Product(id, title))
            : Result.Failure<Product>(result.Error);
    }
}
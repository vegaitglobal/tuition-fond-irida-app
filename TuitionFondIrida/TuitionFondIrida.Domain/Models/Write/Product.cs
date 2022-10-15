using CSharpFunctionalExtensions;
using TuitionFondIrida.Domain.Models.Contracts;
using TuitionFondIrida.Domain.ValueObjects;

namespace TuitionFondIrida.Domain.Models.Write;

public class Product : IProduct
{
    public Product(string title, string description, IEnumerable<string> sizes, IAsset image)
    {
        this.Title = title;
        this.Description = description;
        this.Sizes = sizes;
        this.Image = image;
    }


    public string Title { get; }

    public string Description { get; }

    public IEnumerable<string> Sizes { get; }
    
    public IAsset Image { get; }

    public Result<Product> Create(string title, string description, IEnumerable<string> sizes, IAsset asset)
    {
        var titleResult = EntityTitle.Create(title);
        var result = Result.Combine(titleResult);

        return result.IsSuccess
            ? Result.Success(new Product(title, description, sizes, asset))
            : Result.Failure<Product>(result.Error);
    }
}
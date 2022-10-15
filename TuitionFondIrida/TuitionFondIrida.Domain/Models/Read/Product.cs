using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

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
}
using Contentful.Core.Models;

namespace TuitionIridaFond.Persistence.Contracts.Models;

public class Product
{
    public string Title { get; set; }

    public string Description { get; set; }

    public IEnumerable<string> Sizes { get; set; }

    public Asset Image { get; set; }
}
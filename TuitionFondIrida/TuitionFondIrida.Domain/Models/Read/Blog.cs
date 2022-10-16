using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class Blog : IBlog
{
    public Blog(string title, string shortDescription, IAsset image)
    {
        this.Title = title;
        this.ShortDescription = shortDescription;
        this.Image = image;
    }

    public string Title { get; }

    public string ShortDescription { get; }

    public IAsset Image { get; }
}
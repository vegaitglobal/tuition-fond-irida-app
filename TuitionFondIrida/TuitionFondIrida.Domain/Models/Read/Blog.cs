using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class Blog : IBlog
{
    public Blog(string id, string title, string shortDescription, IAsset image, string content, IEnumerable<string> categories, IAuthor blogAuthor)
    {
        this.Id = id;
        this.Title = title;
        this.ShortDescription = shortDescription;
        this.Image = image;
        this.Content = content;
        this.Categories = categories;
        this.BlogAuthor = blogAuthor;
    }
    public string Id { get; }

    public string Title { get; }

    public string ShortDescription { get; }

    public IAsset Image { get; }

    public string Content {get; }

    public IAuthor BlogAuthor {get; }

    public IEnumerable<string> Categories { get; }
}
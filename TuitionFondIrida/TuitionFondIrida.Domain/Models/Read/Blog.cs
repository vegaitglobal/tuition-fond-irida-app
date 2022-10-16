using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class Blog : IBlog
{
    public Blog(string title, string shortDescription, IAsset image, string content, IEnumerable<string> categories, IAuthor blogAuthor)
    {
        this.Title = title;
        this.ShortDescription = shortDescription;
        this.Image = image;
        this.Content = content;
        this.Categories = categories;
        this.BlogAuthor = blogAuthor;
    }

    public string Title { get; }

    public string ShortDescription { get; }

    public IAsset Image { get; }

    public string Content {get; set;}

    public IAuthor BlogAuthor {get; set;}

    public IEnumerable<string> Categories { get; set; }
}
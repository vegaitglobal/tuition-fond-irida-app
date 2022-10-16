namespace TuitionFondIrida.Domain.Models.Contracts;

public interface IBlog
{
    string Title { get; }

    string ShortDescription { get; }

    IAsset Image { get; }

    string Content {get;}

    IAuthor BlogAuthor {get;}

    IEnumerable<string> Categories { get;}
}

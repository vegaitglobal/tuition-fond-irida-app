using Contentful.Core.Models;

namespace TuitionIridaFond.Persistence.Contracts.Models;

public class Blog
{
    public string Title { get; set; }

    public Asset Image { get; set; }

    public string ShortDescription { get; set; }

    public Document Content {get; set;}

    public Author Author {get; set;}

    public IEnumerable<string> Categories { get; set; }


}
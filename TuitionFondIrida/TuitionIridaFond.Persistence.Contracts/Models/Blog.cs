using Contentful.Core.Models;

namespace TuitionIridaFond.Persistence.Contracts.Models;

public class Blog
{
    public string Title { get; set; }

    public string ShortDescription { get; set; }

    public Asset Image { get; set; }
}
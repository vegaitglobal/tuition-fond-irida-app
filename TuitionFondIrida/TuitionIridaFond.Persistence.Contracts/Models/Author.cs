using Contentful.Core.Models;

namespace TuitionIridaFond.Persistence.Contracts.Models;

public class Author {
    public string Name { get; set; }

    public Asset Picture { get; set; }
}
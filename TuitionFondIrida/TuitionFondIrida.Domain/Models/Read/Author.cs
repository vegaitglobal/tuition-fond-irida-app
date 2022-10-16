using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class Author : IAuthor {
    public string Name { get; set; }

    public IAsset Picture { get; set; }

}
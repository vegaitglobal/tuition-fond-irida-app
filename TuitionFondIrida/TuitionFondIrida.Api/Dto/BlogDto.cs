namespace TuitionFondIrida.Api.Dto;

public class BlogDto
{
    public string Id { get; set; }
    public string Title { get; set; }

    public string ShortDescription { get; set; }

    public AssetDto Image { get; set; }

    public string Content {get; set;}

    public AuthorDto BlogAuthor {get; set;}

    public IEnumerable<string> Categories { get; set; }
}

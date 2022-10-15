namespace TuitionFondIrida.Api.Dto;

public class ProductDto
{
    public string Title { get; set; }

    public string Description { get; set; }

    public IEnumerable<string> Sizes { get; set; }

    public AssetDto Image { get; set; }
}
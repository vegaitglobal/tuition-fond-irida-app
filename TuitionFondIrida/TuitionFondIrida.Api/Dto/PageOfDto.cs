namespace TuitionFondIrida.Api.Dto;

public class PageOfDto<T> where T : class
{
    public int Total { get; set; }

    public IEnumerable<T> Items { get; set; }
}
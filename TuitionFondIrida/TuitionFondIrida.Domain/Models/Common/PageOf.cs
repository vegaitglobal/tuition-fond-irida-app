namespace TuitionFondIrida.Domain.Models.Common;

public class PageOf<T> where T : class
{
    public PageOf(int total, IEnumerable<T> items)
    {
        this.Total = total;
        this.Items = items;
    }

    public int Total { get; }

    public IEnumerable<T> Items { get; }
}
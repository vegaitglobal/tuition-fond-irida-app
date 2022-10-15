namespace TuitionFondIrida.Domain.Models.Common;

public class PageOf<T> where T : class
{
    public PageOf(int total, IEnumerable<T> items, int pageSize)
    {
        this.Total = total;
        this.Items = items;
        this.PageSize = pageSize;
    }

    public int Total { get; }

    public IEnumerable<T> Items { get; }

    public int PageSize { get; }
}
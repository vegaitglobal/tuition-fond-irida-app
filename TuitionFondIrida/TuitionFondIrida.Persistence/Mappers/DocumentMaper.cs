using Contentful.Core.Models;
using TuitionFondIrida.Persistence.Mappers.Abstractions;

namespace TuitionFondIrida.Persistence.Mappers;

public class DocumentMapper : IDocumentMapper
{
    public string Create(Document document)
    {
        var htmlRenderer = new HtmlRenderer();
        var html = htmlRenderer.ToHtml(document);
        return html.Result;
    }
}
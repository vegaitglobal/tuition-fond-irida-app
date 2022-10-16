
using Contentful.Core.Models;
using TuitionFondIrida.Persistence.Mappers.Abstractions;

namespace TuitionFondIrida.Persistence.Mappers;
public class DocumentMapper : IDocumenMapper
{
    public string MapDocument(Document document)
    {
        var htmlRenderer = new HtmlRenderer();
        var html = htmlRenderer.ToHtml(document);     
        return html.Result;
    }
}
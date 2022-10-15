using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class File : IFile
{
    public File(string fileName, string contentType, string url)
    {
        this.FileName = fileName;
        this.ContentType = contentType;
        this.Url = url;
    }

    public string FileName { get; }

    public string ContentType { get; }

    public string Url { get; }
}
namespace TuitionFondIrida.Domain.Models.Contracts;

public interface IFile
{
    string FileName { get; }

    string ContentType { get; }

    string Url { get; }
}
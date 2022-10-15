using CSharpFunctionalExtensions;

namespace TuitionFondIrida.Application.ApiAdapters;

public interface IEmailServiceApiAdapter
{
    Task<Result> SendAsync(string to, string subject, string body);
}
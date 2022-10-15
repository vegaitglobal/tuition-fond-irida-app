using CSharpFunctionalExtensions;

namespace TuitionFondIrida.Application.ApiAdapters;

public interface IEmailServiceApiAdapter
{
    Task<Result> SendAsync(string firstName, string lastName, string toEmailAddress, string subject, string body, string phoneNumber);
}
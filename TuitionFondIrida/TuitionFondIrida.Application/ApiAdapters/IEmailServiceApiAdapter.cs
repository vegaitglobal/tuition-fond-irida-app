using CSharpFunctionalExtensions;

namespace TuitionFondIrida.Application.ApiAdapters;

public interface IEmailServiceApiAdapter
{
    Task<Result> SendContactUsAsync(string toEmailAddress, string firstName, string lastName, string additionalComment,
        string phoneNumber);

    Task<Result> SendOrderAsync(string toEmailAddress, string firstName, string lastName, string additionalComment,
        string phoneNumber, string productName, string selectedSize);
}
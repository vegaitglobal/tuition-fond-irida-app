using CSharpFunctionalExtensions;
using TuitionFondIrida.Application.Abstractions;

namespace TuitionFondIrida.Application.Email.Commands;

public class SendEmailCommand : ICommand<Result>
{
    public SendEmailCommand(string firstName, string lastName, string toEmailAddress, string phoneNumber,
        string additionalComment)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.ToEmailAddress = toEmailAddress;
        this.PhoneNumber = phoneNumber;
        this.AdditionalComment = additionalComment;
    }

    public string FirstName { get; }

    public string LastName { get; }

    public string ToEmailAddress { get; }

    public string PhoneNumber { get; }

    public string AdditionalComment { get; }
}
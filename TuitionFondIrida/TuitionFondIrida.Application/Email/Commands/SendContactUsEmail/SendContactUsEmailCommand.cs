using CSharpFunctionalExtensions;
using TuitionFondIrida.Application.Abstractions;

namespace TuitionFondIrida.Application.Email.Commands.SendContactUsEmail;

public class SendContactUsEmailCommand : ICommand<Result>
{
    public SendContactUsEmailCommand(string firstName, string lastName, string toEmailAddress, string phoneNumber,
        string additionalComment, bool isFromContactForm)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.ToEmailAddress = toEmailAddress;
        this.PhoneNumber = phoneNumber;
        this.AdditionalComment = additionalComment;
        this.IsFromContactForm = isFromContactForm;
    }

    public string FirstName { get; }

    public string LastName { get; }

    public string ToEmailAddress { get; }

    public string PhoneNumber { get; }

    public string AdditionalComment { get; }

    public bool IsFromContactForm { get; }
}
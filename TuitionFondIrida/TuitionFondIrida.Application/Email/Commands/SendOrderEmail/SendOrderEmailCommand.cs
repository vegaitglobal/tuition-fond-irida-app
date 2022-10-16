using CSharpFunctionalExtensions;
using TuitionFondIrida.Application.Abstractions;

namespace TuitionFondIrida.Application.Email.Commands.SendOrderEmail;

public class SendOrderEmailCommand : ICommand<Result>
{
    public SendOrderEmailCommand(string firstName, string lastName, string toEmailAddress, string phoneNumber,
        string additionalComment, string productName, string selectedSize)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.ToEmailAddress = toEmailAddress;
        this.PhoneNumber = phoneNumber;
        this.AdditionalComment = additionalComment;
        this.ProductName = productName;
        this.SelectedSize = selectedSize;
    }

    public string FirstName { get; }

    public string LastName { get; }

    public string ToEmailAddress { get; }

    public string PhoneNumber { get; }

    public string AdditionalComment { get; }
    
    public string ProductName { get; }

    public string SelectedSize { get; }
}
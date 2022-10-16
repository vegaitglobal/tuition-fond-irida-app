using System.Net.Mail;
using CSharpFunctionalExtensions;
using TuitionFondIrida.ApiAdapter.Factory;
using TuitionFondIrida.Application.ApiAdapters;

namespace TuitionFondIrida.ApiAdapter.ApiAdapters;

public class EmailServiceApiAdapter : IEmailServiceApiAdapter
{
    private readonly SmtpClient smtpClient;
    private readonly EmailMessageFactory emailMessageFactory;

    public EmailServiceApiAdapter(SmtpClient smtpClient, EmailMessageFactory emailMessageFactory)
    {
        this.smtpClient = smtpClient;
        this.emailMessageFactory = emailMessageFactory;
    }

    public async Task<Result> SendContactUsAsync(string toEmailAddress, string firstName, string lastName,
        string additionalComment, string phoneNumber)
    {
        try
        {
            var message = this.emailMessageFactory.CreateForContactUs(firstName, lastName, toEmailAddress,
                additionalComment, phoneNumber);
            await this.smtpClient.SendMailAsync(message);
            return Result.Success();
        }
        catch (Exception ex)
        {
            return Result.Failure(ex.Message);
        }
    }

    public async Task<Result> SendOrderAsync(string toEmailAddress, string firstName, string lastName, string additionalComment,
        string phoneNumber, string productName, string selectedSize)
    {
        try
        {
            var message = this.emailMessageFactory.CreateForOrder(firstName, lastName, toEmailAddress,
                additionalComment, phoneNumber, productName, selectedSize);
            await this.smtpClient.SendMailAsync(message);
            return Result.Success();
        }
        catch (Exception ex)
        {
            return Result.Failure(ex.Message);
        }    }
}
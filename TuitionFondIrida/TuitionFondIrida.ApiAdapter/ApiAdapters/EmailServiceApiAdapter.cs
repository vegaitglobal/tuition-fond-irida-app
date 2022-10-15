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

    public async Task<Result> SendAsync(string firstName, string lastName, string toEmailAddress, string subject,
        string body, string phoneNumber)
    {
        try
        {
            var message = this.emailMessageFactory.Create(toEmailAddress, subject, body, firstName, lastName, phoneNumber);
            await this.smtpClient.SendMailAsync(message);
            return Result.Success();
        }
        catch (Exception ex)
        {
            return Result.Failure(ex.Message);
        }
    }
}
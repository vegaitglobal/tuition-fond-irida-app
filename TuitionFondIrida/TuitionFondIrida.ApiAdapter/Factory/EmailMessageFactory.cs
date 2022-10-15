using System.Net.Mail;
using Microsoft.Extensions.Configuration;

namespace TuitionFondIrida.ApiAdapter.Factory;

public class EmailMessageFactory
{
    private readonly IConfiguration configuration;

    public EmailMessageFactory(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    public MailMessage Create(string to, string subject, string body, string firstName, string lastName,
        string phoneNumber)
    {
        return new MailMessage(this.configuration["AppSettings:EmailClient:FromEmailAddress"], to, subject, body);
    }
}
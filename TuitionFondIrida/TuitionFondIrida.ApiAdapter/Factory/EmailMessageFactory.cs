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

    public MailMessage CreateForContactUs(string firstName, string lastName, string toEmailAddress,
        string additionalComment, string phoneNumber)
    {
        var message = new MailMessage();
        message.From = new MailAddress(this.configuration["AppSettings:EmailClient:FromEmailAddress"]);
        message.Subject = "Putevima devjočica: Kontakt forma";
        message.To.Add(new MailAddress(toEmailAddress));
        message.Body = new HtmlTemplates(firstName, lastName, toEmailAddress, additionalComment, phoneNumber)
            .CrateContactUsHtmlTemplate();
        message.IsBodyHtml = true;

        return message;
    }
}
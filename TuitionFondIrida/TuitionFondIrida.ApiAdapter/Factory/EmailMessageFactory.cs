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
        message.To.Add(new MailAddress(this.configuration["AppSettings:EmailClient:FromEmailAddress"]));
        message.Body =
            new ConvertableContactUsTemplate(firstName, lastName, toEmailAddress, additionalComment, phoneNumber)
                .Convert();
        message.IsBodyHtml = true;

        return message;
    }

    public MailMessage CreateForOrder(string firstName, string lastName, string toEmailAddress,
        string additionalComment, string phoneNumber, string productName, string selectedSize)
    {
        var message = new MailMessage();
        message.From = new MailAddress(this.configuration["AppSettings:EmailClient:FromEmailAddress"]);
        message.Subject = "Putevima devjočica: Narudžbina";
        message.To.Add(new MailAddress(this.configuration["AppSettings:EmailClient:FromEmailAddress"]));
        message.Body = new ConvertableOrderEmailTemplate(firstName, lastName, toEmailAddress, additionalComment,
                phoneNumber, productName, selectedSize)
            .Convert();
        message.IsBodyHtml = true;

        return message;
    }
}
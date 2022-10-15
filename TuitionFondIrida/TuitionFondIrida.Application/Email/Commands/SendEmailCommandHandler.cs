using CSharpFunctionalExtensions;
using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Application.ApiAdapters;

namespace TuitionFondIrida.Application.Email.Commands;

public class SendEmailCommandHandler : ICommandHandler<SendEmailCommand, Result>
{
    private readonly IEmailServiceApiAdapter emailServiceApiAdapter;

    public SendEmailCommandHandler(IEmailServiceApiAdapter emailServiceApiAdapter)
    {
        this.emailServiceApiAdapter = emailServiceApiAdapter;
    }

    public async Task<Result> Handle(SendEmailCommand request, CancellationToken cancellationToken)
    {
        // TODO: add actual body, find out what is the subject for contact form and order
        return await this.emailServiceApiAdapter.SendAsync(
            request.FirstName,
            request.LastName,
            request.ToEmailAddress,
            request.IsFromContactForm ? "Contact us" : "Order & Donate",
            request.AdditionalComment,
            request.PhoneNumber);
    }
}
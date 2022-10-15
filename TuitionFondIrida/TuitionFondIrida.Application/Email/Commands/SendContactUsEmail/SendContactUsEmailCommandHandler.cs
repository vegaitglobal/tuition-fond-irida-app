using CSharpFunctionalExtensions;
using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Application.ApiAdapters;

namespace TuitionFondIrida.Application.Email.Commands.SendContactUsEmail;

public class SendContactUsEmailCommandHandler : ICommandHandler<SendContactUsEmailCommand, Result>
{
    private readonly IEmailServiceApiAdapter emailServiceApiAdapter;

    public SendContactUsEmailCommandHandler(IEmailServiceApiAdapter emailServiceApiAdapter)
    {
        this.emailServiceApiAdapter = emailServiceApiAdapter;
    }

    public async Task<Result> Handle(SendContactUsEmailCommand request, CancellationToken cancellationToken)
    {
        // TODO: add actual body, find out what is the subject for contact form and order
        return await this.emailServiceApiAdapter.SendContactUsAsync(
            request.ToEmailAddress,
            request.FirstName,
            request.LastName,
            request.AdditionalComment,
            request.PhoneNumber);
    }
}
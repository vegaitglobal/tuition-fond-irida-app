using CSharpFunctionalExtensions;
using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Application.ApiAdapters;

namespace TuitionFondIrida.Application.Email.Commands.SendOrderEmail;

public class SendOrderEmailCommandHandler : ICommandHandler<SendOrderEmailCommand, Result>
{
    private readonly IEmailServiceApiAdapter emailServiceApiAdapter;

    public SendOrderEmailCommandHandler(IEmailServiceApiAdapter emailServiceApiAdapter)
    {
        this.emailServiceApiAdapter = emailServiceApiAdapter;
    }

    public async Task<Result> Handle(SendOrderEmailCommand request, CancellationToken cancellationToken)
    {
        return await this.emailServiceApiAdapter.SendOrderAsync(
            request.ToEmailAddress,
            request.FirstName,
            request.LastName,
            request.AdditionalComment,
            request.PhoneNumber,
            request.ProductName,
            request.SelectedSize);
    }
}
using MediatR;
using Microsoft.AspNetCore.Mvc;
using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Application.PaymentSlip.Queries.Find;

namespace TuitionFondIrida.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class PaymentSlipController
{
    private readonly IMediator mediator;
    private readonly IPaymentSlipMapper paymentSlipMapper;

    public PaymentSlipController(IMediator mediator, IPaymentSlipMapper paymentSlipMapper)
    {
        this.mediator = mediator;
        this.paymentSlipMapper = paymentSlipMapper;
    }

    [HttpGet]
    public async Task<ActionResult<PaymentSlipDto>> FindAsync(CancellationToken cancellationToken)
    {
        var paymentSlip = await this.mediator.Send(new FindQuery(), cancellationToken);
        return this.paymentSlipMapper.Create(paymentSlip);
    }
}
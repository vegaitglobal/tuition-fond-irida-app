using MediatR;
using Microsoft.AspNetCore.Mvc;
using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Application.Email.Commands;

namespace TuitionFondIrida.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class EmailController : ControllerBase
{
    private readonly IMediator mediator;

    public EmailController(IMediator mediator)
    {
        this.mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> SendEmail([FromBody] EmailDto emailDto, CancellationToken cancellationToken)
    {
        var result = await this.mediator.Send(new SendEmailCommand(
            emailDto.FirstName,
            emailDto.LastName,
            emailDto.ToEmailAddress,
            emailDto.PhoneNumber,
            emailDto.AdditionalComment,
            emailDto.IsFromContactForm), cancellationToken);

        return result.IsFailure ? this.BadRequest() : this.Ok();
    }
}
using MediatR;
using Microsoft.AspNetCore.Mvc;
using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Application.Email.Commands.SendContactUsEmail;

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

    [HttpPost("/contact-us")]
    public async Task<IActionResult> SendEmail([FromBody] EmailDto emailDto, CancellationToken cancellationToken)
    {
        var result = await this.mediator.Send(new SendContactUsEmailCommand(
            emailDto.FirstName,
            emailDto.LastName,
            emailDto.ToEmailAddress,
            emailDto.PhoneNumber,
            emailDto.AdditionalComment,
            emailDto.IsFromContactForm), cancellationToken);

        return result.IsFailure ? this.BadRequest() : this.Ok();
    }
}
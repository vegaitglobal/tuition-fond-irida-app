using MediatR;
using Microsoft.AspNetCore.Mvc;
using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Application.Email.Commands.SendContactUsEmail;
using TuitionFondIrida.Application.Email.Commands.SendOrderEmail;

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
    [Route("contact-us")]
    public async Task<IActionResult> SendContactUsEmailAsync([FromBody] ContactUsEmailDto emailDto, CancellationToken cancellationToken)
    {
        var result = await this.mediator.Send(new SendContactUsEmailCommand(
            emailDto.FirstName,
            emailDto.LastName,
            emailDto.EmailAddress,
            emailDto.PhoneNumber,
            emailDto.AdditionalComment), cancellationToken);

        return result.IsFailure ? this.BadRequest() : this.Ok();
    }
    
    
    [HttpPost]
    [Route("order")]
    public async Task<IActionResult> SendOrderEmailAsync([FromBody] OrderEmailDto emailDto, CancellationToken cancellationToken)
    {
        var result = await this.mediator.Send(new SendOrderEmailCommand(
            emailDto.FirstName,
            emailDto.LastName,
            emailDto.EmailAddress,
            emailDto.PhoneNumber,
            emailDto.AdditionalComment,
            emailDto.ProductName,
            emailDto.SelectedSize), cancellationToken);

        return result.IsFailure ? this.BadRequest() : this.Ok();
    }
}
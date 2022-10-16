using MediatR;
using Microsoft.AspNetCore.Mvc;
using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Application.Quiz.Queries.GetRandomQuestions;

namespace TuitionFondIrida.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class QuizController : ControllerBase
{
    private readonly IMediator mediator;
    private readonly IQuestionMapper questionMapper;

    public QuizController(IMediator mediator, IQuestionMapper questionMapper)
    {
        this.mediator = mediator;
        this.questionMapper = questionMapper;
    }

    [HttpGet]
    [Route("questions")]
    public async Task<ActionResult<IEnumerable<QuestionDto>>> GetRandomQuestionsAsync(CancellationToken cancellationToken)
    {
        var questions = await this.mediator.Send(new GetRandomQuestionsQuery(), cancellationToken);

        return this.Ok(questions.Select(this.questionMapper.Create));
    }
}
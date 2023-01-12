using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Models.Read;
using TuitionFondIrida.Domain.Repositories;

namespace TuitionFondIrida.Application.Quiz.Queries.GetRandomQuestions;

public class GetRandomQuestionsQueryHandler : IQueryHandler<GetRandomQuestionsQuery, IEnumerable<Question>>
{
    private readonly IQuizReadRepository quizReadRepository;

    private const int QuestionsNumber = 10;


    public GetRandomQuestionsQueryHandler(IQuizReadRepository quizReadRepository)
    {
        this.quizReadRepository = quizReadRepository;
    }

    public async Task<IEnumerable<Question>> Handle(GetRandomQuestionsQuery request, CancellationToken cancellationToken)
    {
        return await this.quizReadRepository.GetRandomQuestions(QuestionsNumber, cancellationToken);
    }
}
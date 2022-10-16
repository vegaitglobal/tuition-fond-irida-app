using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Domain.Repositories;

public interface IQuizReadRepository
{
    Task<IEnumerable<Question>> GetRandomQuestions(int questionsNumber, CancellationToken cancellationToken);
}
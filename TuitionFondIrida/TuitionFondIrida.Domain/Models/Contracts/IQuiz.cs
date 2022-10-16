namespace TuitionFondIrida.Domain.Models.Contracts;

public interface IQuiz
{
    string Title { get; }
    IEnumerable<IQuestion> Questions { get; }
}
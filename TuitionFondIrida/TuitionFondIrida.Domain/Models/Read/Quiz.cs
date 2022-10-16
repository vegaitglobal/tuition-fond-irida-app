using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class Quiz : IQuiz
{
    public Quiz(string title, IEnumerable<IQuestion> questions)
    {
        this.Title = title;
        this.Questions = questions;
    }

    public string Title { get; }

    public IEnumerable<IQuestion> Questions { get; }
}
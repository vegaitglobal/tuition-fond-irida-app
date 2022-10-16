using CSharpFunctionalExtensions;
using TuitionFondIrida.Domain.Models.Contracts;
using TuitionFondIrida.Domain.ValueObjects;

namespace TuitionFondIrida.Domain.Models.Write;

public class Quiz : IQuiz
{
    private Quiz(string title, IEnumerable<IQuestion> questions)
    {
        this.Title = title;
        this.Questions = questions;
    }

    public string Title { get; }

    public IEnumerable<IQuestion> Questions { get; }

    public Result<Quiz> Create(string title, IEnumerable<IQuestion> questions)
    {
        var titleResult = EntityTitle.Create(title);
        var result = Result.Combine(titleResult);

        //validate questions
        
        return result.IsSuccess
            ? Result.Success(new Quiz(title, questions))
            : Result.Failure<Quiz>(result.Error);
    }
}
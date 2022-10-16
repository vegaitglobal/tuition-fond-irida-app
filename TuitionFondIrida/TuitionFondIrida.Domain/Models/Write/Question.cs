using CSharpFunctionalExtensions;
using TuitionFondIrida.Domain.Models.Contracts;
using TuitionFondIrida.Domain.ValueObjects;

namespace TuitionFondIrida.Domain.Models.Write;

public class Question : IQuestion
{
    private Question(string text, string answer1, string answer2, string answer3, string answer4)
    {
        this.Text = text;
        this.Answer1 = answer1;
        this.Answer2 = answer2;
        this.Answer3 = answer3;
        this.Answer4 = answer4;
    }

    public string Text { get; }
    public string Answer1 { get; }
    //string Answer1Characteristics { get; }
    public string Answer2 { get; }
    //string Answer2Characteristics { get; }
    public string Answer3 { get; }
    //string Answer3Characteristics { get; }
    public string Answer4 { get; }
    //string Answer4Characteristics { get; }

    public Result<Question> Create(string title, string answer1, string answer2, string answer3, string answer4)
    {
        var titleResult = EntityTitle.Create(title);
        var result = Result.Combine(titleResult);

        var answer1Result = EntityTitle.Create(answer1);
        result = Result.Combine(answer1Result);

        var answer2Result = EntityTitle.Create(answer2);
        result = Result.Combine(answer2Result);

        var answer3Result = EntityTitle.Create(answer3);
        result = Result.Combine(answer3Result);

        var answer4Result = EntityTitle.Create(answer4);
        result = Result.Combine(answer4Result);

        return result.IsSuccess
            ? Result.Success(new Question(title, answer1, answer2, answer3, answer4))
            : Result.Failure<Question>(result.Error);
    }
}
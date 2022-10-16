using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class Question : IQuestion
{
    public Question(string text, string answer1, string answer2, string answer3, string answer4)
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

}
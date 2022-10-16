namespace TuitionFondIrida.Domain.Models.Contracts;

public interface IQuestion
{
    string Text { get; }
    string Answer1 { get; }
    //string Answer1Characteristics { get; }
    string Answer2 { get; }
    //string Answer2Characteristics { get; }
    string Answer3 { get; }
    //string Answer3Characteristics { get; }
    string Answer4 { get; }
    //string Answer4Characteristics { get; }
}
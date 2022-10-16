using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Api.Mappers;

public class QuestionMapper : IQuestionMapper
{
    public QuestionDto Create(Question question)
    {
        return new QuestionDto()
        {
            Text = question.Text,
            Answer1 = question.Answer1,
            Answer2 = question.Answer2,
            Answer3 = question.Answer3,
            Answer4 = question.Answer4
        };
    }
}

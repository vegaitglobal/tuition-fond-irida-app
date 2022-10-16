using System.Text.Json.Nodes;
using TuitionFondIrida.Persistence.Mappers.Abstractions;
using TuitionIridaFond.Persistence.Contracts.Models;

namespace TuitionFondIrida.Persistence.Mappers;

public class QuizMapper : IQuizMapper
{
    public Domain.Models.Read.Quiz Create(Quiz quiz)
    {
        //not used, skipped for simplicity
        return new Domain.Models.Read.Quiz(quiz.Title, null);// quiz.Questions);
    }
}
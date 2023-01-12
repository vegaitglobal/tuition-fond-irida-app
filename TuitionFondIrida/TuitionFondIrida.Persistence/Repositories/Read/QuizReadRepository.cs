using Contentful.Core;
using Contentful.Core.Search;
using Newtonsoft.Json;
using TuitionFondIrida.Domain.Repositories;
using TuitionFondIrida.Persistence.Mappers.Abstractions;
using Quiz = TuitionIridaFond.Persistence.Contracts.Models.Quiz;

namespace TuitionFondIrida.Persistence.Repositories.Read;

public class QuizReadRepository : IQuizReadRepository
{
    private readonly IContentfulClient contentfulClient;
    private readonly IQuizMapper quizMapper;

    public QuizReadRepository(IContentfulClient contentfulClient, IQuizMapper quizMapper)
    {
        this.contentfulClient = contentfulClient;
        this.quizMapper = quizMapper;
    }
    
    public async Task<IEnumerable<Domain.Models.Read.Question>> GetRandomQuestions(int questionsNumber, CancellationToken cancellationToken)
    {

        var result = new List<Domain.Models.Read.Question>();

        var quizzes =
            await this.contentfulClient.GetEntriesByType(
                ContentfulContentTypeIds.Quiz,
                new QueryBuilder<Quiz>().OrderBy("-sys.createdAt"),
                cancellationToken: cancellationToken);

        var quiz = quizzes.First();
        if(quiz == null) return result;

        var questions = JsonConvert.DeserializeObject<List<Domain.Models.Read.Question>>(quiz.Questions.ToString());

        var shuffledQuestions = new ShuffledQuestions(questions).Questions.Take(questionsNumber);

        return shuffledQuestions;
    }
}
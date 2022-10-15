using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Repositories;

namespace TuitionFondIrida.Application.Blog.Queries
{
    public class FindAllBlogsQueryHandler : IQueryHandler<FindAllBlogsQuery, IEnumerable<Domain.Models.Read.Blog>>
    {
        private readonly IBlogReadRepository blogReadRepository;

        public FindAllBlogsQueryHandler(IBlogReadRepository blogReadRepository)
        {
            this.blogReadRepository = blogReadRepository;
        }   

        public async Task<IEnumerable<Domain.Models.Read.Blog>> Handle(FindAllBlogsQuery request, CancellationToken cancellationToken)
        {
            return await blogReadRepository.FindAllAsync(cancellationToken);
        }
    }
}

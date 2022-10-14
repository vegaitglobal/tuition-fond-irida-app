using MediatR;

namespace TuitionFondIrida.Application.Abstractions;

public interface IQueryHandler<in TRequest, TResponse> : IRequestHandler<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
}
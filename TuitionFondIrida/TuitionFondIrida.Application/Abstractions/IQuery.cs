using MediatR;

namespace TuitionFondIrida.Application.Abstractions;

public interface IQuery<out TResponse> : IRequest<TResponse>
{
}
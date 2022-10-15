using MediatR;

namespace TuitionFondIrida.Application.Abstractions;

public interface ICommand<out TResponse> : IRequest<TResponse>
{
}
using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Api.Mappers.Abstractions;

public interface IBlogMapper
{
    BlogDto Create(Blog blog);
}
using CSharpFunctionalExtensions;

namespace TuitionFondIrida.Domain.ValueObjects;

public class EntityTitle : ValueObject
{
    private readonly string value;

    public EntityTitle(string value)
    {
        this.value = value;
    }

    public static Result<EntityTitle> Create(string value)
    {
        return string.IsNullOrWhiteSpace(value)
            ? Result.Failure<EntityTitle>("Entity name must not be empty")
            : Result.Success(new EntityTitle(value));
    }

    protected override IEnumerable<object> GetEqualityComponents()
    {
        throw new NotImplementedException();
    }
}
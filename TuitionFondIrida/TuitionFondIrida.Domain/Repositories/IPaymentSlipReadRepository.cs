using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Domain.Repositories;

public interface IPaymentSlipReadRepository
{
    Task<PaymentSlip> GetAsync(CancellationToken cancellationToken);
}
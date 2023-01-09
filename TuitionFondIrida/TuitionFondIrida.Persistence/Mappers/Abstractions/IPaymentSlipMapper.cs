using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Persistence.Mappers.Abstractions;

public interface IPaymentSlipMapper
{
    PaymentSlip Create(TuitionIridaFond.Persistence.Contracts.Models.PaymentSlip paymentSlip);
}
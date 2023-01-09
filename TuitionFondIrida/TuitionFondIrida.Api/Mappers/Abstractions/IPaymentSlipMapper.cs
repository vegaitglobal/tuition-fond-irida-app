using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Api.Mappers.Abstractions;

public interface IPaymentSlipMapper
{
    PaymentSlipDto Create(IPaymentSlip paymentSlip);
}
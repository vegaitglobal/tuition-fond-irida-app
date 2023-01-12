using TuitionFondIrida.Api.Dto;
using TuitionFondIrida.Api.Mappers.Abstractions;
using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Api.Mappers;

public class PaymentSlipMapper : IPaymentSlipMapper
{
    public PaymentSlipDto Create(IPaymentSlip paymentSlip)
    {
        return new PaymentSlipDto
        {
            Sender = paymentSlip.Sender,
            PurposeOfPayment = paymentSlip.PurposeOfPayment,
            Receiver = paymentSlip.Receiver,
            CodeOfPayment = paymentSlip.CodeOfPayment,
            Currency = paymentSlip.Currency,
            Amount = paymentSlip.Amount,
            ReceiverAccount = paymentSlip.ReceiverAccount,
            ModelNumber = paymentSlip.ModelNumber,
            ReferenceNumber = paymentSlip.ReferenceNumber
        };
    }
}
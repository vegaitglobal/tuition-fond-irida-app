using TuitionFondIrida.Domain.Models.Read;
using TuitionFondIrida.Persistence.Mappers.Abstractions;

namespace TuitionFondIrida.Persistence.Mappers;

public class PaymentSlipMapper : IPaymentSlipMapper
{
    public PaymentSlip Create(TuitionIridaFond.Persistence.Contracts.Models.PaymentSlip paymentSlip)
    {
        return new PaymentSlip(
            paymentSlip.Sender,
            paymentSlip.PurposeOfPayment,
            paymentSlip.Receiver,
            paymentSlip.CodeOfPayment,
            paymentSlip.Currency,
            paymentSlip.Amount,
            paymentSlip.ReceiverAccount,
            paymentSlip.ModelNumber,
            paymentSlip.ReferenceNumber
        );
    }
}
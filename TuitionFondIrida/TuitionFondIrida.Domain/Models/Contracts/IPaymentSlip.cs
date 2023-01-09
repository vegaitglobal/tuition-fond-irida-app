namespace TuitionFondIrida.Domain.Models.Contracts;

public interface IPaymentSlip
{
    string Sender { get; }

    string PurposeOfPayment { get; }

    string Receiver { get; }

    int CodeOfPayment { get; }

    string Currency { get; }
    
    double Amount { get; }

    string ReceiverAccount { get; }

    int ModelNumber { get; }

    string ReferenceNumber { get; }
}
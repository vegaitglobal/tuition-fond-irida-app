using TuitionFondIrida.Domain.Models.Contracts;

namespace TuitionFondIrida.Domain.Models.Read;

public class PaymentSlip : IPaymentSlip
{
    public PaymentSlip(string sender, string purposeOfPayment, string receiver, int codeOfPayment, string currency,
        double amount, string receiverAccount, int modelNumber, string referenceNumber)
    {
        Sender = sender;
        PurposeOfPayment = purposeOfPayment;
        Receiver = receiver;
        CodeOfPayment = codeOfPayment;
        Currency = currency;
        Amount = amount;
        ReceiverAccount = receiverAccount;
        ModelNumber = modelNumber;
        ReferenceNumber = referenceNumber;
    }

    public string Sender { get; }
    public string PurposeOfPayment { get; }
    public string Receiver { get; }
    public int CodeOfPayment { get; }
    public double Amount { get; }
    public string Currency { get; }
    public string ReceiverAccount { get; }
    public int ModelNumber { get; }
    public string ReferenceNumber { get; }
}
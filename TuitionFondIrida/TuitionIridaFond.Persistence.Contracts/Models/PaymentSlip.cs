namespace TuitionIridaFond.Persistence.Contracts.Models;

public class PaymentSlip
{
    public string Sender { get; set; }

    public string PurposeOfPayment { get; set; }

    public string Receiver { get; set; }

    public int CodeOfPayment { get; set; }
    
    public double Amount { get; set; }

    public string Currency { get; set; }

    public string ReceiverAccount { get; set; }

    public int ModelNumber { get; set; }

    public string ReferenceNumber { get; set; }
}
using Contentful.Core;
using TuitionFondIrida.Domain.Repositories;
using TuitionFondIrida.Persistence.Mappers.Abstractions;
using TuitionIridaFond.Persistence.Contracts.Models;

namespace TuitionFondIrida.Persistence.Repositories.Read;

public class PaymentSlipReadRepository : IPaymentSlipReadRepository
{
    private readonly IContentfulClient contentfulClient;
    private readonly IPaymentSlipMapper paymentSlipMapper;

    public PaymentSlipReadRepository(IContentfulClient contentfulClient, IPaymentSlipMapper paymentSlipMapper)
    {
        this.contentfulClient = contentfulClient;
        this.paymentSlipMapper = paymentSlipMapper;
    }

    public async Task<Domain.Models.Read.PaymentSlip> GetAsync(CancellationToken cancellationToken)
    {
        return this.paymentSlipMapper.Create(new PaymentSlip
        {
            Sender = "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
            PurposeOfPayment = "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
            Receiver = "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
            CodeOfPayment = 165,
            Currency = "RSD",
            Amount = 100_000,
            ReceiverAccount = "250-5555565564254-13",
            ModelNumber = 97,
            ReferenceNumber = string.Empty
        });

        // var paymentSlip = await this.contentfulClient.GetEntriesByType(
        //     ContentfulContentTypeIds.PaymentSlip, new QueryBuilder<PaymentSlip>(), cancellationToken);
        //
        // return this.paymentSlipMapper.Create(paymentSlip.First());
    }
}
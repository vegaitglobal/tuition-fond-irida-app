using Contentful.Core;
using Contentful.Core.Search;
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
        var paymentSlip = await this.contentfulClient.GetEntriesByType(
            ContentfulContentTypeIds.PaymentSlip, new QueryBuilder<PaymentSlip>(), cancellationToken);

        return this.paymentSlipMapper.Create(paymentSlip.First());
    }
}
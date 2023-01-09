using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Repositories;

namespace TuitionFondIrida.Application.PaymentSlip.Queries.Find;

public class FindQueryHandler : IQueryHandler<FindQuery, Domain.Models.Read.PaymentSlip>
{
    private readonly IPaymentSlipReadRepository paymentSlipReadRepository;

    public FindQueryHandler(IPaymentSlipReadRepository paymentSlipReadRepository)
    {
        this.paymentSlipReadRepository = paymentSlipReadRepository;
    }

    public async Task<Domain.Models.Read.PaymentSlip> Handle(FindQuery request, CancellationToken cancellationToken)
    {
        return await this.paymentSlipReadRepository.GetAsync(cancellationToken);
    }
}
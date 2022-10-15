using Autofac;
using TuitionFondIrida.Api.AutofacModule;
using TuitionFondIrida.Application.AutofacModule;
using TuitionFondIrida.Domain.AutofacModule;
using TuitionFondIrida.Persistence.AutofacModule;

namespace TuitionFondIrida.Host;

public class CompositionRootModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterModule<ApiModule>();
        builder.RegisterModule<ApplicationModule>();
        builder.RegisterModule<DomainModule>();
        builder.RegisterModule<PersistenceModule>();
    }
}
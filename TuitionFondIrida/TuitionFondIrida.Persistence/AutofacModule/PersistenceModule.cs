using Autofac;
using TuitionFondIrida.Persistence.Mappers;
using TuitionFondIrida.Persistence.Repositories.Read;

namespace TuitionFondIrida.Persistence.AutofacModule;

public class PersistenceModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterType<ProductMapper>().AsImplementedInterfaces().InstancePerLifetimeScope();
        
        builder.RegisterAssemblyTypes(typeof(PersistenceModule).Assembly)
            .Where(t => t.IsInNamespaceOf<ProductReadRepository>())
            .AsImplementedInterfaces()
            .InstancePerLifetimeScope();
    }
}
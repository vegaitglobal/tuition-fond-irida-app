using Autofac;
using TuitionFondIrida.Api.Mappers;

namespace TuitionFondIrida.Api.AutofacModule;

public class ApiModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterType<ProductMapper>().AsImplementedInterfaces().InstancePerLifetimeScope();
        builder.RegisterType<AssetMapper>().AsImplementedInterfaces().InstancePerLifetimeScope();
        builder.RegisterType<BlogMapper>().AsImplementedInterfaces().InstancePerLifetimeScope();
        builder.RegisterType<AuthorMapper>().AsImplementedInterfaces().InstancePerLifetimeScope();
    }
}
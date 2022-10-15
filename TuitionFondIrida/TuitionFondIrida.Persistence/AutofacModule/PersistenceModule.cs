using Autofac;
using Contentful.Core;
using TuitionFondIrida.Persistence.Mappers;
using TuitionFondIrida.Persistence.Repositories.Read;

namespace TuitionFondIrida.Persistence.AutofacModule;

public class PersistenceModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterType<ProductMapper>().AsImplementedInterfaces().InstancePerLifetimeScope();
        builder.RegisterType<AssetMapper>().AsImplementedInterfaces().InstancePerLifetimeScope();

        builder.RegisterAssemblyTypes(typeof(PersistenceModule).Assembly)
            .Where(t => t.IsInNamespaceOf<ProductReadRepository>())
            .AsImplementedInterfaces()
            .InstancePerLifetimeScope();

        builder.Register(_ =>
            {
                var httpClient = new HttpClient();
                var contentfulClient = new ContentfulClient(
                    httpClient,
                    "aJeZf0-znYrrTggJB-hi-PiwJ1RIaW-npjHNCRpYHXA",
                    "YAvHKou7jSBrQ6hvaqLi3XQyRrmGgiBf4JdKwm6QLzk",
                    "lpy11m2kyblz");

                return contentfulClient;
            })
            .AsImplementedInterfaces()
            .InstancePerLifetimeScope();
    }
}
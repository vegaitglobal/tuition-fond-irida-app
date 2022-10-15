using Autofac;
using Contentful.Core;
using Microsoft.Extensions.Configuration;
using TuitionFondIrida.Persistence.Mappers;
using TuitionFondIrida.Persistence.Repositories.Read;

namespace TuitionFondIrida.Persistence.AutofacModule;

public class PersistenceModule : Module
{
    private readonly IConfiguration configuration;

    public PersistenceModule(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterType<ProductMapper>().AsImplementedInterfaces().InstancePerLifetimeScope();
        builder.RegisterType<AssetMapper>().AsImplementedInterfaces().InstancePerLifetimeScope();
        builder.RegisterType<BlogMapper>().AsImplementedInterfaces().InstancePerLifetimeScope();

        builder.RegisterAssemblyTypes(typeof(PersistenceModule).Assembly)
            .Where(t => t.IsInNamespaceOf<ProductReadRepository>())
            .AsImplementedInterfaces()
            .InstancePerLifetimeScope();

        builder.Register(_ =>
            {
                var httpClient = new HttpClient();
                var contentfulClient = new ContentfulClient(
                    httpClient,
                    this.configuration["AppSettings:Contentful:DeliveryApiKey"],
                    this.configuration["AppSettings:Contentful:PreviewApiKey"],
                    this.configuration["AppSettings:Contentful:SpaceId"]);

                return contentfulClient;
            })
            .AsImplementedInterfaces()
            .InstancePerLifetimeScope();
    }
}
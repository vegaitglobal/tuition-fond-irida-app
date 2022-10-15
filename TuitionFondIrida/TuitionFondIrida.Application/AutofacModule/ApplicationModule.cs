using Autofac;
using MediatR.Extensions.Autofac.DependencyInjection;

namespace TuitionFondIrida.Application.AutofacModule;

public class ApplicationModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterMediatR(typeof(ApplicationModule).Assembly);
    }
}
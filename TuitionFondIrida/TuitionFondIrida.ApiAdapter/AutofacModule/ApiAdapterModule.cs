using System.Net;
using System.Net.Mail;
using Autofac;
using Microsoft.Extensions.Configuration;
using TuitionFondIrida.ApiAdapter.ApiAdapters;
using TuitionFondIrida.ApiAdapter.Factory;

namespace TuitionFondIrida.ApiAdapter.AutofacModule;

public class ApiAdapterModule : Module
{
    private readonly IConfiguration configuration;

    public ApiAdapterModule(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterType<EmailMessageFactory>().AsSelf().InstancePerLifetimeScope();

        builder.Register(_ =>
        {
            var smtpClient = new SmtpClient(this.configuration["AppSettings:EmailClient:SmtpClient"])
            {
                Port = 587,
                Credentials = new NetworkCredential(
                    this.configuration["AppSettings:EmailClient:FromEmailAddress"],
                    this.configuration["AppSettings:EmailClient:FromEmailPassword"]),
                EnableSsl = true
            };

            return smtpClient;
        }).AsSelf().InstancePerLifetimeScope();

        builder.RegisterType<EmailServiceApiAdapter>().AsImplementedInterfaces().InstancePerLifetimeScope();
    }
}
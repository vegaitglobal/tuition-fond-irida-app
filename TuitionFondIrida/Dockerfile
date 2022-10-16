#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

ENV ASPNETCORE_URLS=http://*:5069


FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY *.sln ./
COPY ["TuitionFondIrida.Api/TuitionFondIrida.Api.csproj", "TuitionFondIrida.Api/"]
COPY ["TuitionFondIrida.ApiAdapter/TuitionFondIrida.ApiAdapter.csproj", "TuitionFondIrida.ApiAdapter/"]
COPY ["TuitionFondIrida.Application/TuitionFondIrida.Application.csproj", "TuitionFondIrida.Application/"]
COPY ["TuitionFondIrida.Domain/TuitionFondIrida.Domain.csproj", "TuitionFondIrida.Domain/"]
COPY ["TuitionFondIrida.Host/TuitionFondIrida.Host.csproj", "TuitionFondIrida.Host/"]
COPY ["TuitionFondIrida.Persistence/TuitionFondIrida.Persistence.csproj", "TuitionFondIrida.Persistence/"]
COPY ["TuitionIridaFond.Persistence.Contracts/TuitionIridaFond.Persistence.Contracts.csproj", "TuitionIridaFond.Persistence.Contracts/"]
RUN dotnet restore
COPY . .

WORKDIR "/src/TuitionFondIrida.Host/"

RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
RUN touch .env

EXPOSE 5069
ENTRYPOINT ["dotnet", "TuitionFondIrida.Host.dll"]


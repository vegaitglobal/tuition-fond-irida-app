import { TextWithCtaModule } from "containers";
import { AboutUsContentModule } from "containers/AboutUsContent/AboutUsContentModule";

export const AboutUsPage = () => {
    return (
        <>
            <AboutUsContentModule
                title1="Ko smo mi?"
                description1="IRIDA je u okviru prošlogodišnjeg VegaIT hakatona razvila kulturno-turističku aplikaciju Putevima žena koja omogućava korisniku/ci da se informiše o znamenitim ženama Novog Sada i poseti lokacije u gradu koje su značajne za njihov život i rad, bez obzira na to što mnoge od njih ne nose njihova obeležja.
                Na ovaj način, kroz informisanje pre svega mladih (ali i šire javnosti), a naročito devojčica i devojka, o ženama koje su stvarale, menjale i razvijale, ne samo Novi Sad, već celu Srbiju i čitav svet, želeli smo da doprinesemo unapređenju rodne ravnopravnosti. Ali isto tako i da pošaljemo poruku novim generacijama devojčica i devojaka, da bez obzira na to što se o njima ne zna ništa ili ne dovoljno, žene su kroz istoriju pokretale i stvarale, obrazovale, dolazile do revolucionarnih otkrića, brinule i pomagale onima koje je društvo zaboravljalo, i ujedno upravo to isto društvo činile boljim i ravnopravnijim. Želeli/e smo da nove devojčice i devojke motivišemo da krenu putevima ovih velikih žena, da rade i daju svoj doprinos u oblasti nauke, politike, ekonomije, informacionih i komunikacionih tehnologija, obrazovanja, i nastave borbu za bolje i ravnopravnije društvo. I to smo i uradili."
                title2="Koji je cilj projekta?"
                description2="Projekat ima za cilj smanjenje rodnog jaza u Novom Sadu kroz podsticanje i finansijsku podršku devojčicama iz socijalno i ekonomsko ugroženih grupa da se školuju za zanimanja koje se smatraju „netipičnim“ za žene."
                image="logo512.png"
                imageLeft={false}
            />
            <AboutUsContentModule
                title1="Opis projekta:"
                description1="Sada želimo da idemo korak dalje i da novim generacijama devojčica omogućimo da rade ono što vole i u čemu su dobre. Želimo da im pružimo finansijsku podršku da krenu svojim putem poput tolikih žena pre njih, da ostvare svoje snove i učine ovo društvo još boljim i ravnopravnijim. Zato smo odlučili/e da osnujemo Fond za školarinu za devojčice da upišu srednju školu za računarsko programiranje. Ovo iz razloga što je i dalje broj žena u IT industriji u Srbiji u odnosu na muškarce veoma mali. Prema Startitovom istraživanju o programerskoj sceni u Srbiji iz 2019. godine, samo je 14,5% žena koje rade kao programerke, a ovo jeste jedno od zanimanja budućnosti u okviru 4.0. industrijske revolucije kojoj svedočimo i danas."
                title2="Rešenja:"
                description2="Sada želimo da idemo korak dalje i da novim generacijama devojčica omogućimo da rade ono što vole i u čemu su dobre. Želimo da im pružimo finansijsku podršku da krenu svojim putem poput tolikih žena pre njih, da ostvare svoje snove i učine ovo društvo još boljim i ravnopravnijim. Zato smo odlučili/e da osnujemo Fond za školarinu za devojčice da upišu srednju školu za računarsko programiranje. Ovo iz razloga što je i dalje broj žena u IT industriji u Srbiji u odnosu na muškarce veoma mali."
                image="logo512.png"
                imageLeft={true}
            />
            <TextWithCtaModule
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio vel nunc fringilla euismod eget non eros. Morbi convallis auctor lectus eu facilisis. Aenean vitae lectus mollis, finibus arcu vel, aliquam est. Etiam gravida lectus quis vestibulum aliquam. Sed nec quam eget eros eleifend vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio vel nunc fringilla euismod eget non eros. Morbi convallis auctor lectus eu facilisis. Aenean vitae lectus mollis, finibus arcu vel, aliquam est. Etiam gravida lectus quis vestibulum aliquam. Sed nec quam eget eros eleifend vehicula."
                button={{text: "Doniraj", url: ""}}
                darkMode={false}
            />
        </>
    );
};

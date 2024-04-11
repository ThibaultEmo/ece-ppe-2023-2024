import Image from 'next/image';
import { useState } from 'react'
import Layout from "../../../components/Layout";

export default function MyComponent() {

  return (
    <Layout>
        <div>
            
        <p className="text-4xl text-green-700 text-center">
            L'impact des changements climatique sur l'agriculture en France
          </p>

            L’agriculture est l’une des causes du bouleversement climatique. En prenant en compte la déforestation, elle est responsable de près d’un quart des émissions mondiales de gaz à effet de serre.
            <br></br>
            <br></br>

            <div className = "flex">
                
                <span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                Les émissions de gaz à effet de serre et les dérèglements climatiques sont souvent associés dans nos esprits aux rejets industriels ou à nos déplacements en voiture.  L’agriculture participe très grandement à travers deux gaz moins connus que le CO2 :
                <br></br>
                -	Le méthane : réchauffant 28 fois plus que le CO2 et responsable de 20% de l’accroissement de la température soit +1°C au cours du siècle. Ce gaz est émis par les ruminants comme les pets de vache (fermentation entérique) mais également par certaines techniques de riziculture 
                <br></br>
                -	Protoxyde d’azote lié à l’utilisation d’engrais azotés
                <br></br>
                </span>
                <span>
                <br></br>
                <Image
                    src="https://agriculture.canada.ca/sites/default/files/legacy/resources/prod/img/env/climat/gh-es_fig01_fra.jpg" 
                    width={1600}
                    height={800}
                    alt="Emissions agriculture" 
                    class = "pl-10"
                />
                </span>
            </div>
            

            <br></br>
            <br></br>
            <br></br>
            La déforestation servant à transformer les forêts en terres agricoles pour produire l’alimentation du bétail est à l’origine de 17% des émissions totales de gaz à effet de serre. L’agriculture et la déforestation représentent à elles seules un quart de l’émission mondiale de GES (24% très exactement)
            <br></br>
            L’adoption de techniques agricoles alternatives et la lutte contre la déforestation dont donc indispensables pour réduire ces émissions. Il est également nécessaire de changer nos habitudes alimentaires. 
            <br></br>
            <br></br>
            L’agriculture peut être l’une des principales victimes du dérèglement climatique si la température venait à dépasser les 2°C d’ici 2100
            <br></br>
            En effet, des systèmes de cultures actuels nécessitent des climats stables et des conditions géographiques et spécifiques. Le dérèglement climatique menace donc la souveraineté alimentaire mondiale. Les effets commencent à se faire ressentir en France notamment en Champagne, les vendanges ayant lieu 2 semaines plus tôt qu’il y’a 20 ans.
            <br></br>
            <br></br>

            <div className = "flex">
                
                <span>
                <br></br>
                    <Image
                        src="https://uploads-ssl.webflow.com/61961974d4f210a20b8e580b/61dfc9608fe45fa6e4805642_proble%CC%80mes_re%CC%81chauffement_climatique_trajectoires.jpg" 
                        width={400}
                        height={800}
                        alt="Emissions agriculture" 
                        class = "pr-10"
                    />
                </span>

                <span>
                    <br></br>
                    <br></br>
                    Des phénomènes météorologiques extrêmes risquent de se multiplier : 
                    <br></br>
                    -	Vague de chaleur, sècheresses, et désertification
                    <br></br>
                    -	Salinisation des terres 
                    <br></br>
                    -	Variations imprévisibles de la pluviosité
                </span>
                
            </div>

           


            <div className = "flex">
                
                <span>
                    <br></br>
                    <br></br>
                    Pour réduire les émissions de GES, il faut engager une transition vers une agriculture écologique en changeant les pratiques agricoles et en repensant notre consommation : 
                    <br></br>
                    -	Optimisation de la fertilisation azotée des sols : limitation de l’utilisation des engrais azotés. 
                    <br></br>
                    -	Transition vers un élevage écologique : produire moins, mieux et de façon plus équitable
                    <br></br>
                    -	Préservation des sols : Il est indispensable d’avoir un sol en bonne santé, capable de fixer les nutriments et stocker le carbone
                    <br></br>
                    -	Amélioration de la production de riz : Asséchement des rizières hors-saison et utilisation d’une bonne quantité d’eau pour réduire les émissions
                    <br></br>
                    <br></br>
                    Pour réduire les GES, l’alimentation est également à revoir : 
                    <br></br>
                    -	Moins gaspiller
                    <br></br>
                    -	Consommer moins de produits transformés et emballés
                    <br></br>
                    -	Manger bio, local et de saison
                    <br></br>
                    -	Manger moins d’œufs, de viande et de produits laitiers. 
                    <br></br>

                    Plus généralement, il faut abandonner l’agriculture industrielle, destructrice de l’environnement et émettrice de gaz à effet de serre et favoriser l’agriculture écologique car de la diversité découle la sécurité alimentaire.
                    <br></br>
                </span>

                <span>
                <br></br>
                <Image
                    src="https://grain.org/media/BAhbB1sHOgZmSSJPMjAxMS8wOS8yOC8xMF80NF8wOV8xNTdfQWxpbWVudGF0aW9uX2V0X2NoYW5nZW1lbnRfY2xpbWF0aXF1ZV9ncmFwaF9GUi5wbmcGOgZFVFsIOgZwOgp0aHVtYkkiCTUwMHgGOwZU/Alimentation%20et%20changement%20climatique%20graph%20FR.png" 
                    width={800}
                    height={800}
                    alt="Emissions agriculture" 
                    class = "pl-10"
                />
                </span>
            </div>
        </div>
    </Layout>
      
    
  );
};

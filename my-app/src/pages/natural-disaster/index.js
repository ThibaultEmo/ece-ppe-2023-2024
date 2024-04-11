import Image from 'next/image';
import { useState } from 'react'
import Layout from "../../../components/Layout";

export default function MyComponent() {

  return (
    <Layout>
           <p className="text-4xl text-green-700 text-center">
            Les catastrophes naturelles liées aux changements climatique
          </p>
        <div>

            <div className = "flex">
                
                <span>
                    <br></br>
                    <br></br>
                    En France, 180 évènements naturels dommageables ont eu lieu entre 1900 à 2017. La grande majorité d’entre eux est survenue après 1950, cela montre l’augmentation de leur fréquence d’apparition, et ce aussi pour les évènements très graves, c’est-à-dire ayant entraîné la mort d’au moins 10 personnes ou généré au moins 30 millions d’euros de dommages matériels. 
                    Les événements naturels potentiellement dangereux pouvant survenir en France sont : 
                    <br></br>
                    -les inondations et les submersions marines
                    <br></br>
                    -l’érosion côtière
                    <br></br>
                    -les tempêtes et les cyclones
                    <br></br>
                    -les mouvements de terrain
                    <br></br>
                    -les feux de forêt
                    <br></br>
                    -les avalanches
                    <br></br>
                    -les vagues de chaleur
                    <br></br>
                    -les éruptions volcaniques et les séismes
                    <br></br>
                </span>

                <span>
                <br></br>
                <Image
                src="https://www.notre-environnement.gouv.fr/IMG/jpg/r2-risques-naturels-majeurs.jpg"
                    width={2000}
                    height={800}
                    alt="Emissions agriculture" 
                    class = "pl-40"
                />
                </span>
            </div>



            <div className = "flex">
                
                <span>
                <br></br>
                    <Image
                        src="https://cdn.statcdn.com/Infographic/images/normal/30586.jpeg" 
                        width={1800}
                        height={800}
                        alt="Emissions agriculture" 
                        class = "pr-10"
                    />
                </span>

                <span>
                    <br></br>
                    <br></br>
                    
                    Ces catastrophes climatiques impactent évidemment les cultures sur le territoire français, d’ailleurs vous pouvez consulter notre article sur l’agriculture ici :  
                    <a href = "./../agriculture" class = "text-green-700"> Notre article agriculture </a>
                    <br></br>

                    <br></br>
                    Contrairement à ce que l’on pourrait penser, l’événement le plus mortel survenu en France métropolitaine est la vague de chaleur de 2003 avec une surmortalité de 15 000 décès. Autrement, ce sont les deux éruptions volcaniques de la montagne Pelée en 1902 qui ont causé le plus de décès avec respectivement 28 000 et 1 000 morts. 
                    Pour ce qui est des frais liés aux dégâts matériels, l’augmentation ainsi que l’intensification de ces phénomènes sont également très nettes : une moyenne de 6 milliards d’euros entre 2020 et 2024 alors que cette dernière était à 2,7 milliards par an entre 2000 et 2008. 
                    <br></br>
                    <br></br>
                    Si l’on suit la logique de cet accroissement des coûts, les prévisions sont que le prix cumulé devrait dépasser 140 milliards d’euros pour les trente prochaines années, ce qui est le double des trente dernières. 
                    L’État prend la moitié des coûts à sa charge permettant ainsi de réduire de moitié la facture des assureurs. Par ailleurs, les « surprimes » sur les contrats d’assurance, qui financent le régime d’indemnisation des catastrophes naturelles, vont augmenter le 1er janvier 2025. Le taux de cette cotisation obligatoire passera de 12 % à 20 % pour les contrats d’assurance habitation et de 6 % à 9 % pour les contrats d’assurance automobile. 
                    Ces mesures sont positives mais ne sont que des réponses passives, il est nécessaire d’agir directement contre l’accélération des événements climatiques pour réellement améliorer notre situation.  L’une des premières étapes pour répondre à ce changement d’échelle des risques, serait que l’on change en adéquation l’échelle de prévention actuelle dans le pays. 
                </span>
                
            </div>
        </div>
    </Layout>
      
    
  );
};

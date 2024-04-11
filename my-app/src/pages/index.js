import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import Link from "next/link";
import illustrationChangementClimatique from "../../public/changementClimatique.jpg"
import illustrationDiversiteMedia from "../../public/medias.jpg"

export default function Home() {
  return (
    <main
    >
      <Layout>
      <div className="flex flex-col space-y-16">
          <p className="text-center">
            FranceVerte est le site regroupant le plus de données variées sur le changement climatique.
          </p>
          <div className="flex flex-col space-y-2 justify-center text-center items-center md:flex md:flex-row md:space-x-8">
            <Image className="w-[60%] order-1 md:w-[40%] h-80" alt="blogging illustration" src={illustrationChangementClimatique} width={1200} height={1000} />
            <p className="text-xl order-2 text-justify w-[80%] md:w-[50%] md:text-2xl">Les changements observés dans le climat de la Terre depuis le milieu du XXe siècle sont dus aux activités humaines, en particulier à la combustion de combustibles fossiles, qui augmentent les niveaux de gaz à effet de serre piégeant la chaleur dans l’atmosphère terrestre, augmentant ainsi la température moyenne de la surface de la Terre. De nombreux effets impactant notre vie au quotidien découlent de ces changements, ce site est là pous vous éclairer sur ces derniers, notamment en France.</p>
          </div>

          <div className="flex flex-col space-y-2 justify-center text-center items-center md:flex md:flex-row md:space-x-8">
            <p className="text-xl order-2 md:order-1 text-justify w-[80%] md:w-[50%] md:text-2xl">Aujourd'hui trouver un endroit de qualité pour trouver de nombreuses informations, présentées de façon claire sur le changement climatique est une tâche difficile. C'est pour cela que nous essayons de vous proposer des informations variées comme des cartes ou des articles, de façon simple pour vous informer au mieux sur ces effets en France.</p>
            <Image className="w-[60%] order-1 md:order-2 md:w-[40%] h-80" alt="blogging illustration" src={illustrationDiversiteMedia} width={1000} height={800} />
          </div>

        </div>
      </Layout>
    </main>
  );
}

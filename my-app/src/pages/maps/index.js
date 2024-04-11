import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../../components/Layout";
import Link from "next/link";
import illustrationCarte from "../../../public/illustration-carte.jpeg"
import illustrationNiveauMer from "../../../public/niveau-mer.jpg"
import illustrationTemperature from "../../../public/temperature.jpg"
import illustrationPrecipitation from "../../../public/precipitation.jpg"

export default function Maps() {
    return (
        <main>
            <Layout>
                <div className="flex flex-col space-y-16">

                    <div className="flex flex-row space-x-8 justify-center text-center items-center md:space-x-8">
                        <Image className="w-[60%] order-1 md:w-[40%] h-80" alt="map illustration" src={illustrationCarte} width={1000} height={750} />

                        <h2 className="order-2 text-justify w-[80%] text-4xl">Les cartes sont des outils puissants pour visualiser et comprendre les changements climatiques qui se produisent, et vont se produire, à travers le monde. Elle vous offrent une persepective unique vous permettant de visualiser les prévisions les plus précises des scientifiques Européens, travaillant pour le projet <Link className="text-green-600" href="https://www.copernicus.eu/fr">Copernicus</Link>.</h2>

                    </div>

                    

                    <div className="mt-8 text-center flex flex-col space-y-4">
                        <h1 className="text-center text-4xl">C'est pour cela que nous avons décidé de vous proposer 3 cartes vous montrant l'évolution de 3 phénomènes climatique au cours de ce siècle, en 2030, 2050 et 2100. Elles se basent sur les prévisions scientifiques européennes les plus avancées à l'heure actuelle.</h1>

                        <div className="flex flex-col space-y-2 justify-center text-center items-center md:flex md:flex-row md:space-x-8">
                            <Image className="w-[35%] order-1 md:w-[25%] h-40" alt="illustation temperature" src={illustrationTemperature} width={800} height={600} />
                            <h1>La temperature</h1>
                            <p className="text-base order-2 text-justify w-[30%] md:w-[25%] md:text-lg"><Link className="text-green-600" href={'/maps/tas'}>Visualisez</Link> les temperature au plus près de chez vous dans les anneés à venir grâce à <Link className="text-green-600" href={'/maps/tas'}>cette carte.</Link></p>
                        </div>

                        <div className="flex flex-col space-y-2 justify-center text-center items-center md:flex md:flex-row md:space-x-8">
                            <h1>Les précipitations</h1>
                            <p className="text-base order-2 md:order-1 text-justify w-[30%] md:w-[25%] md:text-lg"><Link className="text-green-600" href={'/maps/precipitation'}>Explorez cette carte</Link> pour anticiper l'évolution des pluies sur <Link className="text-green-600" href={'/maps/precipitation'}>cette page.</Link></p>
                            <Image className="w-[35%] order-1 md:order-2 md:w-[25%] h-40" alt="illustration precipitations" src={illustrationPrecipitation} width={800} height={600} />
                        </div>

                        <div className="flex flex-col space-y-2 justify-center text-center items-center md:flex md:flex-row md:space-x-8">
                            <Image className="w-[35%] order-1 md:w-[25%] h-40" alt="illustration niveau de la mer" src={illustrationNiveauMer} width={800} height={600} />
                            <h1>Le niveau de la mer</h1>
                            <p className="text-base text-justify order-2 w-[30%] md:w-[25%] md:text-lg"><Link className="text-green-600" href={'/maps/sea-level'}>Evaluez</Link> l'élévation de la mer et les terres perdues en suivant <Link className="text-green-600" href={'/maps/sea-level'}>ce lien.</Link></p>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    );
}

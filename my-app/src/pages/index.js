import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    >
      <Layout>
        <p>Homepage</p>
      </Layout>
    </main>
  );
}

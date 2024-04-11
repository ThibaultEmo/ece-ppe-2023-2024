import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-w-fit  min-h-screen text-black bg-gradient-to-b from-stone-100 via-white to-stone-300">
            <Header/>
            <main className="flex-grow p-4">
                {children}
            </main>
            <Footer/>
        </div>
    )
}
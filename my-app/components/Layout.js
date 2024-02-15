import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-w-fit  min-h-screen text-purple-700 dark:text-orange-600 bg-gradient-to-r from-rose-100 to-teal-100  dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-700">
            <Header/>
            <main className="flex-grow p-4">
                {children}
            </main>
            <Footer/>
        </div>
    )
}
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-1">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout
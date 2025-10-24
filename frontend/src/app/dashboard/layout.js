import Header from "@/app/ui/dashboard/Header";
import Footer from "../ui/dashboard/footer";

import '@/app/dashboard/dash.css'
import Sidebar from "../ui/dashboard/sidebar";

export default function Layout({ children }) {
     const darkMode = () => {
         document.getElementById("root").className = "dark";
     };
   

    return (
        <>
            <div className="">
                {/* <Header /> */}
                < Sidebar />
                {children}
                <Footer />
            </div>
        </>
    );
}
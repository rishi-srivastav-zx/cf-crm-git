import Header from "@/app/ui/userdashboard-ui/header";
import Footer from "../ui/userdashboard-ui/footer";

import "../user.css";
import "./about.css";
import Main from "../ui/about-ui/main";

export default function Aboutpage() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

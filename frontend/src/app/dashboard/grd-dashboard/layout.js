

import "@/app/dashboard/dash.css";
import Sidebar from "../../ui/grd-dashboard-ui/sidebar";

export default function Layout({ children }) {
    return (
        <>
            <div className="">
                {/* <Header /> */}
                <Sidebar />
                {children}
            </div>
        </>
    );
}

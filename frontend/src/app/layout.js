import { Montserrat } from "next/font/google";
// import { Provider } from "./provider";

import "@/app/user.css";


const montserrat = Montserrat({
    weight: [],
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata = {
    title: "CRM College Forum",
    description: "",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className}`} >
                {/* <Provider> */}
                        {children}
                {/* </Provider> */}
            </body>
        </html>
    );
}

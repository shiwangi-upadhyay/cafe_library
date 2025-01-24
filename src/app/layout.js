import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Library-Cafe",
  description: "Created by Yash Kumar Singh and Shiwangi Upadhyay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body suppressHydrationWarning={true} className={inter.className}>
          <Toaster />
          <Sidebar />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}

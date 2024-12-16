import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/providers/theme-provider";

export default function DashboardLayout({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex flex-col w-full min-h-screen">

                <Navbar />

                <main className="flex-1 w-full h-full">
                    {children}
                </main>

            <Footer />
            </div>
        </ThemeProvider>
    )
}
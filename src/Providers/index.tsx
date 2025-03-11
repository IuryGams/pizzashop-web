import { ThemeProvider } from "@/components/theme/theme-provider";
import { router } from "@/routes";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";


export function Providers() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
                <Toaster richColors />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    )
}
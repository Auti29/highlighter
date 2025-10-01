"use client";

import { createContext, ReactNode } from "react";
import { toast, ToastContainer } from "react-toastify";

const customId = "custom-id-yes";

export const ToastContext = createContext<{invokeToast: () => void} | undefined>(undefined);

export default function ToastProvider({children}: {children: ReactNode}) {
    
    const invokeToast = () => {
    toast.dark("copied to clipboard!", {
        position: 'bottom-right',
        theme: "dark", 
        toastId: customId
    });
    }
    
    return (
        <ToastContext.Provider value={{invokeToast}}>
            {children}
            <ToastContainer 
            hideProgressBar={true}

            />
        </ToastContext.Provider>
    );
}
"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import { AuthLoading,Authenticated,ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/Loading";


interface ConvexClientProviderProps {
    children: React.ReactNode;
}


const convextUrl = process.env.NEXT_PUBLIC_CONVEX_URL || "http://localhost:4467/";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string )

export function ConvexClientProvider({ children }: ConvexClientProviderProps) {

    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>

            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>

                <Authenticated>
                     {children}
                </Authenticated>
      
                <AuthLoading>
                    <Loading/>
                </AuthLoading>

            </ConvexProviderWithClerk>

        </ClerkProvider>
    )

}
import {SignIn, SignInButton, SignOutButton, UserButton} from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="h-full w-full flex flex-col gap-y-4">
      Dashboard
    </div>
  );
}

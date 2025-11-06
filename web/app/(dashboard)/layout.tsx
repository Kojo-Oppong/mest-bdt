import type { Metadata } from "next";
import Sidebar from "@/components/navigation/Sidebar";
import NoSSR from "@/components/core/NoSSR";

export const metadata: Metadata = {
  title: "MEST Africa - BDT Dashboard",
  description: "A business diagnostics tool for the rest of us!",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <NoSSR>
        <Sidebar />
      </NoSSR>
      {/* Main Content Area */}
      <main className="grow p-8 h-dvh overflow-y-scroll">{children}</main>
    </div>
  );
}

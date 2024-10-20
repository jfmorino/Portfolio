"use client"

import { NavBar2, NavBar1 } from "./_components/navbar";
import { SideBar1, SideBar2 } from "./_components/sidebar";

function LandingPageLayout({ children }: {
    children:
    React.ReactNode
}) {
    return (
        <div className=" text-white items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] pr-2 bg-zinc-950">
            <div className="grid grid-cols-10 gap-4 mx-4">
                <SideBar1 />
                <SideBar2 />
                <main className="md:col-span-8 col-span-10 bg-zinc-800 rounded-3xl p-4 border border-zinc-700 shadow-md ">
                    <NavBar1 />
                    <NavBar2 />
                    <div className="">
                        {children}
                    </div>
                </main>
            </div>
            {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

            </footer> */}
        </div>
    );
}


export default LandingPageLayout
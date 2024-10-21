"use client"

import { NavBar2, NavBar1, NavBar3 } from "./_components/navbar";
import { SideBar1, SideBar2, SideBar3 } from "./_components/sidebar";

function LandingPageLayout({ children }: {
    children:
    React.ReactNode
}) {
    return (
        <div className=" text-white items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] pr-2 bg-zinc-950">
            <div className="grid grid-cols-10 gap-4 mx-4 md:py-0 md:pb-0 py-4 pb-14">
                <SideBar1 />
                <SideBar2 />
                <SideBar3 />
                <main className="lg:col-span-8 col-span-10 bg-zinc-800 rounded-3xl p-4 border border-zinc-700 shadow-md ">
                    <NavBar1 />
                    <NavBar2 />
                    <NavBar3 />
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
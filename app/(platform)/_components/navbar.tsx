import React from 'react'

import { cn } from '@/lib/utils'
import { usePathname } from "next/navigation";
import Link from 'next/link'


const NavLinks = [
    { label: "About", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Blog", href: "/blog" }
]

const NavBar1 = () => {
    const pathname = usePathname()
    return (
        <div className='md:grid grid-cols-10 gap-4 p-6 text-white hidden'>
            <div className='col-span-7 text-3xl font-semibold text-white mt-6' > {
                pathname === "/" ? (
                    <div className='-mt-6'> About Me </div>
                ) : (
                    pathname === "/resume" ? (<div className='-mt-6'> Resume </div>) : (
                        pathname === "/blog" ? (<div className='-mt-6'> Blog </div>) : (
                            <div>Not Found</div>
                        )
                    )
                )
            }
                <div className='bg-red-300 w-14 h-2 rounded-lg mt-4' ></div>
            </div>

            <div className="bg-zinc-800 font-semibold">
                {/* <div className=' border bg-[hsla(240,1%,17%,0.75)] backdrop-blur-[10px] borde top-0 right-0 w-max rounded-tr-[20px] rounded-br-[20px] p-[0_20px] shadow-none'> */}
                <nav className='md:flex hidden items-center gap-x-14 w-fit'>
                    {NavLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={
                            cn(
                                "text-sm text-stone-50 hover:text-primary transition-colors", pathname === href && " text-red-300 font-semibold")}>
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}


const NavBar2 = () => {
    const pathname = usePathname()
    return (
        <div className='gap-4 p-6 text-white md:hidden'>
            <div className='col-span-7 text-3xl font-semibold text-white mt-6' > {
                pathname === "/" ? (
                    <div className='-mt-6'> About Me </div>
                ) : (
                    pathname === "/resume" ? (<div className='-mt-6'> Resume </div>) : (
                        pathname === "/blog" ? (<div className='-mt-6'> Blog </div>) : (
                            <div>Not Found</div>
                        )
                    )
                )
            }
                <div className='bg-red-300 w-14 h-2 rounded-lg mt-4' ></div>
            </div>

            <div className="bg-zinc-800 font-semibold fixed bottom-0 left-0 right-0 rounded-t-lg text-white py-4 bg-opacity-60 backdrop-blur-lg">
                <nav className='md:hidden flex items-center justify-around'>
                    {NavLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={
                            cn(
                                "text-sm text-stone-50 hover:text-primary transition-colors", pathname === href && " text-red-300 font-semibold")}>
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export { NavBar1, NavBar2 }


const MyPage = () => {
    return (
        <div>
            <NavBar1 />
            <NavBar2 />
        </div>
    );
};


export default MyPage
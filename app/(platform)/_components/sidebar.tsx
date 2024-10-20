

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ChevronDown, LineChart, Mail, MapPin, Minus, SlackIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

const SideBar1 = () => {
    return (
        <div className='hidden md:block col-span-2 sticky top-[60px] max-h-max h-full mb-0 z-[1] w-56 rounded-3xl border border-zinc-700 shadow-2xl bg-zinc-800 '>
            <div className='p-12'>
                <Image
                    src="/my-avatar.png"
                    alt='logo'
                    width={125}
                    height={125}
                    className='w-32 h-32 rounded-3xl bg-zinc-700'
                />
            </div>
            <header className='text-2xl flex text-center flex-col px-5 align-middle -mt-3'>
                <span>Abderrahman</span>
                <span>Aamri</span>
            </header>

            <div className=' text-xs text-center flex flex-col rounded-lg p-2 m-6 bg-zinc-700'>
                Full Stack Developper &
                <span>UI/UX Designer</span>
            </div>



            <div className=" border-t-orange-200">
                <div className="border-t border-red-300 my-6 mx-5"></div>
                <div className='flex flex-col mx-5'>
                    <div className='flex items-center mb-5'>
                        <Button className='w-12 h-12 rounded-xl shadow-zinc-800 focus:bg-zinc-800 border border-zinc-700 bg-zinc-800'>
                            <Mail className='text-red-300'></Mail>
                        </Button>
                        <div className='overflow-hidden overflow-ellipsis w-full'>
                            <p className='mx-5 text-xs text-zinc-400'>EMAIL</p>
                            <a className='mx-5 text-sm' href="mailto: abderrahmaneaamri@email.com">abderrahmaneaamri@gmail.com</a>

                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Button className='w-12 h-12 rounded-xl shadow-zinc-800 border py-4 border-zinc-700 focus:bg-zinc-800 bg-zinc-800'>
                            <MapPin className='text-red-300'></MapPin>
                        </Button>
                        <div className='overflow-hidden overflow-ellipsis w-full'>
                            <p className='mx-5 text-xs text-zinc-400'>LOCATION</p>
                            <p className='mx-5 text-xs'><p>Marrakech, Morocco</p> </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-red-300 my-6 mx-5"></div>
            </div>

            <div className='p-6 flex justify-around'>
                <LinkedInLogoIcon />
                <SlackIcon />
                <XIcon />
            </div>
        </div>
    )
}

const SideBar2 = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible); // Toggle the state
    };

    return (
        <div className='col-span-10 md:hidden justify-between rounded-3xl border border-zinc-700 shadow-2xl bg-zinc-800 '>
            <div className='flex justify-between'>
                <div className='flex'>
                    <Image
                        src="/my-avatar.png"
                        alt='logo'
                        width={105}
                        height={105}
                        className='rounded-3xl bg-zinc-700 m-4'
                    />
                    <div>
                        <header className='text-xl flex text-center flex-col  font-semibold'>
                            <span>Abderrahman</span>
                            <span>Aamri</span>
                        </header>
                        <div className=' text-xs text-center flex flex-col rounded-lg p-1 bg-zinc-700'>
                            Full Stack Developper
                            <span>& UI/UX Designer</span>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <Button
                        onClick={handleButtonClick}
                        className='rounded-tr-3xl rounded-bl-3xl 
                    shadow-zinc-900 focus:shadow-inner 
                    focus:shadow-red-300 focus:bg-zinc-700 
                    bg-zinc-700'>
                        <ChevronDown className='text-red-300 ' />
                    </Button>
                </div>
            </div>
            <div>
                {
                    isVisible && (
                        <div className=" border-t-orange-200 ">
                            <div className="border-t border-red-300 my-6 mx-5"></div>
                            <div className='flex flex-col w-fit mx-5'>
                                <div className='flex'>
                                    <Button className=' mb-5 rounded-xl shadow-zinc-800 focus:bg-zinc-800 border border-zinc-700 bg-zinc-800'>
                                        <Mail className='text-red-300'></Mail>
                                    </Button>
                                    <div className=''>
                                        <p className='mx-5'>EMAIL</p>
                                        <a href="mailto: abderrahmaneaamri@email.com">abderrahmaneaamri@gmail.com</a>

                                    </div>

                                </div>
                                <div className='flex'>
                                    <Button className='rounded-xl shadow-zinc-800 border py-4 border-zinc-700 focus:bg-zinc-800 bg-zinc-800'>
                                        <MapPin className='text-red-300'></MapPin>
                                    </Button>
                                    <div>
                                        <p className='mx-5'>LOCATION</p>
                                        <p className='mx-5'>Marrakech, Moroccos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-red-300 my-6 mx-5"></div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}




export { SideBar1, SideBar2 }

const MyPage = () => {
    return (
        <div>
            <SideBar1 />
            <SideBar2 />
        </div>
    );
};


export default MyPage
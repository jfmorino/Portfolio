

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ChevronDown, FacebookIcon, Mail, MapPin, SlackIcon, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import CIcon from '@coreui/icons-react'
import { cibXing } from '@coreui/icons'

const SideBar1 = () => {
    return (
        <div className='hidden lg:block col-span-2 sticky top-[60px] max-h-max h-full mb-0 z-[1] w-56 rounded-3xl border border-zinc-700 shadow-2xl bg-zinc-800 '>
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
                        <Button className='w-12 h-12 rounded-xl shadow-zinc-900 shadow-xl focus:bg-zinc-800 border border-zinc-700 bg-zinc-800'>
                            <Mail className='text-red-300'></Mail>
                        </Button>
                        <div className='overflow-hidden overflow-ellipsis w-full'>
                            <p className='mx-5 text-xs text-zinc-400'>EMAIL</p>
                            <a className='mx-5 text-sm' href="mailto: abderrahmaneaamri@email.com">abderrahmaneaamri@gmail.com</a>

                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Button className='w-12 h-12 rounded-xl shadow-zinc-900 shadow-xl border py-4 border-zinc-700 focus:bg-zinc-800 bg-zinc-800'>
                            <MapPin className='text-red-300'></MapPin>
                        </Button>
                        <div className='overflow-hidden overflow-ellipsis w-full'>
                            <p className='mx-5 text-xs text-zinc-400'>LOCATION</p>
                            <p className='mx-5 text-xs'>Marrakech, Morocco</p>
                        </div>
                    </div>
                </div>
                {/* <div className="border-t border-red-300 my-6 mx-5"></div> */}
            </div>

            <div className='p-6 flex justify-around mt-3'>
                <a href="https://linkedin.com/in/abderrahman-aamri" className='shadow-zinc-900 shadow-xl'>
                    <LinkedInLogoIcon className='w-5 h-5'>
                    </LinkedInLogoIcon>
                </a>
                <a href="https://www.facebook.com/Abdul.rey8" className='shadow-zinc-900 shadow-xl'>
                    <FacebookIcon className='w-5 h-5'></FacebookIcon>
                </a>
                <a href="https://x.com/AamriRey" className='shadow-zinc-900 shadow-xl'>
                    <TwitterLogoIcon className='w-5 h-5'></TwitterLogoIcon>

                </a>
            </div>
        </div>
    )
}



const SideBar3 = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible); // Toggle the state
    };

    return (
        <div className='col-span-10 md:block lg:hidden hidden  justify-between rounded-3xl border border-zinc-700 shadow-2xl bg-zinc-800 '>
            <div className='flex justify-between'>
                <div className='flex'>
                    <Image
                        src="/my-avatar.png"
                        alt='logo'
                        width={105}
                        height={105}
                        className='rounded-3xl bg-zinc-700 m-4'
                    />
                    <div className='mx-6 flex flex-col my-6 justify-between'>
                        <p className='font-semibold text-3xl'>Abderrahman Aamri</p>
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
                        <ChevronDown className='text-red-300 ' />Show Contacts
                    </Button>
                </div>
            </div>
            <div className={`rounded-lg transition-all duration-500 ease-in-out 
                ${isVisible ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}
            >
                <div className=" border-t-orange-200 ">
                    <div>
                        <div className="border-t border-red-300 my-6 mx-5"></div>
                        <div className='flex mx-5 gap-4 p-4'>
                            <div className='flex items-center'>
                                <Button className='w-12 h-12 rounded-xl shadow-zinc-900 shadow-xl focus:bg-zinc-800 border border-zinc-700 bg-zinc-800'>
                                    <Mail className='text-red-300'></Mail>
                                </Button>
                                <div className='overflow-hidden overflow-ellipsis w-full'>
                                    <p className='mx-5 text-xs text-zinc-400'>EMAIL</p>
                                    <a className='mx-5 text-sm' href="mailto: abderrahmaneaamri@email.com">abderrahmaneaamri@gmail.com</a>

                                </div>
                            </div>
                            <div className='flex items-center'>
                                <Button className='w-12 h-12 rounded-xl shadow-zinc-900 shadow-xl border py-4 border-zinc-700 focus:bg-zinc-800 bg-zinc-800'>
                                    <MapPin className='text-red-300'></MapPin>
                                </Button>
                                <div className='overflow-hidden overflow-ellipsis w-full'>
                                    <p className='mx-5 text-xs text-zinc-400'>LOCATION</p>
                                    <p className='mx-5 text-xs'>Marrakech, Morocco</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-red-300 my-5 mx-5"></div>
                    </div>

                    <div className='flex justify-around w-44 my-6 mx-5'>
                        <a href="https://linkedin.com/in/abderrahman-aamri">
                            <LinkedInLogoIcon className='w-5 h-5'>
                            </LinkedInLogoIcon>
                        </a>
                        <a href="https://www.facebook.com/Abdul.rey8">
                            <FacebookIcon className='w-5 h-5'></FacebookIcon>
                        </a>
                        <a href="https://x.com/AamriRey">
                            <TwitterLogoIcon className='w-5 h-5'></TwitterLogoIcon>

                        </a>
                    </div>
                </div>
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
                        width={100}
                        height={100}
                        className='rounded-3xl bg-zinc-700 m-4'
                    />
                    <div className='flex flex-col my-6 justify-between'>
                        <p className='font-semibold text-lg'>Abderrahman Aamri</p>
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
                    bg-zinc-700 transition duration-200 ease-in-out'>
                        <ChevronDown className='text-red-300 ' />
                    </Button>
                </div>
            </div>

            <div className={`rounded-lg transition-all duration-500 ease-in-out 
                ${isVisible ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}
            >
                <div className=" border-t-orange-200 ">
                    <div>
                        <div className="border-t border-red-300 my-3 mx-5"></div>
                        <div className='flex flex-col mx-5'>
                            <div className='flex items-center mb-5'>
                                <Button className='w-10 h-10 rounded-xl shadow-zinc-900 shadow-xl focus:bg-zinc-800 border border-zinc-700 bg-zinc-800'>
                                    <Mail className='text-red-300'></Mail>
                                </Button>
                                <div className='overflow-hidden overflow-ellipsis w-full'>
                                    <p className='mx-5 text-[11px] text-zinc-400 uppercase'>email</p>
                                    <a className='mx-5 text-[13px]' href="mailto: abderrahmaneaamri@email.com">abderrahmaneaamri@gmail.com</a>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <Button className='w-10 h-10 rounded-xl shadow-zinc-900 shadow-xl border py-4 border-zinc-700 focus:bg-zinc-800 bg-zinc-800'>
                                    <MapPin className='text-red-300'></MapPin>
                                </Button>
                                <div className='overflow-hidden overflow-ellipsis w-full'>
                                    <p className='mx-5 text-[11px] text-zinc-400 uppercase'>location</p>
                                    <p className='mx-5 text-[13px] '>Marrakech, Morocco</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-red-300 my-3 mx-5"></div>
                    </div>

                    <div className='flex justify-around w-44 my-3 mx-3'>
                        <a href="https://linkedin.com/in/abderrahman-aamri" className='shadow-zinc-900 shadow-xl'>
                            <LinkedInLogoIcon className='w-5 h-5 shadow-zinc-900 shadow-xl'>
                            </LinkedInLogoIcon>
                        </a>
                        <a href="https://www.facebook.com/Abdul.rey8" className='shadow-zinc-900 shadow-xl'>
                            <FacebookIcon className='w-5 h-5'></FacebookIcon>
                        </a>
                        <a href="https://x.com/AamriRey" className='shadow-zinc-900 shadow-xl'>
                            <TwitterLogoIcon className='w-5 h-5'></TwitterLogoIcon>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}




export { SideBar1, SideBar2, SideBar3 }

const MyPage = () => {
    return (
        <div>
            <SideBar1 />
            <SideBar2 />
            <SideBar3 />
        </div>
    );
};


export default MyPage
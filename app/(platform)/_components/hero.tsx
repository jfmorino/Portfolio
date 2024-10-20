import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Hero = () => {
    return (
        <div className=' font-sans'>
            <section className='mb-[40px]'>
                <p className='block my-[1em] mx-0 unicode-bidi'>
                    I'm Abderrahman, a Full Stack Developer, UI/UX Desginer , based in Marrakech, Morocco.
                </p>
                <p className='block my-[1em] mx-0 unicode-bidi'>
                    I specialize in building scalable, full-stack solutions that are functional, user-friendly, personalized, visually appealing, and highly efficient.
                </p>
                <p className='block my-[1em] mx-0 unicode-bidi'>
                    Let’s connect to explore how a website can help drive success for your projects.
                </p>
            </section>

            <p className='text-2xl font-semibold mb-[40px]'>What I'm Doing</p>

            <section className='grid md:grid-cols-2 md:gap-y-[20px] gap-x-[25px] grid-cols-1 '>
                <Card className='flex-1 bg-zinc-800 shadow-zinc-800 shadow-inner  my-6'>
                    <CardHeader>
                        <CardTitle className='text-red-300 mt-2'>Front-End Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className='text-white'>
                            I specialize in creating intuitive and responsive user interfaces using technologies like HTML,
                            CSS, JavaScript, and frameworks like React.
                            My goal is to ensure that the front end is not only visually appealing but
                            also provides a seamless experience for users across different devices.
                        </p>
                    </CardContent>
                </Card>

                <Card className='flex-1 bg-zinc-800 shadow-zinc-800 shadow-inner  my-6'>
                    <CardHeader>
                        <CardTitle className='text-red-300 mt-2'>Back-End Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className='text-white'>
                            On the back end, I work with technologies like Node.js
                            and PHP to build efficient server-side logic, manage databases,
                            and integrate APIs. I focus on making sure that the data flows smoothly
                            and that the application functions securely and reliably.
                        </p>
                    </CardContent>
                </Card>

                <Card className='flex-1 bg-zinc-800 shadow-zinc-800 shadow-inner  my-6'>
                    <CardHeader>
                        <CardTitle className='text-red-300 mt-2'>Database Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className='text-white'>
                            I also design and maintain databases, working with both relational databases like MySQL
                            and NoSQL solutions like MongoDB.
                            I ensure that data is stored efficiently, retrieved quickly,
                            and always handled with security and scalability in mind.
                        </p>
                    </CardContent>
                </Card>

                <Card className='flex-1 bg-zinc-800 shadow-zinc-800 shadow-inner my-6'>
                    <CardHeader>
                        <CardTitle className='text-red-300 mt-2'>Project Management & Deployment</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className='text-white'>
                            From start to finish, I manage the full development lifecycle.
                            I use tools like Git for version control and Docker for containerization,
                            along with CI/CD pipelines to automate testing and deployment,
                            ensuring that every project is delivered smoothly and on time.
                        </p>
                    </CardContent>
                </Card>
            </section>

            <p className='text-2xl font-semibold mb-[40px]'>Reviews / Recommendations</p>
            <Card className='flex-1 bg-zinc-800 shadow-zinc-800 shadow-inner my-6'>
                <CardContent><p className='text-center text-white pt-5'> Coming Soon...</p></CardContent>
            </Card>


            <p className='text-2xl font-semibold mb-[40px]'>Experiences</p>
            <Card className='flex-1 bg-zinc-800 shadow-zinc-800 shadow-inner my-6'>
                <CardContent><p className='text-center text-white pt-5'> Coming Soon...</p></CardContent>
            </Card>


        </div>
    )
}

export default Hero
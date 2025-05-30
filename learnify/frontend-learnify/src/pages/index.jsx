import React, { useEffect, useState } from 'react'
import Nav from '/src/components/Nav'
import { NavLink, useNavigate } from 'react-router-dom'
import FeaturesCard from '../components/FeaturesCard'
import TopMentors from '../components/TopMentors'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import useUserStore from '../store/userStore'

function Home() {
    const { user } = useUserStore()

    const featureCardData = [
        {
            title: "Expert Career Guidance",
            description: "Gain career insights and advice from seasoned mentors. Receive support for resume building, job interviews, and navigating your professional growth.",
            path: "/Expert Career Guidancet"
        },
        {
            title: "Personalized Learning Paths",
            description: "Our mentors design personalized learning plans that cater to your unique goals, helping you stay focused and motivated throughout your journey.",
            path: "/Personalized Learning Paths"
        },
        {
            title: "Affordable and Flexible",
            description: "Learnify ensures that mentorship is accessible to all. Choose flexible and affordable mentoring sessions that fit your budget and schedule.",
            path: "/Affordable and Flexible"
        }
    ]

    return (
        <div>
            <div className='sticky top-0 z-50'>
                <Nav />
            </div>

            <div className="bg-white">
                {/* hero section */}
                <section className='relative bg-green-100 py-10'>
                    {user && <NavLink to={"/dashboard/profile"}>
                        <div className='text-center'>
                            <button className='px-10 py-2 rounded-full shadow-xl text-green-800 text-2xl hover:scale-120 transition-all duration-3s'>Go to Dashboard</button>
                        </div>
                    </NavLink>}
                    <div className='max-w-screen-xl mx-auto flex flex-col gap-5 md:flex-row items-center rounded-xl shadow-xl p-8'>
                        {/* text part */}
                        <div className='md:w-1/2 text-center md:text-left'>
                            <h1 className='font-extrabold text-green-800 text-4xl'><span className='font-extrabold text-green-900 text-6xl'>Learnify:</span><br />
                                Your journey, our guidance
                            </h1>
                            <p className='text-green-700 mt-2'>Every great achiever was inspired by a great mentor. Find yours today!</p>
                            <NavLink to={"/all-mentors"}>
                                <button className='px-6 py-2 font-medium tracking-wide text-white text-center bg-green-500 rounded-md border-3 border-green-500 hover:bg-green-600 hover:text-black transition-all duration-300 mt-6'>
                                    Match with a mentor
                                </button>
                            </NavLink>
                        </div>
                        {/* image part */}
                        <div className='md:w-1/2 relative'>
                            <img className='rounded-md'
                                src="/assets/students.png" alt="mentor hub image" />
                        </div>
                    </div>
                </section>

                {/* About section */}
                <section className='relative bg-white py-10 px-6'>
                    <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center'>
                        {/* image part */}
                        <div className='md:w-1/2 '>
                            <img className='lg:h-100 object-cover rounded-lg' src="/assets/onlineStudy.png" alt="mentor image in about section" />

                        </div>

                        {/* text part */}
                        <div className='md:w-1/2 lg:h-100 rounded-lg text-center bg-[#F1F1F1] lg:p-10 flex flex-col items-center justify-center'>
                            <h1 className='font-extrabold text-4xl'>Elevate Your Career <br /> with Learnify</h1>
                            <p className='mt-3 text-gray-800 leading-relaxed'><span className='font-bold'>Learnify</span> is the ultimate platform designed to connnect you with experienced mentors who can help you unlock your potential. Whether you're seeking career advice, skill development, or personal growth, Learnify is here to guide you every step of the way.</p>
                            {!user && <div className='mt-6'>
                                <NavLink to={"/signup/student"}>
                                    <button className='bg-blue-600 text-center rounded-md px-8 py-3 hover:bg-blue-700'>
                                        <span className='font-semibold text-white'>Join Learnify</span>
                                    </button>
                                </NavLink>
                            </div>}
                        </div>
                    </div>
                </section>

                {/* Feature section */}
                <section className='relative bg-white py-10'>
                    <div className='max-w-screen-xl mx-auto flex flex-col items-center'>
                        <div className='text-center px-8 py-4'>
                            <h1 className='text-4xl font-bold mb-4'>Unlock Your Growth Journey with Learnify</h1>
                            <p className='p-2 mb-2 text-xl text-gray-800'>Learnify is designed to connect you with the right mentors, guiding you to success. Whether it's enhancing your skills or reaching career goals, we’re here to help you thrive.</p>
                        </div>
                        <div className='flex flex-wrap gap-5 items-center justify-center'>
                            {featureCardData.map((data, index) => (
                                <div key={index}><FeaturesCard title={data.title} description={data.description} path={data.path} key={data.path} /></div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works section */}
                <section className='relative bg-green-100 py-5 mt-5'>
                    <div className='max-w-screen-xl mx-auto flex flex-col items-center rounded-xl shadow-xl p-8'>
                        <div className='text-center'>
                            <h1 className='font-bold text-4xl p-2'>Start Your Mentorship Journey with Learnify</h1>
                            <p className='text-lg p-3 text-gray-700'>Follow our easy steps to start achieving more with personalized mentorship.</p>
                        </div>
                        <div className='flex flex-col lg:flex-row mt-5'>
                            <div className='lg:w-1/3 flex justify-center items-center'>
                                <img className='h-[80%] object-cover rounded-lg' src="/assets/studentsCareerPlanning.png" alt="mentor mentee image" />
                            </div>
                            <div className='lg:w-2/3 ml-4'>
                                <div className='flex'>
                                    <div className='flex-shrink-0 bg-teal-400 rounded-full w-10 h-10 text-center mt-2'>
                                        <p className='mt-1 text-lg text-white font-bold'>1</p>
                                    </div>
                                    <div className='text-center ml-2 flex-1'>
                                        <h3 className='text-2xl p-1'>Create Your Profile</h3>
                                        <p className='text-lg text-gray-800 p-1'>Start your Learnify journey by creating a personalized profile.</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex-shrink-0 bg-blue-400 rounded-full w-10 h-10 text-center mt-2'>
                                        <p className='mt-1 text-lg text-white font-bold'>2</p>
                                    </div>
                                    <div className='text-center ml-2 flex-1'>
                                        <h3 className='text-2xl p-1'>Browse Mentor Profiles</h3>
                                        <p className='text-lg text-gray-800 p-1'>Explore a wide variety of mentors from diverse fields.</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex-shrink-0 bg-green-400 rounded-full w-10 h-10 text-center mt-2'>
                                        <p className='mt-1 text-lg text-white font-bold'>3</p>
                                    </div>
                                    <div className='text-center ml-2 flex-1'>
                                        <h3 className='text-2xl p-1'>Select Your Ideal Mentor</h3>
                                        <p className='text-lg text-gray-800 p-1'>Review mentor profiles, read testimonials, and choose someone who aligns with your personal or professional growth journey.</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex-shrink-0 bg-orange-400 rounded-full w-10 h-10 text-center mt-2'>
                                        <p className='mt-1 text-lg text-white font-bold'>4</p>
                                    </div>
                                    <div className='text-center ml-2 flex-1'>
                                        <h3 className='text-2xl p-1'>Schedule Your First Session</h3>
                                        <p className='text-lg text-gray-800 p-1'>Find a time that works for you and your mentor. Schedule your first session and kickstart your growth with expert guidance.</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex-shrink-0 bg-yellow-400 rounded-full w-10 h-10 text-center mt-2'>
                                        <p className='mt-1 text-lg text-white font-bold'>5</p>
                                    </div>
                                    <div className='text-center ml-2 flex-1'>
                                        <h3 className='text-2xl p-1'>Achieve Milestones Together</h3>
                                        <p className='text-lg text-gray-800 p-1'>Stay motivated, and hit your personal or professional milestones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mentor section */}
                <section className='relative bg-[#f3f4f6] py-10 px-6'>
                    <div className='max-w-screen-xl mx-auto lg:flex justify-center'>
                        <div className='lg:max-w-1/3'>
                            <h1 className='font-extrabold text-4xl text-green-600 leading-tight'>Find the Right Mentor for You</h1>
                            <p className='text-lg text-gray-700 mt-2'>Unlock growth opportunities with expert mentors. Whether you're aiming to boost your career, enhance your skills, or explore new fields, Learnify has the perfect mentor for you.</p>
                            {!user && <NavLink to={"/signup/student"}>
                                <button className='bg-green-500 text-white px-6 py-3 mt-3 rounded-lg flex items-center'>
                                    Get Started <svg
                                        className="w-4 h-4 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </button>
                            </NavLink>}
                        </div>

                        <div className='text-center m-4 lg:m-0'>
                            {[
                                "Career Coaches",
                                "Business Mentors",
                                "Creative Mentors",
                                "Tech Experts",
                                "Marketing Gurus",
                                "Finance Advisors",
                                "Wellness Coaches",
                                "Education Mentors",
                                "Social Impact Leaders",
                            ].map((cat, index) => (
                                <button key={index}
                                    className='border border-green-600 rounded-lg px-6 py-4 bg-white m-4 lg:min-w-[250px] hover:bg-green-500 hover:text-white transition-all duration-500'>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='max-w-screen-xl mx-auto mt-4 shadow-xl shadow-green-100'>
                        <img className='object-cover rounded-lg h-130 w-full'
                            src="/assets/StudentsImage.png" alt="student image" />
                    </div>
                </section>

                {/* Top Mentors */}
                <section className='relative bg-white py-10'>
                    <div className='max-w-screen-xl mx-auto lg:flex flex flex-col items-center rounded-xl shadow-xl p-8'>
                        <h1 className='text-4xl font-bold text-green-600 mb-2'>Top Mentors</h1>
                        <p className='text-2xl font-semibold mb-4'>Select mentor to book classes</p>
                        <div className='flex flex-wrap'>
                            <TopMentors />
                        </div>
                    </div>
                </section>



                {/* Call to action */}
                <section className='relative bg-green-100 py-10'>
                    <div className='max-w-screen-xl mx-auto text-center'>
                        <div className='max-w-3xl mx-auto'>
                            <h1 className='text-5xl font-extrabold text-green-600 p-3'>Unlock Your Potential with the Right Mentor!</h1>
                            <p className='text-lg text-gray-800 mt-2'>Connect with experienced mentors who can guide you towards your goals. Whether you're starting a new career, learning new skills, or growing your network—your journey begins here.</p>
                            {!user && <NavLink to={"/signup/student"}>
                                <button
                                    className='bg-green-500 rounded-xl px-8 py-4 m-4 text-white text-lg font-semibold hover:bg-green-600 hover:scale-110 transition-all diration-300'>
                                    Get Started
                                </button>
                            </NavLink>}
                            {!user && <button className='bg-white rounded-xl px-8 py-4 m-4 text-green-500 text-lg font-semibold hover:bg-green-500 hover:text-white border border-green-500 transition-all duration-300'>
                                Explore More
                            </button>}
                        </div>
                    </div>
                </section>

                {/* Footer section */}
                <section className='relative bg-black py-10'>
                    <div className='max-w-screen-xl mx-auto'>
                        <div className='max-w-2xl mx-auto text-white text-center'>
                            <h5 className='p-2 text-xl mb-2'>Stay Connected</h5>
                            <p className='text-gray-500 text-sm'>Follow us on social media for updates, inspiration, and mentorship tips!</p>
                            <div className='p-3 flex flex-wrap justify-center mt-2'>
                                <div className='flex justify-evenly'>
                                    <a href={"/#"} target='_blank'>
                                        <AiFillLinkedin className='text-4xl' />
                                    </a>
                                    <a href={"/#"} target='_blank'>
                                        <AiFillGithub className='text-4xl' />
                                    </a>
                                    <a href={"/#"} target='_blank'>
                                        <AiFillTwitterCircle className='text-4xl' />
                                    </a>
                                    <a href={"/#"} target='_blank'>
                                        <AiFillFacebook className='text-4xl' />
                                    </a>
                                    <a href={"/#"} target='_blank'>
                                        <AiFillInstagram className='text-4xl' />
                                    </a>
                                </div>
                            </div>
                            <p className='mt-2 text-gray-500'>&copy; 2024 MentorHub. All Rights Reserved.</p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Home
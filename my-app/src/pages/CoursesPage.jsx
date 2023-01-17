import React from 'react'
import Modalka from './components/Modalka';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Btns from './components/Btns';
import logo from './assets/logo.png';
import certificete from './assets/certificate.png';
import mentor1 from './assets/mentor1.png';
import mentor2 from './assets/mentor2.png';
import mentor3 from './assets/mentor3.png';
import mentor4 from './assets/mentor4.png';
import mentor5 from './assets/mentor5.png';
import mentor6 from './assets/mentor6.png';
import mentor7 from './assets/mentor7.png';
import mentor8 from './assets/mentor8.png';
import mentor9 from './assets/mentor9.png';
import { Avatar } from '@mui/material';
import photo4 from './assets/photo4.png';
import { Facebook, Instagram, LinkedIn, Telegram, Twitter, YouTube } from '@mui/icons-material';


function CoursesPage() {
  return (
    <div>
        <header className='px-20 py-20'>    
            <nav className='flex items-center justify-evenly py-8'>
                <section className='px-20'>
                    <img src={logo} className='max-w-[100px]' />
                </section>
                <section className='px-5 space-x-3 hidden md:block'>
                    <a href="">About Us</a>
                    <a href="">Courses</a>
                    <a href="">Events</a>
                    <a href="">Blog</a>
                    <a href="">Contacts</a>
                </section>
                <section className='px-5 space-x-3 hidden md:block'>
                    <Btns title='Get consultation'/>
                    <span><Person2OutlinedIcon/>Log in / Register</span>
                </section>
                <section className='block md:hidden pr-[5vh]'>
                    <Modalka/>
                </section>
            </nav>
            <section className='text-center'>
                <p className="text-[20px] font-semibold">Enjoy your studying!</p>
                <p className="text-[30px] font-bold">Our online courses</p>
            </section>
        </header>    
        <main className='px-10 md:px-20 py-20'>
            <section className='md:flex flex-wrap gap-10'>
                      <section className='md:w-[30%]  shadow-lg gap-5'>
                        <div className='w-[100%]'>
                          <img src={mentor2} className='w-full m-auto '/>
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='md:w-[30%]  shadow-lg gap-5'>
                        <div className='w-[100%]'>
                          <img src={mentor3} className='w-full m-auto '/>
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='md:w-[30%]  shadow-lg gap-5'>
                        <div className='w-[100%]'>
                          <img src={mentor1} className='w-full m-auto '/>
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='md:w-[30%]  shadow-lg gap-5'>
                        <div className='w-[100%]'>
                          <img src={mentor4} className='w-full m-auto '/>
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='md:w-[30%]  shadow-lg gap-5'>
                        <div className='w-[100%]'>
                          <img src={mentor5} className='w-full m-auto '/>
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='md:w-[30%]  shadow-lg gap-5'>
                        <div className='w-[100%]'>
                          <img src={mentor6} className='w-full m-auto '/>
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='md:w-[30%]  shadow-lg gap-5'>
                        <div className='w-[100%]'>
                          <img src={mentor7} className='w-full m-auto '/>
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='md:w-[30%]  shadow-lg gap-5'>
                        <div className='w-[100%]'>
                          <img src={mentor8} className='w-full m-auto '/>
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='md:w-[30%]  shadow-lg gap-5'>
                        <div className='w-[100%]'>
                          <img src={mentor9} className='w-full m-auto '/>
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>
            </section>
            <section className='py-20 md:text-center'>
                <p className='text-[25px] font-semibold'>TESTIMONIALS</p>
                <p className='text-[30px] font-bold'>What our students say</p>
            </section>
            <section className='bg-[#F4F5F6] md:px-20 py-20'>
                <section className='w-[70%] bg-white md:px-20 py-10 m-auto'>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam 
                            viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare 
                            turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam 
                            maecenas diam integer in.
                        </p>
                        <p className='md:flex justify-start items-center'>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            Eleanor Pena
                        </p>
                </section>          
            </section>
            <section className="md:flex py-20 md:px-20">
                <section className='px-20'>
                    <p className="text-[15px] font-semibold">Createx Certificate</p>
                    <p className="text-[35px] font-bold">Your expertise will be confirmed</p>
                    <p className="text-[10px] py-10">We are accredited by international professional <br /> organizations and institutes:</p>
                </section>
                <section className='md:px-20 min-w-[300px]'>
                    <img src={certificete} className='w-full' />
                </section>
            </section>
            <section className='bg-[#fedcd2] pt-10 md:px-20'>
                <section className='text-center text-[25px] text-semibold'>
                <p>Don’t miss anything</p>
                <p className='font-bold'>Subscribe to the Createx School <br /> announcements</p>
                </section>
                <section className='grid md:grid-cols-3'>
                    <section className='w-[50%] hidden  md:flex justify-end '>
                      <img src={photo4} className='w-full' />
                    </section>
                    <section className='md:flex justify-center py-3 items-center'>
                        <input type="text" placeholder='Enter your E-mail' className='rounded  px-5 py-2' /><Btns title="Subscribe"/>
                    </section>
                    <section className='w-[50%] m-auto hidden md:block'>
                      <img src={photo4} className='w-full' />
                    </section>
                </section>
          </section>
        </main>
        <footer className='py-20 px-20 md:flex text-center space-y-5 bg-[#1E212C]'>
            <section className='text-white space-y-5'>
                  <p className='text-[35px] font-bold'>CREATX</p>
                  <p className='py-5'>
                  Createx Online School is a leader in online studying. <br />
                  We have lots of courses and programs from the main <br />
                  market experts. We provide relevant approaches to <br />
                  online learning, internships and employment in the <br />
                  largest companies in the country. 
                  </p>
                  <span className='space-x-5 py-5'>
                    <Facebook/> <Twitter/> <YouTube/> <Telegram/> <Instagram/> <LinkedIn/> 
                  </span>
            </section>
            <section className='lg:px-20  text-white text-[25px] space-y-3'>
                <p className='text-[20px] font-semibold'>SITE MAP</p>
                <p className='text-16px text-[#887b7b]' >About Us</p>
                <p className='text-16px text-[#887b7b]' >Courses</p>
                <p className='text-16px text-[#887b7b]' >Events</p>
                <p className='text-16px text-[#887b7b]' >Blog</p>
                <p className='text-16px text-[#887b7b]' >Contacts</p>
            </section>
            <section className='lg:px-20  text-white text-[25px] space-y-3'>
                <p className='text-[20px] font-semibold'>COURSES</p>
                <p className='text-16px text-[#887b7b]'>Marketing</p>
                <p className='text-16px text-[#887b7b]'>Management</p>
                <p className='text-16px text-[#887b7b]'>HR & Recruting</p>
                <p className='text-16px text-[#887b7b]'>Design</p>
                <p className='text-16px text-[#887b7b]'>Development</p>
            </section>
            <section className='lg:px-20  text-white text-[25px] space-y-3'>
              <p className='text-[20px] font-semibold'>CONTACT US</p>
                <p className='text-16px text-[#887b7b]'>(405) 555-0128</p>
              <p className='text-16px text-[#887b7b]'>hello@createx.com</p>

            </section>
        </footer>
    </div>
  )
}

export default CoursesPage

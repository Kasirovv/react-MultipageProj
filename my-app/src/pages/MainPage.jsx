import React from 'react'
import logo from './assets/logo.png';
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';
import photo4 from './assets/photo4.png';
import Btns from './components/Btns';
import Modalka from './components/Modalka';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import mentor1 from './assets/mentor1.png';
import mentor2 from './assets/mentor2.png';
import mentor3 from './assets/mentor3.png';
import mentor4 from './assets/mentor4.png';
import mentor5 from './assets/mentor5.png';
import mentor6 from './assets/mentor6.png';
import { Facebook, Instagram, LinkedIn, Telegram, Twitter, YouTube } from '@mui/icons-material';


function MainPage() {
  return (
    <div>
        <header className='bg-[#fedcd2] w-[100%]'>      
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
          <section className='md:flex py-8'>
              <section className='flex flex-col items-center justify-center py-10 m-auto'>
                  <p className='text-[30px] font-bold'>
                  Enjoy studying <br />
                  with Createx <br /> Online Courses
                  </p>
                  <span className='space-x-3 py-5'>
                      <Btns title='About us'/>
                      <Btns title='Explore courses'/> 
                  </span>
              </section>
              <section className='flex items-center justify-center py-10 m-auto'>
                  <img src={photo1} className='max-w-[450px] min-w-[300px]' />
              </section>
          </section>
          <section className='hidden md:flex justify-center items-center py-7 space-x-8 text-[20px] font-semibold '>
              <p>
              1200 Students graduated
              </p>
              <p>
              84  Completed courses
              </p>
              <p>
              16 Qualified tutors
              </p>
              <p>
              5 Years of experience
              </p>
          </section>
        </header>
        <main className='w-[100%]'>
          <section className='md:flex py-8 px-3'>
              <section className='flex items-center justify-center py-10 m-auto'>
                  <img src={photo2} className='max-w-[600px] min-w-[300px]' />
              </section>
              <section className='flex flex-col justify-center py-10 m-auto'>
                  <p className='text-[20px] font-semibold'>Who we are</p>
                  <p className='text-[30px] font-bold'>Why Createx?</p>
                  <p> <TaskAltIcon/> A fermentum in morbi pretium aliquam adipiscing <br /> donec tempus.</p>
                  <p> <TaskAltIcon/> Vulputate placerat amet pulvinar lorem nisl.</p>
                  <p> <TaskAltIcon/> Consequat feugiat habitant gravida quisque elit <br /> bibendum id adipiscing sed.</p>
                  <p> <TaskAltIcon/> Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
                  <p> <TaskAltIcon/> Tincidunt sagittis neque sem ac eget.</p>
                  <p> <TaskAltIcon/> Ultricies amet justo et eget quisque purus <br /> vulputate dapibus tortor.</p>
                  <Btns title="More about us"/>
              </section>
          </section>

          <section className='py-20 px-20 text-[25px] font-bold'>
              <p>Ready to learn?</p>
              <p>Featured Courses</p>
          </section>

          <section className='py-20 px-20 space-y-8 hidden md:block'>

            <section className='flex gap-5 px-5 '>
                      <section className='flex w-[650px] shadow-lg gap-5'>
                        <div className='w-[30%] max-w-[300px] '>
                          <img src={mentor1} className='w-full' />
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='flex w-[650px] shadow-lg gap-5'>
                        <div className='w-[30%] max-w-[300px] '>
                          <img src={mentor2} className='w-full' />
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>
            </section>

            <section className='flex gap-5 px-5 '>
                      <section className='flex w-[650px] shadow-lg gap-5'>
                        <div className='w-[30%] max-w-[300px] '>
                          <img src={mentor3} className='w-full' />
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='flex w-[650px] shadow-lg gap-5'>
                        <div className='w-[30%] max-w-[300px] '>
                          <img src={mentor4} className='w-full' />
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>
            </section>

            <section className='flex gap-5 px-5 '>
                      <section className='flex w-[650px] shadow-lg gap-5'>
                        <div className='w-[30%] max-w-[300px] '>
                          <img src={mentor5} className='w-full' />
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>

                      <section className='flex w-[650px] shadow-lg gap-5'>
                        <div className='w-[30%] max-w-[300px] '>
                          <img src={mentor6} className='w-full' />
                        </div>
                        <div className='w-[70%] grid grid-rows-3 items-center'>
                          <p className='bg-[#03CEA4] rounded text-white w-[80px]'>Marketing</p>
                          <p className='font-[700] text-[20px] tracking-[1px]'>Brand Management & PR <br /> Communications</p>
                          <p><span className='text-[#FF4242] text-[18px]'> $530 </span>by Kristin Watson</p>
                        </div>
                      </section>
            </section>

          </section>

          <section className='py-20 px-10 md:px-20 md:flex'>
              <section>
                  <p className='text-[25px] font-semibold'>Only practicing tutors</p>
                  <br /> 
                  <p>
                  Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames <br />
                  dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis <br />
                  augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam <br />
                  sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet <br /> 
                  enim, nisi tempus vehicula.
                  </p>
              </section>
              <section className='w-[500px] m-auto max-w-[300px] py-5'>
                  <img src={photo3} className='w-full m-auto' />
              </section>
          </section>

          <section className='bg-[#fedcd2] py-20 px-5 md:px-20'>
                <section className='text-center font-semibold text-[35px] py-10 px-20'>
                  <p>Our Events</p>
                  <p className='font-bold'>Lectures & workshops</p>
                </section>
                
                <section className='space-y-8'>
                    <section className='w-[80%] px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
                        <section>
                            <p className='text-[48px] text-[#FF3F3A]'>
                              05 <sup className='text-[30px] text-black'>August</sup>
                            </p>
                        </section>
                        <section>
                            <p>
                              Formation of the organizational structure of the company in the face of uncertainty.<br />
                            </p> 
                            <p>Onine master-class</p>
                        </section>
                        <section>
                          <Btns title='View more'/>
                        </section>
                    </section>

                    <section className='w-[80%] px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
                        <section>
                            <p className='text-[48px] text-[#FF3F3A]'>
                              05 <sup className='text-[30px] text-black'>August</sup>
                            </p>
                        </section>
                        <section>
                            <p>
                              Formation of the organizational structure of the company in the face of uncertainty.<br />
                            </p> 
                            <p>Onine master-class</p>
                        </section>
                        <section>
                          <Btns title='View more'/>
                        </section>
                    </section>

                    <section className='w-[80%] px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
                        <section>
                            <p className='text-[48px] text-[#FF3F3A]'>
                              05 <sup className='text-[30px] text-black'>August</sup>
                            </p>
                        </section>
                        <section>
                            <p>
                              Formation of the organizational structure of the company in the face of uncertainty.<br />
                            </p> 
                            <p>Onine master-class</p>
                        </section>
                        <section>
                          <Btns title='View more'/>
                        </section>
                    </section>
                </section>
          </section>

          <section className='bg-[#F4F5F6] pt-10 md:px-20'>
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

export default MainPage

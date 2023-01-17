import React from 'react'
import logo from './assets/logo.png';
import Btns from './components/Btns';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Modalka from './components/Modalka';
import { Facebook, Instagram, LinkedIn, Telegram, Twitter, YouTube } from '@mui/icons-material';
import photo4 from './assets/photo4.png';

function EvnetsPage() {
  return (
    <div>
           <header className='py-20 px-20'>
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
           </header>
           <main>
                <section className='py-10 px-20 text-center'>
                    <p className='text-[15px] font-medium'>Our events</p>
                    <p className='text-[35px] font-bold'>Lectures, workshops & master-classes</p>
                </section>
                <section className='px-10 py-20 space-y-8'>
                    <section className='w-[80%] border px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
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

                    <section className='w-[80%] border px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
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

                    <section className='w-[80%] border px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
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

                    <section className='w-[80%] border px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
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

                    <section className='w-[80%] border px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
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

                    <section className='w-[80%] border px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
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

                    <section className='w-[80%] border px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
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

                    <section className='w-[80%] border px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
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

                    <section className='w-[80%] border px-3 rounded bg-[#FFFFFF] m-auto py-5 md:flex justify-around items-center'>
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
                </section>
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
           </main>
    </div>
  )
}

export default EvnetsPage

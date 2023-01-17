import React from 'react'
import Btns from './components/Btns';
import Modalka from './components/Modalka';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.png';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.png';
import photo4 from './assets/photo4.png';
import logo from './assets/logo.png';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Facebook, Instagram, LinkedIn, Telegram, Twitter, YouTube } from '@mui/icons-material';


function BlogPage() {
  return (
    <div>
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
            <body className='py-20 px-20'>
                  <section className='py-10 text-center'>
                      <p className='text-[25px]  font-semibold'>Our blog</p>
                      <p className='text-[40px]  font-bold'>Createx School Journal</p>
                  </section>
                  <section className='md:flex flex-wrap md:px-10  gap-5'>
                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image8} className='w-full' />
                          </section>
                          <section className="py-5  m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>

                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image7} className='w-full' />
                          </section>
                          <section className="py-5 m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>

                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image6} className='w-full' />
                          </section>
                          <section className="py-5 px-5 m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>
                  </section>
                  <section className='md:flex py-20 gap-10 md:px-10'>
                        <section>
                          <section className="md:w-[705px] h-[300px]">
                               <img src={image5} className='w-full' />
                          </section>
                          <section className=" py-5">
                                <p className='font-black'>
                                    HR statistics: job search,  interviews, hiring and recruiting
                                </p>
                                  <p>
                                    Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing <br />
                                    aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor,<br />
                                    massa vivamus. A molestie id semper fermentum pretium...
                                  </p>
                          </section>
                        </section>
                        
                        <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image4} className='w-full' />
                          </section>
                          <section className="py-5  m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>

                  </section>
                  <section className='md:flex flex-wrap md:px-10  gap-5'>
                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image3} className='w-full' />
                          </section>
                          <section className="py-5  m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>

                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image2} className='w-full' />
                          </section>
                          <section className="py-5 m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>

                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image1} className='w-full' />
                          </section>
                          <section className="py-5 px-5 m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
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
            </body>
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

export default BlogPage

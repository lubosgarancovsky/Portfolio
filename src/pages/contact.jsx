import React from 'react';
import { ContactForm } from '../components/contactForm';
import { Fade } from '../animations/fade'
import mail from '../assets/icons/mail.svg';
import git from '../assets/icons/github.svg';
import twitter from '../assets/icons/twitter.svg';
import ig from '../assets/icons/instagram.svg';
import { handleHover, handleLeave } from '../hooks/hover';
import arrow from '../assets/icons/arrow.svg';

export function Contact() {

    return (
        <div id="Contact" className='page contactpage'>
            <div className='contact-modal'>
                <h2>Thank you for your messege</h2>
            </div>

            <Fade>
                <div className='heading'>
                    <h4>Looking to hire?</h4>
                    <h2>Let's talk</h2>
                </div>
            </Fade>

            <div className='contact-wrapper'>
                <Fade dirrection="left">
                <div className='contact-form'>
                    <ContactForm />
                </div>
                </Fade>

                <Fade dirrection='right'>
                    <div className='contact-info'>
                        <p>...or you can find me on:</p>
                        <ul>
                            <p><img src={mail} />lubos.garancovsky@gmail.com</p>
                            <p><img src={twitter} />@LGarancovsky</p>
                            <p><img src={ig} />@lubos.garancovsky</p>
                            <p><img src={git} />lubosgarancovsky </p>
                        </ul>
                        <div className='author'>
                            <div className='design'>
                                <h5>Designed by</h5>
                                <p>Ľuboš Garančovský</p>
                            </div>
                            <div className='develop'>
                                <h5>Developed by</h5>
                                <p>Ľuboš Garančovský</p>
                            </div>
                            <div className='goUp'>
                                <div onMouseEnter={handleHover}  onMouseLeave={handleLeave} className='upbutton' onClick={()=>{
                                    window.scrollTo(0, 0)
                                }}>
                                    <img src={arrow} alt='arrow' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

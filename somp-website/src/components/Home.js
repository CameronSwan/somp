import React from 'react'
import { Link } from 'react-router-dom'

import waterfrontOne from '../res/img/Waterfront_1.jpg'

export default function Home() {
    return (
        <div className='home'>
            <section className='home--company'>
                <div className='home--company_container'>
                    <h1 className='home--company_title'>Seat of My Pants Productions</h1>
                    <h3 className='home--company_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                </div>
                <img className='home--company_image' src={waterfrontOne} alt='' />
            </section>
            <section className='home--projects'>
                <article className='home--project'>
                    <img className='home--project_image' src={waterfrontOne} alt='' />
                    <h1 className='home--project_title'>Behind the Scenes</h1>
                    <h3 className='home--project_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    <Link className='home--project_link' to='/projects'>Discover</Link>
                </article>
                <article className='home--project'>
                <img className='home--project_image' src={waterfrontOne} alt='' />
                    <h1 className='home--project_title'>Faces of Pharmacare</h1>
                    <h3 className='home--project_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    <Link className='home--project_link' to='/projects'>Discover</Link>
                </article>
                <article className='home--project'>
                <img className='home--project_image' src={waterfrontOne} alt='' />
                    <h1 className='home--project_title'>Placeholder Project</h1>
                    <h3 className='home--project_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    <Link className='home--project_link' to='/projects'>Discover</Link>
                </article>
            </section>
            <section className='home--eastlink'>
                <img className='home--eastlink_image' src={waterfrontOne} alt='' />
                <div className='home--eastlink_container'>
                    <h1 className='home--eastlink_title'>Eastlink Community TV</h1>
                    <h3 className='home--eastlink_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                </div>
            </section>
        </div>
    )
}
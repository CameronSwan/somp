import React from 'react'
import { Link } from 'react-router-dom'

import waterfrontOne from '../res/img/Waterfront_1.jpg'
import barnImg from '../res/img/Barn.png'
import beachImg from '../res/img/Beach.png'
import headshot from '../res/img/Face.png'
import grassImg from '../res/img/Grass.png'
import oceanImg from '../res/img/Ocean.png'
import rocksImg from '../res/img/Rocks.png'
import treesImg from '../res/img/Trees.png'

export default function Home() {
    return (
        <div className='home'>
            <section className='home--company'>
                <div className='home--company_container'>
                    <h1 className='home--company_title'>Seat of My Pants Productions</h1>
                    <h3 className='home--company_desc'>Everyone has a story. We simply try to tell some of them.</h3>
                </div>
                <img className='home--company_image' src={rocksImg} alt='' />
            </section>
            <section className='home--projects'>
                <article className='home--project'>
                    <img className='home--project_image' src={grassImg} alt='' />
                    <h1 className='home--project_title'>Behind the Scenes</h1>
                    <h3 className='home--project_desc'>
                        So much happens behind closed doors away from public view. Interesting things. Behind the
                        Scenes will provide the audience an opportunity to explore these places, spaces and the
                        people who work in them. Our host, Jim Dalling, will use his unique perspective to bring these
                        stories to life. Our intent is to make this series entertaining and informative and to bring out the
                        best in those we profile.
                    </h3>
                    <Link className='home--project_link' to='/projects'>Discover</Link>
                </article>
                <article className='home--project'>
                <img className='home--project_image' src={waterfrontOne} alt='' />
                    <h1 className='home--project_title'>Faces of Pharmacare</h1>
                    <h3 className='home--project_desc'>
                        Real stories from real Canadians about how the Canadian health care system fails them ...
                        Every. Single. Day. No one should have to choose whether to eat or fill a prescription. Yet it
                        happens in Canada with surprising regularity.
                    </h3>
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
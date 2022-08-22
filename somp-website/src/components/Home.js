import React from 'react'
import { Link } from 'react-router-dom'

import imgForest from '../res/img/reeds.jpg'
import imgLargeBreak from '../res/img/large_break.jpg'
import imgTree from '../res/img/gravel_road.jpg'

export default function Home() {
    return (
        <div className='home'>
            <section className='home--company'>
                <div className='home--company_container'>
                    <h1 className='home--company_title'>Seat of My Pants Productions</h1>
                    <h3 className='home--company_desc'>Everyone has a story. We simply try to tell some of them.</h3>
                </div>
            </section>
            <section className='home--projects'>
                <article className='home--project project--behind_the_scenes'>
                    <h1 className='home--project_title'>Behind the Scenes - TV Show</h1>
                    <h3 className='home--project_desc'>
                        So much happens behind closed doors away from public view. Interesting things. Behind the
                        Scenes will provide the audience an opportunity to explore these places, spaces and the
                        people who work in them. Our host, Jim Dalling, will use his unique perspective to bring these
                        stories to life. Our intent is to make this series entertaining and informative and to bring out the
                        best in those we profile.
                    </h3>
                    <Link className='home--project_link' to='/projects'>Discover</Link>
                </article>
                <article className='home--project project--faces_of_pharmacare'>
                    <h1 className='home--project_title'>Faces of Pharmacare - Project</h1>
                    <h3 className='home--project_desc'>
                        Real stories from real Canadians about how the Canadian health care system fails them ...
                        Every. Single. Day. No one should have to choose whether to eat or fill a prescription. Yet it
                        happens in Canada with surprising regularity.
                    </h3>
                    <a className='home--project_link' href='https://www.facesofpharmacare.ca/' target='_blank' rel='noreferrer'>Discover</a>
                </article>
                {/* <article className='home--project'>
                    <h1 className='home--project_title'>Placeholder Project</h1>
                    <h3 className='home--project_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    <Link className='home--project_link' to='/projects'>Discover</Link>
                </article> */}
            </section>
            <section className='home--team'>
                <article className='team--bill'>
                    <div className='bill--image'></div>
                    <div className='bill--content'>
                        <h1 className='bill--title'>Bill Swan - [TITLE]</h1>
                        <p className='bill--desc'>
                            Bill began in film and television in 1987 with Salter Street Films, CBC television and local 
                            producers. After a slight 25-year detour into international health research, he re-entered local 
                            film and TV production in 2018.
                            <br/>
                            <br/>
                            Since, he has worked both above and below the line on many Eastlink series and movies, 
                            including, The Colour of Spring, Walkabout, NSK9, Haunted, Stand and Deliver, Maritime 
                            Museums, 4 Cinema 902 films (Sifting, Sleepwatching, The Human Limit, I am Not a Hero) The 
                            Last Divide, Maritime Ink, Women Now, Road Trippin’, Downshift, Locally Owned, and Style 
                            East. He has also had small acting roles in Alaska Triangle and Moonshine and a project he 
                            spearheaded on Pharmacare in Canada was featured in two episodes of CitizeNS.
                            <br/>
                            <br/>
                            He now works as producer on his own new show, Behind the Scenes as well as 4 shows for 
                            Whalesong productions: A Dog’s Life, Trailer Travels, MariTime Machines, and a new version of 
                            Walkabout.
                            <br/>
                            <br/>
                            He was once an unwitting assistant tiger wrangler for CBC television.
                        </p>
                    </div>
                </article>
            </section>
            <section className='home--sponsors'>
                <h1 className='home--sponsors_title'>With the Support of:</h1>
                <article className='home--sponsor'>
                    <img className='home--sponsor_image' src={imgForest} alt='' />
                    <div className='home--sponsor_container'>
                        <h1 className='home--sponsor_title'>The Government of Canada</h1>
                        <h3 className='home--sponsor_desc'>
                            The Canadian Film or Video Production Tax Credit (CPTC) encourages the creation of Canadian 
                            film and television programming and the development of an active domestic independent 
                            production sector.
                        </h3>
                    </div>
                </article>
                <article className='home--sponsor'>
                    <img className='home--sponsor_image' src={imgLargeBreak} alt='' />
                    <div className='home--sponsor_container'>
                        <h1 className='home--sponsor_title'>The Nova Scotia Department of Communities, Culture, Torisum and Heritage</h1>
                        <h3 className='home--sponsor_desc'>
                            The Nova Scotia Film and Television Production Incentive Fund provides funding for Nova 
                            Scotian screen-based content creation.
                        </h3>
                    </div>
                </article>
                <article className='home--sponsor'>
                    <img className='home--sponsor_image' src={imgTree} alt='' />
                    <div className='home--sponsor_container'>
                        <h1 className='home--sponsor_title'>Eastlink Community TV</h1>
                        <h3 className='home--sponsor_desc'>
                            Bringing a uniquely Maritime perspective to the world through stories that make our 
                            communities stronger. Eastlink is the premiere network forced on telling our stories. Consider 
                            subscribing today to support local programming
                        </h3>
                    </div>
                </article>
            </section>
        </div>
    )
}
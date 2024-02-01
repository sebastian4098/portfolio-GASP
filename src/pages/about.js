import React from "react";
import Menu from "../components/menu";
import Sky from "../components/sky";
import Footer from "../components/footer";
import Seo from "../components/seo";

const About = () => (
    <div className='internal-page about-page'>
        <Sky />
        <Menu />
        <Seo title='About' />
        <header>
            <h1>About</h1>
            <p>Stirrin' up trouble since 2008</p>
        </header>
        <main>
            <div className='about-section'>
                <div className='about-title'>Synopsis</div>
                <div className='about-content'>
                    Hi there!{" "}
                    <span aria-label='hand wave' role='img'>
                        👋🏽
                    </span>{" "}
                    I'm <u>Stephen Anselm</u>.<br></br>
                    <br></br>I am a computer engineer and a full time freelancer
                    as a Full Stack Web Developer. <br />
                    <br />
                    After I got my first project as a freelancer I realized that
                    this is what I wanted to do.
                    <br />
                    <br /> Looking over the projects I have completed and my
                    clients' feedbacks means a lot to me and always keeps me
                    going. <br />
                    <br />
                    As much as I like to create long working relations with my
                    clients, I am always eager to work with new clients. You can
                    find me on upwork.
                    <br />
                    <br /> I believe the best thing I gained over my vast
                    experience is the ability to work out of my comfort zone.
                    <br />
                    If I don't know something that doesn't mean I can't do it.
                    <br></br>
                    <br></br> I am also an avid photographer and freelancer.
                    <br></br> <br></br>
                    Combining these skills, I bring beautiful digital
                    experiences to life. At heart, I am a creator: <br></br>I
                    believe in aesthetics with purpose.
                </div>
            </div>
            <div className='about-section'>
                <div className='about-title'>TL;DR</div>
                <div className='about-content'>
                    I build websites with MERN, LAMP, Django, WordPress, Drupal,
                    Grav, and Gatsby.
                    <br></br>
                    <br></br>I write HTML, (S)CSS, front-end JavaScript, jQuery,
                    JSX, PHP, and Twig.
                    <br></br>
                    <br></br>I design and prototype in Adobe XD, Figma, Sketch,
                    Adobe Illustrator, and InVision.
                    <br></br>
                    <br></br>I capture photos with my Sony A7RIV and Fujifilm
                    X100V.
                </div>
            </div>
            <div className='about-section'>
                <div className='about-title'>Bio</div>
                <div className='about-content'>
                    I double majored in Design and Studio Art at Lehigh
                    University, with a concentration in Design and Studio Art.
                    In my last year of college, I taught myself how to code and
                    push my designs to the world wide web.
                    <br></br>
                    <br></br>
                    After a couple years of agency experience, it became clear
                    that web design and development was my passion. So, I
                    decided to learn programming fundamentals in a formal
                    setting, at a coding bootcamp called General Assembly, where
                    I learned JavaScript and React.js in a rigorous environment.
                    <br></br>
                    <br></br>
                    Currently, I operate my own freelance website development,
                    interface design and professional photography enterprise.
                    Right now, I'm seeking a creative developer + designer role.
                </div>
            </div>
            <div className='about-section'>
                <div className='about-title'>Awards + Publications</div>
                <div className='about-content'>
                    <ul>
                        <li>
                            Leonard B. Pool Prize
                            <span> Competitive Entreprenurial Scholarship</span>
                        </li>
                        <li>
                            Olympus InVision Photography Festival
                            <span>Second Place</span>
                        </li>
                        <li>
                            PA BUG Best Portal Design Award
                            <span>First Place</span>
                        </li>
                        <li>
                            Business Insider
                            <span>Published Photography</span>
                        </li>
                        <li>
                            Lehigh Acumen
                            <span>Published Photography</span>
                        </li>
                        <li>
                            InStyle Magazine
                            <span>Published Photography</span>
                        </li>
                        <li>
                            Hazl Magazine
                            <span>Published Photography</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='about-section'></div>
        </main>
        <Footer />
    </div>
);

export default About;

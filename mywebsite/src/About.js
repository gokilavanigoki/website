import AboutImg from './assest/about.png'

function About (){
    return <section id="about" className='flex flex-col md:flex-row bg-primary px-5 font-hero'>
        <div className='md:w-1/2'>
            <img src={AboutImg} alt='AboutImag'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className=' flex flex-col justify-center text-white '>
                <h1 className='text-4xl border-b-4 w-[150px] font-bold mb-5'>AboutMe</h1>
                <p className='pb-5'>I am a passionate UI/UX designer with a B.Sc. in Computer Technology and hands-on experience in both UI/UX design and front-end development.I’ve successfully completed a UI/UX internship at CodersCave and acquired UI/UX design skills through courses on platforms like Coursera. </p>
                <p className='pb-5'>I have worked on several projects, including designing dashboards, landing pages, and mobile app interfaces, where I emphasize user-centered design and visual aesthetics.</p>
                <p className='pb-5'>Currently, I'm honing my skills in HTML, CSS, JavaScript, and React to build seamless, interactive user interfaces. I thrive in creating functional and beautiful designs that solve real user problems, with a focus on usability, creativity, and attention to detail.

</p>
            </div>
        </div>
    </section>
}
export default About
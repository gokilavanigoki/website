
import HeroImg from './assest/hero.jpg'
import { AiOutlineLinkedin,AiOutlineBehance } from "react-icons/ai";
function Hero (){
    const config={
        social : {
        linkedin :'https://www.linkedin.com/in/gokilavani20/',
        behance :'https://www.behance.net/gokilavanigoki1'
           }
    }
    return <section id="hero" className='flex flex-col md:flex-row bg-secondary text-white px-5 py-32 justify-center'>
            <div className="md:w-1/2 flex flex-col"> 
                <h1 className='text-6xl font-hero'>Hi,<br /><span>I'm UIUX Designer</span>
            <p className='text-4xl py-2 font-medium'>I create Userfriendly design</p></h1>
              
            <div className="text-black flex py-5">
                <a className='pr-4 hover:text-white'href={config.social.linkedin}><AiOutlineLinkedin size={40 }/></a>
                <a className=' hover:text-white'href={config.social.behance}><AiOutlineBehance size={40}/></a>
            </div>
             </div> 
             <img className=' md:w-1/3'src={HeroImg} alt=""/>
    </section>
}
export default Hero
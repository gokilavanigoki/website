import ResumeImg from './assest/resume.png'
function Resume (){
    const config ={
        link:"https:drive.google.com/file/d/1X89cIDukrhOBA_dQefVBpy9LIwijDlOY/view?usp=drive_link"
    }
    return<section id="resume" className='flex flex-col md:flex-row bg-primary px-5 font-hero'>
        <div className='md:w-1/2 flex justify-end'>
            <img className='w-[400px]'src={ResumeImg} alt='Resume'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className=' flex flex-col justify-center text-white '>
                <h1 className='text-4xl border-b-4 w-[125px] font-bold mb-5'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn'href={config.link}>Download</a></p>
            </div>
        </div>
    </section>
}
export default Resume
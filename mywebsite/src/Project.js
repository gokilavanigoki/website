


import Homepage from'./assest/homepage.png'
import MusicHome from'./assest/musichome.png'
import Dashboard from'./assest/Dashboard.png'


function Project (){
    const config ={
        project:[
            {
                image :Homepage,
                descripstion :'E-Learning Platform Interface',
                link :'https://www.behance.net/gallery/208354873/Music-Festival-Landing-page'
            },
            {
                image :MusicHome,
                descripstion :'Music Streaming App Redesign',
                link :'https://www.behance.net/gallery/204324225/E-Learning-Platform-Interface'
            },
            {
                image :Dashboard,
                descripstion :'Fee Management Dashboard for School Administrators',
                link :'https://www.figma.com/proto/KVSNoBJlvtCeQUVQKASe6b/Untitled?page-id=0%3A1&node-id=52-325&t=aPz6DxBSvMj0nIHl-1'
            }
        ]
    }
    return <section id="project" className="flex flex-col py-20 px-10 items-center bg-secondary ">
        <div className="w-1/2 flex justify-center">
        <div className='flex flex-col items-center text-white'>
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[125px]'>Projects</h1>
            <h2>A collection of my recent work, showcasing various design and development projects</h2>
          </div> 
        </div>
        <div className=' flex justify-center w-full py-10'>
            <div className='flex flex-col md:flex-row px-10 gap-10'>
                {config.project.map ((project) =>(
    
                    <div  className='relative'>
                <img className='h-[200px]'src={project.image} alt=" " />
                <div className='project-desc'>
                <p className='text-center py-5'>{project.descripstion}</p>
                <div className='flex justify-center'>
                    <a className='btn' target='_blank'rel='noopener noreferrer' href={project.link}>View Project</a>
                </div>
                </div>
                </div>
                
            ))}

        
            </div>
            
        </div>
    </section>
}
export default Project
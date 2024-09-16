import ProjetoPng from '../assets/projeto.png'
import GuindasteSvg from '../assets/guindaste.svg'
import DesingHubSvg from '../assets/desingHub.svg'


export function Projeto(){
    return(
        <div className=' h-full '>
            <div className='relative'>
                <img className='object-cover h-40 w-full z-0' src={ProjetoPng} alt="" />
                <img className='w-20 relative left-20 bottom-10' src={GuindasteSvg} alt="" />
            </div>

            <div className='flex flex-col  relative gap-5 '>
                <h2 className='text-2xl font-bold relative left-20'>Alguns projetos que fiz:</h2>

                <div className='flex items-center w-full justify-center gap-5'>
                    <a href="">
                        <img src={DesingHubSvg} alt="" />
                    </a>

                    <a href="">
                        <img src={DesingHubSvg} alt="" />
                    </a>
                    <a href="">
                        <img src={DesingHubSvg} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="logo" className='w-40 object-contain' />

            <button
                type='button'
                onClick={() => window.open('https://github.com/kuroihikari')}
                className='black_btn'
            >
                GitHub
            </button>
        </nav>

        <h1 className='head_text'>
            Capture the gist in a <br className='max-md:hidden'/>
            <span className='orange_gradient'>SNAP</span>
        </h1>

        <h2 className='desc'>
            Simplify your reading with SumSnap, an open-source tool that transforms lengthy articles into clear, concise summaries in an instant.
        </h2>
    </header>
  )
}

export default Hero
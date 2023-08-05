import { AiOutlineHistory, AiOutlineQuestionCircle } from 'react-icons/ai'
import { Button } from './Button'

const Navbar = () => {
    return (
      <>
        <nav className="px-5 py-2 flex gap-10">
          <Button size="xxl" theme="dark" className='ml-48'>
            <AiOutlineHistory />
          </Button>
          <input
            type="text"
            className="w-[50%] rounded-lg border border-slate-400 text-xs pl-3"
            placeholder="Search here ...."
          />
          <Button size="xxl" theme="dark">
            <AiOutlineQuestionCircle />
          </Button>

          <img src="vite.svg" className="h-6 w-6" />
        </nav>
      </>
    );
}

export default Navbar
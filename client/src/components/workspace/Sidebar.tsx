import { BiSolidEditAlt } from "react-icons/bi";
import { AiFillCaretDown, AiFillFile } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { BsFiles, BsHash, BsPlus } from "react-icons/bs";
import { IoOptionsOutline } from "react-icons/io5";
import { Button } from "./Button";

const Sidebar = () => {
  return (
    <div className="w-1/5 h-full">
      <div className="dropdown dropdown-bottom border-y border-[#4e4e4e] w-full">
        <label tabIndex={0} className="btn w-full h-[60px]">
          <div className="text-lg normal-case flex gap-4">
            TeamSync
            <Button theme="dark" size="xxl">
              <BiSolidEditAlt />
            </Button>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow rounded-box "
        >
          <li>Item 1</li>
        </ul>
      </div>
      <div className="py-4 bg-[#19171d]">
        <div className="flex gap-5 mx-10 my-3 text-md">
          <Button size="medium" theme="dark">
            <AiFillFile />
          </Button>
          <span>Canvases</span>
        </div>
        <div className="flex gap-5 mx-10 my-3 text-md">
          <Button size="medium" theme="dark">
            <FaConnectdevelop />
          </Button>
          <span>Connect</span>
        </div>
        <div className="flex gap-5 mx-10 my-3 text-md">
          <Button size="medium" theme="dark">
            <BsFiles />
          </Button>
          <span>Files</span>
        </div>
        <div className="flex gap-5 mx-10 my-3 text-sm">
          <Button size="medium" theme="dark">
            <IoOptionsOutline />
          </Button>
          <span>Browse TeamSync</span>
        </div>
        <div className="flex gap-5 mx-10 mt-6 text-md">
          <Button size="medium" theme="dark">
            <AiFillCaretDown />
          </Button>
          <span>Channels</span>
        </div>
        <div className="flex gap-5 mx-10 my-3 text-md">
          <Button size="medium" theme="dark">
            <BsHash />
          </Button>
          <span>general</span>
        </div>
        <div className="flex gap-5 mx-10 my-3 text-md">
          <Button size="medium" theme="dark">
            <BsHash />
          </Button>
          <span>random</span>
        </div>
        <div className="flex gap-5 mx-10 my-3 text-md">
          <Button size="medium" theme="dark">
            <BsHash />
          </Button>
          <span>practice</span>
        </div>
        <div className="flex gap-5 mx-10 my-3 text-md">
          <Button size="medium" theme="dark">
            <BsPlus className="bg-slate-800" />
          </Button>
          <span>Add channels</span>
        </div>
        <div className="flex gap-5 mx-10 my-3 text-md">
          <Button size="medium" theme="dark">
            <AiFillCaretDown />
          </Button>
          <span>Direct Messages</span>
        </div>
        <div className="flex gap-5 mx-10 my-3 text-md">
          <img src="vite.svg" className="h-4 w-4" />
          <span>User [You]</span>
        </div>
        <div className="flex gap-5 mx-10 my-4 text-md">
          <Button size="medium" theme="dark">
            <BsPlus className="bg-slate-800" />
          </Button>
          <span>Add colleagues</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

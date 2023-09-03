import { AiFillCaretDown } from "react-icons/ai";
import { Button } from "./Button";
import { BiPlus, BiSolidContact } from "react-icons/bi";
import TextArea from "./TextArea";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="w-4/5 absolute left-[20%]">
      <div className="border border-[#5a5a5a] p-2 grid grid-cols-12">
        <div className="col-span-10">
          <div className="btn normal-case">
            # practice
            <Button size="small">
              <AiFillCaretDown />
            </Button>
          </div>
        </div>
        <img src="vite.svg" className="h-6 w-6 col-span-1 my-auto" />
        <img src="vite.svg" className="h-6 w-6 col-span-1 my-auto" />
      </div>
      <div className="border border-[#585858] p-1">
        <div className=" hover:scale-105 cursor-pointer text-center w-1/6 text-xs p-1 first-letter: normal-case ">
          <Button size="small" className="m-auto">
            <BiPlus />
          </Button>
          &nbsp; Add a bookmark
        </div>
      </div>
      <div className="p-10  overflow-auto h-[300px]">
        <div className="text-4xl font-black">
          Welcome to the channel # practice
        </div>
        <div className="text-sm mt-2">
          This channel is for everything # practice. Hold meetings, share your
          docs and make decisions together.{" "}
          <a className="cursor-pointer text-[#7155ff]">Edit description</a>
        </div>
        <div className="btn normal-case rounded-none m-1">
          <Button size="medium">
            <BiSolidContact />
          </Button>
          <div className="text-xs">Add people</div>
        </div>

        <Message />
        <Message />
        <br />
        <div className="relative">
          <div className="absolute -top-4 bg-work right-[45%] border rounded-full w-48 text-sm py-1 px-8">
            Friday, 21 July{" "}
            <Button size="small" className="">
              <AiFillCaretDown />
            </Button>
          </div>

          <hr />
        </div>
      </div>

      <TextArea />
    </div>
  );
};

export default Chat;

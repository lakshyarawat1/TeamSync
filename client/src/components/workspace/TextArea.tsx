import { AiOutlineAudio, AiOutlineBold, AiOutlineItalic, AiOutlineLink, AiOutlinePlus, AiOutlineStrikethrough, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsCodeSlash, BsFillEmojiSmileFill } from "react-icons/bs";
import { FiUnderline } from "react-icons/fi";

const TextArea = () => {
    return (
      <div className="fixed bottom-0 w-screen bg-[#1c1b1b] border border-[#707070] rounded-md">
        <div className="flex gap-5 p-2 text-lg">
          <div className="flex gap-5 p-2 border-r border-[#6f6f6f]">
            <AiOutlineBold />
            <AiOutlineItalic />
            <AiOutlineStrikethrough />
          </div>
          <div className="py-2 ">
            <AiOutlineLink />
          </div>
          <div className="py-2">
            <BsCodeSlash />
          </div>
        </div>
        <input
          className="w-[90%] my-2 p-6 text-[#5e5e5e] text-sm"
          placeholder="Message # practice"
        />
        <div className="flex gap-5  text-lg">
          <div className="flex gap-5 p-2 border-r border-[#6f6f6f]">
            <AiOutlinePlus />
            <BsFillEmojiSmileFill />
            <AiOutlineAudio />
          </div>
          <div className="py-2 ">
            <AiOutlineVideoCameraAdd />
          </div>
          <div className="py-2">
            <FiUnderline />
          </div>
        </div>
      </div>
    );
}

export default TextArea
import { Link } from "react-router-dom";

const Workspaces = () => {
  return (
    <div className="shadow-xl p-5 mt-10 flex w-full relative items-center">
      <div className="md:text-2xl hidden sm:flex font-bold">Create a new workspace</div>
      <Link to="/create-a-workspace" className="absolute md:right-10 right-[40%] bottom-5 border-2 border-[#541554] p-2 rounded-xl px-5 hover:bg-[#541554] hover:text-white">
        Create New
      </Link>
    </div>
  );
};

export default Workspaces;

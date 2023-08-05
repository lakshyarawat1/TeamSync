import Sidebar from "./workspace/Sidebar";
import Navbar from "./workspace/Navbar";
import Chat from "./workspace/Chat";

const Workspace = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex gap-2">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Workspace;

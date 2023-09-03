const Message = () => {
  return (
    <div className="p-4 hover:bg-slate-500 bg-black m-2 rounded-md">
      <div className="text-sm flex  gap-5 items-center">
        <img src="vite.svg" />
        <div className="flex flex-col">
          <h2 className="font-bold pb-3">User</h2>
          <p>User 1 joined the channel</p>
        </div>
      </div>
    </div>
  );
};

export default Message;

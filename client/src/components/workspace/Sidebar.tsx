import { sideItems } from "../../constants/sideItems";

const Sidebar = () => {
  return (
    <>
      <div className="dropdown dropdown-bottom w-1/5 border-y border-[#4e4e4e]">
        <label tabIndex={0} className="btn w-full h-[60px]">
          <div className="text-xl normal-case flex gap-4 pt-2">
            TeamSync
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              />
            </svg>
            <div className="ml-8 opacity-80 bg-white text-black p-2 hover:bg-black hover:text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow rounded-box "
        >
          <li>Item 1</li>
        </ul>
      </div>
      <div className="py-4 bg-[#19171d] w-1/5">
        {sideItems.map((item, key) => (
          <div className="" key={key}>
            <div className="flex gap-3 text-md py-1">
              <img
                src={item.icon}
                className="h-10 w-10 text-[#434343] p-2 rounded-full"
              />
              <a href={item.path} className="pt-2">
                <span>{item.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;

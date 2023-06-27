import { innerLinks, navItems } from "../constants/navItems";

const Navbar = () => {
  return (
    <div className="navbar bg-[#541554] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost text-xl normal-case">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaeUSn6az3w_sR784pPCdxQGG7R198zd6Tw&usqp=CAU"
              alt="logo"
              className="w-12 rounded-full bg-white p-2"
            />
            <div className="pl-2 hidden md:flex">Team Sync</div>
          </div>
          <ul
            tabIndex={0}
            className=" text-slate-900 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <details>
                <summary className="text-xl p-2 hover:bg-slate-100">
                  Products
                </summary>
                <ul className="">
                  {innerLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-md p-2 text-slate-700 hover:bg-slate-100"
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            {navItems.map((navItem, index) => (
              <li className="text-xl p-4 hover:bg-slate-100" key={index}>
                {navItem.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex -ml-48 ">
        <ul className="menu menu-horizontal">
          <li tabIndex={0}>
            <details>
              <summary className="text-md mt-2 hover:text-white">
                Products
              </summary>
              <ul className="">
                {innerLinks.map((link, index) => (
                  <li key={index} className="text-md p-2 text-slate-700 ">
                    {link.name}
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {navItems.map((navItem, index) => (
            <li className="text-md p-4 cursor-pointer" key={index}>
              {navItem.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-5 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 hidden md:flex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <div className="btn btn-ghost normal-case text-md">Sign In</div>
          <div className="p-2 rounded-xl text-sm border-2 hidden md:flex border-white">
            Talk To Sales
          </div>
          <div className="text-slate-900 hidden md:flex px-4 py-2 rounded-xl text-sm bg-white">
            Try For Free
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

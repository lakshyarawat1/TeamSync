const Sidebar = () => {
  return (
    <>
          <div className="dropdown dropdown-bottom">
              <label tabIndex={0} className="btn m-5">
                  <div className="text-xl normal-case">TeamSync &#x1F893;</div>
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box ">
                  <li>Item 1</li>
              </ul>
      </div>
    </>
  );
};

export default Sidebar;

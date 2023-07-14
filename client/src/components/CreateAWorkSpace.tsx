const CreateAWorkSpace = () => {
  return (
    <div className="bg-[#f9f6f1]">
      <div className="text-center w-full">
        <img
          src="/slack_logo.svg"
          className="mx-auto w-32 h-32 rounded-full"
          alt="logo"
        />
        <div className="bg-white md:px-16 px-8 w-fit mx-auto -mt-5 rounded-full text-slate-600 text-sm">
          Confirmed as __EMAIL__{" "}
          <button className="btn btn-link normal-case text-inherit">
            Change
          </button>
        </div>
      </div>
      <div className="flex md:mx-36 mx-16  py-10 gap-16">
        <div className="flex-1 w-1/2">
          <div className="text-4xl font-bold text-black">
            Create a new TeamSync Workspace
          </div>
          <div className="text-black mt-10">
            TeamSync gives your team a home, a place where they can talk and
            work together. To create a new workspace, click on the button below.
          </div>
          <button className="btn btn-block bg-primary mt-5 text-white">
            Create a workspace
          </button>
          <div className="mt-4 text-xs">
            By continuing, you're agreeing to our main services agreement, user
            terms of service, privacy policy, cookie policy and Slack
            supplemental terms.
          </div>
        </div>
        <div className="w-1/2 hidden md:flex">
          <img src="work.svg" className="w-2/3 mx-auto" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default CreateAWorkSpace;

import { FcGoogle } from 'react-icons/fc'

const Hero = () => {
  return (
    <div className="flex bg-primary">
      <div className="mx-14 my-10 md:w-1/2">
        <div className="md:text-6xl text-4xl text-white font-bold">
          Made For People
          <div className="text-yellow-300 mt-5">Built For Productivity.</div>
        </div>
        <div className="text-white mt-5 w-3/4">
          Connect the right people, find anything that you need and automate the
          rest. That’s work in Slack, your productivity platform.
              </div>
              <div>
                  <button className="bg-white flex gap-5 items-center p-2 rounded-lg hover:bg-slate-100 mt-5"><FcGoogle className="md:text-xl text-4xl" />Sign In With Google</button>
              </div>
      </div>
      <div className="flex-2 w-1/3">
        <img
          src="https://media.istockphoto.com/id/1179188076/photo/website-design-developing-programming-and-coding-technologies.jpg?s=1024x1024&w=is&k=20&c=TeMzQ3OGkEyseuJp_24hsArhoHdVfRkculd3i9TH8mY="
          alt="wall"
          className="rounded-xl hidden md:flex"
        />
      </div>
    </div>
  );
};

export default Hero;

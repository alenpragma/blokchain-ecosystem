import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-[500px] mx-auto flex justify-center items-center h-[80vh]">
      <div>
        <img
          className="w-full"
          src="https://i.ibb.co/wgZqMwG/error.jpg"
          alt=""
        />
        <div className="w-[300px] mx-auto bg-[#458DF3] rounded-md mt-5 h-10">
          <Link
            to="/dashboard"
            className=" text-white text-center flex items-center justify-center h-full"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

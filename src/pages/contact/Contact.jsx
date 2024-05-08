import { useForm } from "react-hook-form";
import Container from "../../components/shared/Container";
import contact from "../../assets/image/contact.png";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {};
  return (
    <div className="bg-[#e3f3ff] pt-[100px] pb-5 ">
      <Container>
        <div className="text-center  mb-2">
          <h3 className="md:text-[64px] text-[44px] font-bold text-[#323232]">
            Contact us
          </h3>
        </div>
        <div className="flex justify-between items-center gap-5 ">
          <div className="flex-1 md:block hidden">
            <img className="w-full" src={contact} alt="image" />
          </div>
          <div className=" mx-auto bg-[#ffffff48]  rounded shadow-lg p-5 flex-1 h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="font-semibold">
                  name
                </label>
                <input
                  type="text"
                  className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                  placeholder="name"
                  id="title"
                  {...register("title")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="font-semibold">
                  email
                </label>
                <input
                  type="text"
                  className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                  placeholder="email"
                  id="title"
                  {...register("title")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="font-semibold">
                  message
                </label>
                <textarea
                placeholder="Write your text"
                  className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-500 px-8 py-2 text-[#fff] font-semibold rounded-md"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

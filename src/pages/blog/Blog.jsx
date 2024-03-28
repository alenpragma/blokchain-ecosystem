import { useForm } from "react-hook-form";
import Container from "../../components/shared/Container";

const Blog = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    fetch(
      "https://biz-server-git-main-remontripuras-projects.vercel.app/news",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Added Successfully");
      });

  return (
    <Container>
      <div className="max-w-3xl mx-auto border border-slate-300 rounded-lg p-8 my-20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-semibold">
              Image
            </label>
            <input
              type="text"
              className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              placeholder="Image"
              id="image"
              {...register("img", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              type="text"
              className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              placeholder="Blog Title"
              id="title"
              {...register("title", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="title" className="font-semibold">
              blog
            </label>
            <textarea
              name=""
              cols=""
              rows=""
              className="w-full h-[200px] px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              placeholder="text"
              id="blog"
              {...register("news", { required: true })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-700 rounded-md text-[#fff] font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Blog;

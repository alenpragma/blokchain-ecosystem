import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const EditBlog = () => {
  const { title1, title2, title3, news1, news2, news3, _id } = useLoaderData();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    fetch(`https://biz-server-git-main-remontripuras-projects.vercel.app/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            alert('Update Successfuly')
        })
  };

  return (
    <div className="w-full border border-slate-300 rounded-lg p-8 mt-3 ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="">
          <div>
            <label htmlFor="title" className="font-semibold">
              Title 1
            </label>
            <input
              type="text"
              className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              defaultValue={title1}
              id="title1"
              {...register("title1")}
            />
          </div>
          <div>
            <label htmlFor="title" className="font-semibold">
              blog 1
            </label>
            <textarea
              name=""
              cols=""
              rows=""
              className="w-full h-[100px] px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              defaultValue={news1}
              id="news1"
              {...register("news1")}
            ></textarea>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="title" className="font-semibold">
              Title 2
            </label>
            <input
              type="text"
              className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              defaultValue={title2}
              id="title2"
              {...register("title2")}
            />
          </div>

          <div>
            <label htmlFor="title" className="font-semibold">
              blog 2
            </label>
            <textarea
              name=""
              cols=""
              rows=""
              className="w-full h-[100px] px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              defaultValue={news2}
              id="news2"
              {...register("news2")}
            ></textarea>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="title" className="font-semibold">
              Title 3
            </label>
            <input
              type="text"
              className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              defaultValue={title3}
              id="title3"
              {...register("title3")}
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
              className="w-full h-[100px] px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              defaultValue={news3}
              id="news3"
              {...register("news3")}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-700 rounded-md text-[#fff] font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBlog;

import { useForm } from "react-hook-form";
import Container from "../../components/shared/Container";
import Swal from "sweetalert2";

const Blog = () => {
  const api_key = "d9fbec5bc5650a087316215838a6a574";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const imgBBResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${api_key}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!imgBBResponse.ok) {
        throw new Error("Failed to upload image to imgBB");
      }

      const imgBBData = await imgBBResponse.json();
      const imageUrl = imgBBData.data.url;

      const formDataWithImage = { ...data, imageUrl };
      const mongoResponse = await fetch(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/news",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataWithImage),
        }
      );

      if (!mongoResponse.ok) {
        throw new Error("Failed to save data");
      }

      Swal.fire({
        title: "Blog post successful",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Opps!",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };

  return (
    <Container>
      <div className="max-w-3xl mx-auto border border-slate-300 rounded-lg p-8 my-20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-semibold">
              Image
            </label>
            <input
              type="file"
              className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
              placeholder="Image"
              id="imageUrl"
              {...register("imageUrl", { required: true })}
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

// const api_key = "d9fbec5bc5650a087316215838a6a574";
// const {
//   register,
//   handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm();

// const onSubmit = (data) =>
//   fetch(
//     "https://biz-server-git-main-remontripuras-projects.vercel.app/news",
//     {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   )
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       // Handle successful response
//       Swal.fire({
//         title: "Blog post successful",
//         icon: "success",
//       });
//     })
//     .catch((error) => {
//       // Handle any errors that occurred during the fetch
//       console.error("Error:", error);
//       Swal.fire({
//         title: "Error",
//         text: "An error occurred while submitting the blog post.",
//         icon: "error",
//       });
//     });

import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const Blog = () => {


  const [firstValue, setFirstValue] = useState(() => EditorState.createEmpty());
  // const stepOne = draftToHtml(convertToRaw(firstValue.getCurrentContent()));



  // const description = stepOne;
  // console.log(description);
  const handleSave = async () => {
    const content = draftToHtml(convertToRaw(firstValue.getCurrentContent()));

    // Send content to your backend
    try {
      const response = await fetch('https://biz-server-git-main-remontripuras-projects.vercel.app/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      
      if (response.ok) {
        // Content saved successfully
        console.log('Content saved to MongoDB');
      } else {
        // Handle error
        console.error('Failed to save content:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };


  return (
    <div>
      <div className="my-10 col-lg-12 col-md-12">
        <p className="mb-1 text-black ">Product Description </p>
        <Editor
          editorState={firstValue}
          onEditorStateChange={setFirstValue}
          required={true}
          wrapperClassName="wrapper-class"

          toolbarClassName="toolbar-class"
          editorClassName="editor-class"
          toolbar={{

            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'remove', 'history'],
            image: {
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: undefined,
              previewImage: true,
              defaultSize: {
                height: "auto",
                width: "auto",
              },
              fontSize: { className: 'demo-option-custom-medium' },
              fontFamily: {
                options: [
                  "Arial",
                  "sans-serif",
                  "Georgia",
                  "Impact",
                  "Tahoma",
                  "Times New Roman",
                  "Verdana",
                ],
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
              },
            },
          }}
        />
      </div>
      <button className='bg-green-500 px-8 py-2 text-[#fff] font-semibold rounded-md' onClick={handleSave}>Save to MongoDB</button>
    </div>
  );
};

export default Blog;






































// import { useForm } from "react-hook-form";
// import Container from "../../components/shared/Container";
// import Swal from "sweetalert2";

// const Blog = () => {
//   const api_key = "d9fbec5bc5650a087316215838a6a574";
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     console.log(data.imageUrl);
//     const formData = new FormData();
//     formData.append("image", data.imageUrl[0]);

//     try {
//       const imgBBResponse = await fetch(
//         `https://api.imgbb.com/1/upload?key=${api_key}`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (!imgBBResponse.ok) {
//         throw new Error("Failed to upload image to imgBB");
//       }

//       const imgBBData = await imgBBResponse.json();
//       const imageUrl = imgBBData.data.url;

//       const formDataWithImage = { ...data, imageUrl };
    
//       const mongoResponse = await fetch("https://biz-server-git-main-remontripuras-projects.vercel.app/news", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formDataWithImage),
//       });

//       if (!mongoResponse.ok) {
//         throw new Error("Failed to save data");
//       }

//       Swal.fire({
//         title: "Blog post successful",
//         icon: "success",
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       Swal.fire({
//         title: "Opps!",
//         text: "Something went wrong.",
//         icon: "error",
//       });
//     }
//   };

//   return (
//     <Container>
//       <div className="w-full border border-slate-300 rounded-lg p-8 mt-3 ">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           <div className="flex flex-col gap-2">
//             <label htmlFor="title" className="font-semibold">
//               Image
//             </label>
//             <input
//               type="file"
//               className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
//               placeholder="Image"
//               id="imageUrl"
//               {...register("imageUrl")}
//             />
//           </div>
//           <div className="">
//             <div>
//               <label htmlFor="title" className="font-semibold">
//                 Title 1
//               </label>
//               <input
//                 type="text"
//                 className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
//                 placeholder="Blog Title"
//                 id="title1"
//                 {...register("title1")}
//               />
//             </div>
//             <div>
//               <label htmlFor="title" className="font-semibold">
//                 blog 1
//               </label>
//               <textarea
//                 name=""
//                 cols=""
//                 rows=""
//                 className="w-full h-[100px] px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
//                 placeholder="text"
//                 id="news1"
//                 {...register("news1")}
//               ></textarea>
//             </div>
//           </div>

//           <div>
//             <div>
//               <label htmlFor="title" className="font-semibold">
//                 Title 2
//               </label>
//               <input
//                 type="text"
//                 className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
//                 placeholder="Blog Title"
//                 id="title2"
//                 {...register("title2")}
//               />
//             </div>

//             <div>
//               <label htmlFor="title" className="font-semibold">
//                 blog 2
//               </label>
//               <textarea
//                 name=""
//                 cols=""
//                 rows=""
//                 className="w-full h-[100px] px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
//                 placeholder="text"
//                 id="news2"
//                 {...register("news2")}
//               ></textarea>
//             </div>
//           </div>
//           <div>
//             <div>
//               <label htmlFor="title" className="font-semibold">
//                 Title 3
//               </label>
//               <input
//                 type="text"
//                 className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
//                 placeholder="Blog Title"
//                 id="title3"
//                 {...register("title3")}
//               />
//             </div>

//             <div>
//               <label htmlFor="title" className="font-semibold">
//                 blog
//               </label>
//               <textarea
//                 name=""
//                 cols=""
//                 rows=""
//                 className="w-full h-[100px] px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
//                 placeholder="text"
//                 id="news3"
//                 {...register("news3")}
//               ></textarea>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-700 rounded-md text-[#fff] font-bold"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </Container>
//   );
// };

// export default Blog;

// // const api_key = "d9fbec5bc5650a087316215838a6a574";
// // const {
// //   register,
// //   handleSubmit,
// //   watch,
// //   formState: { errors },
// // } = useForm();

// // const onSubmit = (data) =>
// //   fetch(
// //     "https://biz-server-git-main-remontripuras-projects.vercel.app/news",
// //     {
// //       method: "POST",
// //       headers: {
// //         "content-type": "application/json",
// //       },
// //       body: JSON.stringify(data),
// //     }
// //   )
// //     .then((res) => {
// //       if (!res.ok) {
// //         throw new Error("Network response was not ok");
// //       }
// //       return res.json();
// //     })
// //     .then((data) => {
// //       // Handle successful response
// //       Swal.fire({
// //         title: "Blog post successful",
// //         icon: "success",
// //       });
// //     })
// //     .catch((error) => {
// //       // Handle any errors that occurred during the fetch
// //       console.error("Error:", error);
// //       Swal.fire({
// //         title: "Error",
// //         text: "An error occurred while submitting the blog post.",
// //         icon: "error",
// //       });
// //     });

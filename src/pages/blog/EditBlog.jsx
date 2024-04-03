// import { useState } from "react";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { useLoaderData } from "react-router-dom";

// const EditBlog = () => {
//   const [firstValue, setFirstValue] = useState(() => EditorState.createEmpty());
//   const [img, setImg] = useState(null);
//   const api_key = "d9fbec5bc5650a087316215838a6a574";

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = async (data) => {
//     setImg(data);
//   };

//   const handleSave = async () => {
//     const content = draftToHtml(convertToRaw(firstValue.getCurrentContent()));

//     const formData = new FormData();
//     formData.append("image", img.imageUrl[0]);

//     const imgBBResponse = await fetch(
//       `https://api.imgbb.com/1/upload?key=${api_key}`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     if (!imgBBResponse.ok) {
//       throw new Error("Failed to upload image to imgBB");
//     }

//     const imgBBData = await imgBBResponse.json();
//     const imageUrl = imgBBData.data.url;

//     try {
//       const response = await fetch(
//         "https://biz-server-git-main-remontripuras-projects.vercel.app/news",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ content, imageUrl }),
//         }
//       );

//       if (response.ok) {
//         Swal.fire({
//           title: "Blog post successful",
//           icon: "success",
//         });
//       } else {
//         console.error("Failed to save content:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error saving content:", error);
//     }
//   };

//   const loader = useLoaderData();

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//         <div className="flex flex-col gap-2">
//           <label htmlFor="title" className="font-semibold">
//             Image
//           </label>
//           <input
//             type="file"
//             className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
//             placeholder="Image"
//             id="imageUrl"
//             {...register("imageUrl")}
//           />
//         </div>

//         <div className="my-10 col-lg-12 col-md-12">
//           <Editor
//           defaultValue="<p>This is some initial HTML content.</p>"
//             editorState={firstValue}
//             onEditorStateChange={setFirstValue}
//             required={true}
//             wrapperClassName="wrapper-class"
//             toolbarClassName="toolbar-class"
//             editorClassName="editor-class"
//             toolbar={{
//               options: [
//                 "inline",
//                 "blockType",
//                 "fontSize",
//                 "fontFamily",
//                 "list",
//                 "textAlign",
//                 "colorPicker",
//                 "link",
//                 "embedded",
//                 "emoji",
//                 "remove",
//                 "history",
//               ],
//               image: {
//                 urlEnabled: true,
//                 uploadEnabled: true,
//                 alignmentEnabled: true,
//                 uploadCallback: undefined,
//                 previewImage: true,
//                 defaultSize: {
//                   height: "auto",
//                   width: "auto",
//                 },
//                 fontSize: { className: "demo-option-custom-medium" },
//                 fontFamily: {
//                   options: [
//                     "Arial",
//                     "sans-serif",
//                     "Georgia",
//                     "Impact",
//                     "Tahoma",
//                     "Times New Roman",
//                     "Verdana",
//                   ],
//                   className: undefined,
//                   component: undefined,
//                   dropdownClassName: undefined,
//                 },
//               },
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-green-500 px-8 py-2 text-[#fff] font-semibold rounded-md"
//           onClick={handleSave}
//         >
//           Save blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditBlog;

import { useState } from "react";
import { EditorState, convertFromHTML, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const EditBlog = () => {
  const {content, _id} = useLoaderData();

  const initialContent = content;
  const blocksFromHTML = convertFromHTML(initialContent);
  const contentState = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  const [firstValue, setFirstValue] = useState(() =>
    EditorState.createWithContent(contentState)
  );
  const [img, setImg] = useState(null);
  const api_key = "d9fbec5bc5650a087316215838a6a574";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setImg(data);
  };

  const handleSave = async () => {
    const content = draftToHtml(convertToRaw(firstValue.getCurrentContent()));
    try {
      const response = await fetch(
        `http://localhost:5000/news/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content }),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Update successful",
          icon: "success",
        });
      } else {
        console.error("Failed to save content:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="my-10 col-lg-12 col-md-12">
          <Editor
            editorState={firstValue}
            onEditorStateChange={setFirstValue}
            required={true}
            wrapperClassName="wrapper-class"
            toolbarClassName="toolbar-class"
            editorClassName="editor-class"
            toolbar={{
              options: [
                "inline",
                "blockType",
                "fontSize",
                "fontFamily",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "embedded",
                "emoji",
                "remove",
                "history",
              ],
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
                fontSize: { className: "demo-option-custom-medium" },
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
        <button
          type="submit"
          className="bg-green-500 px-8 py-2 text-[#fff] font-semibold rounded-md"
          onClick={handleSave}
        >
          Save blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;

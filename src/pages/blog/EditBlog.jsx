import { useEffect, useState } from "react";
import {
  EditorState,
  convertFromHTML,
  ContentState,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const EditBlog = () => {
  const { content, _id, title, category } = useLoaderData();

  const [categoryItem, setCategoryItem] = useState([]);

  const initialContent = content;
  const blocksFromHTML = convertFromHTML(initialContent);
  const contentState = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  const [firstValue, setFirstValue] = useState(() =>
    EditorState.createWithContent(contentState)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const category = data.category;
    const title = data.title;
    const content = draftToHtml(convertToRaw(firstValue.getCurrentContent()));
    try {
      const response = await fetch(
        `https://biz-server-git-main-remontripuras-projects.vercel.app/news/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content, category, title }),
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

  useEffect(() => {
    fetch(
      "https://biz-server-git-main-remontripuras-projects.vercel.app/category"
    )
      .then((res) => res.json())
      .then((data) => setCategoryItem(data));
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            Blog title
          </label>
          <input
            type="text"
            className="w-full  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
            defaultValue={title}
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            Category : {category}
          </label>
          <select
            {...register("category")}
            className="w-1/2  px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
          >
            {" "}
            {categoryItem?.map((categoryData) => (
              <option key={categoryData._id} value={categoryData.categoryName}>
                {categoryData.categoryName}
              </option>
            ))}
          </select>
        </div>

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
        >
          Save blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;

import { useLoaderData } from "react-router-dom";

const EditBlog = () => {
    const loader = useLoaderData();
    console.log(loader);
  return (
    <div>
      this is EditBlog page 
    </div>
  );
};

export default EditBlog;
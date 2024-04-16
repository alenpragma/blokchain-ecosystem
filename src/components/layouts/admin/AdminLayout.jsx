// import { Outlet } from "react-router-dom";
// import AdminSidebar from "./AdminSidebar";
// import Container from "../../shared/Container";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const AdminLayout = () => {
//   const [toggle, setToggle] = useState(false);
//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   const { register, handleSubmit } = useForm();

//   const onSubmit = async (data) => {};

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];
// const today = new Date()
// const todayDate = today.getDate();
// const todayMonth = today.getMonth();
// const monthName = monthNames[todayMonth]
// const todayYear = today.getFullYear();

//   return (
//     <Container>
//       <div className="">
//         <div onClick={handleToggle} className="md:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-8 mb-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//         </div>
//         <div className=" grid grid-cols-12 gap-3 relative">
//           <div
//             className={`h-screen overflow-y-auto md:sticky absolute z-20 -top-12 md:block ${
//               toggle ? "col-span-3 bg-[#fff] shadow-lg" : "col-span-3 hidden"
//             }`}
//           >
//             <AdminSidebar setToggle={setToggle} toggle={toggle} />
//           </div>
//           <div className="md:col-span-9 col-span-12 mx-2">
// <div className="py-3 shadow my-2 rounded sticky right-0 left-0">
//   <form
//     onSubmit={handleSubmit(onSubmit)}
//     className="space-y-5 mx-2"
//   >
//     <div className="flex justify-between items-center">
//       <div className="flex-1 relative">
//         <input
//           type="text"
//           className="w-full  px-2 md:py-2 py-1  rounded-full border border-slate-300  focus:outline focus:outline-slate-400"
//           placeholder="search-blog"
//           id="title"
//           {...register("title")}
//         />
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-6 h-6 absolute top-0 right-3 bottom-0 my-auto cursor-pointer"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//           />
//         </svg>
//       </div>
//       <div className="flex-1 md:text-center text-end">
//         <p className="font-semibold">{`${todayDate} ${monthName} ${todayYear}`}</p>
//       </div>
//       <div className="flex-1 flex justify-end">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
//           />
//         </svg>
//       </div>
//     </div>
//   </form>
// </div>
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default AdminLayout;

import { useState } from "react";
import Container from "../../shared/Container";
import { Outlet } from "react-router-dom";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

import AdminSidebar from "./AdminSidebar";
import { useForm } from "react-hook-form";
const AdminLayout = () => {
  const [toggle, setToggle] = useState(false);
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const monthName = monthNames[todayMonth];
  const todayYear = today.getFullYear();

    const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {};
  return (
    <div className="max-w-[1400px] mx-auto relative">
      <div className="absolute">
        <h3 className="md:hidden block">open</h3>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <AdminSidebar setToggle={setToggle} toggle={toggle} />
        </div>
        <div className="col-span-9">
          <div className="py-3 shadow my-2 rounded sticky right-0 left-0 dashboard-admin">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mx-2">
              <div className="flex justify-between items-center">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    className="w-full  px-2 md:py-2 py-1  rounded-full border border-slate-300  focus:outline focus:outline-slate-400"
                    placeholder="search-blog"
                    id="title"
                    {...register("title")}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-0 right-3 bottom-0 my-auto cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <div className="flex-1 md:text-center text-end">
                  <p className="font-semibold">{`${todayDate} ${monthName} ${todayYear}`}</p>
                </div>
                <div className="flex-1 flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 my-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                  <button className="bg-red-500 px-6 py-2 rounded font-semibold text-[#fff] ml-5">Logout</button>
                </div>
              </div>
            </form>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

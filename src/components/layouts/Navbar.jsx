import React, { useEffect, useRef, useState } from "react";
import Container from "../shared/Container";
import icon from "../../assets/icon/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMdMenu, IoIosClose } from "react-icons/io";

const NavItem = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } `
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/Developers"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        }  md:btn`
      }
    >
      Developers
    </NavLink>
    <NavLink
      to="/ecosystem"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } md:btn`
      }
    >
      Ecosystem
    </NavLink>
    <NavLink
      to="/commiunity"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } md:btn`
      }
    >
      Community
    </NavLink>
    <NavLink
      to="/news-feed"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } md:btn`
      }
    >
      NewsFeed
    </NavLink>
    <NavLink
      to="/free-biz-home"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } md:btn`
      }
    >
      Free-Biz
    </NavLink>
  </>
);

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [menu]);
  const handleToggleMenu = () => {
    setMenu(!menu);
  };
  // useEffect(() => {
  //   const handlar = () => {
  //     setMenu(false);
  //   };
  //   document.addEventListener("mousedown", handlar);
  // });

  // const ref = useRef();

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside, true);
  // }, []);
  // const handleClickOutside = (e) => {
  //   if (ref.current.contains(e.target)) {
  //     console.log("click onside");
  //   } else {
  //     console.log("click outside");
  //   }
  // };

  return (
    <div className="w-full bg-[#2F76DE]">
      <Container>
        <nav className="w-full flex justify-between items-center py-4 relative px-5">
          <div>
            <Link to="/">
              <img className="w-32" src={icon} alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex hidden">
            <div className="flex gap-5 text-[16px]">{NavItem}</div>
          </div>
          <div className="">
            <Link>
              <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg md:block hidden">
                Start Building
              </button>
            </Link>
            <button onClick={handleToggleMenu} className="flex md:hidden">
              {menu ? "" : <IoMdMenu className="text-[40px] text-[#fff]" />}
            </button>
          </div>
          <div
            className={`${
              menu
                ? "transition duration-300 ease-in-out transform translate-x-0  md:hidden"
                : "transition duration-300 ease-in-out transform translate-x-full w-full overflow-auto"
            } fixed top-0 right-0 w-full h-full flex flex-col items-end  z-[999]`}
          >
            <div  className="w-1/2 bg-[#a2a5b9]  h-[100vh]">
              <div className="flex justify-end">
                <button onClick={handleToggleMenu} className="flex md:hidden">
                  {menu ? (
                    <IoIosClose className="text-[40px] text-[#fff]" />
                  ) : (
                    ""
                  )}
                </button>
              </div>
              <nav className="flex flex-col gap-5 text-[#FFF] text-[16px] text-center">
                {NavItem}
              </nav>
              <div className="my-4 flex justify-center">
                <Link to="/dashboard/dashboard-home">
                  <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
                    Start Building
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;

{
  /* <div className="w-full bg-[#2F76DE]">
<Container>
  <nav className="w-full flex justify-between items-center py-4 relative px-5">
    <div>
      <Link to="/">
        <img className="w-32" src={icon} alt="" />
      </Link>
    </div>
    <div className="lg:flex md:flex hidden">
      <div className="flex gap-5 text-[#FFF] text-[16px] hover:text-[#F3FAFF]">
        {NavItem}
      </div>
    </div>
    <div className="">
      <Link to="/dashboard/dashboard-home">
        <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg md:block hidden">
          Start Building
        </button>
      </Link>
      <button onClick={handleToggleMenu} className="flex md:hidden">
        {menu ? "" : <IoMdMenu className="text-[40px] text-[#fff]" />}
      </button>
    </div>
      <div
        className={`${
          menu
            ? "transition duration-300 ease-in-out transform translate-x-0"
            : "transition duration-300 ease-in-out transform translate-x-full w-full"
        } fixed top-0 right-0 w-full h-full p-4 flex flex-col items-center bg-[#2F76DE] z-[999]`}
      >
        <div className="w-full">
          <div className="flex justify-end">
<button onClick={handleToggleMenu} className="flex md:hidden">
  {menu ? (
    <IoIosClose className="text-[40px] text-[#fff]" />
  ) : (
    <IoMdMenu className="text-[40px] text-[#fff]" />
  )}
</button>
          </div>
          <ul className="flex flex-col gap-5 text-[#FFF] text-[16px] text-center">
            {NavItem}
          </ul>
        </div>
<div className="my-4">
  <Link to="/dashboard/dashboard-home">
    <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
      Start Building
    </button>
  </Link>
</div>
      </div>
  </nav>
</Container>
</div> */
}

// import { Link, NavLink } from "react-router-dom";

// import logo from "../../assets/icon/logo.png";
// import { useEffect, useState } from "react";
// import Container from "../shared/Container";
// import { IoMdMenu, IoIosClose } from "react-icons/io";

// const NavItem = (
//   <>
//     <NavLink
//       to="/"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#353535] font-bold hover:text-[#353535] "
//             : "hover:text-slate-300"
//         } `
//       }
//     >
//       Home
//     </NavLink>
//     <NavLink
//       to="/Developers"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#353535] font-bold hover:text-[#353535] "
//             : "hover:text-slate-300"
//         } `
//       }
//     >
//       Developers
//     </NavLink>
//     <NavLink
//       to="/ecosystem"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#353535] font-bold hover:text-[#353535] "
//             : "hover:text-slate-300"
//         } `
//       }
//     >
//       Ecosystem
//     </NavLink>
//     <NavLink
//       to="/commiunity"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#353535] font-bold hover:text-[#353535] "
//             : "hover:text-slate-300"
//         } `
//       }
//     >
//       Community
//     </NavLink>
//     <NavLink
//       to="/news-feed"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#353535] font-bold hover:text-[#353535] "
//             : "hover:text-slate-300"
//         } `
//       }
//     >
//       NewsFeed
//     </NavLink>
//     <NavLink
//       to="/free-biz-home"
//       className={({ isActive }) =>
//         `${
//           isActive
//             ? "text-[#353535] font-bold hover:text-[#353535] "
//             : "hover:text-slate-300"
//         } `
//       }
//     >
//       Free-Biz
//     </NavLink>
//   </>
// );
// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menu, setMenu] = useState(false);
//   const handleToggleMenu = () => {
//     setMenu((prev) => !prev);
//   };
//   console.log(isScrolled);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div
//       className={`${
//         isScrolled
//           ? "bg-[#EA9B00] duration-500 py-1"
//           : "transition-all duration-500 py-[10px] bg-green-500"
//       } w-full fixed top-0 left-0 z-10`}
//     >
//       <Container className=" ">
//         <div className="flex justify-between items-center relative">
//           <img className="" src={logo} alt="" />
//           <div className="md:static absolute bg-red-500 md:bg-green-500 -top-5 right-0 md:w-fit w-1/2">
//             <nav className="md:flex hidden items-center space-x-5">
//               {NavItem}
//             </nav>
//             {/* <nav
//               className={` space-y-5 my-5 h-screen ${
//                 menu == true ? "flex flex-col items-center w-full" : "hidden"
//               }`}
//             >
//               <div className="w-full flex justify-end">
//                 <button onClick={handleToggleMenu} className="">
//                   {menu == false ? (
//                     ""
//                   ) : (
//                     <IoIosClose className="text-[40px] text-[#fff]" />
//                   )}
//                 </button>
//               </div>
//               {NavItem}
//             </nav> */}
//           </div>
//           <div className="">
//             <div className="hidden md:block">
//               <Link to="/dashboard/dashboard-home">
//                 <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
//                   Start Building
//                 </button>
//               </Link>
//             </div>
//             <div>
//               <button onClick={handleToggleMenu} className="flex md:hidden">
//                 {menu ? "" : <IoMdMenu className="text-[40px] text-[#fff]" />}
//               </button>
//             </div>
//           </div>
//         </div>
//         <nav
//               className={` space-y-5 my-5 h-screen ${
//                 menu == true ? "flex flex-col items-center w-full" : "hidden"
//               }`}
//             >
//               <div className="w-full flex justify-end">
//                 <button onClick={handleToggleMenu} className="">
//                   {menu == false ? (
//                     ""
//                   ) : (
//                     <IoIosClose className="text-[40px] text-[#fff]" />
//                   )}
//                 </button>
//               </div>
//               {NavItem}
//             </nav>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;

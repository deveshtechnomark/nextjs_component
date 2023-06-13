import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Nav({ show }) {
  const inactiveLink = "flex gap-1 p-2 px-5";
  const activeLink =
    inactiveLink + " bg-white text-[#02B89D] rounded-s-lg px-5 ";
  const inactiveIcon = "w-6 h-6";
  const activeIcon = inactiveIcon + " text-primary";
  const pathname = usePathname();

  return (
    <aside
      className={
        (show ? "left-0" : "-left-full") +
        "w-[20%] top-0 pl-7 pt-10 fixed bg-[#02B89D] text-white h-full md:static md:w-auto transition-all overflow-y-scroll"
      }
    >
      <div className="text-lg font-bold mb-2.5 ml-[-20px]">TechnoMark</div>
      <nav className="flex flex-col gap-2">
        <Link
          href={"/Accordion"}
          className={
            pathname.includes("/Accordion") ? activeLink : inactiveLink
          }
        >
          Accordion
        </Link>
        <Link
          href={"/Alert"}
          className={pathname.includes("/Alert") ? activeLink : inactiveLink}
        >
          Alert
        </Link>
        <Link
          href={"/Breadcrumb"}
          className={
            pathname.includes("/Breadcrumb") ? activeLink : inactiveLink
          }
        >
          Breadcrumb
        </Link>
        <Link
          href={"/Button"}
          className={pathname.includes("/Button") ? activeLink : inactiveLink}
        >
          Button
        </Link>
        <Link
          href={"/CheckBox"}
          className={pathname.includes("/CheckBox") ? activeLink : inactiveLink}
        >
          CheckBox
        </Link>
        <Link
          href={"/Close"}
          className={pathname.includes("/Close") ? activeLink : inactiveLink}
        >
          Close
        </Link>
        <Link
          href={"/Pagination"}
          className={
            pathname.includes("/Pagination") ? activeLink : inactiveLink
          }
        >
          Pagination
        </Link>
        <Link
          href={"/Radio"}
          className={pathname.includes("/Radio") ? activeLink : inactiveLink}
        >
          Radio
        </Link>
        <Link
          href={"/Select"}
          className={pathname.includes("/Select") ? activeLink : inactiveLink}
        >
          Select
        </Link>
        {/* <Link
          href={"/TextField"}
          className={
            pathname.includes("/TextField") ? activeLink : inactiveLink
          }
        >
          TextField
        </Link> */}
        <Link
          href={"/Toast"}
          className={pathname.includes("/Toast") ? activeLink : inactiveLink}
        >
          Toast
        </Link>
        <Link
          href={"/Tooltip"}
          className={pathname.includes("/Tooltip") ? activeLink : inactiveLink}
        >
          Tool Tip
        </Link>
        <Link
          href={"/Typography"}
          className={
            pathname.includes("/Typography") ? activeLink : inactiveLink
          }
        >
          Typography
        </Link>
      </nav>
    </aside>
  );
}

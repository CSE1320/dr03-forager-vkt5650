"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { FaHome, FaCamera } from "react-icons/fa";
import { TbMushroom } from "react-icons/tb";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname(); 

  if (pathname === "/filter" || pathname === "/photosearch") return null;

  return (
    <div className={styles.navbar}>

      {/* mushroom icon with active state */}
      <Link href="/mushroom?id=1">
        <TbMushroom className={`text-2xl ${pathname.startsWith("/mushroom") ? "text-[#B6EEA6]" : "text-white"}`} />
      </Link>

      {/* home icon with active state */}
      <div className="relative flex flex-col items-center">
        <Link href="/dashboard">
          <FaHome className={`text-3xl mb-1 ${pathname === "/dashboard" ? "text-[#B6EEA6]" : "text-white"}`} />
        </Link>
        <div className="w-20 h-1 bg-white rounded-full mt-2"></div> 
      </div>

      {/* camera icon */}
      <Link href="/photosearch">
        <FaCamera className={`text-2xl ${pathname === "/photosearch" ? "text-[#B6EEA6]" : "text-white"}`} />
      </Link>

    </div>
  );
}


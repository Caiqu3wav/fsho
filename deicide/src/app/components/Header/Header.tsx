import Image from "next/image"
import "./Header.css"
import fshoLogo from "../../../assets/img/fsho333logo.png"
import Heartagram from "../../../assets/img/pngwing.com.png"
import { FaUserAstronaut } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
    return(
        <header className="flex h-[80px] items-center justify-between">
  <div>
    <Image className="w-[150px] h-auto absolute left-2 top-[-99px]" src={fshoLogo} alt="" />
    <Image className="heartagram_logo w-[80px] absolute left-[50%] top-0" src={Heartagram} alt="" style={{ transform: 'translateX(-50%)' }} />
  </div>
  <Link href="/login"><button className="flex ml-auto mr-4">
    <FaUserAstronaut 
    className="w-10 h-6 border-solid border-2 rounded-lg mr-1"/>Fazer Login
    </button></Link>
</header>
    )
}
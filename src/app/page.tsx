import { faBell, faEllipsis, faEnvelope, faHouse, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex mx-32">
      <Header />
      <div className="main">
        {/* mapで投稿一覧を表示 */}
        <div className="border-solid border-black border-2 w-96">投稿➀</div>
      </div>
    </div>
  );
}

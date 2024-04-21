import { faBell, faEllipsis, faEnvelope, faHouse, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";


export default function Header () {
  return (
    <header className="w-64 border-slate-300 border-solid  border-r h-screen flex flex-column sticky top-0 ">
      <div className="sidebar-items">
        <div className="mt-6">
          {/* ロゴ画像 */}
          <Image
            src="https://placehold.jp/30/333333/ffffff/250x100.png?text=dummy"
            alt="dummy image"
            width={200}
            height={200}
          ></Image>
        </div>
        <Link
          href="/"
          className="flex items-center mt-5 cursor-pointer hover:bg-slate-200 duration-300 rounded-full py-3 px-4 w-fit"
        >
          <FontAwesomeIcon icon={faHouse} className="w-7 h-7 mr-4" />
          <span className="font-bold text-xl">ホーム</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-5 cursor-pointer hover:bg-slate-200 duration-300 rounded-full py-3 px-4 w-fit"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-7 h-7 mr-4" />
          <span className="text-xl">検索</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-5 cursor-pointer hover:bg-slate-200 duration-300 rounded-full py-3 px-4 w-fit"
        >
          <FontAwesomeIcon icon={faBell} className="w-7 h-7 mr-4" />
          <span className="text-xl">通知</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-5 cursor-pointer hover:bg-slate-200 duration-300 rounded-full py-3 px-4 w-fit"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7 mr-4" />
          <span className="text-xl">メッセージ</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-5 cursor-pointer hover:bg-slate-200 duration-300 rounded-full py-3 px-4 w-fit"
        >
          <FontAwesomeIcon icon={faUser} className="w-7 h-7 mr-4" />
          <span className="text-xl">プロフィール</span>
        </Link>
        <Link
          href="/"
          className="hover:bg-violet-600 duration-300 bg-violet-500 rounded-full px-20 py-3 inline-block mt-5"
        >
          <span className="text-white font-bold">投稿する</span>
        </Link>
        <div className="profile mt-12 flex hover:bg-slate-200 rounded-full py-3 px-5 duration-300 cursor-pointer">
          <Image
            src="https://placehold.jp/30/333333/ffffff/150x150.png?text=dummy"
            alt="profile-image"
            width={50}
            height={50}
            className="rounded-full"
          ></Image>
          <div className="ml-4">
            <div className="font-bold text-lg">dummy</div>
            <div className="text-sm">@address</div>
          </div>
          <FontAwesomeIcon icon={faEllipsis} className="w-4 ml-auto" />
        </div>
      </div>
    </header>
  );
}

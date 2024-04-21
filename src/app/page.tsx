import { faBell, faEllipsis, faEnvelope, faHouse, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex mx-32">
      <Header />
      <main className="flex flex-col w-1/2">
        <div className="flex items-center border px-4 py-8">
          <Image
            src="https://placehold.jp/30/333333/ffffff/150x150.png?text=dummy"
            alt="profile-image"
            width={50}
            height={50}
            className="rounded-full"
          ></Image>
          <form action="" className="flex w-full">
            <input
              type="text"
              placeholder="いまどうしてる？"
              className="text-xl ml-4 focus:outline-none"
            />
            <input
              type="submit"
              value="投稿する"
              className="cursor-pointer text-white font-bold bg-violet-500 hover:bg-violet-600 duration-300 rounded-full px-8 py-2 ml-auto"
            />
          </form>
        </div>
        {/* 投稿一覧表示 */}
        <div className="border h-32 hover:bg-zinc-50 duration-300">test</div>
        <div className="border h-32 hover:bg-zinc-50 duration-300">test</div>
        <div className="border h-32 hover:bg-zinc-50 duration-300">test</div>
        <div className="border h-32 hover:bg-zinc-50 duration-300">test</div>
        <div className="border h-32 hover:bg-zinc-50 duration-300">test</div>
        <div className="border h-32 hover:bg-zinc-50 duration-300">test</div>
        <div className="border h-32 hover:bg-zinc-50 duration-300">test</div>
        <div className="border h-32 hover:bg-zinc-50 duration-300">test</div>
        <div className="border h-32 hover:bg-zinc-50 duration-300">test</div>
        <div className="border h-32 hover:bg-zinc-50 duration-300">test</div>
        
      </main>
    </div>
  );
}

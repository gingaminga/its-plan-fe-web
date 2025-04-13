"use client";

import { Button } from "@/shared/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { CircleUserRound, Leaf, ListTodo, LogOut, Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Header() {
  // TODO: 로그인 여부에 따른 메뉴 아이콘 처리

  return (
    <header className="fixed top-0 z-10 h-14 w-full bg-white/60 shadow-xs backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-4">
        {/* 좌측 메뉴 */}
        <div className="flex w-1/3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-40">
              <DropdownMenuItem asChild>
                <Link href="/todo">
                  <ListTodo />
                  할일
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/setting">
                  <CircleUserRound />
                  설정
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut />
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* 중앙 로고 */}
        <div className="flex w-1/3 justify-center">
          <Button asChild className="text-lg font-bold" variant="ghost">
            <Link href="/">
              ITS PLAN
              <Leaf className="text-green-600" />
            </Link>
          </Button>
        </div>

        {/* 우측 short cut */}
        {/* TODO: 테마 기능 구현 */}
        <div className="flex w-1/3 justify-end">
          <Button variant="ghost">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </Button>
        </div>
      </div>
    </header>
  );
}

"use client";

import useTheme from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { CircleUserRound, Leaf, ListTodo, LogOut, Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { isDark, toggleHandler } = useTheme();

  return (
    <header className="fixed top-0 z-10 h-14 w-full shadow-xs backdrop-blur-2xl">
      <div className="flex h-full items-center justify-between px-4">
        {/* 좌측 메뉴 */}
        {/* TODO: 로그인 여부에 따른 메뉴 아이콘 처리 */}
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
        <div className="flex w-1/3 justify-end">
          <Button onClick={toggleHandler} variant="ghost">
            <Sun className={cn("transition-all", isDark && "scale-100 rotate-0", !isDark && "scale-0 rotate-90")} />
            <Moon
              className={cn("absolute transition-all", !isDark && "scale-100 rotate-0", isDark && "scale-0 -rotate-90")}
            />
          </Button>
        </div>
      </div>
    </header>
  );
}

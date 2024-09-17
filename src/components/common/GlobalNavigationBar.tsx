import Link from "next/link";

export default function GlobalNavigationBar() {
  return (
    <nav>
      {/* arrow 아이콘을 mouse hover 시에만 노출되도록 설정 */}
      {/* 모바일에서는 drop-down / pc에서는 menu */}
      <ul className="menu menu-horizontal gap-1 rounded-box p-2 max-sm:dropdown-content max-sm:menu-vertical max-sm:menu-sm max-sm:w-36 max-sm:gap-2 max-sm:bg-base-100 [&>li>details:hover>summary]:after:opacity-100 [&>li>details>summary]:after:opacity-0">
        <li>
          <details>
            <summary>할 일</summary>
            <ul className="bg-base-300 max-sm:bg-transparent max-sm:shadow-none">
              <li>
                <Link href="#1">오늘</Link>
              </li>
              <li>
                <Link href="#2">주별</Link>
              </li>
              <li>
                <Link href="#3">월별</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>루틴</summary>
            <ul className="bg-base-300 max-sm:bg-transparent max-sm:shadow-none">
              <li>
                <Link href="#4">전체</Link>
              </li>
              <li>
                <Link href="#5">추가</Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
}

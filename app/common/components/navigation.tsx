import { Link } from "react-router";
import { Search, Menu, UserIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "~/common/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu";

// bloomingbit.io 메뉴 구조를 참조한 네비게이션 메뉴
const menus = [
  { label: "뉴스", path: "/" },
  { label: "커뮤니티", path: "/community" },
  { label: "AI리포트", path: "/ai-report" },
  { label: "멤버십", path: "/membership" },
  { label: "리워드", path: "/reward" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 네비게이션 높이를 CSS 변수로 설정
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--navigation-height",
        `${height}px`
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex bg-white/50 flex-col backdrop-blur border-b border-gray-200 fixed top-0 left-0 right-0 z-100"
    >
      <div className="container w-full">
        {/* 상단 헤더: 검색과 햄버거/프로필 버튼 */}
        <Link to="/" className="flex items-center py-2">
          <img src="/logo.png" alt="로고" className="h-12 w-auto" />
        </Link>
        <div className="flex items-center justify-between h-12">
          {/* 메뉴 링크들 */}
          <div className="flex gap-6 h-16 items-center">
            {menus.map((menu) => (
              <Link
                key={menu.path}
                to={menu.path}
                className="text-md font-medium hover:text-gray-600 transition-colors"
              >
                {menu.label}
              </Link>
            ))}
          </div>
          {/* 오른쪽 메뉴 */}
          <div className="flex items-center gap-4">
            {/* 검색 아이콘 버튼 */}
            <button
              type="button"
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="검색"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            {/* 햄버거 메뉴와 프로필이 결합된 버튼 */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors relative"
                  aria-label="메뉴 및 프로필"
                >
                  {/* 햄버거 메뉴 아이콘 */}
                  <Menu className="w-5 h-5 text-gray-600" />

                  {/* 사용자 프로필 Avatar */}
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="" alt="사용자 프로필" />
                    <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                      <UserIcon className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuItem>로그아웃</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}

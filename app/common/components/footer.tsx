import { Link } from "react-router";

// bloomingbit.io 푸터 구조를 참조한 푸터 컴포넌트
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-gray-200">
      <div className="container mx-auto px-1 py-8">
        {/* 상단: 로고 및 주요 링크 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          {/* 로고 */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="비트스포 로고"
              className="h-10 w-auto"
              onError={(e) => {
                // 로고 이미지 로드 실패 시 대체 이미지 사용
                const target = e.target as HTMLImageElement;
                target.src = "/simbol.png";
              }}
            />
          </Link>

          {/* 주요 메뉴 링크 */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              뉴스
            </Link>
            <Link
              to="/community"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              커뮤니티
            </Link>
            <Link
              to="/ai-report"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              AI리포트
            </Link>
            <Link
              to="/membership"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              멤버십
            </Link>
          </div>
        </div>

        {/* 중간: 회사 정보 및 정책 링크 */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* 왼쪽: 회사 정보 */}
            <div className="flex-1">
              <h3 className="sr-only">비트스포</h3>
              <div className="space-y-2 text-xs text-gray-600">
                {/* 첫 번째 줄: 공지사항, 기자소개, 인재채용, 커뮤니티 운영정책 */}
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/notice"
                    className="hover:text-gray-900 transition-colors"
                  >
                    공지사항
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    to="/reporters"
                    className="hover:text-gray-900 transition-colors"
                  >
                    기자소개
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    to="/careers"
                    className="hover:text-gray-900 transition-colors"
                  >
                    인재채용
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    to="/community-policy"
                    className="hover:text-gray-900 transition-colors"
                  >
                    커뮤니티 운영정책
                  </Link>
                </div>

                {/* 두 번째 줄: 이용약관, 개인정보처리방침, 윤리강령, 청소년보호정책 */}
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/terms"
                    className="hover:text-gray-900 transition-colors"
                  >
                    이용약관
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    to="/privacy"
                    className="hover:text-gray-900 transition-colors"
                  >
                    개인정보처리방침
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    to="/ethics"
                    className="hover:text-gray-900 transition-colors"
                  >
                    윤리강령
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    to="/youth-protection"
                    className="hover:text-gray-900 transition-colors"
                  >
                    청소년보호정책
                  </Link>
                </div>

                {/* 문의사항 이메일 */}
                <div className="pt-2">
                  <p className="text-gray-600">
                    문의사항{" "}
                    <a
                      href="mailto:help@bloomingbit.io"
                      className="text-gray-900 hover:text-primary transition-colors"
                    >
                      help@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 오른쪽: 소셜 미디어 및 추가 정보 */}
            <div className="flex flex-col items-start md:items-end gap-4">
              {/* 소셜 미디어 버튼들 */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 transition-colors text-xl"
                  aria-label="공유하기"
                  title="공유하기"
                >
                  📤
                </button>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 transition-colors text-xl"
                  aria-label="닫기"
                  title="닫기"
                >
                  ✕
                </button>
              </div>

              {/* 회사명 및 연도 */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>비트스포</span>
              </div>
            </div>
          </div>
        </div>

        {/* 하단: 저작권 정보 */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {currentYear} 비트스포. All rights reserved.</p>
            <p className="text-gray-400">
              본 사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

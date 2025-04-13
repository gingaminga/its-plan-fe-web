import Typography from "@/components/common/Typography";
import GoogleLogo from "@/components/icon/GoogleLogo";
import KakaoLogo from "@/components/icon/KakaoLogo";
import NaverLogo from "@/components/icon/NaverLogo";
import { Button } from "@/shared/ui/button";

export default function LoginForm() {
  return (
    <>
      <Typography.H4
        className="mb-6 text-center transition-all duration-200 max-sm:mb-3 max-sm:text-sm"
        text="로그인 & 회원가입"
      />
      <form className="flex flex-col gap-4 max-sm:hidden">
        <Button className="btn-kakao">
          <KakaoLogo />
          Login with Kakao
        </Button>
        <Button className="btn-naver">
          <NaverLogo />
          Login with Naver
        </Button>
        <Button className="btn-google">
          <GoogleLogo />
          Login with Google
        </Button>
      </form>
      <form className="hidden justify-center gap-4 max-sm:flex">
        <Button className="btn-kakao">
          <KakaoLogo />
        </Button>
        <Button className="btn-naver">
          <NaverLogo />
        </Button>
        <Button className="btn-google">
          <GoogleLogo />
        </Button>
      </form>
    </>
  );
}

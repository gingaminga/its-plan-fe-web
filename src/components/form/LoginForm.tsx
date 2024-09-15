import GoogleLogo from "@/assets/images/google-logo.svg";
import KakaoLogo from "@/assets/images/kakao-logo.svg";
import NaverLogo from "@/assets/images/naver-logo.svg";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4 max-sm:flex-row max-sm:justify-center">
      <button className="btn-kakao btn btn-block max-sm:btn-circle max-sm:hover:btn-circle" type="button">
        <KakaoLogo className="h-6 w-7" />
        <span className="max-sm:hidden">Login with Kakao</span>
      </button>
      <button className="btn-naver btn btn-block max-sm:btn-circle max-sm:hover:btn-circle" type="button">
        <NaverLogo className="h-6 w-5" />
        <span className="max-sm:hidden">Login with Naver</span>
      </button>
      <button className="btn-google btn btn-block max-sm:btn-circle max-sm:hover:btn-circle" type="button">
        <GoogleLogo className="h-6 w-8" />
        <span className="max-sm:hidden">Login with Google</span>
      </button>
    </form>
  );
}

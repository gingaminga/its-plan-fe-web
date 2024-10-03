import Title from "@/components/common/Title";
import LoginForm from "@/components/form/LoginForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-96 max-sm:w-48">
      <Title title="로그인&회원가입" />
      <LoginForm />
      <div className="divider mb-0" />
      <div className="w-full text-right">
        <Link href="/" className="text-sm text-base-content text-opacity-50 max-sm:text-xs">
          둘러보기
        </Link>
      </div>
    </div>
  );
}

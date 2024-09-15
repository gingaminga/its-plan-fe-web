import LoginForm from "@/components/form/LoginForm";
import Title from "@/components/common/Title";

export default function LoginPage() {
  return (
    <div className="w-96">
      <Title title="로그인&회원가입" />
      <LoginForm />
    </div>
  );
}

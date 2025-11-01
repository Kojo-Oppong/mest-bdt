import HankoProfile from "@/components/auth/HankoProfile";
import NoSSR from "@/components/core/NoSSR";

export default function Login() {
  return (
    <div className="h-full flex justify-center items-center">
      <NoSSR>
        <HankoProfile />
      </NoSSR>
    </div>
  );
}

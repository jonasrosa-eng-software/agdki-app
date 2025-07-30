import { Auth } from "@/class/auth";
import { MainClient } from "@/components/main/main";
import { HomeLayout } from "@/layouts/home-layout";

type HomeProps = {
  auth: Auth;
};

const HomeClient = (props: HomeProps) => {
  const { auth } = props;
  console.log("HomeClient", auth.user);
  return (
    <HomeLayout>
      <MainClient />
    </HomeLayout>
  );
};

export { HomeClient };

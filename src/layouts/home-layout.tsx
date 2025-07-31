import { ReactNode } from "react";
import { Header } from "@/components/header/header";

interface IHomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = (props: IHomeLayoutProps) => {
  const { children } = props;
  return (
    <div className="flex h-full w-screen flex-col justify-between">
      <Header />
      <main className="flex h-full  flex-col pl-4 pr-4">{children}</main>
      <footer className="fixed bottom-0 h-12 w-screen border-1 border-t-default-400 bg-default-200">
        footer
      </footer>
    </div>
  );
};

export { HomeLayout };

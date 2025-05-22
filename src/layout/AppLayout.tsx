import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen w-full">
        <Header />
        <Outlet />
      </main>
      {/* footer */}
      <div className="p-8 text-center bg-gray-800 text-white mt-10">
        made with ❤️ by Jagannath
      </div>
    </div>
  );
};

export default AppLayout;

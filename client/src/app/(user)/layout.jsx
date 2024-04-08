import CustomNavbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";

export default function UserLayout({ children }) {
  return (
    <div className="flex bg-[#F8F6F0] flex-col">
      <div className="flex">
        <CustomNavbar />
        <div className="w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

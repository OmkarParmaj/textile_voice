import Link from "next/link";
import { useRouter } from "next/router";
import { LayoutDashboard, Briefcase, FileText, Users, Package, LogOut } from "lucide-react";
import { useState } from "react";
import Home from "..";

const Sidebar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");

  return (

    
    <div className="d-flex flex-column vh-100 text-dark p-3 bg-light" style={{ width: "250px" }}> 
      <nav className="nav flex-column flex-grow-1">
        {[
          { href: "/dashboard", icon: <LayoutDashboard size={20} className="me-2" />, label: "Dashboard" },
          { href: "/job-listing", icon: <Briefcase size={20} className="me-2" />, label: "Job Listing" },
          { href: "/applications", icon: <FileText size={20} className="me-2" />, label: "Applications" },
          { href: "/candidates", icon: <Users size={20} className="me-2" />, label: "Candidates" },
          { href: "/packages", icon: <Package size={20} className="me-2" />, label: "Packages" },
        ].map((item) => (
          <button
            key={item.href}
            className={`btn w-100 text-start d-flex align-items-center ${activeLink === item.href ? "text-danger" : "text-dark"}`}
            onClick={() => {
              setActiveLink(item.href);
              router.push(item.href);
            }}
            style={{ border: "none", background: "none", padding: "10px 15px", cursor: "pointer" }}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto">
        <button className="btn btn-danger w-100 d-flex align-items-center">
          <LogOut size={20} className="me-2" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

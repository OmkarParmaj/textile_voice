import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row pt-2 pb-2 border-bottom ">
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-sm-12 col-md-12 ">
            <h2 className=""><span className="text-danger">Textile</span><span>Voice</span></h2>

          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-12 col-sm-12 col-md-12  d-flex justify-content-center align-items-center">
            <button className="btn ms-2">Home</button>
            <button className="btn ms-2">Article</button>
            <button className="btn ms-2">Blog</button>
            <button className="btn ms-2">Community</button>
            <button className="btn ms-2">Exhibitions</button>

          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-12 col-sm-12 col-md-12  d-flex justify-content-end  align-items-center">
          <button className="btn btn-danger ms-2">Sign Up</button>
          <button className="btn btn-danger ms-2 me-4">Sign In</button>

          </div>

        </div>

      </div>
    </>
  );
}

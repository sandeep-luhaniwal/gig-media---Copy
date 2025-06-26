import React from "react";
import footer_logo from "../../../public/images/svg/footer.svg";
import Image from "next/image";
import footerBottomImg from "../../../public/images/svg/footerBottomImg.png";
import Icons from "./Icons";
import Link from "next/link";

const Footer = () => {
  const fullyear = new Date().getFullYear();
  return (
    <footer className="relative bg-white text-black pt-10 pb-6">
      {/* Wave SVG background */}
      <div className="absolute bottom-0 left-0 w-full  ">
        <Image
          className="w-full h-auto"
          style={{ height: "160px" }}
          src={footerBottomImg}
          alt="footerBottomImg"
        />
      </div>

      <div className="max-w-[1310px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 py-10 align-middle md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Logo Column */}
          <div>
            <Image
              width={192}
              className=""
              src={footer_logo}
              alt="footer_logo"
            />
            <p className="pt-2 text-base font-medium">An AI Powered Media & Entertainment Solution</p>
          </div>

          {/* About Column */}
          <div className="pe-5 flex flex-col justify-between">
            <div>
              <h4 className="text-lg md:text-xl lg:text-[23px] font-semibold">
                We GigMedia
              </h4>
              <div className="flex flex-col gap-4 pt-4">
                <Link href="/artist-avenue" className="hover:text-red-600 max-w-max cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                  Artist Avenue
                </Link>
                <Link href="/creative-connect" className="hover:text-red-600 max-w-max cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                  Creative Connect
                </Link>
                <Link href="/media-hub" className="hover:text-red-600 max-w-max cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                  Media Hub
                </Link>
                <Link href="/latest-news" className="hover:text-red-600 max-w-max cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                  Latest News
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg md:text-xl lg:text-[23px] font-semibold">
                Get in Touch!
              </h4>
              <Link href="mailto:Enquiries@gigmediaapp.com" className="flex items-center hover:text-red-600 duration-300 max-w-[234px] text-base md:text-lg ff_n font-normal mb-0 gap-6 justify-between mt-2">
                Enquiries@gigmediaapp.com
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <div className="md:ps-8">
            <h4 className="text-lg md:text-xl lg:text-[23px] font-semibold">
              Important Links
            </h4>
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/" className="hover:text-red-600 max-w-max cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                Home
              </Link>
              <Link href="#about" className="hover:text-red-600 max-w-max cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                About
              </Link>
              <Link href="#faqs" className="hover:text-red-600 max-w-max cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                Help(FAQ)
              </Link>
              <Link href="/" className="hover:text-red-600 max-w-max cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                Contact
              </Link>
            </div>

          </div>
          <div className="text-sm">
            <h4 className="text-lg md:text-xl lg:text-[23px] font-semibold text-black">
              Get The App
            </h4>
            <div className="flex gap-4 mt-9">
              <Image
                width={96}
                height={96}
                src="/images/png/gig_qr.png"
                alt="QR Code"
                className="w-28 h-28"
              />
            </div>
          </div>
        </div>
        <div className=" border-gray-300 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p className="text-[15px] text-[#593939] ff_n font-normal mb-0 order-2 md:order-1">
            © Copyright {fullyear}{" "}
            <span className="text-black font-semibold"> HKI </span>
            <span className="text-[#E50A14] font-semibold"> Media</span> - All
            Rights Reserved.
          </p>
          <div className="flex gap-4 order-1 md:order-2 mb-4 md:mb-0 md:mt-0">
            <a
              href="/term"
              className="hover:text-black text-[15px] text-[#593939] ff_n font-normal  mb-0"
            >
              Terms Of Use
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-black text-[15px] text-[#593939] ff_n font-normal  mb-0"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

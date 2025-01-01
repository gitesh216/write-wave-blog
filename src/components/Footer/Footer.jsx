import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-indigo-300 text-gray-950">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} DevUI. All rights reserved.
              </p>
            </div>
          </div>

          {/* Company Section */}
          <div className="w-1/2 md:w-1/6 mb-8 md:mb-0">
            <h3 className="text-xs font-semibold uppercase text-gray-300 mb-4">
              Company
            </h3>
            <ul>
              <li className="mb-2">
                <Link className="text-sm hover:text-white" to="/">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm hover:text-white" to="/">
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm hover:text-white" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-white" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-1/2 md:w-1/6 mb-8 md:mb-0">
            <h3 className="text-xs font-semibold uppercase text-gray-300 mb-4">
              Support
            </h3>
            <ul>
              <li className="mb-2">
                <Link className="text-sm hover:text-white" to="/">
                  Account
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm hover:text-white" to="/">
                  Help
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm hover:text-white" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-white" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="w-full md:w-1/6">
            <h3 className="text-xs font-semibold uppercase text-gray-300 mb-4">
              Legals
            </h3>
            <ul>
              <li className="mb-2">
                <Link className="text-sm hover:text-white" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm hover:text-white" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-white" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

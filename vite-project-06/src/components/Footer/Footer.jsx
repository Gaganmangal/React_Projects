import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="data:image/png;base64,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"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/github" className="hover:underline">
                    Github
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023
            <a href="https://hiteshchoudhary.com/" className="hover:underline">
              hiteshchoudhary
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

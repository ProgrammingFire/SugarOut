import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import MenuItem from "./menu-item";

export default function HeaderMenu() {
  return (
    <div className="">
      <Menu as="div" className="">
        <li class="menu-icon dark:text-gray-400 inline-flex w-full justify-center text-gray-600 hover:text-black group cursor-pointer dark:hover:text-dark transition-all">
          <Menu.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Menu.Button>

          <span class="header-tooltip tooltip-green group-hover:scale-100">
            Menu
          </span>
        </li>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-[4.5rem] right-3 mt-2 w-56 shadow-lg shadow-gray-800 origin-top-right rounded-md bg-gray-100  ring-1 ring-black ring-opacity-5 text-dark focus:outline-none">
            <div className="px-1 py-1">
              <MenuItem name="Products" url="/products" />
              <MenuItem name="Services" url="/services" />
              <MenuItem name="Blog" url="/blog" />
              <MenuItem name="About" url="/about" />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#FFFFFF"
        stroke="#80bfff"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#FFFFFF"
        stroke="#80bfff"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#FFFFFF"
        stroke="#80bfff"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#FFFFFF"
        stroke="#80bfff"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#80bfff" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#80bfff" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#80bfff" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#80bfff" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#000000" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#000000" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#000000" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#FFFFFF"
        stroke="#80bfff"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#80bfff" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#80bfff" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#000000" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#000000" strokeWidth="2" />
    </svg>
  );
}

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
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
          <Menu.Items className="absolute top-[4.5rem] right-3 mt-2 w-56 shadow-lg shadow-gray-800 origin-top-right rounded-md bg-white  ring-1 ring-black ring-opacity-5 text-dark focus:outline-none">
            <div className="px-1 py-1">
              <MenuItem name="Products" url="/products" />
              <MenuItem name="Services" url="/services" />
              <MenuItem name="Blog" url="/blog" />
              <MenuItem name="Contact" url="/contact" />
              <MenuItem name="About" url="/about" />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

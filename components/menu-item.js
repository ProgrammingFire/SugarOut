import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function MenuItem({ url, name }) {
  return (
    <Link href={`/${url}`}>
      <Menu.Item>
        {({ active }) => (
          <button
            className={`${
              active
                ? "bg-blue-300 border-4 border-transparent text-dark"
                : " border-blue-300 border-4 text-white"
            } group my-1 flex justify-center font-bold w-full items-center rounded-md px-2 py-4 text-md`}
          >
            {name}
          </button>
        )}
      </Menu.Item>
    </Link>
  );
}

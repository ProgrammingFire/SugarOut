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
                ? "bg-blue-900 border-4 border-transparent text-white"
                : " border-blue-900 border-4 text-dark"
            } group my-1 flex justify-center font-bold w-full items-center rounded-md px-2 py-4 text-md`}
          >
            {name}
          </button>
        )}
      </Menu.Item>
    </Link>
  );
}

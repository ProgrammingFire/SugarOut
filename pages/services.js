import Container from "../components/container";
import { getAllServices } from "../lib/graphcms";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Head from "next/head";
import { TITLE } from "../lib/constants";
import { Popover } from "@headlessui/react";
import Link from "next/link";

export default function Services({ services }) {
  return (
    <>
      <Head>
        <title>{"Services" + TITLE}</title>
      </Head>
      <Container>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          {services.map((service) => (
            <div class="flex card flex-col items-center shadow-lg justify-center rounded-lg bg-white p-5">
              <h1 class="m-auto text-center max-w-xs  text-xl font-medium">
                {service.title}
              </h1>
              <span class="mt-5 text-red-800 text-2xl font-bold px-2 text-center max-w-5 line-through">
                M.R.P. ₹{service.price}/-
              </span>
              <div class="bg-black mt-5 px-4 lg:px-16 py-2 text-white text-lg font-bold text-center max-w-5">
                OFFER PRICE
              </div>
              <span class="mt-5 text-2xl font-bold px-2 text-center max-w-5">
                ₹{service.offerPrice}/-
              </span>
              {/* <Popover class="w-full flex flex-col items-center">
                <Popover.Button class="card-btn mt-5">BOOK NOW!</Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel class="bg-gray-100 border-slate-900 border-2  rounded-lg shadow-lg px-4 py-2 mb-3 z-10">
                    Contact at +91 7078360430
                  </Popover.Panel>
                </Transition>
              </Popover> */}
              <Link href="/contact">
                <button class="card-btn mt-5">BOOK NOW!</button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const services = (await getAllServices(preview)) || [];
  console.log(services);
  return {
    props: { services, preview },
  };
}

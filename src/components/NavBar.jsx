import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../images/cropped-bakdhatlogo.svg";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Beranda", link: "/" },
  { name: "Profile", link: "/profile" },
  { name: "Data", link: "#" },
  { name: "Berita", link: "/berita" },
  { name: "Kegiatan", link: "#" },
  { name: "Gallery", link: "#" },
  { name: "Kontak", link: "#" },
];

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-main-blue to-light-blue font-poppins drop-shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <div className="relative flex h-24 items-center justify-between">
              <div className="order-last flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden md:block">
                  <div className="flex">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="rounded-lg px-3 py-2 text-sm text-dark-gray hover:bg-gray-50/25 lg:px-3 lg:py-2 lg:text-base"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex w-full items-center justify-between sm:static sm:inset-auto">
                <div className="flex items-center gap-4">
                  <img
                    className="w-16"
                    src={logo}
                    alt="Logo Sekolah Bakti Idhata"
                  />
                  <h1 className="flex flex-col font-antonio text-2xl font-semibold uppercase">
                    smp bakti idhata
                    <span className="text-sm font-light">
                      cerdas terampil luhur
                    </span>
                  </h1>
                </div>

                <div className="relative inset-y-0 items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-dark-gray hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 bg-main-gray px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.link}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium hover:bg-gray-300"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

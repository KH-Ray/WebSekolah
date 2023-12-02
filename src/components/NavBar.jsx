import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Beranda", href: "#", current: true },
  { name: "Profile", href: "#", current: false },
  { name: "Data", href: "#", current: false },
  { name: "Berita", href: "#", current: false },
  { name: "Kegiatan", href: "#", current: false },
  { name: "Gallery", href: "#", current: false },
  { name: "Kontak", href: "#", current: false },
];

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-main-blue to-light-blue font-poppins drop-shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl lg:px-6">
            <div className="relative flex h-24 items-center justify-between">
              <div className="order-last flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden md:block">
                  <div className="flex">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm text-dark-gray hover:bg-gray-50/25 lg:px-3 lg:py-2 lg:text-base"
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex w-full items-center justify-between p-2 sm:static sm:inset-auto">
                <div className="flex items-center gap-4 hover:cursor-pointer">
                  <img
                    className="w-16"
                    src="src/assets/cropped-bakdhatlogo.svg"
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
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-300"
                  aria-current={item.current ? "page" : undefined}
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

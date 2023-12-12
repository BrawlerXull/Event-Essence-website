import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerTextClassNameLg = "text-sm font-semibold leading-6 font-mono text-white";
  const headerTextClassNameSm = "-mx-3 block rounded-lg px-3 py-2 font-mono  text-white text-base font-semibold leading-7  hover:bg-gray-50";

  return (
    <div>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center font-serif">
            <span className="sr-only">Your Company</span>
            
            <h3 style={{
    fontFamily: "Nova Square"} } className=" text-3xl text-white font-bold hover:text-blue-300">Event Essence</h3>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#" className= {headerTextClassNameLg}> 
            Previous work
          </a>
          <a href="#" className={headerTextClassNameLg}>
            Contact us
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        // @ts-ignore
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className={headerTextClassNameSm}
                >
                  Previous work
                </a>
                <a
                  href="#"
                  className={headerTextClassNameSm}
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

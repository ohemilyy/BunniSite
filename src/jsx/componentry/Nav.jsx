// NavBar component is derived from Tailwind UI library (https://tailwindui.com/)

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ConfigurationFetch from "../../lib/ConfigurationFetch.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Resume', href: 'https://docs.google.com/document/d/1YT7uTUd8fQ7CxjkY1yBdSgMqgT-99aL2BEAof-b1670/', current: false, disabled: false, external: true },
  { name: 'Projects', href: '/projects', current: false, disabled: false },
  { name: 'Experience', href: '/experience', current: false, disabled: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
};

export default function Nav() {
  const route = useLocation();
  const [bannerStatus, setBannerStatus] = useState(false);

  useEffect(() => {
    (async () => {
      const Configuration = await ConfigurationFetch();
        if (Configuration.development === false) return setBannerStatus(false);
        else return setBannerStatus(true);
    })();
  }, []);
  

  
  return (
    <div>
      {
        bannerStatus &&
        <div className="bg-red-500 text-center font-BreezeHeader py-6 px-32 hidden sm:block">
          <h1 className="font-BreezeText text-2xl">Development mode is <b>enabled</b>. Make sure to configure <code>public/config/config.json</code> in the project directory. When you're done, set <code>development</code> in the configuration to false.<br /><br /><b>Happy coding!</b></h1>
        </div>
      }
      <Disclosure as="nav" className="bg-gray-800 shadow-lg">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-12">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/" className="text-white text-xl font-BreezeHeader font-bold">Emily // Bunni</a>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.disabled ? route.pathname : item.href}
                          rel="noreferrer noopener"
                          target={item.external ? "_blank" : null}
                          className={classNames(
                            item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium font-BreezeText'
                          )}
                          style={item.disabled ? { cursor: "not-allowed", textDecoration: "line-through" } : {}}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/Dannnington/website"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>


              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.disabled ? "#" : item.href}
                    rel="noreferrer noopener"
                    target={item.external ? "_blank" : null}
                    className={classNames(
                      item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white',
                      'block px-3 py-2 rounded-md text-base text-center font-medium font-BreezeText'
                    )}
                    style={item.disabled ? { cursor: "not-allowed", textDecoration: "line-through" } : {}}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

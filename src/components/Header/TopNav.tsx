import styles from "./Header.module.css";
import InstagramLogo from "../../assets/icons/InstagramLogo";
import FacebookLogo from "../../assets/icons/FacebookLogo";
import DownArrow from "../../assets/icons/DownArrow";
import { Menu } from "@headlessui/react";

const exampleLink = "www.example.com";

const TopNav = () => {
  return (
    <div className="bg-gray500 text-gray100">
      <div className="flex justify-between">
        <ul className={`flex ${styles.topLeftMenu}`}>
          <li>
            <a href={exampleLink}>
              <FacebookLogo />
            </a>
          </li>
          <li>
            <a href={exampleLink}>
              <InstagramLogo />
            </a>
          </li>
          <li>
            <a href={exampleLink}>About Us</a>
          </li>
          <li>
            <a href={exampleLink}>Our Policy</a>
          </li>
        </ul>
        <ul className={`flex ${styles.topRightMenu}`}>
          <li>
            <Menu as="div" className="relative">
              <Menu.Button as="a" href={exampleLink} className="flex">
                Eng <DownArrow />
              </Menu.Button>
              <Menu.Items
                className="flex flex-col w-20 right-0 absolute p-1 border border-gray200 bg-white mt-2 outline-none"
                style={{ zIndex: 9999 }}
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={exampleLink}
                      className={`${
                        active
                          ? "bg-gray100 text-gray500"
                          : "bg-white text-gray500"
                      } py-2 px-4 text-center focus:outline-none`}
                    >
                      Eng
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={exampleLink}
                      className={`${
                        active
                          ? "bg-gray100 text-gray500"
                          : "bg-white text-gray500"
                      } py-2 px-4 text-center focus:outline-none`}
                    >
                      Myn
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <li>
            <Menu as="div" className="relative">
              <Menu.Button as="a" href={exampleLink} className="flex">
                USD <DownArrow />
              </Menu.Button>
              <Menu.Items
                className="flex flex-col w-20 right-0 absolute p-1 border border-gray200 bg-white mt-2 outline-none"
                style={{ zIndex: 9999 }}
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={exampleLink}
                      className={`${
                        active
                          ? "bg-gray100 text-gray500"
                          : "bg-white text-gray500"
                      } py-2 px-4 text-center focus:outline-none`}
                    >
                      USD
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={exampleLink}
                      className={`${
                        active
                          ? "bg-gray100 text-gray500"
                          : "bg-white text-gray500"
                      } py-2 px-4 text-center focus:outline-none`}
                    >
                      Kyats
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;

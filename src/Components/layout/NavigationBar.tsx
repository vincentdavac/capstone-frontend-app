import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { useState } from "react";
import Login from "../../Pages/Authentication/Login";
import Register from "../../Pages/Authentication/Register";

export default function NavigationBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <Navbar fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Capstone Project
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Prototype</NavbarLink>
          <NavbarLink href="#">Product</NavbarLink>
          <NavbarLink href="#">Team</NavbarLink>

          <NavbarLink
            onClick={() => setShowRegisterModal(true)}
            className="cursor-pointer"
          >
            Register
          </NavbarLink>
          <NavbarLink
            onClick={() => setShowLoginModal(true)}
            className="cursor-pointer"
          >
            Login
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <Login
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setTimeout(() => setShowRegisterModal(true), 300);
        }}
      />

      <Register
        show={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setTimeout(() => setShowLoginModal(true), 300);
        }}
      />
    </>
  );
}

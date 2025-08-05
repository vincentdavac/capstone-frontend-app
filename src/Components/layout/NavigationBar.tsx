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
  const isLoggedIn = false;

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full shadow-md">
        {" "}
        <Navbar
          fluid
          style={{ backgroundColor: "#FAF3DD" }}
          className="font-roboto w-full"
        >
          <NavbarBrand href="https://flowbite-react.com">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-[#39A7FF]">
              COASTELLA
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
            <NavbarLink
              href="#"
              active
              className="text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#636a70]"
            >
              Home
            </NavbarLink>
            <NavbarLink
              href="#"
              active
              className="text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#636a70]"
            >
              About
            </NavbarLink>
            <NavbarLink
              href="#"
              active
              className="text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#636a70]"
            >
              Prototype
            </NavbarLink>
            <NavbarLink
              href="#"
              active
              className="text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#636a70]"
            >
              Product
            </NavbarLink>
            <NavbarLink
              href="#"
              active
              className="text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#636a70]"
            >
              Team
            </NavbarLink>
            {!isLoggedIn && (
              <NavbarLink
                onClick={() => setShowLoginModal(true)}
                active
                className="cursor-pointer text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#636a70]"
              >
                Login
              </NavbarLink>
            )}
          </NavbarCollapse>
        </Navbar>
      </div>

      {/* Add padding to the content below the navbar */}
      <div className="pt-10">
        {" "}
        {/* Adjust this value based on your navbar height */}
        {/* Your page content goes here */}
      </div>

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

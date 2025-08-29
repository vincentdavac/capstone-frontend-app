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
import COASTELLALogo from "/logo 3.svg"; // Import the logo

export default function NavigationBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const isLoggedIn = false;

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full shadow-md">
        <Navbar
          fluid
          style={{ backgroundColor: "#023E8A" }}
          className="font-roboto w-full"
        >
          <NavbarBrand href="https://flowbite-react.com">
            <img
              src={COASTELLALogo}
              className="mr-3 h-8"
              alt="COASTELLA Logo"
            />
            <span
              className="self-center text-xl font-bold whitespace-nowrap dark:text-[#FFFFFF]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
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
              className="font-light text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#FFFFFF]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Home
            </NavbarLink>
            <NavbarLink
              href="#"
              active
              className="font-light text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#FFFFFF]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              About
            </NavbarLink>
            <NavbarLink
              href="#"
              active
              className="font-light text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#FFFFFF]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Prototype
            </NavbarLink>
            <NavbarLink
              href="#"
              active
              className="font-light text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#FFFFFF]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Product
            </NavbarLink>
            <NavbarLink
              href="#"
              active
              className="font-light text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#FFFFFF]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Team
            </NavbarLink>
            {!isLoggedIn && (
              <NavbarLink
                onClick={() => setShowLoginModal(true)}
                active
                className="font-light text-black transition-colors duration-200 hover:text-[#39A7FF] dark:text-[#FFFFFF]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Login
              </NavbarLink>
            )}
          </NavbarCollapse>
        </Navbar>
      </div>

      <div className="pt-10"> </div>

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

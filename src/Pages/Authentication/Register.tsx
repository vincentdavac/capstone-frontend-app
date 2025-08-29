"use client";

import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type RegisterProps = {
  show: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
};

export default function Register({
  show,
  onClose,
  onSwitchToLogin,
}: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/.test(
      password,
    );
  const isPasswordMatched = password === confirmPassword;

  const isFormValid =
    name.trim().length > 0 &&
    isEmailValid &&
    isPasswordValid &&
    isPasswordMatched &&
    confirmPassword.length > 0;

  const handleRegister = () => {
    if (!isEmailValid) return alert("Invalid email format.");
    if (!isPasswordValid)
      return alert(
        "Password must be at least 8 characters, include a letter, a number, and a special character.",
      );
    if (!isPasswordMatched) return alert("Passwords do not match.");

    alert("Registering...");
  };

  return (
    <Modal show={show} size="md" onClose={onClose} popup>
      <ModalHeader className="bg-[#FFFFFF]" />
      <ModalBody className="bg-[#FFFFFF]">
        <div className="space-y-6">
          <h3
            className="text-xl font-bold text-[#0353A4]"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Create your Account
          </h3>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                className="text-sm font-light"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "#374151",
                }}
              >
                Your Name
              </Label>
            </div>
            <TextInput
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                fontFamily: "'Roboto', sans-serif",
                backgroundColor: "white",
                color: "#374151",
              }}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                className="text-sm font-light"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "#374151",
                }}
              >
                Your Email
              </Label>
            </div>
            <TextInput
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              color={email && !isEmailValid ? "failure" : undefined}
              style={{
                fontFamily: "'Roboto', sans-serif",
                backgroundColor: "white",
                color: "#374151",
              }}
            />
            {email && !isEmailValid && (
              <p
                className="mt-1 text-sm text-red-600"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Invalid email format
              </p>
            )}
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                className="text-sm font-light"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "#374151",
                }}
              >
                Your Password
              </Label>
            </div>
            <div className="relative">
              <TextInput
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                color={password && !isPasswordValid ? "failure" : undefined}
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  backgroundColor: "white",
                  color: "#374151",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {password && !isPasswordValid && (
              <p
                className="mt-1 text-sm text-red-600"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Minimum 8 characters, 1 letter, 1 number, 1 special character
              </p>
            )}
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password_confirmation"
                className="text-sm font-light"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "#374151",
                }}
              >
                Confirm Your Password
              </Label>
            </div>
            <div className="relative">
              <TextInput
                id="password_confirmation"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                color={
                  confirmPassword && !isPasswordMatched ? "failure" : undefined
                }
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  backgroundColor: "white",
                  color: "#374151",
                }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {confirmPassword && !isPasswordMatched && (
              <p
                className="mt-1 text-sm text-red-600"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Passwords do not match
              </p>
            )}
          </div>

          <div className="w-full">
            <Button
              onClick={handleRegister}
              disabled={!isFormValid}
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Create your account
            </Button>
          </div>

          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-600">
            <a href="" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Already have an account?&nbsp;
            </a>
            <a
              onClick={onSwitchToLogin}
              className="text-primary-700 dark:text-primary-500 cursor-pointer hover:underline"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Sign in here
            </a>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

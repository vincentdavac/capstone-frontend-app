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
      <ModalHeader />
      <ModalBody>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Register in to our platform
          </h3>

          <div>
            <Label htmlFor="name" className="mb-2 block">
              Your Name
            </Label>
            <TextInput
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="mb-2 block">
              Your Email
            </Label>
            <TextInput
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              color={email && !isEmailValid ? "failure" : undefined}
            />
            {email && !isEmailValid && (
              <p className="mt-1 text-sm text-red-500">Invalid email format</p>
            )}
          </div>

          <div>
            <Label htmlFor="password" className="mb-2 block">
              Your Password
            </Label>
            <div className="relative">
              <TextInput
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                color={password && !isPasswordValid ? "failure" : undefined}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 text-sm text-gray-500"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {password && !isPasswordValid && (
              <p className="mt-1 text-sm text-red-500">
                Minimum 8 characters, 1 letter, 1 number, 1 special character
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="password_confirmation" className="mb-2 block">
              Confirm Your Password
            </Label>
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
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-2.5 right-3 text-sm text-gray-500"
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {confirmPassword && !isPasswordMatched && (
              <p className="mt-1 text-sm text-red-500">
                Passwords do not match
              </p>
            )}
          </div>

          <div className="w-full">
            <Button
              onClick={handleRegister}
              className="w-full"
              disabled={!isFormValid}
            >
              Register
            </Button>
          </div>

          <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login here
            </button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

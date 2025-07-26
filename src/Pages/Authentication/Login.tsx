"use client";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type LoginProps = {
  show: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
};

export default function Login({
  show,
  onClose,
  onSwitchToRegister,
}: LoginProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Minimum 8 characters, at least one letter, one number, and one special character
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );

  return (
    <>
      <Modal show={show} size="md" onClose={onClose} popup>
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Your email</Label>
              </div>
              <TextInput id="email" placeholder="Enter your email" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password">Your password</Label>
              </div>
              <div className="relative">
                <TextInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  color={
                    isPasswordValid || password.length === 0
                      ? undefined
                      : "failure"
                  }
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

              {!isPasswordValid && password.length > 0 && (
                <p className="mt-1 text-sm text-red-600">
                  Password must be at least 8 characters with letters, numbers,
                  and a special character.
                </p>
              )}
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-primary-700 dark:text-primary-500 text-sm hover:underline"
              >
                Lost Password?
              </a>
            </div>

            <div className="w-full">
              <Button disabled={!isPasswordValid}>
                Log in to your account
              </Button>
            </div>

            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                onClick={onSwitchToRegister}
                className="text-primary-700 dark:text-primary-500 cursor-pointer hover:underline"
              >
                Create account
              </a>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

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
              <TextInput
                id="email"
                placeholder="Enter your email"
                // value={0}
                // onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password">Your password</Label>
              </div>
              <TextInput
                id="password"
                type="password"
                required
                placeholder="Enter your password"
              />
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
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                onClick={onSwitchToRegister}
                className="text-primary-700 dark:text-primary-500 hover:underline"
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

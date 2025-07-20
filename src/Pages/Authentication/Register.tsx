"use client";

import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";

type RegisterProps = {
  show: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
};

// name, email, password, password_confirmation

export default function Register({
  show,
  onClose,
  onSwitchToLogin,
}: RegisterProps) {
  return (
    <>
      <Modal show={show} size="md" onClose={onClose} popup>
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Register in to our platform
            </h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="text">Your Name</Label>
              </div>
              <TextInput
                id="name"
                placeholder="Enter your name"
                // value={0}
                // onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Your email</Label>
              </div>
              <TextInput
                id="email"
                placeholder="Enter your email"
                // value={"email"}
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
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password_confirmation">
                  Confirm you password
                </Label>
              </div>
              <TextInput
                id="password_confirmation"
                type="password"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="w-full">
              <Button>Register your account</Button>
            </div>

            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?&nbsp;
              <a
                onClick={onSwitchToLogin}
                className="text-primary-700 dark:text-primary-500 cursor-pointer hover:underline"
              >
                Login account
              </a>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

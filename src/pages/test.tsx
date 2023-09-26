import ModalContainer from "@/components/modals/ModalContainer";
import React, { useState } from "react";

// Assume Modal is an existing component
interface ModalProps {
  children?: React.ReactNode;
  modalOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, modalOpen, closeModal }) => {
  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="modal-background fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      />
      <div className="modal-content rounded bg-white p-4 shadow-lg">h111</div>
    </div>
  );
};

interface AuthModalProps {
  children?: React.ReactNode;
  modalOpen: boolean;
  closeModal: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ modalOpen, closeModal }) => {
  return (
    <ModalContainer modalOpen={modalOpen} closeModal={closeModal}>
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold">Authentication Required</h2>
        <p className="mb-4 text-gray-700">
          Please log in to access this feature.
        </p>
        <button className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700">
          Log In
        </button>
      </div>
    </ModalContainer>
  );
};

interface AppProps {
  isAuthenticated: boolean;
}

const App: React.FC<AppProps> = ({ isAuthenticated }) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleButtonClick = () => {
    if (!isAuthenticated) {
      setAuthModalOpen(true);
    }
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <div className="App">
      <button
        onClick={handleButtonClick}
        className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
      >
        Open Feature
      </button>

      <AuthModal modalOpen={authModalOpen} closeModal={closeAuthModal} />
    </div>
  );
};

export default App;

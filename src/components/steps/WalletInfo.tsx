import React, { useState } from "react";
import { useStepperContext } from "../../context/StepperContext";

interface WalletInfoProps {
  onValidationChange: (value: boolean) => void;
}

const WalletInfo = ({ onValidationChange }: WalletInfoProps) => {
  const { userData, setUserData } = useStepperContext();

  const [address, setAddress] = useState<string>(userData.address);
  const [isValidAddress, setIsValidAddress] = useState(false);

  const validateAddress = (address: string) => {
    if (address && address.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress: string = e.target.value;
    setAddress(newAddress);
    setIsValidAddress(validateAddress(newAddress));

    // Update user data and notify the parent component of validation status
    setUserData({ ...userData, address: newAddress });
    onValidationChange(validateAddress(newAddress));
  };

  return (
    <main className="px-lg:[250px] mb-20 mt-10 px-5">
      <div>
        <h3 className="font-semibold">
          Address
          <small className="text-gray-text">(to recieve your payment)</small>
        </h3>
        <input
          type="email"
          placeholder="Enter your email or wallet address"
          value={userData.address}
          onChange={handleAddressChange}
          className={`mt-2 w-full rounded-md border-2 border-gray-100 bg-white p-4 pt-4 font-semibold outline-none transition disabled:cursor-not-allowed disabled:opacity-70`}
        />
      </div>
    </main>
  );
};

export default WalletInfo;

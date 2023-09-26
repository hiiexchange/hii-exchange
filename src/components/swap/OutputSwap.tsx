// /* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from "react";
import Image from "next/image";
// import { connect } from 'react-redux';
// import { selectInputToken, selectOutputToken } from '../redux/actions';
import CoinDropdown from "../CoinDropdown";
import type { coinDataType } from "../../types/types";
import type { OutputSwapProps } from "../../types/types";

const OutputSwap = ({
  token,
  amount,
  setAmount,
  selectToken,
  coinData,
}: OutputSwapProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [amount, setAmount] = useState();

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue !== '') {
      setAmount(inputValue);
    } else {
      setAmount('');
    }
  };

  const handleTokenChange = (selectedToken: coinDataType) => {
    selectToken(selectedToken);
    setIsDropdownOpen(false); // Close the dropdown
  };

  const handleClickOutside = (e: React.MouseEvent<Document, MouseEvent>) => {
    const targetElement = e.target as HTMLElement;

    if (isDropdownOpen && !targetElement.closest("#chevron")) {
      setIsDropdownOpen(false); // Close the dropdown when clicking outside
    }
  };


  return (
    <div className="border-blue relative flex min-h-[72px] w-full cursor-pointer flex-col items-center justify-between divide-y rounded-xl border-2 bg-[#fafafa] px-3 py-1 md:flex-row md:divide-x md:divide-y-0">
      <div className="flex w-full items-center justify-between lg:w-72">
        <div className="flex items-center justify-center">
          <div>
            {/* Render the token icon here */}
            <Image
              width={50}
              height={50}
              src={token?.icon}
              alt={token?.title}
            />
          </div>
          <div className="flex w-full flex-col items-start pl-2">
            <p className="font-medium text-[#9d9d9d]">{token?.currency_code}</p>
            <p className="font-medium text-black">{token?.title}</p>
          </div>
        </div>

        <span>
          <Image
            onClick={handleDropdown}
            id="chevron"
            className="shrink-0"
            width={25}
            height={25}
            src="/assets/chevron-icon.svg"
            alt=""
          />
        </span>

        {isDropdownOpen && (
          <CoinDropdown
            handleTokenChange={handleTokenChange}
            coinData={coinData}
          />
        )}
      </div>

      <div className="w-full pl-2 pt-3 text-[#9d9d9d] md:w-2/5">
        <p className="font-medium text-[#9d9d9d]">We send</p>
        <input
          className="h-[35px] w-full bg-inherit font-bold text-black focus-visible:border-none focus-visible:outline-none"
          type="text"
          required={true}
          autoComplete="off"
          name="Amount"
          placeholder="Enter Amount..."
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
// inputToken: state.inputToken,
// outputToken: state.outputToken,
// });

// const mapDispatchToProps = (dispatch) => ({
// selectInputToken: (token) => dispatch(selectInputToken(token)),
// selectOutputToken: (token) => dispatch(selectOutputToken(token)),
// });
// connect(mapStateToProps, mapDispatchToProps)()
export default OutputSwap;

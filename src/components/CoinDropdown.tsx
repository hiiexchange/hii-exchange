import { useState, type ChangeEvent } from "react";
import Image from "next/image";
import type { coinDataType } from "../types/types";

const CoinDropdown = ({
  coinData,
  handleTokenChange,
}: {
  coinData: coinDataType[];
  handleTokenChange: (selectedToken: coinDataType) => void;
}) => {
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setfilteredItems] = useState<coinDataType[]>(coinData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputData: string = e.target.value.toLowerCase();
    setSearchText(inputData);

    // Update the filtered items based on the input data
    const newFilteredItems = coinData.filter((coin) =>
      coin.title.toLowerCase().includes(searchText),
    );

    setfilteredItems(newFilteredItems);
  };

  const handleCoinClick = (coin: coinDataType) => {
    // onSelect(coinData);
    handleTokenChange(coin);
  };

  return (
    <div className="z-100 absolute left-0 right-0 z-[999] mt-[32rem] h-96 w-full overflow-y-scroll rounded-xl border bg-white px-3 py-2">
      <div className="border-b-2 border-[fafafa]">
        <input
          className="w-full bg-inherit p-3 font-medium text-black focus-visible:border-none focus-visible:outline-none"
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search for a currency name"
        />
      </div>

      <div>
        <ul>
          {filteredItems?.map((coin: coinDataType, index: number) => {
            return (
              <li
                key={index}
                className="flex items-center justify-between p-2 py-5"
                onClick={() => handleCoinClick(coin)}
              >
                <div className="flex items-center justify-center">
                  <Image
                    className="px-2"
                    src={coin.icon}
                    alt={coin.title}
                    width={50}
                    height={50}
                  />

                  <span className="font-bold">{coin.title}</span>
                </div>

                <p className="text-grey font-medium">{coin.currency_code}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CoinDropdown;

export type coinDataType = {
    currency_id: number,
    title: string,
    slug: string,
    currency_code: string,
    is_crypto: null,
    icon: string
}

export type InputSwapProps = {
  token: coinDataType;
  selectToken: (token: coinDataType) => void;
  amount: string | undefined;
  setAmount: (value: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  coinData: coinDataType[];
};

export type OutputSwapProps = {
  token: coinDataType;
  selectToken: (token: coinDataType) => void;
  amount: string | undefined;
  setAmount: (value: string) => void;
  coinData: coinDataType[];
};

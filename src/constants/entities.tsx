import { ReactNode } from "react";
import {
  AiFillApple as AppleIcon,
  AiFillAmazonCircle as AmazonIcon,
  AiFillGoogleCircle as GoogleIcon,
} from "react-icons/ai";
import {
  SiAmd as AMDIcon,
  SiIbm as IBMIcon,
  SiNetflix as NetflixIcon,
  SiTesla as TeslaIcon,
} from "react-icons/si";
import { FaBitcoin as BTCIcon, FaEthereum as ETHIcon } from "react-icons/fa";
import { entity } from "../types/entity";

export const entities: entity[] = [
  {
    stockName: "AAPL",
    label: "Apple",
    icon: <AppleIcon />,
  },
  {
    stockName: "AMD",
    label: "AMD",
    icon: <AMDIcon />,
  },
  {
    stockName: "AMZN",
    label: "Amazon",
    icon: <AmazonIcon />,
  },
  {
    stockName: "GOOG",
    label: "Google",
    icon: <GoogleIcon />,
  },
  {
    stockName: "IBM",
    label: "IBM",
    icon: <IBMIcon />,
  },
  {
    stockName: "NFLX",
    label: "Netflix",
    icon: <NetflixIcon />,
  },
  {
    stockName: "TSLA",
    label: "Tesla",
    icon: <TeslaIcon />,
  },
  {
    stockName: "BTC",
    label: "Bitcoin",
    icon: <BTCIcon />,
  },
  {
    stockName: "ETH",
    label: "Ethereum",
    icon: <ETHIcon />,
  },
];

import {
  investmentOptionImg1,
  investmentOptionImg2,
  investmentOptionImg3,
} from "assets";
import { Option, OptionProps } from "components/general";
import * as React from "react";

const InvestmentOptions = ({ apply, dollarInvestment }) => {
  const options: OptionProps[] = [
    {
      id: "pesado",
      title: "Zitra Pesado",
      text1: "Invest for a more comfortable life, invest for a happier life.",
      text2: `We offer much more than an opportunity to grow your money and earn
  high returns, this is a chance to secure your future and attain the
  financial freedom you have always wanted. Invest a minimum of 100k and
  earn high returns.`,
      image: investmentOptionImg1,
      apply,
    },
    {
      id: "primero",
      title: "Zitra Primero",
      text1: "Save money today – Live better tomorrow",
      text2: `Funding your account on a daily, weekly, monthly, or quarterly basis, you can crush your financial goals. Saving for rainy days is only part of the picture - it's about building your financial confidence. Your little steps will be rewarded and we'll guide you along the way.`,
      image: investmentOptionImg3,
      apply,
    },
    {
      id: "dollar-fund",
      title: "Zitra Dollar Fund",
      text1: "High-Yield USD Investment",
      text2: (
        <>
          Earn up to <b>11%</b> annually! Invest in USD, enjoy stability, and
          hedge against inflation.
        </>
      ),
      text3: "Invest securely in dollars",
      points: [
        <>
          <b>Target Investors:</b> Businesses, High Net Worth Individuals, and
          more!
        </>,
        <>
          <b>Benefits:</b> High returns, Naira credit line (after 1 year), and
          flexible payouts.
        </>,
        <>
          <b>Minimum Investment:</b> $1000
        </>,
        <>
          <b>Term:</b> 360 days (Locked-in)
        </>,
      ],
      image: investmentOptionImg2,
      apply: dollarInvestment,
    },
  ];

  return (
    <>
      {options.map((item, index) => (
        <Option {...item} key={index} />
      ))}
    </>
  );
};

export { InvestmentOptions };

import { investmentOptionImg1, investmentOptionImg2 } from "assets";
import { Option, OptionProps } from "components/general";
import * as React from "react";

const InvestmentOptions = ({ apply }) => {
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
      image: investmentOptionImg2,
      apply,
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

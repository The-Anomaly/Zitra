import {
  assetsOptionImg1,
  assetsOptionImg2,
  assetsOptionImg3,
  assetsOptionImg4,
  assetsOptionImg5,
  assetsOptionImg6,
  assetsOptionImg7,
} from "assets";
import { Option, OptionProps } from "components/general";
import * as React from "react";

const AssetOptions = ({ apply }) => {
  const options: OptionProps[] = [
    {
      title: "Private Wealth Management",
      text1: "Thinking of building generational wealth?",
      text2: `This product is designed to help individuals, businesses and institutions build, manage tailored investment portfolios and ensure generational wealth so as to achieve their set financial goals.`,
      image: assetsOptionImg1,
      apply,
    },
    {
      title: "Dollar Investment",
      text2: `Zitra provides her clients access to investments in foreign currencies at attractive rates.`,
      image: assetsOptionImg2,
      apply,
    },
    {
      title: "Structured Investment",
      text2: `We offer asset backed notes which provides clients with risk adjusted higher returns such as Credit-backed Notes, FCY linked Notes, Treasury linked Notes, and Commodity backed Notes.`,
      image: assetsOptionImg3,
      apply,
    },
    {
      title: "Treasury and Fund Managements",
      text2: `We provide fund and treasury management services to help corporates and other organizations utilize their funds efficiently while also providing better yields.`,
      image: assetsOptionImg4,
      apply,
    },
    {
      title: "Financial and Investment Advisory",
      text2: `Zitra provides advisory services to her clients as it relates to their investments, retirements and businesses.`,
      image: assetsOptionImg5,
      apply,
    },
    {
      title: "Sustainable and Impact Investment",
      text2: `Zitra provides clients with an ESG, inclusion and impact focus, access to various sustainability investment options with the primal aim of driving positive change.`,
      image: assetsOptionImg6,
      apply,
    },
    {
      title: "Auxillary Services",
      text2: `We help our clients resolve all issues regarding investments in the capital market including dividend retrievals and share dematerializations.`,
      image: assetsOptionImg7,
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

export { AssetOptions };

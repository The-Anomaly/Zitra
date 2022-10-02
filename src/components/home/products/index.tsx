import {
  earningsIcon,
  fundingIcon,
  investmentIcon,
  loanIcon,
  SmallZigzag,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";

interface ProductProps {
  icon: string;
  iconType: "green" | "pink" | "purple" | "blue";
  title: string;
  text: any;
  link: string;
}

const ProductCard: React.FC<ProductProps> = ({
  icon,
  iconType,
  text,
  title,
  link,
}) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.icon} ${styles[iconType]}`}>
        <img src={icon} alt="" />
      </div>
      <p className={styles.cardTtl}>{title}</p>
      <p className={styles.cardTxt}>{text}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.cardLink}
      >
        Get started
      </a>
    </div>
  );
};

const Products = () => {
  const products: ProductProps[] = [
    {
      icon: loanIcon,
      iconType: "green",
      title: "Zitra Raiz",
      text: (
        <>
          Do you earn a salary, Do you need loans with no collateral?
          <br />
          Zitra Raiz allows you to access emergency cash without asking a
          friend. We offer fast loans for your financial needs. <br />
          Get up to ₦5million today.
        </>
      ),
      link: "",
    },
    {
      icon: earningsIcon,
      iconType: "pink",
      title: "Zitra Sharpaly",
      text: (
        <>
          We understand that business owners encounter problems trying to access
          finance to grow their businesses. Our business loan model is designed
          to meet the needs of business owners to help them grow and expand
          their business even if it is not registered.
        </>
      ),
      link: "",
    },
    {
      icon: investmentIcon,
      iconType: "purple",
      title: "Zitra Pesado",
      text: (
        <>
          Would you love to make extra cash? Or wondering how to start
          investing? Our high-return investment options allow you to accumulate
          wealth over time to fund your projects without worries - Slay your
          finances with our investment options and earn higher returns per
          annum.
        </>
      ),
      link: "",
    },
    {
      icon: fundingIcon,
      iconType: "blue",
      title: "Zitra Primero",
      text: (
        <>
          Are you interested in investing/saving? Then you’re at the right
          place. Save money for an emergency or a specific project, Earn
          Attractive interest rates! Start with what you have, build discipline,
          and get rewarded with our flexible investment plans.
        </>
      ),
      link: "",
    },
  ];
  return (
    <section className={`container ${styles.productsContainer}`}>
      <h2 className={styles.ttl}>
        Our PRODUCTS <SmallZigzag className={styles.zigzag} />
      </h2>
      <p className={styles.txt}>
        We have worked hard with you in mind and created a plethora of products
        to service your particular financial needs
      </p>
      <div className={styles.cardList}>
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export { Products };

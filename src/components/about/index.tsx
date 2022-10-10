import {
  landingSecurityImg,
  teamMemberImg1,
  teamMemberImg2,
  teamMemberImg3,
  teamMemberImg4,
  teamMemberImg5,
  teamMemberImg6,
  teamMemberImg7,
} from "assets";
import { Button } from "components/general";
import * as React from "react";
import styles from "./styles.module.css";

interface MemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TeamMember: React.FC<MemberProps> = ({
  image,
  role,
  description,
  name,
}) => {
  return (
    <div className={styles.memberCard}>
      <img className={styles.memberImg} src={image} alt="" />
      <p className={styles.memberName}>{name}</p>
      <p className={styles.memberRole}>{role}</p>
      <p className={styles.memberDescrip}>{description}</p>
    </div>
  );
};

const AboutUI = () => {
  const members: MemberProps[] = [
    {
      image: teamMemberImg1,
      name: "Obiora Onyekwelu",
      role: "Head of Finance",
      description:
        "Obiora Onyekwelu is a Graduate of Economics and Statistics from University of Benin. He is also an associate member Institute of Chartered Accountants of Nigeria. He started his career as a Corebanking Application Consultant at Appzone. Over the years he has gained vast experience in Risk Management, Finance, Branch Operations and Customer service. After 2 years in Page Financials, he moved to Eatongate Capital Limited as the Head of Operations and Finance.",
    },
    {
      image: teamMemberImg2,
      name: "John Usang",
      role: "Head Internal Control and Risk",
      description:
        "John Usang holds Bachelor of Arts from the prestigious University of Ibadan, Nigeria. He is a finance professional with over 7 years of experience in Enterprise Risk management, Credit Risk, Internal Control and Compliance. Before joining Zitra Investments, he was instrumental in formulating policies and procedures across several start-ups within the Microfinance Industry.",
    },
    {
      image: teamMemberImg3,
      name: "Omolola Olomoyeba",
      role: "Head of Micro Lending",
      description:
        "Omolola has over 8 years’ experience in Sales and Customer Service, She has held previous roles as a Sales Team Lead at CSadvance Finance Company, a (sister company to Cardinalstone Partners), Sales supervisor at Page financials, Sales Executive at Renmoney,Customer Care executive at Consol Ltd and Sales personnel at One finance Limited. Omololahas a B.A from Adekunle Ajasin University. Mercy currently heads the Micro Lending team of Zitra Investments",
    },
    {
      image: teamMemberImg4,
      name: "Adebola Shotinola PHRi™️",
      role: "Lead, People Operations",
      description:
        " Adebola is a certified HR Generalist that drives business outcomes by deploying experience of and competence in talent acquisition, development and implementation of HR Strategy, change management, learning &amp; development l, performance management and business knowledge.",
    },
    {
      image: teamMemberImg5,
      name: "Adeolu Ogundeji ",
      role: "Head, Sales and Lending",
      description:
        "Adeolu is an experienced and revenue-driven Business Manager specialising in retail sales, Strategic Partnership and Frontend Development with over 8 years of experience working in different commercial and business operations functions, including Sales, and Business Analysis with renowned institutions like Renmoney, AIICO, Page Financials and Andela.  He has a deep understanding of the Nigerian financial services industry and has been part of many initiatives geared toward financial inclusion in the lending space.",
    },
    {
      image: teamMemberImg6,
      name: "Ugochukwu Okere",
      role: "Head of Funding",
      description:
        "Ugochukwu has over 10 years of experience in the financial services industry having worked with several Fintech organizations and commercial Banks. Ugochukwu is graduate of mass communication from Ahmadu Bello University, He is also a certified Human Resources Manager.",
    },
    {
      image: teamMemberImg7,
      name: "Nkechi Oseke",
      role: "Head, Corporate Services",
      description:
        "Nkechi has over 6 years work experience in corporate services and customer experience, she has held several leadership positions in Service management in Page Financials.",
    },
  ];

  return (
    <>
      <section className={`container ${styles.aboutContainer}`}>
        <div className={styles.introSec}>
          <p className={styles.tag}>Our company</p>
          <h1 className={styles.ttl1}>About Us</h1>
          <p className={styles.txt1}>
            At Zitra, we provide our clients with premium value-add and build
            trusting relationships to meet their financial and business needs.{" "}
          </p>
          <p className={styles.txt1}>
            We offer a wide range of easily accessible financial solutions,
            including loans, to bridge the funding gap for individuals and
            businesses alike. We also provide investment solutions that will
            help our clients grow their wealth and meet their financial goals.
          </p>
        </div>

        <div className={styles.missionSec}>
          <h2 className={styles.ttl2}>Our Mission</h2>
          <p className={styles.txt2}>
            To become a leading financial service provider, with a focus on
            impacting the community and connecting people to their financial
            objectives while delivering value to our stakeholders.
          </p>
        </div>

        <div className={styles.missionSec}>
          <h2 className={styles.ttl2}>Our Vision</h2>
          <p className={styles.txt2}>
            Providing financial freedom to our clients through creative and
            sustainable solutions.
          </p>
        </div>
      </section>
      <section className={`container ${styles.driveContainer}`}>
        <div className={styles.driveTxtSec}>
          <h3 className={styles.driveTtl}>What drives us?</h3>
          <p className={styles.driveTxt}>
            With a passion for giving back to our community, we provide seamless
            financial assistance and advisory services to individuals and
            businesses who find it difficult to manage their daily finances. We
            want to be your one-stop-shop when you need urgent cash, extra
            income or any other financial services.
          </p>
          <ul className={styles.driveList}>
            <li>
              Dependability (Dependable service): We pride ourselves on being
              your dependable financial institution
            </li>
            <li>
              Social responsibility: One of our key focuses is to be socially
              responsible and give back to our community
            </li>
            <li>
              Client-focused: Customer satisfaction is at the heart of our
              service delivery.{" "}
            </li>
            <li>
              Quality service delivery: We continually go above and beyond in
              delivering impeccable services
            </li>
            <li>
              Mutual Respect: We want to ensure a mutually respectful
              relationship with our clients
            </li>
            <li>
              Teamwork: We work as a team to deliver value to clients and
              stakeholders.
            </li>
          </ul>
        </div>
        <img
          className={styles.driveImg}
          src={landingSecurityImg}
          alt="suprised man pointing with his index finger"
        />
      </section>
      <section className={`container ${styles.teamContainer}`}>
        <p className={styles.tag}>We’re hiring!</p>
        <h4 className={styles.teamTtl}>Meet our team</h4>
        <p className={styles.teamTxt}>
          Our leadership team comprises young and vibrant professionals, with
          notable years of experience in financial advisory, consumer lending,
          as well as information and technology.{" "}
        </p>
        <div className={styles.memberList}>
          {members.map((item, index) => (
            <TeamMember {...item} key={index} />
          ))}
        </div>
      </section>
      <section id="contact" className={`container ${styles.contactContainer}`}>
        <p className={styles.tag}>Contact Us</p>
        <h5 className={styles.contactTtl}>Get in touch</h5>
        <p className={styles.contactTxt}>
          We’d love to hear from you, please fill the form
        </p>
        <form className={styles.contactForm}>
          <div className={`${styles.inputWrap} ${styles.halfWidth}`}>
            <label>First name</label>
            <input type={"text"} />
          </div>
          <div className={`${styles.inputWrap} ${styles.halfWidth}`}>
            <label>Last name</label>
            <input type={"text"} />
          </div>
          <div className={styles.inputWrap}>
            <label>Email Address</label>
            <input type={"text"} />
          </div>
          <div className={styles.inputWrap}>
            <label>Message</label>
            <textarea />
          </div>
          <Button className={styles.contactBtn} onClick={() => {}}>
            Send Message
          </Button>
        </form>
      </section>
    </>
  );
};

export { AboutUI };

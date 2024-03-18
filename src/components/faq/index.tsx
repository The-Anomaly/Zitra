import * as React from "react";
import styles from "./styles.module.css";
import { MinusIcon, PlusIcon } from "assets";
import Select from "react-select";

interface FAQITemProps extends FAQListProp {
  active: number;
  state: number;
  changeActive: (state: number) => void;
}

interface FAQListProp {
  question: string;
  answer: any;
}

const FAQItem: React.FC<FAQITemProps> = ({
  active,
  state,
  changeActive,
  question,
  answer,
}) => {
  const contentEl = React.useRef<HTMLDivElement>(null);
  return (
    <div
      className={`${styles.faqItem} ${
        active === state ? styles.activeItem : styles.inactiveItem
      }`}
    >
      <button
        onClick={() => changeActive(active === state ? -1 : state)}
        className={styles.faqBtn}
      >
        <span>{question}</span>{" "}
        {state === active ? <MinusIcon /> : <PlusIcon />}
      </button>
      <div
        ref={contentEl}
        className={styles.faqBody}
        style={
          active === state && contentEl.current
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div>{answer}</div>
      </div>
    </div>
  );
};

const FAQUI = () => {
  const [active, setActive] = React.useState(-1);
  const [view, setView] = React.useState(1);

  const loanFaqs: FAQListProp[] = [
    {
      question: "How do I know I am eligible for a loan?",
      answer: (
        <>
          Be between ages 21 - 55 years Must Earn 80k and above <br />
          Must be a confirmed staff for over six(6) months <br />
          Must have satisfactory credit history
        </>
      ),
    },
    {
      question: "Do I need to visit the office to get a loan?",
      answer: `No, you don’t. a relationship manager can handle the loan process from any of our offices`,
    },
    {
      question: "What documents are required to get a loan?",
      answer: (
        <>
          Fully completed Loan Application Form (attached) <br />
          Six(6) months verified bank statement from salary account <br />
          Photo copy of work place ID card <br />
          Valid means of ID (any of Int’l passport, Driver’s License, Nat. Id or
          Voter’s card)
        </>
      ),
    },
    {
      question: "How do I know that my loan request has been approved?",
      answer: `Your relationship manager will keep you informed`,
    },
    {
      question: "What is the interest rate on Zitra investments Loans?",
      answer: `Reach out to us on info@zitrainvestments.com or call 02017002801 so a relationship manager can contact you.`,
    },
    {
      question: "How do I repay my loan?",
      answer: `Your loan repayment can be made either through the Remita channel or via cheques`,
    },
    {
      question: "How long does it take to complete a loan application?",
      answer: `It takes 24 – 48 hours`,
    },
    {
      question: "How much can I borrow and for how long?",
      answer: `A minimum of 200 thousand naira, for a 3-month tenor and you can get as high as 5million naira for a 12-month tenor`,
    },
    {
      question: "Can a loan application be rejected?",
      answer: `Yes it can, if you don’t meet the requirements after the credit check`,
    },
    {
      question: "Can I extend my loan tenure?",
      answer: `Your loan tenor can be extended if you apply for a top up`,
    },
    {
      question: "Can I have more than one loan running at a time?",
      answer: `No, you cannot, and this is for the benefit of our customers, so repayment does not get overwhelming.`,
    },
    {
      question: "After a loan repayment when can I apply for another loan?",
      answer: `You can re-apply for a loan immediately after liquidation`,
    },
    {
      question: "Does Zitra Investments require a credit check?",
      answer: `Yes, we do, to know if you are eligible for a loan.`,
    },
    {
      question:
        "Is it possible to pay back an outstanding loan before the loan tenure is due?",
      answer: `Most definitely`,
    },
    {
      question: "How do I check my loan balance and due date?",
      answer: `The due date of your loan is on the offer letter, and you can also always reach out to your relationship manager`,
    },
  ];

  const investmentFaqs: FAQListProp[] = [
    {
      question: "How much can I invest?",
      answer: `You can start with a minimum of 100 thousand naira`,
    },
    {
      question: "How do I start investing?",
      answer: `Reach out to us on info@zitrainvestments.com or call 02017002801 so a relationship manager can contact you.`,
    },
    {
      question: "What are the investment products Zitra Investments has?",
      answer: `We currently offer Fixed deposits and savings.`,
    },
    {
      question:
        " If I have need for urgent cash, is it possible to liquidate and get my funds?",
      answer: `Yes, it is possible but there will be a penal charge on your interest`,
    },
    {
      question: "How can I get my interest?",
      answer: `The interest will be paid into your account, it can be either an upfront payment, upon maturity and it can also be structured to how you want it`,
    },
  ];

  const generalFaqs: FAQListProp[] = [
    {
      question:
        "Can I call a representative or visit the office to ask questions?",
      answer: `Yes, you can, reach out to us on info@zitrainvestments.com or call 01700280, or visit our office at D59 Landbridge avenue, Oniru Victoria Island.`,
    },
    {
      question: "What license do you operate with?",
      answer: `We operate with a SEC licence as a funds and portfolio manager`,
    },
    {
      question: "Are there other charges that I should be aware of?",
      answer: `There are no hidden charges.`,
    },
    {
      question: "Are my details safe with you?",
      answer: `Your personal information is safe with Zitra Investments, and we also have a team of highly skilled professionals`,
    },
    {
      question: "Why do you need my BVN?",
      answer: `Your BVN is required to run a credit check`,
    },
    {
      question: "Does Zitra Investments have an office outside of Lagos?",
      answer: `Currently we do not have any offices outside Lagos`,
    },
    {
      question: "What is a utility bill and what type do you accept?",
      answer: `A utility bill is a monthly statement of the amount a household or business owes for essential services or utilities. We accept electricity bills, and you can also use a proof of residence.`,
    },
    {
      question: "Who should I contact to submit a complaint?",
      answer: `Please send an email info@zitrainvestments.com or call 02017002801 and we will take it from there.`,
    },
  ];

  const faqs: FAQListProp[] =
    view === 1
      ? loanFaqs
      : view === 2
      ? investmentFaqs
      : view === 3
      ? generalFaqs
      : [];

  const viewOptions = [
    {
      label: "Questions about LOANS",
      value: 1,
    },
    {
      label: "Questions about INVESTMENT",
      value: 2,
    },
    {
      label: "General Questions",
      value: 3,
    },
  ];
  return (
    <>
      <section className={`container ${styles.introSec}`}>
        <p className={styles.tag}>FAQs</p>
        <h1 className={styles.ttl1}>Frequently Asked Questions</h1>
        <p className={styles.txt1}>
          Need something cleared up? Here are our most frequently asked
          questions.
        </p>
      </section>
      <section className={`container ${styles.faqWrapper}`}>
        <div className={`${styles.faqContainer}`}>
          <div className={styles.faqCtrl}>
            <span
              className={view === 1 ? styles.activeFaqView : ""}
              onClick={() => setView(1)}
            >
              Questions about LOANS
            </span>
            <span
              className={view === 2 ? styles.activeFaqView : ""}
              onClick={() => setView(2)}
            >
              Questions about INVESTMENT
            </span>
            <span
              className={view === 3 ? styles.activeFaqView : ""}
              onClick={() => setView(3)}
            >
              General Questions
            </span>
          </div>
          <div className={styles.faqCtrlMobile}>
            <Select
              onChange={(x: any) => setView(x.value)}
              placeholder={""}
              className={`${styles.select}`}
              classNamePrefix="formSelect"
              name={"faqView"}
              options={viewOptions}
              value={viewOptions.find((item) => item.value === view)}
            />
          </div>
          <div className={styles.faqList}>
            {faqs.map((item, index) => (
              <FAQItem
                {...item}
                key={index}
                state={index}
                active={active}
                changeActive={(x) => setActive(x)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { FAQUI };

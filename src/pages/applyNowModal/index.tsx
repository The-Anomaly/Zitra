import axios from "axios";
import { ApplyNowUI, Preloader, Toast } from "components";
import { MAILJET_API_KEY, MAILJET_SECRET_KEY } from "config";
import * as React from "react";

interface ApplyProps {
  show: boolean;
  closeModal: () => void;
}

const ApplyNow: React.FC<ApplyProps> = ({ show, closeModal }) => {
  const [clear, setClear] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [toast, setToast] = React.useState({
    show: false,
    type: false,
    title: "",
    text: "",
  });
  const sendEmail = (data) => {
    setLoading(true);
    axios
      .post(
        "https://anomaly-mailer.netlify.app/.netlify/functions/server/mailjet",
        {
          messages: [
            {
              From: {
                Email: "zenna@zitrainvestments.com",
                Name: "Zenna",
              },
              To: [
                {
                  Email: "zenna@zitrainvestments.com",
                  Name: "Zenna",
                },
              ],
              Subject: "New Application Submission from zitrainvestments.com",
              TextPart: "My first Mailjet email",
              HTMLPart: `<h3>Hello Zitra Admin,</h3>
            <p style="font-size:14px">A new application request has been submitted on your website. The details are below:</p>
            <ul style="font-size:14px">
            <li>First name: <b>${data.firstName}</b></li>
            <li>Last name: <b>${data.lastName}</b></li>
            <li>Email address: <b>${data.email}</b></li>
            <li>Phone number: <b>${data.phone}</b></li>
            </ul>
            Best regards.
          `,
              CustomID: "AppGettingStartedTest",
            },
          ],
        },
        {
          headers: {
            "private-key": MAILJET_API_KEY,
            "secret-key": MAILJET_SECRET_KEY,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setClear(!clear);
          closeModal();
          setToast({
            show: true,
            type: true,
            title: "Great",
            text: res.data.message,
          });
          console.log(res);
        }
      })
      .catch((err) => {
        setToast({
          show: true,
          type: false,
          title: "Error",
          text: err.response.data.message,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Preloader loading={loading} />
      <Toast
        {...toast}
        closeModal={() => setToast({ ...toast, show: false })}
      />
      <ApplyNowUI
        show={show}
        closeModal={closeModal}
        submit={(data) => sendEmail(data)}
        clearForm={clear}
      />
    </>
  );
};

export { ApplyNow };

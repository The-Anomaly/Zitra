import { MenuClose } from "assets";
import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { useOutsideAlerter } from "helpers";
import Select from "react-select";
import {
  optionType,
  optionTypeSchema,
  locationOptions,
  smallBusinesLoanOptions,
} from "utils";

export interface SmallBusinessData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  businessType: string;
  loanType: optionType;
}

const initialValues: SmallBusinessData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  businessType: "",
  loanType: {
    label: "",
    value: "",
  },
};

const applySchema = yup
  .object({
    phone: yup
      .string()
      .required("Required")
      .min(10, "Enter a valid phone number")
      .matches(/^[0-9]+$/, "Phone number can only contain numbers"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Enter a valid email").required("Required"),
    businessType: yup.string().required("Required"),
    loanType: optionTypeSchema,
  })
  .required();

interface ApplyProps {
  show: boolean;
  closeModal: () => void;
  submit: (data: SmallBusinessData) => void;
  clearForm: boolean;
}

const LoanFormSmallBusinessUI: React.FC<ApplyProps> = ({
  show,
  closeModal,
  submit,
  clearForm,
}) => {
  const modalBody = React.useRef(null);
  useOutsideAlerter(modalBody, closeModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<SmallBusinessData>({
    resolver: yupResolver(applySchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<SmallBusinessData> = (data) => submit(data);

  React.useEffect(() => {
    reset();
  }, [clearForm]);

  if (!show) return null;

  return (
    <aside className={styles.dialog} role={"dialog"}>
      <div ref={modalBody} className={styles.body}>
        <MenuClose
          onClick={closeModal}
          className={styles.closeBtn}
          role="button"
        />
        <p className={styles.tag}>Lets get you started</p>
        <h1 className={styles.ttl}>PROVIDE US WITH YOUR DETAILS</h1>
        <p className={styles.txt}>... we will get to you in a snap!</p>
        <form className={styles.contactForm}>
          <div className={`${styles.inputWrap} ${styles.halfWidth}`}>
            <label>First name</label>
            <input
              type={"text"}
              {...register("firstName", {
                required: true,
              })}
            />
            {errors.firstName?.message ? (
              <p className={styles.errorMessage}>{errors.firstName?.message}</p>
            ) : (
              ""
            )}
          </div>
          <div className={`${styles.inputWrap} ${styles.halfWidth}`}>
            <label>Last name</label>
            <input
              type={"text"}
              {...register("lastName", {
                required: true,
              })}
            />
            {errors.lastName?.message ? (
              <p className={styles.errorMessage}>{errors.lastName?.message}</p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.inputWrap}>
            <label>Phone number</label>
            <input
              type={"tel"}
              {...register("phone", {
                required: true,
              })}
            />
            {errors.phone?.message ? (
              <p className={styles.errorMessage}>{errors.phone?.message}</p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.inputWrap}>
            <label>Email Address</label>
            <input
              type={"text"}
              {...register("email", {
                required: true,
              })}
            />
            {errors.email?.message ? (
              <p className={styles.errorMessage}>{errors.email?.message}</p>
            ) : (
              ""
            )}
          </div>
          <div
            className={`${styles.inputWrap}`}
          >
            <label>Type of Business</label>
            <input
              type={"text"}
              {...register("businessType", {
                required: true,
              })}
            />
            {errors.businessType?.message ? (
              <p className={styles.errorMessage}>
                {errors.businessType?.message}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={`${styles.inputWrap}`}>
            <label>Preferred Option</label>
            <Select
              onChange={(x: any) => setValue("loanType", x)}
              placeholder={"Select your preferred option"}
              className={`${styles.select}`}
              classNamePrefix="formSelect"
              name={"loanType"}
              options={smallBusinesLoanOptions}
              value={watch("loanType").value ? watch("loanType") : null}
            />
            {!watch("loanType").value && errors.loanType?.value?.message ? (
              <p className={styles.errorMessage}>
                {errors.loanType.value?.message}
              </p>
            ) : (
              ""
            )}
          </div>

          <Button
            className={styles.contactBtn}
            onClick={handleSubmit(onSubmit)}
          >
            Get started
          </Button>
        </form>
      </div>
    </aside>
  );
};

export { LoanFormSmallBusinessUI };

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
  salaryRangeOptions,
  locationOptions,
  optionType,
  optionTypeSchema,
} from "utils";

export interface LoanData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  bvn: string;
  salaryRange: optionType;
  location: optionType;
}

const initialValues: LoanData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  bvn: "",
  salaryRange: {
    label: "",
    value: "",
  },
  location: {
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
    bvn: yup.string().required("Required"),
    salaryRange: optionTypeSchema,
    location: optionTypeSchema,
  })
  .required();

interface ApplyProps {
  show: boolean;
  closeModal: () => void;
  submit: (data: LoanData) => void;
  clearForm: boolean;
}

const LoanFormUI: React.FC<ApplyProps> = ({
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
  } = useForm<LoanData>({
    resolver: yupResolver(applySchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<LoanData> = (data) => submit(data);

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
            className={`${styles.inputWrap} ${styles.halfWidth} ${styles.fullWidthMobile}`}
          >
            <label>BVN</label>
            <input
              type={"number"}
              {...register("bvn", {
                required: true,
              })}
            />
            {errors.bvn?.message ? (
              <p className={styles.errorMessage}>{errors.bvn?.message}</p>
            ) : (
              ""
            )}
          </div>

          <div
            className={`${styles.inputWrap} ${styles.halfWidth} ${styles.fullWidthMobile}`}
          >
            <label>Salary range</label>
            <Select
              onChange={(x: any) => setValue("salaryRange", x)}
              placeholder={"Select range"}
              className={`${styles.select}`}
              classNamePrefix="formSelect"
              name={"salaryRange"}
              options={salaryRangeOptions}
              value={watch("salaryRange").value ? watch("salaryRange") : null}
            />
            {!watch("salaryRange").value &&
            errors.salaryRange?.value?.message ? (
              <p className={styles.errorMessage}>
                {errors.salaryRange.value?.message}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={`${styles.inputWrap}`}>
            <label>Location</label>
            <Select
              onChange={(x: any) => setValue("location", x)}
              placeholder={"Select your current location"}
              className={`${styles.select}`}
              classNamePrefix="formSelect"
              name={"location"}
              options={locationOptions}
              value={watch("location").value ? watch("location") : null}
            />
            {!watch("location").value && errors.location?.value?.message ? (
              <p className={styles.errorMessage}>
                {errors.location.value?.message}
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

export { LoanFormUI };

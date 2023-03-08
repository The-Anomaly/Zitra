import { MenuClose } from "assets";
import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { useOutsideAlerter } from "helpers";
import Select from "react-select";

interface optionType {
  label: string;
  value: string;
}

const locationOptions: optionType[] = [
  {
    label: "Alimosho",
    value: "Alimosho",
  },
  {
    label: "Ajeromi-Ifelodun",
    value: "Ajeromi-Ifelodun",
  },
  {
    label: "Kosofe",
    value: "Kosofe",
  },
  {
    label: "Mushin",
    value: "Mushin",
  },
  {
    label: "Ojo",
    value: "Ojo",
  },
  {
    label: "Oshodi-Isolo",
    value: "Oshodi-Isolo",
  },
  {
    label: "Ikorodu",
    value: "Ikorodu",
  },
  {
    label: "Surulere",
    value: "Surulere",
  },
  {
    label: "Agege",
    value: "Agege",
  },
  {
    label: "Ifako-Ijaiye",
    value: "Ifako-Ijaiye",
  },
  {
    label: "Somolu",
    value: "Somolu",
  },
  {
    label: "Amuwo-Odofin",
    value: "Amuwo-Odofin",
  },
  {
    label: "Lagos Mainland",
    value: "Lagos Mainland",
  },
  {
    label: "Ikeja",
    value: "Ikeja",
  },
  {
    label: "Eti-Osa",
    value: "Eti-Osa",
  },
  {
    label: "Badagry",
    value: "Badagry",
  },
  {
    label: "Apapa",
    value: "Apapa",
  },
  {
    label: "Lagos Island",
    value: "Lagos Island",
  },
  {
    label: "Epe",
    value: "Epe",
  },
  {
    label: "Ibeju-Lekki",
    value: "Ibeju-Lekki",
  },
];

interface ApplyData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  bvn: string;
  businessType: string;
  location: optionType;
}

const initialValues: ApplyData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  bvn: "",
  businessType: "",
  location: {
    label: "",
    value: "",
  },
};

const optionTypeSchema = yup.object({
  label: yup.string().required("Required"),
  value: yup.string().required("Required"),
});

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
    businessType: yup.string().required("Required"),
    location: optionTypeSchema,
  })
  .required();

interface ApplyProps {
  show: boolean;
  closeModal: () => void;
  submit: (data: ApplyData) => void;
  clearForm: boolean;
}

const LoanFormConfamUI: React.FC<ApplyProps> = ({
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
  } = useForm<ApplyData>({
    resolver: yupResolver(applySchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<ApplyData> = (data) => submit(data);

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
          <div className={`${styles.inputWrap} ${styles.halfWidth} ${styles.fullWidthMobile}`}>
            <label>BVN/NIN/LASSRA</label>
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

          <div className={`${styles.inputWrap} ${styles.halfWidth} ${styles.fullWidthMobile}`}>
            <label>Type of Business</label>
            <input
              type={"number"}
              {...register("businessType", {
                required: true,
              })}
            />
            {errors.businessType?.message ? (
              <p className={styles.errorMessage}>{errors.businessType?.message}</p>
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

export { LoanFormConfamUI };

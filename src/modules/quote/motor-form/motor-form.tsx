import * as React from "react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Answers, Question, QuestionOption } from "../../../constants/types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import cn from "classnames";
import styles from "./motor-form.module.scss";
import Button from "src/components/button/button";

import {
  overhaulOptions,
  overhaulTable,
  reWindingTable,
  rewindOptions,
} from "src/data/data";
import useUpload from "../../../hooks/useUpload";
import Upload from "src/components/upload/upload";

interface MotorFormProps {
  onSubmit: (total: number, values: any, file: any) => void;
}

const poles = ["2/4 Pole", "6 Pole", "8 Pole"];

const polesMap = {
  [poles[0]]: "twoPole",
  [poles[1]]: "sixPole",
  [poles[2]]: "eightPole",
};

enum ActiveMenu {
  OVERHAULING,
  REWINDING,
}

const initialState = {
  companyName: "",
  kw: "",
  email: "",
  [ActiveMenu.OVERHAULING]: [overhaulOptions[0].text, overhaulOptions[1].text],
  [ActiveMenu.REWINDING]: [overhaulOptions[0].text],
  pole: poles[0],
  file: "",
  attachNamePlate: "",
};

const menu = [
  {
    name: "Overhauling",
    key: ActiveMenu.OVERHAULING,
    options: overhaulOptions,
  },
  {
    name: "Re-Winding",
    key: ActiveMenu.REWINDING,
    options: rewindOptions,
  },
];

export default function MotorForm(props: MotorFormProps) {
  const [answers, setAnswers] = React.useState(initialState);
  const [poleVisible, setPole] = React.useState(false);
  const [namePlate, setNamePlate] = React.useState(null);
  const [active, setActive] = React.useState(ActiveMenu.OVERHAULING);

  const setValRef = React.useRef<any>(null);

  useEffect(() => {}, []);

  interface QuestionMap {
    [key: string]: Question;
  }

  const handleValidation = (values: Answers) => {
    let errors: { [key: string]: string } = {};
    const isFileRequired = !!values.attachNamePlate?.length;
    Object.entries(values).map(([id, ans]) => {
      //   if (id === "comp" && ans === "") return;
      if (id === "file" && ans === "" && isFileRequired) {
        if (
          true
          // parseInt(id) === ActiveMenu.OVERHAULING
          // ans.includes("Attach Name Plate") &&
          // !values["file"]
        ) {
          errors[id] = "Required Field";
          return;
        }
      }
      if (
        ((id === "kw" || id === "email") && ans === "") ||
        ans === null ||
        ans === undefined
      ) {
        errors[id] = "Required field";
        return;
      }

      switch (id) {
        case "email": {
          if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
              typeof ans === "string" ? ans : ""
            )
          ) {
            errors[id] = "Invalid email address";
          }
        }
      }
    });

    return errors;
  };

  const getNearestPrice = (arr: string[], val: number) => {
    for (let i = 0; i < arr.length; i++) {
      if (val < parseFloat(arr[i])) {
        // debugger;
        return arr[i - 1 || 0];
      }
    }
    return arr[arr.length - 1];
  };

  const sortNumericKeys = (obj: any) => {
    const temp = Object.keys(obj).sort((one, two) => {
      let a = parseFloat(one);
      let b = parseFloat(two);

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else return 0;
    });
    // debugger;
    return temp;
  };

  const handleSubmit = (values: any) => {
    let total = 0;
    const urlParams = new URLSearchParams(window.location.search);

    const service = urlParams.get("service");

    if (values.attachNamePlate.length) {
      total += 100;
    }

    const kw = parseFloat(values.kw);

    if (active === ActiveMenu.OVERHAULING) {
      total += values[0].length * 100;
      const keys = sortNumericKeys(overhaulTable);

      const nearest = getNearestPrice(keys, kw);
      total += overhaulTable[nearest].overhaulingPrice;
    } else if (active === ActiveMenu.REWINDING) {
      total += values[1].length * 100;
      const keys = sortNumericKeys(reWindingTable);

      const nearest = getNearestPrice(keys, kw);

      total += reWindingTable[nearest][polesMap[values.pole]].price;
    }

    // sending email
    const templateParams = {
      from_name: values.companyName,
      service_name: service,
      cost: `${total} SGD`,
      selected_items_0: values[0].length ? values[0].join(",") : 'No items',
      selected_items_1: values[1].length ? values[1].join(","): 'No items',
      to_cc: values.email,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
    );

    props.onSubmit(total, values, uploader.value);
  };

  const onFileUpload = (f: File) => {
    setValRef.current("file", f?.name || "");
  };
  const uploader = useUpload(
    { accept: "img/*", id: "o1i932fnou" },
    onFileUpload
  );

  setValRef.current = null;

  return (
    <Formik
      onSubmit={handleSubmit}
      validate={handleValidation}
      initialValues={answers}
      enableReinitialize={true}
      // validateOnChange={true}
    >
      {({ isValid, status, ...p }) => {
        setValRef.current = p.setFieldValue;
        const isFormValid = isValid || p.submitCount === 0;
        const isAttachNameSelected = !!p.values.attachNamePlate?.length;

        return (
          <Form>
            <div className={cn(styles.item, styles.textInput)}>
              <label className={styles.label} htmlFor={"companyName"}>
                Company Name
              </label>

              <Field id="companyName" name="companyName" />

              <ErrorMessage name="companyName" component="strong" />
            </div>
            <div className={cn(styles.item, styles.textInput)}>
              <label className={styles.label} htmlFor={"companyName"}>
                KW
              </label>

              <Field id="kw" name="kw" type="number" />

              <ErrorMessage name="kw" component="strong" />
            </div>
            <div className={cn(styles.item, styles.textInput)}>
              <label className={styles.label} htmlFor={"companyName"}>
                Email
              </label>

              <Field id="email" name="email" type="email" />

              <ErrorMessage name="email" component="strong" />
            </div>
            <div className={cn(styles.item, styles.checkbox, styles.menu)}>
              <div className={styles.header}>
                {menu.map((i) => {
                  const isActive = i.key === active;
                  const CS = {
                    [styles.active]: isActive,
                  };
                  return (
                    <section
                      key={`header${i.key}`}
                      className={cn(styles.headerItem, CS)}
                      onClick={() => setActive(i.key)}
                    >
                      {i.name}
                    </section>
                  );
                })}
              </div>
              {active === ActiveMenu.REWINDING && (
                <div className={cn(styles.radioGroup)}>
                  {poles.map((p) => (
                    <div key={p} className={styles.radio}>
                      <label htmlFor={p}>
                        <Field id={p} type="radio" name="pole" value={p} />
                        <span>{p}</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}
              {menu
                .filter(({ key }) => key === active)
                .map((item) => {
                  return (
                    <div
                      className={styles.options}
                      role="group"
                      aria-labelledby="checkbox-group"
                    >
                      {item.options?.map((opt) => {
                        return (
                          <label
                            className={styles.checkboxContainer}
                            key={opt.id}
                          >
                            <Field
                              id={opt.id}
                              disabled={opt.readOnly}
                              type="checkbox"
                              name={item.key}
                              value={opt.text}
                            />
                            <span className={styles.val}>{opt.text}</span>
                            <span className={styles.check}></span>
                          </label>
                        );
                      })}

                      <label className={styles.checkboxContainer}>
                        <Field
                          id={"1i9fjn"}
                          type="checkbox"
                          name={"attachNamePlate"}
                          value="attachNamePlate"
                        />
                        <span className={styles.val}>Attach Name Plate</span>
                        <span className={styles.check}></span>
                      </label>
                    </div>
                  );
                })}
            </div>

            {isAttachNameSelected && (
              <div className={styles.upload}>
                <Upload name="file" {...uploader} />
                <Button
                  onClick={uploader.trigger}
                  htmlType="button"
                  type="outline"
                >
                  Upload A File
                </Button>
                {!!uploader?.value && <b>{uploader.value.name}</b>}
                <ErrorMessage name="file" component="strong" />
              </div>
            )}

            <div className={styles.footer}>
              <Button htmlType="submit" disabled={!isFormValid} type="submit">
                Costing
              </Button>
              {!isFormValid && <p>Invalid Form</p>}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

import * as React from "react";
import { useState, useEffect } from "react";
import { Answers, Question, QuestionOption } from "../../../constants/types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import cn from "classnames";
import styles from "./form-builder.module.scss";
import Button from "src/components/button/button";

interface FooterProps {
  isValid: boolean;
}
interface FormBuilderProps {
  questions: Question[];
  answers: Answers;
  onSubmit: (ans: Answers) => void;
  footer?: (props: FooterProps) => JSX.Element;
}

interface InputProps {
  question: Question;
  value: string | string[];
  //   options: QuestionOption;
  // onChange: (key: string | number, val: string) => void;
}

const TextInput = (props: InputProps) => {
  return (
    <div className={cn(styles.item, styles.textInput)}>
      <label className={styles.label} htmlFor={props.question.id as string}>
        {props.question.question}
      </label>
      {props.question.type !== "textarea" && (
        <Field
          id={props.question.id}
          type={props.question.type}
          name={props.question.id}
          placeholder={props.question.placeholder || ""}
        />
      )}
      {props.question.type === "textarea" && (
        <Field
        component="textarea"
          id={props.question.id as string}
          name={props.question.id as string}
          placeholder={props.question.placeholder || ""}
          rows={5}
        />
      )}
      <ErrorMessage name={props.question.id as string} component="strong" />
    </div>
  );
};

const Checkbox = (props: InputProps) => {
  return (
    <div className={cn(styles.item, styles.checkbox)}>
      <label className={styles.label}>{props.question.question}</label>
      <div
        className={styles.options}
        role="group"
        aria-labelledby="checkbox-group"
      >
        {props.question.options?.map((item) => {
          return (
            <label className={styles.checkboxContainer} key={item.id}>
              <Field
                type="checkbox"
                name={props.question.id}
                value={item.text}
              />
              <span className={styles.val}>{item.text}</span>
              <span className={styles.check}></span>
            </label>
          );
        })}
      </div>
      <ErrorMessage name={props.question.id as string} component="strong" />
    </div>
  );
};
export default function FormBuilder({
  questions,
  answers,
  ...props
}: FormBuilderProps) {
  useEffect(() => {}, []);

  interface QuestionMap {
    [key: string]: Question;
  }

  // const qMap = React.useMemo((): QuestionMap => {
  //   return questions.reduce((acc: QuestionMap, val) => {
  //     acc[val.id as string] = val;
  //     return acc;
  //   }, {});
  // }, [questions]);

  const qMap = questions.reduce((acc: QuestionMap, val) => {
    acc[val.id as string] = val;
    return acc;
  }, {});

  if (!questions.length) return <h1>No Questions found</h1>;

  const handleValidation = (values: Answers) => {
    let errors: { [key: string]: string } = {};
    Object.entries(values).map(([id, ans]) => {
      const ques = qMap[id];
      if (!ques.isRequired && ans === "") return;
      if (
        (ques.isRequired && ans === "") ||
        ans === null ||
        ans === undefined
      ) {
        errors[id] = "Required field";
        return;
      }

      switch (ques.type) {
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

  const handleSubmit = (values: Answers) => {
    props.onSubmit(values);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validate={handleValidation}
      initialValues={answers}
      enableReinitialize={true}
      // validateOnChange={true}
    >
      {({ isValid, status, ...p }) => {
        return (
          <Form>
            {questions.map((q) => {
              switch (q.type) {
                case "text":
                case "email":
                case "number":
                case "tel":
                case "textarea":
                  return (
                    <TextInput question={q} value={answers?.[q.id] || ""} />
                  );

                case "checkbox":
                  return (
                    <Checkbox question={q} value={answers?.[q.id] || ""} />
                  );
                default:
                  return "UNKNOWN_INPUT_TYPE";
              }
            })}
            {!!props.footer &&
              props.footer({ isValid: isValid || p.submitCount === 0 })}
          </Form>
        );
      }}
    </Formik>
  );
}

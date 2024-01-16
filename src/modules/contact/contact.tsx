import * as React from "react";
import { useState, useEffect } from "react";
import cn from "classnames";
import Wrapper from "src/components/wrapper/wrapper";
import styles from "./contact.module.scss";
import Button from "../../components/button/button";
import FormBuilder from "../quote/form-builder/form-builder";
import { contactUs } from "src/data/data";
import { Answers, Question } from "../../constants/types";

interface ContactProps {
  onNext: () => void;
  extraData?: {
    answers: Answers;
    questions: Question[];
  };
}

export default function Contact(props: ContactProps) {
  const [answers, updateAnswers] = useState<Answers>({
    email: "",
    message: "",
  });

  const handleSubmit = (vals: Answers) => {
    let payload = {
      email: vals.email,
      message: vals.message,
    };
    if ("extraData" in props) {
      // add extra info in payload
    }
    //   send contact info / form info to backend
    props.onNext();
  };
  return (
    <Wrapper outerClass={styles.outer} className={styles.wrapper}>
      <FormBuilder
        questions={contactUs}
        onSubmit={handleSubmit}
        answers={answers}
        footer={({ isValid }) => {
          return (
                  <div className={styles.footer}>
            <Button type="submit" htmlType="submit" disabled={!isValid}>
              Send
            </Button>
            </div>
          );
        }}
      />
    </Wrapper>
  );
}

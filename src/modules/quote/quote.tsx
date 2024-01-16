import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { getServiceData, getServiceDetailsForQuote } from "src/data/data";
import { ServiceDetails } from "src/constants/types";
import { Answers } from "../../constants/types";
import FormBuilder from "./form-builder/form-builder";
import Wrapper from "src/components/wrapper/wrapper";
import styles from "./quote.module.scss";
import Button from "src/components/button/button";
import Contact from "../contact/contact";
import Success from "../contact/success/success";
import MotorForm from "./motor-form/motor-form";

let STATES = {
  LOADING: "LOADING",
  FORM: "FORM",
  COSTS: "COSTS",
  CONTACT: "CONTACT",
  SUCCESS: "SUCCESS",
  NOT_FOUND: "NOT_FOUND",
};

export default function Quote() {
  const router = useRouter();
  const [state, setState] = useState(STATES.LOADING);
  const [data, updateData] = useState<ServiceDetails>();
  const [answers, updateAnswers] = useState<Answers>({});

  const getCost = (total: number, values: any, file: any) => {
    
    router.push({
      pathname: "/thankyou",
      query: { cost: total }
    })
  };

  const init = () => {
    const urlParams = new URLSearchParams(window.location.search);

    const slug = urlParams.get("service");
    if (typeof slug === "string") {
      getServiceDetailsForQuote(slug).then((res: ServiceDetails[]) => {
        if (res.length) {
          const service = res[0];
          const q = service?.questions || [];
          updateData({
            ...service,
            questions: q,
          });

          //   initializing an empty form
          updateAnswers(
            q.reduce((a: Answers, v) => {
              a[v.id as string] = "";
              return a;
            }, {})
          );
          //   debugger;
          if (service.isQuotable) {
            setState(STATES.FORM);
          } else {
            setState(STATES.CONTACT);
          }
        } else {
          setState(STATES.NOT_FOUND);
        }
      });
    } else {
      //     no slug
      setState(STATES.CONTACT);
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [state]);
  return (
    <>
      {/* {state === STATES.LOADING && <h1>Loading</h1>} */}
      {state === STATES.FORM && (
        <Wrapper className={styles.form}>
          <h1 className={cn("h2", styles.head)}>
            <u>Generate Quote</u>
          </h1>
          <MotorForm
            onSubmit={getCost}
            // onChange={handleFormChange}
          />
        </Wrapper>
      )}
      {state === STATES.CONTACT && (
        <Contact
          onNext={() => setState(STATES.SUCCESS)}
          extraData={
            data?.isQuotable
              ? { answers, questions: data.questions || [] }
              : undefined
          }
        />
      )}
      {state === STATES.SUCCESS && <Success />}
    </>
  );
}

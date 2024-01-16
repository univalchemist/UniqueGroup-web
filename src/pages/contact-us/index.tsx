import Layout from "src/components/layout/layout";
import { useState } from "react";
import Success from "src/modules/contact/success/success";
import Contact from "src/modules/contact/contact";
import Wrapper from "src/components/wrapper/wrapper";

// not in use
const ContactUs = () => {
  const [isSubmitted, toggleSubmit] = useState(false);
  return (
    <Layout>
      {!isSubmitted && <Contact onNext={() => toggleSubmit(true)} />}
      {isSubmitted && <Success />}
    </Layout>
  );
};

export default ContactUs;

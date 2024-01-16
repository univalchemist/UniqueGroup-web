import Script from "next/script";
import Layout from "src/components/layout/layout";
import ThankyouModule from "src/modules/thankyou";

const ThankyouPage = () => {
  return (
    <Layout>
      <Script id="thankyou-event">
        {`window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'event': 'form_complete',
            'enhanced_conversion_data': {
              "email": "YourEmailVariable"
            }
          });`}
      </Script>
      <ThankyouModule />
    </Layout>
  );
};

export default ThankyouPage;

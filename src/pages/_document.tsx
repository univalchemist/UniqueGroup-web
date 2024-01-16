import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;&display=optional"
              rel="stylesheet"
            />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-955757398"></script>
        <script>
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'AW-955757398');`
          }
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script>
          {
            `window.addEventListener('load', function() {

              if (document.location.href.includes('/thankyou')) {
                gtag('event', 'conversion', {
                  'send_to': 'AW-955757398/cf-yCI2HyIMYENbm3scD'
                });
              }
          
              document.addEventListener('click', function(e) {
          
                if (e.target.closest('[href*="tel:"]')) {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-955757398/CsyJCJOqx4QYENbm3scD'
                  });
                }
          
                if (e.target.closest('[href*="whatsapp:"]')) {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-955757398/_qaaCJaqx4QYENbm3scD'
                  });
                }
          
              }, {
                capture: true
              });
          
            })`
          }
        </script>
      </body>
    </Html>
  );
}

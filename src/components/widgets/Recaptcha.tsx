import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import Contact from "~/components/widgets/Contact.tsx";

export default function Recaptcha() {
  return (
    <GoogleReCaptchaProvider
      scriptProps={{
        async: true, // optional, default to false,
      }}
      useEnterprise={true}
      reCaptchaKey={import.meta.env.PUBLIC_RECAPTCHA_KEY}>
      <Contact />
    </GoogleReCaptchaProvider>
  )
}

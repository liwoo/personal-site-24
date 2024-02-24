import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import Contact from "~/components/widgets/Contact.tsx";
import {Toaster} from "~/components/ui/toaster.tsx";

export default function ContactWithRecaptcha() {
  return (
    <GoogleReCaptchaProvider
      scriptProps={{
        async: true, // optional, default to false,
      }}
      useEnterprise={true}
      reCaptchaKey={import.meta.env.PUBLIC_RECAPTCHA_KEY}>
      <Contact />
      <Toaster />
    </GoogleReCaptchaProvider>
  )
}

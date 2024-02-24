import {GoogleReCaptcha, GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {Toaster} from "~/components/ui/toaster.tsx";
import type {DrowpdownOption, Input} from "~/types";
import clsx from "clsx";
import React, {type FormEvent, useCallback, useRef, useState} from "react";
import {toast} from "~/components/ui/use-toast.tsx";

interface SignInProps {
  inputs: Input[];
  buttonLabel: string;
  inline?: boolean;
}

function SignUp({inputs, buttonLabel, inline = true}: SignInProps) {

  const formRef = useRef<HTMLFormElement | undefined>();

  const [token, setToken] = useState<string>();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    const form = new FormData(formRef.current);
    const email = form.get('email');
    const category = form.get('category');
    const name = form.get('name');
    try {
      const response = await fetch('/signup-form', {
        method: "POST",
        body: JSON.stringify({email, category, name, token})
      });

      if (response.status === 200) {
        toast({
          variant: "success",
          title: "Signed Up! 🎉",
          description: "You have successfully signed up for my newsletter. You will receive an email shortly to confirm your subscription. Thank you! 🙌",
        })
        clearForm();
      } else {
        toast({
          variant: "destructive",
          title: "Hmmm 🤔",
          description: "It seems like something went wrong. Please try again or reach out to me directly.",
        })
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while submitting the form. Please try again later.",
      })
    } finally {
      setFormLoading(false);
      setRefreshReCaptcha(true);
    }
  }

  const onVerify = useCallback((token: string) => {
    setToken(token);
  }, []);

  const clearForm = () => {
    formRef.current?.reset();
  }

  return (
    <>
      <GoogleReCaptcha
        onVerify={onVerify}
        refreshReCaptcha={refreshReCaptcha}
      />
      <form ref={formRef} className={"flex flex-col gap-y-2"} onSubmit={onSubmit}>
        <div className={clsx(formLoading ? "opacity-20" : "","grid grid-cols-2 gap-4 items-center", inputs ? `md:grid-cols-${inputs.length + 1}` : "")}>
          {
            inputs &&
            inputs.map(
              ({type = 'text', name, label = '', autocomplete = 'on', placeholder = '', dropdownOptions = []}) =>
                name && (
                  <div className="w-full">
                    {label && !inline && (
                      <label htmlFor={name} className="block text-sm font-medium">
                        {label}
                      </label>
                    )}
                    {type == 'select' ? (
                      <select
                        name={name}
                        id={name}
                        required={true}
                        autoComplete={autocomplete}
                        className="form-select w-full py-2 px-4 block text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
                      >
                        {dropdownOptions.map((option: DrowpdownOption) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={type}
                        name={name}
                        required={true}
                        id={name}
                        autoComplete={autocomplete}
                        placeholder={placeholder}
                        className="py-2 px-4 block w-full text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
                      />
                    )}
                  </div>
                )
            )
          }
          {
            buttonLabel && (
              <div>
                <button type="submit" className="btn btn-primary w-full" disabled={formLoading}>
                  {buttonLabel}
                </button>
              </div>
            )
          }
        </div>
        <div className="flex items-start">
          <div className="flex">
            <input
              id="disclaimer"
              name="disclaimer"
              required={true}
              type="checkbox"
              className="cursor-pointer mt-1 p-2 block w-full text-md rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="disclaimer" className="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400">
              {"Check here if you agree with my"}<a href="/privacy"> Privacy Policy</a>
            </label>
          </div>
        </div>
      </form>
    </>
  )
}

export default function SignUptWithRecaptcha({inputs, buttonLabel}: SignInProps) {
  return (
    <GoogleReCaptchaProvider
      scriptProps={{
        async: true, // optional, default to false,
      }}
      useEnterprise={true}
      reCaptchaKey={import.meta.env.PUBLIC_RECAPTCHA_KEY}>
      <SignUp inputs={inputs} buttonLabel={buttonLabel}/>
      <Toaster/>
    </GoogleReCaptchaProvider>
  )
}

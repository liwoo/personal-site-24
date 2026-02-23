import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BH3lS_82.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { $ as $$Hero2 } from '../chunks/Hero2_DsfkZWPO.mjs';
import { $ as $$Button } from '../chunks/Button_PaYpGhrc.mjs';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { twMerge } from 'tailwind-merge';
import { u as useToast, T as Toaster } from '../chunks/toaster_CwwBNnt3.mjs';
import { clsx } from 'clsx';
import { $ as $$Headline } from '../chunks/Headline_Ww6axllZ.mjs';
export { renderers } from '../renderers.mjs';

const ResponsiveItemGrid = ({
  items,
  columns,
  defaultIcon
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  if (!isMobile) {
    return /* @__PURE__ */ jsx("div", { className: `mx-12 grid gap-8 gap-x-12 sm:gap-y-8 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : "sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2"}`, children: items.map((item, index) => /* @__PURE__ */ jsx(GridItem, { item, defaultIcon }, index)) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex transition-transform duration-300 ease-in-out",
        style: { transform: `translateX(-${currentIndex * 100}%)` },
        children: items.map((item, index) => /* @__PURE__ */ jsx("div", { className: "w-full flex-shrink-0", children: /* @__PURE__ */ jsx(GridItem, { item, defaultIcon }) }, index))
      }
    ) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: prevSlide,
        className: "absolute z-10 left-4 top-8 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg",
        "aria-label": "Previous slide",
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: nextSlide,
        className: "absolute z-10 right-4 top-8 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg",
        "aria-label": "Next slide",
        children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-4", children: items.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setCurrentIndex(index),
        className: `w-2 h-2 rounded-full ${currentIndex === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`,
        "aria-label": `Go to slide ${index + 1}`
      },
      index
    )) })
  ] });
};
const GridItem = ({ item, defaultIcon }) => {
  const { title, description, icon, callToAction } = item;
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-card p-6", children: [
    (icon || defaultIcon) && /* @__PURE__ */ jsx("span", { className: "mb-2 w-10 h-10 text-primary" }),
    /* @__PURE__ */ jsx("div", { className: "text-xl font-bold", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "text-muted mt-2", dangerouslySetInnerHTML: { __html: description } }),
    callToAction && /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("button", { className: "px-4 py-2 text-white bg-primary rounded hover:bg-primary/90", children: callToAction.text }) })
  ] });
};

function Envelope({ className = "w-5 h-5" }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: twMerge(className, "w-5 stroke-default"),
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 41 25",
      children: [
        /* @__PURE__ */ jsx("rect", { x: "1", y: "1", width: "39", height: "23", rx: "11.5", strokeWidth: "2" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            transform: "matrix(.66913 .74314 -.70808 .70613 8.861 2.122)",
            strokeWidth: "2",
            strokeLinecap: "round",
            d: "M1-1h15.227"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            transform: "matrix(-.66913 .74314 .70808 .70613 32.388 2.122)",
            strokeWidth: "2",
            strokeLinecap: "round",
            d: "M1-1h15.227"
          }
        )
      ]
    }
  );
}

const tree = {
  title: "Let's do some amazing stuff together!",
  description: "Feel free to select from any of the options below to figure out how best I can be of value to you",
  paths: {
    "General Enquiries": {
      options: [
        {
          level: 1,
          order: 1,
          title: "Contact Information",
          staggerInputs: true,
          options: [
            {
              level: 2,
              order: 1,
              title: "Your Name",
              input: {
                id: "enquirerName",
                required: false,
                inputType: "text",
                name: "enquirerName",
                placeholder: "Enter Your Name"
              }
            },
            {
              level: 2,
              order: 2,
              title: "Email Address",
              input: {
                id: "enquirerEmail",
                required: true,
                inputType: "email",
                name: "enquirerEmail",
                placeholder: "Enter Your Email Address"
              }
            }
          ]
        },
        {
          level: 1,
          order: 2,
          title: "Nature of Inquiry",
          input: {
            id: "inquiryType",
            required: true,
            inputType: "select",
            name: "inquiryType",
            options: [
              { value: "feedback", label: "Feedback" },
              { value: "question", label: "Question" },
              { value: "complaint", label: "Complaint" },
              { value: "other", label: "Other" }
            ]
          }
        },
        {
          level: 1,
          order: 3,
          title: "Message",
          input: {
            required: true,
            id: "enquirerMessage",
            inputType: "textArea",
            name: "enquirerMessage",
            placeholder: "Enter your message here"
          }
        }
      ]
    },
    "Speaking Engagement": {
      options: [
        {
          level: 1,
          order: 1,
          title: "I'm asking as",
          options: [
            {
              level: 2,
              order: 1,
              title: "School Staff",
              staggerInputs: true,
              options: [
                {
                  level: 3,
                  order: 1,
                  title: "School Staff Name",
                  input: {
                    id: "schoolStaff",
                    inputType: "text",
                    required: true,
                    name: "schoolStaffName",
                    placeholder: "Enter School Name"
                  }
                },
                {
                  level: 3,
                  order: 2,
                  title: "School Staff Email",
                  input: {
                    id: "schoolStaffEmail",
                    inputType: "email",
                    required: true,
                    name: "schoolStaffEmail",
                    placeholder: "Enter School Email"
                  }
                }
              ]
            },
            {
              level: 2,
              order: 2,
              title: "Tech Club President",
              staggerInputs: true,
              options: [
                {
                  level: 3,
                  order: 1,
                  title: "Tech Club President Name",
                  input: {
                    id: "techPresident",
                    inputType: "text",
                    required: true,
                    name: "techPresident",
                    placeholder: "Enter Tech Club President Name"
                  }
                },
                {
                  level: 3,
                  order: 2,
                  title: "Tech Club President Email",
                  input: {
                    id: "techPresidentEmail",
                    inputType: "email",
                    required: true,
                    name: "techPresidentEmail",
                    placeholder: "Enter Tech President Email"
                  }
                }
              ]
            },
            {
              level: 2,
              order: 3,
              title: "Event Organizer",
              staggerInputs: true,
              options: [
                {
                  level: 3,
                  order: 1,
                  title: "Event Organizer Name",
                  input: {
                    id: "eventOrganizer",
                    inputType: "text",
                    required: true,
                    name: "eventOrganizer",
                    placeholder: "Enter Event Organizer Name"
                  }
                },
                {
                  level: 3,
                  order: 2,
                  title: "Event Organizer Email",
                  input: {
                    id: "eventOrganizer",
                    inputType: "email",
                    required: true,
                    name: "eventOrganizer",
                    placeholder: "Enter Event Organizer Name"
                  }
                }
              ]
            }
          ]
        },
        {
          level: 1,
          order: 2,
          title: "Select a Topic",
          input: {
            id: "topicSelection",
            inputType: "select",
            required: true,
            name: "topic",
            options: [
              { "value": "ai", "label": "AI" },
              { "value": "blockchain", "label": "Blockchain" },
              { "value": "fintech", "label": "Fintech" },
              { "value": "startups", "label": "Startups" },
              { "value": "mobileDev", "label": "Mobile Development" },
              { "value": "frontend", "label": "FrontEnd" },
              { "value": "apisIntegrations", "label": "APIs and Integration" },
              { "value": "devOpsCICD", "label": "DevOps and CI/CD" },
              { "value": "automatedTesting", "label": "Automated Testing" }
            ]
          }
        },
        {
          level: 1,
          order: 3,
          title: "Preferred Date",
          staggerInputs: true,
          options: [
            {
              level: 2,
              order: 1,
              title: "Preferred Date",
              input: {
                id: "preferredDate",
                inputType: "date",
                required: true,
                name: "preferredDate",
                placeholder: "Select Preferred Date"
              }
            },
            {
              level: 2,
              order: 1,
              title: "Preferred Time",
              input: {
                id: "preferredTime",
                required: true,
                inputType: "time",
                name: "preferredTime",
                placeholder: "Select Preferred Time"
              }
            }
          ]
        },
        {
          level: 1,
          order: 4,
          title: "Additional Notes",
          input: {
            id: "additionalNotes",
            required: false,
            inputType: "textArea",
            name: "additionalNotes",
            placeholder: "Let me know if you have additional comments"
          }
        }
        // Add more top-level options as needed
      ]
    },
    "Consultancy": {
      options: [
        {
          level: 1,
          order: 1,
          title: "I'm asking as",
          options: [
            {
              level: 2,
              order: 1,
              title: "Individual with a cool idea",
              input: {
                id: "individualName",
                required: true,
                inputType: "text",
                name: "individualName",
                placeholder: "Enter Your Name"
              }
            },
            {
              level: 2,
              order: 2,
              title: "A Company Project Manager",
              input: {
                id: "companyName",
                required: true,
                inputType: "text",
                name: "companyName",
                placeholder: "Enter Company Name"
              }
            }
          ]
        },
        {
          level: 1,
          order: 2,
          title: "Help With",
          input: {
            id: "helpWith",
            inputType: "select",
            name: "helpWith",
            required: true,
            options: [
              { value: "techCoFounder", label: "A Tech Co-founder" },
              { value: "infoSystemDesign", label: "Designing an Information System" },
              { value: "websiteBuilding", label: "Building a Website" },
              { value: "mobileAppCustomBackend", label: "Building a Mobile App with a Custom Backend" },
              { value: "webAppBuilding", label: "Building a Web-based Application" },
              { value: "cloudBackedDesktopApp", label: "Building a Cloud-backed Desktop Application" },
              { value: "eCommerceSystem", label: "Building an E-Commerce System" },
              { value: "smartContract", label: "Building a Smart Contract" },
              { value: "projectRevamp", label: "Revamping an Existing Project" },
              { value: "codebaseAudit", label: "Auditing our Codebase" },
              { value: "research", label: "Conducting Research and Presenting Findings" },
              { value: "training", label: "Training a Team on an Engineering Topic" }
            ]
          }
        },
        {
          level: 1,
          order: 3,
          title: "Project Details",
          input: {
            id: "projectDetails",
            required: true,
            inputType: "textArea",
            name: "projectDetails",
            placeholder: "Tell us more about your project"
          }
        },
        {
          level: 1,
          order: 4,
          title: "Budget Range",
          staggerInputs: true,
          options: [
            {
              level: 2,
              order: 1,
              title: "Budget Start (USD)",
              input: {
                id: "budgetStart",
                required: false,
                inputType: "number",
                name: "budgetStart",
                min: 0,
                placeholder: "Budget Start"
              }
            },
            {
              level: 2,
              order: 2,
              title: "Budget End (USD)",
              input: {
                id: "budgetEnd",
                required: false,
                inputType: "number",
                name: "budgetEnd",
                min: 0,
                placeholder: "Budget End"
              }
            }
          ]
        },
        {
          level: 1,
          order: 5,
          title: "Contact Details",
          input: {
            id: "email",
            required: true,
            inputType: "email",
            name: "email",
            placeholder: "Enter your Email Here"
          }
        }
      ]
    },
    "New Career Opportunity": {
      options: [
        {
          level: 1,
          order: 1,
          title: "Recruiter Details",
          staggerInputs: true,
          options: [
            {
              level: 2,
              order: 1,
              title: "Recruiter's Name",
              input: {
                id: "recruiterName",
                required: true,
                inputType: "text",
                name: "recruiterName",
                placeholder: "Enter Your Name"
              }
            },
            {
              level: 2,
              order: 2,
              title: "Recruiter's Email",
              input: {
                id: "recruiterEmail",
                inputType: "email",
                required: true,
                name: "recruiterEmail",
                placeholder: "Enter Your Email"
              }
            }
          ]
        },
        {
          level: 1,
          order: 2,
          title: "Job Preferences",
          input: {
            id: "jobTypePreference",
            inputType: "select",
            required: true,
            name: "jobTypePreference",
            options: [
              { value: "developer", label: "Developer" },
              { value: "manager", label: "Manager" },
              { value: "consultant", label: "Consultant" }
              // ... other job types
            ]
          }
        },
        {
          level: 1,
          order: 3,
          title: "Region",
          input: {
            id: "jobRegion",
            inputType: "select",
            required: true,
            name: "jobRegion",
            options: [
              { value: "northAmerica", label: "North America" },
              { value: "europe", label: "Europe" },
              { value: "australia", label: "Australia" },
              { value: "kenya", label: "Kenya" },
              { value: "malawi", label: "Malawi" },
              { value: "rsa", label: "South Africa" }
            ]
          }
        },
        {
          level: 1,
          order: 4,
          title: "Job Type",
          input: {
            id: "jobType",
            inputType: "select",
            required: true,
            name: "jobType",
            options: [
              { value: "fullTime", label: "Full-Time" },
              { value: "partTime", label: "Part-Time" },
              { value: "contract", label: "Contract" }
            ]
          }
        },
        {
          level: 1,
          order: 5,
          title: "Location",
          input: {
            id: "jobLocation",
            required: true,
            inputType: "select",
            name: "jobLocation",
            options: [
              { value: "onSite", label: "On-Site" },
              { value: "remote", label: "Remote" },
              { value: "hybrid", label: "Hybrid" }
            ]
          }
        }
      ]
    }
  }
};
const DynamicForm = () => {
  const [currentPath, setCurrentPath] = useState("General Enquiries");
  const [selectedOptions, setSelectedOptions] = useState({});
  const handlePathChange = (event) => {
    const path = event.target.value;
    setCurrentPath(path);
  };
  const handleInputChange = (optionKey, event) => {
    const newValue = event.target.value;
    setSelectedOptions((prev) => ({ ...prev, [optionKey]: newValue }));
  };
  const renderOptions = (options, parentKey = "") => {
    return options.map((option, index) => {
      const optionKey = `${parentKey}-${option.title}-${index}`;
      const isOptionSelected = parentKey === "" || selectedOptions[parentKey] === option.title;
      if (!isOptionSelected) {
        return null;
      }
      if (option.staggerInputs && option.options) {
        return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: option.options.map((subOption) => {
          const subOptionKey = `${optionKey}-${subOption.title}`;
          return /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: subOptionKey, children: [
              subOption.input && subOption.input.required && /* @__PURE__ */ jsx("span", { className: "text-primary", children: "*" }),
              " ",
              subOption.title
            ] }),
            subOption.input ? renderInput(subOption.input, subOptionKey) : null
          ] }, subOptionKey);
        }) }, optionKey);
      } else {
        return /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: optionKey, children: [
            option.input && option.input.required && /* @__PURE__ */ jsx("span", { className: "text-primary", children: "*" }),
            " ",
            option.title
          ] }),
          option.input ? renderInput(option.input, optionKey) : /* @__PURE__ */ jsxs(
            "select",
            {
              required: true,
              id: optionKey,
              name: optionKey,
              className: "form-select w-full py-2 px-4 block text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card",
              onChange: (e) => handleInputChange(optionKey, e),
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Select an option" }),
                option.options?.map((subOption) => /* @__PURE__ */ jsx("option", { value: subOption.title, children: subOption.title }, subOption.title))
              ]
            }
          ),
          option.options && selectedOptions[optionKey] && renderOptions(option.options, optionKey)
        ] }, optionKey);
      }
    });
  };
  const renderInput = (input, optionKey) => {
    switch (input.inputType) {
      case "text":
      case "email":
      case "date":
      case "time":
      case "number":
        return /* @__PURE__ */ jsx(
          "input",
          {
            type: input.inputType,
            name: input.name,
            required: input.required,
            placeholder: input.placeholder,
            className: "py-2 px-4 block w-full text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
          },
          optionKey
        );
      case "select":
        return /* @__PURE__ */ jsx(
          "select",
          {
            required: input.required,
            name: input.name,
            className: "form-select w-full py-2 px-4 block text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card",
            children: input.options?.map((opt) => /* @__PURE__ */ jsx("option", { value: opt.value, children: opt.label }, opt.value))
          },
          optionKey
        );
      case "textArea":
        return /* @__PURE__ */ jsx(
          "textarea",
          {
            required: input.required,
            name: input.name,
            placeholder: input.placeholder,
            className: "py-2 px-4 block w-full text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
          },
          optionKey
        );
      default:
        return null;
    }
  };
  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const formRef = useRef();
  const onVerify = useCallback((token2) => {
    setToken(token2);
  }, []);
  const clearForm = () => {
    formRef.current?.reset();
  };
  const { toast } = useToast();
  const onSubmitForm = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    const formData = new FormData(formRef.current);
    if (formData) {
      const data = Object.fromEntries(formData);
      try {
        const response = await fetch("/submit-contact", {
          method: "POST",
          body: JSON.stringify({ data, token })
        });
        if (response.status === 200) {
          toast({
            variant: "success",
            title: "Form Submitted!",
            description: "Thank you for getting in touch with me. I'll get back to you in the next 24-48 hours"
          });
          clearForm();
        } else {
          toast({
            variant: "destructive",
            title: "Hmmm 🤔",
            description: "Something happened while processing your Form. Please try again later."
          });
        }
      } catch (err) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "An unknown error happened on our side. If it continues, please reach out to me directly"
        });
      } finally {
        setFormLoading(false);
        setRefreshReCaptcha(true);
      }
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      GoogleReCaptcha,
      {
        onVerify,
        refreshReCaptcha
      }
    ),
    /* @__PURE__ */ jsxs(
      "form",
      {
        ref: formRef,
        onSubmit: onSubmitForm,
        method: "POST",
        className: clsx(formLoading ? "opacity-20" : "", "md:w-2/3 md:mx-auto lg:w-full flex flex-col rounded-lg dark:bg-[#1e1e1e] bg-[#e0e0e0] p-4 gap-y-2 my-8"),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsx(Envelope, { className: "mr-4" }),
            /* @__PURE__ */ jsx("p", { className: "font-semibold flex items-center gap-x-2", children: tree.title })
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-muted", children: tree.description }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 items-center my-4", children: [
            /* @__PURE__ */ jsxs(
              "select",
              {
                name: "category",
                className: "form-select w-full py-2 px-4 block text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card",
                onChange: handlePathChange,
                children: [
                  currentPath == void 0 && /* @__PURE__ */ jsx("option", { value: void 0, children: "Select Option" }),
                  Object.keys(tree.paths).map((path) => /* @__PURE__ */ jsx("option", { value: path, children: path }, path))
                ]
              }
            ),
            currentPath && renderOptions(tree.paths[currentPath].options),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "w-full btn-primary",
                  disabled: currentPath == void 0 || formLoading,
                  children: currentPath == "General Enquiries" ? `Submit Enquiry` : `Enquire Availability`
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-primary my-4", children: "* Required" })
            ] })
          ] })
        ]
      }
    )
  ] });
};

function ContactWithRecaptcha() {
  return /* @__PURE__ */ jsxs(
    GoogleReCaptchaProvider,
    {
      scriptProps: {
        async: true
        // optional, default to false,
      },
      useEnterprise: true,
      reCaptchaKey: "6Lfc03YpAAAAAAxYZObQWCJGY9sVJBcvdc-gsutE",
      children: [
        /* @__PURE__ */ jsx(DynamicForm, {}),
        /* @__PURE__ */ jsx(Toaster, {})
      ]
    }
  );
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Hire an AI Engineer",
    description: "Looking for an AI Engineer? I help companies build agent systems, RAG pipelines, and LLM-powered products. Let's talk."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero2", $$Hero2, {})} ${maybeRenderHead()}<div class="container w-full flex flex-col-reverse md:flex-row justify-end"> <div class="w-full lg:w-2/5 lg:-mt-18 z-10"> ${renderComponent($$result2, "ContactWithRecaptcha", ContactWithRecaptcha, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/liwu/Projects/websites/personal-24/src/components/widgets/ContactWithRecaptcha.tsx", "client:component-export": "default" })} </div> <div class="w-full lg:w-3/5"> ${renderComponent($$result2, "ResponsiveItemGrid", ResponsiveItemGrid, { "client:load": true, "columns": 2, "items": [
    {
      title: "AI Engineering & Consulting",
      description: "I help companies design and build AI agent systems, RAG pipelines, and LLM-powered products \u2014 from architecture through to production deployment.",
      icon: "tabler:briefcase"
    },
    {
      title: "Speaking",
      description: "I speak at conferences and organizations on AI agent engineering, the African tech ecosystem, and building AI products for emerging markets.",
      icon: "tabler:presentation"
    },
    {
      title: "Research & Training",
      description: "I conduct applied research and training on AI engineering topics \u2014 agent architectures, LLM integration patterns, and enterprise AI adoption.",
      icon: "tabler:test-pipe"
    }
  ], "client:component-hydration": "load", "client:component-path": "~/components/common/ResponsiveItemGrid", "client:component-export": "default" })} </div> </div> <div class="container flex flex-col justify-center items-center my-12"> ${renderComponent($$result2, "Headline", $$Headline, { "tagline": "Need some mentorship?", "subtitle": "I have dedicated some time from my busy schedule for technical mentorship mostly in form of Pair Programming" })} ${renderComponent($$result2, "Button", $$Button, { "href": "https://cal.com/liwu-codes/30min", "variant": "tertiary" }, { "default": ($$result3) => renderTemplate`Book a 30 Minute 1:1 With Me Here (It's Free :)` })} </div> ` })}`;
}, "/Users/liwu/Projects/websites/personal-24/src/pages/contact.astro", void 0);

const $$file = "/Users/liwu/Projects/websites/personal-24/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

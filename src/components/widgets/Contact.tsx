import React, {
  type FormEvent,
  useRef,
  useState
} from 'react';
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {CONTACT_RECAPTCHA_ACTION} from "~/utils/contact";
import {useToast} from "~/components/ui/use-toast.tsx";
import {clsx} from "clsx";

type Path = "Speaking Engagement" | "Consultancy" | "New Career Opportunity" | "General Enquiries";

interface Input {
  id: string;
  inputType: string;
  name: string;
  placeholder?: string;
  min?: number;
  max?: number;
  required: boolean;
  options?: InputOption[]; // Include this if your input can have options like a select dropdown
}

interface InputOption {
  value: string;
  label: string;
}

interface Option {
  level: number;
  order: number;
  title: string;
  input?: Input;
  staggerInputs?: boolean;
  options?: Option[]; // Nested options for hierarchical structuring
}

interface Branch {
  options: Option[];
}

interface DecisionTree {
  title: string;
  description: string;
  paths: {
    [key in Path]: Branch; // Updated to use the 'Path' type for keys
  };
}

const tree: DecisionTree = {
  title: "Send a message",
  description: "Pick a topic. The fields change to match.",
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
                placeholder: "Your name"
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
                placeholder: "you@domain.com"
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
              {value: "feedback", label: "Feedback"},
              {value: "question", label: "Question"},
              {value: "complaint", label: "Complaint"},
              {value: "other", label: "Other"}
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
            placeholder: "What's on your mind?"
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
                    placeholder: "Your name"
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
                    placeholder: "you@school.edu"
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
                    placeholder: "Your name"
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
                    placeholder: "you@domain.com"
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
                    id: "eventOrganizerName",
                    inputType: "text",
                    required: true,
                    name: "eventOrganizerName",
                    placeholder: "Your name"
                  }
                },
                {
                  level: 3,
                  order: 2,
                  title: "Event Organizer Email",
                  input: {
                    id: "eventOrganizerEmail",
                    inputType: "email",
                    required: true,
                    name: "eventOrganizerEmail",
                    placeholder: "you@domain.com"
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
              {"value": "ai", "label": "AI"},
              {"value": "blockchain", "label": "Blockchain"},
              {"value": "fintech", "label": "Fintech"},
              {"value": "startups", "label": "Startups"},
              {"value": "mobileDev", "label": "Mobile Development"},
              {"value": "frontend", "label": "FrontEnd"},
              {"value": "apisIntegrations", "label": "APIs and Integration"},
              {"value": "devOpsCICD", "label": "DevOps and CI/CD"},
              {"value": "automatedTesting", "label": "Automated Testing"}
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
                placeholder: "Date"
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
                placeholder: "Time"
              }
            },
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
            placeholder: "Audience, format, anything else"
          }
        },
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
                placeholder: "Your name"
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
                placeholder: "Company name"
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
              {value: "techCoFounder", label: "A Tech Co-founder"},
              {value: "infoSystemDesign", label: "Designing an Information System"},
              {value: "websiteBuilding", label: "Building a Website"},
              {value: "mobileAppCustomBackend", label: "Building a Mobile App with a Custom Backend"},
              {value: "webAppBuilding", label: "Building a Web-based Application"},
              {value: "cloudBackedDesktopApp", label: "Building a Cloud-backed Desktop Application"},
              {value: "eCommerceSystem", label: "Building an E-Commerce System"},
              {value: "smartContract", label: "Building a Smart Contract"},
              {value: "projectRevamp", label: "Revamping an Existing Project"},
              {value: "codebaseAudit", label: "Auditing our Codebase"},
              {value: "research", label: "Conducting Research and Presenting Findings"},
              {value: "training", label: "Training a Team on an Engineering Topic"}
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
            placeholder: "What are you building?"
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
                placeholder: "From"
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
                placeholder: "To"
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
            placeholder: "you@domain.com"
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
                placeholder: "Your name"
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
                placeholder: "you@domain.com"
              }
            },
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
              {value: "developer", label: "Developer"},
              {value: "manager", label: "Manager"},
              {value: "consultant", label: "Consultant"},
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
              {value: "northAmerica", label: "North America"},
              {value: "europe", label: "Europe"},
              {value: "australia", label: "Australia"},
              {value: "kenya", label: "Kenya"},
              {value: "malawi", label: "Malawi"},
              {value: "rsa", label: "South Africa"},
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
              {value: "fullTime", label: "Full-Time"},
              {value: "partTime", label: "Part-Time"},
              {value: "contract", label: "Contract"}
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
              {value: "onSite", label: "On-Site"},
              {value: "remote", label: "Remote"},
              {value: "hybrid", label: "Hybrid"}
            ]
          }
        },
      ]
    },
  }
};

// Shared field styles, matching the home newsletter input.
const fieldClass =
  "block w-full rounded-md border border-gray-400/50 dark:border-gray-500/40 bg-white/70 dark:bg-black/30 px-3 py-2 text-sm text-default placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none dark:[color-scheme:dark]";
const labelClass = "mb-1 block text-xs uppercase tracking-widest text-muted";

// Option keys double as field names for the nested selects, so they can hold
// spaces and apostrophes. Element ids get a sanitised copy; names don't change.
const fieldId = (key: string) => `cf${key.replace(/[^A-Za-z0-9_-]+/g, '-')}`;

const RequiredMark = ({show}: { show?: boolean }) =>
  show ? <span className="text-primary" aria-hidden="true">* </span> : null;

const DynamicForm = () => {
  // State to manage the current path and selections
  const [currentPath, setCurrentPath] = useState<Path | undefined>("General Enquiries");
  const [selectedOptions, setSelectedOptions] = useState({});

  // Event handler for changing paths (e.g., Speaking Engagement or Consultancy)
  const handlePathChange = (event: { target: { value: any; }; }) => {
    const path = event.target.value;
    setCurrentPath(path);
  };

  // Event handler for updating form data
  const handleInputChange = (optionKey: string, event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedOptions(prev => ({...prev, [optionKey]: newValue}));
  };

  // Function to recursively render select dropdowns based on the current selection
  const renderOptions = (options: Option[], parentKey = '') => {
    return options.map((option, index) => {
      const optionKey = `${parentKey}-${option.title}-${index}`;
      const isOptionSelected = parentKey === '' || selectedOptions[parentKey] === option.title;

      if (!isOptionSelected) {
        return null; // Skip rendering this option if it's not selected
      }

      // Check if the option has staggerInputs enabled
      if (option.staggerInputs && option.options) {
        return (
          <div key={optionKey} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {option.options.map(subOption => {
              const subOptionKey = `${optionKey}-${subOption.title}`;
              return (
                <div key={subOptionKey}>
                  <label htmlFor={fieldId(subOptionKey)} className={labelClass}>
                    <RequiredMark show={subOption.input?.required}/>{subOption.title}
                  </label>
                  {subOption.input ? renderInput(subOption.input, subOptionKey) : null}
                </div>
              );
            })}
          </div>
        );
      } else {
        return (
          <div key={optionKey} className="flex flex-col gap-4">
            <div>
              <label htmlFor={fieldId(optionKey)} className={labelClass}>
                <RequiredMark show={option.input ? option.input.required : true}/>{option.title}
              </label>
              {option.input
                ? renderInput(option.input, optionKey)
                : (
                  <select
                    required={true}
                    id={fieldId(optionKey)}
                    name={optionKey}
                    className={fieldClass}
                    onChange={(e) => handleInputChange(optionKey, e)}
                  >
                    <option value="">Select an option</option>
                    {option.options?.map(subOption => (
                      <option key={subOption.title} value={subOption.title}>{subOption.title}</option>
                    ))}
                  </select>
                )
              }
            </div>

            {/* Render nested options if applicable */}
            {option.options && selectedOptions[optionKey] && renderOptions(option.options, optionKey)}
          </div>
        );
      }
    });
  };


  // Function to render different types of inputs
  const renderInput = (input: Input, optionKey: string) => {
    switch (input.inputType) {
      case 'text':
      case 'email':
      case 'date':
      case 'time':
      case 'number':
        return (
          <input
            key={optionKey}
            id={fieldId(optionKey)}
            type={input.inputType}
            name={input.name}
            required={input.required}
            placeholder={input.placeholder}
            autoComplete={input.inputType === 'email' ? 'email' : undefined}
            className={fieldClass}
          />
        );
      case 'select':
        return (
          <select
            key={optionKey}
            id={fieldId(optionKey)}
            required={input.required}
            name={input.name}
            className={fieldClass}
          >
            {input.options?.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        );
      case 'textArea':
        return (
          <textarea
            key={optionKey}
            id={fieldId(optionKey)}
            required={input.required}
            name={input.name}
            placeholder={input.placeholder}
            rows={4}
            className={fieldClass}
          />
        )
      default:
        return null;
    }
  };
  const [formLoading, setFormLoading] = useState(false);
  const {executeRecaptcha} = useGoogleReCaptcha();

  const formRef = useRef<HTMLFormElement | undefined>();

  const clearForm = () => {
    formRef.current?.reset();
  }

  const {toast} = useToast()

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      toast({
        variant: "destructive",
        title: "Not sent",
        description: "The security check is still loading. Try again in a second.",
      })
      return;
    }
    setFormLoading(true);
    const data = Object.fromEntries(new FormData(formRef.current));

    try {
      const token = await executeRecaptcha(CONTACT_RECAPTCHA_ACTION);
      const response = await fetch('/submit-contact', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({data, token})
      });

      if (response.ok) {
        toast({
          variant: "success",
          title: "Message sent",
          description: "Thanks for getting in touch. I usually reply within 24h.",
        })
        clearForm();
      } else {
        // 400/413 carry a short, safe reason (e.g. a field is too long); anything else stays generic.
        const reason = response.status === 400 || response.status === 413
          ? ((await response.json().catch(() => ({}))) as { message?: string }).message
          : undefined;
        toast({
          variant: "destructive",
          title: "Not sent",
          description: reason || "Something went wrong on my side. Please try again in a minute.",
        })
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Not sent",
        description: "Couldn't reach the server. If it keeps happening, use Book_me instead.",
      })
    } finally {
      setFormLoading(false);
    }
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={onSubmitForm}
        method={"POST"}
        aria-labelledby="contact-form-title"
        aria-busy={formLoading}
        className={clsx(formLoading ? "opacity-60" : "", "glass glass-sheen rounded-xl flex flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6 transition-opacity")}>
        <div>
          <p className="terminal-label">message</p>
          <h2 id="contact-form-title" className="mt-1 text-lg font-bold text-heading">{tree.title}</h2>
          <p className="mt-1 text-xs text-muted">{tree.description}</p>
        </div>

        {/* Path Selection */}
        <div>
          <label htmlFor="contact-topic" className={labelClass}>Topic</label>
          <select
            id="contact-topic"
            name="category"
            className={fieldClass}
            onChange={handlePathChange}
          >
            {currentPath == undefined &&
              <option value={undefined}>Select Option</option>
            }
            {/*Make sure current path is defined*/}
            {Object.keys(tree.paths).map((path) => (
              <option key={path} value={path}>{path}</option>
            ))}
          </select>
        </div>

        {/* Render dynamic fields based on the current path */}
        {currentPath && renderOptions(tree.paths[currentPath].options)}

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
          <p className="text-xs text-muted"><span className="text-primary" aria-hidden="true">*</span> Required</p>
          <button type="submit" className="btn-primary rounded-md w-full sm:w-auto"
                  disabled={currentPath == undefined || formLoading}>
            {formLoading ? 'Sending…' : currentPath == "General Enquiries" ? `Send_Message` : `Check_Availability`}
          </button>
        </div>
      </form>
    </>
  );
};

export default DynamicForm;

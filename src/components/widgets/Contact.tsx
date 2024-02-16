import React, {useState} from 'react';
import Envelope from "~/components/icons/Envelope.tsx";

type Path = "Speaking Engagement" | "Consultancy" | "New Career Opportunity";

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
  title: "Let's do some amazing stuff together!",
  description: "Feel free to select from any of the options below to figure out how best I can be of value to you",
  paths: {
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
            placeholder: "Let me know if you have additional comments"
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
              title: "Budget Start",
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
              title: "Budget End",
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

const DynamicForm = () => {
  // State to manage the current path and selections
  const [currentPath, setCurrentPath] = useState<Path | undefined>();
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

  const handleSelectChange = (optionKey: string, event: React.ChangeEvent<HTMLSelectElement>) => {
    // Update the selected option and reset any child selections
    const newSelection = event.target.value;
    const newSelectedOptions = {...selectedOptions, [optionKey]: newSelection};
    Object.keys(selectedOptions).forEach(key => {
      if (key.startsWith(optionKey + '-')) {
        delete newSelectedOptions[key];
      }
    });
    setSelectedOptions(newSelectedOptions);
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
          <div key={optionKey} className="grid grid-cols-2 gap-4">
            {option.options.map(subOption => {
              const subOptionKey = `${optionKey}-${subOption.title}`;
              return (
                <div key={subOptionKey}>
                  <label htmlFor={subOptionKey}>{subOption.title}</label>
                  {subOption.input ? renderInput(subOption.input, subOptionKey) : null}
                </div>
              );
            })}
          </div>
        );
      } else {
        return (
          <div key={optionKey}>
            <label htmlFor={optionKey}>{option.title}</label>
            {option.input
              ? renderInput(option.input, optionKey)
              : (
                <select
                  id={optionKey}
                  name={optionKey}
                  className="form-select w-full py-2 px-4 block text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
                  onChange={(e) => handleInputChange(optionKey, e)}
                >
                  <option value="">Select an option</option>
                  {option.options?.map(subOption => (
                    <option key={subOption.title} value={subOption.title}>{subOption.title}</option>
                  ))}
                </select>
              )
            }

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
            type={input.inputType}
            name={input.name}
            required={input.required}
            placeholder={input.placeholder}
            className="py-2 px-4 block w-full text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
          />
        );
      case 'select':
        return (
          <select
            key={optionKey}
            name={input.name}
            className="form-select w-full py-2 px-4 block text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
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
            name={input.name}
            placeholder={input.placeholder}
            className="py-2 px-4 block w-full text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
          />
        )
      default:
        return null;
    }
  };

  return (
    <form
      className="md:w-2/3 md:mx-auto lg:w-full flex flex-col rounded-lg dark:bg-[#1e1e1e] bg-[#e0e0e0] p-4 gap-y-2 my-8">
      <div className={"flex"}>
        <Envelope className={"mr-4"}/>
        <p className="font-semibold flex items-center gap-x-2">
          {tree.title}
        </p>
      </div>
      <div>
        <p className="text-muted">{tree.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 items-center my-4">
        {/* Path Selection */}
        <select
          name="category"
          className="form-select w-full py-2 px-4 block text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
          onChange={handlePathChange}
        >
          {currentPath == undefined &&
            <option value={undefined}>Select Option</option>
          }
          {Object.keys(tree.paths).map((path) => (
            <option key={path} value={path}>{path}</option>
          ))}
        </select>

        {/* Render dynamic fields based on the current path */}
        {currentPath && renderOptions(tree.paths[currentPath].options)}

        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full btn-primary">
            Enquire Availability
          </button>
        </div>
      </div>
    </form>
  );
};

export default DynamicForm;

import React, {useState} from 'react';

type Path = "Speaking Engagement" | "Consultancy";

interface Input {
  id: string;
  inputType: string;
  name: string;
  placeholder?: string;
  min?: number;
  max?: number;
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
              input: {
                id: "schoolStaff",
                inputType: "text",
                name: "schoolName",
                placeholder: "Enter School Name"
              }
            },
            {
              level: 2,
              order: 2,
              title: "Coding/Tech Club President",
              input: {
                id: "techClubPresident",
                inputType: "text",
                name: "techClubName",
                placeholder: "Enter Tech Club Name"
              }
            },
            {
              level: 2,
              order: 3,
              title: "Event Organizer",
              input: {
                id: "eventOrganizer",
                inputType: "text",
                name: "organizationName",
                placeholder: "Enter Organization Name"
              }
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
                inputType: "time",
                name: "preferredTime",
                placeholder: "Select Preferred Time"
              }
            },
          ]
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
              {value: "codebaseAudit", label: "Auditing our Codebase"}
            ]
          }
        },
        {
          level: 1,
          order: 3,
          title: "Project Details",
          input: {
            id: "projectDetails",
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
            inputType: "email",
            name: "email",
            placeholder: "Enter your Email Here"
          }
        }
      ]
    }
  }
};

const DynamicForm = () => {
  // State to manage the current path and selections
  const [currentPath, setCurrentPath] = useState<Path | null>();
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
            required={true}
            placeholder={input.placeholder}
            className="py-2 px-4 block w-full text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
            onChange={(e) => handleInputChange(optionKey, e)}
          />
        );
      case 'select':
        return (
          <select
            key={optionKey}
            name={input.name}
            className="form-select w-full py-2 px-4 block text-md border border-slate-900 dark:border-slate-300 rounded-lg bg-card"
            onChange={(e) => handleInputChange(optionKey, e)}
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
      <div>
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
          <option>Select Option</option>
          {Object.keys(tree.paths).map((path) => (
            <option key={path} value={path}>{path}</option>
          ))}
        </select>

        {/* Render dynamic fields based on the current path */}
        {currentPath && renderOptions(tree.paths[currentPath].options)}

        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enquire Availability
          </button>
        </div>
      </div>
    </form>
  );
};

export default DynamicForm;

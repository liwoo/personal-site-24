import {twMerge} from "tailwind-merge";

export default function Envelope({className = "w-5 h-5"}: {className?: string}) {
  return (
    <svg className={twMerge(className, 'w-5')} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 25"
    >
      <rect x="1" y="1" width="39" height="23" rx="11.5" strokeWidth="2"></rect>
      <path
        transform="matrix(.66913 .74314 -.70808 .70613 8.861 2.122)"
        strokeWidth="2"
        strokeLinecap="round"
        d="M1-1h15.227"></path>
      <path
        transform="matrix(-.66913 .74314 .70808 .70613 32.388 2.122)"
        strokeWidth="2"
        strokeLinecap="round"
        d="M1-1h15.227"></path>
    </svg
    >
  )
}

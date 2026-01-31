import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderSlot, b as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML } from './astro/server_Q924hkwF.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_Bpf2hwDM.mjs';
import { $ as $$Icon } from './Icon_DUhVTlro.mjs';
import { $ as $$Logo, a as $$Image } from './Logo_xxZU-W3W.mjs';
import { $ as $$ToggleTheme } from './ToggleTheme_5iQjDVFL.mjs';
import 'clsx';
import { t as trimSlash, c as getHomePermalink, f as getAsset, g as getPermalink } from './permalinks_BCPgzee8.mjs';
import { twMerge } from 'tailwind-merge';
import image from './dp_CTIYOhw-.mjs';
import { jsxs, Fragment as Fragment$1, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useCallback } from 'react';
import { QrCode, X, Check, Copy, Wallet, Hexagon, Bitcoin, Mail, Send } from 'lucide-react';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const $$Astro$4 = createAstro("https://chienda.com");
const $$ToggleMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/common/ToggleMenu.astro", void 0);

const $$Astro$3 = createAstro("https://chienda.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    links = [],
    showToggleTheme = false,
    showRssFeed = false,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header id="header"> <div class="absolute inset-0"></div> <div class="fixed z-20 itemx-center inset-x-0 container-lg text-default py-4 lg:py-12 px-3 md:px-6 mx-auto w-full md:flex md:justify-between"> <div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between"], "class:list")}> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class="flex items-center md:hidden"> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} </div> </div> <nav class="items-center w-full md:w-auto hidden md:flex text-muted overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-6" aria-label="Main navigation"> <ul class="dark:bg-[#0f0f0f] bg-[#fafafa] shadow-sm rounded-3xl flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium px-6"> ${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")}> ${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button class="hover:text-link dark:hover:text-white px-4 py-1 flex items-center"> ${text}${" "} ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-down", "class": "w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" })} </button> <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl"> ${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")} data-astro-prefetch${addAttribute(href2, "href")}> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "hover:text-primary px-4 py-4 md:py-1 flex items-centers",
    { "aw-link-active": href === currentPath }
  ], "class:list")} data-astro-prefetch${addAttribute(href, "href")}> ${text} </a>`} </li>`)} </ul> </nav> <div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden bg-page md:self-center flex md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0"
  ], "class:list")}> <div class="items-center flex justify-between w-full md:w-auto"> <div class="flex"> ${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6 md:w-5 md:h-5 md:inline-block" })}`} ${showRssFeed && renderTemplate`<a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center" aria-label="RSS Feed"${addAttribute(getAsset("/rss.xml"), "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:rss", "class": "w-5 h-5" })} </a>`} </div> </div> </div> </div> </header>`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/widgets/Header.astro", void 0);

const $$Astro$2 = createAstro("https://chienda.com");
const $$Mug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Mug;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(twMerge(className, "w-5"), "class")} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 24"><path d="M4.911 1c.896.407 2.542 1.613 1.956 3.178-.734 1.955-3.667 3.422-2.2 5.866M9.8 1c.896.407 2.542 1.613 1.955 3.178-.733 1.955-3.666 3.422-2.2 5.866M14.689 1c.896.407 2.542 1.613 1.956 3.178-.734 1.955-3.667 3.422-2.2 5.866" stroke-width="2"></path><path d="M1 4.422V17a6 6 0 0 0 6 6h7.067a6 6 0 0 0 6-6V4.422M25.422 13.447c0 1.204-.604 2.35-1.614 3.218a5.907 5.907 0 0 1-2.742 1.311V8.92a5.908 5.908 0 0 1 2.742 1.311c1.01.868 1.614 2.013 1.614 3.217Z" stroke-width="2"></path></svg>`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/icons/Mug.astro", void 0);

const CryptoIcon = ({ name, className }) => {
  switch (name) {
    case "tabler:currency-bitcoin":
      return /* @__PURE__ */ jsx(Bitcoin, { className });
    case "tabler:currency-ethereum":
      return /* @__PURE__ */ jsx(Hexagon, { className });
    case "tabler:currency-solana":
      return /* @__PURE__ */ jsx(Wallet, { className });
    default:
      return /* @__PURE__ */ jsx(Wallet, { className });
  }
};
function CryptoButton({ ariaLabel, address, icon, color, qrCode }) {
  const [isCopied, setIsCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(address);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2e3);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const toggleQR = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQR(!showQR);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleCopy,
          className: twMerge(
            color,
            "text-white mx-2 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1 inline-flex items-center relative transition-transform hover:scale-110"
          ),
          "aria-label": `${ariaLabel} - Click to copy address`,
          children: /* @__PURE__ */ jsx(CryptoIcon, { name: icon, className: "w-5 h-5" })
        }
      ),
      qrCode && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: toggleQR,
          className: "absolute -top-1 -right-1 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity",
          "aria-label": `Show ${ariaLabel} QR Code`,
          children: /* @__PURE__ */ jsx(QrCode, { className: "w-3 h-3" })
        }
      )
    ] }),
    showQR && qrCode && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",
        onClick: toggleQR,
        children: /* @__PURE__ */ jsxs("div", { className: "relative bg-white dark:bg-gray-800 p-6 rounded-lg", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: toggleQR,
              className: "absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700",
              "aria-label": "Close QR Code",
              children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-4 text-gray-900 dark:text-white", children: [
            ariaLabel,
            " Address"
          ] }),
          /* @__PURE__ */ jsx("img", { src: qrCode, alt: `${ariaLabel} QR Code`, className: "w-64 h-64 mx-auto" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400 mt-4 break-all text-center max-w-xs", children: address }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleCopy,
              className: "mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2",
              children: [
                isCopied ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Copy, { className: "w-4 h-4" }),
                isCopied ? "Copied!" : "Copy Address"
              ]
            }
          )
        ] })
      }
    )
  ] });
}

const $$Astro$1 = createAstro("https://chienda.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], links = [], footNote = "", theme = "light", cryptoLinks = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{ dark: theme === "dark" }, "relative not-prose"], "class:list")}> <div class="dark:bg-dark absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative container sm:px-6 dark:text-slate-300"> <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12 dark:bg-[#0f0f0f] bg-[#fafafa] p-4 lg:p-12 rounded-tl-2xl rounded-tr-2xl"> <div class="col-span-12 lg:col-span-3"> ${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-full bg-gray-500 shadow-lg hidden sm:block", "width": 120, "height": 120, "widths": [400, 768], "layout": "fixed", "src": image, "alt": "Profile Picture" })} </div> ${links.map(({ links: links2 }) => renderTemplate`<div class="col-span-6 md:col-span-3 lg:col-span-2"> ${links2 && Array.isArray(links2) && links2.length > 0 && renderTemplate`<ul class="text-sm"> ${links2.map(({ text, href, ariaLabel }) => renderTemplate`<li class="mb-6"> <a class="text-muted hover:text-default hover:underline transition duration-150 ease-in-out"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>`} </div>`)} <div class="col-span-6 md:col-span-3 lg:col-span-3 text-right flex flex-col gap-y-1"> <div class="items-center gap-x-2 justify-end flex"> ${renderComponent($$result, "Mug", $$Mug, { "className": "stroke-default hidden md:block" })} <h2 class="text-sm lg:text-lg">Wanna buy me a Coffee?</h2> </div> <h4 class="text-xs text-muted">I accept the following Crypto:</h4> ${cryptoLinks?.length ? renderTemplate`<ul class="flex mb-4 justify-end"> ${cryptoLinks.map(({ ariaLabel, icon, color, address, qrCode }) => renderTemplate`<li> ${address ? renderTemplate`${renderComponent($$result, "CryptoButton", CryptoButton, { "ariaLabel": ariaLabel, "address": address, "icon": icon, "color": color || "bg-gray-500", "qrCode": qrCode, "client:load": true, "client:component-hydration": "load", "client:component-path": "~/components/widgets/CryptoButton", "client:component-export": "CryptoButton" })}` : renderTemplate`<a${addAttribute(twMerge(
    color,
    "text-white mx-2 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1 inline-flex items-center"
  ), "class")}${addAttribute(ariaLabel, "aria-label")} href="#"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}`} </a>`} </li>`)} </ul>` : ""} <h4 class="text-sm text-muted mt-4">Follow Me</h4> ${socialLinks?.length ? renderTemplate`<ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4 justify-end"> ${socialLinks.map(({ ariaLabel, href, text, icon }) => renderTemplate`<li> <a class="text-muted hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")}> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>` : ""} </div> </div> <div class="bg-accent h-4 rounded-bl-2xl rounded-br-2xl"></div> <div class="text-center m-4 text-sm mr-4 text-muted"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footNote)}` })} </div> </div> </footer>`;
}, "/Users/liwu/Projects/websites/personal-24/src/components/widgets/Footer.astro", void 0);

function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);
  const onVerify = useCallback((token2) => {
    setToken(token2);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, name, token })
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: data.message || "Thanks for subscribing! Check your email to confirm."
        });
        setEmail("");
        setName("");
        setTimeout(() => {
          onClose();
        }, 2e3);
      } else {
        setSubmitMessage({
          type: "error",
          text: data.message || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Failed to subscribe. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
      setRefreshReCaptcha(true);
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full mx-4 p-8",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                "aria-label": "Close modal",
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4", children: /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-white" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-2", children: "Join the Newsletter" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Get the latest articles, updates, and exclusive content delivered straight to your inbox." })
            ] }),
            /* @__PURE__ */ jsx(GoogleReCaptcha, { onVerify, refreshReCaptcha }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Name (optional)" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "name",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                    placeholder: "Your name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
                  "Email address ",
                  /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    id: "email",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    required: true,
                    className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                    placeholder: "you@example.com"
                  }
                )
              ] }),
              submitMessage && /* @__PURE__ */ jsx(
                "div",
                {
                  className: `p-3 rounded-lg text-sm ${submitMessage.type === "success" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"}`,
                  children: submitMessage.text
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: "w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                  children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
                    /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }),
                    "Subscribing..."
                  ] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
                    /* @__PURE__ */ jsx(Send, { className: "w-5 h-5" }),
                    "Subscribe"
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 text-center", children: "By subscribing, you agree to receive emails from us. Unsubscribe anytime." })
            ] })
          ]
        }
      )
    }
  );
}

function NewsletterBannerContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 right-0 z-40 bg-card shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center py-3 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 hidden sm:block flex-shrink-0" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm sm:text-base", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Ready to Level Up?" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Join my Newsletter and become a better Engineer" }),
          /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Subscribe to my Newsletter and Become a better Engineer!" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", onClick: handleOpenModal, className: "btn btn-primary", children: "Signup" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "h-[52px] sm:h-[56px]" }),
    /* @__PURE__ */ jsx(NewsletterModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
function NewsletterBanner() {
  const recaptchaKey = "6Lfc03YpAAAAAAxYZObQWCJGY9sVJBcvdc-gsutE";
  return /* @__PURE__ */ jsx(
    GoogleReCaptchaProvider,
    {
      scriptProps: {
        async: true
      },
      useEnterprise: true,
      reCaptchaKey: recaptchaKey,
      children: /* @__PURE__ */ jsx(NewsletterBannerContent, {})
    }
  );
}

const headerData = {
  links: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Articles',
      href: '/blog',
    },
    {
      text: 'Projects',
      href: '/projects',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Articles', href: '/blog' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Projects', href: '/projects' },
        { text: 'Music', href: 'https://getalinafe.com' },
        { text: 'Speaking', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Using', href: '/using' },
        { text: 'Old Site', href: 'https://old.chienda.com' },
        { text: 'Contacts', href: '/contact' },
      ],
    },
  ],

  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/liwucodes' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/liwoo' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/jchienda' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@liwucodes' },
  ],
  cryptoLinks: [
    {
      ariaLabel: 'Bitcoin',
      icon: 'tabler:currency-bitcoin',
      color: 'bg-orange-500 hover:bg-orange-600',
      address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', // Replace with your actual Bitcoin address
      qrCode: 'https://minio-api.dartsmw.com/chienda.com/qr-bitcoin.png', // Optional: Add QR code image
    },
    {
      ariaLabel: 'Ethereum',
      icon: 'tabler:currency-ethereum',
      color: 'bg-blue-500 hover:bg-blue-600',
      address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb', // Replace with your actual Ethereum address
      qrCode: 'https://minio-api.dartsmw.com/chienda.com/qr-ethereum.png', // Optional: Add QR code image
    },
    {
      ariaLabel: 'Solana',
      icon: 'tabler:currency-solana',
      color: 'bg-purple-500 hover:bg-purple-600',
      address: '7v91N7iZ9mNicL8WfG6cgSCKyRXydQjLh6UYBWwm6y1Q', // Replace with your actual Solana address
      qrCode: 'https://minio-api.dartsmw.com/chienda.com/qr-solana.png', // Optional: Add QR code image
    },
  ],
  footNote: `
    © ${new Date().getFullYear()}. Crafted with ❤️ by Jeremiah Chienda. All rights reserved.
  `,
};

const $$Astro = createAstro("https://chienda.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NewsletterBanner", NewsletterBanner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "~/components/widgets/NewsletterBanner", "client:component-export": "NewsletterBanner" })} ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showToggleTheme": true })} `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)} ` })}`;
}, "/Users/liwu/Projects/websites/personal-24/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $, footerData as f };

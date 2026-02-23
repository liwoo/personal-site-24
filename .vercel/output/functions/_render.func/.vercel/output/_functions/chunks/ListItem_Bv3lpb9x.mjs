import { jsxs, jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { b as getFormattedDate, g as getPermalink } from './permalinks_vW2eIjM2.mjs';

const getFormattedDateClient = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
function ListItem({ post, extended = false }) {
  const window = globalThis.window;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: twMerge(
        extended ? "flex-col md:flex-row gap-x-4 lg:h-52" : "flex-col",
        "group flex gap-y-2 rounded-xl transition-all ease-in delay-25 hover:dark:bg-[#1e1e1e] hover:bg-[#e0e0e0] p-4"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 flex md:flex-col justify-between md:justify-start items-center md:items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-1/2 md:w-full", children: [
            /* @__PURE__ */ jsx("time", { dateTime: String(post.publishDate), className: "inline-block text-muted", children: window ? getFormattedDateClient(post.publishDate) : getFormattedDate(post.publishDate) }),
            /* @__PURE__ */ jsxs("div", { className: "flex my-2", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-1 border-t border-default" }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 border-t border-muted" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            extended && /* @__PURE__ */ jsxs("p", { className: "text-muted text-sm", children: [
              `⏰ `,
              post.readingTime,
              " Minute Read"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "my-4 hidden md:block", children: extended && post.category && /* @__PURE__ */ jsx(
              "a",
              {
                href: `/category/${post.category}`,
                className: "text-sm text-primary hover:text-default hover:bg-page my-2 bg-card p-2 rounded-lg",
                children: post.category?.toLocaleUpperCase()
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "my-1 block md:hidden", children: extended && post.category && /* @__PURE__ */ jsx(
          "a",
          {
            href: `/category/${post.category}`,
            className: "text-sm text-primary hover:text-default hover:bg-page my-2 bg-card p-2 rounded-lg",
            children: post.category?.toLocaleUpperCase()
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 w-full", children: [
          /* @__PURE__ */ jsx("a", { href: getPermalink(post.permalink, "post"), "data-astro-prefetch": true, children: /* @__PURE__ */ jsx("h3", { className: "text-xl", children: post.title }) }),
          /* @__PURE__ */ jsx("p", { className: "text-muted leading-6 line-clamp-2", children: post.excerpt }),
          /* @__PURE__ */ jsx("a", { className: "btn-link", href: post.slug, children: "Read More" })
        ] }),
        extended && /* @__PURE__ */ jsx("div", { className: "hidden md:block w-2/5 relative", children: post.image && /* @__PURE__ */ jsxs("a", { href: getPermalink(post.permalink, "post"), "data-astro-prefetch": true, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: post.image,
              className: "w-full absolute md:h-full rounded shadow-primary bg-gray-400 dark:bg-slate-700 object-center object-cover",
              alt: post.title,
              width: 400,
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-card group-hover:bg-primary transition-all ease-in-out duration-300 w-full h-32 -mt-2 ml-2 rounded-lg"
            }
          )
        ] }) })
      ]
    }
  );
}

export { ListItem as L };

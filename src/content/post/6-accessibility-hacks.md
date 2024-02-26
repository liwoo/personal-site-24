---
publishDate: 2019-08-07T00:00:00Z
title: Trust me, your site is not complete - Here's why you need to re-write if for Accessibility
excerpt: While accessibility is a broad topic on its own, the good news is that by adhering to Semantic HTML, you can start being accessible today.  Here's a few heuristic I use everyday that help me write more semantic HTML
category: Tech
tags:
  - frontend
  - accessibility
  - html
metadata:
  canonical: https://chienda.com/6-accessibility-hacks
---
From its [inception](https://home.cern/science/computing/birth-web/short-history-web), the web was designed for humans, not machines. It was crafted with the idea that everyone, including those with visual impairments, should be able to access and consume information freely. This ethos was evident in the rich and descriptive markup that the [HTML specification](https://html.spec.whatwg.org/) provided.

Yet, as the web evolved and [JavaScript frameworks](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445) began to dominate, we saw a shift. There was a move away from native web markup towards the world of "Components". The result? Web developers started abstracting their sites to the point where the underlying HTML became just a [messy stew of div tags](https://www.hackterms.com/div%20soup). And let me tell you, maestro, that's a [tragedy for accessibility](https://www.a11ymatters.com/article/dont-use-divs-for-everything/).

## Why Care about Accessibility in the first place

So you've heard this buzz word being thrown around by all the leaders. But what does it actually mean?

> [Accessibility](https://dictionary.cambridge.org/dictionary/english/accessibility), in the digital realm, is the art and science of ensuring that websites, applications, and other digital tools are usable and enjoyable for everyone, regardless of any physical, cognitive, or sensory differences they might have.

Think of it as designing a building: just as you'd ensure there are ramps for those using wheelchairs and clear signage for those with visual impairments, digital accessibility ensures that all users can navigate, interact with, and comprehend digital content with ease.

Here's why accessibility should be more than just a buzzword to you:

1. **It's the Right Thing to Do:** At its core, accessibility is about inclusivity. By making your web content accessible, you're ensuring that everyone, regardless of their abilities, has equal access to information, opportunities, and experiences.

2. **It's Good for Business:** According to the [World Bank](https://www.who.int/teams/noncommunicable-diseases/sensory-functions-disability-and-rehabilitation/world-report-on-disability), roughly 15% of the world's population experiences some form of disability. Ignoring accessibility means sidelining a significant portion of your potential user base or clientele.

3. **Legal Implications:** Many countries now have [laws and regulations](https://www.siteimprove.com/glossary/accessibility-laws/) in place requiring digital content to be accessible. Non-compliance can lead to hefty fines and lawsuits.

4. **Enhanced User Experience:** Designing for accessibility often results in a better user experience for everyone. Features that make content more accessible, such as clear typography and intuitive navigation, benefit all users, not just those with disabilities.

5. **SEO Benefits:** Search engines love accessible websites. Proper use of headings, alt text for images, and semantic HTML can [boost your site's SEO](https://seo.co/semantic-html/), making it easier for people to find your content.

While accessibility is a broad topic on its own, the good news is that by adhering to Semantic HTML, you can start being accessible today.  Here's a few heuristic I use everyday that help me write more semantic HTML:

## 1. **Nav for Building Navbars**

When you're designing navigation bars, use the `<nav>` element. It's a semantic way to indicate that a section of your site contains navigation links.

**Example:**

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

## 2. **Headers for Hero Sections and Titles**

Utilize the `<header>` tag for wrapping hero sections and titles. It semantically indicates the content that serves as an introduction or is most important.

**Example:**

```html
<header>
  <h1>Welcome to My Website</h1>
  <p>Your one-stop solution for everything tech.</p>
</header>
```

## 3. **Section for Logical Groupings**

Whenever you're crafting a distinct section, like a testimonial or a product showcase, wrap it in a `<section>` tag.

**Example:**

```html
<section>
  <h2>Testimonials</h2>
  <blockquote>Best service I've ever received!</blockquote>
  <p>- John Doe</p>
</section>
```

## 4. **Articles for Blog Posts**

When publishing content like blogs or news articles, `<article>` is your go-to tag.

**Example:**

```html
<article>
  <h2>How Web Design Affects Usability</h2>
  <p>First paragraph of the article...</p>
  <!-- remaining content -->
</article>
```

## 5. **Buttons for Clickable Elements**

Use the `<button>` element for anything that looks like a button, even if it redirects users elsewhere.

**Example:**

```html
<button onclick="location.href='https://www.example.com';">Visit Example</button>
```

## 6. **Typography and Images**

For typography, utilize tags ranging from `<h1>` to `<h6>` based on the content's hierarchy. Don't forget about the `<figure>` and `<figcaption>` tags to semantically describe images and their captions.

**Example:**

```html
<figure>
  <img src="image.jpg" alt="Description of Image">
  <figcaption>Image caption goes here.</figcaption>
</figure>
```
---
These are just a few pointers to make your websites more accessible. There are more tools out there - [browser plugins](https://medium.com/@OPTASY.com/what-are-some-of-the-best-web-accessibility-testing-tools-to-evaluate-your-website-with-69def25a386), and [resources](https://developer.chrome.com/docs/lighthouse/accessibility/) - that you can incorporate today to take things to the next level. Making the web accessible isn't just a responsibility—it's an opportunity. An opportunity to reach a wider audience, deliver a better user experience, and build a better internet that adheres to the original ethos of the founding fathers. 

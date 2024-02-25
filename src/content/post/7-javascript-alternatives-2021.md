---
publishDate: 2021-07-14T00:00:00Z
title: 7 Practical Ways to Write Rich Frontends without Javascript today
excerpt: Developers have a love-hate relationship with Javascript.  On the one hand, it is a vibrant community that is always evolving in its quest to quench an ever-parching thirst for users to do magic in web browsers.
image: https://res.cloudinary.com/tiyeni/image/upload/v1708871682/web-tech.jpg
category: Tech
tags:
  - frontend
  - javascript
  - wasm
metadata:
  canonical: https://chienda.com/7-javascript-alternatives-2021
---
On the other hand, it's a  [chaotic cacophony](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4)  of tools that emerge at a rate of one every time you read through this article.  And a lot of folks simply cannot keep up.

Besides, programmers, especially those accustomed to the backend of the web stack, trust their own programming languages to provide the necessary constructs to more elegantly implement the complexity they need in their apps.  Simply put, Javascript is sometimes just not powerful enough.

So here's a list of seven **practical** ways in which you can build production-grade web applications _without Javascript_ today:


### 7️⃣ Flutter Web

![flutter web.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1632514345266/GGH2GPOCE.png)
The true definition of Cross-Platform? 📸: https://www.arrowhitech.com

[Flutter](https://flutter.dev)  is one of those technologies that [I strongly believe you must keep a close eye on](https://blog.liwu.codes/top-5-technologies-for-developers-in-2021).  Traditionally created to build silky-smooth, native-feeling iOS and Android Apps, the team at Google has been hard at work to make it more than _just_ a Mobile technology.

With compile-for-Desktop available in Beta for Linux, Mac, and Windows, and compile-for-Web in stable availability, Flutter might be the closest we may have to write-once; run everywhere.  Behind the scenes, the same widget-soup of Dart code you have been accustomed to for iOS and Android Apps gets converted into Javascript that is run in an HTML Canvas.

**🚀 Good for**: Building highly interactive, touch-heavy apps that happen to work on the web.  Think casual games.  A great use-case is when you have a Mobile App already and your PM would like a web version of it.

**🛑 Not Good for**: Anything data and/or text-intensive.  You probably don't want to build an SEO-optimized blog using this technology.

### 6️⃣ Elm

![elm-compiler.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1632514401661/--gFW-kGR.png)
The notoriously helpful Elm Compiler 📸: https://elm-lang.org

[Elm](https://elm-lang.org) is an esoteric front-end language that compiles to Javascript.  Its pure functional style makes it the archetype of the now-popularly accepted Functional-Reactive Programming paradigm. Its [Model-View-Update](https://elmprogramming.com/model-view-update-part-1.html) UI model heavily influences the Redux state management package and the React library in general.

Developers who write Elm particularly praise it for its sound-type system, clean abstraction of side-effects, and pleasant error messages - which I must say are [some of the friendliest in all of the software development industry](https://elm-lang.org/news/compiler-errors-for-humans).  Even though its syntax is somewhat obscure, and feature development can feel ceremonial, Elm promises extreme compile-time safety, with most applications boasting to never have encountered a run-time error in production.

**🚀 Good for**: Building web Apps with extreme state complexity, such as a Spreadsheet or collaborative editing tool like Google Docs.

**🛑 Not Good for**: Being a traditional Single Page Application technology, you probably don't want to build applications that need to rank highly in search engines, or need the performance of a statically-generated app.

### 5️⃣ WASM

![wasm.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1632540492093/zW7YBs-OJ.png)
A high-level overview of how WASM Works 📸: https://www.interlogica.it

[Web Assembly](https://webassembly.org) - popularly known as WASM - is a revolutionary bytecode that targets the Browser you are viewing this from.  Previously the only practical way to build for the Web was to use Javascript: the language with a built-in interpreter in every web browser.  This works perfectly well if you are willing to be constrained to the API exposed by Javascript and HTML to manipulate the DOM.  Some applications, however, require more fine-grained control of the lowest building blocks of the browser.  Things like memory management and concurrency are tricks that developers of highly performant platforms like video games reach to squeeze the juices out of the hardware they are running on.

With WASM, this immediately becomes possible.  In fact, companies like Figma are using WASM to build experiences on the Web that were only previously possible on the native desktop.  AutoCAD, Figma, and Blazor (explained below) are just examples of projects that are taking advantage of this new browser standard.  What's more, WASM can be generated from highly performant languages such as C, C++, Rust, and Go.

**🚀 Good for**: Use WASM if you need to manipulate the lowest level possible of your hardware.  Things like compression, video streaming, and other such CPU-intensive tasks that you want to perform on the browser are great candidates for using WASM.

**🛑 Not Good for**:  You could build your portfolio website with Rust and WASM, and it will work just fine, but it will make no difference to your visitors whether you used WASM or built it with React.  And the former will probably take you much longer.

### 4️⃣ Blazor

![blazor.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1632516180909/7X5t9OCy0.png)
Blazor Server Architecture. 📸: https://docs.microsoft.com

[Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor) comes in two flavors: Blazor Server and Blazor Client.  The Client edition runs as a separate App that compiles into WASM to run directly in the browser, communicating with the server through a web API.  But it's the Server version I'm more concerned with here. Blazor Server ships HTML over the wire on every web request (such as clicking the Save button in a form) through .NET real-time web communication protocol called SignalR.

Apart from building your front-end completely in C# (and an XML-like DSL), the biggest advantage of Blazor Server is that all your application state lives completely on the server-side.  This gives you complete control of such things as Database access and third-party APIs such as the ones you would need for sending email or SMSs, without trying to implement such complexity in the client's browser, or worse yet, duplicating it.

**🚀 Good for**: Applications that will be used in a controlled environment, such as the office LAN, since SignalR connections can be especially resource-intensive.

**🛑 Not Good for**: Applications that will have a LOT of concurrent users, such as Twitter.  Each user session would be maintaining a stateful web socket (mostly) connection with the server!

## ☕️
*** 


### 3️⃣ Laravel Livewire

![livewire.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1632776515946/Wy_FGvPTY.jpeg)
Look Ma' just like plain old blade templates 📸: https://laravel-news.com

[Laravel](https://laravel.com) is one of the most starred Github Repositories, popularized by its approach to build server-rendered, authentication-supported full-stack Web Apps quickly.

However, As the Web has increasingly become a more interactive, real-time platform, over time, frameworks like Laravel have been left scrambling to incorporate such features.  This resulted in a trend in which Laravel et al were used solely as backends that talked to the Database and other 3rd party APIs, exposing a Web API for a rich Javascript Frontend written in Vue.  The trouble with this becomes: why should I have to create two separate projects when it's really just one web application?

That's where [Livewire](https://laravel-livewire.com) comes in.  By embracing the tight coupling of View, Controller, and Model (it is called MVC for a reason!), Livewire allows you to write your front-end in the same server-generated blade templates you would have been used to.  The magic is that, in real-time, requests to the server will generate some changes to the originally rendered HTML, and ship only the difference to the browser asynchronously, and Livewire will automagically glue the new pieces off HTML together as they come in!

**🚀 Good for**: For both Admin-facing and public-facing applications, Livewire, Hotwire, and Liveview are excellent choices.  These technologies really give us the best of both worlds: rich, responsive, interactive applications with all logic handled on the server!

**🛑 Not Good for**: Unlike Blazor Server, I actually think you can use these three technologies even in uncontrolled environments.  Of course, if you're app is doing insane DOM manipulation, or indeed if you are building the next big browser-based 3D game, then you may not want to go down this path.


### 2️⃣ Hotwire

![hotwire.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1632778066287/qAiAZqMKm.jpeg)
The hot new freshness from the Rails Community 📸: https://www.driftingruby.com

Like Laravel, [Ruby on Rails](https://rubyonrails.org) is an extremely popular, unapologetically full-stack Web Framework [citation needed].  Popular Web Apps that have been written in Rails include [Github](https://github.com), [Shopify](https://www.shopify.com/), [AirBnB](https://www.airbnb.com) and [Zendesk](https://www.zendesk.com).

Also like Laravel, the Rails community has gone through its fair share of an identity crisis as they attempt to keep up with the front end's growing demands.  It used to be that back in the day, your traditional server-rendered HTML ([erb](https://puppet.com/docs/puppet/5.5/lang_template_erb.html) templates), a sprinkling of [jQuery](https://jquery.com), and a dash of [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) were all you needed to satisfy your end-users. When this became inadequate, we saw technologies like [Turbolinks](https://github.com/turbolinks/turbolinks-classic) - now deprecated - introduced into the framework to make web app responsiveness less 2005ivy. [Stimulus](https://stimulus.hotwired.dev) was then introduced to provide the type of interaction folks were reaching to Vuejs for.

All this work has culminated into [Hotwire](https://hotwired.dev).  Being a framework-agnostic technology, Hotwire makes use of Websockets to send any HTML changes across, into uniquely identifiable ([Turbo](https://turbo.hotwired.dev)) frames that can feel eerily reminiscent of those dark days of the early web. With a bit of mental remodeling, Hotwire and Stimulus will have you writing a Twitter and Facebook clone with the same convenient Rails conventions you have come to love with zero to minimal Javascript - certainly not any Javascript on the client-side!

**🚀 Good for**: Similar to Livewire, great for both Admin-facing and public-facing applications.  Particularly, Hotwire plays pretty well with the native mobile and there are enough examples out there that have shipped Hotwire in iOS Apps!

**🛑 Not Good for**: Hotwire has been designed to fit neatly into the original full-stack mindset Rails is well known for, that is a lot of CRUD-heavy apps.  Again, if you're doing a fair amount of animation, for instance, maybe you might need something different.


### 1️⃣ Phoenix Liveview

![live-view.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1632778647936/bx5PQcQ-u.jpeg)
Liveview doing some complex Canvas stuff from the Server! 📸: http://www.petecorey.com

The only reason I place [Liveview](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html) first in my list is that Phoenix is the framework that popularized this particular flavor of HTML-over-the-wire.  [Phoenix](https://www.phoenixframework.org) is a Web Framework written on top of the [Elixir language](https://elixir-lang.org) which is syntactically inspired by Ruby and architecturally inspired by [Erlang](https://www.erlang.org).  Erlang is a telecommunications optimized language whose concurrency model has made it a sensible choice for building concurrency heavy services such as [WhatsApp](https://www.linkedin.com/pulse/why-whatsapp-used-erlang-ritobroto-seth/).

Both Erlang and Elixir are functional programming languages and the Elixir provides an extremely powerful, processes-based concurrent model using [Genservers](https://elixir-lang.org/getting-started/mix-otp/genserver.html) - which has made the Phoenix framework a popular choice for building applications with a lot of concurrent, real-time needs such as ride - or bike - hailing!

With this context, it is easy to see why such a community were some of the earliest to toy with the idea of streaming HTML over the wire, using a similar concurrent model they have built for streaming data changes so well to their clients.

**🚀 Good for**: Liveview is great for real-time media-style Apps, like Election Results streaming over an interactive map, or play-by-play sports interfaces.  Of course, good old business applications needing real-time dashboards, form autocompletion, and other rich, interactive features will work very well with Liveview.

**🛑 Not Good for**: Even though I lead with an impressive image of what Liveview _can_ do, doesn't mean you should do it.  Their website describes animations, menus, and general UI events as being the very thing you might not want to use Liveview for.

***

That's it! I hope this list above gives you a starting point when making design choices for your next application. In 2021, if all you're building is a traditional admin-style web application, then you really don't need to build a REST API and figure out security and hosting a separate App just so you could have a modern, rich frontend.  This is where some of these HTML-over-the-wire solutions could be handy. And for those willing to build a separate Single Page Application, but would like to use another language like C# or Rust - or Elm (!), then some of these compile-to-Javascript technologies could be what you're looking for.

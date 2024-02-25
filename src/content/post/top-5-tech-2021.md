---
publishDate: 2021-01-04T00:00:00Z
title: Top 5 Technologies for Developers in 2021
excerpt: 2021 is already off to a flying start, and if you are a Software Developer, you probably have set some goals to upgrade your programming stack this year.
image: https://res.cloudinary.com/tiyeni/image/upload/v1708837228/top-5-tech-21.jpg
category: Tech
tags:
  - coding
  - beginner
  - career
metadata:
  canonical: https://chienda.com/top-5-tech-2021
---
Happy (Belated) New Year!

![Happy New Year](http://blog.edmdesigner.com/content/images/2016/06/firework-gif1.gif)
Source: [1stforeverything.com](https://1stforeverything.com)

Choosing what to spend your time on can be demanding as you may not know in advance how that investment will pay off.  Luckily for you, I have done some background work and picked up some technologies I think you should be looking at. Let’s get straight into it.

### 5. GraphQL
#### Difficulty: 🟢
Created in 2015, [GraphQL](https://graphql.org) is a new way to transport and consume data between servers and clients.  Facebook designed the GraphQL specification specifically for low bandwidth conditions to solve two main problems in the REST specification we use today: [over fetching and under fetching data](https://stackoverflow.com/questions/44564905/what-is-over-fetching-or-under-fetching).  If you are reading this article, you probably live in a country where most of the users you are building apps for face the problem of unstable internet and low bandwidth. GraphQL will help you build apps that appear faster to your users and utilize fewer hardware resources on their devices.


![graphql-demo.gif](https://res.cloudinary.com/tiyeni/image/upload/w_720/v1613919308/graphql-demo.gif)
Navigating a GraphQL query in GraphQL Playground with autocompletion

What I love most about GraphQL is the developer experience.  Since the API is strongly-typed from the server-side, tools like [GraphQL Playground](https://github.com/graphql/graphql-playground) (my favorite), [GraphiQL](https://github.com/graphql/graphiql) or [Insomnia](https://insomnia.rest) can provide autocompletion and accurate documentation of the API you will be consuming without needing to call the backend guy! Get started with GraphQL today by consuming the [publicly available Github API](https://docs.github.com/en/graphql) to build an App that lists your most recent Github projects!

### 4. Tensorflow
#### Difficulty: 🟠🟠🟠🟠
If you haven’t been living under a rock over the last five years, you will know that Machine Learning (ML) has grown to become an [essential part of every developer’s tool kit](https://machinelearningmastery.com/programmers-should-get-into-machine-learning/) these days. The topic itself is quite broad and may require brushing up on relevant mathematics to master.  However, several Frameworks exist to ensure that you don’t wander too far down this path, with most of them written in either Python or R programming language.  If JavaScript is the Web Browser language, Python has undoubtedly emerged as the language for Data Science and Machine Learning. [PyTorch](https://pytorch.org), [Scikit Learn](https://scikit-learn.org/stable/), and [Keras](https://keras.io) are some excellent ML choices, but by far, the most popular Framework available today is [Google's TensorFlow](https://www.tensorflow.org).

![Machine Learning Everywhere](https://media.licdn.com/dms/image/C5112AQF8QagRziNBVQ/article-cover_image-shrink_423_752/0/1583890575960?e=1714608000&v=beta&t=mvIqw-CD91kvO2RvdT9zh7ZuElUEpJ70ws2iYf8uLxg)

At its core, TensorFlow provides some useful abstractions over the somewhat complicated underlying principles and algorithms for doing ML. It certainly does not replace the need to understand these principles, but it does provide an intuitive API that you can interact with, allowing you to build pretty much any ML solution you can think of.  For mere developers like me, one book I strongly recommend to equip you just enough to be dangerous is called [“Hands-On Machine Learning with Scikit-Learn and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems.”](https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1491962291)

### 3. Flutter
#### Difficulty: 🟡🟡🟡

![Why Flutter](https://cdn.hashnode.com/res/hashnode/image/upload/v1613919106374/NhtkIc0FU.png)
Source: [Lilac Infotech](https://lilacinfotech.com/blog/9/Why-Google-Flutter)

Flutter is a fast-growing technology created at Google as their version of a cross-platform mobile app development framework.  Before Flutter, the only way to develop a cross-platform mobile App was to use [React Native](https://reactnative.dev), [Xamarin](https://dotnet.microsoft.com/apps/xamarin), or a web-based technology like [Ionic](https://ionicframework.com).  To be clear, a cross-platform App refers to an application built in a single codebase for more than one platform.  The official ways to develop for Android and iOS are to use [Java](https://www.java.com/en/)/[Kotlin](https://kotlinlang.org) and [Objective C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)/[Swift](https://swift.org).  However, technologies like React Native have shown that more [startups prefer to build their Apps once for both platforms](https://hackernoon.com/react-native-for-startups-cut-your-costs-not-corners-be5ba89d8301), as it gets them to market quicker.

And so Google introduced [Flutter](https://flutter.dev),  a [Reactive](https://developers.redhat.com/blog/2017/06/30/5-things-to-know-about-reactive-programming/), widget-based Framework that uses an [Object-Oriented](https://searchapparchitecture.techtarget.com/definition/object-oriented-programming-OOP) language called [Dart](https://dart.dev), and boasting fast, native-like performance on both iOS and Android. One reason I love Flutter is that it comes with a set of pre-built components (called widgets) for both the Android design system (Material) as well as the iOS one (which Flutter calls Cupertino).  Since the owners of Android maintain Flutter, support for these widgets is first class.  Recently, Flutter has also been experimenting with the idea of target the browser with [Flutter for Web](https://flutter.dev/web); and the Desktop with [Flutter for Windows and Mac OS](https://flutter.dev/desktop), respectively.

Rumor has it that Google is working on an Operating System to succeed the popular [Android](https://www.android.com) platform and work seamlessly across various internet devices.  They are calling it [Fuchsia](https://fuchsia.dev), and it seems that the primary way for developing this will be with Flutter, meaning that an investment in Flutter today could reap the rewards in the near Fuschia!

You can find everything you need to know about Flutter on [pub.dev](https://pub.dev).

### 2. TypeScript
#### Difficulty: 🟡🟡🟡
If the first three suggestions were optional, I honestly believe the next two are a must-learn for Web Developers. [TypeScript](https://www.typescriptlang.org) is simply something you need to consider adding to your JavaScript-based projects this year.  Described as a “superset of JavasScript,” TypeScript is quickly becoming the preferred way to build your favorite [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [NodeJS](https://nodejs.org/en/) projects, with first-class integrations in [AngularJS, React, VueJS (all front-end)](https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164), [NestJS (backend)](https://nestjs.com), just to mention a few. The main reason for incorporating TypeScript in your project is to [improve your program’s correctness](https://www.sitepoint.com/typescript-better-javascript-developer/). Not only are you going to prevent silly typo errors when you turn TypeScript on, but you will also most likely enhance the maintainability of your codebase, especially when working with other developers (think yourself in a few weeks).


![Typescript Interface.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1613919705946/bHgGJ3HUm.png)
TypeScript Interface describing a Custom Button element in React

Getting started with TypeScript in your JavaScript project is relatively easy.  Mastering it is a whole different conversation.  The good news is that you can go as necessary or as advanced as you want with TypeScript, and what is most likely is that you will never go back to writing vanilla JavaScript.

You can find [my favorite TypeScript course at Frontend Masters](https://frontendmasters.com/courses/typescript-v2/), but I must say that this platform’s monthly subscription is relatively high.

### 1. Docker
#### Difficulty: 🟡🟡🟡
![Docker](https://venturebeat.com/wp-content/uploads/2020/05/ownCloud-docker-e1590574184529.png?w=1200&strip=all)
Finally, the number 1 technology I think you should be paying attention to in 2021.  Simply put, [Docker](https://www.docker.com) allows you to bundle your applications in its Operating System sandbox before hosting them on a server.  This box uses a special technology called a [container](https://cloud.google.com/containers) that strips away all the fluff that comes with a traditional OS, resulting in container sizes in their 10s of Megabytes instead of GigaBytes. Docker has revolutionized the way we deploy Apps. We no longer need the hosting platform to be fully compatible with all the software and environment as the development platform. Developers using Docker then will not be able to say: “it works on my laptop. I don’t know why it doesn’t work on yours.”

With Docker, the application and all it needs (dependency software, environment variables) to work is wrapped whole in a container that you can simply run on another machine.  It’s kind of like extracting you and your entire kitchen into another house.  You should continue cooking from wherever you left off, right? In this case, the target machine will execute your application and its dependencies in the same way you bundled it, even with a completely different host Operating System, as long as you install Docker there.

Docker is great for server security - as any vulnerabilities will not leak into the hosting machine, and reliability - as the application will run on the server in the exact way the developer ran it on their computer.  It has gained so much momentum today that Engineers have built whole cloud-based Operating Systems such as [Kubernetes](https://kubernetes.io) around the idea of [orchestrating containers](https://www.redhat.com/en/topics/containers/what-is-container-orchestration). Whether you are a Front-end or Backend Developer, you will need to know and learn enough Docker to containerize your pet projects.

***

Please let me know if there are any other frameworks, tools, and languages you will be learning this year.  Feel free to tell me which ones you would like me to explain further.  Happy coding!

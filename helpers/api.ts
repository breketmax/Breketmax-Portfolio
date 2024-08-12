import Kostya from "./kostya1.jpg";
import Roma from "./roma.jpg";
import Kate from "./kate.jpg";
import Maks from "./maks.jpg";
import school from "./school.png";
import ck from "./ck.jpg";
import tpu from "./TPU.jpg";
import ilink from "./iLink.jpg";
import pixlPark from "./pixlPark.png";
import sputnik from "./sputnik.png";

export const API = {
  blog:{
    news:[{
      id:0,
      time:"25 июн",
      title:"Половина вуза пройдена",
      text:""
    },{
      id:1,
      time:"4 июл",
      title:"Банк России я иду",
      text:"Всем привет, это мой блог, подписчики люблю вас.<br/><br/> Сегодня случилось невероятное событие, еще одно собеседование в айти компанию, было очень круто и познавательно!!! <br/><br/> Не, на самом деле я даже почему то начал переживать по этому поводу, принимающие собеседование я думаю почувствовали это.  Несмотря на это я ответил на процентов 70 вопросов по всем темам. Теперь ждать пару недель в надежде, что меня все таки возьмут на стажировку в 20 тысяч в месяц, именно о таком я мечтал. <br/><br/> Банк России держись блин!"
    },{
      id:2,
      time:"7 июл",
      title:"Отдых не всегда полезно",
      text:"Запомните, если вы ходите в зал, не отдыхайте. <br/><br/> Ладно перегнул отдыхайте, но не долго, без длительного перерыва например в 2 недели. Расскажу почему. <br/><br/> Потому что потом, когда вы вновь вернетесь в зал в тренировки, ваши мышцы будут в шоке после тренировки и будут болеть. Я так не мог нормально ходить 2 дня, ноги сказали всего хоро шего. <br/><br/> Постоянство признак успеха."
    },
    {
      id:3,
      time:"20 июл",
      title:"Банк России я не иду",
      text:"Ладно Банк России больше не надо держаться я споткнулся по пути к вам. <br/><br/> Не знаю опять же, почему, но выбор опять пал на другого кандитата, я уже устал если честно от отказов, но сдаваться рано, потом пожалеют же да? <br/><br/> Значит так надо, значит пока дорога другая предначертана. <br/><br/>  Топим родные, все будет но не сразу."
    }],
    reviews:[
      {img:Kate,
        review:"Долго очень искала хорошего веб-разработчика, который бы смог реализовать в точности мою задумку. Нашла)) Рада, что словили крутой match и смогли сделать удобный и эстетичный сайт🔥",
        name:"Екатерина Плешакова",
        post:"Директор Медиацентра ТПУ"
      },
      {
        img:Roma,
        review:"Сперва хочется отметить разработчика, шутки шутками конечно, но сайты делать умеет.  Концепция моего сайта была соблюдена. Все сделал четко по макету, без лишних элементов. Короче говоря 10 вкладок из 10.",
        name:"Роман Повалкович",
        post:"Студент, 7 место в списках на отчисление"
      },
      {
        img:Kostya,
        review:"Я обратился для доработки моего сайта. Была произведена большая работа по разработке нового функционала, которая выполнена на профессиональном уровне с высоким качеством.",
        name:"Константин Тур",
        post:"Топ 1 СФ мира"
      },
      {
        img:Maks,
        review:"Отзыв капец тема трудная, ой незнаю че там типо, остался доволен, все супер, отличный продукт заказывайте не бойтесь, чел проверенный.",
        name:"Макс Нашенский",
        post:"Работает в криптовалюте"
      }
    ]
  },
  timeline:[
    {
      img:school,
      data:"Сентябрь 2009 - Июль 2020",
      title:"Школа",
      text:"Как и обычный пользователь я был в школе, к сожалению, тогда еще не знал как жизнь устроена и старался учиться на отлично."
    },
    {
      img:ck,
      data:"Июнь 2018 - Февраль 2019",
      title:"Лендинг Cho Kogo",
      text:"Мое первое детище, создано дабы представить коллектив всему миру, сейчас этого сайта нет в живых, есть только репозиторий, но глядя на него я понимаю какую дичь я разрабатывал."
    },
    {
      img:tpu,
      data:"Сентябрь 2020 - Июль 2024",
      title:"ТПУ",
      text:"Я не знаю как я тут оказался, но этот вуз дал мне многое чего я бы не нашел в жизни без него, лучшее время для человека, если конечно отмести тот факт, что в вузе надо учиться."
    },
    {
      img:ilink,
      data:"Сентябрь 2021 - Ноябрь 2021",
      title:"iLink",
      text:"Первая моя попытка попасть в IT компанию с нулевым багажом технологий, не зная React учил его самостоятельно, даже не додумался открыть YouTube. По старой схеме, залил в репозиторий, чтоб смотреть как не надо разрабатывать."
    },
    {
      img:pixlPark,
      data:"Сентябрь 2021 - Январь 2022",
      title:"PixlPark",
      text:"Первый блин комом, так было и так будет всегда. Первая галера она как первая любовь, даже если хочешь не забудешь." +
          "Даже не смотря на все это я вынес довольно много знаний, улучшил css с версткой, подтянул JS. Понял как тяжело" +
          "бывает работать в тех.поддержке и что не все люди приятные."
    },
    {
      img:sputnik,
      data:"Январь 2022 - Настоящее время",
      title:"Спутник",
      text:"Именно здесь я освоил все прелести настоящей фронтенд разработки. Первые сорванные спринты, первые выполненные " +
          "спринты, обучение новым различным технологиям, scrum, agile, все это я получил здесь. Безумно благодарен " +
          "компании и всем людям котоыре мне встречались в нет. Этот опыт незаменим."
    }
    // {
    //   img:education,
    //   data:"Декабрь 2021 - Настоящее время",
    //   title:"Обучение",
    //   text:"Осознав что, просто так не попасть во фронтенд, взялся за голову и всеми силами совершенствуюсь, осваивая новые технологии и набивая руку на курсах."
    // },


  ],
  courses:[
    {
      name:"React + Next.js - с нуля. TypeScript, Hooks, SSR и CSS Grid",
      id:0,
      img:"https://cdn.coursehunter.net/courses/360x220/react-next-js-s-nulya-typescript-hooks-ssr-i-css-grid.jpg",
      creator:"udemy",
      rating:5,
      duration:"19:42:34",
      lessons:137,
      data:"05/07/2021",
      lang:"Русский",
      description:{
        part1:"Полный курс по современному Frontend на React и Next.js. Всё от CSS Grid и TypeScript до React Hooks и SSR. Next.js - готовый к production framework для React - самой популярной JavaScript библиотеки на сегодняшний день. Он позволяет разрабатывать производительные, SEO-friendly сайты с использованием Server Side Rendering (SSR) и статической генерацией страниц. <br/><br/>",
        part2:"При этом от вас требуется только базовое знание CSS, HTML и JavaScript, так в рамках курса мы не только разберём Next.js, но и React с нуля. При этом мы будем писать не просто какой-то учебный проект, а реальный production сайт, посвящённый рейтингам. <br/><br/>Мы детально разберём:<ul><li> TypeScript</li><li> Настройку окружения и сборку проекта </li><li> Работу в Figma </li><li> React Hooks </li><li> Создание компонентов </li><li> Контекст </li><li> Роутинг NextJS </li><li> Вёрстку на CSS grid</li><li> Как работает Server Side Rendering (SSR) и статическая генерация страниц </li><li> Встроенные компоненты Next.js </li><li> Работу с формами через react-hook-form </li><li> Анимацию с помощью Framer Motion</li><li> Доступность с клавиатуры и работу ScreenReader </li><li> Подготовку приложения к production и работу Docker</li></ul>Каждый модуль содержит как теоретическую часть, так и live-code, где мы в месте будем создавать приложение с нуля. В конце каждого модуля вас ожидает тест, который позволит укрепить ваши знания, а небольшие упражнения - попрактиковаться писать код. <br/><br/>В результате курса вы получите знания и навыки, которые необходимы frontend разработчику на реальных проекта. <br/><br/>"
      }
    },
    {
      name:"Solidity & Ethereum in React (Next JS): The Complete Guide",
      id:1,
      img:"https://cdn.coursehunter.net/courses/360x220/solidity-i-ethereum-v-react-next-js-polnoe-rukovodstvo.jpg",
      creator:"udemy",
      rating:5,
      duration:"38:30:36",
      lessons:276,
      data:"10/11/2021",
      lang:"Английский",
      description:{
        part1:"Create real Smart Contracts in Solidity and DApps with React & Next JS. Understand how the Ethereum blockchain works. <br/><br/> <b>What is Ethereum?</b> <br/><br/>Ethereum is a technology that lets you send cryptocurrency to anyone, but in the first place It also powers applications that everyone can use, and no one can takedown. It's the world's programmable blockchain. <br/><br/>Ethereum builds on Bitcoin's innovation, with some big differences. <br/><br/>Both let you use digital money without payment providers or banks. But Ethereum is programmable, so you can also use it for many different digital assets – even Bitcoin! <br/><br/>This also means Ethereum is for more than payments. It's a marketplace of financial services, games, and apps that can't steal your data or censor you. It's the Future.",
        part2:"<b>What is Solidity?</b> <br/><br/>Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs that govern the behavior of accounts within the Ethereum state. <br/><br/>Solidity is a curly-bracket language. It is influenced by C++, Python, and JavaScript, and is designed to target the Ethereum Virtual Machine (EVM). You can find more details about which languages Solidity has been inspired by in the language influences section. <br/><br/>Solidity is statically typed, supports inheritance, libraries, and complex user-defined types, among other features. <br/><br/>With Solidity, you can create contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets. <br/><br/><b>What is this course covering?</b><br/><br/>The course is covering everything you need to become a blockchain developer. Students of this course will learn what Ethereum blockchain is and how it works on the base level and from a developer's perspective. <br/><br/>Students will learn what smart contracts are and how to create them. Smarts contracts are going hand in hand with dApps(decentralized apps). The course is covering them as well. <br/><br/>The frontend for dApps covered in the course was used React library and Next JS framework. CSS and design are built with the help of Bulma and Tailwind frameworks. <br/><br/>Two real-world applications are created in the course. Every part of application creation is well explained and documented. <br/><br/><b>Faucet application:</b><br/><br/>The first application of the course. Students will learn the basics and core knowledge of the Ethereum network by working on practical applications. <br/><br/>The front end of the application is built with React library and Bulma framework, for smart contract creation was used Truffle development environment and Ganache(private blockchain). <br/><br/>Faucet application will enable users to donate and withdraw funds from the smart contract. Users will interact with a smart contract through the website connected to the blockchain network through the Metamask wallet. <br/><br/>The purpose of the first application is to cover the basics while having fun working on something practical. <br/><br/>The most important questions this application is answering are:<ul><li>what is Ethereum (transactions, blockchain)</li><li>what is EVM (bytecode, storage) </li><li>how to create smart contracts and dapps</li><li>how to integrate smart contracts with React</li></ul><br/><br/><b>Marketplace application: </b><br/><br/>This application is covering the creation of an interactive marketplace. Clients of this application will purchase courses(students can choose products of their choice) with Ether digital currency. <br/><br/>With all of the basics covered in the previous application, the focus will be on the practical development part of the Ethereum network. Topics will be more challenging, and lectures will be more practical code-wise. <br/><br/>The second application covers tons of features as few, for example, the marketplace page with real-time updates of Ether currency and course prices compared to the US dollar. <br/><br/>The modal window is dedicated to making orders. Email hashing solution to maintain client's privacy. Order view with order filtering and pagination, and many others. <br/><br/>This application will be built in the Next JS framework with Tailwind as the CSS framework. Next JS is internally using React library. It's straightforward to use and offers SSR(server-side rendering) by default. <br/><br/>SSR offers lots of benefits but also brings few problems in terms of integration with the blockchain. <br/><br/>The entire integration part of Next JS with blockchain is covered, well explained, and documented. The final application will be deployed on the internet. The smart contract will be deployed to the \"live\" mainet network. <br/><br/>The most mentionable topics covered in this application are:<ul><li>Next js(SSR) Integration with Web3 and Blockchain</li><li>Creation of more complicated Smart Contract</li><li>Email hashing and order verification feature</li><li>Testing solution (tests will cover every feature of the smart contract) </li><li>Pagination and Filtering of orders</li></ul>"
      }
    },
    {
      name:"React & TypeScript Chrome Extension Development [2021]",
      id:2,
      img:"https://cdn.coursehunter.net/courses/360x220/razrabotka-rasshireniy-react-i-typescript-dlya-chrome.jpg",
      creator:"fullstack.io",
      rating:5,
      duration:"08:52:35",
      lessons:76,
      data:"09/08/2021",
      lang:"Английский",
      description:{
        part1:"Hi! Welcome to the comprehensive Chrome Extension Development course using modern web frameworks in 2021. This is the only course on Udemy that is focused on building extensions using <b> modern technologies like TypeScript, React and Webpack </b>along with standard JavaScript and HTML/CSS development. Using popular frameworks means that the skills you learn in this course building extensions will be <b> transferrable to general web software development.</b> <br/><br/>",
        part2:"The course is designed flexibly for students of all levels, covering everything from the very basics of extensions to more exciting new technologies! The first part of the course is designed to help you hit the ground running so that you <b> can develop your very first extension within the first hour of the course. </b>Then, we begin introducing more advanced concepts, technologies and projects to supercharge your extension development skills.<br/><br/><b> Throughout the course we cover a ton of concepts and technologies:</b><ul><li>Comprehensive overview of the fundamentals behind Chrome Extensions</li><li>Building extensions using the standard approach with JavaScript, HTML and CSS</li><li>Designing a Webpack build system to enable the use of React and TypeScript in your extension</li><li>Basic usage of Git and NPM on the command line</li><li>Using design system component libraries like Material UI to build beautiful UIs quickly</li><li>Building three large extension projects step-by-step from scratch</li><li>Data fetching using HTTP requests to third party APIs/li><li>Deploying your completed extension to the Chrome Web Store for real users</li></ul> <br/><br/>If you have any additional questions, please let me know. I'm always happy to help! <br/><br/>Register today to see what modern Chrome Extension development can look like!"
      }
    },
    {
      name:"Build a Spotify Connected App",
      id:3,
      img:"https://cdn.coursehunter.net/courses/360x220/sozdayte-prilozhenie-podklyuchennoe-k-spotify.jpg",
      creator:"fullstack.io",
      rating:5,
      duration:"03:47:28",
      lessons:32,
      data:"09/01/2021",
      lang:"Английский",
      description:{
        part1:"Learn how to build a full stack web app to visualize personalized Spotify data with the help of Node.js, React, Styled Components, and the Spotify Web API.<br/><br/>Have you ever been curious to see what your Spotify data looks like? How a round-up of your listening habits gets compiled every year? Or even wanted to see metadata of your favorite tracks? Luckily, Spotify makes a ton of interesting data like this accessible via the Spotify API. For example, there is data available for every users’ top tracks and artists of all time and audio features like danceability and tempo for every single track.",
        part2:"<b>Why this course?</b><br/><br/>If you're interested in accessing personalized Spotify data like we mentioned above, Spotify requires your app to be authorized. And to get authorization, you'll need to implement something called OAuth. This course will walk you through every step of the OAuth flow in a concise, easy to follow way. Unlike YouTube tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, we'll cover everything from explaining what REST APIs are to implementing Spotify's OAuth flow to fetching data from the Spotify API in React hooks. Split into seven modules, each lesson includes clear, detailed explanations and complete code examples. By the end of the course, you'll have an app deployed to the internet that you can share with your friends and add to your portfolio. <br/><br/><b>What we’ll build?</b><br/><br/>On the front end, we’ll build out a professional, responsive user interface with React, React Hooks, and the popular CSS-in-JS library, Styled Components. We’ll pull in data from the Spotify API using modern ES6 async/await methods and display that data in an engaging way. <br/><br/>On the back end, we’ll learn the basics of REST APIs, HTTP requests, and OAuth. We'll lift the veil on how to authorize an app with Spotify, and then build a Node server with the Express framework to handle our authentication requests. Finally, we’ll deploy our app to the internet using Heroku."
      }
    },
    {
      name:"Microservices with Node JS and React",
      id:4,
      img:"https://cdn.coursehunter.net/courses/360x220/mikroservisy-s-node-js-i-react.jpg",
      creator:"udemy",
      rating:5,
      duration:"03:47:28",
      lessons:590,
      data:"04/27/2020",
      lang:"Английский",
      description:{
        part1:"Event-Based Architecture? Covered! Server side rendering with React? Yep.  Scalable, production-ready code? Its here! Microservices are the number one solution for building and scaling out apps that are intended to grow.  Just one little issue: there are few resources online that delve into the most complex and nasty issues around them!  I built this course to fix that.  This course tackles every major issues around microservices head on. From challenges with data replication to confusing unordered event streams, every major challenge of building microservices is covered.",
        part2:"Beyond focusing on the basics of microservices, this course is a perfect introduction to the world of <b>full-stack development</b>.  You will work all the way from the frontend, assembling a <b>React app using Hooks</b>, to the backend, including database design and deployment strategies.  Every step along the way is covered in tremendous detail, with ample diagrams to ensure every step is crystal clear.<br/><br/>Many other resources show only the easiest, simplest apps written with microservices.  This course does the opposite: <b>we focus on the most challenging aspects of microservices</b>, challenges that you will likely encounter every single day.  You will see these difficulties first hand, then <b>solve them with easy-to-understand strategies.</b><br/><br/><b>How This Course Works</b><br/><br/>This course doesn't focus on using an off-the-shelf microservices framework. Many exist, but they hide the inner workings and challenges of microservices away from you. Instead, we will be using a <b>minimal number of libraries</b>, and write as much custom code as possible. This will expose you to challenging problems and clever solutions when handling subjects like async events! <br/><br/><b>What Technology You'll Use</b><br/><br/>Because we are building a full stack application, we will use a variety of technologies. On the frontend, we'll use <b>React</b> and <b>Next JS</b> to present content to users. Each service is created using <b>Node</b> and <b>Express</b>. Data for each service is held in either a <b>Mongo</b> database or <b>Redis</b>. The entire app is deployed and runs in <b>Docker</b> containers executed in a <b>Kubernetes</b> cluster. Finally, almost all of the code in this course is written with <b>Typescript</b>. <br/><br/>This is a scary list of technologies! <b>Not familiar with some of these? No problem!</b> The course is built assuming that you only know the basics of Javascript and Express. <b>No other knowledge is needed</b> - you will learn everything you need to know. <br/><br/><b>What You'll Be Able to Do</b><br/><br/>By the time you complete this course, you will be able to:<ul><li>Architect a multi-service application</li><li>Determine whether your app is a good fit for a microservices approach</li><li>Understand and solve the challenges in async, event-based communication between services</li><li>Use Docker and Kubernetes to deploy a multi-service app to any cloud provider</li><li>Organize and enhance the reusability of code in large projects</li></ul><br/><b>What You'll Learn</b><br/><br/>An absolute incredible number of topics are covered in this course.  Here is a partial list of what you'll do:<ul><li>Practice patterns to create scalable microservices for a variety of app domains</li><li>Build a Server-Side-Rendered React app using Hooks and Next JS</li><li>Write a custom implementation of an event bus</li><li>Optionally, run a development environment through a cloud provider</li><li>Guarantee consistently structured responses from your different API's</li><li>See best practices in communication between different services</li><li>Configure and scale your services using Kubernetes Deployments</li><li>Document and enforce structure constraints on events shared across microservices</li><li>Limit access to your APIs using JWT-based authentication</li><li>And much more!</li></ul><br/>This is the course I wish I had when I was learning microservices. A course that focuses on the hardest parts, gives clear explanations, and discusses the pros and cons of different design options. Sign up today and join me in mastering microservices! <br/><br/><b>Requirements:</b><ul><li>Basic knowledge of Javascript and Express is required</li><li>Knowledge of React is good, but not needed</li><li>You must be familiar and comfortable with the command line</li></ul><b>Who this course is for:</b><ul><li>Javascript engineers looking to build large, scalable applications</li><li>This course is *not* designed for sysadmins focused on infrastructure deployment</li></ul><br/><b>What you'll learn:</b><ul><li>Architect large, scalable apps using a collection of microservices</li><li>Deploy a multi-service app to the cloud with Docker and Kubernetes</li><li>Solve concurrency issues in a distributed systems environment</li><li>Leverage your Javascript skills to build a complex web app</li><li>Build a Server-Side Rendered React App to render data from your microservices</li><li>Understand how enterprise companies design their infrastructure</li><li>Share reusable code between multiple Express servers using custom NPM packages</li><li>Write comprehensive tests to ensure each service works as designed</li><li>Communicate data between services using a lightning-fast event bus</li><li>Write nothing but production-level code. No cutting corners!</li></ul>"
      }
    },

  ]
};



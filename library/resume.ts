export interface Location {
  address?: string;
  city?: string;
  postalCode?: string;
  countryCode?: string;
  region?: string;
}

export interface Profile {
  url: string;
  network?: string;
  username?: string;
}

//

export interface Basics {
  name: string;
  label?: string;
  summary?: string;
  image?: string;

  email?: string;
  phone?: string;
  url?: string;

  location?: Location;
  profiles?: Profile[];
}

export interface Work {
  name: string;
  location?: Location;
  description?: string;
  position?: string;
  url?: string;

  startDate?: Date | string;
  endDate?: Date | string;

  summary?: string;
  highlights?: string[];
}

export interface Skill {
  name?: string;
  level?: string;
  keywords?: string[];
}

export interface Interests {
  summary?: string;
  keywords?: string[];
}

export interface Reference {
  name?: string;
  position?: string;
  company?: string;
  reference?: string;
}

//

export interface Resume {
  basics: Basics;
  work: Work[];

  skills?: Skill[];
  interests?: Interests;
  references?: Reference[];
}

export const resume: Resume = {
  basics: {
    name: "Andrew Gallagher",
    label: "Maker, Coder, Tourist, Geek",
    summary: `My passion for technology and craftsmanship has naturally led me to a career in software development, specialising in creating scalable web applications that captivate users.`,
    email: "hello@kivlor.com",
    url: "http://kivlor.com",
    location: {
      city: "Brisbane",
      countryCode: "AU",
      region: "QLD"
    },
    profiles: [
      {
        network: "Github",
        username: "kivlor",
        url: "https://github.com/kivlor"
      },
      {
        network: "Instagram",
        username: "kivlor",
        url: "https://instagram.com/kivlor"
      },
      {
        network: "Linkedin",
        username: "kivlor",
        url: "https://www.linkedin.com/in/kivlor"
      }
    ]
  },
  work: [
    {
      name: "Dubber",
      position: "Technical Lead",
      startDate: "2021-09",
      endDate: "now",
      summary: "I initially led the integration of the Notiv web app with Dubber's call platform after Notiv was acquired. This required moving deployments to Kubernetes and ingesting AI and call data from Kafka. From there, our team rebranded to Notes and developed an MS Teams app on top of Dubber's MS Teams recorder. I then took on the Tech Lead role for a new team working to move service activation and management into separate micro-services built with .NET and DynamoDB.",
      highlights: [ "ruby/rails", "typescript/react", "postgresql", "dynamodb", "redis", "kafka", "docker", "kubernetes", "terraform", "git", "ci/cd" ]
    },
    {
      name: "Notiv",
      position: "Senior Software Developer",
      startDate: "2019-09",
      endDate: "2021-09",
      summary: "I joined Notiv in early startup mode and quickly had to re-learn Rails while also tackling front-end tasks for both web and mobile. I spent time early on containerising the web app, allowing us to move deployments from Heroku to AWS ECS for clients requiring data sovereignty. My later projects involved working with the AI team to integrate new features such as live transcription (utilising PostgreSQL notifications) and speaker identification (utilising AI data stored in S3).",
      highlights: [ "ruby/rails", "typescript/react", "postgresql", "redis", "heroku", "docker", "aws ecs", "terraform", "git", "ci/cd" ]
    },
    {
      name: "Temando",
      position: "Senior Software Developer",
      startDate: "2015-07",
      endDate: "2021-09",
      summary: "I oversaw the technical aspects of web projects, including planning, design, testing, and deployment. Initially, I joined as a Senior Developer to rebuild the proprietary CMS using MVC architecture with PHP/MySQL. Later, we diversified into projects using Laravel, Wordpress, and ExpressionEngine. Finally, I introduced Gitlab and optimised workflows for the team, and contributed to the company blog on topics like the importance of GitHub accounts and building custom CSS frameworks.",
      highlights: [ "php/symphony", "typescript/react", "lua", "aws lambda", "dynamodb", "nginx", "cloudformation", "git", "ci/cd" ]
    },
    {
      name: "Klyp",
      position: "Technical Lead",
      startDate: "2013-05",
      endDate: "2015-05",
      summary: "I led the development of a social web app using CodeIgniter for the back-end, MongoDB as the data store, and SpineJS for the front-end, with significant usage of SASS and CoffeeScript. Additionally, I contributed to various MVP projects, notably a high-traffic file-sharing site similar to WeTransfer, employing CodeIgniter with MySQL. Another engaging project was Forge, a CMS resembling SquareSpace, built on Sinatra with MySQL and DataMapper ORM. In Forge, I primarily focused on the front-end, where I developed a responsive CSS framework. Occasionally, I also assisted in maintaining FileFactory, a longstanding file-sharing platform, addressing support requests and aiding in a redesign.",
      highlights: [ "php/laravel", "javascript/gulp", "html/css", "git" ]
    },
    {
      name: "Ideas Lab",
      position: "Senior Software Developer",
      startDate: "2011-09",
      endDate: "2013-04",
      summary: "My role mainly involved enhancing the proprietary CMS and crafting client websites, often handling both development and design aspects. The CMS adhered to MVC architecture with view files utilising the Smarty templating engine, and I maintained strict adherence to HTML/CSS standards to ensure error-free parsing. Additionally, I created various CMS modules, including a versatile e-commerce module supporting multiple payment gateways. Working with local, national, and international clients broadened my experience, and I adapted quickly to Unix-based systems, mastering shell prompt operations.",
      highlights: [ "php/codeignitor", "ruby/sinatra", "coffeescript/spine", "html/css", "mysql", "mongodb", "git" ]
    },
    {
      name: "Internet Our Way",
      position: "Software Developer",
      startDate: "2009-12",
      endDate: "2011-09",
      summary: "My role mainly involved enhancing the proprietary CMS and crafting client websites, often handling both development and design aspects. The CMS adhered to MVC architecture with view files utilising the Smarty templating engine, and I maintained strict adherence to XHTML/CSS standards to ensure error-free parsing. Additionally, I created various CMS modules, including a versatile e-commerce module supporting multiple payment gateways.",
      highlights: [ "php/smarty", "javascript", "html/css", "mysql", "git", "photoshop", ]
    },
    {
      name: "Comdispatch",
      position: "Software Developer",
      startDate: "2007-08",
      endDate: "2009-11",
      summary: "My role focused on developing new features for the company's web platforms, while also taking charge of setting up new client systems and efficiently migrating data using MySQL's migration tools. Additionally, I played a key role in building and maintaining the LAMP servers utilised for testing and development purposes, ensuring smooth operations across the board.",
      highlights: [ "php", "javascript", "html/css", "mysql" ]
    },
    {
      name: "Better Mortgage Management",
      position: "Tech Support / Junior Software Developer",
      startDate: "2006-01",
      endDate: "2007-08",
      summary: "I contributed to the development of the company's web-based mortgage software, addressing any IT support issues internally, and actively researching and procuring necessary software or hardware to facilitate operations. This encompassed a multifaceted role where I not only participated in software development but also ensured the seamless functioning of IT systems and facilitated technological advancements to support organisational needs.",
      highlights: [ "javascript", "html/css", "windows server/active directory" ]
    },
    {
      name: "Local Lenders",
      position: "Tech Support / Junior Graphic Designer",
      startDate: "2003-08",
      endDate: "2005-12",
      summary: "I undertook the setup and ongoing maintenance of IT infrastructure for both new and existing franchisees, ensuring their operational efficiency. Additionally, I conducted research and facilitated the procurement of necessary software or hardware, aligning with the evolving needs of the business. Furthermore, I contributed to marketing efforts by designing and arranging print advertisements, bolstering the company's visibility and outreach strategies.",
      highlights: [ "dycodocs", "html/css", "photoshop" ]
    },
  ],
  skills: [
    {
      name: "Development Languages",
      keywords: ["html/css", "javascript/typescript", "lua", "php", "ruby"]
    },
    {
      name: "Frameworks and Libraries",
      keywords: ["codeigniter", "expressionengine", "laravel", "react", "ruby on rails", "sinatra", "smarty", "spinejs", "wordpress"]
    },
    {
      name: "Data Storage",
      keywords: ["dynamodb", "kafka", "mysql", "postgresql", "redis", "s3"]
    },
    {
      name: "Infrastructure and Cloud Services",
      keywords: ["aws ecs", "aws lambda", "cloudformation", "kubernetes", "terraform"]
    }
  ]
}

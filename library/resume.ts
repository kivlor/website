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

export interface Interest {
  name?: string;
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
  interests?: Interest[];
  references?: Reference[];
}

export const resume: Resume = {
  basics: {
    name: "Andrew Gallagher",
    label: "Maker, Coder, Tourist, Geek",
    summary: "I became a software developer because I love solving problems. I specialize in building web applications that are both scalable and engaging for users. Additionally, I'm eager to improve my leadership skills to help my fellow developers grow.",
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
      summary: "...",
      highlights: [ "ruby/rails", "typescript/react", "postgresql", "dynamodb", "redis", "kafka", "docker", "kubernetes", "terraform", "git", "ci/cd" ]
    },
    {
      name: "Notiv",
      position: "Senior Software Developer",
      startDate: "2019-09",
      endDate: "2021-09",
      summary: "...",
      highlights: [ "ruby/rails", "typescript/react", "postgresql", "redis", "heroku", "docker", "aws ecs", "terraform", "git", "ci/cd" ]
    },
    {
      name: "Temando",
      position: "Senior Software Developer",
      startDate: "2015-07",
      endDate: "2021-09",
      summary: `I began at Temando creating integrations with third-party carrier APIs (SOAP/REST) and a real-time package tracking service in Go. Transitioning to the company's new platform, I worked on node.js micro-services deployed to AWS Lambda. I spent time in Vietnam and the US to mentor and knowledge transfer. I ended mmy time at Temando focusing on projects like developing a proxy server with NGINX and Lua scripting for AWS ELB deployment.`,
      highlights: [ "php/symphony", "typescript/serverless", "lua", "aws lambda", "dynamodb", "nginx", "cloudformation", "git", "ci/cd" ]
    },
    {
      name: "Klyp",
      position: "Senior Software Developer",
      startDate: "2013-05",
      endDate: "2015-05",
      summary: `As the Technical Lead at Klyp, I oversaw the technical aspects of web projects, including planning, design, testing, and deployment. I led a team of 6 developers. Initially, I joined as a Senior Developer to rebuild the proprietary CMS using MVC architecture and transitioning to a denormalized database. Later, we diversified into projects using Laravel, Wordpress, and ExpressionEngine. Laravel became popular for its simplicity and rapid MVP development. We utilized the LAMP stack for both CMS and Laravel projects. I introduced Gitlab and optimized workflows for the team, and contributed to the company blog on topics like the importance of GitHub accounts and building custom CSS frameworks.`,
      highlights: [ "php/laravel", "javascript/gulp", "html/css", "git" ]
    },
    {
      name: "Ideas Lab",
      position: "Senior Software Developer",
      startDate: "2011-09",
      endDate: "2013-04",
      summary: `At The Idea Lab, I led development of a social web app using CodeIgniter (back-end), MongoDB (data store), SpineJS (front-end), with significant SASS and CoffeeScript usage. I also contributed to various MVP projects, notably a high-traffic file-sharing site like WeTransfer, employing CodeIgniter with MySQL. Another engaging project was Forge, a CMS akin to SquareSpace, built on Sinatra with MySQL and DataMapper ORM, where I primarily focused on frontend, crafting a responsive CSS framework. Additionally, I occasionally assisted in maintaining FileFactory, a longstanding file-sharing platform, addressing support requests and aiding in a 2012 redesign.`,
      highlights: [ "php/codeignitor", "ruby/sinatra", "coffeescript/spine", "html/css", "mysql", "mongodb", "git" ]
    },
    {
      name: "Internet Our Way",
      position: "Software Developer",
      startDate: "2009-12",
      endDate: "2011-09",
      summary: `At IOW, I gained foundational development experience, honing best practices under the guidance of the lead developer. My main tasks involved enhancing the proprietary CMS and crafting client websites, often handling both development and design aspects. The CMS adhered to MVC architecture with view files utilizing the Smarty templating engine, and I maintained strict adherence to XHTML/CSS standards with error-free parsing. Additionally, I created various CMS modules, including a versatile e-commerce module supporting multiple payment gateways. Working with local, national, and international clients broadened my experience, and I adapted quickly to Unix-based systems, mastering shell prompt operations.`,
      highlights: [ "php", "javascript", "html/css", "mysql", "git", "photoshop", ]
    },
    {
      name: "Comdispatch",
      position: "Software Developer",
      startDate: "2007-08",
      endDate: "2009-11",
      summary: `In my role, I primarily focused on developing new features for the company's web platforms, while also taking charge of setting up new client systems and efficiently migrating data using MySQL's migration tools. Additionally, I played a key role in building and maintaining the LAMP servers utilized for testing and development purposes, ensuring smooth operations across the board.`,
      highlights: [ "php", "javascript", "html/css", "mysql" ]
    },
    {
      name: "Better Mortgage. Management",
      position: "Tech Support / Junior Software Developer",
      startDate: "2006-01",
      endDate: "2007-08",
      summary: `I contributed to the development of the company's web-based mortgage software, addressing any IT support issues internally, and actively researching and procuring necessary software or hardware to facilitate operations. This encompassed a multifaceted role where I not only participated in software development but also ensured the seamless functioning of IT systems and facilitated technological advancements to support organizational needs.`,
      highlights: [ "javascript", "html/css", "windows server/active directory" ]
    },
    {
      name: "Local Lenders",
      position: "Tech Support / Junior Graphic Designer",
      startDate: "2003-08",
      endDate: "2005-12",
      summary: `I undertook the setup and ongoing maintenance of IT infrastructure for both new and existing franchisees, ensuring their operational efficiency. Additionally, I conducted research and facilitated the procurement of necessary software or hardware, aligning with the evolving needs of the business. Furthermore, I contributed to marketing efforts by designing and arranging print advertisements, bolstering the company's visibility and outreach strategies.`,
      highlights: [ "dycodocs", "html/css", "photoshop" ]
    },
  ]
}

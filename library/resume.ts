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
    summary: "Cras semper auctor neque vitae tempus. Tellus in hac habitasse platea dictumst vestibulum. Integer enim neque volutpat ac tincidunt. Tellus mauris a diam maecenas sed enim. Est lorem ipsum dolor sit amet. Tristique et egestas quis ipsum suspendisse. Ut eu sem integer vitae justo eget. Facilisi nullam vehicula ipsum a arcu cursus vitae.",
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
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed.",
      highlights: [ "ruby/rails", "typescript/react", "postgresql", "dynamodb", "redis", "kafka", "docker", "kubernetes", "terraform", "git", "ci/cd" ]
    },
    {
      name: "Notiv",
      position: "Senior Software Developer",
      startDate: "2019-09",
      endDate: "2021-09",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed.",
      highlights: [ "ruby/rails", "typescript/react", "postgresql", "redis", "heroku", "docker", "aws ecs", "terraform", "git", "ci/cd" ]
    },
    {
      name: "Temando",
      position: "Senior Software Developer",
      startDate: "2015-07",
      endDate: "2021-09",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed.",
      highlights: [ "php/symphony", "typescript/serverless", "lua", "aws lambda", "dynamodb", "nginx", "cloudformation", "git", "ci/cd" ]
    },
    {
      name: "Klyp",
      position: "Senior Software Developer",
      startDate: "2013-05",
      endDate: "2015-05",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed.`,
      highlights: [ "php/laravel", "javascript/gulp", "html/css", "git" ]
    },
    {
      name: "Ideas Lab",
      position: "Senior Software Developer",
      startDate: "2011-09",
      endDate: "2013-04",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed.`,
      highlights: [ "php/codeignitor", "ruby/sinatra", "coffeescript/spine", "html/css", "mysql", "mongodb", "git" ]
    },
    {
      name: "Internet Our Way",
      position: "Software Developer",
      startDate: "2009-12",
      endDate: "2011-09",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed.`,
      highlights: [ "php", "javascript", "html/css", "mysql", "git", "photoshop", ]
    },
    {
      name: "Comdispatch",
      position: "Software Developer",
      startDate: "2007-08",
      endDate: "2009-11",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed.`,
      highlights: [ "php", "javascript", "html/css", "mysql" ]
    },
    {
      name: "Better Mortgage. Management",
      position: "Tech Support / Junior Software Developer",
      startDate: "2006-01",
      endDate: "2007-08",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed.`,
      highlights: [ "javascript", "html/css", "windows server/active directory" ]
    },
    {
      name: "Local Lenders",
      position: "Tech Support / Junior Graphic Designer",
      startDate: "2003-08",
      endDate: "2005-12",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed.`,
      highlights: [ "dycodocs", "html/css", "photoshop" ]
    },
  ],
  skills: [],
  interests: [],
  references: []
}

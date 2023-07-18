// gitprofile.config.js

const config = {
   // To hide the `My Projects` section, keep it empty.
  github: {
    username: 'David-Hackro', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['streaming-ffmeg', 'android-best-practices'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'davidhackro',
    //twitter: 'DavidHackro',
    //instagram: 'davidhackro',
    stackoverflow: '3741698/david-hackro', // format: userid/username
    //youtube: 'https://www.youtube.com/@tutorialeshackro',
    //phone: '',
    //email: 'hackro91@gmail.com',
  },
  /*resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },*/
 
     skills: [
    'Kotlin',
    'Java',
    'Dagger',
    'Koin',
    'Hilt',
    'RX-Java',
    'Coroutines',
    'Room',
    'SQLite',
    'Navigation',
    'MVVM',
    'MVC',
    'MVP',
    'MVI',
    'Clean Architecture',
], 
softwares: [
  'Scripting',
  'Repository Pattern',
  'Observer Pattern',
  'Singleton Pattern',
  'Factory Pattern',
  'Adapter Pattern',
  'Dependency Injection',
  'S.O.L.I.D.',
  'Documentation',
  'Algorithms',
  'Code review',
  'CI/CD',
  'Automatitation',
  ],
  experiences: [
    {
      company: 'Zigatta',
      position: 'Mobile Engineer',
      from: 'Dec 2021',
      to: 'Present',
      companyLink: 'https://zigatta.com/',
    },
    {
      company: 'Rappi',
      position: 'Mobile Engineer',
      from: 'Jun 2020',
      to: 'Dec 2021',
      companyLink: 'https://www.rappi.com/',
    },
    {
      company: 'Segunda mano',
      position: 'Mobile Engineer',
      from: 'Dec 2018',
      to: 'Apr 2020',
      companyLink: 'https://www.segundamano.mx/',
    },
    {
      company: 'Reservamos',
      position: 'Mobile Engineer',
      from: 'Mar 2017',
      to: 'Nov 2018',
      companyLink: 'https://www.reservamos.mx/',
    },
    {
      company: 'Secretaría de Finanzas y Administración',
      position: 'Mobile Engineer',
      from: 'Nov 2015',
      to: 'Jan 2017',
      companyLink: 'https://www.reservamos.mx/',
    },
  ],
   externalProjects: [
    {
      title: 'Rappi',
      description:
        'Rappi is a technology company that builds a marketplace where local commerce in Latin America can thrive. Learn more.',
      imageUrl: 'https://play-lh.googleusercontent.com/zzlIRBWzuMrXkt6USMcpye4rr6pttg3Asj5tuXt0kQ4xPvCCgwZz4tBtAI6ws4v2MhU=w480-h960-rw',
      link: 'https://play.google.com/store/apps/details?id=com.grability.rappi',
    },
    {
      title: 'Segunda Mano',
      description:
        'Segundamano is the largest classifieds site in the Mexican market, bringing together the best sellers and buyers to make great deals.',
      imageUrl: 'https://play-lh.googleusercontent.com/YL723oXPwpq6ld30mCB4dNFqspSGe_TDFmTak3JgCy8WS48WKrHq-do9wHzjchVecw=s96-rw',
      link: 'https://play.google.com/store/apps/details?id=mx.segundamano.android',
    },
    {
      title: 'Reservamos',
      description:
        'Reservamos is the #1 app to compare and buy your bus tickets in Mexico, and now you can also book your hotel.',
      imageUrl: 'https://play-lh.googleusercontent.com/buvhADJJ9J4iMd6HYULH0_rCUc82udoAkBnrBpEvRHIgz2JemVJq5tG9LWwzGV4uUet4=w480-h960-rw',
      link: 'https://play.google.com/store/apps/details?id=com.reservamos.viajes',
    },
    {
      title: 'Eleonor',
      description:
        'Eleonor is the software that has the necessary tools to help you increase and coordinate the care you give to your patients, maintaining continuous communication.',
      imageUrl: 'https://play-lh.googleusercontent.com/lPl8fMwwxVNjLPMAF5ZAl-3XEMtbsAVj6by2QREg5jCtS2u3ua_AM41pMKJ1apAxfJJQ=w480-h960-rw',
      link: 'https://play.google.com/store/apps/details?id=com.overcome.Help&hl=es_MX',
    },
  ],
   communityProjects: [
   {
      title: 'Android Dev Podcast',
      description:'Podcast about android environment',
      imageUrl: 'https://pbs.twimg.com/profile_images/1193191513326374912/QeHXipnB_400x400.jpg',
      link: 'https://open.spotify.com/show/1gqGqMNVvprvfCoPC023Ml?si=a3aa0d878451424a',
    },
    {
      title: 'Youtube Channel',
      description:'Channel that has the purpose of teaching software through tutorials and videos in general',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png',
      link: 'https://www.youtube.com/channel/UClxVhu_GAuKJO7RSM-JAdtw',
    },
   {
      title: 'Tiktok',
      description:'Videos about technical questions of software in gral',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/TikTok.png',
      link: 'https://www.tiktok.com/@davidhackro',
    },
  {
      title: 'Dev Nigths Podcast',
      description:'Podcast about a group of technology enthusiasts who meet to talk about different topics, such as programming, frameworks, workflows, tools, etc.',
      imageUrl: 'data:image/jpeg;base64,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',
      link: 'https://open.spotify.com/show/2IWCWKMspLfrpF3jYerthG',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Universidad Tecnológica De Puebla',
      degree: 'bachelor of science technology',
      from: '2013',
      to: '2017',
    }
  ],
  // Display blog posts from your medium or dev account. (Optional)
  /*blog: {
    source: 'dev', // medium | dev
    username: 'davidhackro', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },*/
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;

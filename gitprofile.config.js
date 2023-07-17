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
      title: 'Youtube Channel',
      description:'Channel that has the purpose of teaching software through tutorials and videos in general',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png',
      link: 'https://www.youtube.com/channel/UClxVhu_GAuKJO7RSM-JAdtw',
    },
      {
      title: 'Android Dev Podcast',
      description:'Podcast about android environment',
      imageUrl: 'https://pbs.twimg.com/profile_images/1193191513326374912/QeHXipnB_400x400.jpg',
      link: 'https://open.spotify.com/show/1gqGqMNVvprvfCoPC023Ml?si=a3aa0d878451424a',
    },
   {
      title: 'Tiktok',
      description:'Videos about technical questions of software in gral',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/TikTok.png',
      link: 'https://www.tiktok.com/@davidhackro',
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

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
// import vrHeadset from '@public/prizes/vr_headset.png';
import macbookNeo from '@public/prizes/macbook_neo.png';
import electricScooter from '@public/prizes/electric_scooter.png';
import monitor from '@public/prizes/monitor.png';
// import steamGiftcard from '@public/prizes/steam_giftcard.png';
import googleTv from '@public/prizes/google_tv.png';
import hdSwag from '@public/prizes/hd_swag.png';
// import kindle from '@public/prizes/kindle.png';
import projector from '@public/prizes/projector.png';
// import raspberryPi from '@public/prizes/raspberry_pi.png';
import mouse from '@public/prizes/mouse.png';
import keyboard from '@public/prizes/keyboard.png';
// import figmaLogo from '@public/prizes/figma_logo.png';
import chatgptLogo from '@public/prizes/chatgpt_logo.png';
import backpack from '@public/prizes/backpack.png';
import bluetoothSpeaker from '@public/prizes/bluetooth_speaker.png';
// import aromaDiffuser from '@public/prizes/aroma_diffuser.png';
// import pokemonPacks from '@public/prizes/pokemon_packs.png';
import amazonGiftcard from '@public/prizes/amazon_giftcard.png';
import claudeLogo from '@public/prizes/claude_logo.png';
import ankerCharger from '@public/prizes/anker_charger.png';
import daytona from '@public/prizes/daytona.png';
import googleSwagKit from '@public/prizes/googleSwagKit.png';
import wirelessEarbuds from '@public/prizes/wirelessEarbuds.png';
import ledgerNanoSPlus from '@public/prizes/ledgerNanoSPlus.png';
import tileEssentialsPack from '@public/prizes/tileEssentialsPack.png';
import portableScreens from '@public/prizes/portableScreens.png';
import m5StackIotKit from '@public/prizes/m5StackIotKit.png';
import digitalGiftCard from '@public/prizes/digitalGiftCard.png';
import sonyHeadphones from '@public/prizes/sony_headphones.webp';
import datalab from '@public/prizes/datalab.png';

interface TrackData {
  name: string;
  filter: string[];
  prizes: string[];
  images: StaticImport[];
  eligibility_criteria: string;
  domain?: string;
  domainDisplayName?: string;
  scoring_criteria?: {
    attribute: string;
    guidelines: {
      1: string;
      3: string;
      5: string;
    };
  }[];
}

interface Tracks {
  [track: string]: TrackData;
}

const automaticTracks: Tracks = {
  'Best Hack for Social Good': {
    name: 'Best Hack for Social Good',
    filter: ['General'],
    prizes: ['2026 Macbook Neo', 'Electric Scooter'],
    images: [macbookNeo, electricScooter],
    eligibility_criteria:
      'Encapsulate your authentic idea of what "social good" can look like. All entries are automatically considered for this prize category.',
  },
  "Hacker's Choice Award": {
    name: "Hacker's Choice Award",
    filter: ['General'],
    prizes: ['HackDavis Swag Bag (Tote, Stickers, Keychains)'],
    images: [hdSwag],
    eligibility_criteria:
      'Awarded to the project with the most votes from our 2026 hackers. All entries are automatically considered for this prize category. Vote for any project but your own!',
  },
};

const optedHDTracks: Tracks = {
  'Most Technically Challenging Hack': {
    name: 'Most Technically Challenging Hack',
    filter: ['Technical'],
    prizes: ['AULA F75 75% Wireless Mechanical Keyboard'],
    images: [keyboard],
    eligibility_criteria:
      'Projects must showcase breadth and application of technical knowledge. Focuses on use of advanced technical tools + algorithms/data structures, integration of multiple technologies, quality of implementation, displays technical depth, graded on performance/scalability.',
    domain: 'swe',
    domainDisplayName: 'Software Engineering',
    scoring_criteria: [
      {
        attribute: 'Technical Complexity of the Problem',
        guidelines: {
          1: 'Basic or well-known problem with low complexity.',
          3: 'Problem has multiple edge cases that require thoughtful design.',
          5: 'Highly complex or novel problem requiring significant technical insight.',
        },
      },
      {
        attribute: 'Quality of Engineering',
        guidelines: {
          1: 'Incomplete or poorly structured project; minimal components.',
          3: 'Implements organized architecture with clear separation of concerns and good practices.',
          5: 'Exceptionally well-engineered; modular, scalable, fault-tolerant and efficient.',
        },
      },
      {
        attribute: 'Integration of Tools or Techniques',
        guidelines: {
          1: 'Utilizes minimal external tools, frameworks, or libraries.',
          3: 'Uses advanced tools with purpose and understanding.',
          5: 'Integrates multiple advanced technologies/techniques (like parallelism, optimization, etc.) skillfully.',
        },
      },
    ],
  },
  'Best Beginner Hack': {
    name: 'Best Beginner Hack',
    filter: ['General'],
    prizes: ['24 Inch Monitor'],
    images: [monitor],
    eligibility_criteria:
      'Every team member must be a first-time hacker in order to qualify. Demonstrate a high level of growth through this project. Foster creativity and collaboration within the team and display a commitment to building skills.',
    domain: 'swe',
    domainDisplayName: 'Software Engineering',
    scoring_criteria: [
      {
        attribute: 'Evidence of Learning and Growth',
        guidelines: {
          1: 'Little learning shown; reused known skills.',
          3: 'Used new tools or concepts with some success.',
          5: 'Strong grasp of entirely new topics; applied effectively.',
        },
      },
      {
        attribute: 'Team Collaboration',
        guidelines: {
          1: 'Disjointed teamwork; unclear roles.',
          3: 'Some coordination; shared effort.',
          5: 'Strong team balance; active support across roles.',
        },
      },
      {
        attribute: 'Problem-Solving and Persistence',
        guidelines: {
          1: 'Gave up easily or avoided addressing problems.',
          3: 'Worked through some challenges with effort.',
          5: 'Tackled tough issues with creative persistence.',
        },
      },
    ],
  },
  'Best Interdisciplinary Hack': {
    name: 'Best Interdisciplinary Hack',
    filter: ['General'],
    prizes: ['$50 Amazon Giftcard'],
    images: [amazonGiftcard],
    eligibility_criteria:
      'Leverage multiple perspectives across different disciplines to create a more well-rounded project. At least one member of the team needs to be a non-CS/CSE/otherwise CS-related major in order to qualify.',
    domain: 'swe',
    domainDisplayName: 'Software Engineering',
    scoring_criteria: [
      {
        attribute: 'Problem Selection',
        guidelines: {
          1: 'Problem could be solved within one discipline.',
          3: 'Problem benefits from multiple perspectives but is not very original.',
          5: "Highly original problem that requires all members' disciplines.",
        },
      },
      {
        attribute: 'Disciplinary Balance',
        guidelines: {
          1: 'All CS-related majors or one discipline heavily dominates the project.',
          3: 'Multiple disciplines with clear contributions.',
          5: 'Disciplines are deeply interwoven; equal importance given to insights from each field.',
        },
      },
      {
        attribute: 'Cross-Field Innovation',
        guidelines: {
          1: 'Disciplines barely connected/combined with unclear purpose.',
          3: 'Fields work together to enhance the solution.',
          5: 'True blend creating something impossible within one field.',
        },
      },
    ],
  },
  'Most Creative Hack': {
    name: 'Most Creative Hack',
    filter: ['General'],
    prizes: ['Mini Projector'],
    images: [projector],
    eligibility_criteria:
      'Projects should demonstrate originality, showcase out-of-the-box thinking, and captivate its audience.',
    domain: 'business',
    domainDisplayName: 'Business',
    scoring_criteria: [
      {
        attribute: 'Originality of Concept',
        guidelines: {
          1: 'Common idea; similar to known projects.',
          3: 'Interesting twist or framing of a common idea.',
          5: 'Fresh, unexpected concept.',
        },
      },
      {
        attribute: 'Creative Execution',
        guidelines: {
          1: 'Conventional build; little imagination.',
          3: 'Some creative choices in implementation.',
          5: 'Inventive design; imaginative features.',
        },
      },
      {
        attribute: 'User Engagement',
        guidelines: {
          1: 'Uninspiring or hard to connect with.',
          3: 'Moderately interesting or novel.',
          5: 'Memorable and captivating experience.',
        },
      },
    ],
  },
  'Best Hardware Hack': {
    name: 'Best Hardware Hack',
    filter: ['Technical'],
    prizes: ['Logitech G305 Lightspeed Wireless Gaming Mouse'],
    images: [mouse],
    eligibility_criteria:
      'Effectively integrate a hardware component to your final project. The final project should be functional, user-friendly, and interactive.',
    domain: 'hardware',
    domainDisplayName: 'Hardware or Embedded Systems',
    scoring_criteria: [
      {
        attribute: 'Hardware Integration',
        guidelines: {
          1: 'Disconnected or non-functional hardware.',
          3: 'Working hardware with basic integration.',
          5: 'Seamless integration; essential to project.',
        },
      },
      {
        attribute: 'Feasibility and Technical Soundness',
        guidelines: {
          1: 'Unrealistic approach; unlikely to work outside controlled conditions.',
          3: 'Functional demo with some practical limitations or assumptions.',
          5: 'Well-grounded and executable design; feasible to reproduce or extend.',
        },
      },
      {
        attribute: 'User Interaction',
        guidelines: {
          1: 'Difficult to operate or requires technical knowledge to use.',
          3: 'Straightforward interaction with clear feedback to user actions.',
          5: 'Intuitive, responsive interaction that feels natural and engaging.',
        },
      },
    ],
  },
  'Best Hack for Social Justice': {
    name: 'Best Hack for Social Justice',
    filter: ['General'],
    prizes: ['Google TV Streamer 4K'],
    images: [googleTv],
    eligibility_criteria:
      'Hack must address a social justice issue such as racial inequality, economic injustice, environmental justice, etc. This project should develop tangible solutions and/or raise awareness on these topics.',
    domain: 'business',
    domainDisplayName: 'Business',
    scoring_criteria: [
      {
        attribute: 'Issue Understanding & Community Consideration',
        guidelines: {
          1: 'Surface-level grasp of the social issue; minimal thought about affected communities.',
          3: 'Good research and knowledge of the problem; considers needs of target communities.',
          5: 'Deep insight into nuances of the issue; clearly centers the voices and needs of affected groups.',
        },
      },
      {
        attribute: 'Advocacy Effectiveness',
        guidelines: {
          1: 'Passive presentation; no community engagement strategy.',
          3: 'Thoughtful awareness campaign with specific audience targeting.',
          5: 'Compelling call to action with practical pathways for audience involvement.',
        },
      },
      {
        attribute: 'Implementation Feasibility & Impact',
        guidelines: {
          1: 'Conceptual solution with significant barriers to deployment.',
          3: 'Viable prototype that could be developed with additional resources.',
          5: 'Ready-to-launch solution with demonstrated potential for measurable impact.',
        },
      },
    ],
  },
  'Best User Research': {
    name: 'Best User Research',
    filter: ['Design'],
    prizes: ['ChatGPT+ (4 month subscription)'],
    images: [chatgptLogo],
    eligibility_criteria:
      'Awarded to a well-researched project that keeps its userbase in mind with an inclusive design aimed to maximize accessibility.',
    domain: 'design',
    domainDisplayName: 'UI/UX Design',
    scoring_criteria: [
      {
        attribute: 'User Understanding',
        guidelines: {
          1: 'Assumptions made with minimal research.',
          3: 'Clear effort to understand target users.',
          5: 'Comprehensive insights into user needs and behaviors.',
        },
      },
      {
        attribute: 'Depth of Research Methods',
        guidelines: {
          1: 'Few or irrelevant data points.',
          3: 'Basic research approach (like one survey).',
          5: 'Thoughtful combination of multiple research methods.',
        },
      },
      {
        attribute: 'Design Application & Feedback Integration',
        guidelines: {
          1: 'Research/feedback ignored or misaligned.',
          3: 'Limited connection between research and design; some user alignment.',
          5: 'Each design element directly tied to research findings.',
        },
      },
    ],
  },
  'Best Entrepreneurship Hack': {
    name: 'Best Entrepreneurship Hack',
    filter: ['Business'],
    prizes: ['North Face Backpack'],
    images: [backpack],
    eligibility_criteria:
      "No Code Required. A project that focuses on viability and persuasive power through presentation on the product/service you're trying to sell, relevant customer segments, distribution channels, and associated revenue/profit models.",
    domain: 'business',
    domainDisplayName: 'Business',
    scoring_criteria: [
      {
        attribute: 'Target Customer Clarity',
        guidelines: {
          1: 'Vague idea of potential users.',
          3: 'Defined customer segments with needs.',
          5: 'Detailed customer profiles with validated pain points.',
        },
      },
      {
        attribute: 'Business Model',
        guidelines: {
          1: 'Unclear how the project would make money.',
          3: 'Reasonable revenue model identified.',
          5: 'Well-thought-out pricing and monetization strategy.',
        },
      },
      {
        attribute: 'Market Differentiation',
        guidelines: {
          1: 'Little distinction from existing solutions.',
          3: 'Some unique selling points identified.',
          5: 'Clear competitive advantage with strong market positioning.',
        },
      },
    ],
  },
  'Best Statistical Model': {
    name: 'Best Statistical Model',
    filter: ['Business'],
    prizes: ['Bluetooth Speaker'],
    images: [bluetoothSpeaker],
    eligibility_criteria:
      "Projects must use exploratory data analysis (EDA) to guide their modeling decisions and hypotheses. Final models should include significance tests and be evaluated with metrics like MSE, R², adjusted R², precision, or recall, demonstrating clear statistical reasoning aligned with the project's core question or goal.",
    domain: 'aiml',
    domainDisplayName: 'Data Science or AI/ML',
    scoring_criteria: [
      {
        attribute: 'Exploratory Data Analysis',
        guidelines: {
          1: 'Minimal data exploration with basic statistics only.',
          3: 'Thoughtful exploration revealing patterns and relationships in the data.',
          5: 'Comprehensive EDA; insightful visualizations; directly informs model design.',
        },
      },
      {
        attribute: 'Use of Statistical Tests',
        guidelines: {
          1: 'Inappropriate or missing tests.',
          3: 'Some relevant tests included.',
          5: 'Proper tests applied correctly to the data and analysed.',
        },
      },
      {
        attribute: 'Results Interpretation',
        guidelines: {
          1: 'Unclear; hard to read; numbers presented with little explanation.',
          3: 'Some clarity in explanation; basic visualizations.',
          5: 'Insightful interpretation connecting statistics to real world.',
        },
      },
    ],
  },
};

const nonHDTracks: Tracks = {
  'Best AI/ML Hack': {
    name: 'Best AI/ML Hack',
    filter: ['Sponsor', 'Technical'],
    prizes: ['$750 in Claude API credits'],
    images: [claudeLogo],
    eligibility_criteria:
      'Project must have unique/creative AI functionality, clean data, accuracy in metrics, presence of high-quality data, utilizing relevant algorithms + ML libraries and/or cloud platforms for development. Participants should show how they collected their data and explain how their AI imitates the human mind. We encourage that models work accurately on unseen circumstances (displays versatility).\n\nSponsored by Anthropic.',
    domain: 'aiml',
    domainDisplayName: 'Data Science or AI/ML',
    scoring_criteria: [
      {
        attribute: 'Necessity of AI/ML for Solving the Problem',
        guidelines: {
          1: 'Problem is obviously solvable with deterministic algorithms with more reliable output.',
          3: 'Problem can be solved with complex deterministic algorithms, but AI/ML is a reasonable choice.',
          5: 'Deterministic algorithms are unable to solve the problem. AI/ML is the only solution.',
        },
      },
      {
        attribute: 'Model Performance and Evaluation',
        guidelines: {
          1: 'Poor accuracy and generalization; minimal performance metrics.',
          3: 'Decent metrics; moderate evaluation efforts.',
          5: 'Strong results backed by solid metrics; tested on unseen data or edge cases.',
        },
      },
      {
        attribute: 'Technical Execution and Use of Tools',
        guidelines: {
          1: 'Surface-level use of tools; no customization or tuning.',
          3: 'Proper use of libraries with some tuning or data pipeline effort.',
          5: 'Deep technical execution with custom methods, advanced techniques, or strong tool mastery.',
        },
      },
    ],
  },
  'Best UI/UX Design': {
    name: 'Best UI/UX Design',
    filter: ['Sponsor', 'Design'],
    prizes: ['Sony WH-1000XM5 Wireless Noise-Canceling Headphones'],
    images: [sonyHeadphones],
    eligibility_criteria:
      'Project includes beautiful design and intuitive web experiences that bring joy to users. Shows that the project is not only functional but also delightful, demonstrates wireframing in Figma, responsive design and promotes intuitive user experiences.\n\nSponsored by Figma.',
    domain: 'design',
    domainDisplayName: 'UI/UX Design',
    scoring_criteria: [
      {
        attribute: 'Visual Design',
        guidelines: {
          1: 'Inconsistent style; cluttered or dull; poor accessibility.',
          3: 'Mostly clean design with some inconsistencies; some inclusive features.',
          5: 'Beautiful, cohesive, polished; thoughtful inclusivity.',
        },
      },
      {
        attribute: 'Navigation Flow',
        guidelines: {
          1: 'Confusing user journey; hard to find key actions.',
          3: 'Clear pathways through the interface with minor issues.',
          5: 'Effortless, intuitive navigation throughout.',
        },
      },
      {
        attribute: 'Design Process',
        guidelines: {
          1: 'Limited evidence of design planning.',
          3: 'Some wireframes or design iterations shown.',
          5: 'Comprehensive design process with wireframes to final product.',
        },
      },
    ],
  },
  'Best Use of DAC Materials': {
    name: 'Best Use of DAC Materials',
    filter: ['Sponsor', 'Technical'],
    prizes: ['$10,000 Daytona infrastructure credits'],
    images: [daytona],
    eligibility_criteria:
      "Project must incorporate one or more of DAC's materials with a vision-based AI pipeline, implementing and/or configuring concepts such as Vision-Language Models (VLMs) or Vision-Language-Action Models (VLAs) to connect real-world visual perception to physical robotic behavior.\n\nSponsored by the Davis Autonomy Club.",
  },
  "Best Hack for Women's Center": {
    name: "Best Hack for Women's Center",
    filter: ['Non-Profit'],
    prizes: ['Anker Nano 3-in-1 Portable iPhone Charger'],
    images: [ankerCharger],
    eligibility_criteria:
      'Projects must create a digital system to track donations as they come in and go out. Wellspring is looking for a straightforward, easy-to-use digital tool that helps staff and volunteers quickly log donated items, track how they are distributed, and generate basic reports when needed.',
  },
  'Best Open Data Hack': {
    name: 'Best Open Data Hack',
    filter: ['Sponsor', 'Technical'],
    prizes: ['DataLab Internship'],
    images: [datalab],
    eligibility_criteria:
      "Teams must identify a question or topic that, when addressed, produces an insight or product that promotes social good for the UC Davis community. To qualify for this challenge, you must find and use one or more Open and Publicly Accessible Datasets to complete your hack. Finding and appropriately using the right data to address your question or topic is one of the biggest hurdles in data science.\n\nThe Spotlight:\n• Your visualization will be professionally printed and permanently displayed in the DataLab at Shields Library.\n• An invitation to present your work at DataLab's talk series.\n• A spot in DataLab's summer mentored Internship Program (non-paid) to jumpstart your career, where you'll work alongside expert data scientists to level up your portfolio.\n\nSponsored by DataLab.",
  },
  // 'Best Hack for ASUCD Pantry': {
  //   name: 'Best Hack for ASUCD Pantry',
  //   filter: 'Non-Profit',
  //   prizes: ['Pokemon Packs'],
  //   images: [pokemonPacks],
  //   eligibility_criteria:
  //     'Projects must design a digital recipe book or platform that generates simple, affordable, and culturally inclusive recipes based on selected pantry items, accounts for common student constraints (minimal equipment, short cook times, dietary needs), and helps reduce food waste while making the pantry more accessible and empowering.',
  // },
  'Best Use of Gemini API': {
    name: 'Best Use of Gemini API',
    filter: ['MLH', 'Technical'],
    prizes: ['Google Swag Kits'],
    images: [googleSwagKit],
    eligibility_criteria:
      "It's time to push the boundaries of what's possible with AI using Google Gemini. Check out the Gemini API to build AI-powered apps that make your friends say WHOA. So, what can Gemini do for your hackathon project?\n• Understand language like a human and build a chatbot that gives personalized advice\n• Analyze info like a supercomputer and create an app that summarizes complex research papers\n• Generate creative content like code, scripts, music, and more\nThink of the possibilities… what will you build with the Google Gemini API this weekend?\n\nJudged by MLH.",
  },
  'Best Use of ElevenLabs': {
    name: 'Best Use of ElevenLabs',
    filter: ['MLH', 'Technical'],
    prizes: ['Wireless Earbuds'],
    images: [wirelessEarbuds],
    eligibility_criteria:
      'Deploy natural, human-sounding audio with ElevenLabs. Create realistic, dynamic, and emotionally expressive voices for any project, from interactive AI companions to narrated stories and voice-enabled apps. ElevenLabs will empower you to build rich, immersive experiences without the need for actors or complex audio production, using simply the power of AI.\n\nIntegrate fully autonomous audio experiences into your hack with ElevenLabs and give your project a voice, along with giving your team the chance to win some wireless earbuds!\n\nJudged by MLH.',
  },
  'Best Use of Solana': {
    name: 'Best Use of Solana',
    filter: ['MLH', 'Technical'],
    prizes: ['Ledger Nano S Plus'],
    images: [ledgerNanoSPlus],
    eligibility_criteria:
      "The world of development is evolving fast and Solana is leading the charge with a network built to handle all of your infrastructure needs. Forget high fees and slow confirmations, it's time to build applications that are fast, efficient, and scalable.\n\nHarness Solana's core advantages like blazing fast execution and near-zero transaction costs to make your hackathon ideas become real world projects. With Solana, the possibilities are endless.\n• Create a game, social app, or consumer product that relies on instant, high-frequency transactions.\n• Design a sophisticated trading, lending, or decentralized exchange (DEX).\n• Build a prototype for supply chain, identity, or payments that can handle massive, real-world volume.\nShow us how you can innovate with Solana for a chance to win some cool prizes for you and each member of your team!\n\nJudged by MLH.",
  },
  'Best Use of Backboard': {
    name: 'Best Use of Backboard',
    filter: ['MLH', 'Technical'],
    prizes: ['Tile Essentials Pack'],
    images: [tileEssentialsPack],
    eligibility_criteria:
      "Every AI model API is stateless by default. That means your app forgets everything the second a session ends. State management should be the first step of any AI build, regardless of what LLM you are using, and Backboard gives you that for free. But Backboard is not just state management. It is a single, unified API built on the world's #1 AI memory that gives you everything you need in one place: long-term memory, RAG, embeddings, tool calls, model routing across 17,000+ LLMs, and persistent context that stays alive across every page refresh, session, and user. No stitching together five different services. One API. One integration. Built on the best memory in AI.\n\nHere's just a small list of things Backboard can make possible for your AI app!\n\n• AI-powered Travel Guide: Remembers allergies and preferences from past trips.\n• Personalized Fitness Coach: Adjusts workouts based on progress and injury history.\n• Smart Home Controller: Learns routines over time to anticipate lighting and climate preferences!\n\nUse Backboard to build a seamless, persistent user experience without the usual infrastructure headache! Each winning team member will receive a Tiles Essentials Pack because, just like AI,  we all need an occasional reminder of where things are!\n\nJudged by MLH.",
  },
  'Best Use of Vultr': {
    name: 'Best Use of Vultr',
    filter: ['MLH', 'Technical'],
    prizes: ['Portable Screens'],
    images: [portableScreens],
    eligibility_criteria:
      'Vultr empowers hackers to bring their high-performance projects to life instantly; providing everything from the speed of one-click deployment and scalable cloud compute, to specialized Vultr Cloud GPUs that can power AI-driven applications. We want you to push the limits of what can be built when infrastructure is no longer the bottleneck!\n\nSign up for a Vultr account today and claim your free cloud credits! Take your next hack to the cloud with Vultr for a chance to win some awesome portable screens for you and your team!\n\nJudged by MLH.',
  },
  'Best Use of MongoDB Atlas': {
    name: 'Best Use of MongoDB Atlas',
    filter: ['MLH', 'Technical'],
    prizes: ['M5Stack IoT Kit'],
    images: [m5StackIotKit],
    eligibility_criteria:
      "MongoDB Atlas takes the leading modern database and makes it accessible in the cloud! Get started with a $50 credit for students or sign up for the Atlas free forever tier (no credit card required). Along with a suite of services and functionalities, you'll have everything you need to manage all of your data, and you can get a headstart with free resources from MongoDB University! Build a hack using MongoDB Atlas for a chance to win a M5Stack IoT Kit for you and each member of your group.\n\nJudged by MLH.",
  },
  'Best Domain Name from GoDaddy Registry': {
    name: 'Best Domain Name from GoDaddy Registry',
    filter: ['MLH'],
    prizes: ['Digital Gift Card'],
    images: [digitalGiftCard],
    eligibility_criteria:
      'GoDaddy Registry is giving you everything you need to be the best hacker no matter where you are. Register your domain name with GoDaddy Registry for a chance to win some amazing prizes! \n\nJudged by MLH.',
  },
};

const sponsoredNotSendingJudges: Tracks = {
  'Best AI/ML Hack': nonHDTracks['Best AI/ML Hack'],
  'Best UI/UX Design': nonHDTracks['Best UI/UX Design'],
};

const judgeVisibleTracks: Tracks = {
  ...optedHDTracks,
  ...sponsoredNotSendingJudges,
};

const allTracks: Tracks = {
  ...automaticTracks,
  ...optedHDTracks,
  ...nonHDTracks,
};

const displayNameToDomainMap: Map<string, string> = new Map(
  Object.entries(judgeVisibleTracks).map(([_, value]) => [
    value.domainDisplayName ?? '',
    value.domain ?? '',
  ])
);

export {
  allTracks,
  optedHDTracks,
  automaticTracks,
  nonHDTracks,
  sponsoredNotSendingJudges,
  judgeVisibleTracks,
  displayNameToDomainMap,
};

export const bestHackForSocialGood =
  automaticTracks['Best Hack for Social Good'];

export type { TrackData, Tracks };

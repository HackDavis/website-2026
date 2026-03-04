import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import vrHeadset from '@public/prizes/vr_headset.png';
import electricScooter from '@public/prizes/electric_scooter.png';
import monitor from '@public/prizes/monitor.png';
import steamGiftcard from '@public/prizes/steam_giftcard.png';
import hdSwag from '@public/prizes/hd_swag.png';
import kindle from '@public/prizes/kindle.png';
import projector from '@public/prizes/projector.png';
import raspberryPi from '@public/prizes/raspberry_pi.png';
import keyboard from '@public/prizes/keyboard.png';
import figmaLogo from '@public/prizes/figma_logo.png';
import chatgptLogo from '@public/prizes/chatgpt_logo.png';
import backpack from '@public/prizes/backpack.png';
import bluetoothSpeaker from '@public/prizes/bluetooth_speaker.png';
import aromaDiffuser from '@public/prizes/aroma_diffuser.png';
import pokemonPacks from '@public/prizes/pokemon_packs.png';
import claudeLogo from '@public/prizes/claude_logo.png';

interface TrackData {
  name: string;
  filter: string;
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
    filter: 'General',
    prizes: ['VR Headset', 'Electric Scooter'],
    images: [vrHeadset, electricScooter],
    eligibility_criteria:
      'Encapsulate your authentic idea of what "social good" can look like. All entries are automatically considered for this prize category.',
  },
  "Hacker's Choice Award": {
    name: "Hacker's Choice Award",
    filter: 'General',
    prizes: ['HackDavis Swag Bag'],
    images: [hdSwag],
    eligibility_criteria:
      'Awarded to the project with the most votes from our 2026 hackers. All entries are automatically considered for this prize category. Vote for any project but your own!',
  },
};

const optedHDTracks: Tracks = {
  'Most Technically Challenging Hack': {
    name: 'Most Technically Challenging Hack',
    filter: 'Technical',
    prizes: ['Backlit Keyboard'],
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
    filter: 'General',
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
    filter: 'General',
    prizes: ['$75 STEAM Giftcard'],
    images: [steamGiftcard],
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
    filter: 'General',
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
    filter: 'Technical',
    prizes: ['Raspberry Pi Kit'],
    images: [raspberryPi],
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
    filter: 'General',
    prizes: ['Kindle'],
    images: [kindle],
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
  'Best UI/UX Design': {
    name: 'Best UI/UX Design',
    filter: 'Design',
    prizes: ['Figma Full Seat (4 month subscription)'],
    images: [figmaLogo],
    eligibility_criteria:
      'Project includes beautiful design and intuitive web experiences that bring joy to users. Shows that the project is not only functional but also delightful, demonstrates wireframing in Figma, responsive design and promotes intuitive user experiences.',
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
  'Best User Research': {
    name: 'Best User Research',
    filter: 'Design',
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
    filter: 'Business',
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
    filter: 'Business',
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
    filter: 'Sponsor',
    prizes: ['$750 in Claude API credits'],
    images: [claudeLogo],
    eligibility_criteria:
      'Project must have unique/creative AI functionality, clean data, accuracy in metrics, presence of high-quality data, utilizing relevant algorithms + ML libraries and/or cloud platforms for development. Participants should show how they collected their data and explain how their AI imitates the human mind. We encourage that models work accurately on unseen circumstances (displays versatility).',
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
  "Best Hack for Women's Center": {
    name: "Best Hack for Women's Center",
    filter: 'Non-Profit',
    prizes: ['Aroma Diffuser'],
    images: [aromaDiffuser],
    eligibility_criteria: '',
  },
  'Best Hack for ASUCD Pantry': {
    name: 'Best Hack for ASUCD Pantry',
    filter: 'Non-Profit',
    prizes: ['Pokemon Packs'],
    images: [pokemonPacks],
    eligibility_criteria: '',
  },
};

const allTracks: Tracks = {
  ...automaticTracks,
  ...optedHDTracks,
  ...nonHDTracks,
};

const displayNameToDomainMap: Map<string, string> = new Map(
  Object.entries(optedHDTracks).map(([_, value]) => [
    value.domainDisplayName ?? '',
    value.domain ?? '',
  ])
);

export {
  allTracks,
  optedHDTracks,
  automaticTracks,
  nonHDTracks,
  displayNameToDomainMap,
};

export const bestHackForSocialGood =
  automaticTracks['Best Hack for Social Good'];

export type { TrackData, Tracks };

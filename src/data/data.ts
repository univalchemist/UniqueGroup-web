import { HomeData } from "src/constants/types";
import { Service, ServiceDetails, Question } from "../constants/types";

let serviceDetailsImages = [
  // "/service-images/dyn1.png",
  "/service-images/ls1.png",
  "/service-images/mt1.png",
  "/service-images/plc1.png",
  "/service-images/sg1.png",
  "/service-images/tf1.png",
];
let dynamicBalancingImages = [
  "/dynamic balancing/to_web/Screenshot 2022-08-01 at 12.43.58 PM.png",
  "/dynamic balancing/to_web/Screenshot 2022-08-01 at 12.44.07 PM.png",
  "/dynamic balancing/to_web/Screenshot 2022-08-01 at 12.44.22 PM.png",
];
let switchGearsImages = [
  "/switchgears/to_web/Screenshot 2022-08-01 at 1.14.00 PM.png",
  "/switchgears/to_web/Screenshot 2022-08-01 at 1.16.59 PM.png",
  "/switchgears/to_web/Screenshot 2022-08-01 at 1.22.23 PM.png",
  "/switchgears/to_web/Screenshot 2022-08-01 at 1.22.33 PM.png",
  "/switchgears/to_web/Screenshot 2022-08-01 at 1.23.00 PM.png",
  "/switchgears/to_web/WhatsApp Image 2022-07-17 at 1.28.48 PM.jpeg",
  "/switchgears/to_web/WhatsApp Image 2022-07-17 at 1.28.50 PM.jpeg",
];
let motorServicesImages = [
  "/motor services/to_web/DSC00054.JPG",
  "/motor services/to_web/IMG_1062 copy.jpg",
  "/motor services/to_web/Screenshot 2022-08-01 at 12.13.22 PM.png",
  "/motor services/to_web/Screenshot 2022-08-01 at 12.25.56 PM.png",
  "/motor services/to_web/Screenshot 2022-08-01 at 12.26.05 PM.png",
  "/motor services/to_web/WhatsApp Image 2022-07-26 at 2.27.32 PM (2).jpeg",
];
let laserAlignmentImages = [
  "/laser alignment/to_web/Screenshot 2022-08-01 at 12.30.06 PM.png",
  "/laser alignment/to_web/Screenshot 2022-08-01 at 12.33.58 PM.png",
  "/laser alignment/to_web/Screenshot 2022-08-01 at 12.34.47 PM.png",
  "/laser alignment/to_web/WhatsApp Image 2022-04-15 at 10.33.37 AM.jpeg",
  "/laser alignment/to_web/WhatsApp Image 2022-04-15 at 11.29.07 AM.jpeg",
  "/laser alignment/to_web/WhatsApp Image 2022-04-15 at 12.10.21 PM.jpeg",
];
let transformerImages = [
  "/transformer/to_web/Screenshot 2022-08-01 at 2.29.24 PM.png",
  "/transformer/to_web/Screenshot 2022-08-01 at 2.29.32 PM.png",
];

const structuralPipingImages = [
  "/structural-piping/1.png",
  "/structural-piping/2.jpeg",
  "/structural-piping/3.jpeg",
  "/structural-piping/4.jpeg",
  "/structural-piping/5.jpeg",
  "/structural-piping/6.jpeg",
  "/structural-piping/7.jpeg",
  "/structural-piping/8.png",
  "/structural-piping/9.png",
];
const cableLadderImages = [
  "/cable-ladder/1.jpg",
  "/cable-ladder/2.jpg",
  "/cable-ladder/3.jpg",
];
const homeData: HomeData = {
  heroImage: "/heroImage.png",
  companyLogos: [
    "/clients_logos/Avalontec-Engineering-Logo.jpeg",
    "/clients_logos/img1.jpeg",
    "/clients_logos/img2.png",
    "/clients_logos/img3.png",
    "/clients_logos/img4.png",
    "/clients_logos/img5.png",
    "/clients_logos/img6.jpeg",
  ],
  projects: [
    {
      title: "Kim Hock",
      description:
        "Cable laying of 630sqmm & 300 sqmm. 22kV High Voltage Termination, Hipot Test.",
      image: "/kimHockImage.png",
    },
    {
      title: "Global Radiance",
      description: "Anchor change out for vessel Themis & Athenia.",
      image: "/globalRadianceImage.png",
    },
    {
      title: "Cyclect",
      description: "Clean room electrical installation for Micron Singapore.",
      image: "/cyclectImage.png",
    },
    {
      title: "Willem De Vlamingh",
      description:
        "On time completion of replacement of electrical switch gears on the stone carrier vessel.",
      image: "/willemImage.png",
    },
    {
      title: "Adriaic 1",
      description:
        "We had succesfully carried out all carpentry works on the jackup rig. ",
      image: "/adriaicImage.png",
    },
    {
      title: "POSH BAWEAN",
      description:
        "Scope was to carryout cable pull and cable tray installation on cargo vessel",
      image: "/poshImage.png",
    },
  ],
  services: [
    {
      icon: "/new-service-images/1.svg",
      title: "Switchgears",
      desc: ["Under Voltage, Insulation, current injections and others"],
      slug: "switchgear",
      images: [],
    },
    {
      icon: "/new-service-images/2.svg",
      title: "Transformer",
      desc: [
        "Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.",
      ],
      slug: "transformers",
      images: [],
    },
    {
      icon: "/new-service-images/3.svg",
      title: "Motor Services",
      desc: ["Re-winding, Rotor Balancing, Performance Tests."],
      slug: "motor-services",
      images: [],
    },
    {
      icon: "/new-service-images/2.svg",
      title: "Structures Pipings",
      desc: [
        "Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.",
      ],
      slug: "structural-and-piping",
      images: [],
    },
    {
      icon: "/new-service-images/4.svg",
      title: "Electrical Automations",
      desc: [
        "Cruise Interior Design, Fabrication, Woodwork, Materials, Finish.",
      ],
      slug: "electrical-automation",
      images: [],
    },
    {
      icon: "/new-service-images/5.svg",
      title: "dynamic balancing",
      desc: ["Balancing of rotor, impellers"],
      slug: "dynamic-balancing",
      images: [],
    },
    {
      icon: "/new-service-images/6.svg",
      title: "Laser Alignment",
      desc: ["Alignment of motor-pump shaft, Vibration Acceptance Test."],
      slug: "laser-alignment",
      images: [],
    },
    {
      icon: "/new-service-images/7.svg",
      title: "product design",
      desc: ["Concept to Prototyping, 3D Modelling, Rendering."],
      slug: "product-design",
      images: [],
    },
    {
      icon: "/new-service-images/5.svg",
      title: "Cable Ladder",
      desc: ["Cable Support system supplier,  Marine cable ladder supplier"],
      slug: "cable-ladder",
      images: [],
    },
  ],

  clientFeedback: [
    {
      firstName: "Ulf",
      lastName: "Viljanen",
      jobRole: "CEO, ICF Singapore",
      initials: "UV",
      message: `The team understands the seriousness of the situation and responds
      quickly.`,
    },
    {
      firstName: "Capt.",
      lastName: "Uday",
      jobRole: "Captain",
      initials: "UD",
      message: `Great service. Instant to attend on the issue.`,
    },
    {
      firstName: "Prasad",
      lastName: "",
      jobRole: "Superintendent",
      initials: "PD",
      message: `Best rewinding of high kW motor`,
    },
  ],
};

interface ServiceDetailsMapping {
  [key: string]: ServiceDetails;
}

export const serviceDetailsMapping: ServiceDetailsMapping = {
  switchgear: {
    icon: "",
    isQuotable: false,
    title: `Switchgear`,
    desc: [],
    slug: "switchgear",
    images: switchGearsImages,
    showSubServicesInList: true,
    subServices: [
      {
        icon: "/service-images/6.svg",
        title: "busbar & breaking",
        desc: [
          "Busbar Integration Check",
          "Busbar Insulation Level Tests",
          "Phase To Phase Insulation Check",
          "Phase To Ground Insulation Check",
          "Breaker Integration Check",
          "Breaker Insulation Level Check",
        ],
      },
      {
        icon: "/service-images/1.svg",
        title: "Contact Resistance",
        desc: ["Conductivity of busbar joints, VCB, ACB"],
      },
      {
        icon: "/service-images/12.svg",
        title: "Insulation",
        desc: ["Insulation resistance of busbar and breakers"],
      },
      {
        icon: "/service-images/2.svg",
        title: "CT ratio of Polarity",
        desc: ["Verify CT ratio erros", "Verify primary to secondary polarity"],
      },
      {
        icon: "/service-images/5.svg",
        title: "Primary current injection for breakers.",
        desc: [
          "Check breaker trip curves by timer",
          "Verify all trips, alarm functions",
        ],
      },
      {
        icon: "/service-images/11.svg",
        title: "Function & interlock",
        desc: ["Interlock functionalities", "Alarm trip CKTS Verification"],
      },
      {
        icon: "/service-images/3.svg",
        title: "Micrologic trip",
        desc: ["Breaker trip unit check"],
      },
      {
        icon: "/service-images/4.svg",
        title: "Hipot",
        desc: [
          "Check integrity of busbar and breaker",
          "Check withstand capacity",
        ],
      },

      {
        icon: "/service-images/7.svg",
        title: "Secondary current in for relays",
        desc: ["Relay trip time tolerance", "Transfer/Trip Logics"],
      },
      // {
      //   icon: "/service-images/8.svg",
      //   title: "Undervoltage",
      //   desc: [],
      // },
    ],
  },
  "motor-services": {
    icon: "/service-images/7.svg",
    isQuotable: true,
    title: `Motor Services`,
    desc: ["Cruise Interior Design, Fabrication, Woodwork, Materials, Finish."],
    slug: "motor-services",
    images: motorServicesImages,
    subServices: [
      {
        icon: "/service-images/1.svg",
        title: "0.5 KW to 1000 kW",
        desc: [],
      },
      {
        icon: "/service-images/8.svg",
        title: "Motor & Generator overhauling",
        desc: [],
      },
      {
        icon: "/service-images/7.svg",
        title: "re-sleeving",
        desc: [],
      },
      {
        icon: "/service-images/2.svg",
        title: "Metal Spraying",
        desc: [`Collect Connection Data, Check wire Gauge, Remove Coil,`],
      },
      {
        icon: "/service-images/5.svg",
        title: "Re-Winding",
        desc: [`Collect Connection Data, Check wire Gauge, Remove Coil,`],
      },
      {
        icon: "/service-images/4.svg",
        title: "Insulation Resistance Check",
        desc: [
          `Phase to Phase
        Phase to Ground`,
        ],
      },
      {
        icon: "/service-images/6.svg",
        title: "Wet Cleaning",
        desc: [],
      },
      {
        icon: "/service-images/3.svg",
        title: "Dry Stator",
        desc: [`130 degree Celcius In Oven for 8 Hours`],
      },
      {
        icon: "/service-images/9.svg",
        title: "Other Services",
        desc: [],
      },
      {
        icon: "/service-images/10.svg",
        title: "Rotor balancing",
        desc: [
          `Add Balancing Pins To Achieve < 1% 
        Tolerance.`,
        ],
      },
      {
        icon: "/service-images/11.svg",
        title: "Testing",
        desc: [
          `Add Balancing Pins To Achieve < 1%
        Tolerance.`,
        ],
      },
      {
        icon: "/service-images/12.svg",
        title: "Deep Varnishing",
        desc: [],
      },
    ],
  },

  transformers: {
    icon: "/service-images/7.svg",
    isQuotable: false,
    title: `Transformers`,
    desc: ["Cruise Interior Design, Fabrication, Woodwork, Materials, Finish."],
    slug: "transformers",
    images: transformerImages,
    showSubServicesInList: true,
    subServices: [
      {
        icon: "/service-images/1.svg",
        title: "Winding Resistance Test",
        desc: [
          "Transformer winding resistivity check",
          "Motor winding resistivity check",
        ],
      },
      {
        icon: "/service-images/8.svg",
        title: "Turn Ratio",
        desc: ["Transformer ratio between windings"],
      },
      {
        icon: "/service-images/7.svg",
        title: "Vectore Group Management",
        desc: ["Transformer winding connection verification"],
      },
      {
        icon: "/service-images/2.svg",
        title: "Tan & Delta",
        desc: ["Transformer OTL, winding and arrangement check"],
      },
      {
        icon: "/service-images/5.svg",
        title: "Sweep Frequency Response Analysis",
        desc: ["Transformer winding coil verification"],
      },
      {
        icon: "/service-images/4.svg",
        title: "Polaritation Index",
        desc: [
          "transformer insulation resistance check by 10min/1min timeframe",
        ],
      },
      {
        icon: "/service-images/6.svg",
        title: "Oil BDV DGA Test",
        desc: ["Oil breakdown voltage check"],
      },
      {
        icon: "/service-images/3.svg",
        title: "Protection Stimulation",
        desc: ["transformer temprature gauges stimulation check"],
      },
      {
        icon: "/service-images/9.svg",
        title: "Other Services",
        desc: [],
      },
    ],
  },
  "electrical-automation": {
    icon: "",
    isQuotable: false,
    title: `Electrical Automation`,
    desc: ["Cruise Interior Design, Fabrication, Woodwork, Materials, Finish."],
    slug: "electrical-automation",
    showSubServicesInList: true,
    images: serviceDetailsImages,
    subServices: [
      {
        icon: "/service-images/1.svg",
        title: "Alarm calibration & trouble shooting",
        desc: [],
      },
      {
        icon: "/service-images/8.svg",
        title: "Alarm monitoning system",
        desc: [],
      },
      {
        icon: "/service-images/7.svg",
        title: "Synchronizing genetator",
        desc: [],
      },
      {
        icon: "/service-images/2.svg",
        title: "New design & modifion of panel boards ",
        desc: [],
      },
      {
        icon: "/service-images/5.svg",
        title: "Main switchboard trouble shooting",
        desc: [],
      },
      {
        icon: "/service-images/4.svg",
        title: "Main switchboard trouble shooting",
        desc: [],
      },
    ],
  },

  "laser-alignment": {
    icon: "",
    isQuotable: false,
    title: `Laser Alignment`,
    desc: ["Cruise Interior Design, Fabrication, Woodwork, Materials, Finish."],
    slug: "laser-alignment",
    images: laserAlignmentImages,
    subServices: [],
  },
  "structural-and-piping": {
    icon: "",
    isQuotable: false,
    title: `Structures Pipings`,
    desc: ["Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication."],
    slug: "structural-and-piping",
    images: structuralPipingImages,
    subServices: [
      {
        icon: "/service-images/1.svg",
        title: "Design & Construction",
        desc: [],
      },
      {
        icon: "/service-images/8.svg",
        title: "DNV Certifications for Design & Fabrication",
        desc: [],
      },
      {
        icon: "/service-images/7.svg",
        title: "WPS/PQR/Welder Qualifications",
        desc: [],
      },
      {
        icon: "/service-images/2.svg",
        title: "Pressure Tests",
        desc: [],
      },
      {
        icon: "/service-images/5.svg",
        title: "Tubings & Fittings",
        desc: [],
      },
      {
        icon: "/service-images/4.svg",
        title: "Load Testing",
        desc: [],
      },
    ],
  },

  "dynamic-balancing": {
    icon: "",
    isQuotable: false,
    title: `Dynamic Balancing`,
    desc: ["Cruise Interior Design, Fabrication, Woodwork, Materials, Finish."],
    slug: "dynamic-balancing",
    images: dynamicBalancingImages,
    subServices: [],
  },
  "product-design": {
    icon: "",
    isQuotable: false,
    title: `Product Design`,
    desc: ["Concept to Prototyping, 3D Modelling, Rendering."],
    slug: "product-design",
    images: dynamicBalancingImages,
    subServices: [
      {
        icon: "/service-images/1.svg",
        title: "Alarm calibration & trouble shooting",
        desc: [],
      },
      {
        icon: "/service-images/8.svg",
        title: "Alarm monitoning system",
        desc: [],
      },
      {
        icon: "/service-images/7.svg",
        title: "Synchronizing genetator",
        desc: [],
      },
      {
        icon: "/service-images/2.svg",
        title: "New design & modifion of panel boards ",
        desc: [],
      },
      {
        icon: "/service-images/5.svg",
        title: "Main switchboard trouble shooting",
        desc: [],
      },
      {
        icon: "/service-images/4.svg",
        title: "Main switchboard trouble shooting",
        desc: [],
      },
    ],
  },
  "cable-ladder": {
    icon: "",
    isQuotable: false,
    title: `Cable Ladder`,
    desc: ["Concept to Prototyping, 3D Modelling, Rendering."],
    slug: "cable-ladder",
    images: cableLadderImages,
    subServices: [
      {
        icon: "/service-images/1.svg",
        title: "Cable Support system supplier",
        desc: [],
      },
      {
        icon: "/service-images/8.svg",
        title: "Marine cable ladder supplier",
        desc: [],
      },
    ],
  }
};
interface QuestionMapping {
  [key: string]: Question[];
}

export const overhaulTable: any = {
  0: {
    overhaulingPrice: 215,
  },
  2: {
    overhaulingPrice: 260,
  },
  5.5: {
    overhaulingPrice: 510,
  },
  15: {
    overhaulingPrice: 695,
  },
  30: {
    overhaulingPrice: 790,
  },
  45: {
    overhaulingPrice: 925,
  },
  75: {
    overhaulingPrice: 1350,
  },
  132: {
    overhaulingPrice: 1680,
  },
};

export const reWindingTable: any = {
  0: {
    twoPole: {
      price: 0,
    },
    sixPole: {
      price: 0,
    },
    eightPole: {
      price: 0,
    },
  },
  0.55: {
    twoPole: {
      price: 155,
    },
    sixPole: {
      price: 195,
    },
    eightPole: {
      price: 228,
    },
  },
  0.8: {
    twoPole: {
      price: 198,
    },
    sixPole: {
      price: 245,
    },
    eightPole: {
      price: 285,
    },
  },
  1.5: {
    twoPole: {
      price: 258,
    },
    sixPole: {
      price: 321,
    },
    eightPole: {
      price: 372,
    },
  },
  2.2: {
    twoPole: {
      price: 318,
    },
    sixPole: {
      price: 400,
    },
    eightPole: {
      price: 462,
    },
  },
  4: {
    twoPole: {
      price: 420,
    },
    sixPole: {
      price: 525,
    },
    eightPole: {
      price: 609,
    },
  },
  5.5: {
    twoPole: {
      price: 500,
    },
    sixPole: {
      price: 628,
    },
    eightPole: {
      price: 726,
    },
  },
  7.5: {
    twoPole: {
      price: 560,
    },
    sixPole: {
      price: 710,
    },
    eightPole: {
      price: 820,
    },
  },
  11: {
    twoPole: {
      price: 696,
    },
    sixPole: {
      price: 880,
    },
    eightPole: {
      price: 101,
    },
  },
  15: {
    twoPole: {
      price: 798,
    },
    sixPole: {
      price: 1000,
    },
    eightPole: {
      price: 1160,
    },
  },
  18.5: {
    twoPole: {
      price: 900,
    },
    sixPole: {
      price: 1130,
    },
    eightPole: {
      price: 1310,
    },
  },
  22: {
    twoPole: {
      price: 1002,
    },
    sixPole: {
      price: 1260,
    },
    eightPole: {
      price: 1500,
    },
  },
  26: {
    twoPole: {
      price: 1105,
    },
    sixPole: {
      price: 1400,
    },
    eightPole: {
      price: 1600,
    },
  },
  30: {
    twoPole: {
      price: 1203,
    },
    sixPole: {
      price: 1520,
    },
    eightPole: {
      price: 1800,
    },
  },
  37: {
    twoPole: {
      price: 1400,
    },
    sixPole: {
      price: 1800,
    },
    eightPole: {
      price: 2030,
    },
  },
  45: {
    twoPole: {
      price: 1600,
    },
    sixPole: {
      price: 2000,
    },
    eightPole: {
      price: 2350,
    },
  },
  55: {
    twoPole: {
      price: 2000,
    },
    sixPole: {
      price: 2500,
    },
    eightPole: {
      price: 2900,
    },
  },
  75: {
    twoPole: {
      price: 2750,
    },
    sixPole: {
      price: 3300,
    },
    eightPole: {
      price: 4000,
    },
  },
  90: {
    twoPole: {
      price: 3000,
    },
    sixPole: {
      price: 3800,
    },
    eightPole: {
      price: 4400,
    },
  },
  100: {
    twoPole: {
      price: 3600,
    },
    sixPole: {
      price: 4500,
    },
    eightPole: {
      price: 5300,
    },
  },
  132: {
    twoPole: {
      price: 4500,
    },
    sixPole: {
      price: 5200,
    },
    eightPole: {
      price: 6200,
    },
  },
  150: {
    twoPole: {
      price: 5200,
    },
    sixPole: {
      price: 6130,
    },
    eightPole: {
      price: 7150,
    },
  },
  185: {
    twoPole: {
      price: 6600,
    },
    sixPole: {
      price: 7650,
    },
    eightPole: {
      price: 8900,
    },
  },
  225: {
    twoPole: {
      price: 8100,
    },
    sixPole: {
      price: 9300,
    },
    eightPole: {
      price: 10800,
    },
  },
  263: {
    twoPole: {
      price: 9000,
    },
    sixPole: {
      price: 9900,
    },
    eightPole: {
      price: 11200,
    },
  },
  300: {
    twoPole: {
      price: 9250,
    },
    sixPole: {
      price: 11540,
    },
    eightPole: {
      price: 13400,
    },
  },
};
export const overhaulOptions = [
  {
    id: 1,
    text: "Insulation Resistance Check",
    readOnly: true,
  },
  {
    id: 2,
    text: "Chemical Cleaning & Oven Dry",
    readOnly: true,
  },
  {
    id: 3,
    text: "Urgent Delivery",
  },
  {
    id: 4,
    text: "Transport Pickup And Motor",
  },
  {
    id: 5,
    text: "Uninstall & Re-Install Motor At Site",
  },
  // {
  //   id: 6,
  //   text: "Attach Name Plate",
  // },
];

export const rewindOptions = [
  {
    id: 1,
    text: "Insulation Resistance Check",
    readOnly: true,
  },
  {
    id: 2,
    text: "Re-Sleeving",
  },
  {
    id: 3,
    text: "Rotor Balancing",
  },
  {
    id: 4,
    text: "Urgent Delivery",
  },
  {
    id: 8,
    text: "Transport Pick And Drop Motor",
  },
  {
    id: 5,
    text: "Uninstall & Re-Install Motor At Site",
  },
  {
    id: 11,
    text: "Laser Alignment",
  },
  // {
  //   id: 6,
  //   text: "Attach Name Plate",
  // },
];
export const questionMapping: QuestionMapping = {
  "motor-services": [
    {
      id: 1,
      question: "Company Name",
      isRequired: false,
      type: "text",
    },
    {
      id: 2,
      question: "KW",
      isRequired: true,
      type: "number",
    },
    {
      id: 3,
      question: "Email ID",
      isRequired: false,
      type: "email",
    },
    {
      id: 4,
      question: "",
      isRequired: false,
      type: "group",
      groups: [
        {
          id: 5,
          isRequired: false,
          type: "checkbox",
          question: "Overhauling",
          options: [
            {
              id: 1,
              text: "Insulation Resistance Check",
              readOnly: true,
            },
            {
              id: 2,
              text: "Chemical Cleaning & Oven Dry",
              readOnly: true,
            },
            {
              id: 3,
              text: "Urgent Delivery",
            },
            {
              id: 4,
              text: "Transport Pickup And Motor",
            },
            {
              id: 5,
              text: "Uninstall & Re-Install Motor At Site",
            },
            {
              id: 6,
              text: "Attach Name Plate",
            },
          ],
        },
        {
          id: 5,
          isRequired: false,
          type: "checkbox",
          question: "Re-Winding",
          options: [
            {
              id: 1,
              text: "Insulation Resistance Check",
              readOnly: true,
            },
            {
              id: 2,
              text: "Re-Sleeving",
            },
            {
              id: 3,
              text: "Rotor Balancing",
            },
            {
              id: 4,
              text: "Urgent Delivery",
            },
            {
              id: 8,
              text: "Transport Pick And Drop Motor",
            },
            {
              id: 5,
              text: "Uninstall & Re-Install Motor At Site",
            },
            {
              id: 11,
              text: "Laser Alignment",
            },
            {
              id: 6,
              text: "Attach Name Plate",
            },
          ],
        },
      ],
    },
  ],
};

export const contactUs: Question[] = [
  {
    id: "email",
    question: "Email ID",
    isRequired: true,
    type: "email",
  },
  {
    id: "message",
    question: "Message",
    isRequired: true,
    type: "textarea",
    placeholder: "We will reach out to you in 24 hrs, call us __________",
  },
];

const getAllServices = () => {
  return new Promise<Service[]>((res, rej) => {
    return res(homeData.services);
  });
};
const getServiceData = (slug: string, timeout: number = 0) => {
  return new Promise<ServiceDetails[]>((res, rej) => {
    // return res();

    setTimeout(() => {
      if (slug in serviceDetailsMapping) {
        return res([serviceDetailsMapping[slug]]);
      }
      return res([]);
    }, timeout);
  });
};

const getServiceDetailsForQuote = (slug: string, timeout: number = 0) => {
  return new Promise<ServiceDetails[]>((res, rej) => {
    setTimeout(() => {
      if (slug in serviceDetailsMapping) {
        return res([
          {
            ...serviceDetailsMapping[slug],
            questions: questionMapping[slug] || [],
          },
        ]);
      }
      return res([]);
    }, timeout);
  });
};

const getHomeData = () =>
  new Promise<HomeData>((res, rej) => {
    return res(homeData);
  });

export {
  getHomeData,
  getAllServices,
  getServiceData,
  getServiceDetailsForQuote,
};

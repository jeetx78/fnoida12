// lib/data.ts

// 🟢 CRITICAL FIX: The export statement is required!
export const developers = [
  {
    id: 1,
    name: "Gaurs Group",
    slug: "gaurs-group",
    description:
      "Synonymous with trust and architectural excellence, Gaurs Group has delivered multiple landmark townships across NCR including Greater Noida West and Yamuna Expressway.",
    logoImage: "/images/logo-gaurs.jpg",
    projects: [
        // 🟢 MOVED TO FIRST POSITION
        {
            name: "Gaur Chrysalis",
            location: "Sector 22D, Yamuna Expressway, Greater Noida",
            price: "₹1.52 Cr+ (Indicative)",
            type: "3/4 BHK Luxury Apts",
            image: "/images/chrysalis.jpg",
        }, 

        // 🟢 Original projects moved down
        {
            name: "Gaur City 2",
            location: "Greater Noida West",
            price: "On Request",
            type: "1/2/3/4 BHK Apts",
            image: "/images/Gaur-City2.jpg", 
        }, 
        {
            name: "Gaur Mulberry Mansions",
            location: "Sector 1, Greater Noida",
            price: "On Request",
            type: "Luxury Villas",
            image: "/images/gmm.jpeg",
        }, 
        {
            name: "Gaur Saundaryam",
            location: "Greater Noida West",
            price: "₹1.2 Cr+",
            type: "3/4 BHK Luxury Apts",
            image: "/images/sundaryam.jpg",
        }, 
        {
            name: "Gaur Yamuna City",
            location: "Yamuna Expressway, Sector 19 & 20",
            price: "₹On Request",
            type: "Plots & Villas",
            image: "/images/yc.jpeg",
        }, 
    ],
  },
  {
    id: 2,
    name: "Arihant Group",
    slug: "arihant-group",
    description:
      "Arihant Group focuses on affordable yet premium apartments in Greater Noida West and Noida Extension with strong delivery track record.",
    logoImage: "/images/dev-logo arihant.png",
    projects: [
        // 🟢 MOVED TO FIRST POSITION
        {
            name: "Arihant One",
            location: "Sector 1, Noida Extension",
            price: "₹1.1 Cr - 2.78 Cr",
            type: "3/4 BHK Luxury Apts",
            image: "/images/one.jpg",
        }, 

        // 🟢 Original projects moved down
        {
            name: "Arihant Abode",
            location: "Sector 10, Greater Noida West",
            price: "₹1.03 Cr - 1.25 Cr",
            type: "2/3 BHK Apts",
            image: "/images/adobe.jpeg",
        }, 
        {
            name: "Arihant Ambar",
            location: "Greater Noida West",
            price: "₹60 L - 1 Cr",
            type: "2/3 BHK Apts",
            image: "/images/ambar.jpg",
        }, 
    ],
  },
  {
    id: 3,
    name: "Experion Developers",
    slug: "experion-developers",
    description:
      "Experion is a Gurgaon-based developer known for luxury residential communities on Golf Course Extension Road, Dwarka Expressway and Noida.",
    logoImage: "/images/experion-logo.png",
    projects: [
      {
        name: "Experion The Trillion",
        location: "Sector 48, Gurugram",
        price: "₹6.25 Cr +",
        type: "3/4 BHK Luxury Apts",
        image: "/images/trillion.jpg",
      }, 
      {
        name: "Experion Windchants",
        location: "Sector 112, Gurugram (Dwarka Expressway)",
        price: "₹3.7 Cr - 9.5 Cr",
        type: "2/3/4/5 BHK Luxury Apts",
        image: "/images/wc.jpg",
      }, 
      {
        name: "Experion Windchants Nova",
        location: "Sector 112, Gurugram",
        price: "₹4.0 Cr - 14 Cr",
        type: "3/4/5 BHK Ultra Luxury",
        image: "/images/nova.jpg",
      }, 
      {
        name: "Experion Elements",
        location: "Sector 45, Noida",
        price: "On Request",
        type: "Premium Apartments",
        image: "/images/elements.jpg",
      }, 
    ],
  },
  {
    id: 4,
    name: "Sobha",
    slug: "sobha",
    logoImage: "/images/sobha-logo.avif",
    description:
      "Sobha delivers luxury and ultra-luxury residences in Gurugram, Noida and Greater Noida West with a strong focus on construction quality.",
    projects: [
      {
        name: "Sobha Altus",
        location: "Sector 106, Gurugram",
        price: "₹1.76 Cr - 10.58 Cr",
        type: "Luxury High-rise Apts",
        image: "/images/altus.jpg",
      }, 
      {
        name: "Sobha Aranya",
        location: "Karma Lakelands, Gurugram",
        price: "On Request",
        type: "3/4 BHK Eco-luxe Residences",
        image: "/images/aranya.jpg",
      }, 
      {
        name: "Sobha Greater Noida West",
        location: "Sector 1, Greater Noida West",
        price: "₹90 L - 2.2 Cr",
        type: "2/3/4 BHK Apts",
        image: "/images/aurum.jpg",
      }, 
    ],
  },
  {
    id: 5,
    name: "Nirala World",
    slug: "nirala-world",
    logoImage: "/images/logo nirala.png",
    description:
      "Nirala World is a Noida Extension–focused developer offering both residential and commercial projects with mid to upper-mid positioning.",
    projects: [
      {
        name: "Nirala Trio",
        location: "Sector 2, Greater Noida West",
        price: "₹1.43 Cr - 1.82 Cr",
        type: "3/4 BHK Premium Apts",
        image: "/images/trio.jpg",
      }, 
      {
        name: "Nirala Gateway",
        location: "Sector 12, Greater Noida West",
        price: "₹60 L - 3 Cr",
        type: "High-rise Commercial",
        image: "/images/gateway.jpg",
      }, 
      {
        name: "Nirala Estate (Phases)",
        location: "Techzone 4 / Noida Extension",
        price: "₹55 L - 1.1 Cr",
        type: "2/3 BHK Apts",
        image: "/images/estate.jpg",
      }, 
    ],
  },
  {
    id: 6,
    name: "Eldeco Group",
    slug: "eldeco-group",
    logoImage: "/images/logo eldeco.png",
    description:
      "Eldeco is a long-standing NCR developer known for mid to premium residential townships with strong focus on livability and open greens.",
    projects: [
      {
        name: "Eldeco Live by the Greens",
        location: "Sector 150, Noida",
        price: "₹1.2 Cr - 1.79 Cr",
        type: "2/3 BHK Apts",
        image: "/images/live.jpg",
      }, 
      {
        name: "Eldeco Omicron 1",
        location: "Omicron 1, Greater Noida",
        price: "On Request",
        type: "2/3/4 BHK Residences",
        image: "/images/omicron.jpg",
      }, 
    ],
  },
  {
    id: 7,
    name: "M3M India",
    slug: "m3m-india",
    logoImage: "/images/m3m-logo.png",
    description:
      "M3M is a leading luxury developer in Gurugram with golf-themed townships and branded residences across Golf Course Extension Road and Dwarka Expressway.",
    projects: [
      {
        name: "M3M St Andrews",
        location: "Sector 65, Gurugram",
        price: "₹5 Cr+",
        type: "Golf-view Luxury Residences",
        image: "/images/andrews.jpg",
      }, 
      {
        name: "M3M Golf Hills",
        location: "Sector 79, Gurugram",
        price: "₹1.5 Cr - 3 Cr",
        type: "2/3 BHK Golf-facing Apts",
        image: "/images/hills1.jpg",
      }, 
      {
        name: "M3M Crown",
        location: "Sector 111, Gurugram",
        price: "₹1.8 Cr - 3.5 Cr",
        type: "Luxury Apartments",
        image: "/images/crown.jpg",
      }, 
      {
        name: "M3M Jacob & Co",
        location: "Sector 97, Noida",
        price: "₹1.69Cr Cr+",
        type: "3BHK, 4BHK, 5BHK Luxury Apts",
        image: "/images/bb1.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "Dasnac",
    slug: "dasnac",
    logoImage: "/images/dasnac_logo.jpg",
    description:
      "Dasnac is a Noida-based developer known for high-rise luxury towers and smart housing concepts like E-Homes and Burj Noida.",
    projects: [
      {
        name: "Dasnac Burj Noida",
        location: "Sector 75, Noida",
        price: "₹4 Cr - 8 Cr",
        type: "3/4/5 BHK Luxury Apts",
        image: "/images/burj.jpg",
      }, 
      {
        name: "Dasnac Westminster (E-Homes) Sector 146",
        location: "Sector 146, Noida",
        price: "₹7.5 Cr - 11 Cr",
        type: "4 BHK Ultra Luxury Apts",
        image: "/images/westminster.jpg",
      }, 
      {
        name: "The Jewel of Noida",
        location: "Sector 75, Noida",
        price: "On Request",
        type: "2/3/4/5 BHK Apts",
        image: "/images/jon.jpg",
      }, 
    ],
  },
   {
    id: 9,
    name: "Ace Group",
    slug: "ace-group",
    logoImage: "/images/ace-logo.png",
    description:
      "Ace Group is a prominent developer in Gurugram, known for delivering premium residential and commercial projects with modern amenities and strategic locations.",
    projects: [
      {
        name: "Ace Edit",
        location: "Sector 22D, Yamuna Expressway, Greater Noida",
        price: "₹86 lacs+",
        type: "Studio Apartments",
        image: "/images/edit.jpg",
      }, 
    ],
  },
];
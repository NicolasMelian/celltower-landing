export type CompareRow = { feature: string; them: string; us: string };

export type Alternative = {
  slug: string;
  name: string; // competitor name
  tagline: string;
  what: string[]; // what the competitor is (factual, fair)
  strengths: string[]; // honest strengths of the competitor
  gaps: string[]; // where our app fits instead (fair framing)
  table: CompareRow[];
  verdict: string; // when to use which, honest
  faqs: { q: string; a: string }[];
};

export const alternatives: Alternative[] = [
  {
    slug: "cellmapper",
    name: "CellMapper",
    tagline: "A simpler iPhone alternative to CellMapper",
    what: [
      "CellMapper is a free, crowd-sourced cellular mapping project at cellmapper.net. Volunteers run its logging app and upload measurements, which build a remarkably detailed web map of towers, sectors, bands, and cell IDs.",
      "It is the favorite of RF enthusiasts because of how deep it goes: you can inspect individual sectors, eNB/gNB identifiers, and the exact bands a site broadcasts. Most of that richness lives on the website rather than in a polished phone app.",
    ],
    strengths: [
      "Extremely detailed sector and band data for the RF-curious",
      "Huge crowd-sourced database built over many years",
      "Completely free to browse",
    ],
    gaps: [
      "The full experience is the desktop website, not a clean phone app",
      "The interface is dense and has a steep learning curve",
      "Logging and contributing has long been Android-centric",
      "No simple built-in speed test for everyday users",
    ],
    table: [
      { feature: "Platform", them: "Website + Android-focused logger", us: "Native iPhone app" },
      { feature: "Learning curve", them: "Steep, built for enthusiasts", us: "Tap a pin, done" },
      { feature: "Tower detail", them: "Very deep (sectors, eNB IDs)", us: "Carrier, band, distance, cell ID" },
      { feature: "Built-in speed test", them: "Not the focus", us: "Yes, download, upload, ping" },
      { feature: "Account needed", them: "For contributing", us: "No account" },
      { feature: "Best for", them: "RF hobbyists analyzing networks", us: "Anyone finding nearby towers fast" },
    ],
    verdict:
      "If you are an RF hobbyist who wants to dissect every sector and band, CellMapper's database is hard to beat. If you just want to open your iPhone, see the towers around you, identify the carrier, and test your speed without a tutorial, Cell Tower Locator is the faster path.",
    faqs: [
      {
        q: "Is there a good CellMapper alternative for iPhone?",
        a: "Yes. Cell Tower Locator is a native iOS app that shows nearby towers on a map with carrier, band, distance, and a built-in speed test, without the steep learning curve of CellMapper's enthusiast tooling.",
      },
      {
        q: "Does CellMapper have an iPhone app?",
        a: "CellMapper's deepest experience is its website, and its contribution tooling has historically centered on Android. For a self-contained iPhone tower finder, a native iOS app is usually more convenient.",
      },
      {
        q: "Is CellMapper free?",
        a: "Yes, browsing CellMapper is free. Cell Tower Locator is also free to find towers and run speed tests, with no account required.",
      },
    ],
  },
  {
    slug: "opensignal",
    name: "OpenSignal",
    tagline: "An OpenSignal alternative that maps every tower, not just coverage",
    what: [
      "OpenSignal is a well-known app and analytics company. Its app measures your real network experience, runs speed tests, and shows coverage, feeding the industry network reports the brand is known for.",
      "Its maps lean toward aggregated coverage and a compass that points you toward a serving tower, which is great for gauging your own experience but less about browsing every individual tower around you.",
    ],
    strengths: [
      "Polished, reputable brand with reliable speed tests",
      "Coverage and network-experience analytics",
      "Available on both iOS and Android",
    ],
    gaps: [
      "Focuses on your experience and coverage, not a full tower database",
      "Less about tapping individual towers from every carrier for details",
      "Coverage view can feel like a heatmap rather than precise sites",
    ],
    table: [
      { feature: "Main focus", them: "Your network experience + coverage", us: "Locating individual towers" },
      { feature: "Tower pins", them: "Compass to a serving tower", us: "Every nearby tower, all carriers" },
      { feature: "Tap for details", them: "Limited", us: "Carrier, band, distance, cell ID" },
      { feature: "Filter by generation", them: "Limited", us: "5G, 4G, 3G, 2G filters" },
      { feature: "Speed test", them: "Yes", us: "Yes" },
      { feature: "Best for", them: "Tracking your own signal quality", us: "Scouting and comparing towers" },
    ],
    verdict:
      "OpenSignal shines when you want a trusted read on your own network experience and coverage. If your goal is to actually see and compare the individual towers around you, tap each one for its carrier and band, and filter by network generation, Cell Tower Locator is built for exactly that.",
    faqs: [
      {
        q: "What is a good OpenSignal alternative?",
        a: "Cell Tower Locator is a strong alternative if you want to map individual towers from every carrier, tap each for its operator and band, filter by 5G or LTE, and still run a speed test.",
      },
      {
        q: "Does OpenSignal show cell tower locations?",
        a: "OpenSignal focuses on coverage and your network experience, often pointing toward a serving tower rather than mapping every individual site. For browsing all nearby towers with details, a dedicated tower finder works better.",
      },
      {
        q: "Is OpenSignal or Cell Tower Locator better for finding towers?",
        a: "For raw tower discovery, Cell Tower Locator is more direct: it pins every nearby tower and shows carrier, band, distance, and cell ID on tap. OpenSignal is better for measuring your own ongoing signal quality.",
      },
    ],
  },
];

export const alternativeBySlug = (slug: string) =>
  alternatives.find((a) => a.slug === slug);

export type FreqRow = { band: string; freq: string; use: string };

export type Carrier = {
  slug: string;
  name: string; // marketing name, e.g. "Verizon"
  legalName: string; // full name for first mention
  type: string; // "National network" | "Regional network" | "MVNO"
  tagline: string;
  intro: string[];
  hostNote?: string; // for MVNOs
  freqTable: FreqRow[];
  fiveG: string;
  coverage: string;
  towersTip: string;
  faqs: { q: string; a: string }[];
};

export const carriers: Carrier[] = [
  {
    slug: "verizon",
    name: "Verizon",
    legalName: "Verizon Wireless",
    type: "National network",
    tagline: "Find Verizon 5G and LTE cell towers near you",
    intro: [
      "Verizon runs its own nationwide network, so every Verizon tower you see on the map is real Verizon infrastructure, not a roaming partner.",
      "Verizon's coverage is built around 700 MHz low-band for reach and C-band for its faster 5G Ultra Wideband layer. Knowing which band a nearby tower uses tells you whether to expect deep-building coverage or high-speed data.",
    ],
    freqTable: [
      { band: "Band 13", freq: "700 MHz", use: "LTE backbone, long range and building penetration" },
      { band: "Band 2 / 66", freq: "1900 / 1700-2100 MHz", use: "LTE capacity in cities" },
      { band: "Band 5", freq: "850 MHz", use: "LTE and 5G Nationwide low-band" },
      { band: "n77 (C-band)", freq: "3.7 GHz", use: "5G Ultra Wideband, fast mid-band" },
      { band: "n261", freq: "28 GHz mmWave", use: "5G in stadiums and dense downtowns" },
    ],
    fiveG:
      "Verizon splits 5G into two tiers. 5G Nationwide rides on low-band and shared LTE spectrum and reaches most of the country. 5G Ultra Wideband uses C-band and mmWave for much higher speeds but a shorter range, so those towers cluster in metro areas.",
    coverage:
      "Verizon historically led on rural LTE thanks to its 700 MHz holdings. Its C-band 5G rollout closed much of the mid-band speed gap with T-Mobile in cities, but Ultra Wideband still thins out fast once you leave populated areas.",
    towersTip:
      "Open the map, filter to 5G or 4G, and tap a pin to confirm the operator code. Verizon towers report MCC 311 with MNC codes like 480. If you only see low-band 5G nearby, you are likely on 5G Nationwide rather than Ultra Wideband.",
    faqs: [
      {
        q: "How do I find the nearest Verizon tower?",
        a: "Open Cell Tower Locator, allow location access, and filter the map to your network type. Tap any pin to see the operator code and confirm it is Verizon (MCC 311). The app shows distance and direction to each tower.",
      },
      {
        q: "Why is my Verizon 5G slow in some places?",
        a: "You are probably on 5G Nationwide low-band rather than Ultra Wideband C-band. Low-band reaches far but is not much faster than good LTE. Check whether a C-band (n77) tower is nearby on the map.",
      },
      {
        q: "Does Verizon own all the towers it uses?",
        a: "Verizon operates its own nationwide network rather than renting another carrier's, though it leases physical tower structures from companies like American Tower and Crown Castle.",
      },
    ],
  },
  {
    slug: "att",
    name: "AT&T",
    legalName: "AT&T Mobility",
    type: "National network",
    tagline: "Locate AT&T 5G and LTE towers in your area",
    intro: [
      "AT&T owns and operates its own national network. On the map, AT&T towers report operator codes under MCC 310, with several MNC values tied to legacy spectrum.",
      "AT&T leans on 700 MHz and 850 MHz for low-band reach, plus a dedicated 700 MHz Band 14 layer used by FirstNet, its public-safety network that also boosts regular subscribers when capacity allows.",
    ],
    freqTable: [
      { band: "Band 12 / 17", freq: "700 MHz", use: "LTE low-band, wide rural coverage" },
      { band: "Band 14", freq: "700 MHz (FirstNet)", use: "Priority public-safety spectrum" },
      { band: "Band 5", freq: "850 MHz", use: "LTE and low-band 5G" },
      { band: "Band 2 / 66", freq: "1900 / 1700-2100 MHz", use: "LTE capacity" },
      { band: "n77 (C-band)", freq: "3.45-3.98 GHz", use: "5G+ mid-band speed layer" },
    ],
    fiveG:
      "AT&T markets two flavors: plain 5G on low-band 850 MHz for broad reach, and 5G+ on C-band and mmWave for higher speeds in cities and venues. The low-band layer covers most subscribers, while 5G+ is still expanding.",
    coverage:
      "AT&T's low-band footprint is strong across rural highways and the South. Its mid-band C-band rollout started later than T-Mobile's, so 5G+ speeds are competitive in major metros but patchier in smaller towns.",
    towersTip:
      "Filter the map to the network type you want and tap a pin. AT&T towers show MCC 310 with MNCs such as 410. A Band 14 tower nearby means FirstNet spectrum, which often delivers steadier performance during congestion.",
    faqs: [
      {
        q: "How can I find AT&T towers near me?",
        a: "Use Cell Tower Locator with location enabled, then tap pins to check the operator code (MCC 310 is AT&T). The app lists distance, radio type, and signal range for each tower.",
      },
      {
        q: "What is the difference between AT&T 5G and 5G+?",
        a: "5G is the low-band 850 MHz layer with wide coverage but modest speed. 5G+ is the C-band and mmWave mid- and high-band layer that delivers much faster data in covered areas.",
      },
      {
        q: "What is FirstNet and does it affect my coverage?",
        a: "FirstNet is AT&T's Band 14 public-safety network. Regular AT&T customers can benefit when that spectrum has spare capacity, which often means steadier service in crowded spots.",
      },
    ],
  },
  {
    slug: "t-mobile",
    name: "T-Mobile",
    legalName: "T-Mobile US",
    type: "National network",
    tagline: "Map T-Mobile 5G Ultra Capacity and LTE towers",
    intro: [
      "T-Mobile holds the largest mid-band 5G footprint in the US after acquiring Sprint's 2.5 GHz spectrum. That n41 layer is why T-Mobile 5G is often the fastest in everyday use.",
      "For reach, T-Mobile uses 600 MHz Band 71, which travels far and penetrates buildings well. On the map, T-Mobile towers report MCC 310 with MNC 260 and related codes.",
    ],
    freqTable: [
      { band: "Band 71", freq: "600 MHz", use: "LTE and 5G Extended Range, longest reach" },
      { band: "Band 12", freq: "700 MHz", use: "Additional LTE low-band" },
      { band: "Band 2 / 66", freq: "1900 / 1700-2100 MHz", use: "LTE capacity" },
      { band: "n41", freq: "2.5 GHz", use: "5G Ultra Capacity, T-Mobile's speed advantage" },
      { band: "n260 / n261", freq: "mmWave", use: "5G in select dense areas" },
    ],
    fiveG:
      "T-Mobile labels low-band 600 MHz as 5G Extended Range and 2.5 GHz as 5G Ultra Capacity. Ultra Capacity is the one worth chasing for speed, and it covers far more of the country than rival mid-band layers.",
    coverage:
      "T-Mobile went from a city-focused carrier to broad nationwide coverage on the back of 600 MHz. Rural reach has improved sharply, though a few remote pockets still trail Verizon and AT&T low-band.",
    towersTip:
      "Filter to 5G and tap nearby pins. If you find an n41 (2.5 GHz) tower close by, you are in Ultra Capacity range and should see the fastest speeds. A 600 MHz-only area means Extended Range, which is wider but slower.",
    faqs: [
      {
        q: "How do I find the closest T-Mobile tower?",
        a: "Open Cell Tower Locator, enable location, and filter to your network. Tap pins to confirm T-Mobile (MCC 310, MNC 260) and read the distance and band for each tower.",
      },
      {
        q: "What is 5G Ultra Capacity versus Extended Range?",
        a: "Ultra Capacity is the 2.5 GHz n41 mid-band layer that delivers high speeds. Extended Range is the 600 MHz n71 low-band layer that reaches farther but runs slower.",
      },
      {
        q: "Does T-Mobile still use Sprint towers?",
        a: "T-Mobile absorbed Sprint and decommissioned most legacy Sprint sites, keeping the valuable 2.5 GHz spectrum that now powers Ultra Capacity 5G on T-Mobile towers.",
      },
    ],
  },
  {
    slug: "consumer-cellular",
    name: "Consumer Cellular",
    legalName: "Consumer Cellular",
    type: "MVNO",
    tagline: "See which towers Consumer Cellular uses near you",
    hostNote:
      "Consumer Cellular does not own any towers. It is an MVNO that resells service on AT&T and T-Mobile, so the towers you connect to are AT&T and T-Mobile sites.",
    intro: [
      "Because Consumer Cellular is an MVNO, finding its coverage means finding the AT&T and T-Mobile towers in your area. Your SIM determines which of the two host networks you ride on.",
      "This is why mapping nearby towers matters more for MVNO customers: your real-world signal depends entirely on the host carrier's nearest site, not a Consumer Cellular network of its own.",
    ],
    freqTable: [
      { band: "AT&T Band 12 / 14", freq: "700 MHz", use: "Host low-band LTE" },
      { band: "AT&T / T-Mobile Band 2 / 66", freq: "1900 / 2100 MHz", use: "Host LTE capacity" },
      { band: "T-Mobile Band 71", freq: "600 MHz", use: "Host low-band reach" },
      { band: "n5 / n71", freq: "850 / 600 MHz", use: "Host low-band 5G" },
      { band: "n77 / n41", freq: "3.7 / 2.5 GHz", use: "Host mid-band 5G where available" },
    ],
    fiveG:
      "Consumer Cellular customers get 5G when their plan and phone support it, riding the host network's 5G. On AT&T SIMs that means low-band 5G and 5G+ where built out; on T-Mobile SIMs that means Extended Range and Ultra Capacity.",
    coverage:
      "Effective coverage equals whichever host network serves your SIM. If you mostly travel where AT&T is strong, an AT&T-based SIM performs best, and vice versa for T-Mobile. The tower map shows both so you can see which host has more sites nearby.",
    towersTip:
      "Filter the map and tap pins to read the operator code. AT&T sites show MCC 310 MNC 410, T-Mobile sites show MCC 310 MNC 260. Whichever host has more towers near your home and commute is the one worth matching your Consumer Cellular SIM to.",
    faqs: [
      {
        q: "Which network does Consumer Cellular use?",
        a: "Consumer Cellular is an MVNO that runs on AT&T and T-Mobile. It owns no towers of its own, so your service comes from whichever host network your SIM is provisioned on.",
      },
      {
        q: "How do I find Consumer Cellular coverage near me?",
        a: "Map the AT&T and T-Mobile towers around you with Cell Tower Locator. The host with more nearby sites will give you the most reliable Consumer Cellular signal.",
      },
      {
        q: "Can I choose AT&T or T-Mobile with Consumer Cellular?",
        a: "Consumer Cellular assigns a SIM tied to one host network. If coverage is weak, you can ask to switch to the other host. Checking the tower map first tells you which host to request.",
      },
    ],
  },
  {
    slug: "us-cellular",
    name: "UScellular",
    legalName: "United States Cellular Corporation",
    type: "Regional network",
    tagline: "Find UScellular towers across the Midwest and beyond",
    intro: [
      "UScellular is the largest regional carrier in the country, with its strongest footprint across the Midwest, parts of the Northeast, and the Pacific Northwest. It owns its own towers in those regions and roams onto national carriers elsewhere.",
      "If you live in UScellular's home territory you will see plenty of its sites on the map. Travel outside it and your phone roams, which the tower data can help you anticipate.",
    ],
    freqTable: [
      { band: "Band 5", freq: "850 MHz", use: "LTE low-band coverage" },
      { band: "Band 12", freq: "700 MHz", use: "LTE reach in rural areas" },
      { band: "Band 2 / 66", freq: "1900 / 2100 MHz", use: "LTE capacity" },
      { band: "n71", freq: "600 MHz", use: "Low-band 5G" },
      { band: "n77", freq: "3.45 GHz", use: "Mid-band 5G in select markets" },
    ],
    fiveG:
      "UScellular runs low-band 5G on 600 MHz for broad coverage and is adding C-band mid-band 5G in its core markets for higher speeds. Outside its footprint, 5G depends on roaming agreements.",
    coverage:
      "Coverage is excellent inside UScellular's regional markets and falls back to national-carrier roaming elsewhere. In 2024 UScellular agreed to sell most of its wireless operations and spectrum to T-Mobile, so its network is in transition.",
    towersTip:
      "Filter the map and tap pins to confirm UScellular sites, which report MCC 311 or 310 depending on the market. In home regions you will see dense coverage; if you only see other carriers' towers, your phone is likely roaming.",
    faqs: [
      {
        q: "Where does UScellular have the best coverage?",
        a: "UScellular is strongest across the Midwest, parts of New England, and the Pacific Northwest, where it owns its towers. Elsewhere it roams on national carriers.",
      },
      {
        q: "How do I find UScellular towers near me?",
        a: "Open Cell Tower Locator, enable location, and tap nearby pins. UScellular sites appear with its operator code in its home markets. Sparse UScellular pins usually mean you are in a roaming area.",
      },
      {
        q: "Is UScellular being sold to T-Mobile?",
        a: "UScellular announced a 2024 deal to sell most of its wireless business and spectrum to T-Mobile. Until it closes and integrates, its own towers remain in service across its regional footprint.",
      },
    ],
  },
  {
    slug: "boost-mobile",
    name: "Boost Mobile",
    legalName: "Boost Mobile (EchoStar/DISH)",
    type: "National network (building out)",
    tagline: "Track Boost Mobile 5G towers and roaming coverage",
    intro: [
      "Boost Mobile is unusual: once a Sprint prepaid brand, it now belongs to EchoStar (DISH) and sits on top of a brand-new cloud-native 5G network the company is still building, plus roaming deals with AT&T and T-Mobile.",
      "That means Boost coverage in any given spot can come from its own DISH 5G towers or from a roaming partner. The map helps you tell which is actually serving you.",
    ],
    freqTable: [
      { band: "n71", freq: "600 MHz", use: "DISH low-band 5G reach" },
      { band: "n70", freq: "1700-2100 MHz", use: "DISH supplemental 5G" },
      { band: "n66 / n29", freq: "AWS / 700 MHz", use: "DISH 5G capacity" },
      { band: "Host AT&T / T-Mobile", freq: "various", use: "Roaming where DISH has no tower" },
    ],
    fiveG:
      "Boost's own network is 5G standalone from the ground up, running on DISH spectrum like 600 MHz n71. Where DISH has not yet built out, Boost phones roam onto AT&T or T-Mobile, so your 5G experience varies a lot by location.",
    coverage:
      "DISH's owned 5G footprint reaches a large share of the population in covered cities but is far from complete, so roaming fills the gaps. Coverage quality therefore depends heavily on whether you are on a DISH tower or a partner's.",
    towersTip:
      "Tap pins on the map to read operator codes. DISH/Boost-owned 5G shows EchoStar's codes, while AT&T (MCC 310 MNC 410) or T-Mobile (MCC 310 MNC 260) pins mean your phone is roaming. Seeing mostly partner towers explains variable Boost performance.",
    faqs: [
      {
        q: "Does Boost Mobile have its own towers?",
        a: "Yes, Boost's owner EchoStar (DISH) is building a nationwide 5G network. Where it is not yet built, Boost phones roam on AT&T and T-Mobile, so coverage is a mix of owned and partner towers.",
      },
      {
        q: "How do I know if Boost is using its own 5G or roaming?",
        a: "Map nearby towers and tap pins. If you see EchoStar/DISH 5G sites you are on the owned network. AT&T or T-Mobile operator codes mean your Boost phone is roaming in that area.",
      },
      {
        q: "Why is Boost coverage inconsistent?",
        a: "Because the DISH 5G build-out is ongoing, your signal can switch between owned towers and roaming partners as you move. The tower map shows which kind of site is nearest.",
      },
    ],
  },
];

export const carrierBySlug = (slug: string) =>
  carriers.find((c) => c.slug === slug);

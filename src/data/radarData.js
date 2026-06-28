export const DEFAULT_CENTER = [-6.2148, 106.8400];
export const DEFAULT_ZOOM = 13;

export const ROUTING_SCHEMA = {
  MRT: {
    label: "MRT",
    transitType: "MRT Jakarta",
    lineColor: "#834DFB",
    lineName: "MRT SOUTH-NORTH LINE · ACTIVE NAVIGATION",
    fareValue: "Rp14.000",
    destination: "Bundaran HI",
    etaNext: "3 min",
    etaDest: "24 min",
    delayMessage: "Severe Delay: Red Line backlog due to extreme weather.",
    onScheduleLabel: "ON SCHEDULE",
    onScheduleColor: "#22c55e",
    mapCenter: [-6.2446, 106.8006],
    mapZoom: 14,
    stations: [
      { name: "Lebak Bulus", coords: [-6.2894, 106.7742] },
      { name: "Fatmawati", coords: [-6.2803, 106.7944] },
      { name: "Cipete Raya", coords: [-6.2697, 106.7996] },
      { name: "Haji Nawi", coords: [-6.2621, 106.7997] },
      { name: "Blok A", coords: [-6.2550, 106.7998] },
      { name: "Blok M Transit", coords: [-6.2446, 106.8006] },
      { name: "ASEAN", coords: [-6.2365, 106.8015] },
      { name: "Senayan Bank DKI", coords: [-6.2277, 106.8024] },
      { name: "Istora Mandiri", coords: [-6.2215, 106.8112] },
      { name: "Bendungan Hilir", coords: [-6.2114, 106.8178] },
      { name: "Setiabudi Astra", coords: [-6.2038, 106.8224] },
      { name: "Dukuh Atas BNI", coords: [-6.1982, 106.8228] },
      { name: "Bundaran HI", coords: [-6.1950, 106.8231] }
    ]
  },
  LRT: {
    label: "LRT",
    transitType: "LRT Jabodebek",
    lineColor: "#E11D48",
    lineName: "BEKASI LINE · CIKOKO → DUKUH ATAS",
    fareValue: "Rp12.500",
    destination: "Dukuh Atas",
    etaNext: "4 min",
    etaDest: "16 min",
    delayMessage: "Advisory: LRT Bekasi Line technical adjustment near Cawang.",
    onScheduleLabel: "ON TRACK",
    onScheduleColor: "#22c55e",
    mapCenter: [-6.2425, 106.8482],
    mapZoom: 14,
    stations: [
      { name: "Jatimulya", coords: [-6.2572, 107.0182] },
      { name: "Bekasi Barat", coords: [-6.2498, 106.9934] },
      { name: "Cikunir 2", coords: [-6.2524, 106.9632] },
      { name: "Cikunir 1", coords: [-6.2541, 106.9381] },
      { name: "Halim", coords: [-6.2458, 106.8851] },
      { name: "Cawang", coords: [-6.2431, 106.8624] },
      { name: "Ciliwung", coords: [-6.2429, 106.8524] },
      { name: "Cikoko Transit", coords: [-6.2425, 106.8482] },
      { name: "Pancoran", coords: [-6.2418, 106.8374] },
      { name: "Kuningan", coords: [-6.2341, 106.8291] },
      { name: "Rasuna Said", coords: [-6.2218, 106.8302] },
      { name: "Setiabudi", coords: [-6.2114, 106.8294] },
      { name: "Dukuh Atas", coords: [-6.2021, 106.8241] }
    ]
  },
  TJ: {
    label: "TransJakarta",
    transitType: "TransJakarta",
    lineColor: "#F0E100",
    lineName: "CORRIDOR 1 · BLOK M → KOTA",
    fareValue: "Rp3.500",
    destination: "Polda Metro Jaya",
    etaNext: "4 min",
    etaDest: "18 min",
    delayMessage: "Notice: Corridor 1 — 8-min delay at GBK turnover gate.",
    onScheduleLabel: "8 MIN DELAY",
    onScheduleColor: "#F0E100",
    mapCenter: [-6.2300, 106.8100],
    mapZoom: 14,
    stations: [
      { name: "Halte Blok M", coords: [-6.2446, 106.7994] },
      { name: "Masjid Agung", coords: [-6.2361, 106.8005] },
      { name: "Bundaran Senayan", coords: [-6.2271, 106.8021] },
      { name: "Gelora Bung Karno", coords: [-6.2225, 106.8052] },
      { name: "Polda Metro Jaya", coords: [-6.2180, 106.8018] },
      { name: "Bendungan Hilir", coords: [-6.2089, 106.8261] }
    ]
  },
  KRL: {
    label: "KRL",
    transitType: "KRL Commuter",
    lineColor: "#22c55e",
    lineName: "BOGOR LINE · MANGGARAI → KP. BANDAN",
    fareValue: "Rp5.000",
    destination: "Kampung Bandan",
    etaNext: "2 min",
    etaDest: "14 min",
    delayMessage: "Advisory: KRL Bogor Line — signal check at Manggarai.",
    onScheduleLabel: "ON TRACK",
    onScheduleColor: "#22c55e",
    mapCenter: [-6.2013, 106.8230],
    mapZoom: 14,
    stations: [
      { name: "Manggarai", coords: [-6.2148, 106.8506] },
      { name: "Cikini", coords: [-6.2080, 106.8380] },
      { name: "Gondangdia", coords: [-6.1877, 106.8055] },
      { name: "Sudirman Station", coords: [-6.2013, 106.8230] },
      { name: "Karet", coords: [-6.1960, 106.120] },
      { name: "Tanah Abang", coords: [-6.1852, 106.8105] },
      { name: "Kampung Bandan", coords: [-6.1394, 106.8091] }
    ]
  }
};
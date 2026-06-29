export const PROFILE_TABS = [
  { id: "personal", label: "Personal Info" },
  { id: "cards", label: "Smart Cards" },
  { id: "integrations", label: "Integrations" }
];

export const initialPersonalInfo = {
  fullName: "Farrel Abda Aghazka",
  nickname: "Abda",
  email: "farrelabdaaghazka@gmail.com",
  phone: "+62 812-3456-7890",
  homeAddress: "Kota Tangerang Selatan, Banten",
  workAddress: "Cakrawala University Campus, Jakarta"
};

export const initialTransitApps = [
  { id: "mrt", name: "MyMRT Jakarta", status: "Connected", account: "abda@mrt-passenger.id", balance: "Rp45.000" },
  { id: "krl", name: "C-Access KRL", status: "Connected", account: "+6281234567890", balance: "Rp12.500" },
  { id: "lrt", name: "LRT Jabodebek Hub", status: "Disconnected", account: "—", balance: "Rp0" },
  { id: "jaklingko", name: "JakLingko SuperApp", status: "Connected", account: "abda.aghazka@jaklingko.ch", balance: "Rp27.500" }
];

export const initialSmartCards = [
  { id: 1, type: "Flazz BCA", cardNumber: "5008-1234-5678-9012", label: "Kartu Komuter Harian", balance: "Rp87.500", isDefault: true },
  { id: 2, type: "e-Money Mandiri", cardNumber: "6032-9876-5432-1098", label: "Cadangan TransJakarta", balance: "Rp14.000", isDefault: false },
  { id: 3, type: "Kartu Multi Trip (KMT)", cardNumber: "1002-4567-8901", label: "Khusus Jalur Bogor Line", balance: "Rp32.000", isDefault: false },
  { id: 4, type: "TapCash BNI", cardNumber: "7542-8891-6302-4551", label: "Koleksi Edisi Spesial MRT", balance: "Rp65.000", isDefault: false }
];
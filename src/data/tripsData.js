export const initialTrips = [
  { day: '01 Mon', route: 'Gambir → Lebak Bulus', mode: 'MRT', fare: 14000 },
  { day: '02 Tue', route: 'Lebak Bulus → Dukuh Atas', mode: 'MRT', fare: 14000 },
  { day: '03 Wed', route: 'Manggarai → Bogor', mode: 'KRL', fare: 7000 },
  { day: '04 Thu', route: 'Kampung Rambutan → Cawang', mode: 'TransJakarta', fare: 3500 },
  { day: '05 Fri', route: 'Cawang → Harmoni', mode: 'TransJakarta', fare: 3500 },
  { day: '06 Sat', route: 'Tanah Abang → Sudirman', mode: 'KRL', fare: 5000 },
  { day: '07 Sun', route: 'Dukuh Atas → Blok M', mode: 'MRT', fare: 14000 },
];

export const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', { 
    style: 'currency', 
    currency: 'IDR', 
    maximumFractionDigits: 0 
  }).format(number);
};
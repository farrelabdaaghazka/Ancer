export const INITIAL_TRANSIT_APPS = [
  { 
    id: "mrt", 
    name: "MyMRT Jakarta", 
    status: "Connected", 
    account: "abda@mrt-passenger.id", 
    balance: "Rp45.000" 
  },
  { 
    id: "krl", 
    name: "C-Access KRL", 
    status: "Connected", 
    account: "+6281234567890", 
    balance: "Rp12.500" 
  },
  { 
    id: "tj", 
    name: "AeroTransJ", 
    status: "Disconnected", 
    account: "—", 
    balance: "Rp0" 
  }
];

export const PROFILE_TABS = [
  { id: "personal", label: "Personal Info" },
  { id: "cards", label: "Smart Cards" },
  { id: "integrations", label: "Integrations" }
];
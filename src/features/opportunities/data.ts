export const DSecondaryMarketFilters = () => ({
  country: null,
  city: null,
  type: null,
  previouslyInvested: null,
  capRate: {
    min: '',
    max: '',
  },
  pricePerSqm: {
    min: '',
    max: '',
  },
  price: {
    min: '',
    max: '',
  },
});

export const DMarketOffersHead = [
  {
    reference: 'property',
    label: 'Property',
    visible: true,
  },
  {
    reference: 'location',
    label: 'Location',
    visible: true,
  },
  {
    reference: 'capRate',
    label: 'Cap Rate',
    visible: true,
  },
  {
    reference: 'pricePerSqm',
    label: 'Price per sqm',
    visible: true,
  },
  {
    reference: 'squareMeters',
    label: 'Square Meters',
    visible: true,
  },
  {
    reference: 'price',
    label: 'Price',
    visible: true,
  },
];

export const DCarThemes = [
  { name: 'E-commerce Supercars' },
  { name: 'Fitness Supercars' },
  { name: 'Influencer Supercars' },
  { name: 'Marketing Supercars' },
  { name: 'Real Estate Supercars' },
  { name: 'Software Development Supercars' },
  { name: 'Startup Supercars' },
  { name: 'Trading Supercars' },
];

export const DBrands = [
  { name: 'Ferrari' },
  { name: 'Lamborghini' },
  { name: 'Bugatti' },
  { name: 'McLaren' },
  { name: 'Aston Martin' },
  { name: 'Porsche' },
  { name: 'Bentley' },
  { name: 'Rolls-Royce' },
  { name: 'Pagani' },
  { name: 'Koenigsegg' },
  { name: 'Maserati' },
  { name: 'Mercedes-AMG' },
  { name: 'Audi' },
  { name: 'BMW' },
  { name: 'Lexus' },
];

export const DModels = [
  {
    name: 'Ferrari',
    types: [
      '488 Pista',
      'F8 Tributo',
      '812 Superfast',
      'SF90 Stradale',
      'Roma',
      'Portofino',
    ],
  },
  {
    name: 'Lamborghini',
    types: [
      'Aventador SVJ',
      'Huracán EVO',
      'Huracán Performante',
      'Urus',
      'Sian FKP 37',
      'Portofino',
    ],
  },
  {
    name: 'Bugatti',
    types: ['Chiron', 'Divo', 'Veyron Super Sport', 'Centodieci'],
  },
  {
    name: 'McLaren',
    types: ['720S', '570S', '600LT', 'GT', 'Senna', 'Speedtail'],
  },
  {
    name: 'Aston Martin',
    types: [
      '720S',
      'DB11',
      'Vantage',
      'DBS Superleggera',
      'Rapide AMR',
      'Valkyrie',
    ],
  },
  {
    name: 'Porsche',
    types: [
      '911 GT3 RS',
      '911 Turbo S',
      'Taycan Turbo S',
      'Panamera Turbo',
      '918 Spyder',
    ],
  },
  {
    name: 'Bentley',
    types: ['Bentayga', 'Flying Spur', 'Mulsanne'],
  },
  {
    name: 'Rolls-Royce',
    types: ['Phantom', 'Ghost', 'Wraith', 'Dawn'],
  },
  {
    name: 'Pagani',
    types: ['Huayra', 'Huayra BC', 'Huayra Roadster', 'Zonda Cinque'],
  },
  {
    name: 'Koenigsegg',
    types: ['Jesko', 'Regera', 'Gemera', 'One:1', 'Agera RS'],
  },
  {
    name: 'Maserati',
    types: ['MC20', 'Levante Trofeo', 'GranTurismo', 'Quattroporte', 'Ghibli'],
  },
  {
    name: 'Mercedes-AMG',
    types: ['GT', 'GT 63 S', 'S 63 Coupe', 'One'],
  },
  {
    name: 'Audi',
    types: ['R8 V10 Plus', 'RS6 Avant', 'RS Q8', 'RS7 Sportback'],
  },
  {
    name: 'BMW',
    types: ['M8', 'M5', 'M4', 'M2'],
  },
  {
    name: 'Lexus',
    types: ['LFA', 'LC 500', 'RC F Track Edition', 'LS 500'],
  },
];

export const DInteriorStyle = [
  { name: 'Modern' },
  { name: 'Traditional' },
  { name: 'Nautical' },
  { name: 'Luxury' },
  { name: 'Minimalist' },
];

export const DExteriorColor = [
  { name: 'Black' },
  { name: 'White' },
  { name: 'Blue' },
  { name: 'Red' },
  { name: 'Green' },
  { name: 'Yellow' },
  { name: 'Brown' },
  { name: 'Gold' },
  { name: 'Orange' },
  { name: 'Beige' },
  { name: 'Grey' },
  { name: 'Charcoal' },
  { name: 'Burgundy' },
  { name: 'Matte' },
  { name: 'Metallic' },
  { name: 'Pearlescent' },
  { name: 'Chrome' },
  { name: 'Satin' },
];

export const DEngineType = [
  { name: 'Turbocharged' },
  { name: 'Naturally Aspirated' },
  { name: 'Diesel' },
  { name: 'Hybrid' },
  { name: 'Gasoline' },
  { name: 'Electric ' },
];

export const DCondition = [{ name: 'Brand New' }, { name: 'Used' }];

export const DAmenities = [
  { name: 'Carbon Fiber Package' },
  { name: 'Alcantara Upholstery' },
  { name: 'Performance Brake Package' },
  { name: 'Titanium Exhaust' },
  { name: 'Sport Bucket Seats' },
  { name: 'Dynamic Steering' },
  { name: 'Aerodynamic Kit' },
  { name: 'Forged Alloy Wheels' },
  { name: 'Racing Harness' },
  { name: 'Carbon Ceramic Brakes' },
  { name: 'Performance Suspension Upgrade' },
  { name: 'Contrast Stitching' },
  { name: 'Electrochromatic Roof Panel' },
  { name: 'Racing Stripes or Livery' },
  { name: 'Laser Headlights' },
  { name: 'Custom Exterior Color Options' },
  { name: 'Enhanced Sound System' },
];

const sampleListings = [
  {
    title: "Cozy Beachside Bungalow",
    description: "Relax by the waves in this peaceful escape.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 12000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "Rustic wooden cabin with a scenic mountain view.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 15000,
    location: "Manali",
    country: "India"
  },
  {
    title: "Modern Apartment Downtown",
    description: "Centrally located apartment with all modern amenities.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Luxury Villa with Private Pool",
    description: "Experience luxury in this spacious villa.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 30000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Heritage Haveli Stay",
    description: "Live like royalty in a traditional Rajasthani haveli.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 18000,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Eco-Friendly Jungle Lodge",
    description: "Stay amidst nature in this sustainable retreat.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 11000,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Downtown Studio Apartment",
    description: "Small and stylish — perfect for solo travelers.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 7500,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Charming Cottage in the Woods",
    description: "Escape to peace in this forest-side cottage.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 9500,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Desert Camp Experience",
    description: "Camel rides, sand dunes, and a starry night sky.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 9000,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Floating Houseboat Stay",
    description: "Stay on serene backwaters in this unique houseboat.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 17000,
    location: "Alleppey",
    country: "India"
  },
  {
    title: "Urban High-Rise Condo",
    description: "Luxury apartment with city skyline views.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 21000,
    location: "Singapore",
    country: "Singapore"
  },
  {
    title: "Tropical Island Hut",
    description: "Barefoot living by the sea.",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 13000,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Countryside Barnhouse",
    description: "Warm interiors and a cozy fireplace in the country.",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Minimalist Studio Flat",
    description: "Functional and peaceful space for creatives.",
    image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 8500,
    location: "Pune",
    country: "India"
  },
  {
    title: "Cliffside Cabin Retreat",
    description: "Unplug and unwind with breathtaking views.",
    image: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 16000,
    location: "Lonavala",
    country: "India"
  },
  {
    title: "Himalayan Homestay",
    description: "Traditional meals and mountain culture.",
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 7000,
    location: "Spiti Valley",
    country: "India"
  },
  {
    title: "Lakeside Treehouse",
    description: "Childhood dreams come true in this treehouse.",
    image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 14000,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Historic Stone Cottage",
    description: "Old-world charm with modern comfort.",
    image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 9500,
    location: "Kasauli",
    country: "India"
  },
  {
    title: "Budget Hostel Room",
    description: "Best for backpackers and budget travelers.",
    image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 35000,
    location: "Kolkata",
    country: "India"
  },
  {
    title: "Penthouse with Terrace",
    description: "Chill with panoramic views and private BBQ space.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 25000,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Zen Garden Cottage",
    description: "Meditate and relax in Japanese-style home.",
    image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 14500,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Art Loft in the City",
    description: "Creative space with open plan design.",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 11500,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Colonial Mansion Stay",
    description: "Grand interiors and vintage furniture.",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 22000,
    location: "Chennai",
    country: "India"
  },
  {
    title: "Farmhouse with Orchards",
    description: "Fresh air and fruits right outside your door.",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 10500,
    location: "Nashik",
    country: "India"
  },
  {
    title: "Cave Room Experience",
    description: "Sleep inside a real cave with modern amenities.",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 16500,
    location: "Cappadocia",
    country: "Turkey"
  },
  {
    title: "Hilltop Yoga Retreat",
    description: "Peaceful spot with yoga and clean eating.",
    image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 13000,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Snow Cabin with Fireplace",
    description: "Winter wonderland views and cozy interiors.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 15500,
    location: "Gulmarg",
    country: "India"
  },
  {
    title: "Sunset Cliff Villa",
    description: "Best sunsets in a private villa.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 24000,
    location: "Varkala",
    country: "India"
  },
  {
    title: "Modern Container Stay",
    description: "Stylish home made from repurposed shipping containers.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 12500,
    location: "Auroville",
    country: "India"
  },
  {
    title: "Jungle Tree Tent",
    description: "Glamping in the treetops.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 90000,
    location: "Meghalaya",
    country: "India"
  }
];


module.exports = { data: sampleListings };

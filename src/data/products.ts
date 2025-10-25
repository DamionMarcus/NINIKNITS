export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  story: string;
  rating: number;
  isNew: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Shelly the Ocean Explorer",
    category: "Animals",
    price: 35.99,
    image: "/images/IMG-20250926-WA0025.jpg",
    description: "Meet Shelly, the most adventurous little turtle in the seven seas! Born from the softest turquoise yarn and cream cotton, Shelly dreams of exploring coral reefs and making friends with seahorses.",
    story: "Meet Shelly, the most adventurous little turtle in the seven seas! Born from the softest turquoise yarn and cream cotton, Shelly dreams of exploring coral reefs and making friends with seahorses. This handcrafted companion has traveled through countless stitches to find their way to you. With their gentle smile and perfectly rounded shell, Shelly is ready to embark on bedtime stories, tea parties, and imaginative underwater expeditions. Every stitch tells a tale of patience and love, making Shelly not just a toy, but a treasured friend who will guard your dreams and share your secrets.",
    rating: 4.8,
    isNew: false,
  },
  {
    id: "2",
    name: "Gerald's Tall Tales",
    category: "Animals",
    price: 42.50,
    image: "/images/IMG-20250926-WA0023.jpg",
    description: "Gerald the Giraffe stands tall with pride, his golden coat dotted with chocolate brown spots that tell stories of sunny African savannas.",
    story: "Gerald the Giraffe stands tall with pride, his golden coat dotted with chocolate brown spots that tell stories of sunny African savannas. This gentle giant was lovingly crafted with premium yarn, each spot carefully placed to create his unique personality. Gerald loves to share tall tales (quite literally!) and dreams of reaching the highest clouds. His long neck isn't just for show - it's perfect for giving the warmest, longest hugs and peeking over the tallest bookshelves to help find lost treasures. With his sweet expression and sturdy stance, Gerald is ready to be your loyal companion through all of life's adventures, big and small.",
    rating: 4.9,
    isNew: true,
  },
  {
    id: "3",
    name: "Ellie's Memory Palace",
    category: "Animals",
    price: 38.00,
    image: "/images/IMG-20250926-WA0028.jpg",
    description: "Ellie the Elephant never forgets a friend, and she's hoping you'll be her next best buddy! Crafted from the softest gray yarn with delicate cream accents.",
    story: "Ellie the Elephant never forgets a friend, and she's hoping you'll be her next best buddy! Crafted from the softest gray yarn with delicate cream accents, Ellie carries within her stitches all the love and care of her maker. Legend says elephants have the best memories, and Ellie is no exception - she'll remember every bedtime story, every secret whispered in her ear, and every adventure you share together. Her trunk is perfect for gentle hugs, and her wise eyes seem to understand everything. Ellie believes that the best treasures in life aren't gold or jewels, but the memories we make with those we love.",
    rating: 4.7,
    isNew: false,
  },
  {
    id: "4",
    name: "Bikini Bottom's Happiest Resident",
    category: "Characters",
    price: 45.00,
    image: "/images/IMG-20250926-WA0020.jpg",
    description: "Who lives in a pineapple under the sea and now wants to live in your home? SpongeBob SquarePants! This meticulously crocheted version brings all the joy and optimism of Bikini Bottom.",
    story: "Who lives in a pineapple under the sea and now wants to live in your home? SpongeBob SquarePants! This meticulously crocheted version of everyone's favorite fry cook brings all the joy and optimism of Bikini Bottom straight to you. With his iconic square pants, crisp white shirt, and that unforgettable buck-toothed grin, this SpongeBob is ready for any adventure. Whether you're flipping patties (or pancakes), jellyfishing in the backyard, or just need a friend who sees the bright side of everything, SpongeBob is your guy. His positive attitude is contagious, and his handmade charm makes him even more special than the original!",
    rating: 4.9,
    isNew: true,
  },
  {
    id: "5",
    name: "Graceful Grace",
    category: "Animals",
    price: 40.00,
    image: "/images/IMG-20250926-WA0022.jpg",
    description: "Grace the Giraffe embodies elegance in every stitch. Standing tall and proud with her beautiful golden coat, Grace represents the perfect blend of strength and gentleness.",
    story: "Grace the Giraffe embodies elegance in every stitch. Standing tall and proud with her beautiful golden coat, Grace represents the perfect blend of strength and gentleness. Unlike her cousin Gerald, Grace prefers quiet moments - watching sunsets, listening to soft music, and being a calming presence in any room. Her long legs are perfectly balanced, allowing her to stand gracefully on any shelf or bedside table. Grace believes that true beauty comes from within, and her serene expression reflects the peaceful energy she brings to her surroundings. She's the perfect companion for meditation, reading, or simply adding a touch of African savanna magic to your space.",
    rating: 4.6,
    isNew: false,
  },
  {
    id: "6",
    name: "Neptune's Gentle Guardian",
    category: "Animals",
    price: 36.50,
    image: "/images/IMG-20250926-WA0027.jpg",
    description: "Neptune is a wise sea turtle who has seen the wonders of the deep ocean and now brings those mysteries to land. His beautiful green shell, crafted with varying shades of ocean-inspired yarn.",
    story: "Neptune is a wise sea turtle who has seen the wonders of the deep ocean and now brings those mysteries to land. His beautiful green shell, crafted with varying shades of ocean-inspired yarn, tells stories of coral gardens and underwater adventures. Neptune moves slowly and deliberately, teaching us the value of patience and mindfulness. His gentle nature makes him the perfect companion for quiet moments, bedtime stories about ocean adventures, and dreams of swimming with dolphins. Neptune carries the ancient wisdom of the sea in his stitches, reminding us that sometimes the most beautiful journeys are the ones we take slowly, savoring every moment.",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "7",
    name: "Sparky's Electric Personality",
    category: "Characters",
    price: 39.99,
    image: "/images/IMG-20250926-WA0029.jpg",
    description: "Pika pika! Meet Sparky, the most lovable electric mouse in the Pokemon world! With his signature yellow fur, rosy red cheeks, and lightning bolt tail, Sparky is ready to be your very own Pokemon companion.",
    story: "Pika pika! Meet Sparky, the most lovable electric mouse in the Pokemon world! With his signature yellow fur, rosy red cheeks, and lightning bolt tail, Sparky is ready to be your very own Pokemon companion. This handcrafted Pikachu brings all the energy and loyalty of the beloved character, but in a soft, cuddly form that won't give you any electric shocks (just warm fuzzy feelings!). Sparky dreams of going on Pokemon adventures, battling imaginary gym leaders, and most importantly, being the very best friend he can be. His cheerful expression and iconic design make him perfect for Pokemon fans of all ages who want to catch this adorable companion.",
    rating: 4.9,
    isNew: false,
  },
  {
    id: "8",
    name: "The Fairest Handmade Princess",
    category: "Characters",
    price: 48.00,
    image: "/images/IMG-20250926-WA0026.jpg",
    description: "Once upon a time, in a cozy crafting corner, Snow White was lovingly brought to life with needle and yarn. This enchanting princess wears her iconic blue and yellow dress.",
    story: "Once upon a time, in a cozy crafting corner, Snow White was lovingly brought to life with needle and yarn. This enchanting princess wears her iconic blue and yellow dress, complete with a red bow in her dark hair, just like in the fairy tale. But this Snow White has her own story - she's not waiting for a prince or hiding from any wicked queens. Instead, she's ready to be a brave, independent princess who goes on her own adventures! With her kind smile and detailed dress, she's perfect for tea parties, storytelling, and reminding us that we can write our own happily ever after. Her handmade charm adds a special magic that no factory-made doll could ever possess.",
    rating: 4.7,
    isNew: true,
  },
  {
    id: "9",
    name: "Lightning Speed, Handmade Heart",
    category: "Characters",
    price: 41.25,
    image: "/images/IMG-20250926-WA0024.jpg",
    description: "Faster than a speeding bullet, more powerful than a locomotive, and softer than the finest yarn - it's The Flash! This scarlet speedster may not be able to run at the speed of light.",
    story: "Faster than a speeding bullet, more powerful than a locomotive, and softer than the finest yarn - it's The Flash! This scarlet speedster may not be able to run at the speed of light, but he can race straight into your heart at record speed. With his iconic red suit, lightning bolt emblem, and heroic stance, this handcrafted Flash is ready to save the day (and your bedtime routine). He believes that true heroism isn't about superpowers - it's about being there for the people you care about. Whether you need a brave companion for imaginative adventures or a soft friend for quiet moments, The Flash proves that the greatest superpower of all is love, stitched carefully into every fiber of his being.",
    rating: 4.9,
    isNew: false,
  },
];


export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  story: string;
  rating: number;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Sunset Vibes Tote",
    category: "Bags",
    price: 45.99,
    image: "/images/1000467540.jpg",
    description: "A vibrant orange and white tote bag perfect for carrying your essentials in style.",
    story: "Inspired by the warm hues of a golden sunset, this tote bag combines comfort and functionality. The bright orange and crisp white color combination brings joy to everyday moments, whether you're heading to the market or a casual day out. Handcrafted with care, each stitch tells a story of dedication to quality and style.",
    rating: 4.9,
    isNew: true,
  },
  {
    id: "2",
    name: "Midnight Whiskers Tote",
    category: "Bags",
    price: 45.99,
    image: "/images/1000467539.jpg",
    description: "A charming black cat design on a cozy tote bag with the name 'Garah' embroidered.",
    story: "Meet Garah, a mysterious black cat who loves to cuddle and bring comfort to those around her. This tote bag features her adorable face and playful personality, making it a perfect companion for cat lovers everywhere. The soft texture and spacious design make it ideal for daily use, while the cute cat design adds a touch of whimsy to your style.",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "3",
    name: "Zoo Friends Tote",
    category: "Bags",
    price: 48.99,
    image: "/images/1000467543.jpg",
    description: "A delightful tote bag featuring three adorable animal friends: a penguin, a pineapple, and a cheerful duck.",
    story: "This whimsical tote celebrates friendship and fun with three charming characters. The penguin brings coolness, the pineapple adds tropical vibes, and the duck brings cheerful energy. Together, they remind us that the best adventures are shared with friends. Perfect for those who love unique, playful designs that spark conversations wherever you go.",
    rating: 4.7,
    isNew: true,
  },
  {
    id: "4",
    name: "Puppy Love Tote",
    category: "Bags",
    price: 46.99,
    image: "/images/1000467924.jpg",
    description: "An adorable tote bag featuring a sweet dog face with a bone design on the bottom section.",
    story: "This tote is all about celebrating the unconditional love of our furry friends. The cute dog face and bone motif represent loyalty, playfulness, and the joy that pets bring to our lives. Whether you're a dog lover or simply appreciate heartwarming designs, this tote bag is a perfect way to express your love for our four-legged companions.",
    rating: 4.8,
    isNew: false,
  },
  {
    id: "5",
    name: "Sparky the Electric Wonder",
    category: "Characters",
    price: 32.99,
    image: "/images/1000463386.jpg",
    description: "A bright yellow Pikachu plush with adorable red cheeks and brown ear tips.",
    story: "Sparky is the embodiment of electric energy and joy! This handcrafted Pikachu plush captures the iconic charm of everyone's favorite electric-type Pokémon. With its cheerful expression and soft texture, Sparky is ready to bring happiness and adventure to your life. Perfect for collectors, fans, or anyone who needs a little spark of joy in their day.",
    rating: 4.9,
    isNew: false,
  },
  {
    id: "6",
    name: "Ellie the Gentle Giant",
    category: "Characters",
    price: 34.99,
    image: "/images/1000463380.jpg",
    description: "A soft blue elephant plush with large cream-colored ears and a gentle expression.",
    story: "Meet Ellie, a gentle and wise elephant who loves to listen and offer comfort. With her soothing blue color and kind eyes, Ellie represents wisdom, memory, and unconditional love. This handcrafted plush is perfect for those seeking a calming companion. Ellie reminds us that sometimes the best friends are the ones who simply listen and care.",
    rating: 4.8,
    isNew: false,
  },
  {
    id: "7",
    name: "Shelly's Ocean Adventure",
    category: "Characters",
    price: 35.99,
    image: "/images/1000463377.jpg",
    description: "A charming green and brown turtle plush, perfect for ocean lovers.",
    story: "Shelly is a wise turtle who has traveled the seven seas and collected countless stories along the way. With her earthy brown shell and vibrant green flippers, she represents the beauty of nature and the importance of taking things slowly. This handcrafted plush is a reminder to embrace patience, wisdom, and the wonders of the natural world. Perfect for anyone who loves the ocean or needs a gentle reminder to slow down.",
    rating: 4.7,
    isNew: false,
  },
  {
    id: "8",
    name: "Snow White's Enchanted Tale",
    category: "Characters",
    price: 39.99,
    image: "/images/1000463374.jpg",
    description: "A beautifully crafted Snow White doll with her iconic yellow dress, red bow, and black hair.",
    story: "This is Snow White, the fairest of them all! With her classic yellow dress, red bow, and kind smile, she represents hope, innocence, and the power of kindness. This handcrafted doll brings the magic of fairy tales to life. Whether you're a Disney fan or simply appreciate classic characters, Snow White is a timeless companion that celebrates the beauty of good hearts and true love.",
    rating: 4.9,
    isNew: false,
  },
  {
    id: "9",
    name: "Squirt the Tiny Turtle",
    category: "Characters",
    price: 28.99,
    image: "/images/1000463371.jpg",
    description: "A cute blue and cream-colored turtle plush with a cheerful smile.",
    story: "Meet Squirt, a tiny turtle with a big personality! With his soft blue shell and cream-colored belly, Squirt is full of curiosity and wonder. This little guy loves to explore and make new friends. Squirt reminds us that even the smallest creatures can have the biggest hearts and bring the most joy. Perfect for those who love cute, cuddly companions.",
    rating: 4.8,
    isNew: false,
  },
  {
    id: "10",
    name: "The Flash - Speed & Style",
    category: "Characters",
    price: 41.99,
    image: "/images/1000463368.jpg",
    description: "A striking red and yellow Flash plush with the iconic lightning bolt symbol.",
    story: "This is The Flash, the fastest superhero alive! With his vibrant red suit, yellow accents, and the iconic lightning bolt emblem, he represents speed, courage, and heroic determination. This handcrafted plush captures the essence of a true hero. Whether you're a DC Comics fan or simply admire characters who stand up for what's right, The Flash is a powerful reminder that we all have the ability to make a difference at lightning speed.",
    rating: 4.9,
    isNew: true,
  },
];


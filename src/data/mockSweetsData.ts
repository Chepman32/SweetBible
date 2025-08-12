export interface Sweet {
  id: string;
  name: string;
  isPro: boolean;
  category: string;
  image: string;
  quickFacts: {
    origin: string;
    year: number;
    type: string;
  };
  history: string;
  flavorProfile: string;
  tasteDescription: string; // NEW FIELD
  trivia: string | null;
  brandStory: string | null;
  nutrition?: {
    calories: number;
    servingSize: string;
    fat?: string;
    carbs?: string;
    protein?: string;
    sugar?: string;
  };
  ingredients?: string[];
  dietaryNotes?: string[];
}

export const mockSweetsData: Sweet[] = [
  // ITALY 🇮🇹
  {
    id: "cannoli_01",
    name: "Cannoli",
    isPro: false,
    category: "Pastry",
    image: "cannoli.jpg",
    quickFacts: {
      origin: "Italy",
      year: 827,
      type: "Pastry"
    },
    history: "Cannoli originated in Sicily during the Arab rule of the island (827-1091 AD). Originally called 'qanawat', meaning 'tubes', they were created by Arab women who introduced the technique of frying pastry dough. The dessert evolved over centuries, with ricotta filling becoming the standard during the Renaissance period.",
    flavorProfile: "Crispy, golden pastry shells with a delicate crunch, filled with sweet, creamy ricotta cheese. Often enhanced with chocolate chips, candied citrus peel, or pistachios. The contrast between the crunchy shell and smooth filling creates a perfect textural balance.",
    tasteDescription: "Sweet, milky ricotta with hints of vanilla and citrus, wrapped in a crispy shell that tastes of fried dough with subtle wine notes",
    trivia: "Traditional Sicilian cannoli shells are made with Marsala wine in the dough, giving them their distinctive flavor and color.",
    brandStory: null,
    nutrition: {
      calories: 220,
      servingSize: "1 cannoli (85g)",
      fat: "14g",
      carbs: "19g",
      protein: "6g",
      sugar: "12g"
    },
    ingredients: ["Ricotta cheese", "Flour", "Sugar", "Marsala wine", "Lard", "Eggs", "Vanilla", "Chocolate chips"],
    dietaryNotes: ["Contains dairy", "Contains gluten", "May contain nuts"]
  },
  {
    id: "ferrero_rocher_01",
    name: "Ferrero Rocher",
    isPro: true,
    category: "Chocolate",
    image: "ferrero_rocher.jpg",
    quickFacts: {
      origin: "Italy",
      year: 1982,
      type: "Praline"
    },
    history: "Created by Michele Ferrero and introduced in 1982, Ferrero Rocher was inspired by the traditional Piedmontese gianduja and the desire to create an accessible luxury chocolate. The recipe combines the family's expertise in hazelnut processing with innovative packaging design.",
    flavorProfile: "A whole roasted hazelnut encased in a thin wafer shell, filled with hazelnut cream and covered in milk chocolate and chopped hazelnuts. The combination creates layers of texture from creamy to crunchy, with a rich, nutty flavor profile.",
    tasteDescription: "Rich hazelnut and chocolate blend with creamy, nutty sweetness and a satisfying crunch in every bite",
    trivia: "Each Ferrero Rocher contains exactly 74 calories, and the company uses about 25% of the world's hazelnut supply.",
    brandStory: "Ferrero positions Rocher as 'a sign of love' and uses golden packaging to convey luxury and premium quality, making it a popular gift worldwide.",
    nutrition: {
      calories: 74,
      servingSize: "1 piece (12.5g)",
      fat: "4.7g",
      carbs: "6.2g",
      protein: "0.9g",
      sugar: "5.1g"
    },
    ingredients: ["Milk chocolate", "Hazelnuts", "Sugar", "Palm oil", "Wheat flour", "Whey powder", "Cocoa", "Lecithin"],
    dietaryNotes: ["Contains nuts", "Contains dairy", "Contains gluten"]
  },
  {
    id: "panettone_01",
    name: "Panettone",
    isPro: true,
    category: "Sweet Bread",
    image: "panettone.jpg",
    quickFacts: {
      origin: "Italy",
      year: 1495,
      type: "Christmas Bread"
    },
    history: "Panettone originated in Milan during the Renaissance. Legend tells of a young nobleman who disguised himself as a baker to win the heart of the baker's daughter, creating this sweet bread. It became a Christmas tradition throughout Italy and beyond.",
    flavorProfile: "Light, airy texture with a delicate crumb structure, studded with candied fruits and raisins. The dough is enriched with eggs and butter, creating a tender, slightly sweet bread with citrus notes from the candied peel.",
    tasteDescription: "Buttery, slightly sweet bread with bursts of citrus from candied orange and lemon peel, complemented by plump raisins",
    trivia: "Traditional panettone requires 36 hours to make due to the natural leavening process, and the dough must be hung upside down while cooling to maintain its dome shape.",
    brandStory: null,
    nutrition: {
      calories: 380,
      servingSize: "100g slice",
      fat: "12g",
      carbs: "60g",
      protein: "7g",
      sugar: "28g"
    },
    ingredients: ["Flour", "Butter", "Eggs", "Sugar", "Candied orange peel", "Candied citron", "Raisins", "Natural yeast"],
    dietaryNotes: ["Contains gluten", "Contains dairy", "Contains eggs"]
  },

  // FRANCE 🇫🇷
  {
    id: "macaron_01",
    name: "Macaron",
    isPro: false,
    category: "Cookie",
    image: "macaron.jpg",
    quickFacts: {
      origin: "France",
      year: 1500,
      type: "Sandwich Cookie"
    },
    history: "Macarons were introduced to France by Italian chefs in the 1500s, but the modern Parisian macaron was perfected by Pierre Desfontaines of Ladurée in the early 1900s. He created the sandwich version with ganache filling that we know today.",
    flavorProfile: "Delicate almond meringue shells with a smooth, glossy exterior and chewy interior, filled with ganache, buttercream, or jam. The shells provide a subtle almond flavor while the filling delivers the primary taste experience.",
    tasteDescription: "Light, sweet almond shells with a chewy texture, filled with intense flavors ranging from chocolate to fruit to floral notes",
    trivia: "A perfect macaron should have a smooth top, ruffled 'foot' at the base, and the shells should stick slightly to your teeth when bitten.",
    brandStory: null,
    nutrition: {
      calories: 70,
      servingSize: "1 macaron (20g)",
      fat: "3g",
      carbs: "9g",
      protein: "1g",
      sugar: "8g"
    },
    ingredients: ["Almond flour", "Powdered sugar", "Egg whites", "Granulated sugar", "Food coloring", "Various fillings"],
    dietaryNotes: ["Contains nuts", "Contains eggs", "Gluten-free"]
  },
  {
    id: "pain_au_chocolat_01",
    name: "Pain au Chocolat",
    isPro: false,
    category: "Viennoiserie",
    image: "pain_au_chocolat.jpg",
    quickFacts: {
      origin: "France",
      year: 1830,
      type: "Chocolate Pastry"
    },
    history: "Pain au chocolat emerged in France in the 19th century as bakers began incorporating chocolate into their viennoiserie. The pastry became a breakfast staple, particularly popular with children heading to school.",
    flavorProfile: "Flaky, buttery croissant dough wrapped around dark chocolate batons. The laminated pastry creates crispy layers that shatter when bitten, revealing soft, warm dough and melted chocolate inside.",
    tasteDescription: "Buttery, flaky pastry with rich dark chocolate that melts into the warm, tender layers of dough",
    trivia: "In southwestern France, pain au chocolat is called 'chocolatine', sparking endless debates among French people about the correct name.",
    brandStory: null,
    nutrition: {
      calories: 280,
      servingSize: "1 pastry (70g)",
      fat: "15g",
      carbs: "31g",
      protein: "5g",
      sugar: "9g"
    },
    ingredients: ["Flour", "Butter", "Dark chocolate", "Sugar", "Yeast", "Salt", "Milk", "Eggs"],
    dietaryNotes: ["Contains gluten", "Contains dairy", "Contains eggs"]
  },

  // JAPAN 🇯🇵
  {
    id: "mochi_01",
    name: "Mochi",
    isPro: false,
    category: "Rice Cake",
    image: "mochi.jpg",
    quickFacts: {
      origin: "Japan",
      year: 300,
      type: "Rice Confection"
    },
    history: "Mochi has been made in Japan for over 1,000 years, originally as an offering to gods and spirits. The traditional preparation involves pounding steamed glutinous rice with wooden mallets in a ceremony called 'mochitsuki'.",
    flavorProfile: "Soft, chewy texture with a mild, slightly sweet flavor. The glutinous rice provides a unique mouthfeel that's both elastic and tender, often filled with sweet red bean paste, ice cream, or other flavored centers.",
    tasteDescription: "Subtly sweet, chewy rice cake with a unique sticky-smooth texture and delicate flavor that complements various fillings",
    trivia: "Mochi-making is considered a spiritual practice in Japan, and eating mochi on New Year's Day is believed to bring good luck.",
    brandStory: null,
    nutrition: {
      calories: 96,
      servingSize: "1 piece (44g)",
      fat: "0.2g",
      carbs: "22g",
      protein: "1g",
      sugar: "5g"
    },
    ingredients: ["Glutinous rice", "Water", "Sugar", "Cornstarch", "Various fillings"],
    dietaryNotes: ["Gluten-free", "Vegan options available"]
  },
  {
    id: "matcha_kitkat_01",
    name: "Matcha Kit Kat",
    isPro: true,
    category: "Chocolate",
    image: "matcha_kitkat.jpg",
    quickFacts: {
      origin: "Japan",
      year: 2004,
      type: "Chocolate Wafer"
    },
    history: "Nestlé Japan introduced matcha-flavored Kit Kats in 2004 as part of their regional flavor strategy. The product became so successful that Japan now produces over 300 Kit Kat flavors, with matcha being one of the most popular internationally.",
    flavorProfile: "Crispy wafer layers coated in smooth matcha-infused white chocolate. The green tea provides a subtle bitterness that balances the sweetness of the white chocolate, creating a sophisticated flavor profile.",
    tasteDescription: "Earthy, slightly bitter matcha green tea balanced with creamy white chocolate sweetness and crispy wafer crunch",
    trivia: "Kit Kat is popular in Japan because 'Kitto Katsu' sounds like 'you will surely win' in Japanese, making it a good luck gift for students.",
    brandStory: "Nestlé Japan transformed Kit Kat into a premium gift item with seasonal and regional flavors, elevating it beyond a simple candy bar.",
    nutrition: {
      calories: 64,
      servingSize: "1 mini bar (11.3g)",
      fat: "3.6g",
      carbs: "7.2g",
      protein: "0.7g",
      sugar: "5.8g"
    },
    ingredients: ["Sugar", "Vegetable oil", "Wheat flour", "Lactose", "Matcha powder", "Cocoa butter", "Milk powder"],
    dietaryNotes: ["Contains dairy", "Contains gluten"]
  },

  // UNITED STATES 🇺🇸
  {
    id: "chocolate_chip_cookie_01",
    name: "Chocolate Chip Cookie",
    isPro: false,
    category: "Cookie",
    image: "chocolate_chip_cookie.jpg",
    quickFacts: {
      origin: "USA",
      year: 1938,
      type: "Drop Cookie"
    },
    history: "Ruth Graves Wakefield invented the chocolate chip cookie in 1938 at the Toll House Inn in Massachusetts. She broke up a Nestlé chocolate bar and mixed it into cookie dough, expecting it to create chocolate cookies, but the pieces held their shape instead.",
    flavorProfile: "Chewy center with slightly crispy edges, combining sweet vanilla dough with semi-sweet chocolate pieces. The brown sugar creates caramel notes while the chocolate provides rich, slightly bitter contrast to the sweet dough.",
    tasteDescription: "Sweet, buttery dough with hints of vanilla and caramel, punctuated by rich, melty chocolate chunks",
    trivia: "Ruth Wakefield sold her recipe to Nestlé for a lifetime supply of chocolate, and her recipe still appears on Nestlé packages today.",
    brandStory: null,
    nutrition: {
      calories: 148,
      servingSize: "1 medium cookie (30g)",
      fat: "7g",
      carbs: "20g",
      protein: "2g",
      sugar: "10g"
    },
    ingredients: ["Flour", "Butter", "Brown sugar", "White sugar", "Eggs", "Vanilla extract", "Chocolate chips", "Baking soda"],
    dietaryNotes: ["Contains gluten", "Contains dairy", "Contains eggs"]
  },
  {
    id: "reeses_01",
    name: "Reese's Peanut Butter Cups",
    isPro: true,
    category: "Chocolate",
    image: "reeses.jpg",
    quickFacts: {
      origin: "USA",
      year: 1928,
      type: "Chocolate Cup"
    },
    history: "Created by H.B. Reese, a former Hershey employee, in 1928. Reese's Peanut Butter Cups combined two American favorites—chocolate and peanut butter—in a way that became iconic. Hershey acquired the company in 1963.",
    flavorProfile: "Milk chocolate cups filled with sweetened peanut butter cream. The filling is slightly salty and grainy, contrasting with the smooth, sweet chocolate exterior for a perfect sweet-savory balance.",
    tasteDescription: "Sweet, creamy peanut butter with a slight saltiness encased in smooth milk chocolate",
    trivia: "Reese's is the best-selling candy brand in the United States, with sales exceeding $2 billion annually.",
    brandStory: "The tagline 'There's no wrong way to eat a Reese's' became a cultural phenomenon, spawning countless commercials showing creative ways to eat the candy.",
    nutrition: {
      calories: 210,
      servingSize: "2 cups (42g)",
      fat: "12g",
      carbs: "24g",
      protein: "5g",
      sugar: "22g"
    },
    ingredients: ["Milk chocolate", "Peanuts", "Sugar", "Dextrose", "Salt", "TBHQ", "Citric acid"],
    dietaryNotes: ["Contains peanuts", "Contains dairy", "Contains soy"]
  },

  // GERMANY 🇩🇪
  {
    id: "black_forest_cake_01",
    name: "Black Forest Cake",
    isPro: true,
    category: "Cake",
    image: "black_forest_cake.jpg",
    quickFacts: {
      origin: "Germany",
      year: 1915,
      type: "Layered Cake"
    },
    history: "Schwarzwälder Kirschtorte originated in the Black Forest region of Germany in the early 20th century. The cake was first mentioned in writing in 1915 and combines local ingredients: cherries, Kirsch (cherry brandy), and rich cream.",
    flavorProfile: "Layers of chocolate sponge cake soaked with Kirsch, filled with whipped cream and sour cherries, topped with more cream, chocolate shavings, and maraschino cherries. The alcohol adds complexity while cherries provide tartness to balance the rich chocolate and cream.",
    tasteDescription: "Rich chocolate cake with tart cherries, boozy Kirsch, and light whipped cream creating a perfect balance of flavors",
    trivia: "Authentic Black Forest cake must contain Kirsch (cherry brandy) to meet German food regulations, and the cherries should be sour, not sweet.",
    brandStory: null,
    nutrition: {
      calories: 450,
      servingSize: "per slice",
      fat: "28g",
      carbs: "45g",
      protein: "6g",
      sugar: "38g"
    },
    ingredients: ["Chocolate sponge cake", "Heavy cream", "Sour cherries", "Kirsch (cherry brandy)", "Dark chocolate", "Sugar", "Maraschino cherries"],
    dietaryNotes: ["Contains alcohol", "Contains gluten", "Contains dairy", "Contains eggs", "High in sugar"]
  },
  {
    id: "gummy_bears_01",
    name: "Gummy Bears",
    isPro: false,
    category: "Gummy Candy",
    image: "gummy_bears.jpg",
    quickFacts: {
      origin: "Germany",
      year: 1922,
      type: "Gelatin Candy"
    },
    history: "Hans Riegel Sr. invented gummy bears in 1922 in Bonn, Germany, and founded Haribo. Originally called 'Dancing Bears,' they were inspired by the trained bears seen at street festivals. The recipe and production methods remain largely unchanged.",
    flavorProfile: "Chewy, bouncy texture with bright fruit flavors including strawberry, orange, pineapple, lemon, and raspberry. The gelatin provides a satisfying chew while the fruit flavoring delivers sweet, tangy notes that are both nostalgic and refreshing.",
    tasteDescription: "Sweet, fruity gummy candy with a satisfying chewy texture and bright, artificial fruit flavors",
    trivia: "The original gummy bears were larger and harder than modern versions, and Haribo produces over 100 million gummy bears daily.",
    brandStory: "Haribo's slogan 'Kids and grown-ups love it so, the happy world of Haribo' reflects the brand's appeal across all ages and its position as the inventor of gummy candy.",
    nutrition: {
      calories: 140,
      servingSize: "17 pieces (40g)",
      fat: "0g",
      carbs: "32g",
      protein: "3g",
      sugar: "22g"
    },
    ingredients: ["Sugar", "Glucose syrup", "Gelatin", "Citric acid", "Natural and artificial flavors", "Food coloring"],
    dietaryNotes: ["Contains gelatin", "Not suitable for vegetarians"]
  }
];
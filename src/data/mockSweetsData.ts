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
  trivia: string | null;
  brandStory: string | null;
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
    trivia: "Traditional Sicilian cannoli shells are made with Marsala wine in the dough, giving them their distinctive flavor and color.",
    brandStory: null
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
    trivia: "Each Ferrero Rocher contains exactly 74 calories, and the company uses about 25% of the world's hazelnut supply.",
    brandStory: "Ferrero positions Rocher as 'a sign of love' and uses golden packaging to convey luxury and premium quality, making it a popular gift worldwide."
  },
  {
    id: "mon_cheri_01",
    name: "Mon Chéri",
    isPro: true,
    category: "Chocolate",
    image: "mon_cheri.jpg",
    quickFacts: {
      origin: "Italy",
      year: 1956,
      type: "Liqueur Chocolate"
    },
    history: "Created by Ferrero in 1956, Mon Chéri was one of the first mass-produced liqueur chocolates. The product revolutionized the adult confectionery market by combining traditional European liqueur-making with modern chocolate production techniques.",
    flavorProfile: "Dark chocolate shell filled with cherry liqueur and a whole maraschino cherry. The alcohol content is 3% by volume, creating a sophisticated flavor that balances sweetness with the complexity of cherry brandy.",
    trivia: "The name means 'my dear' in French, and the product is seasonal in many countries, available primarily during winter months due to the alcohol content.",
    brandStory: "Mon Chéri is marketed as a sophisticated adult treat, often associated with romantic occasions and elegant evening entertainment."
  },
  {
    id: "pizzelle_01",
    name: "Pizzelle",
    isPro: false,
    category: "Cookie",
    image: "pizzelle.jpg",
    quickFacts: {
      origin: "Italy",
      year: 1400,
      type: "Waffle Cookie"
    },
    history: "Pizzelle are among Italy's oldest cookies, originating in the Abruzzo region around the 8th century. They were traditionally made for religious festivals and weddings. The intricate patterns pressed into the cookies often depicted family crests or religious symbols.",
    flavorProfile: "Thin, crispy waffle cookies with a delicate texture and subtle sweetness. Traditional flavors include anise, vanilla, and lemon. The cookies have a light, airy quality with a distinctive patterned surface that creates varying textures in each bite.",
    trivia: "The patterns on pizzelle are made using special irons called 'ferri da pizzelle', often passed down through generations of Italian families.",
    brandStory: null
  },
  {
    id: "gelato_01",
    name: "Gelato",
    isPro: false,
    category: "Frozen Dessert",
    image: "gelato.jpg",
    quickFacts: {
      origin: "Italy",
      year: 1565,
      type: "Ice Cream"
    },
    history: "Gelato was invented in 1565 by Bernardo Buontalenti in Florence for the court of Cosimo I de' Medici. Unlike ice cream, gelato is churned slowly and served at a slightly warmer temperature, resulting in a denser, more flavorful dessert.",
    flavorProfile: "Dense, creamy texture with intense flavors. Traditional varieties include pistachio, stracciatella, and zabaione. The slower churning process incorporates less air, creating a silky, rich mouthfeel that allows flavors to shine through more prominently.",
    trivia: "Authentic gelato contains 70% less air than regular ice cream and is served at 10-15°F warmer, enhancing flavor perception.",
    brandStory: null
  },
  {
    id: "tiramisu_01",
    name: "Tiramisu",
    isPro: true,
    category: "Dessert",
    image: "tiramisu.jpg",
    quickFacts: {
      origin: "Italy",
      year: 1960,
      type: "Layered Dessert"
    },
    history: "Tiramisu was created in the 1960s at Le Beccherie restaurant in Treviso, Veneto. Chef Roberto Linguanotto invented this dessert as a variation of sbatudin, a dessert made with zabaione. The name means 'pick me up' in Italian, referring to its energizing coffee content.",
    flavorProfile: "Layers of coffee-soaked ladyfingers alternated with a mixture of mascarpone cheese, eggs, and sugar, dusted with cocoa powder. The dessert combines creamy, smooth textures with the bold flavor of espresso and a hint of liqueur.",
    trivia: "Traditional tiramisu contains raw eggs and is considered an aphrodisiac in Italian folklore due to its energy-boosting ingredients.",
    brandStory: null
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
    trivia: "A perfect macaron should have a smooth top, ruffled 'foot' at the base, and the shells should stick slightly to your teeth when bitten.",
    brandStory: null
  },
  {
    id: "croissant_01",
    name: "Croissant",
    isPro: false,
    category: "Pastry",
    image: "croissant.jpg",
    quickFacts: {
      origin: "France",
      year: 1683,
      type: "Puff Pastry"
    },
    history: "The croissant originated from the Austrian kipferl but was perfected in France in the 19th century. French bakers developed the laminated dough technique that creates the characteristic flaky layers through repeated folding of butter and dough.",
    flavorProfile: "Buttery, flaky exterior with a tender, airy interior. The laminated dough creates distinct layers that separate when baked, resulting in a crispy outside and soft inside with a rich, buttery flavor throughout.",
    trivia: "A proper croissant requires exactly 81 layers of dough and butter, achieved through precise folding techniques.",
    brandStory: null
  },
  {
    id: "creme_brulee_01",
    name: "Crème Brûlée",
    isPro: true,
    category: "Custard",
    image: "creme_brulee.jpg",
    quickFacts: {
      origin: "France",
      year: 1691,
      type: "Custard Dessert"
    },
    history: "Crème brûlée first appeared in François Massialot's 1691 cookbook. The dessert gained popularity in French high society and eventually became a staple of fine dining establishments worldwide. The signature caramelized sugar top was added in the 18th century.",
    flavorProfile: "Rich, creamy vanilla custard with a contrasting layer of hard caramelized sugar on top. The custard is silky and smooth with intense vanilla flavor, while the caramelized top provides a satisfying crack and bitter-sweet taste.",
    trivia: "The sugar top should be torched just before serving to maintain the contrast between the cold custard and warm, crackling caramel.",
    brandStory: null
  },
  {
    id: "eclair_01",
    name: "Éclair",
    isPro: false,
    category: "Pastry",
    image: "eclair.jpg",
    quickFacts: {
      origin: "France",
      year: 1850,
      type: "Choux Pastry"
    },
    history: "Éclairs were first created by French chef Marie-Antoine Carême in the 1850s. The name means 'lightning' in French, possibly referring to how quickly they're eaten or the glossy appearance of the icing.",
    flavorProfile: "Light, airy choux pastry filled with pastry cream and topped with fondant icing. The pastry shell is crisp on the outside but hollow inside, creating a perfect vessel for the smooth, rich cream filling.",
    trivia: "Traditional éclairs are always finger-shaped and exactly 4 inches long according to French pastry standards.",
    brandStory: null
  },
  {
    id: "madeleine_01",
    name: "Madeleine",
    isPro: false,
    category: "Cake",
    image: "madeleine.jpg",
    quickFacts: {
      origin: "France",
      year: 1755,
      type: "Sponge Cake"
    },
    history: "Madeleines originated in the town of Commercy in the Lorraine region of France in 1755. They were allegedly created by Madeleine Paulmier for Stanisław Leszczyński, whose daughter later introduced them to the court of Versailles.",
    flavorProfile: "Light, spongy texture with a delicate buttery flavor and subtle lemon notes. The shell-shaped cakes have a slightly crispy exterior and tender, moist interior with a fine crumb structure.",
    trivia: "Marcel Proust famously wrote about madeleines in 'In Search of Lost Time', making them a symbol of involuntary memory.",
    brandStory: null
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
    trivia: "Mochi-making is considered a spiritual practice in Japan, and eating mochi on New Year's Day is believed to bring good luck.",
    brandStory: null
  },
  {
    id: "dorayaki_01",
    name: "Dorayaki",
    isPro: false,
    category: "Pancake",
    image: "dorayaki.jpg",
    quickFacts: {
      origin: "Japan",
      year: 1914,
      type: "Filled Pancake"
    },
    history: "Dorayaki was created in 1914 by a confectioner in Tokyo. The modern version consists of two pancake-like patties filled with sweet azuki bean paste. It became widely popular after being featured as the favorite food of the cartoon character Doraemon.",
    flavorProfile: "Fluffy, honey-sweetened pancakes sandwiching smooth, sweet red bean paste. The pancakes have a cake-like texture with subtle honey notes, while the azuki filling provides earthy sweetness and creamy consistency.",
    trivia: "The name 'dorayaki' comes from 'dora' (gong) because the round shape resembles a Japanese gong.",
    brandStory: null
  },
  {
    id: "wagashi_01",
    name: "Wagashi",
    isPro: true,
    category: "Traditional Sweet",
    image: "wagashi.jpg",
    quickFacts: {
      origin: "Japan",
      year: 800,
      type: "Art Confection"
    },
    history: "Wagashi developed alongside the Japanese tea ceremony during the Heian period (794-1185). These artistic sweets are designed to reflect the seasons and complement the bitter taste of matcha tea. Each piece is considered edible art.",
    flavorProfile: "Subtle sweetness with natural flavors like red bean, green tea, cherry blossom, or seasonal fruits. The texture varies from smooth and creamy to firm and chewy, designed to cleanse the palate and enhance tea appreciation.",
    trivia: "Master wagashi artisans train for decades to perfect their craft, and each sweet is designed to represent a specific season or natural element.",
    brandStory: null
  },
  {
    id: "taiyaki_01",
    name: "Taiyaki",
    isPro: false,
    category: "Pastry",
    image: "taiyaki.jpg",
    quickFacts: {
      origin: "Japan",
      year: 1909,
      type: "Fish-shaped Pastry"
    },
    history: "Taiyaki was first made in Tokyo in 1909, inspired by the earlier imagawayaki (round filled pancakes). The fish shape was chosen because tai (sea bream) is considered a symbol of good luck and prosperity in Japanese culture.",
    flavorProfile: "Crispy exterior with a tender, cake-like interior, traditionally filled with sweet azuki bean paste. Modern variations include custard, chocolate, or sweet potato filling. The contrast between the crispy shell and soft filling creates a satisfying textural experience.",
    trivia: "There's a cultural debate in Japan about whether to eat taiyaki head-first or tail-first, with surveys showing most people prefer starting with the head.",
    brandStory: null
  },
  {
    id: "melonpan_01",
    name: "Melon Pan",
    isPro: false,
    category: "Sweet Bread",
    image: "melonpan.jpg",
    quickFacts: {
      origin: "Japan",
      year: 1910,
      type: "Sweet Bread"
    },
    history: "Melon pan was developed in Japan during the Meiji era as Western baking techniques were introduced. Despite its name and appearance, traditional melon pan doesn't contain melon flavor—the name refers to its resemblance to a cantaloupe's surface.",
    flavorProfile: "Soft, fluffy bread interior with a thin, crispy cookie crust exterior. The bread is mildly sweet with a tender texture, while the outer layer provides a contrasting crunch and subtle vanilla sweetness.",
    trivia: "In the Kansai region of Japan, melon pan is called 'sunrise' due to its round shape and golden color.",
    brandStory: null
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
    trivia: "Ruth Wakefield sold her recipe to Nestlé for a lifetime supply of chocolate, and her recipe still appears on Nestlé packages today.",
    brandStory: null
  },
  {
    id: "brownie_01",
    name: "Brownie",
    isPro: false,
    category: "Bar Cookie",
    image: "brownie.jpg",
    quickFacts: {
      origin: "USA",
      year: 1893,
      type: "Chocolate Square"
    },
    history: "Brownies were allegedly created in 1893 for the World's Columbian Exposition in Chicago. Bertha Palmer, a prominent socialite, requested a dessert suitable for ladies' lunchboxes that was more portable than cake but richer than cookies.",
    flavorProfile: "Dense, fudgy texture with intense chocolate flavor. The perfect brownie has a slightly crispy top layer and a moist, chewy interior. The chocolate flavor is deep and rich, often enhanced with vanilla and sometimes nuts.",
    trivia: "The debate between fudgy vs. cakey brownies has divided Americans for over a century, with fudgy versions being more popular.",
    brandStory: null
  },
  {
    id: "cheesecake_01",
    name: "New York Cheesecake",
    isPro: true,
    category: "Cake",
    image: "cheesecake.jpg",
    quickFacts: {
      origin: "USA",
      year: 1929,
      type: "Cream Cheese Cake"
    },
    history: "New York-style cheesecake was popularized by Lindy's restaurant in the 1940s, though variations existed since the 1920s. The dense, rich style became synonymous with American cheesecake, distinguishing it from lighter European versions.",
    flavorProfile: "Ultra-rich, dense, and creamy texture with tangy cream cheese flavor balanced by sweetness. The graham cracker crust provides textural contrast and subtle honey-cinnamon notes that complement the filling.",
    trivia: "A proper New York cheesecake weighs about 2.5 pounds and should be so dense that a thin slice is satisfying.",
    brandStory: null
  },
  {
    id: "apple_pie_01",
    name: "Apple Pie",
    isPro: false,
    category: "Pie",
    image: "apple_pie.jpg",
    quickFacts: {
      origin: "USA",
      year: 1780,
      type: "Fruit Pie"
    },
    history: "While apple pie existed in England, the American version developed its own character by the 18th century. The phrase 'as American as apple pie' emerged during World War II, cementing its status as a symbol of American culture.",
    flavorProfile: "Flaky, buttery crust encasing tender, spiced apples. The filling combines sweet and tart apple varieties with cinnamon, nutmeg, and sugar, creating a warm, comforting flavor profile with textural contrast between crispy crust and soft filling.",
    trivia: "Americans consume over 186 million apple pies per year, and the phrase 'as American as apple pie' is known worldwide.",
    brandStory: null
  },
  {
    id: "snickers_01",
    name: "Snickers",
    isPro: false,
    category: "Chocolate Bar",
    image: "snickers.jpg",
    quickFacts: {
      origin: "USA",
      year: 1930,
      type: "Candy Bar"
    },
    history: "Snickers was created by Frank Mars in 1930 and named after the Mars family's favorite horse. It became one of the world's best-selling candy bars, combining nougat, caramel, peanuts, and milk chocolate in a satisfying combination.",
    flavorProfile: "Chewy nougat base topped with salted caramel and roasted peanuts, all enrobed in milk chocolate. The combination provides multiple textures and flavors: sweet, salty, creamy, chewy, and crunchy elements in every bite.",
    trivia: "Snickers bars were originally sold as 'Marathon' bars in the UK until 1990, and the 'You're not you when you're hungry' campaign is one of the most successful in advertising history.",
    brandStory: "Mars positioned Snickers as the hunger-satisfying candy bar, emphasizing its substantial ingredients and ability to provide lasting energy."
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
    trivia: "Authentic Black Forest cake must contain Kirsch (cherry brandy) to meet German food regulations, and the cherries should be sour, not sweet.",
    brandStory: null
  },
  {
    id: "lebkuchen_01",
    name: "Lebkuchen",
    isPro: false,
    category: "Gingerbread",
    image: "lebkuchen.jpg",
    quickFacts: {
      origin: "Germany",
      year: 1395,
      type: "Spiced Cookie"
    },
    history: "Lebkuchen has been made in Nuremberg since the 14th century. Medieval monks originally baked these honey-sweetened cookies, and they became associated with Christmas markets and celebrations throughout German-speaking regions.",
    flavorProfile: "Dense, chewy texture with complex spicing including cinnamon, cloves, cardamom, and ginger. Sweetened with honey rather than sugar, creating a deeper, more complex sweetness with warming spice notes and often a subtle citrus undertone.",
    trivia: "Nürnberger Lebkuchen has protected geographical status in the EU, and traditional recipes are closely guarded family secrets.",
    brandStory: null
  },
  {
    id: "stollen_01",
    name: "Stollen",
    isPro: true,
    category: "Sweet Bread",
    image: "stollen.jpg",
    quickFacts: {
      origin: "Germany",
      year: 1329,
      type: "Christmas Bread"
    },
    history: "Dresdner Stollen dates back to 1329 and was originally a simple bread made during Advent fasting periods. Over time, it evolved to include butter, dried fruits, and marzipan, becoming a rich Christmas tradition in Saxony.",
    flavorProfile: "Dense, yeast-based bread filled with dried fruits, nuts, and marzipan, heavily dusted with powdered sugar. The flavor is complex with vanilla, rum-soaked fruits, almond marzipan, and warming spices, improved by aging for several weeks.",
    trivia: "Authentic Dresden Stollen can only be made by certified bakers in and around Dresden, and the annual Stollenfest in Dresden features a 4-ton stollen.",
    brandStory: null
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
    trivia: "The original gummy bears were larger and harder than modern versions, and Haribo produces over 100 million gummy bears daily.",
    brandStory: "Haribo's slogan 'Kids and grown-ups love it so, the happy world of Haribo' reflects the brand's appeal across all ages and its position as the inventor of gummy candy."
  },

  // UNITED KINGDOM 🇬🇧
  {
    id: "spotted_dick_01",
    name: "Spotted Dick",
    isPro: false,
    category: "Pudding",
    image: "spotted_dick.jpg",
    quickFacts: {
      origin: "United Kingdom",
      year: 1850,
      type: "Steamed Pudding"
    },
    history: "This traditional British steamed pudding dates back to the mid-19th century. The name comes from the 'spots' of dried fruit throughout the pudding. It was a popular dessert in Victorian times and remains a classic comfort food in British cuisine.",
    flavorProfile: "Light, spongy steamed pudding studded with currants or raisins, typically served with warm custard. The pudding has a mild vanilla flavor with sweet bursts from the dried fruit, and the steaming process creates a moist, tender texture.",
    trivia: "Despite its unusual name, 'spotted dick' refers only to the appearance of the fruit in the pudding, and it's considered a national treasure in British cuisine.",
    brandStory: null
  },
  {
    id: "trifle_01",
    name: "English Trifle",
    isPro: true,
    category: "Layered Dessert",
    image: "trifle.jpg",
    quickFacts: {
      origin: "United Kingdom",
      year: 1596,
      type: "Layered Dessert"
    },
    history: "Trifle originated in England in the 16th century as a simple dessert of thick cream flavored with sugar, ginger, and rosewater. It evolved into the elaborate layered dessert we know today, becoming a centerpiece of British celebrations.",
    flavorProfile: "Layers of sponge cake or ladyfingers soaked in sherry or fruit juice, custard, fruit, and whipped cream. Each spoonful combines multiple textures and flavors—boozy cake, creamy custard, fresh fruit tartness, and light cream.",
    trivia: "Traditional English trifle must contain custard, cream, fruit, and alcohol-soaked cake to be considered authentic, and no two families make it exactly the same way.",
    brandStory: null
  },
  {
    id: "scones_01",
    name: "Scones",
    isPro: false,
    category: "Quick Bread",
    image: "scones.jpg",
    quickFacts: {
      origin: "United Kingdom",
      year: 1513,
      type: "Tea Cake"
    },
    history: "Scones originated in Scotland in the early 16th century and were originally made with oats and cooked on a griddle. They evolved into the baked, wheat-flour versions popular in English tea service by the 19th century.",
    flavorProfile: "Light, crumbly texture that's neither sweet like cake nor savory like bread. Plain scones have a subtle buttery flavor, while fruit versions include currants or raisins. Best served warm with clotted cream and jam.",
    trivia: "The great British debate continues over whether to put jam or cream on scones first, with Devon and Cornwall having opposing traditions.",
    brandStory: null
  },
  {
    id: "sticky_toffee_pudding_01",
    name: "Sticky Toffee Pudding",
    isPro: true,
    category: "Pudding",
    image: "sticky_toffee_pudding.jpg",
    quickFacts: {
      origin: "United Kingdom",
      year: 1970,
      type: "Sponge Cake"
    },
    history: "Created by Francis Coulson at the Sharrow Bay Hotel in the Lake District in the 1970s. The recipe was adapted from a Canadian dish, but the British version with its signature toffee sauce became a modern classic of British cuisine.",
    flavorProfile: "Moist sponge cake made with dates, served hot with a rich toffee sauce and often vanilla ice cream or custard. The cake is incredibly moist and sweet, while the toffee sauce adds buttery, caramel notes and luxurious texture.",
    trivia: "Sticky toffee pudding became so popular that it's now served in restaurants worldwide and is considered one of Britain's greatest culinary exports.",
    brandStory: null
  },

  // TURKEY 🇹🇷
  {
    id: "turkish_delight_01",
    name: "Turkish Delight",
    isPro: false,
    category: "Confection",
    image: "turkish_delight.jpg",
    quickFacts: {
      origin: "Turkey",
      year: 1777,
      type: "Gel Confection"
    },
    history: "Turkish Delight (Lokum) was created in 18th century Istanbul by confectioner Bekir Effendi. It became popular in the Ottoman palace and spread throughout the empire. European travelers brought it west, where it gained fame through literature and exotic associations.",
    flavorProfile: "Soft, gel-like texture with delicate floral or fruit flavors, dusted with powdered sugar or coconut. Traditional flavors include rose, lemon, and mastic, creating an aromatic, perfumed sweetness that's both subtle and distinctive.",
    trivia: "Turkish Delight was famously featured in C.S. Lewis's 'The Lion, the Witch and the Wardrobe,' and authentic versions are still made using traditional methods in Istanbul's Grand Bazaar.",
    brandStory: null
  },
  {
    id: "baklava_01",
    name: "Baklava",
    isPro: true,
    category: "Pastry",
    image: "baklava.jpg",
    quickFacts: {
      origin: "Turkey",
      year: 1453,
      type: "Phyllo Pastry"
    },
    history: "While disputed among several Mediterranean countries, modern baklava as we know it was perfected in the Ottoman Empire's kitchens in the 15th century. The technique of paper-thin phyllo dough and the combination of nuts and syrup created this iconic dessert.",
    flavorProfile: "Layers of paper-thin phyllo pastry filled with chopped nuts (pistachios, walnuts, or almonds) and sweetened with honey or sugar syrup. The result is incredibly flaky and crunchy with rich, nutty flavors and aromatic honey sweetness.",
    trivia: "Traditional Turkish baklava contains exactly 40 layers of phyllo dough, and the best versions use Antep pistachios, which are considered the finest in the world.",
    brandStory: null
  },

  // INDIA 🇮🇳
  {
    id: "gulab_jamun_01",
    name: "Gulab Jamun",
    isPro: false,
    category: "Fried Sweet",
    image: "gulab_jamun.jpg",
    quickFacts: {
      origin: "India",
      year: 1200,
      type: "Milk Dumpling"
    },
    history: "Gulab Jamun originated in medieval India, possibly influenced by Persian and Arab sweets brought by rulers. The name combines 'gulab' (rose water) and 'jamun' (a purple fruit), referring to its appearance and flavor profile.",
    flavorProfile: "Soft, spongy dumplings made from milk solids, fried until golden and soaked in aromatic sugar syrup flavored with rose water and cardamom. The texture is incredibly tender, almost melting in the mouth, with floral and spiced sweetness.",
    trivia: "Perfect gulab jamun should double in size when fried and have a uniform brown color without cracks, indicating the correct dough consistency and oil temperature.",
    brandStory: null
  },
  {
    id: "rasgulla_01",
    name: "Rasgulla",
    isPro: false,
    category: "Cheese Sweet",
    image: "rasgulla.jpg",
    quickFacts: {
      origin: "India",
      year: 1868,
      type: "Cottage Cheese Ball"
    },
    history: "Rasgulla was created by Nobin Chandra Das in Kolkata in 1868. This innovative sweet revolutionized Indian confectionery by using chenna (cottage cheese) instead of traditional khoya, creating a lighter, spongier texture.",
    flavorProfile: "White, spongy balls of cottage cheese cooked in sugar syrup. The texture is incredibly light and airy, almost like a sweet sponge that releases flavored syrup when bitten. The taste is mildly sweet with a clean, milky flavor.",
    trivia: "Authentic rasgulla should be white (not cream-colored), perfectly round, and should spring back when gently pressed, indicating proper preparation.",
    brandStory: null
  },
  {
    id: "kulfi_01",
    name: "Kulfi",
    isPro: true,
    category: "Frozen Dessert",
    image: "kulfi.jpg",
    quickFacts: {
      origin: "India",
      year: 1500,
      type: "Indian Ice Cream"
    },
    history: "Kulfi originated in the Mughal era during the 16th century. It was created by mixing dense, reduced milk with sugar and flavors, then freezing it in metal cones. The slow-freezing process and dense milk create its characteristic texture.",
    flavorProfile: "Dense, creamy texture unlike regular ice cream, with intense milk flavor enhanced by cardamom, pistachios, or saffron. The slow evaporation process concentrates the milk, creating a rich, almost chewy consistency with complex aromatic spicing.",
    trivia: "Traditional kulfi is frozen in conical molds called 'kulfi moulds' and is denser than ice cream because it's not churned during freezing.",
    brandStory: null
  },

  // MEXICO 🇲🇽
  {
    id: "tres_leches_01",
    name: "Tres Leches Cake",
    isPro: true,
    category: "Cake",
    image: "tres_leches.jpg",
    quickFacts: {
      origin: "Mexico",
      year: 1930,
      type: "Soaked Cake"
    },
    history: "Tres Leches cake gained popularity in Mexico in the 1930s, possibly influenced by European sponge cakes. The technique of soaking cake in three types of milk (evaporated, condensed, and heavy cream) created this uniquely Latin American dessert.",
    flavorProfile: "Light sponge cake soaked in a mixture of three milks, creating an incredibly moist, almost custard-like texture. The flavor is rich and creamy with vanilla notes, often topped with cinnamon-dusted whipped cream or meringue.",
    trivia: "A properly made tres leches cake should be moist but not soggy, and the milk mixture should be completely absorbed by the cake without pooling at the bottom.",
    brandStory: null
  },
  {
    id: "churros_01",
    name: "Churros",
    isPro: false,
    category: "Fried Pastry",
    image: "churros.jpg",
    quickFacts: {
      origin: "Mexico",
      year: 1600,
      type: "Fried Dough"
    },
    history: "While disputed between Spain and Mexico, churros as we know them were perfected in Mexico during the colonial period. Mexican churros are typically filled with dulce de leche or chocolate, distinguishing them from the Spanish versions.",
    flavorProfile: "Crispy exterior with a tender, slightly chewy interior, coated in cinnamon sugar. Mexican churros are often filled with sweet fillings like dulce de leche, creating a contrast between the crispy shell and creamy center.",
    trivia: "The ridged exterior of churros isn't just decorative—it increases surface area for better cinnamon-sugar adherence and creates more crispy edges.",
    brandStory: null
  },
  {
    id: "flan_01",
    name: "Flan",
    isPro: false,
    category: "Custard",
    image: "flan.jpg",
    quickFacts: {
      origin: "Mexico",
      year: 1518,
      type: "Caramel Custard"
    },
    history: "While flan originated in Rome, the Mexican version developed during Spanish colonization, incorporating local ingredients and techniques. Mexican flan became distinctly different with its use of condensed milk and different caramelization methods.",
    flavorProfile: "Silky, smooth custard with rich vanilla flavor, topped with bitter-sweet caramel sauce. The custard is denser than French crème caramel, with a more pronounced vanilla taste and darker, more complex caramel that balances the sweetness.",
    trivia: "Perfect Mexican flan should have no bubbles or cracks, indicating gentle cooking, and the caramel should be dark amber for the proper bitter-sweet flavor.",
    brandStory: null
  }
];
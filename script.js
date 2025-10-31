document.addEventListener("DOMContentLoaded", () => {
  // Set current year in the footer
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- Recipe Data (Your Recipes Here!) ---
  // This is an array of objects, where each object represents a recipe.
  const recipesData = [
    // Starters
    {
      id: "paneer-tikka",
      category: "starters",
      title: "Paneer Tikka",
      image: "images/starter1.jpg",
      shortDescription: "Marinated grilled paneer cubes, a popular appetizer.",
      ingredients: [
        "250g Paneer, cubed",
        "1/2 cup thick yogurt",
        "1 tbsp ginger-garlic paste",
        "1 tsp red chili powder",
        "1/2 tsp turmeric powder",
        "1 tsp garam masala",
        "1/2 tsp cumin powder",
        "1/2 tsp coriander powder",
        "1 tbsp besan (gram flour), roasted",
        "1 tbsp lemon juice",
        "Salt to taste",
        "Capsicum (bell peppers) and Onions, cubed (for skewers)",
        "Oil for grilling/frying",
      ],
      instructions: [
        "In a bowl, combine yogurt, ginger-garlic paste, all dry spices, roasted besan, lemon juice, and salt. Mix well to form a smooth marinade.",
        "Add paneer cubes, capsicum, and onion cubes to the marinade. Gently toss to coat everything evenly. Cover and refrigerate for at least 30 minutes (or longer for better flavor).",
        "Preheat oven to 200°C (400°F) or a grill pan on medium-high heat.",
        "Thread the marinated paneer and vegetables onto skewers.",
        "Brush with a little oil and grill or bake until the paneer is golden brown and slightly charred, and vegetables are tender-crisp. Turn occasionally to ensure even cooking.",
        "Serve hot with mint chutney and onion rings.",
      ],
      fullDescription:
        "Paneer Tikka is a popular Indian appetizer made from cubes of paneer (Indian cheese) marinated in a spicy, creamy yogurt mixture and then grilled or baked until charred and flavorful. It's a delightful vegetarian alternative to chicken tikka and a staple in Indian restaurants.",
    },
    {
      id: "vegetable-samosa",
      category: "starters",
      title: "Vegetable Samosa",
      image: "images/starter2.jpg",
      shortDescription: "Crispy pastry filled with spiced potatoes and peas.",
      ingredients: [
        "2 cups all-purpose flour",
        "1/4 cup oil or ghee",
        "Salt to taste",
        "Water for dough",
        "Filling:",
        "3 medium potatoes, boiled and mashed",
        "1/2 cup green peas",
        "1-inch ginger, grated",
        "2 green chilies, minced",
        "1 tsp cumin seeds",
        "1/2 tsp turmeric powder",
        "1 tsp coriander powder",
        "1/2 tsp garam masala",
        "Chopped cilantro",
        "Oil for frying",
      ],
      instructions: [
        "For the dough: Mix flour, salt, oil. Add water gradually to form a stiff dough. Rest for 30 mins.",
        "For filling: Heat oil, add cumin seeds, ginger, green chilies. Add peas, then mashed potatoes and all spices. Cook for 5-7 mins. Mix in cilantro.",
        "Roll out small portions of dough into oval shapes, cut in half. Form cones, fill with mixture, seal edges.",
        "Deep fry samosas on medium-low heat until golden brown and crispy.",
      ],
      fullDescription:
        "Vegetable Samosa is a beloved Indian snack consisting of a crispy, triangular pastry shell filled with a savory mixture of spiced potatoes, peas, and sometimes other vegetables. It's deep-fried to golden perfection and often served with chutney.",
    },
    {
      id: "hara-bhara-kebab",
      category: "starters",
      title: "Hara Bhara Kebab",
      image: "images/starter3.jpg",
      shortDescription:
        "Nutritious patties made from spinach, peas, and potatoes.",
      ingredients: [
        "1 bunch spinach, blanched and puréed",
        "1 cup green peas, blanched",
        "2 medium potatoes, boiled and mashed",
        "2 tbsp roasted gram flour (besan)",
        "1 inch ginger, grated",
        "2 green chilies, minced",
        "1/2 tsp garam masala",
        "Salt to taste",
        "Oil for shallow frying",
      ],
      instructions: [
        "Combine pureed spinach, blanched peas, mashed potatoes, gram flour, ginger, green chilies, garam masala, and salt.",
        "Mix well to form a dough-like consistency. If sticky, add a little more gram flour.",
        "Form into small round or oval patties.",
        "Shallow fry on a non-stick pan until golden brown and crispy on both sides.",
        "Serve hot with mint chutney.",
      ],
      fullDescription:
        'Hara Bhara Kebab literally means "green" (hara) and "full of" (bhara) kebab, referring to its vibrant green color from spinach and peas. These nutritious and delicious vegetarian patties are a popular appetizer, often served during festivals or as a healthy snack.',
    },
    {
      id: "aloo-tikki",
      category: "starters",
      title: "Aloo Tikki",
      image: "images/starter4.jpg",
      shortDescription: "Spiced potato patties, pan-fried to perfection.",
      ingredients: [
        "4 medium potatoes, boiled and mashed",
        "2 tbsp cornflour or rice flour",
        "1 inch ginger, grated",
        "2 green chilies, minced",
        "1/2 tsp cumin powder",
        "1/2 tsp red chili powder",
        "Chopped cilantro",
        "Salt to taste",
        "Oil for frying",
      ],
      instructions: [
        "In a bowl, combine mashed potatoes, cornflour/rice flour, grated ginger, minced green chilies, cumin powder, red chili powder, chopped cilantro, and salt.",
        "Mix well to form a firm dough. Divide into equal portions and flatten into round patties (tikkis).",
        "Heat oil in a pan. Shallow fry the tikkis until golden brown and crisp on both sides.",
        "Serve hot with tamarind chutney or yogurt.",
      ],
      fullDescription:
        "Aloo Tikki are crispy and savory potato patties, a popular street food and snack across India. Made from spiced mashed potatoes, they are pan-fried until golden brown and often served with various chutneys or as part of a chaat.",
    },
    {
      id: "gobi-manchurian",
      category: "starters",
      title: "Gobi Manchurian (Dry)",
      image: "images/starter5.jpg",
      shortDescription:
        "Crispy fried cauliflower florets tossed in a spicy sauce.",
      ingredients: [
        "1 medium cauliflower, cut into florets",
        "For batter: 1/2 cup maida, 1/4 cup cornflour, salt, pepper, water",
        "For sauce: 1 tbsp oil, 1 inch ginger, minced, 2-3 cloves garlic, minced, 1 green chili, sliced",
        "1/4 cup chopped spring onion whites",
        "1 tbsp soy sauce",
        "1 tsp vinegar",
        "1/2 tsp sugar",
        "Salt to taste",
        "Chopped spring onion greens for garnish",
        "Oil for deep frying",
      ],
      instructions: [
        "Blanch cauliflower florets in hot water for 5 minutes, drain well.",
        "Mix maida, cornflour, salt, pepper, and water to make a smooth batter. Dip florets in batter and deep fry until crispy and golden. Drain excess oil.",
        "Heat oil in a wok. Add ginger, garlic, green chili, and spring onion whites. Sauté for a minute.",
        "Add soy sauce, vinegar, sugar, and salt. Toss the fried cauliflower florets in the sauce until well coated.",
        "Garnish with spring onion greens and serve hot.",
      ],
      fullDescription:
        'Gobi Manchurian is a popular Indo-Chinese dish made with crispy fried cauliflower florets tossed in a spicy, tangy, and sweet sauce. The "dry" version is served as an appetizer, while the "gravy" version is a main course.',
    },
    // Main Course
    {
      id: "dal-makhani",
      category: "main-course",
      title: "Dal Makhani",
      image: "images/maincourse1.jpg",
      shortDescription:
        "Creamy black lentils simmered overnight with butter and spices.",
      ingredients: [
        "1 cup whole black lentils (urad dal)",
        "1/4 cup kidney beans (rajma)",
        "4 cups water",
        "1 large onion, finely chopped",
        "2 tomatoes, puréed",
        "2 tbsp ginger-garlic paste",
        "2 green chilies, slit",
        "1/2 cup cream",
        "2 tbsp butter or ghee",
        "1 tsp red chili powder",
        "1 tsp cumin powder",
        "1 tsp garam masala",
        "Salt to taste",
        "Fresh cilantro for garnish",
      ],
      instructions: [
        "Wash and soak black lentils and kidney beans overnight. Drain.",
        "Pressure cook with 4 cups water until very soft (approx. 7-8 whistles). Mash lightly.",
        "Heat butter/ghee in a pan. Add chopped onion and sauté until golden. Add ginger-garlic paste and green chilies, sauté for a minute.",
        "Add tomato purée and cook until oil separates. Add red chili, cumin, garam masala, and salt. Cook for 2 mins.",
        "Add the cooked dal and beans. Simmer on low heat for at least 30 minutes, stirring occasionally. Add water if too thick.",
        "Stir in cream just before serving. Garnish with fresh cilantro.",
      ],
      fullDescription:
        "Dal Makhani is a classic Indian dish originating from Punjab. It's a rich, creamy, and flavorful lentil curry made with whole black lentils (urad dal) and kidney beans, slow-cooked with butter, cream, and a blend of aromatic spices. It's a popular accompaniment to naan or rice.",
    },
    {
      id: "paneer-butter-masala",
      category: "main-course",
      title: "Paneer Butter Masala",
      image: "images/maincourse2.jpg",
      shortDescription:
        "Rich and creamy tomato-based curry with soft paneer cubes.",
      ingredients: [
        "250g paneer, cubed",
        "2 large tomatoes, roughly chopped",
        "1 large onion, roughly chopped",
        "1/2 inch ginger, 4-5 cloves garlic",
        "10-12 cashews",
        "2 green cardamoms",
        "1 stick cinnamon",
        "2 cloves",
        "1 bay leaf",
        "1/2 tsp turmeric powder",
        "1 tsp red chili powder",
        "1 tsp coriander powder",
        "1/2 tsp garam masala",
        "1/4 cup cream",
        "2 tbsp butter",
        "Oil, salt, sugar to taste",
      ],
      instructions: [
        "Boil tomatoes, onion, ginger, garlic, cashews, and whole spices (cardamom, cinnamon, cloves, bay leaf) in water until soft. Let cool, remove whole spices, and blend to a smooth paste.",
        "Heat butter and a little oil in a pan. Add the puréed mixture and cook for 5-7 minutes, stirring, until thick.",
        "Add turmeric, red chili, coriander, garam masala, salt, and a pinch of sugar. Cook for 2-3 minutes.",
        "Add paneer cubes and a little water if needed. Simmer for 5-7 minutes.",
        "Stir in cream just before serving. Garnish with fresh cream or cilantro.",
      ],
      fullDescription:
        "Paneer Butter Masala is a popular Indian vegetarian curry made with soft paneer (Indian cheese) cubes simmered in a rich, creamy, and mildly spicy tomato-based gravy. It's known for its characteristic buttery flavor and is a favorite with naan or rice.",
    },
    {
      id: "chole-bhature",
      category: "main-course",
      title: "Chole Bhature",
      image: "images/maincourse3.jpg",
      shortDescription: "Spicy chickpea curry served with fluffy fried bread.",
      ingredients: [
        "For Chole:",
        "1 cup chickpeas (chole), soaked overnight",
        "2 onions, finely chopped",
        "2 tomatoes, puréed",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1 tsp coriander powder",
        "1/2 tsp turmeric powder",
        "1 tsp red chili powder",
        "1 tsp chole masala",
        "Salt to taste",
        "Oil, water, fresh cilantro",
        "For Bhature:",
        "2 cups all-purpose flour (maida)",
        "1/4 cup yogurt",
        "1 tsp sugar",
        "1/2 tsp baking powder",
        "Salt to taste",
        "Water for dough",
        "Oil for frying",
      ],
      instructions: [
        "For Chole: Pressure cook soaked chickpeas until tender. Heat oil, add cumin seeds. Sauté onions until golden, add ginger-garlic paste. Add tomato purée and spices (coriander, turmeric, red chili, chole masala, salt). Cook until oil separates. Add cooked chickpeas and some water, simmer for 10-15 mins. Garnish with cilantro.",
        "For Bhature: Mix flour, yogurt, sugar, baking powder, salt. Add water gradually to make a soft dough. Knead for 5-7 mins. Cover and let it rest for 2 hours.",
        "Divide dough into balls, roll into oval shapes. Heat oil for frying until very hot. Deep fry bhature one by one, pressing gently with a ladle to puff them up. Fry until golden on both sides.",
        "Serve hot chole with freshly fried bhature.",
      ],
      fullDescription:
        "Chole Bhature is a popular North Indian dish consisting of spicy and tangy chickpea curry (chole) served with fluffy, deep-fried bread (bhature). It's a hearty and satisfying meal, often enjoyed for breakfast or lunch.",
    },
    {
      id: "palak-paneer",
      category: "main-course",
      title: "Palak Paneer",
      image: "images/maincourse4.jpg",
      shortDescription:
        "Spinach and paneer cooked in a flavorful, healthy gravy.",
      ingredients: [
        "1 bunch fresh spinach",
        "200g paneer, cubed",
        "1 large onion, finely chopped",
        "2 tomatoes, puréed",
        "1 tbsp ginger-garlic paste",
        "2 green chilies",
        "1/2 tsp cumin seeds",
        "1/2 tsp turmeric powder",
        "1 tsp coriander powder",
        "1/2 tsp garam masala",
        "Salt to taste",
        "Oil or ghee",
      ],
      instructions: [
        "Blanch spinach in hot water for 2-3 mins, immediately transfer to ice water. Drain and blend to a smooth purée.",
        "Heat oil/ghee in a pan. Add cumin seeds. Once they splutter, add chopped onion and sauté until translucent. Add ginger-garlic paste and green chilies, sauté for a minute.",
        "Add tomato purée and cook until oil separates. Add turmeric, coriander, garam masala, and salt. Cook for 2 mins.",
        "Add the spinach purée and simmer for 5-7 minutes. Add paneer cubes and cook for another 3-5 minutes.",
        "Serve hot with roti or rice.",
      ],
      fullDescription:
        "Palak Paneer is a healthy and flavorful Indian vegetarian curry made with spinach and paneer (Indian cheese). The spinach is blanched and puréed, then cooked with spices and tender paneer cubes, creating a vibrant green and nutritious dish.",
    },
    {
      id: "vegetable-biryani",
      category: "main-course",
      title: "Vegetable Biryani",
      image: "images/maincourse5.jpg",
      shortDescription:
        "Fragrant basmati rice cooked with mixed vegetables and spices.",
      ingredients: [
        "1 cup basmati rice, soaked for 30 mins",
        "2 cups mixed vegetables (carrots, beans, peas, potatoes, cauliflower)",
        "1 large onion, thinly sliced",
        "1/2 cup yogurt",
        "1 tbsp ginger-garlic paste",
        "1/2 cup chopped mint leaves",
        "1/2 cup chopped coriander leaves",
        "Whole spices: Bay leaf, cinnamon stick, green cardamom, cloves",
        "Powdered spices: 1 tsp red chili, 1 tsp coriander, 1/2 tsp turmeric, 1 tsp biryani masala",
        "Saffron strands soaked in 2 tbsp milk (optional)",
        "Oil/ghee, salt to taste",
      ],
      instructions: [
        "Cook rice until 70% done, drain. Spread on a plate to cool.",
        "Marinate mixed vegetables with yogurt, ginger-garlic paste, half of the chopped mint/coriander, and all powdered spices for 20 mins.",
        "Heat oil/ghee in a heavy-bottomed pot. Sauté whole spices. Add sliced onions and fry until golden brown. Remove half for garnish.",
        "Add marinated vegetables and cook for 5-7 mins.",
        "Layer half cooked rice over vegetables. Sprinkle remaining fried onions, mint, and coriander. Add saffron milk.",
        "Layer remaining rice. Close lid tightly and cook on low flame for 15-20 mins (dum cooking) until rice is fully cooked and fragrant.",
        "Serve hot with raita.",
      ],
      fullDescription:
        "Vegetable Biryani is a flavorful and aromatic rice dish made with fragrant basmati rice, mixed vegetables, and a blend of exotic spices, cooked in layers. It's a complete meal in itself, often served with raita (yogurt dip).",
    },
    // Desserts
    {
      id: "gulab-jamun",
      category: "desserts",
      title: "Gulab Jamun",
      image: "images/dessert1.jpg",
      shortDescription:
        "Deep-fried milk solids soaked in sweet rose-flavored syrup.",
      ingredients: [
        "1 cup khoya (reduced milk solids) or milk powder",
        "2 tbsp all-purpose flour (maida)",
        "1/4 tsp baking soda",
        "Ghee or oil for deep frying",
        "For sugar syrup:",
        "1.5 cups sugar",
        "1 cup water",
        "4-5 green cardamoms, crushed",
        "Few saffron strands (optional)",
        "1 tsp rose water",
      ],
      instructions: [
        "For syrup: Boil sugar and water until syrup is slightly sticky (1 string consistency). Add crushed cardamom, saffron, and rose water. Keep warm.",
        "For jamuns: If using khoya, knead until smooth. If using milk powder, mix with a little milk to form a soft dough. Add maida and baking soda, knead gently until smooth. Do not overknead.",
        "Divide dough into small portions and roll into smooth, crack-free balls.",
        "Heat ghee/oil on low flame. Fry jamuns on low heat, turning constantly, until uniformly golden brown. This ensures even cooking inside.",
        "Immediately transfer fried jamuns to the warm sugar syrup. Let them soak for at least 2-3 hours (or overnight) until they swell and become soft.",
      ],
      fullDescription:
        "Gulab Jamun is a classic Indian sweet made from milk solids (khoya or milk powder), deep-fried until golden, and then soaked in a fragrant sugar syrup flavored with rose water and cardamom. They are soft, melt-in-your-mouth delights, often served warm.",
    },
    {
      id: "gajar-halwa",
      category: "desserts",
      title: "Gajar Halwa",
      image: "images/dessert2.jpg",
      shortDescription: "Sweet carrot pudding with milk, ghee, and nuts.",
      ingredients: [
        "1 kg red carrots, grated",
        "1 liter full-fat milk",
        "1/2 cup sugar (adjust to taste)",
        "4 tbsp ghee (clarified butter)",
        "1/2 tsp cardamom powder",
        "A handful of mixed nuts (almonds, cashews), chopped",
        "Raisins (optional)",
      ],
      instructions: [
        "In a heavy-bottomed pan, combine grated carrots and milk. Bring to a boil, then simmer on medium-low heat, stirring occasionally, until all the milk is absorbed and evaporated.",
        "Add ghee to the pan and continue to cook, stirring continuously, for about 10-15 minutes until the halwa starts to leave the sides of the pan and gets a glossy texture.",
        "Add sugar, cardamom powder, and chopped nuts (and raisins if using). Cook for another 5-7 minutes until the sugar melts and is absorbed.",
        "Serve warm, optionally garnished with more nuts.",
      ],
      fullDescription:
        "Gajar Halwa, or Carrot Halwa, is a popular Indian dessert made by simmering grated carrots with milk, sugar, and ghee (clarified butter) until it forms a rich, sweet pudding. It's often flavored with cardamom and garnished with nuts, commonly enjoyed during winters and festivals.",
    },
    {
      id: "rasgulla",
      category: "desserts",
      title: "Rasgulla",
      image: "images/dessert3.jpg",
      shortDescription: "Spongy cheese balls soaked in a light sugar syrup.",
      ingredients: [
        "1 liter full-fat milk",
        "2-3 tbsp lemon juice (or vinegar)",
        "For sugar syrup:",
        "1 cup sugar",
        "4 cups water",
        "4-5 green cardamoms, crushed",
      ],
      instructions: [
        "Heat milk in a heavy-bottomed pan. When it comes to a boil, turn off heat. Add lemon juice/vinegar gradually, stirring gently until milk curdles completely (paneer separates from whey).",
        "Drain the paneer through a muslin cloth. Rinse with cold water to remove lemon taste. Squeeze out excess water, but keep it slightly moist. Knead the paneer for 8-10 minutes until very smooth and free of granules.",
        "Divide kneaded paneer into small equal portions and roll into smooth, crack-free balls.",
        "For syrup: In a large pressure cooker or pot, combine sugar, water, and crushed cardamom. Bring to a rolling boil.",
        "Carefully drop the paneer balls into the boiling syrup. If using a pressure cooker, close lid and cook for 6-8 minutes on high flame after first whistle. If using an open pot, cover and cook for 15-20 minutes, or until the rasgullas double in size and are cooked through.",
        "Let them cool in the syrup. Serve chilled.",
      ],
      fullDescription:
        "Rasgulla is a famous Bengali sweet consisting of soft, spongy balls made from chhena (Indian cottage cheese), cooked in a light sugar syrup. They are known for their delightful texture and mildly sweet flavor, best served chilled.",
    },
    {
      id: "jalebi",
      category: "desserts",
      title: "Jalebi",
      image: "images/dessert4.jpg",
      shortDescription:
        "Crispy, spiral-shaped fried sweets soaked in sugar syrup.",
      ingredients: [
        "1 cup all-purpose flour (maida)",
        "1/4 cup yogurt (sour)",
        "1/2 tsp baking powder",
        "A pinch of saffron color (optional)",
        "Water for batter",
        "Ghee or oil for deep frying",
        "For sugar syrup:",
        "1.5 cups sugar",
        "1 cup water",
        "4-5 green cardamoms, crushed",
        "Few saffron strands",
        "1 tsp rose water",
      ],
      instructions: [
        "For batter: In a bowl, mix maida, yogurt, baking powder, and saffron color. Gradually add water to make a smooth, thick, flowing batter (like pancake batter). Cover and let it ferment in a warm place for 6-8 hours (or overnight).",
        "For syrup: Boil sugar and water until syrup is slightly sticky (one string consistency). Add crushed cardamom, saffron, and rose water. Keep warm.",
        "Heat ghee/oil in a wide, flat-bottomed pan. Fill the jalebi batter into a piping bag with a small hole or a squeeze bottle.",
        "Pipe spirals directly into the hot oil. Fry on medium heat until golden and crispy on both sides. Do not overcrowd the pan.",
        "Immediately transfer fried jalebis to the warm sugar syrup. Let them soak for 30 seconds to 1 minute, ensuring they are coated well.",
        "Remove from syrup and serve hot or warm.",
      ],
      fullDescription:
        "Jalebi is a popular Indian sweet snack made by deep-frying maida flour batter in intricate pretzel or circular shapes, which are then soaked in hot sugar syrup. They are known for their crispy texture, sweet and tangy flavor, and vibrant orange color.",
    },
    {
      id: "kulfi",
      category: "desserts",
      title: "Kulfi",
      image: "images/dessert5.jpg",
      shortDescription:
        "Traditional Indian frozen dessert, similar to ice cream.",
      ingredients: [
        "1 liter full-fat milk",
        "1/2 cup condensed milk",
        "1/4 cup sugar (adjust to taste)",
        "1/2 tsp cardamom powder",
        "A few saffron strands (optional)",
        "Chopped pistachios/almonds for garnish (optional)",
      ],
      instructions: [
        "In a heavy-bottomed pan, bring the full-fat milk to a boil. Reduce heat to low and simmer, stirring frequently, until the milk reduces to about half its original volume and becomes thick.",
        "Add condensed milk, sugar, cardamom powder, and saffron strands (if using). Continue to simmer and stir until the sugar dissolves and the mixture thickens further. Let it cool completely.",
        "Pour the cooled kulfi mixture into kulfi molds or small bowls/glasses.",
        "Freeze for at least 6-8 hours or overnight until completely set.",
        "To serve, briefly dip the molds in hot water, then invert to release the kulfi. Garnish with chopped nuts if desired.",
      ],
      fullDescription:
        "Kulfi is a traditional Indian frozen dairy dessert, often described as a denser, creamier version of ice cream. It's made by slow-cooking milk until it thickens and then freezing it with various flavorings like cardamom, saffron, pistachios, or mango. It's a refreshing treat, especially in the summer.",
    },
  ];

  // --- Modal Elements ---
  const recipeModal = document.getElementById("recipeModal");
  const closeButton = document.querySelector(".close-button");
  const modalRecipeTitle = document.getElementById("modalRecipeTitle");
  const modalRecipeImage = document.getElementById("modalRecipeImage");
  const modalRecipeIngredients = document.getElementById(
    "modalRecipeIngredients"
  );
  const modalRecipeInstructions = document.getElementById(
    "modalRecipeInstructions"
  );
  const modalRecipeDescription = document.getElementById(
    "modalRecipeDescription"
  );

  // --- Event Listeners for Recipe Cards ---
  // Select all "View Recipe" buttons
  const viewRecipeButtons = document.querySelectorAll(".btn-small");

  viewRecipeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior (#)

      // Get the parent recipe card to identify the recipe
      const recipeCard = event.target.closest(".recipe-card");
      const recipeTitle = recipeCard.querySelector("h4").textContent;

      // Find the corresponding recipe data
      const selectedRecipe = recipesData.find(
        (recipe) => recipe.title === recipeTitle
      );

      if (selectedRecipe) {
        // Populate modal with recipe data
        modalRecipeTitle.textContent = selectedRecipe.title;
        modalRecipeImage.src = selectedRecipe.image;
        modalRecipeImage.alt = selectedRecipe.title;

        // Clear previous ingredients/instructions
        modalRecipeIngredients.innerHTML = "";
        modalRecipeInstructions.innerHTML = "";

        // Add ingredients
        selectedRecipe.ingredients.forEach((ingredient) => {
          const li = document.createElement("li");
          li.textContent = ingredient;
          modalRecipeIngredients.appendChild(li);
        });

        // Add instructions
        selectedRecipe.instructions.forEach((instruction) => {
          const li = document.createElement("li");
          li.textContent = instruction;
          modalRecipeInstructions.appendChild(li);
        });

        modalRecipeDescription.textContent = selectedRecipe.fullDescription;

        // Display the modal
        recipeModal.style.display = "block";
        // Optional: Scroll modal content to top on open
        modalRecipeIngredients.parentElement.scrollTop = 0;
      } else {
        console.error("Recipe data not found for:", recipeTitle);
        alert("Recipe details not available at the moment.");
      }
    });
  });

  // --- Event Listeners for Modal Close ---

  // When the user clicks on <span> (x), close the modal
  closeButton.addEventListener("click", () => {
    recipeModal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal content, close it
  window.addEventListener("click", (event) => {
    if (event.target == recipeModal) {
      recipeModal.style.display = "none";
    }
  });

  // Optional: Close modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && recipeModal.style.display === "block") {
      recipeModal.style.display = "none";
    }
  });
});

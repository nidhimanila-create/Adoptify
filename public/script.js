const pets = [

  // Dogs
  {
    name: "Buddy",
    type:"Dog",
    age:"2 Years",
    energy:"Low",
    maintenance:"Medium",
    monthlyCost:2500,
    walkTime:"30 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"Medium",
    desc:"A calm and easy going gentleman",
    img:"https://images.unsplash.com/photo-1517849845537-4d257902454a"
  },

  {
    name:"Charlie",
    type:"Dog",
    age:"0.5 Years",
    energy:"High",
    maintenance:"High",
    monthlyCost:4000,
    walkTime:"2 hrs/day",
    idealHome:"Independent House",
    aloneTolerance:"Low",
    desc:"A very lively puppy who loves playing",
    img:"https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fHww"
  },

  {
    name:"Rocky",
    type:"Dog",
    age:"0.5 Years",
    energy:"High",
    maintenance:"Medium",
    monthlyCost:3500,
    walkTime:"1.5 hrs/day",
    idealHome:"House",
    aloneTolerance:"Medium",
    desc:"Loves his food over evrything else in the world",
    img:"https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHB1cHB5fGVufDB8fDB8fHww"
  },

  {
    name:"Max",
    type:"Dog",
    age:"3 Years",
    energy:"Medium",
    maintenance:"Medium",
    monthlyCost:3000,
    walkTime:"1 hr/day",
    idealHome:"Apartment",
    aloneTolerance:"High",
    desc:"Slobbery kisses guaranteed",
    img:"https://images.unsplash.com/photo-1518717758536-85ae29035b6d"
  },

  {
    name:"Cooper",
    type:"Dog",
    age:"1 Year",
    energy:"High",
    maintenance:"High",
    monthlyCost:4500,
    walkTime:"2 hrs/day",
    idealHome:"House",
    aloneTolerance:"Low",
    desc:"Love at first bark",
    img:"https://images.unsplash.com/photo-1537151625747-768eb6cf92b2"
  },

  {
    name:"Leo",
    type:"Dog",
    age:"2 Years",
    energy:"Very High",
    maintenance:"High",
    monthlyCost:5000,
    walkTime:"3 hrs/day",
    idealHome:"Independent House",
    aloneTolerance:"Low",
    desc:"Will give you sweet, fur-tastic, memories",
    img:"https://images.unsplash.com/photo-1552053831-71594a27632d"
  },

  {
    name:"Bruno",
    type:"Dog",
    age:"1 Year",
    energy:"High",
    maintenance:"Medium",
    monthlyCost:3200,
    walkTime:"1.5 hrs/day",
    idealHome:"House",
    aloneTolerance:"Medium",
    desc:"The cutest paws in town",
    img:"https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHB1cHB5fGVufDB8fDB8fHww"
  },

  {
    name:"Toby",
    type:"Dog",
    age:"1 Year",
    energy:"Medium",
    maintenance:"Low",
    monthlyCost:2200,
    walkTime:"45 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"High",
    desc:"Belly rub enthusiast",
    img:"https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },

  {
    name:"Oscar",
    type:"Dog",
    age:"0.5Years",
    energy:"Very High",
    maintenance:"High",
    monthlyCost:4800,
    walkTime:"3 hrs/day",
    idealHome:"House",
    aloneTolerance:"Low",
    desc:"Fluff ball with a heart of gold",
    img:"https://images.unsplash.com/photo-1510337550647-e84f83e341ca"
  },

  {
    name:"Simba",
    type:"Dog",
    age:"1 Year",
    energy:"High",
    maintenance:"Medium",
    monthlyCost:3400,
    walkTime:"2 hrs/day",
    idealHome:"House",
    aloneTolerance:"Medium",
    desc:"Adorable mischief maker",
    img:"https://images.unsplash.com/photo-1534361960057-19889db9621e"
  },

  // Cats

  {
    name:"Luna",
    type:"Cat",
    age:"3 Years",
    energy:"Low",
    maintenance:"Low",
    monthlyCost:1800,
    walkTime:"20 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"High",
    desc:"Loves her own company the most",
    img:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
  },

  {
    name:"Milo",
    type:"Cat",
    age:"2 Years",
    energy:"Medium",
    maintenance:"Low",
    monthlyCost:2000,
    walkTime:"25 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"High",
    desc:"Loves to sleep",
    img:"https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"
  },

  {
    name:"Bella",
    type:"Cat",
    age:"0.5 Years",
    energy:"High",
    maintenance:"Medium",
    monthlyCost:2400,
    walkTime:"40 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"Medium",
    desc:"Mischevious munchkin",
    img:"https://media.istockphoto.com/id/1345942562/photo/kitten-british-cat-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=EFM1ZsJYUsxaGiZPNJMvHzFHhq9Z8yHpImVLMXe_RFY="
  },

  {
    name:"Kitty",
    type:"Cat",
    age:"1 Year",
    energy:"Medium",
    maintenance:"Low",
    monthlyCost:1900,
    walkTime:"20 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"High",
    desc:"The Chill Zen Master",
    img:"https://media.istockphoto.com/id/1300573511/photo/a-wide-eyed-tabby-cat-in-a-crouching-position.webp?a=1&b=1&s=612x612&w=0&k=20&c=hVsNRiS6pOi3rsPbD69JqdS3dChTMOhGjN6Yxr1uaJ4="
  },

  {
    name:"Oliver",
    type:"Cat",
    age:"0.5 Years",
    energy:"High",
    maintenance:"Medium",
    monthlyCost:2300,
    walkTime:"35 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"Medium",
    desc:"Curious Creature",
    img:"https://images.unsplash.com/photo-1494256997604-768d1f608cac"
  },

  {
    name:"Chloe",
    type:"Cat",
    age:"2 Years",
    energy:"Low",
    maintenance:"Low",
    monthlyCost:1700,
    walkTime:"15 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"High",
    desc:"Might look like he doesnt care, but is always watching you..so be careful",
    img:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
  },

  {
    name:"Simba",
    type:"Cat",
    age:"0.5 Years",
    energy:"High",
    maintenance:"Medium",
    monthlyCost:2500,
    walkTime:"40 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"Medium",
    desc:"Affection Needer",
    img:"https://images.unsplash.com/photo-1533743983669-94fa5c4338ec"
  },

  {
    name:"Lucy",
    type:"Cat",
    age:"2 Years",
    energy:"Low",
    maintenance:"Low",
    monthlyCost:1600,
    walkTime:"15 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"High",
    desc:"I dont give a damn about you,kinda attitude",
    img:"https://images.unsplash.com/photo-1519052537078-e6302a4968d4"
  },

  {
    name:"Nala",
    type:"Cat",
    age:"3 Years",
    energy:"High",
    maintenance:"Medium",
    monthlyCost:2600,
    walkTime:"45 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"Medium",
    desc:"Playful Hunter",
    img:"https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fHww"
  },

  {
    name:"Shadow",
    type:"Cat",
    age:"2 Years",
    energy:"High",
    maintenance:"Medium",
    monthlyCost:2400,
    walkTime:"35 mins/day",
    idealHome:"Apartment",
    aloneTolerance:"Medium",
    desc:"The Foodie Fanatic",
    img:"https://images.unsplash.com/photo-1561948955-570b270e7c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww"
  }

];

const petsGrid = document.getElementById("petsGrid");

pets.forEach((pet) => {

  petsGrid.innerHTML += `

    <div class="pet-card">

      <img src="${pet.img}" alt="${pet.name}" />

      <div class="pet-info">

        <div class="pet-header">
          <h3>${pet.name}</h3>
          <span>${pet.type}</span>
        </div>

        <p><strong>Age:</strong> ${pet.age}</p>

        <p><strong>Energy:</strong> ${pet.energy}</p>

        <p>${pet.desc}</p>

      </div>

    </div>

  `;

});

const matchBtn = document.getElementById("matchBtn");

matchBtn.addEventListener("click", () => {

  document
    .getElementById("register")
    .scrollIntoView({
      behavior: "smooth"
    });

});

const form = document.getElementById("matchForm");
const resultBox = document.getElementById("resultBox");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const activity =
    document.getElementById("activityLevel").value;

  const petType =
    document.getElementById("petType").value;

  const workHours =
    document.getElementById("workHours").value;

  const experience =
  document.getElementById("experienceLevel").value;

const allergies =
  document.getElementById("allergyStatus").value;

const budget =
  document.getElementById("budget").value;

const kids =
  document.getElementById("kidsHome").value;

const dailyTime =
  document.getElementById("dailyTime").value;

const livingType =
  document.querySelector(
    'input[name="living"]:checked'
  ).value;

  // AI MATCHING SYSTEM

  let bestScore = 0;
  let matchedPet = pets[0];

  pets.forEach((pet) => {

    let score = 0;

    // LIVING TYPE MATCH

if (
  livingType === "Apartment" &&
  pet.idealHome.includes("Apartment")
) {
  score += 20;
}

if (
  livingType === "House" &&
  (
    pet.idealHome.includes("House") ||
    pet.idealHome.includes("Independent")
  )
) {
  score += 20;
}

// EXPERIENCE MATCH

if (
  experience === "Beginner" &&
  pet.maintenance === "Low"
) {
  score += 20;
}

if (
  experience === "Experienced" &&
  pet.maintenance === "High"
) {
  score += 20;
}

// ALLERGY CHECK

if (
  allergies === "Yes" &&
  pet.type === "Cat"
) {
  score -= 10;
}

// BUDGET MATCH

if (
  budget === "Below ₹2000" &&
  pet.monthlyCost <= 2000
) {
  score += 20;
}

if (
  budget === "₹2000 - ₹5000" &&
  pet.monthlyCost >= 2000 &&
  pet.monthlyCost <= 5000
) {
  score += 20;
}

if (
  budget === "₹5000+" &&
  pet.monthlyCost >= 5000
) {
  score += 20;
}

// DAILY TIME MATCH

if (
  dailyTime === "3+ hours" &&
  pet.energy.includes("High")
) {
  score += 20;
}

if (
  dailyTime === "Less than 1 hour" &&
  pet.energy.includes("Low")
) {
  score += 20;
}

// KIDS AT HOME

if (
  kids === "Yes" &&
  pet.type === "Dog"
) {
  score += 10;
}

    // PET TYPE MATCH

    if (petType === "No Preference") {
      score += 15;
    }

    else if (pet.type === petType) {
      score += 30;
    }

    // ACTIVITY MATCH

    if (
      activity === "High" &&
      pet.energy.includes("High")
    ) {
      score += 30;
    }

    else if (
      activity === "Medium" &&
      pet.energy.includes("Medium")
    ) {
      score += 30;
    }

    else if (
      activity === "Low" &&
      pet.energy.includes("Low")
    ) {
      score += 30;
    }

    // WORK HOURS MATCH

    if (
      workHours === "9+ hours" &&
      pet.type === "Cat"
    ) {
      score += 20;
    }

    if (
      (workHours === "0-3 hours" ||
      workHours === "3-6 hours") &&
      pet.type === "Dog"
    ) {
      score += 20;
    }

    // BEST MATCH

    if (score > bestScore) {
      bestScore = score;
      matchedPet = pet;
    }

  });

  // ADOPTION READINESS SCORE

  let readinessScore = 50;

  if (activity === "High") {
    readinessScore += 20;
  }

  if (activity === "Medium") {
    readinessScore += 10;
  }

  if (workHours === "0-3 hours") {
    readinessScore += 20;
  }

  else if (workHours === "3-6 hours") {
    readinessScore += 15;
  }

  else if (workHours === "6-9 hours") {
    readinessScore += 5;
  }

  else {
    readinessScore -= 10;
  }

  if (readinessScore > 100) {
    readinessScore = 100;
  }

  // DAILY CARE ESTIMATION

  let dailyCare;

  if (matchedPet.type === "Dog") {

    dailyCare = `
      🦴 Food Cost: ₹${matchedPet.monthlyCost}/month <br>
      🚶 Walk Time: ${matchedPet.walkTime} <br>
      🛁 Grooming: Weekly <br>
      🏥 Vet Visits: Every 6 months
    `;

  }

  else {

    dailyCare = `
      🐟 Food Cost: ₹${matchedPet.monthlyCost}/month <br>
      🧸 Play Time: ${matchedPet.walkTime} <br>
      🛁 Grooming: Twice a month <br>
      🏥 Vet Visits: Once a year
    `;

  }

  resultBox.style.display = "flex";

  resultBox.innerHTML = `

  <div class="result-image">
    <img src="${matchedPet.img}" alt="${matchedPet.name}">
  </div>

  <div class="result-content">

    <h3>Your Perfect Match is ${matchedPet.name} 🐾</h3>

    <p>${matchedPet.desc}</p>

    <br>

    <div class="score-card">
      ❤️ Compatibility Score
      <span>${bestScore}%</span>
    </div>

    <div class="score-card">
      🏡 Adoption Readiness
      <span>${readinessScore}%</span>
    </div>

    <br>

    <h4>📋 Daily Care Estimation</h4>

    <div class="care-box">
      ${dailyCare}
    </div>

    <br>

    <p><strong>Age:</strong> ${matchedPet.age}</p>

    <p><strong>Energy:</strong> ${matchedPet.energy}</p>

    <p><strong>Maintenance:</strong> ${matchedPet.maintenance}</p>

    <br>

    <p>
      📍 Available at: Adoptify Pet Care Center,
      Rajajinagar, Bangalore
    </p>

    <p>
      📞 Contact: +91 9876543210
    </p>

    <p>
      📧 Email: adoptify@gmail.com
    </p>

  </div>

  `;

});

// ================================
// ADOPTIFY OFFLINE AI CHATBOT
// ================================

const sendBtn = document.getElementById("sendBtn");

const userInput =
document.getElementById("userInput");

const chatMessages =
document.getElementById("chatMessages");



// ==========================================
// ULTRA SMART OFFLINE AI PET CHATBOT
// ==========================================

const aiReplies = {

  greeting: [

    "Hello 🐾 Welcome to Adoptify AI Assistant. I'm here to help you with pet adoption, training, grooming, vaccinations, food guidance, emotional support pets, and beginner pet care.",

    "Hi there 👋 Finding the perfect pet can be exciting and overwhelming at the same time. Tell me what kind of pet lifestyle you're looking for and I’ll guide you.",

    "Hey 🐶🐱 I can help you choose suitable pets based on your lifestyle, activity level, home environment, budget, and daily schedule.",

    "Welcome to Adoptify ❤️ Ask me anything related to pet care, adoption, food, health, training, or pet compatibility."
  ],

  apartment: [

    "Cats are usually excellent for apartment living because they are independent, quieter, and require less outdoor activity. Smaller or medium-energy dogs can also adapt well if they receive regular walks and stimulation.",

    "For apartment lifestyles, low-maintenance pets are usually the best option. Cats, calm dog breeds, and pets with medium energy levels tend to adjust comfortably to compact spaces.",

    "If you live in an apartment, it’s important to choose pets that do not require excessive running space. Daily interaction, toys, and walks become especially important in smaller homes."
  ],

  dog: [

    "Dogs are loyal, social, and emotionally supportive companions. They usually require regular exercise, consistent feeding schedules, training, affection, and mental stimulation.",

    "Before adopting a dog, make sure you have enough daily time for walks, interaction, grooming, and playtime. Dogs form strong emotional bonds and thrive when they receive attention.",

    "High-energy dogs are best suited for active individuals or families who can dedicate time to exercise and engagement. Lower-energy dogs may suit busy lifestyles better.",

    "Dogs can greatly improve emotional wellbeing and companionship. However, they require commitment, patience, and long-term responsibility."
  ],

  cat: [

    "Cats are independent yet affectionate companions. They are usually easier to maintain for people with busy schedules or apartment lifestyles.",

    "Cats enjoy quiet environments, consistent feeding routines, clean litter spaces, and interactive play sessions. They can be playful while still being relatively low maintenance.",

    "If you're a first-time pet owner, cats can be an excellent starting point because they generally require less outdoor activity than dogs.",

    "Cats often bond deeply with their owners, even though they may appear independent at times."
  ],

  grooming: [

    "Regular grooming keeps pets healthy, clean, and comfortable. Brushing removes loose fur and prevents tangles, especially in long-haired breeds.",

    "Dogs usually need occasional baths using pet-safe shampoos, while cats naturally groom themselves but still benefit from brushing.",

    "Pet grooming also includes nail trimming, ear cleaning, coat maintenance, and dental hygiene. Maintaining grooming routines helps prevent infections and skin issues.",

    "Introducing grooming gradually helps pets become more comfortable and less anxious during the process."
  ],

  food: [

    "A balanced diet is extremely important for maintaining your pet’s health, immunity, energy, and coat quality.",

    "Puppies and kittens require protein-rich nutrition for healthy growth and development. Adult pets require balanced portions depending on age, activity level, and health.",

    "Avoid feeding pets harmful human foods such as chocolate, grapes, onions, garlic, caffeine, or excessively spicy foods.",

    "Always provide fresh drinking water and maintain consistent feeding schedules for better digestion and routine."
  ],

  vaccination: [

    "Vaccinations are essential for protecting pets against dangerous diseases and infections. Puppies and kittens usually require multiple early vaccinations.",

    "Routine vaccinations help strengthen immunity and protect pets from illnesses like rabies, parvovirus, distemper, and feline infections.",

    "Regular veterinary checkups combined with vaccination schedules ensure long-term pet health and safety.",

    "Vaccinations not only protect your pet but also help prevent the spread of contagious diseases to other animals."
  ],

  training: [

    "Positive reinforcement is one of the most effective training methods for pets. Rewarding good behavior builds trust and confidence.",

    "Training works best when sessions are short, consistent, patient, and reward-based. Pets learn gradually through repetition and encouragement.",

    "Basic commands such as sit, stay, come, and leash training improve communication between pets and owners.",

    "Avoid punishment-based training methods because they can create fear and anxiety in pets."
  ],

  adoption: [

    "Adopting a pet is a lifelong emotional and financial commitment. Choosing a pet compatible with your lifestyle is extremely important.",

    "Successful pet adoption depends on factors like daily schedule, energy level, home environment, budget, allergies, and prior experience with pets.",

    "Adoption gives animals a second chance at life and creates meaningful emotional bonds between humans and pets.",

    "Responsible adoption involves preparing your home, understanding pet needs, and committing to proper long-term care."
  ],

  emotional: [

    "Pets can significantly improve emotional wellbeing and reduce stress, anxiety, and loneliness through companionship and affection.",

    "Emotional support pets often provide comfort during difficult times and help improve mental health through routine and companionship.",

    "Many people develop strong emotional connections with pets because animals provide unconditional affection and loyalty.",

    "Spending time with pets can improve mood, reduce stress hormones, and create a sense of emotional comfort."
  ],

  allergies: [

    "If someone in your family has allergies, low-shedding pets or certain cat and dog breeds may be more suitable.",

    "Regular grooming, vacuuming, and maintaining clean living spaces can help reduce pet-related allergens indoors.",

    "Before adoption, it’s a good idea to spend time around the type of pet you are considering to identify possible allergic reactions."
  ],

  kids: [

    "Families with children should consider friendly, patient, and social pets that are comfortable around kids.",

    "Teaching children how to interact gently and respectfully with pets helps build safe and positive relationships.",

    "Pets can help children learn empathy, responsibility, and emotional bonding."
  ],

  beginner: [

    "First-time pet owners often benefit from choosing pets with lower maintenance requirements and calmer temperaments.",

    "Cats and medium-energy dogs are usually good options for beginners because they are easier to manage and adapt well to routines.",

    "Before adopting, research feeding schedules, healthcare costs, grooming requirements, and exercise needs."
  ],

  budget: [

    "Pet ownership includes recurring expenses such as food, vaccinations, grooming, toys, healthcare, and emergency medical care.",

    "Before adopting a pet, make sure your monthly budget can comfortably support long-term care and wellbeing.",

    "Cats are often slightly less expensive to maintain compared to highly active dogs, though costs vary depending on breed and health."
  ],

  health: [

    "Routine veterinary checkups help identify health issues early and improve long-term pet wellbeing.",

    "Signs such as sudden loss of appetite, unusual behavior, excessive sleeping, or low energy should not be ignored.",

    "Exercise, balanced nutrition, hydration, and emotional care all contribute to healthy pets."
  ],

  lonely: [

    "Pets can be wonderful companions for people who feel lonely because they provide emotional connection and daily interaction.",

    "Dogs especially enjoy companionship and often create strong emotional bonds with their owners.",

    "Many people find that caring for a pet adds routine, comfort, and positivity to daily life."
  ],

  default: [

    "That’s an interesting question 🐾 I specialize in pet adoption, pet care, food guidance, grooming, training, vaccinations, emotional support pets, and beginner pet advice.",

    "I may not know everything yet, but I’d be happy to help with pet-related questions and adoption guidance ❤️",

    "Please ask me something related to pets, adoption, pet care, food, grooming, health, or training."
  ]

};

// RANDOM RESPONSE

function getRandom(arr){

  return arr[
    Math.floor(Math.random() * arr.length)
  ];

}

// SMART RESPONSE SYSTEM

function generateReply(message){

  const msg = message.toLowerCase();

  if(msg.includes("hello") ||
     msg.includes("hi") ||
     msg.includes("hey")){

    return getRandom(aiReplies.greeting);

  }

  if(msg.includes("apartment") ||
     msg.includes("flat")){

    return getRandom(aiReplies.apartment);

  }

  if(msg.includes("dog") ||
     msg.includes("puppy")){

    return getRandom(aiReplies.dog);

  }

  if(msg.includes("cat") ||
     msg.includes("kitten")){

    return getRandom(aiReplies.cat);

  }

  if(msg.includes("groom") ||
     msg.includes("bath") ||
     msg.includes("nail")){

    return getRandom(aiReplies.grooming);

  }

  if(msg.includes("food") ||
     msg.includes("eat") ||
     msg.includes("diet")){

    return getRandom(aiReplies.food);

  }

  if(msg.includes("vaccine") ||
     msg.includes("vaccination") ||
     msg.includes("vet")){

    return getRandom(aiReplies.vaccination);

  }

  if(msg.includes("train") ||
     msg.includes("behavior")){

    return getRandom(aiReplies.training);

  }

  if(msg.includes("adopt") ||
     msg.includes("adoption")){

    return getRandom(aiReplies.adoption);

  }

  if(msg.includes("stress") ||
     msg.includes("sad") ||
     msg.includes("emotional") ||
     msg.includes("anxiety")){

    return getRandom(aiReplies.emotional);

  }

  if(msg.includes("allergy") ||
     msg.includes("allergies")){

    return getRandom(aiReplies.allergies);

  }

  if(msg.includes("kid") ||
     msg.includes("child") ||
     msg.includes("children")){

    return getRandom(aiReplies.kids);

  }

  if(msg.includes("beginner") ||
     msg.includes("first pet")){

    return getRandom(aiReplies.beginner);

  }

  if(msg.includes("budget") ||
     msg.includes("cost") ||
     msg.includes("money")){

    return getRandom(aiReplies.budget);

  }

  if(msg.includes("health") ||
     msg.includes("sick")){

    return getRandom(aiReplies.health);

  }

  if(msg.includes("lonely") ||
     msg.includes("alone")){

    return getRandom(aiReplies.lonely);

  }

  return getRandom(aiReplies.default);

}

// TYPING ANIMATION

function showTypingAnimation(){

  const typingDiv = document.createElement("div");

  typingDiv.className =
  "message bot-message typing";

  typingDiv.innerHTML =
  "Typing<span>.</span><span>.</span><span>.</span>";

  chatMessages.appendChild(typingDiv);

  chatMessages.scrollTop =
  chatMessages.scrollHeight;

  return typingDiv;

}

// SEND MESSAGE

sendBtn.addEventListener("click", () => {

  const userMessage =
  userInput.value.trim();

  if (!userMessage) return;

  // USER MESSAGE

  chatMessages.innerHTML += `

    <div class="message user-message">
      ${userMessage}
    </div>

  `;

  userInput.value = "";

  // SHOW TYPING

  const typingAnimation =
  showTypingAnimation();

  // AI THINKING DELAY

  setTimeout(() => {

    typingAnimation.remove();

    const botReply =
    generateReply(userMessage);

    // BOT MESSAGE

    chatMessages.innerHTML += `

      <div class="message bot-message">
        ${botReply}
      </div>

    `;

    chatMessages.scrollTop =
    chatMessages.scrollHeight;

  }, 1500);

});

const suggestionBtns =
document.querySelectorAll(".suggestion-btn");

suggestionBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    userInput.value = btn.innerText;

  });

});
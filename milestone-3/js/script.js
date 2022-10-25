console.log('"Meet our team" loaded');

const milestoneList = document.querySelector("ul");
const allMembersList = document.getElementById("members-container");


const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg",
    adjectives: [
      "Diesmal.",
      "Di.",
      "Yeux."
    ]
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg",
    adjectives: [
      "Helyem.",
      "Diam.",
      "Yeux."
    ]
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "img/walter-gordon-office-manager.jpg",
    adjectives: [
      "Diesmal.",
      "Di.",
      "Accio."
    ]
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg",
    adjectives: [
      "Ist.",
      "Schmilzt.",
      "Soon."
    ]
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "img/scott-estrada-developer.jpg",
    adjectives: [
      "Prestasse.",
      "Cielo.",
      "Anyath."
    ]
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "img/barbara-ramos-graphic-designer.jpg",
    adjectives: [
      "Diesmal.",
      "Beato.",
      "Sua."
    ]
  }
  
];

printCard();

function printCard() {
  for(let teamMember of teamMembers) {
    console.log("Member: " + teamMember.name, "Role: " + teamMember.role, "url-image: " + teamMember.image);
    
    let adjectivesList = printList(teamMember);
  
    allMembersList.innerHTML += `
    <div class="col-4 mb-5">
  
      <div id="adjective-contianer" class="card mm-adjective-contianer mm-card" style="width: 18rem;">
        <div class="img-custom">
          <img src="${teamMember.image}" class="card-img-top" alt="${teamMember.name}">
        </div>
        <div class="card-body">
          <div class="card">
            <ul id="adjectives" class="list-group list-group-flush w-75 mm-list">
            ${adjectivesList}
            </ul>
          </div>
          <h5 class="card-title text-center">${teamMember.name}</h5>
          <p class="card-subtitle text-muted text-center">${teamMember.role}</p>
        </div>
      </div>
  
    </div>
    `;
  }
}

function printList(inputArray) {
  let listItem = "";
  for(let adjective of inputArray.adjectives) {
    listItem += `
    <li class="list-group-item">${adjective}</li>
    `;
  }
  return listItem;
}

console.log(customCard);
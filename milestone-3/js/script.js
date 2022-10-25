console.log('"Meet our team" loaded');

const milestoneList = document.querySelector("ul");
const allMembersList = document.getElementById("members-container");

const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "img/walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "img/scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "img/barbara-ramos-graphic-designer.jpg"
  }
  
];

for(let teamMember of teamMembers) {
  console.log("Member: " + teamMember.name, "Role: " + teamMember.role, "url-image: " + teamMember.image);

  allMembersList.innerHTML += `
  <div class="col-4 mb-5">

    <div class="card" style="width: 18rem;">
      <img src="${teamMember.image}" class="card-img-top" alt="${teamMember.name}">
      <div class="card-body">
        <h5 class="card-title text-center">${teamMember.name}</h5>
        <p class="card-subtitle text-muted text-center">${teamMember.role}</p>
      </div>
    </div>

  </div>
  `;
}
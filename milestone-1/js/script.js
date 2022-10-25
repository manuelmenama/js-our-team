console.log('"Meet our team" loaded');

const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg"
  }
  
];

for(let teamMember of teamMembers) {
  console.log("Member: " + teamMember.name, "Role: " + teamMember.role, "url-image: " + teamMember.image);
}
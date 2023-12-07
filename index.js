// data
const incubatorInfo = {
  title: "it-incubator",
  graduatesCount: 2000,
  areYouChampion: true,
  technologies: [{ title: "ReactJs" }, { title: "Back" }, { title: "DevOps" }],
};

// render
let pageTitleElement = document.createElement("h1");
pageTitleElement.innerText = incubatorInfo.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement("input");
graduatesCountElement.value = incubatorInfo.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement("input");
areYouChampionElement.type = "checkbox";
areYouChampionElement.checked = incubatorInfo.areYouChampion;
document.body.append(areYouChampionElement);

let techSelectElement = document.createElement("select");

let techSelect0Element = document.createElement("option");
techSelect0Element.append(incubatorInfo.technologies[0].title);

let techSelect1Element = document.createElement("option");
techSelect1Element.append(incubatorInfo.technologies[1].title);

let techSelect2Element = document.createElement("option");
techSelect2Element.append(incubatorInfo.technologies[2].title);

techSelectElement.append(
  techSelect0Element,
  techSelect1Element,
  techSelect2Element
);

document.body.append(techSelectElement);

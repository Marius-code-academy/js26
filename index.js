// Experience section

async function getExperience() {
  const res = await fetch('https://zany-skitter-caper.glitch.me/experiences');

  const resJSON = await res.json();

  generateExperience(resJSON);
}

function generateExperience(data) {
  const experienceTable = document.getElementById('experience-table');

  data.forEach((experience) => {
    const tr = document.createElement('tr');
    const tdCompany = document.createElement('td');
    const companyText = document.createElement('span');
    const workTimeElement = document.createElement('b');
    const brTag = document.createElement('br');

    workTimeElement.textContent = `${experience.startYear} - ${experience.finishYear}`;
    companyText.textContent = experience.companyName;

    companyText.classList.add('company-text');

    tdCompany.appendChild(workTimeElement);
    tdCompany.appendChild(brTag);
    tdCompany.appendChild(companyText);

    const tdPosition = document.createElement('td');
    const positionDescription = document.createElement('p');
    const positionName = document.createElement('b');
    const brTag2 = document.createElement('br');

    positionName.textContent = experience.position;
    positionDescription.textContent = experience.description;

    positionDescription.classList.add('padding-left');

    positionDescription.prepend(brTag2);
    positionDescription.prepend(positionName);

    tdPosition.appendChild(positionDescription);

    tr.appendChild(tdCompany);
    tr.appendChild(tdPosition);

    experienceTable.appendChild(tr);
  });
}

async function getSkills() {
  const res = await fetch('https://zany-skitter-caper.glitch.me/skills');
  const resJSON = await res.json();
  generateSkills(resJSON);
}

function generateSkills(skills) {
  const container = document.getElementById('coding-skills-container');

  skills.forEach((skill) => {
    const individualSkillContainer = document.createElement('div');
    individualSkillContainer.classList.add('individual-skill-container');

    const skillTextContainer = document.createElement('div');
    skillTextContainer.classList.add('skill-text-container');

    const skillText = document.createElement('span');
    skillText.textContent = skill.title;

    const skillPercentage = document.createElement('span');
    skillPercentage.textContent = skill.level + '%';

    skillTextContainer.appendChild(skillText);
    skillTextContainer.appendChild(skillPercentage);

    const input = document.createElement('input');
    input.type = 'range';
    input.value = skill.level;
    input.disabled = true;

    individualSkillContainer.appendChild(skillTextContainer);
    individualSkillContainer.appendChild(input);

    container.appendChild(individualSkillContainer);
  });
}

getExperience();
getSkills();

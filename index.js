let skill = document.getElementById("box-one");
let skill2 = document.getElementById("box-two");
let count = 0;
function render() {
    let skillList = JSON.parse(localStorage.getItem("skill_list")) || [];
    renderSkillFirstLine(skillList);
    renderSkillSecondLine(skillList);
}
render()
function renderSkillFirstLine(skills) {
    let stringHTML = "";
    count = 0;
    if (skills.length > 0) {
        for (let i in skills) {
            if (count < 5) {
                stringHTML += `
                <div class="third-box-content">
                    <img src="${skills[i].skillImg}" alt="" class="icon-third-box">
                    <div class="third-box-text">
                        <p class="third-box-text-head">
                            ${skills[i].skillName}
                        </p>
                        <p class="third-box-text-head-2">${skills[i].skillYears} Years Experience</p>
                    </div>
                </div> 
    
                `;
                count++;
            }
        }
    }
    skill.innerHTML = stringHTML;
}
function renderSkillSecondLine(skills) {
    console.log(count);
    let stringHTML = "";
    if (skills.length > 5) {
        for (let i = 5; i < skills.length; i++) {
            if (count >= 5) {
                stringHTML += `
                <div class="third-box-content">
                    <img src="${skills[i].skillImg}" alt="" class="icon-third-box">
                    <div class="third-box-text">
                        <p class="third-box-text-head">
                        ${skills[i].skillName}
                        </p>
                        <p class="third-box-text-head-2">${skills[i].skillYears} Months Experience</p>
                    </div>
                </div>
    
                `;
                count++;
            }
        }
    }
    skill2.innerHTML = stringHTML;
}
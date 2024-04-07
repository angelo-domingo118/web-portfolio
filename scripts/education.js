const eduBtns = document.querySelectorAll(".edu-button");
const explorinBtn = document.getElementById("explorin-btn");
const shivalikBtn = document.getElementById("shivalik-btn");
const sunriseBtn = document.getElementById("sunrise-btn");
const instituteImg = document.getElementById("institute-image");
let institutePara = document.getElementById("edu-para");

const eduParas = ["<br>Education : Web Technology<br><br>Experience: As a 2nd year BSIT student, I have been actively developing my skills in web technologies. Through coursework and personal projects, I have gained hands-on experience in HTML, CSS, JavaScript, and various web development frameworks. I am constantly learning and expanding my knowledge in this field, with a focus on creating responsive and user-friendly web applications.", 
                  "<br>Education: ICT student at Baguio City National High School.<br><br>Experience: As an ICT student, I have been actively engaged in hands-on learning and practical applications of technology. Through classroom lessons and extracurricular projects, I have developed skills in areas such as computer programming, web development, networking, and multimedia design. I am continuously expanding my knowledge and experience in the field of information and communications technology, preparing myself for future academic pursuits or a career in this rapidly evolving industry.",
                  "<br>Education : Data Science<br><br>Experience: I have been actively learning data science through online courses and platforms like DataCamp. This experience has allowed me to develop skills in areas such as programming, statistical analysis, machine learning, and data visualization. Through hands-on projects and interactive lessons, I am gaining practical knowledge in data science techniques and their applications across various domains. This self-paced learning journey has been enriching and has prepared me for further academic pursuits or potential careers in the field of data science." ];

let currBtn = 0;
let theme = 0;

function handleThemeSwitch() {
    if(theme == 0) {
        theme = 1;
    } else {
        theme = 0;
    }

    if(currBtn == 0) {
        explorinClick();
    } else if(currBtn == 1) {
        shivalikClick();
    } else {
        sunriseClick();
    }
}

function resetEduButtons(select) {
    if(theme == 0) {
        if(select != 0) document.getElementById("explorin-btn").style.backgroundColor = "#3c3c3c";
        if(select != 1) document.getElementById("shivalik-btn").style.backgroundColor = "#3c3c3c";
        if(select != 2) document.getElementById("sunrise-btn").style.backgroundColor = "#3c3c3c";
    } else {
        if(select != 0) document.getElementById("explorin-btn").style.backgroundColor = "#a5ffa6c1";
        if(select != 1) document.getElementById("shivalik-btn").style.backgroundColor = "#a5ffa6c1";
        if(select != 2) document.getElementById("sunrise-btn").style.backgroundColor = "#a5ffa6c1";
    }
}

function explorinClick() {
    currBtn = 0;
    resetEduButtons(0);
    if(theme == 0) {
        document.getElementById("explorin-btn").style.backgroundColor = "#c4c4c480";
        document.querySelector("#edu-para").innerHTML = eduParas[0];
    } else {
        document.getElementById("explorin-btn").style.backgroundColor = "#14ee6fd9";
        document.querySelector("#edu-para").innerHTML = eduParas[0];
    }
}

function shivalikClick() {
    currBtn = 1;
    resetEduButtons(1);
    if(theme == 0) {
        document.getElementById("shivalik-btn").style.backgroundColor = "#c4c4c480";
        document.querySelector("#edu-para").innerHTML = eduParas[1];
    } else {
        document.getElementById("shivalik-btn").style.backgroundColor = "#14ee6fd9";
        document.querySelector("#edu-para").innerHTML = eduParas[1];
    }
}

function sunriseClick() {
    currBtn = 2;
    resetEduButtons(2);
    if(theme == 0) {
        document.getElementById("sunrise-btn").style.backgroundColor = "#c4c4c480";
        document.querySelector("#edu-para").innerHTML = eduParas[2];
    } else {
        document.getElementById("sunrise-btn").style.backgroundColor = "#14ee6fd9";
        document.querySelector("#edu-para").innerHTML = eduParas[2];
    }
}

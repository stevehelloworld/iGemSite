/*==================================================
  TEAM DATA
==================================================*/

const members = {

    sun: {

        name: "Ohanna Liu",
        role: "Team Leader",

        image: "https://static.igem.wiki/teams/6423/wiki/static/assests/images/members/team-photo.avif",

        intro:
            "Write a short introduction for Member 1 here.",

        skills: [
            "Leadership",
            "Project Management",
            "Presentation"
        ]

    },

    mercury: {

        name: "Sunny Huang",
        role: "Wet Lab",

        image: "https://static.igem.wiki/teams/6423/wiki/static/assests/images/members/team-photo.avif",

        intro:
            "Write a short introduction for Member 2 here.",

        skills: [
            "PCR",
            "Molecular Biology",
            "Experiment"
        ]

    },

    venus: {

        name: "Chelsea Chang",
        role: "Dry Lab",

        image: "https://static.igem.wiki/teams/6423/wiki/static/assests/images/members/team-photo.avif",

        intro:
            "Write a short introduction for Member 3 here.",

        skills: [
            "Cloning",
            "DNA",
            "Lab"
        ]

    },

    earth: {

        name: "Francis Lin",
        role: "Dry Lab",

        image: "https://static.igem.wiki/teams/6423/wiki/static/assests/images/members/team-photo.avif",

        intro:
            "Write a short introduction for Member 4 here.",

        skills: [
            "Python",
            "Modeling",
            "Machine Learning"
        ]

    },

    mars: {

        name: "Ray Shang",
        role: "Dry Lab",

        image: "https://static.igem.wiki/teams/6423/wiki/static/assests/images/members/team-photo.avif",

        intro:
            "Write a short introduction for Member 5 here.",

        skills: [
            "Python",
            "Simulation",
            "Data Analysis"
        ]

    },

    jupiter: {

        name: "Lucy Wang",
        role: "Team Leader",

        image: "https://static.igem.wiki/teams/6423/wiki/static/assests/images/members/team-photo.avif",

        intro:
            "Write a short introduction for Member 6 here.",

        skills: [
            "Interview",
            "Communication",
            "Research"
        ]

    },

    saturn: {

        name: "Ian Huang",
        role: "Dry Lab",

        image: "https://static.igem.wiki/teams/6423/wiki/static/assests/images/members/team-photo.avif",

        intro:
            "Write a short introduction for Member 7 here.",

        skills: [
            "Survey",
            "Presentation",
            "Education"
        ]

    },

    uranus: {

        name: "Eugenia Liu",
        role: "Wet Lab",

        image: "https://static.igem.wiki/teams/6423/wiki/static/assests/images/members/team-photo.avif",

        intro:
            "Write a short introduction for Member 8 here.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    },

    neptune: {

        name: "Nicholas Lu",
        role: "Wet Lab",

        image: "https://static.igem.wiki/teams/6423/wiki/static/assests/images/members/team-photo.avif  ",

        intro:
            "Write a short introduction for Member 9 here.",

        skills: [
            "UI Design",
            "Animation",
            "Illustration"
        ]

    }

};


/*==================================================
  DOM
==================================================*/

const planets =
    document.querySelectorAll(".planet");

/*=========================================
ELLIPSE ORBITS
=========================================*/

const orbitData = [
	
    {
	selector: ".mercury",
	orbit: ".mercury-orbit",
	speed:10,
	offset: 22
    },

    {
        selector: ".venus",
        orbit: ".venus-orbit",
        speed:16,
        offset: 26
    },

    {
        selector: ".earth",
        orbit: ".earth-orbit",
        speed:24,
	offset: 26
    },

    {
        selector: ".mars",
        orbit: ".mars-orbit",
        speed:32,
        offset: 26
    },

    {
        selector: ".jupiter",
        orbit: ".jupiter-orbit",
        speed:55,
        offset: 44
    },

    {
        selector: ".saturn",
        orbit: ".saturn-orbit",
        speed:80,
        offset: 44
    },

    {
        selector: ".uranus",
        orbit: ".uranus-orbit",
        speed:110,
        offset: 44
    },

    {
        selector: ".neptune",
        orbit: ".neptune-orbit",
        speed:150,
        offset: 36
    }
];

let lastTime = performance.now();

const angles = new Map();

orbitData.forEach((planet,index)=>{

    angles.set(
        planet.selector,
        index*Math.PI/4
    );

});

function animateOrbits(time){

    const delta = (time - lastTime) / 1000;
    lastTime = time;

    orbitData.forEach(item => {

        const planet = document.querySelector(item.selector);
        const orbit = document.querySelector(item.orbit);

        if (!planet || !orbit) return;

        let angle = angles.get(item.selector);

        angle += delta * (2 * Math.PI / item.speed);

        angles.set(item.selector, angle);

        const a = orbit.clientWidth / 2;
        const b = orbit.clientHeight / 2;


        const offset = item.offset;

        const rx = a - planet.offsetWidth / 2 + offset;
        const ry = b - planet.offsetHeight / 2 + offset;

        const x = rx * Math.cos(angle);
        const y = ry * Math.sin(angle);

        planet.style.left = `${a + x}px`;
        planet.style.top = `${b + y}px`;
	planet.style.zIndex = 300;

    });

    requestAnimationFrame(animateOrbits);

}

requestAnimationFrame(
    animateOrbits
);

const solarSystem =
    document.querySelector(".solar-system");

const memberImage =
    document.getElementById("member-image");

const memberName =
    document.getElementById("member-name");

const memberRole =
    document.getElementById("member-role");

const memberIntro =
    document.getElementById("member-intro");

const memberSkills =
    document.getElementById("member-skills");

const memberSection =
    document.querySelector(".member-section");

/*==================================================
  INITIALIZATION
==================================================*/
/*
window.addEventListener("DOMContentLoaded", () => {

    loadMember("sun");

});
*/

/*==================================================
  LOAD MEMBER
==================================================*/

function loadMember(memberKey) {

    memberSection.classList.add("show");

    const member = members[memberKey];

    if (!member) return;

    /* Fade Out */

    memberImage.style.opacity = "0";
    memberName.style.opacity = "0";
    memberRole.style.opacity = "0";
    memberIntro.style.opacity = "0";
    memberSkills.style.opacity = "0";

    setTimeout(() => {

        /* Update Content */

        memberImage.src = member.image;

        memberImage.alt = member.name;

        memberName.textContent = member.name;

        memberRole.textContent = member.role;

        memberIntro.textContent = member.intro;

        /* Skills */

        memberSkills.innerHTML = "";

        member.skills.forEach((skill, index) => {

            const tag = document.createElement("span");

            tag.textContent = skill;

            tag.style.opacity = "0";

            tag.style.transform = "translateY(12px)";

            memberSkills.appendChild(tag);

            setTimeout(() => {

                tag.style.transition =
                    "all .4s ease";

                tag.style.opacity = "1";

                tag.style.transform =
                    "translateY(0)";

            }, index * 100);

        });

        /* Fade In */

        memberImage.style.opacity = "1";

        memberName.style.opacity = "1";

        memberRole.style.opacity = "1";

        memberIntro.style.opacity = "1";

        memberSkills.style.opacity = "1";

    }, 250);

}


function hideMember(){

    memberSection.classList.remove("show");

    setTimeout(()=>{

        memberImage.src = "";
        memberImage.alt = "";

        memberName.textContent = "";
        memberRole.textContent = "";
        memberIntro.textContent = "";
        memberSkills.innerHTML = "";

    },450);

}
/*==================================================
  PLANET CLICK
==================================================*/

planets.forEach((planet) => {

    planet.addEventListener("click", (e) => {
	/*
	if (planet.classList.contains("sun")) {
   	    const rect = planet.getBoundingClientRect();
	    const dx = e.clientX - (rect.left + rect.width / );
	    const dy = e.clientY - (rect.top + rect.height / 2);
	    const radius = 15;
	    if (Math.hypot(dx, dy) > radius) {
	        e.stopPropagation();
	        planet.style.pointerEvents = "none";
    	        const target = document.elementFromPoint(
                    e.clientX,
                    e.clientY
                );
                planet.style.pointerEvents = "auto";
                if (target && target !== planet) {
                    target.click();
                }   
                return;
            }
	}
	*/


	if (planet.classList.contains("active")) {
	    planet.classList.remove("active");
	    planet.classList.remove("planet-focus");
	    currentPlanet = null;
	    solarSystem.classList.remove("has-active");
	    hideMember();
	    return;
	}

	const key = planet.dataset.member;

        planets.forEach((p) => {
	        p.classList.remove("active")
	        p.classList.remove("planet-focus");
        });

        planet.classList.add("active");

        solarSystem.classList.add("has-active");

        activatePlanet(planet);

        loadMember(key);
  
    });

});

/*==================================================
  ACTIVE PLANET ANIMATION
==================================================*/

let currentPlanet = null;

function activatePlanet(planet){

    /* Restore previous */

    if(currentPlanet){

        currentPlanet.classList.remove("planet-focus");

    }

    currentPlanet = planet;

    planet.classList.add("planet-focus");

}



/*==================================================
  DYNAMIC STAR FIELD
==================================================*/

function createStars(number = 220){

    const container = document.querySelector(".stars");

    if(!container) return;

    container.innerHTML = "";

    for(let i = 0; i < number; i++){

        const star = document.createElement("span");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.opacity = Math.random() * 0.8 + 0.2;

        star.style.animationDuration =
            `${Math.random() * 4 + 3}s`;

        star.style.animationDelay =
            `${Math.random() * 5}s`;

        container.appendChild(star);

    }

}


/*==================================================
  STAR PARALLAX
==================================================*/

function starParallax(event){

    const stars = document.querySelector(".stars");

    if(!stars) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 18;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 18;

    stars.style.transform =
        `translate(${x}px, ${y}px)`;

}


/*==================================================
  SHOOTING STAR
==================================================*/

function randomMeteor(){

    const hero =
        document.querySelector(".space-background");

    if(!hero) return;

    const meteor =
        document.createElement("div");

    meteor.className = "shooting-star";

    meteor.style.top =
        Math.random() * 50 + "%";

    meteor.style.left = "-250px";

    meteor.style.transform =
        `rotate(${-25 + Math.random() * 12}deg)`;

    hero.appendChild(meteor);

    setTimeout(()=>{

        meteor.remove();

    },2500);

}


/*==================================================
  START
==================================================*/

let meteorTimerStarted = false;

function initTeamPage(){

    if(window.__teamPageInitialized) return;

    window.__teamPageInitialized = true;

    createStars();

    if(!meteorTimerStarted){

        setInterval(randomMeteor,7000);
        meteorTimerStarted = true;

    }

    const firstPlanet =
        document.querySelector(".sun");

    if(firstPlanet){

        firstPlanet.classList.add("active");

        if(solarSystem){
            solarSystem.classList.add("has-active");
        }

        activatePlanet(firstPlanet);

        loadMember("sun");

    }

}

if(document.readyState === "loading"){

    window.addEventListener("DOMContentLoaded", initTeamPage);

}else{

    initTeamPage();

}

document.addEventListener(

    "mousemove",

    starParallax

);

/*==================================================
  MOUSE PARALLAX
==================================================*/

const hero =
    document.querySelector(".team-hero");

const title =
    document.querySelector(".hero-title");

/* 保留標題的視差，不讓太陽系移動 */

hero.addEventListener("mousemove",(e)=>{

    const x =
        (e.clientX / window.innerWidth - 0.5);

    const y =
        (e.clientY / window.innerHeight - 0.5);

    title.style.translate =
        `translate(${x * 20}px, ${y * 15}px)`;

});


hero.addEventListener("mouseleave",()=>{

    title.style.translate = "";

});


/*==================================================
  SCROLL REVEAL
==================================================*/

const revealItems =
    document.querySelectorAll(".member-card");

const observer =
    new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(

                "member-show"

            );

        }

    });

},

{

    threshold:.25

}

);

revealItems.forEach(item=>{

    item.classList.add("member-hidden");

    observer.observe(item);

});


/*==================================================
  IMAGE PRELOAD
==================================================*/

Object.values(members).forEach(member=>{

    const img=new Image();

    img.src=member.image;

});


/*==================================================
  RESIZE
==================================================*/

window.addEventListener("resize",()=>{

    createStars();

});


/*==================================================
  PERFORMANCE
==================================================*/

let ticking=false;

document.addEventListener(

"mousemove",

(e)=>{

    if(!ticking){

        window.requestAnimationFrame(()=>{

            starParallax(e);

            ticking=false;

        });

        ticking=true;

    }

});

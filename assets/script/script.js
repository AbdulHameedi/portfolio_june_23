// typed js animation
// animating texts
let typed = new Typed(".auto-type" , {
    strings: ["" , "Software Developer", "Team Lead" , "Debugger"],
    typeSpeed: 90,
    backSpeed: 70,
    loop:true
});

let hamburger = document.querySelector(".hamburger")
let cancelSidebar = document.querySelector(".cancel-sidebar")
let sidebar = document.querySelector(".sidebar")
let overlay = document.querySelector(".overlay")
let testimony = document.querySelector(".testimony")
let names = document.querySelector(".name")
let job = document.querySelector(".job")
let grade = document.querySelector(".grade")
let project = document.querySelector(".work")
let speech = document.querySelector(".speech")
let image = document.querySelector(".img-for-testimonial")
let forward = document.querySelector(".forward")
let backward = document.querySelector(".backward")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let education = document.querySelector(".education")
let profession = document.querySelector(".profession")
let experience = document.querySelector(".experience")
let interview = document.querySelector(".interview")
let current = 0
let testimonials = [
    {
        "id": 0,
        "name": "Abdulrahman Luqman",
        "job": "Software Developer",
        "grade": "DERVAC LTD",
        "speech": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, similique assumenda quis eligendi, aliquam optio voluptate at animi facere incidunt tempore minima ipsa vero. Nemo consequuntur maxime nihil beatae rem?",
        "project": "Team Collaboration - Software",
        "image": "/assets/img/luqman.png"
    },
    {
        "id": 1,
        "name": "Anjorin Muhsin",
        "job": "Chief Technology Officer",
        "grade": "DERVAC LTD",
        "speech": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, similique assumenda quis eligendi, aliquam optio voluptate at animi facere incidunt tempore minima ipsa vero. Nemo consequuntur maxime nihil beatae rem?",
        "project": "Top notch Solutions - Client",
        "image": "/assets/img/anjorin.png"
    },
    {
        "id": 2,
        "name": "Abdulqoyum Aliy",
        "job": "Software Developer",
        "grade": "DERVAC LTD",
        "speech": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, similique assumenda quis eligendi, aliquam optio voluptate at animi facere incidunt tempore minima ipsa vero. Nemo consequuntur maxime nihil beatae rem?",
        "project": "Team Collaboration - Software",
        "image": "/assets/img/aliy.png"
    },
]   


// show sidebar
function collapse(){
    sidebar.classList.add('slide')
    overlay.classList.add('show-overlay')
}
hamburger.addEventListener("click" , collapse)

// hide sidebar
function cancel(){
    sidebar.classList.remove('slide')
    overlay.classList.remove('show-overlay')
}
cancelSidebar.addEventListener("click" , cancel)

// clicking overlay
overlay.addEventListener("click" , cancel)


// for testimonials

// forward
forward.addEventListener("click" , incCurrent)

function incCurrent(){
    for(i in testimonials){
        if(testimonials[i] === testimonials[current]){
            names.innerHTML = testimonials[i].name
            speech.innerHTML = testimonials[i].speech
            job.innerHTML = testimonials[i].job
            project.innerHTML = testimonials[i].project
            image.setAttribute('src' , `${testimonials[i].image}`)
            grade.innerHTML = testimonials[i].grade
        }
       
        if(current == 0){
            one.style.backgroundColor = 'red'
            console.log(current)
        }else if(current == 1){
            two.style.backgroundColor = 'red'
            one.style.backgroundColor = 'gray'
        }else if(current == 2){
            two.style.backgroundColor = 'gray'
            three.style.backgroundColor = 'red'
        }
    }

    if(current <= testimonials.length-1){
        current = current+1
    }
}

// backward
backward.addEventListener("click" , decCurrent)

function decCurrent(){
    for(i in testimonials){
      
        if(testimonials[i] === testimonials[current]){
            names.innerHTML = testimonials[i].name
            speech.innerHTML = testimonials[i].speech
            job.innerHTML = testimonials[i].job
            project.innerHTML = testimonials[i].project
            image.setAttribute('src' , `${testimonials[i].image}`)
            grade.innerHTML = testimonials[i].grade
        }
        if(current == 2){
            two.style.backgroundColor = 'red'
            three.style.backgroundColor = 'gray'
        }else if(current == 1){
            one.style.backgroundColor = 'red'
            two.style.backgroundColor = 'gray'
        }
      
     
    }
    if(current >= 1){
        current = current-1
        console.log(current)
    }    
}


// for resume
profession.onclick = function(){
    profession.classList.add('active-resume')
    education.classList.remove('active-resume')
    interview.classList.remove('active-resume')
    experience.classList.remove('active-resume')
}

education.onclick = function(){
    education.classList.add('active-resume')
    profession.classList.remove('active-resume')
    interview.classList.remove('active-resume')
    experience.classList.remove('active-resume')
}

experience.onclick = function(){
    experience.classList.add('active-resume')
    education.classList.remove('active-resume')
    profession.classList.remove('active-resume')
    interview.classList.remove('active-resume')
}

interview.onclick = function(){
    interview.classList.add('active-resume')
    education.classList.remove('active-resume')
    profession.classList.remove('active-resume')
    experience.classList.remove('active-resume')
}
const projects = [
    {
        title:'Frontend-Pack',
        badges:[
            'js', 'html', 'css'
        ],
        info:'frontend-pack is a tool that allows you to generate npm code with just a click.',
        liveUrl:'https://frontend-pack.vercel.app/',
        githubUrl:'https://github.com/omerozceylan/frontend-pack'
    },
    {
        title:'Calculator',
        badges:[
            'js', 'html', 'css'
        ],
        info:'A simple calculator with functions for 4 arithmetic operations and percentage calculation.',
        liveUrl:'https://calculator-tawny-psi.vercel.app/',
        githubUrl:'https://github.com/omerozceylan/calculator-with-js'
    },
    {
        title:'Medium Clone',
        badges:[
            'html', 'Bootstrap', 'css'
        ],
        info:"My medium clone, it's my old project. And i don't use bootstrap anymore(only pc)",
        liveUrl:'https://clone-medium-omer-ozceylan.vercel.app/',
        githubUrl:'https://github.com/omerozceylan/clone-medium'
    },
    {
        title:'Counter',
        badges:[
            'js', 'html', 'css'
        ],
        info:'Basic counter with local storage',
        liveUrl:'https://count-people.vercel.app/',
        githubUrl:'https://github.com/omerozceylan/count-people'
    },
    {
        title:'To Do List',
        badges:[
            'js', 'html', 'css'
        ],
        info:'To Do List',
        liveUrl:'https://omer-ozceylan-to-do-list.vercel.app/',
        githubUrl:'https://github.com/omerozceylan/old-todo-list'
    }
]

const projectsContainerNode = document.querySelector('.project-container')


projects.forEach((item)=>{
    
    //All badges printing here.
    let badgeArea = ''
    for(let i=0;i<item.badges.length;i++){
        upperArrElement = item.badges[i].toUpperCase()
        badgeArea+= `<div class="badge">${upperArrElement}</div>`
    }

    let html = `
        <div class="project-card card-borders">
            <h3 class="project-card-title">${item.title}</h3>
            <div class="badge-area">
                ${badgeArea}
            </div>
            <p class="project-info">
                ${item.info}
            </p>
            <div class="card-button-area">
                <div class="card-button-area-left">
                    <a
                        target="_blank"
                        href="${item.liveUrl}"
                    >
                        <button class="card-button">Live project</button>
                    </a>
                    <a
                        target="_blank"
                        href="${item.githubUrl}"
                    >
                        <button class="card-button">Github</button>
                    </a>
                </div>
            </div>
        </div>
    `
    projectsContainerNode.innerHTML += html

   


})

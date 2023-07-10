let counter = 0;
let box = document.getElementById('box')
let outer = document.getElementById('outer')
let inp = document.getElementById(`inp${counter}`)
let content = document.getElementById(`content${counter}`)
let command = document.getElementById(`command${counter}`)
inp.focus()

let history = []

let data = (str) => {
    switch (str) {
        case 'whois':
            return `<div class = 'brown intro' >Hey, I'm Codepil!👋

            I'm a undergraduate student doing B.Tech in computer science at Nirma University, who builds engaging websites like this one.
            
            As a third-year B.Tech student in computer science at Nirma University, I am thrilled to be pursuing my passion for technology and computer science. I have already completed a range of core courses that have equipped me with a strong foundation in programming, data structures, algorithms, and computer networks.

            In addition to my academic pursuits, I have also been actively involved in a range of extracurricular activities and student organizations, such as participating in hackathons, coding competitions, and volunteering for community service initiatives. These experiences have helped me develop a diverse range of skills, such as teamwork, problem-solving, and leadership.

            As I progress towards graduation, I am excited to explore various sub-disciplines of computer science and find my niche in the industry. I am particularly interested in the areas of artificial intelligence and machine learning, and have been taking elective courses to develop my skills in these fields.

            While pursuing my academic and professional goals, I also prioritize my mental and physical well-being. I make time for hobbies such as playing chess and reading, as well as regular exercise and socializing with friends.
             </div>`
            break;

        case 'whoami':
            return `<div class='brown help'>The paradox of “Who am I?” is: we never know, but, we constantly find out.</div>  `
            break;
        
        case 'video':
            window.open('https://www.youtube.com','_blank')
            return `<div class='brown'>Opeing Youtube...</div>`
            break;

        case 'social':
            return `
            <div> <span class='brown width'>Youtube </span> <a href="https://www.youtube.com" target="_blank">youtube/codepil</a> </div>
            <div> <span class='brown width'>linkedin </span> <a href="https://www.linkedin.com/in/codepil/" target="_blank">linkedin/codepil</a> </div>
            <div> <span class='brown width'>instagram </span> <a href="https://www.instagram.com/piyush_0127/" target="_blank">instagram/piyush_0127</a> </div>
            <div> <span class='brown width'>github </span> <a href="https://github.com/code-pil" target="_blank">github/code-pil</a> </div>
            `
            break;

        case 'email':
            window.location.href = "mailto:piyushvaghela9696@gmail.com&subject=Hello%20codepil"
            return `Opening mailto:codepil@paradox.com...`
            break;

        case 'projects':
            // return `<span class='brown'>Still curating... most projects are offline, on GitHub, or confidential.</span>`
            return `
            <div> <a href="https://fir-7bc54.web.app/quotes" target="_blank">Quotes Diary</a> </div>
            <div> <a href="https://food-panda-327e9.web.app/" target="_blank">Food Panda</a> </div>
            <div> <a href="https://dalle.codepil.site/">Dall-e 2.0</a> </div>
            <div> <a href="https://code-pil.github.io/portfolio/">Obvious This is Also Project</a> </div>
            `
            break;

        case 'help':
            return `<p class='help'><span class='commands'>clear</span> <span class='brown'>Clear Terminal</span></p>
            <p class='help'><span class='commands'> whois </span> <span class='brown'>Who is Codepil?</span></p>
            <p class='help'><span class='commands'> ls </span> <span class='brown'>Some personal directories</span></p>
            <p class='help'><span class='commands'> projects </span> <span class='brown'>View coding projects</span></p>
            <p class='help'><span class='commands'>whoami</span> <span class='brown'> Who are you?</span></p>
            <p class='help'><span class='commands'>video</span> <span class='brown'>view youtube video</span></p>
            <p class='help'><span class='commands'>social</span> <span class='brown'>Display social network</span></p>
            <p class='help'><span class='commands'>secret</span> <span class='brown'>Find the password</span></p>
            <p class='help'><span class='commands'>history</span> <span class='brown'>View commands history</span></p>
            <p class='help'><span class='commands'>help</span> <span class='brown'>You obviously already know what this does</span></p>
            <p class='help'><span class='commands'>email</span> <span class='brown'>Do not email me</span></p>
            <p class='help'><span class='commands'>reload</span> <span class='brown'>Just do it</span></p>
            <p class='help'><span class='commands'>exit</span> <span class='brown'>Just see what happens!</span></p>
            <p class='help'><span class='commands'>banner</span> <span class='brown'>Display the header</span></p>`
            break;

        case 'banner':
            return `
            ░█████╗░░█████╗░██████╗░███████╗██████╗░██╗██╗░░░░░<br>
            ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗██║██║░░░░░<br>
            ██║░░╚═╝██║░░██║██║░░██║█████╗░░██████╔╝██║██║░░░░░<br>
            ██║░░██╗██║░░██║██║░░██║██╔══╝░░██╔═══╝░██║██║░░░░░<br>
            ╚█████╔╝╚█████╔╝██████╔╝███████╗██║░░░░░██║███████╗<br>
            ░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═╝░░░░░╚═╝╚══════╝© 2022<br><br>
            <span class="brown"> Welcome to my interactive web terminal.<br><br>
                For a list of available commands, type </span><span class="commands">'help'</span>.
            `
            break;

        case 'history':
            let hist = ''
            history.forEach((e)=>{ hist += e + '<br>'})
            return `<span class='brown' > ${hist} </span>`
            break;
        
        case 'clear':
            box.remove()
            outer.innerHTML = `<div id="box"></div>`
            counter = 0;
            return
            break;
    
        case 'exit':
            window.close(`https://www.google.com`, `_blank`, ``)
            return 'Closing window...'
            break;
        
        case 'reload':
            window.location.reload();
            return 'Reloading...'
            break;

        case 'ls':
            return `<span class='brown'>about.txt</span> <span class='brown'>contact.txt</span> <span class='brown'>projects.txt</span> <span class='brown'>social.txt</span>`
            break;

        default:
            return `<span class='error'> Command not found. For a list of commands, type </span> <span class='commands'> 'help'</span>.`
            break;
    }
}

function appearChars(str, elem, timeBetween) {
    var index = -1;
    (function go() {
        if (++index < str.length) {
         	elem.innerHTML = elem.innerHTML + `<span class="brown">${str.charAt(index)}</span>`;
            setTimeout(go, timeBetween);
        }
    })();
}


let rep = ()=>{
    inp.addEventListener('keydown',(e)=>{
        if(e.keyCode==13){
            // appearChars(data(inp.value),content,10)
            content.innerHTML = data(inp.value)
            command.innerHTML = inp.value
            history.push(inp.value)
            inp.value = ''
            inp.style.display = 'none'
            command.style.display = 'inline'
            counter++
            document.getElementById('box').insertAdjacentHTML('beforeend',`<div id="element"> <span class='address' >codepil@Paradox:~$ </span> <input class="input" type="text" id="inp${counter}"> <p id="command${counter}"></p><p id="content${counter}"></p></div>`)
            inp = document.getElementById(`inp${counter}`)
            content = document.getElementById(`content${counter}`)
            command = document.getElementById(`command${counter}`)
            inp.focus()
            rep()
        }
    })
} 

rep()
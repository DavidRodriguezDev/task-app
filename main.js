let user = prompt("Bienvenido/a, ¿como te llamas?");   //PROMPT INICIAL

let actualDate = new Date(); 
let citeDayOfTheWeek = "";             //FECHA ACTUAL

if(actualDate.getDay() == 0){      //Día de la semana
    citeDayOfTheWeek = "Un domingo bien invertido trae consigo una semana llena de felicidad.";
} else if(actualDate.getDay() == 1) {
    citeDayOfTheWeek = "Lunes: la primera oportunidad de la semana para ser feliz."
} else if(actualDate.getDay() == 2) {
    citeDayOfTheWeek = "Feliz martes: recuerda que el viernes está cada vez más cerca.";
} else if(actualDate.getDay() == 3) {
    citeDayOfTheWeek = "Tú decides lo maravilloso que puede ser este miércoles."
} else if(actualDate.getDay() == 4) {
    citeDayOfTheWeek = "Cualquier detalle puede hacer que tu jueves sea el mejor día de la semana."
} else if(actualDate.getDay() == 5) {
    citeDayOfTheWeek = "Hoy no podía haber amanecido mejor… ¡amaneció viernes!"
} else {
    citeDayOfTheWeek = "Sábado: modo de fin de semana 'on'."
}




const mainContainer$$ = document.createElement("main");    //CONTENEDOR PRINCIPAL
mainContainer$$.classList.add("b-mainContainer");
document.body.appendChild(mainContainer$$);

const headContainer$$ = document.createElement("div");  //TITULO DE BIENVENIDA
headContainer$$.classList.add("b-headContainer");
const titleName$$ = document.createElement("h2");        
titleName$$.classList.add("b-titleName");
titleName$$.classList.add("b-text");
titleName$$.classList.add("b-text--bold");
titleName$$.innerHTML = `Bienvenido/a <span class="b-colorSec">${user}</span>!,`

const dayParraf$$ = document.createElement("h3")
dayParraf$$.classList.add("b-dayParraf");
dayParraf$$.classList.add("b-text");
dayParraf$$.classList.add("b-text--light");
dayParraf$$.innerHTML = `"<i>${citeDayOfTheWeek}</i>"`

headContainer$$.appendChild(titleName$$);
headContainer$$.appendChild(dayParraf$$);

const parraf$$ = document.createElement("p");        //PÁRRAFO DE BIENVENIDA
parraf$$.classList.add("b-parraf");
parraf$$.classList.add("b-text");
parraf$$.classList.add("b-text--regular");
parraf$$.textContent = `Vamos a cumplir tus metas.`
headContainer$$.appendChild(parraf$$);

const form$$ = document.createElement("form");          //FORM DONDE AÑADIR LAS TAREAS.
const input$$ = document.createElement("input");    
const btn$$ = document.createElement("button");

form$$.classList.add("b-form");

input$$.classList.add("b-input");
input$$.classList.add("b-text");
input$$.classList.add("b-text--regular");
input$$.setAttribute("placeholder", "Añade una nueva tarea...")

btn$$.classList.add("b-btn");
btn$$.innerHTML = `<i class="fa-solid fa-plus"></i>`;

form$$.appendChild(input$$);
form$$.appendChild(btn$$);
headContainer$$.appendChild(form$$); 

mainContainer$$.appendChild(headContainer$$);
 

const tasksContainer$$ = document.createElement("div");   //CONTENEDOR DE TAREAS CREADAS.
const infoTask$$ = document.createElement("h2");

tasksContainer$$.classList.add("b-taskContainer");
infoTask$$.textContent = `Estas son tus tareas pendientes`;
infoTask$$.classList.add("b-text");
infoTask$$.classList.add("b-text--regular");
infoTask$$.classList.add("b-infoTask");


tasksContainer$$.appendChild(infoTask$$);
mainContainer$$.appendChild(tasksContainer$$);




const createTask = (e) => {                         //FUNCIÓN PARA CREAR TAREA

    if(input$$.value.length > 0) {       //Si la tarea mínimo tiene un caracter se crea la Task.
        e.preventDefault();
        const divTask$$ = document.createElement("div");
        const textTask$$ = document.createElement("p");
        const trash$$ = document.createElement("button");
        const check$$ = document.createElement("button");

        divTask$$.classList.add("b-divTask");
        trash$$.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        trash$$.classList.add("b-trash");
        check$$.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        check$$.classList.add("b-check");
        textTask$$.textContent = input$$.value;
        textTask$$.classList.add("b-text");
        textTask$$.classList.add("b-text--regular");
        textTask$$.classList.add("b-textTask");
        textTask$$.classList.add("b-colorSec");

        
        divTask$$.appendChild(check$$);
        divTask$$.appendChild(textTask$$)
        divTask$$.appendChild(trash$$);

        tasksContainer$$.appendChild(divTask$$);

        input$$.value = "";     //Reiniciar el input cada vez que se ace click o se presiona enter.
        


        const deleteTask = () => {                          //BORRAR LA TAREA CON LA BASURA
            divTask$$.remove();
            
        }
        
        trash$$.addEventListener("click", deleteTask)

        const linethrough = () => {                         //PONER TACHADA LA TAREA CON EL CHECK (TOGGLE)
            divTask$$.classList.toggle("line-through")
        }

        check$$.addEventListener("click", linethrough);
    } else {
        alert("Por favor, introduce una tarea.")
    }
}




btn$$.addEventListener("click", createTask)


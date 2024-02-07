
 
const taskInput = document.getElementById("taskInput"); 
const taskList = document.getElementById("taskList");

             
function addTask(){
    const taskText = taskInput.value.trim();
/* La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et 
nouvelles lignes) au début et à la fin d'une chaîne.*/
    if (taskText != ""){
        var numTask = localStorage.length
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = "";
        listItem.id = "task" + numTask;
        localStorage.setItem("task" + numTask, taskText);
// Ajoutez un bouton de suppression à chaque élément de liste
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
// Ajoutez un bouton de suppression à chaque élément de liste
        const modifyButton = document.createElement("button");
        modifyButton.textContent = "Modifier";
/* La méthode JavaScript appendChild() est utilisée pour insérer un nouveau nœud ou repositionner un 
nœud existant en tant que dernier enfant d'un nœud parent particulier.*/
        listItem.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            localStorage.removeItem(listItem.id)
            listItem.remove();
        });

        listItem.appendChild(modifyButton);
        modifyButton.addEventListener("click", () => {
            let newTaskName = prompt("Nouveau nom de tâche:");
            listItem.textContent = newTaskName;
            localStorage.setItem(listItem.id, newTaskName);
            listItem.appendChild(deleteBtn);
            listItem.appendChild(modifyButton);
        });

    } else { 
        alert("Veuillez entrer une tâche valide.");
    }
}
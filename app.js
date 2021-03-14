
var taskInput=document.getElementById("new-task");
var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
var completedTasksHolder=document.getElementById("completed-tasks");


var createNewTaskElement=function(taskString){

	var listOfItems=document.createElement("li");

	var checkBox=document.createElement("input");
	var label=document.createElement("label");
	var editInput=document.createElement("input");
	var editButton=document.createElement("button");
    var deleteButton=document.createElement("button");
    label.innerText=taskString;

    checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";

	listOfItems.appendChild(checkBox);
	listOfItems.appendChild(label);
	listOfItems.appendChild(editInput);
	listOfItems.appendChild(editButton);
	listOfItems.appendChild(deleteButton);
	return listOfItems;
}



var taskAdd=function(){

	var listOfItems=createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listOfItems);
	bindTaskEvents(listOfItems, taskCompleted);
    taskInput.value="Temp"
}



var editTask=function(){


var listOfItems=this.parentNode;

var editInput=listOfItems.querySelector('input[type=text]');
var label=listOfItems.querySelector("label");
var containsClass=listOfItems.classList.contains("editMode");
		if(containsClass){

			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		listOfItems.classList.toggle("editMode");
}




//Delete task.
var deleteTask=function(){

	var listOfItems=this.parentNode;
	var ul=listOfItems.parentNode;
	ul.removeChild(listOfItems);

}


var taskCompleted=function(){
	
	
	var listOfItems=this.parentNode;
	completedTasksHolder.appendChild(listOfItems);
	bindTaskEvents(listOfItems, taskIncomplete);

}


var taskIncomplete=function(){
    
    var listOfItems=this.parentNode;
	incompleteTaskHolder.appendChild(listOfItems);
	bindTaskEvents(listOfItems,taskCompleted);
}




addButton.onclick = taskAdd;
addButton.addEventListener("click",taskAdd);


var bindTaskEvents=function(tasklistOfItems,checkBoxEventHandler){
	console.log("bind list item events");
	var checkBox=tasklistOfItems.querySelector("input[type=checkbox]");
	var editButton=tasklistOfItems.querySelector("button.edit");
	var deleteButton=tasklistOfItems.querySelector("button.delete");
	editButton.onclick=editTask;
	deleteButton.onclick=deleteTask;
	checkBox.onchange=checkBoxEventHandler;
}



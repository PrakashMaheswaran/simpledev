// const todoIn=[];
// const todoObj={};
// function renderTask(){
//   for(let i=0;i<todoIn.length;i++){
//     const name=todoIn[i];
//     const number=i;
//     todoObj ={name, number};
//     console.log(todoObj);
//   }
// }

function addTask(){
  const taskElement=document.querySelector('.Todo');
  if(taskElement.value===''){
    alert('fucking enter the task')
  }else{
    todoIn.push(taskElement.value);
    taskElement.value="";
  }
}
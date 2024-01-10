
let points=document.querySelector("#points");
let result=document.querySelector("#result");
const score=JSON.parse(localStorage.getItem('score')) || {
  win:0,loss:0,tie:0
};
points.innerText=(`Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`);
function check(a){
  const you=a;
  let computer=' ';
  const randomNum=Math.random();
  if(randomNum>=0 && randomNum<1/3){
    computer='\u{270A}';
  }
  else if(randomNum>=1/3 && randomNum<2/3){
    computer='\u{270B}';
  }
  else if(randomNum>=2/3 && randomNum<1){
    computer='\u{270C}';
  }

  if(you===computer){
    result.innerText=`Tie. \nyou ${you} - ${computer} Computer`;
    score.tie+=1;
  }
  else if(you==='\u{270A}'){
    if(computer==='\u{270B}'){result.innerText=`You lose. \nyou ${you} - ${computer} Computer`;
    score.loss+=1;
  }
    else{result.innerText=`You win. \nyou ${you} - ${computer} Computer`;
    score.win+=1;
  }
  }
  else if(you==='\u{270B}'){
    if(computer==='\u{270C}'){result.innerText=`You lose. \nyou ${you} - ${computer} Computer`;score.loss+=1;}
    else{result.innerText=`You win. \nyou ${you} - ${computer} Computer`; score.win+=1;}
  }
  else if(you==='\u{270C}'){
    if(computer==='\u{270A}'){result.innerText=`You lose. \nyou ${you} - ${computer} Computer`; score.loss+=1;}
    else{result.innerText=`You win. \nyou ${you} - ${computer} Computer`; score.win+=1;}
  }
  localStorage.setItem('score',JSON.stringify(score));
  points.innerText=(`Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`);
}
function reset(){
  score.win=0;
  score.loss=0;
  score.tie=0;
  localStorage.removeItem('score');
  result.innerHTML='';
  points.innerText=(`Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`);
}
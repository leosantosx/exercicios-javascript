function temHabilidade(skills) {
    for(let x = 0; x < skills.length; x++){
        if(skills[x] == 'Javascript'){
            return true;
        }
    }
    return false;
}

var skills = ["Javascript", "ReactJS", "React Native"];

console.log(temHabilidade(skills));
// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘


function createUser(firstName, lastName){
    let fullName = {
        firstName: firstName,
        lastName: lastName

    }
    return fullName;

}

    
function setAge(user, age){ 
        user.age = age
    return user;

};



    let user = {    
        firstname: "david",
        lastname: "jones" 
    } 
    let userA = setAge(user, 27)
    console.log(setAge(user, 27));




function incrementAge(user){
    user.age++
    return user;
    }

    console.log(incrementAge(userA));





function fixCar(car){
    car.needsMaintenance = false
    return car;
}


function addGrades(student, newGrades){
    for(let i = 0; i< newGrades.length; i++){
        student.grades.push(newGrades[i])
    }
    return student;
}

/*function Car(make, model, year, fix); {
    let Carmake = (typeOf("string")
    let Carmodel = (typeOf("string")
    let Caryear = (typeOf('Number')
        
     console.log(make)

    }*/

function addTodo(todos, newTodo){
    todos.push(newTodo)
       return todos;

}



function addSong(playlist, newSong) {
    playlist.duration += newSong.duration
    playlist.songs.push(newSong)
    return playlist;

}



function updateReportCard(reportCard, newGrade) {
    reportCard.grades.push(newGrade)
    reportCard.lowestGrade = Math.min(...reportCard.grades)
    reportCard.highestGrade = Math.max(...reportCard.grades)
    
    let sum = 0;
    for (let i = 0; i < reportCard.length; i++) {

        sum += reportCard.grades[i];
    }
    reportCard.averageGrade = sum / reportCard.grades.length;
    
    return reportCard;
}













// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘

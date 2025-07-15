const DAYS = 6;
const LIMIT = 30;
let studentReport = [11,42,33,64,29,37,44];

const amount = studentReport.length;
for (let i = 0;i < amount; i++){
    if( studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
}

let temp = 0;
while (temp < studentReport.length){
    if (studentReport[temp] < LIMIT){
        console.log(studentReport[temp]);
    }
    temp++;
}

studentReport.forEach((student) => {
    if (student < LIMIT){
        console.log(student);
    }
});

const day = new Date().getDay();

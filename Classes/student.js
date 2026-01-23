class student {
    constructor(firstNAme,lastName,age,currentYear){
        this.firstNAme=firstNAme;
        this.lastName=lastName;
        this.age=age;
        this.grade=currentYear;
    }
}

let firstStudent=new student("marilyn","monroe",21,3);
console.log(firstStudent.firstNAme);
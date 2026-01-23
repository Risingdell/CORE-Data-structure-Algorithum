class Student {
    constructor(firstNAme,lastName,age,currentYear){
        this.firstNAme=firstNAme;
        this.lastName=lastName;
        this.age=age;
        this.grade=currentYear;
        this.score=[];
    }
    Show(){
        console.log(`The students name is ${this.firstNAme} ${this.lastName}`);
    }
    Addscore(score){
        this.score.push(score);
        console.log(this.score);

    }
    average(){
        this.sum=this.score.reduce((a,b)=>a+b,0);
        return this.avg=this.sum/this.score.
        length;
        
    }
    

}
let firstStudent=new Student("Dhanush","Mullubagillu",21,3);
firstStudent.Show();
firstStudent.Addscore(80);
firstStudent.Addscore(95);
firstStudent.Addscore(100);
console.log(firstStudent.average());

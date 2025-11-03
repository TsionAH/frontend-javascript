class Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperiences?:number;
    location:string;
    contract: boolean;
    constructor (firstName: string,lastName: string){
        this.firstName = firstName
        this.lastName = lastName
    }
   
   
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
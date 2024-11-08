
import logo from './logo.svg';
import './App.css';

function App() {

  let calculateResult= (engMarks, telMarks, hinMarks, matMarks, sciMarks, socMarks, PassFun, FailFun)=>{
    let passMarks=35;
    if(engMarks >= passMarks &&
      telMarks >= passMarks &&
      hinMarks >= passMarks &&
      matMarks >= passMarks &&
      sciMarks >= passMarks &&
      socMarks >= passMarks )
    {
      PassFun();
    }
    else{
     FailFun();
    }
  }
  calculateResult(17,34,58,90,68,72,
    ()=> {
     console.log("Student Passed") ;
    },
    ()=>{
      console.log("Student Failed");
    }
  );

  let samanthaDetails = {
    firstName: "Samantha",
    lastName: "Ruth Prabhu",
    dateofBirth: "Apr 28, 1987",
    age: 37,
    role: "Telugu Actress",
    industry: "Tollywood",
    fatherName: "Joseph Prabhu",
    motherName: "Nina Prabhu",
    husbandName: "Naga Chaitanya (ex-husband)",
    email: "samantha@gmail.com",
    qualification: "Bachelor's degree in commerce",
    city: "Chennai"
  };
  
 
console.log(samanthaDetails.firstName);
console.log(samanthaDetails.lastName);
console.log(samanthaDetails.role);



let {firstName:fn, lastName:ln, industry:ind, city:ct, qualification:qua}= samanthaDetails;
console.log(fn);
console.log(ln);
console.log(ind);
console.log(ct);
console.log(qua);

let kajalDetails = ["Kajal", "Aggarwal", "19 June 1985", "Daughter of Vinay Aggarwal", "Telugu Actress", "Model", "Married to Gautam Kitchlu", 39];
console.log(kajalDetails);
console.log(kajalDetails[0]);
console.log(kajalDetails[5]);



let [firstName, lastName] = kajalDetails;
console.log(firstName, lastName);


let dateOfBirth = kajalDetails[2];
let fatherName = kajalDetails[3];
console.log(dateOfBirth, fatherName);

let kajalCopy = [...kajalDetails];
console.log(kajalCopy);

let rashmikaDetails = { ...samanthaDetails };
rashmikaDetails.firstName = "Rashmika";
rashmikaDetails.lastName = "Mandanna";
console.log(rashmikaDetails);

let mrunalDetails = [...kajalDetails];
mrunalDetails[0] = "Mrunal";
mrunalDetails[1] = "Thakur";
console.log(mrunalDetails);







  return (
    <div className="App">
      <h1>Callback Functions, Arrays, Objects and Destructuring</h1>
      
    </div>
  );
}

export default App;

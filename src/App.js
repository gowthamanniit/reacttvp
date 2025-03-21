function App()
{
  var arr=[11,23,33,44,55,66,77,88,99,100,200,300]
  return(
    <>
    <h2>all elements</h2>
    <ol type="I">
        {arr.map((item)=><li>{item}</li>)}
      </ol>
      <h2>even/odd elements</h2>
      <ul type="circle">
        {arr.map((item)=>
            <li>
            {(item%2===0 && item+" even ") || item+" odd" }
            </li>    
        )}
      </ul>

      <h2>even only</h2>
      <ul type="square">
        {arr.map((item)=>      
            <>
            {item%2===0 && <li>{item}</li>}            
            </>      
        )}
      </ul>

    </>
  )
}
export default App
/*
function App()
{
  var sobj={
    rno:19991,
    sname:"ramesh",
    marks:{
      tamil:88,
    english:83,
    maths:99
  }
  }
  const dis=({rno,sname,marks:{tamil,english,maths}})=>{
  return [rno,sname,tamil,english,maths]
  }
  var [v1,v2,v3,v4,v5]=dis(sobj)
  return(
    <>
    <h1>Nested Object Destructing</h1>
    <h1>Roll Number:{v1}</h1>
    <h1>Student Name:{v2}</h1>
    <h1>Tamil Mark:{v3}</h1>
    <h1>English Mark:{v4}</h1>
    <h1>Maths Mark:{v5}</h1>
    </>
  )
}
export default App
/*
function Gowthaman()
{
  const show=(a,b)=>
  {
    var add=a+b
    var sub=a-b
    var mul=a*b
    var div=a/b
    return [add,sub,mul,div]
  }
  var [v1,v2,v3,v4]=show(11,22)
  return(<>
  <h1>Function Destructing</h1>
    Addition:{v1} <br></br>
    Subtraction:{v2} <br></br>
    Multiplication:{v3} <br></br>
    Division:{v4} <br></br>
  </>)
}
export default Gowthaman
/*
function Gowthaman()
{
  var [v1,,,v2,...v3]=[11,22,33,44,55,66,77]
  return(
    <>
    <h1>Array Destructing: To get data from source</h1>
      value 1 :{v1}
      <br></br>
      value 2 :{v2}
      <br></br>
      value 3 :{v3}
    
    </>
  )
}
export default Gowthaman
/*
function Gowthaman()
{
  const show=(a,b,c)=>{
    
    if(true)
    {
    var k=100
    k++
    }
    document.getElementById("r1").innerHTML="arrow show function"+(a+b+c+k)
  }
  function dis(a,b,c)
  {
  document.getElementById("r2").innerHTML="normal dis function"+(a+b+c)
  }
  return(
    <>
    <h1>arrow function without parameter</h1>
    
         <button onClick={()=>show(10,20,30)}>click me</button>
         <button onClick={()=>dis(11,22,33)}>click me</button>
     <div id="r1"></div>
     <div id="r2"></div>
    </>
  )
}
export default Gowthaman
/*
function Gowthaman()
{
  const show=()=>{
    document.getElementById("r1").innerHTML="arrow show function"
  }
  function dis()
  {
  document.getElementById("r2").innerHTML="normal dis function"
  }
  return(
    <>
    <h1>arrow function without parameter</h1>
    <button onClick={dis}>click me</button>
    <button onClick={()=>dis()}>click me</button>

     <button onClick={show}>click me</button>
     <div id="r1"></div>
     <div id="r2"></div>
    </>
  )
}
export default Gowthaman
/*
function Gowthaman()
{
  var stud=[{rno:1001,sname:"preethi",mark:67},
            {rno:1002,sname:"vignesh",mark:77},
            {rno:1003,sname:"prabha",mark:87}
          ]  
  
    return(
      <>
      <h1>Roll Number:{stud[0].rno}</h1>      
      <h1>Sname:{stud[0].sname}</h1>
      <h1>Mark:{stud[0].mark}</h1>
      <h1>Roll Number:{stud[1].rno}</h1>      
      <h1>Sname:{stud[1].sname}</h1>
      <h1>Mark:{stud[1].mark}</h1>
      <h1>Roll Number:{stud[2].rno}</h1>      
      <h1>Sname:{stud[2].sname}</h1>
      <h1>Mark:{stud[2].mark}</h1>
      
      </>
    )
}
export default Gowthaman

/*
function Gowthaman()
{
  var stud={
    rno:1001,
    sname:"preethi",
    subjects:{mark1:88,
    mark2:98,
    mark3:45}
  }
    return(
      <>
      <h1>Roll Number:{stud.rno}</h1>
      <h1>Student Name:{stud.sname}</h1>
      <h1>Tamil:{stud.subjects["mark1"]}</h1>
      <h1>English:{stud.subjects["mark2"]}</h1>
      <h1>Maths:{stud.subjects["mark3"]}</h1>
      </>
    )
}
export default Gowthaman

/*
function Gowthaman()
{
  var stud={
    rno:1001,
    sname:"preethi",
    mark1:88,
    mark2:98,
    mark3:45
  }
    return(
      <>
      <h1>Roll Number:{stud.rno}</h1>
      <h1>Student Name:{stud.sname}</h1>
      <h1>Tamil:{stud.mark1}</h1>
      <h1>English:{stud.mark2}</h1>
      <h1>Maths:{stud.mark3}</h1>
      </>
    )
}
export default Gowthaman
/*
function Gowthaman()
{
  // var arr=new Array(11,22,33,44,55,66,77)
     var arr=[11,22,33,44,55,66,77]
     var sum=0
     for (var i=0;i<arr.length;i++)
     {
      sum=sum+arr[i]
     }
  return(
    <>
    <h1>index:0 { arr[0]}</h1>
    <h1>index:1 { arr[1]}</h1>
    <h1>index:2 { arr[2]}</h1>
    <h1>index:3 { arr[3]}</h1>
    <h1>index:4 { arr[4]}</h1>
    <h1>index:5 { arr[5]}</h1>
    <h1>index:6 { arr[6]}</h1>
    <h1>Sum of array:{sum}</h1>
    </>
  )
}
export default Gowthaman
/*
function Gowthaman()
{
  var m1=35
  var m2=35
  var m3=35
  var m4=35
  var m5=0
  var avg=(m1+m2+m3+m4+m5)/5
  return(
    <>
    <h1>Your percentage:{avg} </h1>
    <h2>
    Your Grade:    
    {(m1>34 && m2>34 && m3>34 && m4>34 && m5>34 &&
    ((avg>=85 && "Outstanding") || (avg>=75 && "Excellent") || (avg>=65 && "Very Good") || (avg>=55 && "Good") || "FAIR"))
    ||
    "No grade because fail"}
    </h2>
    </>
  )
}
export default Gowthaman
/*
function App()
{
  var n=0;
  return(
    <>
    {(n>0 && n+" is +Ve") || (n<0 && n+" is -Ve") || (n===0 && n+" is zero")}
    </>
  )
}
export default App
/*
function App()
{
  var n1=10;
  var n2=5;

  return(
    <>
      <h1>{(n1>n2 && n1+" is biggest") || n2+" is biggest"}</h1>
    </>
  )
}
export default App
/*
function App()
{
  var a=100;
  var b=200;
  return(
    <>
      <h1>Welcome to React Expression </h1>

      <h1>a value :{a}</h1>
      <h1>b value :{b}</h1>
      <h1>total value :{a+b}</h1>  
    </>
  )
}
export default App
/*
function Tamil()
{
  return(
    <>
      <h1>This is Function Tamil Component</h1>
    </>
  )
}
function App()
{
  return(
    <>
    <Tamil></Tamil>
      <h1>This is function App Component</h1>
    </>
  )
}
export default App
//export default Tamil
/*
import React from "react";
class App extends React.Component
{
  render()
  {
    return(
        <>  
          <h1>This is class Component</h1>
          <h1>This is class Component</h1>
          <h1>This is class Component</h1>
          <h1>This is class Component</h1>
        </>
    )
  }

}
export default App
/*
function App()
{
  return(
    <div>
    <h1>Welcome to React first App</h1>
    <h1>Welcome to React first App</h1>
    <b>this is bold text</b>
    <strike>this is strike text</strike>
    <p> klsdf sadjfsal kjfsadkl <mark>asdklfasd jklfjasd flasdjf asldkjf sadlkjf sadkljfsdalkfdsakl fjasdklf asdklj fsadklf dsakl fskla faskdlf sad fsalkdf asdf skaldf </mark>sda</p>
    </div>
  )
}
export default App
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
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
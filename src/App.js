import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { ErrorCart } from "./components/Error";
import { Outlet } from "react-router-dom";
import Dashboard from "./components/DashBoard";
import RestaurantMenu from "./components/RestaurantMenu";


// const heading1 = document.createElement("h1");
// heading1.innerHTML = "Hello JavaScript!!";
// const heading2 = document.createElement("h1");
// heading2.appendChild(document.createTextNode("Hello Typescript!!"));
// const root1 = document.getElementById("root");
// root1.appendChild(heading1);
// root1.appendChild(heading2);


// const heading3 = React.createElement("h1",{id:"heading",className:"heading"},"Hello React!!");
// const root3 = ReactDOM.createRoot(document.getElementById("root"));
// root3.render(heading3);

// const heading4 = React.createElement("div",{},[React.createElement("h1",{id:1,key:1},"this is heading1"),
//                                                React.createElement("h2",{id:2,key:2},"this is heading2"),
//                                                React.createElement("h3",{id:3,key:3},"this is heading3"),
//                                                React.createElement("h4",{id:4,key:4},"this is heading4"),
//                                                React.createElement("h5",{id:5,key:5},"this is heading5"),
//                                                React.createElement("h6",{id:6,key:6},"this is heading6")]);



// const heading5 = (<div>
//           <h6 className="heading1-6" id="alpha" style={{textAlign:"center"}}>this is heading6</h6>
//           <h5 className="heading1-6">this is heading5</h5>
//           <h4 className="heading1-6">this is heading4</h4>
//           <h3 className="heading1-6">this is heading3</h3>
//           <h2 className="heading1-6">this is heading2</h2>
//           <h1 className="heading1-6">this is heading1</h1>
// </div>);     


// const HeadingComponent = () =>
// {
//     return (<h1>Hello HeadingComponent</h1>);
// };

// const Title = () => 
// {
//   return(
//     <div>
//     <HeadingComponent></HeadingComponent>
//     {
//         HeadingComponent()
//     }
//     <HeadingComponent/>
//     </div>
//   );
// };
// root3.render(<Title/>);   

const AppLayout = () => 
{
   return(
    <div className="app">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
   );
};

const myRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  {
     path:"/dashboard",
     element:<Dashboard/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={myRouter}/>)
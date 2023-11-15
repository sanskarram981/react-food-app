
const heading1 = document.createElement("h1");
heading1.innerHTML = "Hello JavaScript!!";
const heading2 = document.createElement("h1");
heading2.appendChild(document.createTextNode("Hello Typescript!!"));
const root1 = document.getElementById("root");
root1.appendChild(heading1);
root1.appendChild(heading2);


const heading3 = React.createElement("h1",{id:"heading",className:"heading"},"Hello React!!");
const root3 = ReactDOM.createRoot(document.getElementById("root"));
root3.render(heading3);

const heading4 = React.createElement("div",{},[React.createElement("h1",{},"this is heading1"),
                                               React.createElement("h2",{},"this is heading2"),
                                               React.createElement("h3",{},"this is heading3"),
                                               React.createElement("h4",{},"this is heading4"),
                                               React.createElement("h5",{},"this is heading5"),
                                               React.createElement("h6",{},"this is heading6")]);
const root4 = ReactDOM.createRoot(document.getElementById("root"));
root4.render(heading4);                                               
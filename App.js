
/*

<div>
    <div>
        <h1></h1>
        <h2></h2>
    </div>


    <div>

    </div>


*/


const heading1 = React.createElement("h1",{id:"h1"},"heading1...");
const heading2 = React.createElement("h2",{id:"h2"},"heading2...");

const child1 = React.createElement("div",{id:"child1" , class:"child"},[heading1,heading2]);
const child2 = React.createElement("div",{id:"child2" , class:"child"},[heading1,heading2]);

const parent = React.createElement("div",{id:"parent"},[child1,child2]);
console.log(heading1);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
console.log(root1);
root1.render(parent);
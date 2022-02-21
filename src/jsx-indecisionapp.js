console.log("App.js - Indecision app is running");

const app = {
    title : "Indecision App",
    subtitle: "Built on React",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const opt = e.target.elements.option.value;
    if (opt) {
        app.options.push(opt);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
};
const RemoveAll = () => {
    app.options = [];
    renderIndecisionApp();
}
const decision = () => {
    const rand = Math.floor(Math.random() * app.options.length);
    alert(app.options[rand]);
}
const renderIndecisionApp = () => {
let template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ?  "Here are your options" : "No options available"}</p>
    <p>{app.options.length}</p>
    <button disable={true} onClick={decision}>What Should I do?</button>
    <button onClick={RemoveAll}>Remove All</button>
    <ol>
    {
        app.options.map((optn,index) => {
           return <li key={index}>{optn}</li> ;
        })
    }
    </ol>

<form onSubmit={onFormSubmit}>
<input type="text" name="option" />
<button>Add option</button>
</form>
</div>
);

const appRoot = document.getElementById('root');
ReactDOM.render(template,appRoot);
}

renderIndecisionApp();

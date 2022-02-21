
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidUpdate(prevProps,prevState) {
       if (prevState.count !== this.state.count){
        localStorage.setItem('count', this.state.count);
       }
    }

    componentDidMount() {
        const count = parseInt(localStorage.getItem('count'),10);
        if (!isNaN(count)){
            this.setState(() => ({ count }));
        }
    }
    handleAddOne() {
        this.setState((prevState) => { 
            return {
                count: prevState.count + 1 
            };
        });

    }
  
    handleMinusOne() {
        this.setState((prevState) => ({ count: prevState.count - 1}) //enclose the return obj within () otherwise JS wont know if its an object or set of code within {}
                    );
        console.log('handleMinusOne');
    }
    
    handleReset() {
        this.setState(() => { 
            return { count: 0 }
            }) ;
    }    
    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }

}

ReactDOM.render(<Counter />, document.getElementById("root"));

// console.log("App.js is running");

// const app = {
//     title : "Indecision App",
//     subtitle: "Built on React",
//     options: ['One','Two']
// }
// let template = (
// <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ?  "Here are your options" : "No options available"}</p>
// </div>
// );

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
//   //  console.log('addOne');
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// //    console.log('minusOne');
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//  //   console.log('reset');
// };

// const appRoot = document.getElementById('root');

// const renderCounterApp = () => {
// let templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//     </div>

// );
// ReactDOM.render(templateTwo,appRoot);
// };

// renderCounterApp();
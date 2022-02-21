class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            options : props.options
        }
    }
    handleFormSubmit(optInp) {
    //    console.log('Form submitted');
        if (this.state.options.indexOf(optInp) > -1) {
            return 'This option already exists';
        } else if(!optInp) {
            return 'Enter a valid option';
        }
        this.setState((prevState) => {
            return {
                options : prevState.options.concat(optInp)
            }
        });
    }
    handleRemoveAll() {
        this.setState(() => ({options : []}));
    }
    handlePick() {
        const pickedOpt = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        console.log(pickedOpt);
    }
    render() {
        const apptitle = "Indecision App";
        const subtitle ="Put your life in the hands of a computer!";
    //    const options = ["Option 1", "Option 2", "opt 3"]
        return (
            <div>
                <Header title={apptitle} subtitle={subtitle}/>
                <Action optLen={this.state.options.length} handlePick={this.handlePick}/>
                <Options opt={this.state.options} handleRemove={this.handleRemoveAll}/>
                <AddOptions handleFormSubmit={this.handleFormSubmit}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: ["Option 1", "Option 2", "Option3"]
}
const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    ) 
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
        <button 
        disabled={props.optLen < 1}
        onClick={props.handlePick}>
        What should I do?
        </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleRemove}>Remove All</button>
        {
            // this.props.opt.map((option,index) => <p key={index}>{option}</p>)
            props.opt.map((option,index) => <Option key={index} optionText={option}/>)
        }
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>Options: {this.props.optionText}</div>
//         );
//     }
// }
const Option = (props) => {
    return (
        <div>Options: {props.optionText}</div>
    );
} 
class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            message : undefined
        }
    }
    onFormSubmit(e) {
        e.preventDefault();  //prevent full page refresh
        const optInp = e.target.elements.optInput.value.trim();
        if (optInp) {
            // alert(optInp);
            const error = this.props.handleFormSubmit(optInp);
            this.setState(() => 
                    ({ message : error })
                );
            e.target.elements.optInput.value = '';
        }
        
    }
    render() {
        return (
            <div>
            {this.state.message && <p>{this.state.message}</p>}
            <form onSubmit={this.onFormSubmit}>
            <input type="text" name="optInput" /> 
            <button>Add Option</button>
            </form>
            </div>
        );
    }
}

// const jsx = (
// <div>
// <Header />
// <Action />
// <Options />
// <AddOptions />
// </div>

// ); 

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
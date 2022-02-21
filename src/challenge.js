class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            options : ["Option 1", "Option 2", "Option3"]
        }
    }

    handleEdit(changedOpt,index) {
        console.log(index);
        if (this.state.options.indexOf(changedOpt) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => {
        //    prevState.options[index] = changedOpt 
            prevState.options.splice(index,1,changedOpt)
            return {
                options: prevState.options
            }
        }); 
    }
    handleDelete(index) {
        console.log(index);
        this.setState((prevState) => {
            prevState.options.splice(index,1)
            console.log(prevState.options)
            return {
            //    options : prevState.options.splice(index,1)
                options : prevState.options
            }
        });
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
        this.setState(() => {
            return {
                options : []
            }
        });
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
                <Options opt={this.state.options} handleRemove={this.handleRemoveAll} 
                 handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
                <AddOptions handleFormSubmit={this.handleFormSubmit}/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    // handleClick() {
    //     alert('Button clicked');
    // }
    render() {
        return (
            <div>
            <button 
            disabled={this.props.optLen < 1}
            onClick={this.props.handlePick}>
            What should I do?
            </button>
            </div>
        )
    }

}

class Options extends React.Component {
    // handleRemoveAll() {
    //     alert('Removing all');
    // }
    render() {
        return (
            <div>
            <button onClick={this.props.handleRemove}>Remove All</button>
            {
                // this.props.opt.map((option,index) => <p key={index}>{option}</p>)
                this.props.opt.map((option,index) => 
                <Option key={index} optionText={option} pos={index} 
                    handleEdit={this.props.handleEdit} 
                    handleDelete={this.props.handleDelete}/>)
            }
            </div>
        );
    }
}

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.handleOptionEdit = this.handleOptionEdit.bind(this);
        this.handleOptionDelete = this.handleOptionDelete.bind(this);
        this.state = {
            message : undefined
        }
    }
    handleOptionEdit(e) {
        e.preventDefault();
        const changedOpt =  document.getElementsByClassName('inpText')[this.props.pos].value.trim();
         if (changedOpt) {
            const error = this.props.handleEdit(changedOpt,this.props.pos);
            this.setState(() => {
                return { message : error }
            });
       }

    }
    handleOptionDelete(e) {
        e.preventDefault();
        this.props.handleDelete(this.props.pos);
    }

    render() {
        console.log(this.props.optionText);
        return (
            <div>Option: {this.props.optionText}
            <input type="text" name="optDisplay" className="inpText" defaultValue={this.props.optionText} /> 
            <button onClick={this.handleOptionEdit}>Edit</button>
            <button onClick={this.handleOptionDelete}>Delete</button>
            {this.state.message && <p>{this.state.message}</p>}
            </div>
        );
    }
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
            this.setState(() => {
                    return { message : error }
                });
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
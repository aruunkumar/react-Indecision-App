
class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility : false,
            message: ''
        };

    }
    handleToggle() {
        this.setState((prevState) => {
            console.log(prevState.message);
            return {
                visibility : !prevState.visibility,
                message: !prevState.visibility && 'These are some details you can see'
            }
        });
    } 
    render() {
        return (<div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
            <p>{this.state.message}</p>
            </div>);
    }

}

ReactDOM.render(<Visibility />, document.getElementById("root"));
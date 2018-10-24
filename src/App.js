// import the library
import React, {Component} from 'react';

import Employee from './component/employee/employee';
import Login from './component/login/login';
import axios from 'axios';
import {connect} from "react-redux";
import {logout, addEmployees,setUser, setPassword, changeName, changePosition, deleteEmployee, loginUser} from './actions';

// create the component
class App extends Component {

    componentWillMount() { //<---lifehook method
        axios.get('http://localhost:3004/employees').then((employees) => {
            this.props.addEmployees(employees.data);
        });
    }

    changeNameHandler = (event, index) => {
       this.props.changeName(event.target.value,index);

    }

    changePositionHandler = (event, index) => {
        this.props.changePosition(event.target.value,index);

    }

    deleteHandler = (index) => {
        this.props.deleteEmployee(index);
    }

    render() {

        const employees_jsx = (<div>
                {this.props.employees.map(
                    (employee, index) => <Employee name={employee.name}
                                                   deleteHandler={() => {
                                                       this.deleteHandler(index);
                                                   }}
                                                   date_of_birth={employee.date_of_birth}
                                                   position={employee.position_held}
                                                   changeNameHandler={(event) => {
                                                       this.changeNameHandler(event, index);
                                                   }}
                                                   changePositionHandler={(event) => {
                                                       this.changePositionHandler(event, index);
                                                   }}/>
                )}
            </div>
        );

        const style = {
            padding: '30px'
        };
        const logout_style = {
            display: 'block',
            margin: 'auto',
            marginRight: '0px'
        };

        if (this.props.loggedin) {
            return (<div style={style}>
                <button onClick={() => this.props.logout()}
                        style={logout_style}>Logout
                </button>
                {employees_jsx}
            </div>)
        } else {
            return <div><Login username={this.props.user}
                               password={this.props.password}
                               error={this.props.error}
                               handleUsername={(event) => this.props.setUser(event.target.value)}
                               handlePassword={(event) => this.props.setPassword(event.target.value)}
                               submit={() => {
                                   this.props.loginUser(this.props.user, this.props.password);
                               }
                               }
            /></div>;
        }


    }

}

const mapStateToProps = ({employees, user, password, loggedin, error}) => {
    return {employees, user, password, loggedin, error};
};

// export the component
export default connect(
    mapStateToProps,
    {addEmployees, logout, setUser, setPassword, changeName, changePosition, deleteEmployee, loginUser}
)(App);
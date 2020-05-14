import React, {Component} from "react";
import {Button} from "reactstrap";

// Кноппки из навигации
class Kek extends React.Component {
    

    render() {

        return (
            <>
              <h4 className="logo">Hello, &nbsp;
                {this.props.name() ? localStorage.getItem('username') + '!' : 'guest!' }
            </h4>

            <ul className="nav-menu2">
                        <li><Button color="info" size="lg" className="mr-2 mt-md-2"
                                    onClick={this.props.refreshTasks}>Task List</Button>
                            <Button color="info" size="lg" className="mr-2 mt-md-2"
        onClick={this.props.toggleNewTaskModal}>Add Task</Button>

                        <Button color="info" size="lg" className="mr-2 mt-md-2"
                                    onClick={this.props.toggleFilterTasksModal}>Filter</Button>
                        <Button color="info" size="lg" className="mr-2 mt-md-2"
                                    onClick={this.props.toggleRegisterModal}>Register</Button>
                        </li>
            </ul>

        </>

        )

    }
}

export default Kek;

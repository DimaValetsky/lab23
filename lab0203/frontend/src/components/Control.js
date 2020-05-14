import React, {Component} from "react";
import {Button} from "reactstrap";


class Control extends React.Component{
render() {
    return (
        <td>
                              <Button color="info" size="sm" className="mr-2"
                                      onClick={this.props.detailsTask}>
                                  Details</Button>
                              <Button color="success" size="sm" className="mr-2"
                                      onClick={this.props.editTask}>
                                  Edit</Button>
                              <Button color="danger" size="sm"
                                      onClick={this.props.deleteTask}>
                                  Delete</Button>
                          </td>


    )
}
}

export default Control
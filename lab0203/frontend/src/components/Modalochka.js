import React from "react";
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class Modalochka extends React.Component{
    render() {
        return (
            <Modal isOpen={this.props.detailsTaskModal} toggle={this.props.toggleDetailsTaskModal}>
                    <ModalHeader toggle={this.props.toggleDetailsTaskModal}>Task details</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="task_id">Task ID:</Label>
                            <Input type="text" readOnly={true} id="task_id"
                                   placeholder={this.props.detailsTaskData.id}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="task_name">Task Name:</Label>
                            <Input type="text" readOnly={true} id="task_name"
                                   placeholder={this.props.detailsTaskData.name}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="task_status">Task Status:</Label>
                            <Input type="text" readOnly={true} id="task_status"
                                   placeholder={this.props.detailsTaskData.status}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="task_date">Task Date:</Label>
                            <Input type="text" readOnly={true} id="task_date"
                                   placeholder={new Date(this.props.detailsTaskData.date).toLocaleString()}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="task_file">Task File:</Label>
                            <Input type="text" readOnly={true} id="task_file"
                                   placeholder={this.props.detailsTaskData.file}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                                onClick={this.props.toggleDetailsTaskModal}>Ok</Button>
                    </ModalFooter>
                </Modal>

        )
    }
}
export default Modalochka;
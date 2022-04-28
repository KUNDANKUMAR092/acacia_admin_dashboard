import React, { useState } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  InputGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  Input,
} from "reactstrap";
import {AiTwotoneLock} from "react-icons/ai";

function AddNewCorporate() {
    const[isOpen , setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
  return (
    <>
      <div className="content myenquiries">
        <Row>
            <Col md="12">
                <Card>
                {/* <CardHeader>
                    <CardTitle tag="p">Plan for your active batches</CardTitle>
                </CardHeader> */}
                <CardBody>
                    <div className="" style={{padding: "20px"}}>
                        <div className="" style={{paddingBottom: "20px"}}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCorporateName">
                                            Corporate Name
                                            </Label>
                                            <Input
                                            id="exampleCorporateName"
                                            name="CorporateName"
                                            placeholder="Enter Corporate Name"
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCorporateDomain">
                                            Corporate Domain Name
                                            </Label>
                                            <Input
                                            id="exampleCorporateDomain"
                                            name="CorporateDomain"
                                            placeholder="Enter Corporate Domain Name"
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleHREmailID">
                                            HR - Email IDs
                                            </Label>
                                            <Input
                                            id="exampleHREmailID"
                                            name="HREmailID"
                                            placeholder="valid email id(xyz@abc.com,example@email.com)"
                                            type="email"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="slect_checkbox_btn">	
                            <input type="checkbox" value="None" id="checkboxSuper" name="checkbox" />
                            <label for="checkboxSuper">Super Campus Account</label>	
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="text-muted" style={{padding: "15px 15px 15px 15px"}}>
                    <div className="" style={{padding: "20px", display: "flex", justifyContent: "end"}}>
                        <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
                            Submit
                        </Button>
                    </div>
                </CardFooter>
                </Card>
            </Col>
        </Row>
      </div>
    </>
  );
}

export default AddNewCorporate;
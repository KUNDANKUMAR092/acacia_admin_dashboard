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

function CreateBatch() {
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
                                <CardTitle tag="h4" style={{marginTop: "0px"}}>BASIC BATCH DETAILS</CardTitle>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                            COURSES
                                            </Label>
                                            <Input id="exampleSelect" name="select" type="select" >
                                                <option>
                                                    1
                                                </option>
                                                <option>
                                                    2
                                                </option>
                                                <option>
                                                    3
                                                </option>
                                                <option>
                                                    4
                                                </option>
                                                <option>
                                                    5
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCOURSEVERSION">
                                            COURSE VERSION
                                            </Label>
                                            <Input
                                            id="exampleCOURSEVERSION"
                                            name="COURSEVERSION"
                                            placeholder=""
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCOURSEFEE">
                                            COURSE FEE
                                            </Label>
                                            <Input
                                            id="exampleCOURSEFEE"
                                            name="COURSEFEE"
                                            placeholder=""
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCOURSEFEE">
                                            COURSE FEE
                                            </Label>
                                            <Input
                                            id="exampleCOURSEFEE"
                                            name="COURSEFEE"
                                            placeholder=""
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCOURSDURATION">
                                            BATCH DURATION
                                            </Label>
                                            <Input
                                            id="exampleCOURSDURATION"
                                            name="COURSDURATION"
                                            placeholder=""
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleSTARTTIMEDATE">
                                            START TIME & DATE
                                            </Label>
                                            <Input
                                            id="exampleSTARTTIMEDATE"
                                            name="STARTTIMEDATE"
                                            placeholder=""
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleENDTIMEDATE">
                                            END TIME & DATE
                                            </Label>
                                            <Input
                                            id="exampleENDTIMEDATE"
                                            name="ENDTIMEDATE"
                                            placeholder=""
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleWEEKSTATUS">
                                            WEEK STATUS
                                            </Label>
                                            <Input
                                            id="exampleWEEKSTATUS"
                                            name="WEEKSTATUS"
                                            placeholder=""
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleBATCHTITLE">
                                            BATCH TITLE
                                            </Label>
                                            <Input
                                            id="exampleBATCHTITLE"
                                            name="BATCHTITLE"
                                            placeholder=""
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <CardTitle tag="h4" style={{marginTop: "0px"}}>BATCH AVAILABILITY</CardTitle>
                                <Row>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Label for="exampleCOURSEFEE">
                                                CLASS DAYS
                                            </Label>
                                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                                <div className="slect_checkbox_btn">	
                                                    <input type="checkbox" value="Monday" id="Monday" name="SelectBatchDays" />
                                                    <label for="Monday">Monday</label>	
                                                </div>
                                                <div className="slect_checkbox_btn">	
                                                    <input type="checkbox" value="Tuesday" id="Tuesday" name="SelectBatchDays" />
                                                    <label for="Tuesday">Tuesday</label>	
                                                </div>
                                                <div className="slect_checkbox_btn">	
                                                    <input type="checkbox" value="Wednesday" id="Wednesday" name="SelectBatchDays" />
                                                    <label for="Wednesday">Wednesday</label>	
                                                </div>
                                                <div className="slect_checkbox_btn">	
                                                    <input type="checkbox" value="Thursday" id="Thursday" name="SelectBatchDays" />
                                                    <label for="Thursday">Thursday</label>	
                                                </div>
                                                <div className="slect_checkbox_btn">	
                                                    <input type="checkbox" value="Friday" id="Friday" name="SelectBatchDays" />
                                                    <label for="Friday">Friday</label>	
                                                </div>
                                                <div className="slect_checkbox_btn">	
                                                    <input type="checkbox" value="Saturday" id="Saturday" name="SelectBatchDays" />
                                                    <label for="Saturday">Saturday</label>	
                                                </div>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                                <CardTitle tag="h4" style={{marginTop: "0px"}}>PLEASE ENTER YOUR NAME</CardTitle>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCREATEDBY">
                                                CREATED BY
                                            </Label>
                                            <Input
                                            id="exampleCREATEDBY"
                                            name="CREATEDBY"
                                            placeholder="admin@brain4ce.com"
                                            type="email"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="text-muted" style={{padding: "15px 15px 15px 15px"}}>
                    <div className="" style={{padding: "20px", display: "flex", justifyContent: "center"}}>
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

export default CreateBatch;
import React, { useState } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
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

function MyEnquiries() {
    const[isOpen , setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
  return (
    <>
      <div className="content myenquiries">
        <Row>
            <Col md="12">
                <div className="my_enquiry_main_nav">
                    <div className="my_enquiry_nav">
                        <div className="search_box_body">
                            <input className="search_box" type={"text"} placeholder="Search" />
                        </div>
                        <div className="new_enq_btn">
                            <button type="button" class="btn btn-primary" onClick={() => openModal()}>New Enquiry</button>
                        </div>
                    </div>
                    <div>
                        <p>Showing 5 course enquiries</p>
                    </div>
                </div>
                <Card>
                <CardHeader>
                    <CardTitle tag="p">Plan for your active batches</CardTitle>
                </CardHeader>
                <CardBody>
                    <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>SNo.</th>
                            <th>Phone Number</th>
                            <th>Student Name</th>
                            <th>Email Id</th>
                            <th>Course Name</th>
                            <th>Course Price</th>
                            <th>Enquiry Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>8880184735</td>
                            <td>Kundan Kumar</td>
                            <td>Kundan.Kumar@edureka.com</td>
                            <td>Big Data</td>
                            <td>INR 21000</td>
                            <td>Save Order</td>
                            <td> 
                                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", maxWidth: "200px"}}>
                                    {/* <button type="button" class="btn btn-outline-primary">Select a Batch</button> */}
                                    <Button color="primary" outline>Select a Batch</Button>
                                    <Button color="primary" outline>Invoice</Button>
                                    {/* <button type="button" class="btn btn-outline-primary">Invoice</button> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>8880184735</td>
                            <td>Kundan Kumar</td>
                            <td>Kundan.Kumar@edureka.com</td>
                            <td>Big Data</td>
                            <td>INR 21000</td>
                            <td>Save Order</td>
                            <td> 
                                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", maxWidth: "200px"}}>
                                    {/* <button type="button" class="btn btn-outline-primary">Select a Batch</button> */}
                                    <Button color="primary" outline>Select a Batch</Button>
                                    <Button color="primary" outline>Invoice</Button>
                                    {/* <button type="button" class="btn btn-outline-primary">Invoice</button> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>8880184735</td>
                            <td>Kundan Kumar</td>
                            <td>Kundan.Kumar@edureka.com</td>
                            <td>Big Data</td>
                            <td>INR 21000</td>
                            <td>Save Order</td>
                            <td> 
                                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center",maxWidth: "200px"}}>
                                    {/* <button type="button" class="btn btn-outline-primary">Select a Batch</button> */}
                                    <Button color="primary" outline>Select a Batch</Button>
                                    <Button color="primary" outline>Invoice</Button>
                                    {/* <button type="button" class="btn btn-outline-primary">Invoice</button> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>8880184735</td>
                            <td>Kundan Kumar</td>
                            <td>Kundan.Kumar@edureka.com</td>
                            <td>Big Data</td>
                            <td>INR 21000</td>
                            <td>Save Order</td>
                            <td> 
                                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center",maxWidth: "200px"}}>
                                    {/* <button type="button" class="btn btn-outline-primary">Select a Batch</button> */}
                                    <Button color="primary" outline>Select a Batch</Button>
                                    <Button color="primary" outline>Invoice</Button>
                                    {/* <button type="button" class="btn btn-outline-primary">Invoice</button> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>8880184735</td>
                            <td>Kundan Kumar</td>
                            <td>Kundan.Kumar@edureka.com</td>
                            <td>Big Data</td>
                            <td>INR 21000</td>
                            <td>Save Order</td>
                            <td> 
                                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center",maxWidth: "200px"}}>
                                    {/* <button type="button" class="btn btn-outline-primary">Select a Batch</button> */}
                                    <Button color="primary" outline>Select a Batch</Button>
                                    <Button color="primary" outline>Invoice</Button>
                                    {/* <button type="button" class="btn btn-outline-primary">Invoice</button> */}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    </Table>
                </CardBody>
                </Card>
            </Col>
        </Row>
      </div>
        <Modal centered fullscreen isOpen={isOpen} size="lg" style={{minHeight: "calc(100% - 0rem)"}}>
            <ModalBody style={{padding : "0px"}}>
                <div className="" style={{padding: "20px"}}>
                    <div onClick={() => setIsOpen(!isOpen)} style={{cursor: "pointer", position: "absolute", top: "10px", right: "10px"}}><i className="nc-icon nc-simple-remove" /></div>
                    <div>
                        <h5>User Enquiry Form</h5>
                    </div>
                    <div>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">
                                    Select
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
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                        Name
                                        </Label>
                                        <Input
                                        id="exampleEmail"
                                        name="text"
                                        placeholder="with a placeholder"
                                        type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleNumber">
                                        Phone Number
                                        </Label>
                                        <Input
                                        id="exampleNumber"
                                        name="number"
                                        placeholder="number placeholder"
                                        type="number"
                                        />
                                        {/* <InputGroup>
                                            <ButtonDropdown
                                            toggle={function noRefCheck(){}}
                                            >
                                                <DropdownToggle caret>
                                                    Button Dropdown
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>
                                                    Header
                                                    </DropdownItem>
                                                    <DropdownItem disabled>
                                                    Action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                    Another Action
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                    Another Action
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                            <Input
                                                id="exampleNumber"
                                                name="number"
                                                placeholder="number placeholder"
                                                type="number"
                                            />
                                        </InputGroup> */}
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                        Email Id
                                        </Label>
                                        <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="with a placeholder"
                                        type="email"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div style={{display: "flex", justifyContent: "end"}}>
                        <Button color="primary" outline style={{marginRight: "10px"}}>Save Enquiry & collect payment</Button>
                        {' '}
                        <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
                            Save Enquiry
                        </Button>
                    </div>
                </div>
            </ModalBody>
        </Modal>


        <Modal centered fullscreen isOpen={false} size="lg">
            <ModalBody style={{padding : "0px"}}>
                <div className="" style={{padding: "20px"}}>
                    <div onClick={() => setIsOpen(!isOpen)} style={{cursor: "pointer", position: "absolute", top: "10px", right: "10px"}}><i className="nc-icon nc-simple-remove" /></div>
                    <div>
                        <h5>Order Info</h5>
                    </div>
                    <div style={{padding: "10px", backgroundColor: "#ececff"}}>
                        <div>
                            <p style={{marginBottom: "5px", fontSize: "10px"}}>New enquiry for</p>
                            <h6 style={{fontSize: "12px"}}>Full-stack web development internship program( ₹ <span>21000</span>)</h6>
                        </div>
                        <div>
                            <Row>
                                <Col md={4}>
                                    <p style={{marginBottom: "5px", fontSize: "10px"}}>Name</p>
                                    <h6 style={{fontSize: "12px"}}>Kundan kumar </h6>
                                </Col>
                                <Col md={4}>
                                    <p style={{marginBottom: "5px", fontSize: "10px"}}>Phone Number</p>
                                    <h6 style={{fontSize: "12px"}}>+91 8880184735</h6>
                                </Col>
                                <Col md={4}>
                                    <p style={{marginBottom: "5px", fontSize: "10px"}}>Email Id</p>
                                    <h6 style={{fontSize: "12px"}}>kundan.kumar@edureka.com</h6>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleNumber">
                                            Flat Price <span style={{fontSize: "8px"}}>(includeding GST)</span>
                                        </Label>
                                        <Input
                                        id="exampleNumber"
                                        name="number"
                                        placeholder="number placeholder"
                                        type="number"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div style={{display: "flex", justifyContent: "end"}}>
                        <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
                        Save & collect payment
                        </Button>
                    </div>
                </div>
            </ModalBody>
            
        </Modal>

        <Modal centered fullscreen isOpen={false} size="lg">
            <ModalBody style={{padding : "0px"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "400px"}}>
                    <img alt="..." className="userIcon" src={require("assets/img/loader.gif").default}  />
                    <p>Payment in Process</p>
                </div>
            </ModalBody>
            
        </Modal>

        <Modal centered fullscreen isOpen={false} size="lg">
            <ModalBody style={{padding : "0px"}}>
                <div className="" style={{padding: "20px", minHeight: "400px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <div onClick={() => setIsOpen(!isOpen)} style={{cursor: "pointer", position: "absolute", top: "10px", right: "10px"}}><i className="nc-icon nc-simple-remove" /></div>

                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <img alt="..." className="userIcon" src={require("assets/img/success.png").default}  style={{width: "60px"}}/>
                        <h6 style={{marginTop: "10px"}}>Payment recieved successfully</h6>
                    </div>

                    <div style={{display: "flex", justifyContent: "end"}}>
                        <Button color="primary" outline>Invoice</Button>
                        <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
                           Select a Batch
                        </Button>
                    </div>
                </div>
            </ModalBody>
        </Modal>

        <Modal centered fullscreen isOpen={false} size="lg">
            <ModalBody style={{padding : "0px"}}>
                <div className="" style={{padding: "20px", minHeight: "400px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <div onClick={() => setIsOpen(!isOpen)} style={{cursor: "pointer", position: "absolute", top: "10px", right: "10px"}}><i className="nc-icon nc-simple-remove" /></div>

                    <div className="slect_radio_btn">	
                        <input type="radio" value="None" id="checkbox1" name="radio" />
                        <label for="checkbox1">Normal Checkbox</label>	
                    </div>

                    <div className="slect_radio_btn">
                        <input type="radio" value="None" id="checkbox2" name="radio" />
                        <label for="checkbox2">Normal Checkbox</label>
                    </div>

                    <div style={{display: "flex", justifyContent: "end"}}>
                        <Button color="primary" outline>Invoice</Button>
                        <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
                           Select a Batch
                        </Button>
                    </div>
                </div>
            </ModalBody>
        </Modal>

        <Modal centered fullscreen isOpen={false} size="lg">
            <ModalBody style={{padding : "0px"}}>
                <div className="" style={{padding: "20px", minHeight: "400px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <div onClick={() => setIsOpen(!isOpen)} style={{cursor: "pointer", position: "absolute", top: "10px", right: "10px"}}><i className="nc-icon nc-simple-remove" /></div>

                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <img alt="..." className="userIcon" src={require("assets/img/success.png").default}  style={{width: "60px"}}/>
                        <h6 style={{marginTop: "10px"}}>Batch Assigned successfully</h6>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    </>
  );
}

export default MyEnquiries;
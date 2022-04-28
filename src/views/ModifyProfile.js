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

function ModifyProfile() {
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


                                    {/* <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleHREmailID">
                                            HR - Email IDs
                                            </Label>
                                            <Input
                                            id="exampleHREmailID"
                                            name="HREmailID"
                                            placeholder="valid email id(xyz@abc.com)"
                                            type="email"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCCEmailIds">
                                            CC Email Ids
                                            </Label>
                                            <Input
                                            id="exampleCCEmailIds"
                                            name="CCEmailIds"
                                            placeholder="valid email id(example@email.com)"
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleEnrollTemplates">
                                            Enroll Templates
                                            </Label>
                                            <Input
                                            id="exampleEnrollTemplates"
                                            name="EnrollTemplates"
                                            placeholder="Enter Enroll Template"
                                            type="email"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleAllowedEmailDomains">
                                            Allowed Email Domains
                                            </Label>
                                            <Input
                                            id="exampleAllowedEmailDomains"
                                            name="AllowedEmailDomains"
                                            placeholder="test1.co,tech.edureka.in,edureka.co,parkar.cons,yopmail.com"
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="examplePaymentWidgetText">
                                            Payment Widget Text
                                            </Label>
                                            <Input
                                            id="examplePaymentWidgetText"
                                            name="PaymentWidgetText"
                                            placeholder="Payment Widget Text"
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col> */}

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleSelectStatus">
                                            Status
                                            </Label>
                                            <Input id="exampleSelectStatus" name="select" type="select" >
                                                <option>
                                                    Active
                                                </option>
                                                <option>
                                                    Inactive
                                                </option>
                                                <option>
                                                    Disabled
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    {/* <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleSupportemail">
                                            Support email
                                            </Label>
                                            <Input
                                            id="exampleSupportemail"
                                            name="Supportemail"
                                            placeholder="Support email"
                                            type="email"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleSupportphoneno">
                                            Support phone no.
                                            </Label>
                                            <Input
                                            id="exampleSupportphoneno"
                                            name="Supportphoneno"
                                            placeholder="Support email"
                                            type="number"
                                            />
                                        </FormGroup>
                                    </Col> */}



                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCenterManagerEmail">
                                            Center Manager Email
                                            </Label>
                                            <Input
                                            id="exampleCenterManagerEmail"
                                            name="CenterManagerEmail"
                                            placeholder="Center Manager Email"
                                            type="email"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCenterPhoneNo">
                                            Center Phone No.
                                            </Label>
                                            <Input
                                            id="exampleCenterPhoneNo"
                                            name="CenterPhoneNo"
                                            placeholder="Center Phone No."
                                            type="number"
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleStateName">
                                            State Name
                                            </Label>
                                            <Input
                                            id="exampleStateName"
                                            name="StateName"
                                            placeholder="State Name"
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCityName">
                                            City Name
                                            </Label>
                                            <Input
                                            id="exampleCityName"
                                            name="CityName"
                                            placeholder="City Name"
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>


                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="examplePinCode">
                                            Pin Code
                                            </Label>
                                            <Input
                                            id="examplePinCode"
                                            name="PinCode"
                                            placeholder="Pin Code"
                                            type="number"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCenterAddress">
                                            Center Address
                                            </Label>
                                            <Input
                                            id="exampleCenterAddress"
                                            name="CenterAddress"
                                            placeholder="Center Address"
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleDeviceID">
                                            Device ID
                                            </Label>
                                            <Input
                                            id="exampleDeviceID"
                                            name="DeviceID"
                                            placeholder="POS Device ID"
                                            type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
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

export default ModifyProfile;
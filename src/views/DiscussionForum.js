import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import {AiTwotoneLock} from "react-icons/ai";

function DiscussionForum() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="p">Plan for your active batches</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Active Batches Title</th>
                      <th>Day 1</th>
                      <th>Day 1</th>
                      <th>Next Unit Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AWS_Java_Esenctial_Devlopment_Auto_Gen_14_04_2022_597865688</td>
                      <td>Day 1</td>
                      <td>Day 1</td>
                      <td> 
                            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center",}}>
                                <span><AiTwotoneLock/>Locked</span> 
                                <span>
                                    <div>Unlock Date & Time</div>
                                    <div>
                                    <input type="date" />
                                    </div>
                                </span>
                                <span style={{color: "#51cbce", fontSize: "14px", fontWeight: "600"}}>Unlocke Module</span> 
                            </div>
                        </td>
                    </tr>
                    <tr>
                      <td>AWS_Java_Esenctial_Devlopment_Auto_Gen_01_04_2022_565688</td>
                      <td>Day 1</td>
                      <td>Day 1</td>
                      <td>
                          <div style={{display: "flex", justifyContent: "space-around", alignItems: "center",}}>
                                <span><AiTwotoneLock/>Locked</span> 
                                <span>
                                    <div>Unlock Date & Time</div>
                                    <div>
                                    <input type="date" />
                                    </div>
                                </span>
                                <span style={{color: "#51cbce", fontSize: "14px", fontWeight: "600"}}>Unlocke Module</span> 
                            </div></td>
                    </tr>
                    <tr>
                      <td>AWS_Java_Esenctial_Devlopment_Auto_Gen_14_04_2022_597865dfsgdsdsfsaa</td>
                      <td>Day 1</td>
                      <td>Day 1</td>
                      <td>
                          <div style={{display: "flex", justifyContent: "space-around", alignItems: "center",}}>
                                <span><AiTwotoneLock/>Locked</span> 
                                <span>
                                    <div>Unlock Date & Time</div>
                                    <div>
                                    <input type="date" />
                                    </div>
                                </span>
                                <span style={{color: "#51cbce", fontSize: "14px", fontWeight: "600"}}>Unlocke Module</span> 
                            </div></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DiscussionForum;
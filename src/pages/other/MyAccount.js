import PropTypes from "prop-types";
import React, { useState, useEffect, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card, { CardBody } from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "layouts/LayoutOne";
import Breadcrumb from "wrappers/breadcrumb/Breadcrumb";
import axios from 'axios';
import { cardActionAreaClasses } from "@material-ui/core";

const MyAccount = ({ location }) => {
  const [user, setUser] = useState([])
  const [password, setPassword] = useState('')
  const [newpassword, setNewpassword] = useState('')
  const [newpasswordCheck, setNewpasswordCheck] = useState('')


  useEffect(() => {
    axios.get("http://localhost:8080/usr/detail/" + JSON.parse(localStorage.getItem("user")).usrNo,)
      .then(({ data }) => setUser(data))
      .catch((error) => {
        alert('실패')
        throw error;
      })
  }, [])

  // useState는 저장하는 공간 (axios랑 아무런 관련 X)

  const del = () => {
    axios({
      url: 'http://localhost:8080/usr/delete/' + JSON.parse(localStorage.getItem("user")).usrNo,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefeg..'
      },
      data: { usrNo: JSON.parse(localStorage.getItem("user")).usrNo }

    }).then((res) => {
      alert(`회원삭제 완료`)
      localStorage.removeItem("user")
      localStorage.removeItem("token")
    }
    )
      .catch((err) => {
        alert(`error`)
        throw err

      })

  }



  const { pathname } = location;
  return (
    <>
      {user ? (<>
        <MetaTags>
          <title>Flone | My Account</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
          My Account
      </BreadcrumbsItem>
        <LayoutOne headerTop="visible">
          {/* breadcrumb */}
          <Breadcrumb />
          <div className="myaccount-area pb-80 pt-100">
            <div className="container">
              <div className="row">
                <div className="ml-auto mr-auto col-lg-9">
                  <div className="myaccount-wrapper">
                    <Accordion defaultActiveKey="0">
                      <Card className="single-my-account mb-20">
                        <Card.Header className="panel-heading">
                          <Accordion.Toggle variant="link" eventKey="0">
                            <h3 className="panel-title">
                              <span>1 .</span> 회원정보 수정{" "}
                            </h3>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="myaccount-info-wrapper">
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Name</label>
                                    <input placeholder={user.usrNo} type="text" />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>UserId</label>
                                    <input placeholder={user.username} type="text" />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Email</label>
                                    <input placeholder={user.usrEmail} type="email" />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Telephone</label>
                                    <input placeholder={user.usrPhone} type="text" />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>City</label>
                                    <input placeholder={user.usrAddr} type="text" />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Gender</label>
                                    <input placeholder={user.usrGender} type="text" />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Age</label>
                                    <input type="text" />
                                  </div>
                                </div>

                              </div>

                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">Edit</button>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card className="single-my-account mb-20">
                        <Card.Header className="panel-heading">
                          <Accordion.Toggle variant="link" eventKey="1">
                            <h3 className="panel-title">
                              <span>2 .</span> 비밀번호 변경
                          </h3>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <div className="myaccount-info-wrapper">
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>현재 비밀번호</label>
                                    <input name="password" type="password" />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>변경할 비밀번호</label>
                                    <input type="password" />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>비밀번호 확인</label>
                                    <input type="password" />
                                  </div>
                                </div>
                              </div>
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">Continue</button>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card className="single-my-account mb-20">
                        <Card.Header className="panel-heading">
                          <Accordion.Toggle variant="link" eventKey="2">
                            <h3 className="panel-title" onClick={del}>
                              <span>3 .</span> 회원 탈퇴{" "}
                            </h3>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <div className="myaccount-info-wrapper">
                              <div className="entries-wrapper">
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="entries-info text-center">
                                      <p>회원 탈퇴</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="entries-edit-delete text-center">
                                      <button>Delete</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card className="single-my-account mb-20">
                        <Card.Header className="panel-heading">
                          <Accordion.Toggle variant="link" eventKey="3">
                            <h3 className="panel-title">
                              <span>4 .</span> Order list{" "}
                            </h3>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            <div className="myaccount-info-wrapper">
                              <div className="account-info-wrapper">
                                <h4>Order list</h4>
                              </div>

                              <div className="entries-wrapper">
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="entries-info text-center">
                                      <div >
                                        <div>

                                        </div>
                                        <div>

                                        </div>
                                        <div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="entries-edit-delete text-center">
                                      <button className="edit">교환/환불</button>
                                      <button>Delete</button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">목록 보러가기</button>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </>) : 'c'}
    </>
  );
};

MyAccount.propTypes = {
  location: PropTypes.object
};

export default MyAccount;

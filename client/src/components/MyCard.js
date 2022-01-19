
import React from 'react';
import '.././App.css'
import Cart from '../data/imges/cart.png'
import { Table, Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-grid-system';
// import { Card, CardHeader, CardTitle, CardSubtitle, CardActions, CardContent } from "@react-md/card"
import Card from 'react-bootstrap/Card'
import { Text } from "@react-md/typography"
import { Link } from 'react-router-dom';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle
// } from 'reactstrap';
import pic from '../data/imges/bg4.jpg'
import { divide } from 'lodash';
function MyCard({ list }) {


    return (

        <Row xs={6} md={2} className="menuList">
            {list && list.map((item) => (
                <div className=' productLine w-100 d-flex row rtl  mb-3  justify-content-around align-items-center pr-1 pl-1 ml-0 pb-1 pt-1' >

                    <div className='productName font-weight-bold text-end col-4'> {item.name} </div>
                    <div className='amountOption font-weight-bold col-2 pb-1 pt-1 pl-0' style={{ fontSize: '12px', width: 'fit-content' }}>
                        <div >בחר אפשרות:</div>
                        <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                            <option selected> 1 יחידה</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
                    <div className='price font-weight-bold col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 &#8362; </div>
                    <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-center' style={{ width: 'fit-content' }}>+<div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1' style={{ fontSize: '13px' }}>1</div>-</div>
                    <div className='addToCart col-3 bg-black text-white align-items-center d-flex h6 pb-1 pt-1 mb-0' style={{ height: 'fit-content', width: 'fit-content' }}><img style={{
                        height: '17px',
                        marginLeft: '5px'
                    }} src={Cart} />הוספה לסל</div>

                </div>



                // <Col xs={6} sm={4} md={3} className="card-style ">
                //     <Card Style="height:335px"  >
                //         <Card.Img variant="top" src={pic} Style="height:40%" />
                //         <Card.Body Style="height:60%">
                //             <Card.Title>{item.name}</Card.Title>
                //             <Card.Text>
                //                 {item.description}
                //             </Card.Text>
                //             <Button>add to cart</Button>
                //         </Card.Body>
                //     </Card>

                // </Col>
            ))}

        </Row>





        // <div>
        //     <h1>{product.name}</h1>
        //     <p> {product.description}</p>
        // </div>



    );
}

export default MyCard;
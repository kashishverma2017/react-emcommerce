import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: {
                items1 : {
                    name: "shoes",
                    price: "$12"
                },
                item2 : {
                    name: "men",
                    price: "$0"
                },
                item3 :{
                    name: "hat",
                    price: "$25"
                },
                item4 : {
                    name: "shorts",
                    price: "$55"
                } 
                
            }
        
        }
    }
    render() {
        return (
            <div>
                <div className="w3-main w3-content w3-padding" style={{maxWidth:'1200px', marginTop:'100px'}}>
                    <div className="w3-row-padding w3-padding-16 w3-center" id="food">
                        <div className="w3-quarter">
                            {this.state.products.map(function(object,i){ 
                            return <div className="card">
                                <h2>Product Card </h2>
                                <img src="jeans3.jpg" alt="Denim Jeans" style={{width:'100%'}} />

                                <h1>Tailored Jeans</h1>
                                <p className="price">$19.99</p>
                                <p>Some text about the jeans..</p>
                                <p><button>Add to Cart</button></p>
                            </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
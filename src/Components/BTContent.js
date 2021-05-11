import React, { Component } from 'react'
import "../StyleBTKinh/style.css"
export default class BTContent extends Component {

    styleBackground = {
        backgroundImage : "url(../img/glassesImage/background.jpg)",
        backgroundSize : "cover"
    }

    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];


    state = {
        imgSrc: "./img/glassesImage/v1.png",
        name: "GUCCI G8850U",
        
    }

    changeGlass = (id, name) => {
        this.setState({
            imgSrc: `./img/glassesImage/v${id}.png`,
            name: `${name}`,
        })

    }

    renderProduct = () => {
        let arrTagJSX = this.arrProduct.map((product, index) => {
            return <div className="col-2 ">
                <div className="product" key={index}>

                    <img className="img-fluid border border-primary" src={product.url} alt="{123}" onClick={() => {
                        this.changeGlass(product.id, product.name, product.desc)
                    }} />
                </div>
            </div>


        });
        return arrTagJSX;
    }

    

    render() {
        return (
            <div style={this.styleBackground}>
                <div className="row pt-5 w-100">
                    <div className="col-6">
                        <div className="card text-white w-50 float-right mr-5">
                            <img className="card-img-top" src="./img/glassesImage/model.jpg" alt="123" />
                            <img className="imgGlass" src={this.state.imgSrc} alt="123" />

                            <div className="card-body">
                                <h4 className="card-title">{this.state.name}</h4>
                                <p className="card-text">Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="card text-white w-50 ml-5">
                            <img className="card-img-top" src="./img/glassesImage/model.jpg" alt="123" />

                        </div>
                    </div>
                </div>
                <div className="container mt-5 bg-white" id="matKinh" >
                    <div className="row p-3">
                        {this.renderProduct()}
                    </div>



                </div>


            </div>

        )
    }
}

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/card";
import { useEffect, useState } from "react";
import axios from "axios";
import './home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        try {
            const data = await axios.get(
                "https://ecommerce-api-dummy-a441c517136b.herokuapp.com/v1/api/products"
            )
            console.log(data, "from axios");
            console.log(data.data, "datanya");
            setProducts(data.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return ( 
        <div className="container">
            {/* navbar */}
            <Navbar />

            {/* (main body) */}
            <main>
                <section className="header">
                    <h2>Products</h2>
                    <div className="input">
                        <input type="text" name="search" id="search" />
                    </div>
                </section>

                <section className="prod">
                    {/* card product */}
                    {products.map((p) => {
                        return (
                            <Card 
                                key = {p.id}
                                imgProd = {p.image}
                                price = {p.price}
                                name = {p.name}
                                id = {p.id}
                            />
                        );
                    })}
                </section>
            </main>
        </div>
    );
}

export default Home;
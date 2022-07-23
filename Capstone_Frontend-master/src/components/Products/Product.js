import React, { Component } from "react";
import Header from "../../common/header/Header";
import SortSelect from "./SortSelect";
import Toggle from "./Toggle";
import ProductCard from "./ProductCard";

export default class Product extends Component {
    render() {
        return (
            <div>
                <Header />
                <Toggle />
                <SortSelect />
                <ProductCard />
            </div>
        )
    }

}
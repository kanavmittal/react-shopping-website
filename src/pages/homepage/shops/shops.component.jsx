import { render } from '@testing-library/react';
import React from 'react';
import Shop_Data from "./shop.data.js";
import CollectionPreview from "../../../components/preview-collection/preview-collection.component.jsx"
class ShopsPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: Shop_Data
        };
    }
    render() {
        const {collections}=this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                    ))
                }
            </div>
        ); 
    }
}
export default ShopsPage; 
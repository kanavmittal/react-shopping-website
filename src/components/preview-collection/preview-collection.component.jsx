import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((items, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps}></CollectionItem>
                ))
            }
        </div>
    </div>
);
export default CollectionPreview;
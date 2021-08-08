import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='px-20 mx-auto'>
            <h1 className="font-sans font-bold text-4xl py-8 text-black">{title}</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 w-full">
                {
                    items.filter((item, idx) => idx < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item}></CollectionItem>
                        ))
                }
            </div>
        </div>
    )
};
export default CollectionPreview;
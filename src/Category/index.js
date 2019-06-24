import React from 'react';

const Category = (props) => {
    return (
        <div>
            {props.match.params.categoryid}
        </div>
    );
};

export default Category;

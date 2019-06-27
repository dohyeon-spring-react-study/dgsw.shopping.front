import React from 'react';
import CommentList from "./CommentList";

const Comment = (props) => {
    return (
        <div>
            {props.items.map(item => <CommentList key={item.id} comment={item}/>)}
        </div>
    );
}

export default Comment;
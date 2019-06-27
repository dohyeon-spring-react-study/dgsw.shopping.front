import React, {Component} from 'react';

const CommentList = (props) => {

    let {comment} = props;
    let created = new Date(comment.created);
    return (
        <div className="ddiv">
            <div>
                {comment.useraccount}
            </div>
            <div>
                {comment.content}
            </div>
            <div>
                {created.getFullYear()}/
                {created.getMonth() + 1}/
                {created.getDate()}
            </div>
        </div>
    );
}

export default CommentList;
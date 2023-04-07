import React from 'react'

export default function Posting({ posting, deletePosting, editPosting, updatePosting, postingImageRef, postingNameRef }) {

    function delete_posting() {
        deletePosting(posting.id)
    }

    function edit_posting() {
        editPosting(posting.id)
    }

    function handleEditPosting() {
        updatePosting(posting.id)
    }

    return (
        posting.edit ?
        <div className="container">
            <div className="new_post">
            <textarea defaultValue={posting.text} ref={postingNameRef} />
            <input defaultValue={posting.image} type="url" ref={postingImageRef} /><br></br><br></br>
            <button className="btn btn-primary" onClick={handleEditPosting}>Post</button>
            </div>
        </div> :
        <div className="container">
            <div className="new_post">
                {posting.text} <br></br><br></br>
                <img src={posting.image} width="100" alt="picture" /><br></br><br></br>
                <button className="btn btn-warning" onClick={edit_posting}>Edit</button>&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={delete_posting}>Delete</button>
            </div>
        </div>
    )
}

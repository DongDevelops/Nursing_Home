import React from 'react'
import Posting from './Posting'

export default function PostingList({ postings, deletePosting, editPosting, updatePosting, postingImageRef, postingNameRef }) {
    return (
        postings.map(posting => {
            return <Posting key={posting.id} updatePosting={updatePosting} postingImageRef={postingImageRef} postingNameRef={postingNameRef} posting={posting} deletePosting={deletePosting} editPosting={editPosting} />
        })
    )
}

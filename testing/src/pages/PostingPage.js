import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar'
import '../App.css';
import PostingList from './PostingList'
import uuidv4 from 'uuid/v4'
import Pagination from '../components/Pagination';

const LOCAL_STORAGE_KEY = 'postingApp.postings'

export default function PostingPage() {

  const [postings, setPostings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const postingNameRef = useRef()
  const postingImageRef = useRef()

  useEffect(() => {
    const storedPostings = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedPostings) setPostings(storedPostings)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(postings))
  }, [postings])


  function editPosting(id) {
    const newPostings = [...postings]
    const selectedPosting = newPostings.find(posting => posting.id === id)
    selectedPosting.edit = !selectedPosting.edit
    setPostings(newPostings)
  }

  function deletePosting(id) {
    const newPostings = postings.filter(posting => posting.id !== id);
    setPostings(newPostings)
  }

  function updatePosting(id) {
    const text = postingNameRef.current.value
    const image = postingImageRef.current.value
    const newPostings = [...postings]
    const selectedPosting = newPostings.find(posting => posting.id === id)
    selectedPosting.edit = !selectedPosting.edit
    selectedPosting.text = text
    selectedPosting.image = image
    setPostings(newPostings)
  }
  

  function handleAddPosting(e) {
    const text = postingNameRef.current.value
    const image = postingImageRef.current.value
    if (text === '') return
    if (image === '') return
    setPostings(prevPostings => {
      return [...prevPostings, { id: uuidv4(), text: text, image: image, edit: false }] 
    })
    postingNameRef.current.value = null
    postingImageRef.current.value = null
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postings.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <div class="container">
        <div class="new_post">
          <h3>New Post</h3>
          <br></br>
            <textarea placeholder="글 입력" ref={postingNameRef} />
            <input placeholder="이미지 url 입력" type="url" ref={postingImageRef} /><br></br><br></br>
            <button class="btn btn-primary" onClick={handleAddPosting}>Post</button>
        </div>
      </div>

      <h3>&nbsp;&nbsp;&nbsp;&nbsp;Posted postings</h3>
      <PostingList postings={currentPosts} updatePosting={updatePosting} postingImageRef={postingImageRef} postingNameRef={postingNameRef} deletePosting={deletePosting} editPosting={editPosting} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPosts={postings.length} postsPerPage={postsPerPage} />
    </div>
  )
}



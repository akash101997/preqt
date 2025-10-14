"use client"
import Styles from './PostSection/postSection.module.css'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import CommentSection from './CommentSection/CommentSection'
import { showErrorToast, showSuccessToast } from '../../components/ToastProvider'
import ImageSlide from './ImageSlide'


const 
PostDetails = ({slug}) => {

  const [selectedOption, setSelectedOption] = useState(null)
  const [hasVoted, setHasVoted] = useState(false)
  // const [showDot, setShowDot] = useState(false);
  const [posts, setPosts] = useState([])
  const [dotId, setDotId] = useState(null);
   const [comments, setComments] = useState([])
const [ commentonPost, setCommentonPost] = useState("")
 const [ refetch, setRefetch] = useState(false)
 const [ currentUser, setCurrentUser] = useState(Cookies.get('investorName'))
 const [isLoading, setIsLoading] = useState(true)

  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to calculate time remaining for poll
  const getTimeRemaining = (expiresAt) => {
    if (!expiresAt) return 'Poll ended';
    
    const expiryDate = new Date(expiresAt);
    const now = currentTime;
    
    if (isNaN(expiryDate.getTime())) return 'Invalid date';
    
    const timeDiff = expiryDate.getTime() - now.getTime();
    
    if (timeDiff <= 0) return 'Poll ended';
    
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    if (hours > 0) {
      return `${hours}hrs ${minutes}mins left`;
    } else if (minutes > 0) {
      return `${minutes}mins ${seconds}s left`;
    } else {
      return `${seconds}s left`;
    }
  };
  // Function to format timestamp
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';

    const date = new Date(timestamp);

    // Check if date is valid
    if (isNaN(date.getTime())) return '';

    // Format: "12:30 PM · Apr 21, 2021"
    const timeOptions = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };

    const dateOptions = {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    };

    const time = date.toLocaleTimeString('en-US', timeOptions);
    const dateStr = date.toLocaleDateString('en-US', dateOptions);

    return `${time} · ${dateStr}`;
  };
  // const toggleDot = (id) => {
  //   // setShowDot(!showDot);
  //   setDotId(id);
  // };

  const pollData = [
    { id: 1, label: 'Option #1', votes: 2969, percentage: 97 },
    { id: 2, label: 'Option #2', votes: 92, percentage: 3 },
    { id: 3, label: 'Option #3', votes: 122, percentage: 4 },
    { id: 4, label: 'Option #4', votes: 122, percentage: 4 }
  ]

  const totalVotes = pollData.reduce((sum, option) => sum + option.votes, 0)

  const handleVote = (optionId) => {
    if (!hasVoted) {
      setSelectedOption(optionId)
      // setHasVoted(true)
    }
  }

  const handleLike = async (e, id) => {
    e.stopPropagation();
    // Find the post and update UI optimistically
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex === -1) return;

    const currentPost = posts[postIndex];
    const isCurrentlyLiked = currentPost.isLiked;
    
    // Update UI immediately (optimistic update)
    const updatedPosts = [...posts];
    updatedPosts[postIndex] = {
      ...currentPost,
      isLiked: !isCurrentlyLiked,
      likesCount: isCurrentlyLiked ? currentPost.likesCount - 1 : currentPost.likesCount + 1
    };
    setPosts(updatedPosts);

    try {
      // Hit the API
      const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}/admin/api/community/posts/${id}/like`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('accessToken')}`,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          postId: id,
          userId: Cookies.get('investorId')
        })
      });
      
      const data = await response.json();
      console.log('Like API response:', data);
      
      // If API call fails, revert the optimistic update
      if (!response.ok) {
        const revertedPosts = [...posts];
        revertedPosts[postIndex] = {
          ...currentPost,
          isLiked: isCurrentlyLiked,
          likesCount: currentPost.likesCount
        };
        setPosts(revertedPosts);
        console.error('Like failed:', data);
      }
    } catch (error) {
      // If API call fails, revert the optimistic update
      const revertedPosts = [...posts];
      revertedPosts[postIndex] = {
        ...currentPost,
        isLiked: isCurrentlyLiked,
        likesCount: currentPost.likesCount
      };
      setPosts(revertedPosts);
      console.error('Like error:', error);
    }
  }

  const handleComment = async (e, id) => {
    e.stopPropagation();
      const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}/admin/api/community/posts/${id}/comments`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('accessToken')}`
      },
      method: 'POST',
      body: JSON.stringify({
        postId: id,
        userId: Cookies.get('investorId'),
        content: "Keep it Up!"
      })
    })
    const data = await response.json()
    console.log(data)
    console.log(id)
  }

        const handleShare = async (e, id) => {
    e.stopPropagation();
    const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}/admin/api/community/posts/${id}/share`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('accessToken')}`
      }
    })
    const data = await response.json()
    console.log(data)
    console.log(id)
  }

    const VoteForPoll = async (e, id, postId) => {
      e.stopPropagation();
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}/admin/api/community/polls/${postId}/vote`, {
          headers: {
            'Authorization': `Bearer ${Cookies.get('accessToken')}`,
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            userId: Cookies.get('investorId'),
            optionId: id
          })
        });
        
        const data = await response.json();
        console.log('Vote API response:', data);
        
        if (response.ok && data.message !== "Poll expired") {
          // Update UI optimistically
          setSelectedOption(id);
          setHasVoted(true);
          
          // Show success message
          showSuccessToast('Vote recorded successfully!');
          
          // Refresh posts to get updated vote counts
          getAllPosts();
        } else {
          console.log('Showing error toast:', data.message);
          showErrorToast(data.message || 'Vote failed');
        }
      } catch (error) {
        console.error('Vote error:', error);
        showErrorToast('Network error: Unable to vote');
      }
    }

 const getAllComments = async (postId) => {
    if(!postId) return;
    try {
      console.log('Fetching comments for postId:', postId)
   
      const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}/admin/api/community/posts/${postId}/comments`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('accessToken')}`
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log("Comments API response:", data)
      
      // Handle different response structures
      let commentsData = []
      if (data.data?.comments) {
        commentsData = data.data.comments
      } else if (data.comments) {
        commentsData = data.comments
      } else if (Array.isArray(data.data)) {
        commentsData = data.data
      } else if (Array.isArray(data)) {
        commentsData = data
      }
      
      console.log("Setting comments:", commentsData)
      setComments(commentsData)
      
    } catch (error) {
      console.error('Network Error:', error)
      showErrorToast('Network error: Unable to fetch comments')
    }
 }

 useEffect(() => {

    getAllPosts()
    setRefetch(false)
 
 }, [refetch])

  // Update current time every second for poll countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [])

    // Function to submit a new comment
  const submitComment = async (postId) => {
    if (!commentonPost.trim()) {
      showErrorToast('Please enter a comment')
      return
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}/admin/api/community/posts/${postId}/comment`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Cookies.get('accessToken')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: commentonPost.trim(),
          postId: postId,
          userId: Cookies.get('investorId')
        })
      })

      const data = await response.json()
      console.log('Comment submission response:', data)

      if (response.ok) {
        showSuccessToast('Comment added successfully!')
        setCommentonPost('') // Clear the input
        
        // Refresh comments to show the new one
        console.log('Refreshing comments for postId:', postId)
        await getAllComments(postId)
        
        // Also refresh the main post data to update comment count
        await getAllPosts()
        
        // Trigger refetch for CommentSection
        setRefetch(!refetch)
      } else {
        showErrorToast(data.message || 'Failed to add comment')
      }
    } catch (error) {
      console.error('Error submitting comment:', error)
      showErrorToast('Network error: Unable to submit comment')
    }
  }

  // Function to handle Enter key press
  const handleKeyPress = (e, postId) => {
    if (e.key === 'Enter') {
      submitComment(postId)
    }
  }





  const getAllPosts = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}admin/api/community/posts/slug/${slug}`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('accessToken')}`
        }
      })
      const data = await response.json()
      console.log('API Response:', data)
      
      if (response.ok && data.data.status === 200) {
        setPosts(data.data.data)
        getAllComments(data.data.data[0].id)
      } else if (data.data.status === 404) {
        console.error('Post not found:', data.message)
        showErrorToast('Post not found')
        setPosts(null)
      } else {
        console.error('API Error:', data)
        showErrorToast(data.message || 'Failed to fetch post')
        setPosts(null)
      }
    } catch (error) {
      console.error('Network Error:', error)
      showErrorToast('Network error: Unable to fetch post')
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    if (slug) {
      getAllPosts()
    }
  }, [slug])


  return (
    <>
      {isLoading ? (
        <div className={Styles.postsMainContainer2}>
          <div className={Styles.IndividualPostContainer}>
            <p className={Styles.timeContent}>Loading post…</p>
          </div>
        </div>
      ) : !posts || posts === null ? (
<div className={Styles.pageNotFoundContainer}>
<div className={Styles.pageNotFoundContent}>
<div className={Styles.pageNotFoundIcon}>
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40" r="40" fill="url(#gradient)" />
<path d="M25 25L55 55M55 25L25 55" stroke="white" strokeWidth="3" strokeLinecap="round"/>
<defs>
<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#FFF2D0" />
<stop offset="100%" stopColor="#8E6B0F" />
</linearGradient>
</defs>
</svg>
</div>
<h1 className={Styles.pageNotFoundTitle}>Post Not Found</h1>
<p className={Styles.pageNotFoundDescription}>
The post you're looking for doesn't exist or may have been removed.
</p>

</div>
</div>
) : (
        <div className={Styles.postsMainContainer3}>
         
      {posts.map((post) => (
        <div key={post.id} className={Styles.postDetailsContainer}>
          {post.type === 'poll' ? (
            <div className={`${Styles.IndividualPostContainer} ${Styles.postsMainContainer}`}>
              <div className={Styles.votingContainer2}>

                {/* voting timer container */}
                <article className={Styles.votingDescription}>
                  <div className={Styles.logoAndTime}>
                    {/* logo */}
                    <article className={Styles.preqtLogoContainer}>
                      <img src="/assets/pictures/preqtLogo.svg" alt="" className={Styles.logoImage} />
                      <p className={Styles.PreqtLogoHeading}>Preqt</p>
                    </article>

                    {/* time */}
                    <article className={Styles.TimeContainer}>
                      <div className={Styles.timerClockAndHoursLeft}>
                        <img src="/assets/pictures/timerClock.svg" alt="" />
                        <p className={Styles.HoursLeft}>{getTimeRemaining(post?.pollExpiresAt)}</p>
                      </div>
                      <div className={Styles.timeContent}>{formatTimestamp(post?.createdAt)}</div>
                    </article>
                  </div>
                </article>

                {/* voting options */}
                <article className={Styles.votingQuestionWithOptions}>
                  <div className={Styles.VotingQuestion}>
                    <p className={Styles.Question}>{post?.pollQuestion}</p>
                  </div>

                  <section>
                    {/* option buttons */}
                    <div></div>

                    {/* vote count div */}
                    <div className={Styles.pollContainer}>
                      {post?.pollOptions?.map((option) => (
                        <div
                          key={option.id}
                          className={`${Styles.pollOption} ${(selectedOption === option.id || option?.isVoted) ? Styles.selected : ''
                            } ${hasVoted ? Styles.voted : ''}`}
                          onClick={(e) => VoteForPoll(e,option.id, post?.id)}
                        >
                          <div className={Styles.optionContent}>
                            <div className={Styles.radioButton}>
                              <input
                                type="radio"
                                id={`option-${option.id}`}
                                name="poll"
                                checked={selectedOption === option.id || !!option?.isVoted}
                                  onChange={(e) => VoteForPoll(e,option.id, post?.id)}
                                disabled={hasVoted}
                              />
                              <span className={Styles.customRadio}></span>
                            </div>

                            <label htmlFor={`option-${option.id}`} className={Styles.optionLabel}>
                              {option.optionText}
                            </label>

                            <span className={Styles.percentage}>
                              {option.votesPercent}%
                            </span>
                          </div>

                          <div
                            className={Styles.progressBar}
                            style={{ width: `${option?.votesPercent ?? 0}%` }}
                          ></div>
                        </div>
                      ))}

                      <div className={Styles.pollFooter}>
                        <span className={Styles.votingText}>Vote now and make your voice heard!</span>
                        <span className={Styles.totalVotes}>{post?.totalVotes?.toLocaleString()} votes</span>
                      </div>
                    </div>
                  </section>


                </article>


                {/* like comment and share */}
                <div className={Styles.LCScontainer}>

                  {/* like and Comment  */}
                  <div className={Styles.likeAndComment}>
                    {/* like */}
                     <div className={Styles.likeContainer} onClick={(e) => handleLike(e,post?.id)}>
                       <img 
                         src={post?.isLiked ? "/assets/pictures/liked.svg" : "/assets/pictures/like.svg"} 
                         alt="" 
                         style={{ 
                           opacity: post?.isLiked ? 1 : 0.7,
                         
                           padding: post?.isLiked ? '2px' : '0px'
                         }}
                       />
                       <p className={Styles.likesCount} style={{ 
                         color: post?.isLiked ? '#64748B' : '#64748B' 
                       }}>
                         {post?.likesCount} Likes
                       </p>
                     </div>

                    {/* comment */}
                    <div className={Styles.likeContainer} onClick={(e) => handleComment(e,post?.id)}>
                      <img src="/assets/pictures/comment.svg" alt="" />
                      <p className={Styles.likesCount}>{post?.commentsCount} comments</p>
                    </div>
                  </div>

                  {/* share */}
                  <div className={Styles.likeContainer} onClick={(e) => handleShare(e,post?.id)}>
                    <img src="/assets/pictures/share-logo.svg" alt="" />
                    <p className={Styles.likesCount}>Share</p>
                  </div>
                </div>

              </div>
            </div>

          ) : (
            <div className={`${Styles.IndividualPostContainer} ${Styles.postsMainContainer}`}>

              <div>



                <div className={Styles.logoAndTime}>
                  {/* logo */}
                  <article className={Styles.preqtLogoContainer}>
                    <img src="/assets/pictures/preqtLogo.svg" alt="" className={Styles.logoImage} />
                    <p className={Styles.PreqtLogoHeading}>{post?.title}</p>
                  </article>

                  {/* time */}
                  <p className={Styles.timeContent}>{formatTimestamp(post?.createdAt)}</p>
                </div>

                <div className={Styles.postsAndDescriptionContainer}>
                  <p className={Styles.postDescription}>{post?.content}</p>
                  <div style={{width: '100%', maxHeight: '400px'}}>
                  <ImageSlide images={post?.mediaUrl} />
                  </div>
                  {/* <Image
                    src="/assets/pictures/preqtCandidImage.png"
                    alt="Post image"
                    className={Styles.postImage}
                    width={628}
                    height={400}
                  /> */}
                </div>
                {/* like comment and share */}
                <div className={Styles.LCScontainer}>

                  {/* like and Comment  */}
                  <div className={Styles.likeAndComment}>
                    {/* like */}
                     <div className={Styles.likeContainer} onClick={(e) => handleLike(e,post?.id)}>
                       <img 
                          src={post?.isLiked ? "/assets/pictures/liked.svg" : "/assets/pictures/like.svg"} 
                         alt="" 
                         style={{ 
                           filter: post?.isLiked ? 'none' : 'none',
                           opacity: post?.isLiked ? 1 : 0.7
                         }}
                       />
                       <p className={Styles.likesCount} style={{ 
                         color: post?.isLiked ? '#64748B' : '#64748B' 
                       }}>
                         {post?.likesCount} Likes
                       </p>
                     </div>

                    {/* comment */}
                    <div className={Styles.likeContainer} onClick={(e) => handleComment(e,post?.id)}>
                      <img src="/assets/pictures/comment.svg" alt="" />
                      <p className={Styles.likesCount}>{post?.commentsCount} comments</p>
                    </div>
                  </div>

                  {/* share */}
                  <div className={Styles.likeContainer} onClick={(e) => handleShare(e,post?.id)}>
                    <img src="/assets/pictures/share-logo.svg" alt="" />
                    <p className={Styles.likesCount}>Share</p>
                  </div>
                </div>
              </div>

            </div>
          )}

              <div className={Styles.totalComments}>
              {comments.length || 0} Comments

                  <div className={Styles.inputcommentcontainer}>
                      <span className={Styles.nameInitial}>
                          AB
                      </span>
                       <input 
                         type="text" 
                         value={commentonPost} 
                         placeholder='Add a comment...' 
                         className={Styles.inputcomment}  
                         onChange={(e) => setCommentonPost(e.target.value)}
                         onKeyPress={(e) => handleKeyPress(e, post?.id)}
                       />
                       <button 
                         className={Styles.submitCommentBtn}
                         onClick={() => submitComment(post?.id)}
                         disabled={!commentonPost.trim()}
                       >
                         Post
                       </button>
                  </div>
</div>


{comments.length > 0 ? (
    <CommentSection
      postId={post?.id}
      commentsCount={post?.commentsCount}
      comments={comments}
      refetch={refetch}
      setRefetch={setRefetch}
    />
    ):(
    <div className={Styles.noCommentsContainer}>
    <p className={Styles.noCommentsText}>No comments yet</p>
    </div>
)}


        </div>





      ))}

        </div>
      )}
    </>
  )
}

export default PostDetails;
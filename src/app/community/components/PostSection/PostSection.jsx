"use client"
import Styles from './postSection.module.css'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { showErrorToast, showSuccessToast } from '../../../components/ToastProvider'
import { useRouter } from 'next/navigation'
import ImageSlide from '../ImageSlide'
const PostSection = () => {

  const [selectedOption, setSelectedOption] = useState(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [isVoting, setIsVoting] = useState(false)
    // const [showDot, setShowDot] = useState(false);
    const [posts, setPosts] = useState([])
  const [dotId, setDotId] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showCommentInput, setShowCommentInput] = useState(null); // Track which post has comment input open
  const [commentonPost, setCommentonPost] = useState(""); // Comment input value
  const router = useRouter();
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
  // const toggleDot = (id) => {
  //   // setShowDot(!showDot);
  //   setDotId(id);
  // };

   const viewPostDetails = (slug) => {
    router.push(`/community/${slug}`)
   }



  const handleVote = (optionId) => {
    if (!hasVoted) {
      setSelectedOption(optionId)
      // setHasVoted(true)
    }
  }

  const handleLike = async (e, id) => {
    // Find the post and update UI optimistically
    e.stopPropagation();
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
    // e.stopPropagation();
    
    // Toggle comment input for this post
    if (showCommentInput === id) {
      setShowCommentInput(null); // Close if already open
      setCommentonPost(""); // Clear input
    } else {
      // setShowCommentInput(id); // Open for this post
    }
  }

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
        setShowCommentInput(null) // Close the input
        // Refresh posts to update comment count
        getAllPosts()
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
    e.stopPropagation();
    if (e.key === 'Enter') {
      submitComment(postId)
    }
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
      
      // Prevent multiple rapid calls
      if (hasVoted || isVoting) {
        console.log('Already voted or voting in progress, ignoring click');
        return;
      }
      
      setIsVoting(true);
      
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
      } finally {
        setIsVoting(false);
      }
    }







   const getAllPosts = async () => {
      try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}/admin/api/community/posts?page=1&pageSize=10&startDate=2025-09-01T00:00:00.000Z&endDate=2025-09-05T23:59:59.999Z`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('accessToken')}`
      }
    })
    const data = await response.json()
    console.log(data)
    setPosts(data.data)
  } catch (error) {
    console.error('Error fetching posts:', error);
    showErrorToast('Failed to fetch posts');
  }
  }
  
  useEffect(() => {
    getAllPosts()
  }, [])

  // Update current time every second for poll countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [])


  return (
    <div className={Styles.postsMainContainer}>

        {posts.map((post) => (
        <div key={post.id}>
          {post.type === 'poll' ? (
            <div className={Styles.IndividualPostContainer} onClick={() => viewPostDetails(post.slug)}>
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
                  className={`${Styles.pollOption} ${selectedOption === option.id ? Styles.selected : ''
                    } ${hasVoted ? Styles.voted : ''}`}
                >
                          <div className={`${Styles.optionContent} ${isVoting ? Styles.disabled : ''}`}>
                    <div className={Styles.radioButton}>
                      <input
                        type="radio"
                        id={`option-${option.id}`}
                        name="poll"
                        checked={selectedOption === option.id}
                                onChange={(e) => VoteForPoll(e, option.id, post?.id)}
                                disabled={hasVoted || isVoting}
                      />
                      <span className={Styles.customRadio}>
                                {/* <div className={Styles.dot}></div> */}
                                {/* <div onClick={()=>toggleDot(option.id)}>w</div> */}
                                <span className={`${Styles.dot} ${selectedOption === option.id ? Styles.show : ""}`} ></span>
                      </span>
                    </div>

                            <label 
                              htmlFor={`option-${option.id}`} 
                              className={Styles.optionLabel}
                              onClick={(e) => {
                                e.stopPropagation();
                                // Let the input onChange handle the voting
                              }}
                            >
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
          <div className={`${Styles.likeAndComment} ${Styles.likeAndCommentContainer}`} >
            {/* like */}
            <div className={`${Styles.likeAndComment} `} >
            <div className={Styles.likeContainer} onClick={(e) => handleLike(e, post?.id)}>
                       <img 
                         src={post?.isLiked ? "/assets/pictures/liked.svg" : "/assets/pictures/like.svg"} 
                         alt="" 
                         style={{ 
                           background: post?.isLiked ? 'linear-gradient(90deg, #FFD89E 0%, #B88609 100%)' : 'none',
                           opacity: post?.isLiked ? 1 : 0.7,
                           borderRadius: post?.isLiked ? '4px' : '0px',
                           padding: post?.isLiked ? '2px' : '0px'
                         }}
                       />
                       <p className={Styles.likesCount} style={{ 
                         color: post?.isLiked ? '#007bff' : 'inherit' 
                       }}>
                         {post?.likesCount} Likes
                       </p>
            </div>

            {/* comment */}
                    <div className={Styles.likeContainer} onClick={(e) => handleComment(e, post?.id)}>
              <img src="/assets/pictures/comment.svg" alt="" />
                      <p className={Styles.likesCount}>{post?.commentsCount} comments</p>
                    </div>
              </div>
             

               {/* Comment Input - Only show when comment button is clicked */}
         

          </div>

          {/* share */}
                  <div className={Styles.likeContainer} onClick={(e) => handleShare(e, post?.id)}>
            <img src="/assets/pictures/share-logo.svg" alt="" />
            <p className={Styles.likesCount}>Share</p>
          </div>
         </div>
 
         {showCommentInput === post?.id && (
                 <div className={Styles.totalComments} onClick={(e) => e.stopPropagation()}>
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
                          onClick={(e) => e.stopPropagation()}
                        />
                        <button 
                          className={Styles.submitCommentBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            submitComment(post?.id);
                          }}
                          disabled={!commentonPost.trim()}
                        >
                          Post
                        </button>
            </div>
                 </div>
               )}

      </div>
            </div>

          ) : (
            <div className={Styles.IndividualPostContainer} onClick={() => viewPostDetails(post.slug)}>

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
                     <div className={Styles.likeContainer} onClick={(e) => handleLike(e, post?.id)}>
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
                    <div className={Styles.likeContainer} onClick={(e) => handleComment(e, post?.id)}>
              <img src="/assets/pictures/comment.svg" alt="" />
                      <p className={Styles.likesCount}>{post?.commentsCount} comments</p>
            </div>
          </div>

          {/* share */}
                  <div className={Styles.likeContainer} onClick={(e) => handleShare(e, post?.id)}>
            <img src="/assets/pictures/share-logo.svg" alt="" />
            <p className={Styles.likesCount}>Share</p>
        </div>
      </div>

                {/* Comment Input - Only show when comment button is clicked */}
                {showCommentInput === post?.id && (
                  <div className={Styles.totalComments} onClick={(e) => e.stopPropagation()}>
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
                           onClick={(e) => e.stopPropagation()}
                         />
                         <button 
                           className={Styles.submitCommentBtn}
                           onClick={(e) => {
                             e.stopPropagation();
                             submitComment(post?.id);
                           }}
                           disabled={!commentonPost.trim()}
                         >
                           Post
                         </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}



        </div>





      ))}




    </div>
  )
}

export default PostSection;
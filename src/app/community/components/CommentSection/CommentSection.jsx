"use client"
import React, { useState } from 'react'
import Styles from './commentSection.module.css'
import { formatTimestamp } from '../../utils/dateUtils'
import Cookies from 'js-cookie'
import { showErrorToast, showSuccessToast } from '../../../components/ToastProvider'

const CommentSection = ({ postId, commentsCount, comments = [], comment, refetch, setRefetch }) => {
  const [commentonPost, setCommentonPost] = useState("")
  const [commentsList, setCommentsList] = useState(comments)
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState("")

  const userId = Cookies.get('investorId')
  console.log('CommentSection rendered with:', { postId, commentsCount, comments, commentsList })




 

  const handleReply = (commentId) => {
    setReplyingTo(commentId)
    setReplyText("")
  }

  const submitReply = async (commentId) => {
    if (!replyText.trim()) {
      showErrorToast('Please enter a reply')
      return
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}/admin/api/community/posts/${postId}/comments/${commentId}/reply`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Cookies.get('accessToken')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: replyText.trim(),
         
        })
      })

      const data = await response.json()
      console.log('Reply submission response:', data)

      if (response.ok) {
        showSuccessToast('Reply added successfully!')
        setReplyText('')
        setReplyingTo(null)
        setRefetch(!refetch) // Refresh comments
      } else {
        showErrorToast(data.message || 'Failed to add reply')
      }
    } catch (error) {
      console.error('Error submitting reply:', error)
      showErrorToast('Network error: Unable to submit reply')
    }
  }

  const cancelReply = () => {
    setReplyingTo(null)
    setReplyText('')
  }

  const handleLike = (commentId) => {
    console.log('Like comment:', commentId)
    // TODO: Implement like functionality
    showSuccessToast('Like functionality coming soon!')
  }

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}/admin/api/community/comments/${commentId}`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('accessToken')}`
        },
        method: 'DELETE'
      })

      const data = await response.json()
      console.log('Delete comment response:', data)

      if (response.ok) {
        // Remove comment from list on success
        setCommentsList(prev => prev.filter(comment => comment.id !== commentId))
        showSuccessToast('Comment deleted successfully')
        console.log('Comment deleted successfully')
        setRefetch(!refetch)
      } else {
        console.error('Failed to delete comment:', data.message)
        showErrorToast('Failed to delete comment')
      }
    } catch (error) {
      console.error('Error deleting comment:', error)
    }
  }

  const getInitials = (name) => {
    if (!name || typeof name !== 'string') {
      return 'N/A'
    }
    
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }


   
  return (
    <div className={Styles.commentSection}>
     
      
    
      {/* Comments List */}
      <div className={Styles.commentList}>
        {commentsList.map((comment) => (
          <CommentItem 
            key={comment.id}
            comment={comment}
            userId={userId}
            replyingTo={replyingTo}
            replyText={replyText}
            setReplyText={setReplyText}
            setReplyingTo={setReplyingTo}
            handleReply={handleReply}
            handleDeleteComment={handleDeleteComment}
            submitReply={submitReply}
            cancelReply={cancelReply}
            getInitials={getInitials}
            formatTimestamp={formatTimestamp}
          />
        ))}
      </div>
    </div>
  )
}

// CommentItem component for nested comments
const CommentItem = ({ 
  comment, 
  userId, 
  replyingTo, 
  replyText, 
  setReplyText, 
  setReplyingTo, 
  handleReply, 
  handleDeleteComment, 
  submitReply, 
  cancelReply, 
  getInitials, 
  formatTimestamp 
}) => {
  return (
    <div className={Styles.commentItem}>
      <div className={Styles.commentAvatar}>
        {getInitials(comment?.user_name)}
      </div>
      <div className={Styles.commentContent}>
        <div className={Styles.commentHeader}>
          <span className={Styles.commentAuthor}>{comment.user_name || "N/A"}</span>
          <span className={Styles.commentTime}>
            {formatTimestamp(comment.createdAt)}
          </span>
        </div>
        <div className={Styles.commentText}>
          {comment?.content}
        </div>
        
        <div className={Styles.commentActions}>
          <span className={Styles.commentAction} onClick={() => handleReply(comment.id)}>Reply</span>
          {comment.userId === userId && (
            <span className={Styles.DeleteButton} onClick={() => handleDeleteComment(comment.id)}>
              Delete
            </span>
          )}
        </div>

        {/* Reply Input */}
        {replyingTo === comment.id && (
          <div className={Styles.replyInputContainer}>
            <div className={Styles.userAvatar}>
              {getInitials("Current User")}
            </div>
            <div className={Styles.replyInputWrapper}>
              <input
                type="text"
                value={replyText}
                placeholder="Write a reply..."
                className={Styles.replyInput}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    submitReply(comment.id)
                  }
                }}
              />
              <div className={Styles.replyActions}>
                <button 
                  className={Styles.replyButton}
                  onClick={() => submitReply(comment.id)}
                  disabled={!replyText.trim()}
                >
                  Reply
                </button>
                <button 
                  className={Styles.cancelButton}
                  onClick={cancelReply}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className={Styles.repliesContainer}>
            {comment.replies.map((reply) => (
              <CommentItem 
                key={reply.id}
                comment={reply}
                userId={userId}
                replyingTo={replyingTo}
                replyText={replyText}
                setReplyText={setReplyText}
                setReplyingTo={setReplyingTo}
                handleReply={handleReply}
                handleDeleteComment={handleDeleteComment}
                submitReply={submitReply}
                cancelReply={cancelReply}
                getInitials={getInitials}
                formatTimestamp={formatTimestamp}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentSection

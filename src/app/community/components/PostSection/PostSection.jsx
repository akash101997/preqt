"use client"
import Styles from './postSection.module.css'
import Image from 'next/image'
import React, { useState } from 'react'

const PostSection = () => {

  const [selectedOption, setSelectedOption] = useState(null)
  const [hasVoted, setHasVoted] = useState(false)
    // const [showDot, setShowDot] = useState(false);
const [dotId , setDotId]=useState(null);
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


  return (
    <div className={Styles.postsMainContainer}>
      {/* post 1 */}

      <div className={Styles.IndividualPostContainer}>

        {/* post heading and time */}
        <div className={Styles.logoAndTime}>
          {/* logo */}
          <article className={Styles.preqtLogoContainer}>
            <img src="/assets/pictures/preqtLogo.svg" alt="" className={Styles.logoImage} />
            <p className={Styles.PreqtLogoHeading}>Preqt</p>
          </article>

          {/* time */}
          <p className={Styles.timeContent}>12:30 PM · Apr 21, 2021</p>
        </div>

        {/* post pic and discription */}
        <div className={Styles.postsAndDescriptionContainer}>
          <p className={Styles.postDescription}>It’s Official! Join Us for the Launch of Anthem Bioscience’s IPO with preqt</p>
          <Image
            src="/assets/pictures/preqtCandidImage.png"
            alt="Post image"
            className={Styles.postImage}
            width={628}
            height={400}
          />
        </div>

        {/* like comment and share */}
        <div className={Styles.LCScontainer}>

          {/* like and Comment  */}
          <div className={Styles.likeAndComment}>
            {/* like */}
            <div className={Styles.likeContainer}>
              <img src="/assets/pictures/like.svg" alt="" />
              <p className={Styles.likesCount}>1,260 Likes</p>
            </div>

            {/* comment */}
            <div className={Styles.likeContainer}>
              <img src="/assets/pictures/comment.svg" alt="" />
              <p className={Styles.likesCount}>360 comments</p>
            </div>
          </div>

          {/* share */}
          <div className={Styles.likeContainer}>
            <img src="/assets/pictures/share-logo.svg" alt="" />
            <p className={Styles.likesCount}>Share</p>
          </div>
        </div>
      </div>



      {/* post 2 */}
      <div className={Styles.IndividualPostContainer2}>

        {/* post heading and time */}
        <div className={Styles.logoAndTime}>
          {/* logo */}
          <article className={Styles.preqtLogoContainer}>
            <img src="/assets/pictures/preqtLogo.svg" alt="" className={Styles.logoImage} />
            <p className={Styles.PreqtLogoHeading}>Preqt</p>
          </article>

          {/* time */}
          <p className={Styles.timeContent}>12:30 PM · Apr 21, 2021</p>
        </div>

        {/* post pic and discription */}
        <div className={Styles.postsAndDescriptionContainer}>
          <p className={Styles.postDescription}>It’s Official! Join Us for the Launch of Anthem Bioscience’s IPO with preqt</p>
          <Image
            src="/assets/pictures/preqtCandidImage.png"
            alt="Post image"
            className={Styles.postImage}
            width={628}
            height={400}
          />
        </div>

        {/* like comment and share */}
        <div className={Styles.LCScontainer}>

          {/* like and Comment  */}
          <div className={Styles.likeAndComment}>
            {/* like */}
            <div className={Styles.likeContainer}>
              <img src="/assets/pictures/like.svg" alt="" />
              <p className={Styles.likesCount}>1,260 Likes</p>
            </div>

            {/* comment */}
            <div className={Styles.likeContainer}>
              <img src="/assets/pictures/comment.svg" alt="" />
              <p className={Styles.likesCount}>360 comments</p>
            </div>
          </div>

          {/* share */}
          <div className={Styles.likeContainer}>
            <img src="/assets/pictures/share-logo.svg" alt="" />
            <p className={Styles.likesCount}>Share</p>
          </div>
        </div>
      </div>




      {/* voting options */}
      <div className={Styles.votingContainer}>

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
                <p className={Styles.HoursLeft}>2hrs left</p>
              </div>
              <div className={Styles.timeContent}>12:30 PM · Apr 21, 2021</div>
            </article>
          </div>
        </article>

        {/* voting options */}
        <article className={Styles.votingQuestionWithOptions}>
          <div className={Styles.VotingQuestion}>
            <p className={Styles.Question}>Which metric matters most when evaluating a pre-IPO opportunity?</p>
          </div>

          <section>
            {/* option buttons */}
            <div></div>

            {/* vote count div */}
            <div className={Styles.pollContainer}>
              {pollData.map((option) => (
                <div
                  key={option.id}
                  className={`${Styles.pollOption} ${selectedOption === option.id ? Styles.selected : ''
                    } ${hasVoted ? Styles.voted : ''}`}
                  onClick={() => handleVote(option.id)}
                >
                  <div className={Styles.optionContent}>
                    <div className={Styles.radioButton}>
                      <input
                        type="radio"
                        id={`option-${option.id}`}
                        name="poll"
                        checked={selectedOption === option.id}
                        onChange={() => handleVote(option.id)}
                        disabled={hasVoted}
                      />
                      <span className={Styles.customRadio}>

                        
                      </span>
                    </div>

                    <label htmlFor={`option-${option.id}`} className={Styles.optionLabel}>
                      {option.label}
                    </label>

                    <span className={Styles.percentage}>
                      {option.percentage}%
                    </span>
                  </div>

                  {hasVoted && (
                    <div
                      className={Styles.progressBar}
                      style={{ width: `${option.percentage}%` }}
                    ></div>
                  )}
                </div>
              ))}

              <div className={Styles.pollFooter}>
                <span className={Styles.votingText}>Vote now and make your voice heard!</span>
                <span className={Styles.totalVotes}>{totalVotes.toLocaleString()} votes</span>
              </div>
            </div>
          </section>


        </article>


        {/* like comment and share */}
        <div className={Styles.LCScontainer}>

          {/* like and Comment  */}
          <div className={Styles.likeAndComment}>
            {/* like */}
            <div className={Styles.likeContainer}>
              <img src="/assets/pictures/like.svg" alt="" />
              <p className={Styles.likesCount}>1,260 Likes</p>
            </div>

            {/* comment */}
            <div className={Styles.likeContainer}>
              <img src="/assets/pictures/comment.svg" alt="" />
              <p className={Styles.likesCount}>360 comments</p>
            </div>
          </div>

          {/* share */}
          <div className={Styles.likeContainer}>
            <img src="/assets/pictures/share-logo.svg" alt="" />
            <p className={Styles.likesCount}>Share</p>
          </div>
        </div>

      </div>




      {/* post 3 */}
      <div className={Styles.IndividualPostContainer2}>

        {/* post heading and time */}
        <div className={Styles.logoAndTime}>
          {/* logo */}
          <article className={Styles.preqtLogoContainer}>
            <img src="/assets/pictures/preqtLogo.svg" alt="" className={Styles.logoImage} />
            <p className={Styles.PreqtLogoHeading}>Preqt</p>
          </article>

          {/* time */}
          <p className={Styles.timeContent}>12:30 PM · Apr 21, 2021</p>
        </div>

        {/* post pic and discription */}
        <div className={Styles.postsAndDescriptionContainer}>
          <p className={Styles.postDescription}>SME IPOs Are Heating Up – What’s on Your Radar?
            <br /> <br /> <br />
            At preqt, we’re exploring exclusive pre-IPO deals with strong fundamentals, vetted management, and growth potential — before they hit the market.</p>
          <Image
            src="/assets/pictures/post2.png"
            alt="Post image"
            className={Styles.postImage}
            width={628}
            height={400}
          />
        </div>

        {/* like comment and share */}
        <div className={Styles.LCScontainer}>

          {/* like and Comment  */}
          <div className={Styles.likeAndComment}>
            {/* like */}
            <div className={Styles.likeContainer}>
              <img src="/assets/pictures/like.svg" alt="" />
              <p className={Styles.likesCount}>1,260 Likes</p>
            </div>

            {/* comment */}
            <div className={Styles.likeContainer}>
              <img src="/assets/pictures/comment.svg" alt="" />
              <p className={Styles.likesCount}>360 comments</p>
            </div>
          </div>

          {/* share */}
          <div className={Styles.likeContainer}>
            <img src="/assets/pictures/share-logo.svg" alt="" />
            <p className={Styles.likesCount}>Share</p>
          </div>
        </div>
      </div>

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
                <p className={Styles.HoursLeft}>2hrs left</p>
              </div>
              <div className={Styles.timeContent}>12:30 PM · Apr 21, 2021</div>
            </article>
          </div>
        </article>

        {/* voting options */}
        <article className={Styles.votingQuestionWithOptions}>
          <div className={Styles.VotingQuestion}>
            <p className={Styles.Question}>Which metric matters most when evaluating a pre-IPO opportunity?</p>
          </div>

          <section>
            {/* option buttons */}
            <div></div>

            {/* vote count div */}
            <div className={Styles.pollContainer}>
              {pollData.map((option) => (
                <div
                  key={option.id}
                  className={`${Styles.pollOption} ${selectedOption === option.id ? Styles.selected : ''
                    } ${hasVoted ? Styles.voted : ''}`}
                  onClick={() => handleVote(option.id)}
                >
                  <div className={Styles.optionContent}>
                    <div className={Styles.radioButton}>
                      <input
                        type="radio"
                        id={`option-${option.id}`}
                        name="poll"
                        checked={selectedOption === option.id}
                        onChange={() => handleVote(option.id)}
                        disabled={hasVoted}
                      />
                      <span className={Styles.customRadio}>
                        {/* <div className={Styles.dot}></div> */}
                      {/* <div onClick={()=>toggleDot(option.id)}>w</div> */}
                    <span className={`${Styles.dot} ${selectedOption=== option.id ? Styles.show : ""}`} ></span>
                      </span>
                    </div>

                    <label htmlFor={`option-${option.id}`} className={Styles.optionLabel}>
                      {option.label}
                    </label>

                    <span className={Styles.percentage}>
                      {option.percentage}%
                    </span>
                  </div>

                  {hasVoted && (
                    <div
                      className={Styles.progressBar}
                      style={{ width: `${option.percentage}%` }}
                    ></div>
                  )}
                </div>
              ))}

              <div className={Styles.pollFooter}>
                <span className={Styles.votingText}>Vote now and make your voice heard!</span>
                <span className={Styles.totalVotes}>{totalVotes.toLocaleString()} votes</span>
              </div>
            </div>
          </section>


        </article>


        {/* like comment and share */}
        <div className={Styles.LCScontainer}>

          {/* like and Comment  */}
          <div className={Styles.likeAndComment}>
            {/* like */}
            <div className={Styles.likeContainer}>
              <img src="/assets/pictures/like.svg" alt="" />
              <p className={Styles.likesCount}>1,260 Likes</p>
            </div>

            {/* comment */}
            <div className={Styles.likeContainer}>
              <img src="/assets/pictures/comment.svg" alt="" />
              <p className={Styles.likesCount}>360 comments</p>
            </div>
          </div>

          {/* share */}
          <div className={Styles.likeContainer}>
            <img src="/assets/pictures/share-logo.svg" alt="" />
            <p className={Styles.likesCount}>Share</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default PostSection;
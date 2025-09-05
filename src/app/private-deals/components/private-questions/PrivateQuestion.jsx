'use client';
import styles from './PrivateQuestion.module.css'

const activities = [
  {
    id: 1,
    // logo:"/assets/pictures/ques-ans-user-logo.svg",
    user: "R/uifjdkdsc",
    time: "20 Mar 2021 at 05:15 PM",
    message: "I'm concerned about the security of my funds. How do I know my investment will be safe on your platform?",
    isReply: false,
  },
  {
    id: 2,
    //  logo:"/assets/pictures/ques-ans-user-logo.svg",
    user: "RoadShows",
    time: "20 Mar 2021 at 05:15 PM",
    message: "Our platform is fully compliant with all local and international regulations, ensuring that your investment is both secure and legally protected.",
    isReply: true,
  },
  {
    id: 3,
    //  logo:"/assets/pictures/ques-ans-user-logo.svg",
    user: "Fmmanuel Rodes",
    time: "20 Mar 2021 at 05:15 PM",
    message: "I'm concerned about the security of my funds. How do I know my investment will be safe on your platform?",
    isReply: false,
  },
  {
    id: 4,
    // logo:"/assets/pictures/ques-ans-user-logo.svg",
    user: "RoadShows",
    time: "20 Mar 2021 at 05:15 PM",
    message: "Our platform is fully compliant with all local and international regulations, ensuring that your investment is both secure and legally protected.",
    isReply: true,
  },
];

const PrivateQuestion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headar}>
        <img 
          className={styles.img} 
          src="/assets/pictures/left-arrow-white.svg" 
          alt="" 
          onClick={() => handleQuesAns(false)}
          style={{ cursor: 'pointer' }}
        />
        <div className={styles.imageStack}>
          <>
            <div>
              <img src="/assets/pictures/1.png" alt="" />
              <img src="/assets/pictures/1.png" alt="" />
              <img src="/assets/pictures/1.png" alt="" />
              <img src="/assets/pictures/1.png" alt="" />
            </div>
            <span className={styles.s1}>23 Q&A answered in last 3 days </span>
          </>
          <span className={styles.s2}>
            <img
              src="/assets/pictures/8e3073ca31264b3cb0bd9cb1e07af102b937cb5c.gif"
              alt="gif"
            />
          </span>
        </div>
      </div>
      
      <div className={styles.answerContainer}>
       
        <h3 className={styles.title}>Know what people are talking about</h3>
        <div className={styles.activityList}>
          {activities.map((item) => (
            <div key={item.id} className={styles.activityItem}>
              <div className={`${styles.avatar} ${item.isReply ? styles.replyAvatar : styles.userAvatar}`}>
                {item.user.charAt(0)}
              </div>
              <div>
              <div className={styles.userDetails}>  
                <div className={styles.userName}>{item.user}</div>
                {/* <div className={styles.logo}>{item.logo}</div> */}
                <div className={styles.time}>{item.time}</div></div>
                <div className={styles.message}>{item.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ask_your_ques}>
        <div style={{width:"100%"}}><input type="text" placeholder='Ask Your Question' /></div>
        <div className={styles.img}><img src="/assets/pictures/send-ques-logo.svg" alt="" /></div>
      </div>
      
      <button 
        className={styles.AskAiButton}
        onClick={() => {
          handleAskAI && handleAskAI(true);
        }}
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4688 5.57749L11.071 7.24999C11.74 9.10624 13.2018 10.568 15.058 11.237L16.7305 11.8392C16.8813 11.894 16.8813 12.1077 16.7305 12.1617L15.058 12.764C13.2018 13.433 11.74 14.8947 11.071 16.751L10.4688 18.4235C10.414 18.5742 10.2003 18.5742 10.1463 18.4235L9.54405 16.751C8.87505 14.8947 7.4133 13.433 5.55705 12.764L3.88455 12.1617C3.7338 12.107 3.7338 11.8932 3.88455 11.8392L5.55705 11.237C7.4133 10.568 8.87505 9.10624 9.54405 7.24999L10.1463 5.57749C10.2003 5.42599 10.414 5.42599 10.4688 5.57749Z"
            fill="#C9A74E"
          />
          <path
            d="M17.9973 1.55794L18.3026 2.40469C18.6416 3.34444 19.3818 4.08469 20.3216 4.42369L21.1683 4.72894C21.2448 4.75669 21.2448 4.86469 21.1683 4.89244L20.3216 5.19769C19.3818 5.53669 18.6416 6.27694 18.3026 7.21669L17.9973 8.06344C17.9696 8.13994 17.8616 8.13994 17.8338 8.06344L17.5286 7.21669C17.1896 6.27694 16.4493 5.53669 15.5096 5.19769L14.6628 4.89244C14.5863 4.86469 14.5863 4.75669 14.6628 4.72894L15.5096 4.42369C16.4493 4.08469 17.1896 3.34444 17.5286 2.40469L17.8338 1.55794C17.8616 1.48069 17.9703 1.48069 17.9973 1.55794Z"
            fill="#C9A74E"
          />
          <path
            d="M17.9973 15.9382L18.3026 16.785C18.6416 17.7247 19.3818 18.465 20.3216 18.804L21.1683 19.1092C21.2448 19.137 21.2448 19.245 21.1683 19.2727L20.3216 19.578C19.3818 19.917 18.6416 20.6572 18.3026 21.597L17.9973 22.4437C17.9696 22.5202 17.8616 22.5202 17.8338 22.4437L17.5286 21.597C17.1896 20.6572 16.4493 19.917 15.5096 19.578L14.6628 19.2727C14.5863 19.245 14.5863 19.137 14.6628 19.1092L15.5096 18.804C16.4493 18.465 17.1896 17.7247 17.5286 16.785L17.8338 15.9382C17.8616 15.8617 17.9703 15.8617 17.9973 15.9382Z"
            fill="#C9A74E"
          />
        </svg>
        Ask AI About This Deal
      </button>
    </div>
  );
}

export default PrivateQuestion;
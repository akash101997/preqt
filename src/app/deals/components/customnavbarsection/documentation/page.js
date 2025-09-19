

import styles from './page.module.css'
export default function Documentation({isPrivateDeal}) {

const documents = [
  { name: "DRHP Documents", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
  { name: "Financial Report 2024", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) }, 
  { name: "Financial Report 2023", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
  { name: "Financial Report 2022", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
  { name: "Valuation Report", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
  { name: "Term Sheet", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
];

const Pitchdeck = () => {
  return (
    <div>
      <section className={styles.pitchDeck}>
        <div className={styles.pitchDeckHeader}>
          <h4>Pitch Deck</h4>
        </div>

        <div className={styles.imageContainer}>
          <img src="/deals/pitch-deck-new-img.png" alt="" />

          <div className={styles.overlay}>
            <button className={styles.pitchOverlayBtn}>
              Open in Browser{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_515_15618)">
                  <path
                    d="M11.5555 16H2.66665C1.95431 16 1.28467 15.7226 0.781023 15.2189C0.277378 14.7152 0 14.0456 0 13.3333V4.44444C0 3.73213 0.277409 3.06249 0.781054 2.55884C1.2847 2.0552 1.95434 1.77779 2.66668 1.77779H6.22223C6.71317 1.77779 7.11112 2.17574 7.11112 2.66668C7.11112 3.15763 6.71317 3.55558 6.22223 3.55558H2.66665C2.4292 3.55558 2.20601 3.64805 2.03815 3.81591C1.87029 3.98377 1.77779 4.20699 1.77779 4.44444V13.3333C1.77779 13.5708 1.87026 13.794 2.03815 13.9619C2.20601 14.1297 2.4292 14.2222 2.66665 14.2222H11.5555C11.7929 14.2222 12.0161 14.1297 12.184 13.9618C12.3519 13.794 12.4444 13.5707 12.4444 13.3333V9.77777C12.4444 9.28683 12.8423 8.88891 13.3333 8.88891C13.8242 8.88891 14.2222 9.28686 14.2222 9.77777V13.3333C14.2222 14.0456 13.9448 14.7152 13.4411 15.2189C12.9374 15.7226 12.2678 16 11.5555 16ZM6.22223 10.6666C5.99472 10.6666 5.76724 10.5799 5.59369 10.4063C5.24658 10.0592 5.24658 9.49633 5.59369 9.14921L12.9651 1.77779H9.77777C9.28683 1.77779 8.88891 1.37984 8.88891 0.888894C8.88891 0.397948 9.28683 0 9.77777 0H15.1111C15.234 0 15.3511 0.0249649 15.4576 0.0700819C15.557 0.112125 15.6504 0.173047 15.732 0.252878L15.7321 0.252941C15.7327 0.253531 15.7333 0.254089 15.7338 0.254679C15.734 0.254835 15.7342 0.255021 15.7344 0.255176C15.7348 0.255611 15.7353 0.256077 15.7357 0.256543C15.736 0.256853 15.7363 0.257132 15.7366 0.257443C15.737 0.257785 15.7373 0.258157 15.7376 0.258437C15.7382 0.259058 15.7389 0.25971 15.7395 0.260362C15.7402 0.260983 15.7408 0.261666 15.7415 0.262287C15.7418 0.262597 15.7422 0.263001 15.7424 0.263281C15.7428 0.263591 15.743 0.263871 15.7433 0.264181C15.7438 0.264647 15.7443 0.265082 15.7447 0.265578C15.7449 0.265703 15.7451 0.26592 15.7452 0.266075C15.7458 0.266665 15.7464 0.267255 15.7469 0.267845L15.747 0.267907C15.8268 0.349633 15.8877 0.442972 15.9298 0.542335C15.9749 0.64884 15.9999 0.765901 15.9999 0.888863V6.2222C15.9999 6.71314 15.6019 7.11109 15.1109 7.11109C14.62 7.11109 14.2221 6.71314 14.2221 6.2222V3.03488L6.8506 10.4063C6.67718 10.5799 6.44971 10.6666 6.22223 10.6666Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_515_15618">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};



    return (
        <div className={styles.docWrapper}>
   
    <Pitchdeck/>
   
    

    <div className={isPrivateDeal ? styles.privateContainer: styles.container}>
      {documents.map((doc, idx) => (
        <div 
        key={idx}
         className={styles.item}>
          <span>{doc.name}</span>
          <span>{doc.icon}</span>
         </div>
      ))}


    </div>

        </div>
    )
}
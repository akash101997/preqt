// import styles from "./page.module.css";
// export default function Documentation({ isPrivateDeal }) {


//   const privateFile = "/dealsFile/HVR Solar Deck-preqt.pdf";
//   const publicFile = "/dealsFile/ACML Deck-preqt.pdf";
//   const fileToOpen = isPrivateDeal ? privateFile : publicFile;
//   const fileToDownload = isPrivateDeal ? docprivatefile : docpublicfile;

//   const documents = [
//     {
//       name: "DRHP ",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="25"
//           viewBox="0 0 24 25"
//           fill="none"
//         >
//           {" "}
//           <path
//             d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75"
//             stroke="#B59131"
//             strokeWidth="2"
//             strokeLinecap="round"
//             stroke-linejoin="round"
//           />{" "}
//           <path
//             d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20"
//             stroke="#B59131"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />{" "}
//           <path
//             d="M3 15.75L5 17.75L9 13.75"
//             stroke="#B59131"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />{" "}
//         </svg>
//       ),
//     },
//     {
//       name: "RHP ",
//       // docpublicfile: "",
//       // docprivatefile:"",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="25"
//           viewBox="0 0 24 25"
//           fill="none"
//         >
//           {" "}
//           <path
//             d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75"
//             stroke="#B59131"
//             strokeWidth="2"
//             strokeLinecap="round"
//             stroke-linejoin="round"
//           />{" "}
//           <path
//             d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20"
//             stroke="#B59131"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />{" "}
//           <path
//             d="M3 15.75L5 17.75L9 13.75"
//             stroke="#B59131"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />{" "}
//         </svg>
//       ),
//     },
//     {
//       name: "Financial Report FY’25",
//       docpublicfile:"/dealsFile/Document Financial result 24-25 ACML .pdf",
//       docprivatefile:"/dealsFile/Document Financial result 24-25 HVR.pdf",

//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="25"
//           viewBox="0 0 24 25"
//           fill="none"
//         >
//           {" "}
//           <path
//             d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75"
//             stroke="#B59131"
//             strokeWidth="2"
//             strokeLinecap="round"
//             stroke-linejoin="round"
//           />{" "}
//           <path
//             d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20"
//             stroke="#B59131"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />{" "}
//           <path
//             d="M3 15.75L5 17.75L9 13.75"
//             stroke="#B59131"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />{" "}
//         </svg>
//       ),
//     },
//     {
//       name: "Financial Report FY’24",
//       docpublicfile: "/dealsFile/Document Financial result 23-24 ACML.pdf",
//       docprivatefile:"/dealsFile/Document Financial result 23-24 HVR.pdf",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="25"
//           viewBox="0 0 24 25"
//           fill="none"
//         >
//           {" "}
//           <path
//             d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75"
//             stroke="#B59131"
//             strokeWidth="2"
//             strokeLinecap="round"
//             stroke-linejoin="round"
//           />{" "}
//           <path
//             d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20"
//             stroke="#B59131"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />{" "}
//           <path
//             d="M3 15.75L5 17.75L9 13.75"
//             stroke="#B59131"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />{" "}
//         </svg>
//       ),
//     },
//     {
//       name: "Financial Report FY’23",
//       docpublicfile:"/dealsFile/Document Financial result 22-23 ACML.pdf",
//       docprivatefile:"/dealsFile/Document Financial result 2022-23 HVR.PDF",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="25"
//           viewBox="0 0 24 25"
//           fill="none"
//         >
//           {" "}
//           <path
//             d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75"
//             stroke="#B59131"
//             strokeWidth="2"
//             strokeLinecap="round"
//             stroke-linejoin="round"
//           />{" "}
//           <path
//             d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20"
//             stroke="#B59131"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />{" "}
//           <path
//             d="M3 15.75L5 17.75L9 13.75"
//             stroke="#B59131"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />{" "}
//         </svg>
//       ),
//     },
//     // { name: "Term Sheet", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
//   ];

//   const Pitchdeck = () => {
//     return (
//       <div>
//         <section className={styles.pitchDeck}>
//           <div className={styles.pitchDeckHeader}>
//             <h4>Pitch Deck</h4>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="21"
//               viewBox="0 0 20 21"
//               fill="none"
//             >
//               {" "}
//               <path
//                 d="M14.4444 20.75H3.33331C2.44289 20.75 1.60584 20.4032 0.976279 19.7736C0.346722 19.144 0 18.307 0 17.4166V6.30555C0 5.41516 0.346761 4.57811 0.976318 3.94855C1.60587 3.319 2.44293 2.97224 3.33335 2.97224H7.77778C8.39147 2.97224 8.8889 3.46967 8.8889 4.08335C8.8889 4.69703 8.39147 5.19447 7.77778 5.19447H3.33331C3.03651 5.19447 2.75751 5.31006 2.54769 5.51988C2.33786 5.72971 2.22224 6.00874 2.22224 6.30555V17.4166C2.22224 17.7135 2.33782 17.9924 2.54769 18.2024C2.75751 18.4121 3.03651 18.5278 3.33331 18.5278H14.4444C14.7412 18.5278 15.0202 18.4122 15.23 18.2023C15.4399 17.9924 15.5555 17.7134 15.5555 17.4166V12.9722C15.5555 12.3585 16.0529 11.8611 16.6666 11.8611C17.2803 11.8611 17.7778 12.3586 17.7778 12.9722V17.4166C17.7778 18.307 17.431 19.144 16.8014 19.7737C16.1718 20.4032 15.3347 20.75 14.4444 20.75ZM7.77778 14.0833C7.4934 14.0833 7.20905 13.9748 6.99212 13.7579C6.55822 13.324 6.55822 12.6204 6.99212 12.1865L16.2064 2.97224H12.2222C11.6085 2.97224 11.1111 2.4748 11.1111 1.86112C11.1111 1.24744 11.6085 0.75 12.2222 0.75H18.8889C19.0425 0.75 19.1889 0.781206 19.322 0.837602C19.4463 0.890156 19.563 0.966308 19.665 1.0661L19.6651 1.06618C19.6659 1.06691 19.6666 1.06761 19.6673 1.06835C19.6675 1.06854 19.6678 1.06878 19.6679 1.06897C19.6685 1.06951 19.6691 1.0701 19.6697 1.07068C19.67 1.07107 19.6704 1.07142 19.6708 1.0718C19.6712 1.07223 19.6717 1.0727 19.672 1.07305C19.6728 1.07382 19.6737 1.07464 19.6744 1.07545C19.6752 1.07623 19.6761 1.07708 19.6768 1.07786C19.6773 1.07825 19.6777 1.07875 19.678 1.0791C19.6785 1.07949 19.6788 1.07984 19.6792 1.08023C19.6798 1.08081 19.6803 1.08135 19.6809 1.08197C19.6811 1.08213 19.6813 1.0824 19.6815 1.08259C19.6822 1.08333 19.683 1.08407 19.6837 1.08481L19.6837 1.08488C19.7835 1.18704 19.8597 1.30372 19.9122 1.42792C19.9686 1.56105 19.9998 1.70738 19.9998 1.86108V8.52774C19.9998 9.14143 19.5024 9.63886 18.8887 9.63886C18.275 9.63886 17.7776 9.14143 17.7776 8.52774V4.5436L8.56326 13.7579C8.34648 13.9749 8.06213 14.0833 7.77778 14.0833Z"
//                 fill="#C9A74E"
//               />{" "}
//             </svg>
//           </div>

//           <div className={styles.imageContainer}>
//             {isPrivateDeal ? (
//               <img src="/deals/private-pitch-deck-img.png" />
//             ) : (
//               <img src="/deals/pitch-deck-new-img.png" alt="" />
//             )}

//             <div className={styles.overlay}>
//               <a href={fileToOpen} target="_blank" rel="noopener noreferrer"   style={{textDecoration:"none"}}>
//                 <button className={styles.pitchOverlayBtn}>
//                   Open in Browser{" "}
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_515_15618)">
//                       <path
//                         d="M11.5555 16H2.66665C1.95431 16 1.28467 15.7226 0.781023 15.2189C0.277378 14.7152 0 14.0456 0 13.3333V4.44444C0 3.73213 0.277409 3.06249 0.781054 2.55884C1.2847 2.0552 1.95434 1.77779 2.66668 1.77779H6.22223C6.71317 1.77779 7.11112 2.17574 7.11112 2.66668C7.11112 3.15763 6.71317 3.55558 6.22223 3.55558H2.66665C2.4292 3.55558 2.20601 3.64805 2.03815 3.81591C1.87029 3.98377 1.77779 4.20699 1.77779 4.44444V13.3333C1.77779 13.5708 1.87026 13.794 2.03815 13.9619C2.20601 14.1297 2.4292 14.2222 2.66665 14.2222H11.5555C11.7929 14.2222 12.0161 14.1297 12.184 13.9618C12.3519 13.794 12.4444 13.5707 12.4444 13.3333V9.77777C12.4444 9.28683 12.8423 8.88891 13.3333 8.88891C13.8242 8.88891 14.2222 9.28686 14.2222 9.77777V13.3333C14.2222 14.0456 13.9448 14.7152 13.4411 15.2189C12.9374 15.7226 12.2678 16 11.5555 16ZM6.22223 10.6666C5.99472 10.6666 5.76724 10.5799 5.59369 10.4063C5.24658 10.0592 5.24658 9.49633 5.59369 9.14921L12.9651 1.77779H9.77777C9.28683 1.77779 8.88891 1.37984 8.88891 0.888894C8.88891 0.397948 9.28683 0 9.77777 0H15.1111C15.234 0 15.3511 0.0249649 15.4576 0.0700819C15.557 0.112125 15.6504 0.173047 15.732 0.252878L15.7321 0.252941C15.7327 0.253531 15.7333 0.254089 15.7338 0.254679C15.734 0.254835 15.7342 0.255021 15.7344 0.255176C15.7348 0.255611 15.7353 0.256077 15.7357 0.256543C15.736 0.256853 15.7363 0.257132 15.7366 0.257443C15.737 0.257785 15.7373 0.258157 15.7376 0.258437C15.7382 0.259058 15.7389 0.25971 15.7395 0.260362C15.7402 0.260983 15.7408 0.261666 15.7415 0.262287C15.7418 0.262597 15.7422 0.263001 15.7424 0.263281C15.7428 0.263591 15.743 0.263871 15.7433 0.264181C15.7438 0.264647 15.7443 0.265082 15.7447 0.265578C15.7449 0.265703 15.7451 0.26592 15.7452 0.266075C15.7458 0.266665 15.7464 0.267255 15.7469 0.267845L15.747 0.267907C15.8268 0.349633 15.8877 0.442972 15.9298 0.542335C15.9749 0.64884 15.9999 0.765901 15.9999 0.888863V6.2222C15.9999 6.71314 15.6019 7.11109 15.1109 7.11109C14.62 7.11109 14.2221 6.71314 14.2221 6.2222V3.03488L6.8506 10.4063C6.67718 10.5799 6.44971 10.6666 6.22223 10.6666Z"
//                         fill="white"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_515_15618">
//                         <rect width="16" height="16" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </button>
//               </a>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   };

  
//   return (
//     <div className={styles.docWrapper}>
//       <Pitchdeck />

//       <div
//         className={isPrivateDeal ? styles.privateContainer : styles.container}
//       >
//         {documents.map((doc, idx) => (
//           <div key={idx} className={styles.item}>
//             <span>{doc.name}</span>
//             {/* <span>{doc.icon}</span> */}
//               <a href={fileToDownload} download style={{ textDecoration: "none" }}>
//           {doc.icon}
//         </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import styles from "./page.module.css";

export default function Documentation({ isPrivateDeal }) {
  const privateFile = "/dealsFile/HVR Solar Deck-preqt.pdf";
  const publicFile = "/dealsFile/ACML Deck-preqt.pdf";
  const fileToOpen = isPrivateDeal ? privateFile : publicFile;

  const documents = [
    // {
    //   name: "DRHP",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="25"
    //       viewBox="0 0 24 25"
    //       fill="none"
    //     >
    //       <path
    //         d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75"
    //         stroke="#B59131"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20"
    //         stroke="#B59131"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M3 15.75L5 17.75L9 13.75"
    //         stroke="#B59131"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </svg>
    //   ),
    // },

     ...(!isPrivateDeal
    ? [
        {
          name: "RHP",
          docpublicfile: "/dealsFile/Red Herring Prospectus_Ashwini Container Movers Limited.pdf",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path
                d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75"
                stroke="#B59131"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20"
                stroke="#B59131"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 15.75L5 17.75L9 13.75"
                stroke="#B59131"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
      ]
    : []),
     
    {
      name: "Financial Report FY’25",
      docpublicfile: "/dealsFile/Document Financial result 24-25 ACML .pdf",
      docprivatefile: "/dealsFile/Document Financial result 24-25 HVR.pdf",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75"
            stroke="#B59131"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20"
            stroke="#B59131"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 15.75L5 17.75L9 13.75"
            stroke="#B59131"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    // Add other documents here...

       {
      name: "Financial Report FY’24",
      docpublicfile: "/dealsFile/Document Financial result 23-24 ACML.pdf",
      docprivatefile:"/dealsFile/Document Financial result 23-24 HVR.pdf",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          {" "}
          <path
            d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75"
            stroke="#B59131"
            strokeWidth="2"
            strokeLinecap="round"
            stroke-linejoin="round"
          />{" "}
          <path
            d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20"
            stroke="#B59131"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />{" "}
          <path
            d="M3 15.75L5 17.75L9 13.75"
            stroke="#B59131"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />{" "}
        </svg>
      ),
    },
    {
      name: "Financial Report FY’23",
      docpublicfile:"/dealsFile/Document Financial result 22-23 ACML.pdf",
      docprivatefile:"/dealsFile/Document Financial result 2022-23 HVR.PDF",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          {" "}
          <path
            d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75"
            stroke="#B59131"
            strokeWidth="2"
            strokeLinecap="round"
            stroke-linejoin="round"
          />{" "}
          <path
            d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20"
            stroke="#B59131"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />{" "}
          <path
            d="M3 15.75L5 17.75L9 13.75"
            stroke="#B59131"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />{" "}
        </svg>
      ),
    },
  ];

  const Pitchdeck = () => (
    <section className={styles.pitchDeck}>
      <div className={styles.pitchDeckHeader}>
        <h4>Pitch Deck</h4>
        {/* SVG Icon */}
        

        
      </div>

      <div className={styles.imageContainer}>
        <img
          src={
            isPrivateDeal
              ? "/deals/private-pitch-deck-img.png"
              : "/deals/pitch-deck-new-img.png"
          }
          alt="Pitch Deck"
        />
        <div className={styles.overlay}>
          <a href={fileToOpen} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <button className={styles.pitchOverlayBtn}>
              Open in Browser
            </button>
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <div className={styles.docWrapper}>
      <Pitchdeck />

      <div className={isPrivateDeal ? styles.privateContainer : styles.container}>
        {documents.map((doc, idx) => {
          const fileToDownload = isPrivateDeal ? doc.docprivatefile : doc.docpublicfile;
          return (
            <div key={idx} className={styles.item}>
              <span>{doc.name}</span>
              <a href={fileToDownload} download style={{ textDecoration: "none" }}>
                {doc.icon}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

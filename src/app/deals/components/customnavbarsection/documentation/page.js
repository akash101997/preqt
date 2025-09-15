
import Pitchdeck from '../overview/pitch-deck-section/pitchdeck'
import styles from './page.module.css'
export default function Documentation() {

const documents = [
  { name: "DRHP Documents", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
  { name: "Financial Report 2024", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) }, 
  { name: "Financial Report 2023", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
  { name: "Financial Report 2022", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
  { name: "Valuation Report", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
  { name: "Term Sheet", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M4 22.75H18C18.5304 22.75 19.0391 22.5393 19.4142 22.1642C19.7893 21.7891 20 21.2804 20 20.75V7.75L15 2.75H6C5.46957 2.75 4.96086 2.96071 4.58579 3.33579C4.21071 3.71086 4 4.21957 4 4.75V8.75" stroke="#B59131" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/> <path d="M14 2.75V6.75C14 7.28043 14.2107 7.78914 14.5858 8.16421C14.9609 8.53929 15.4696 8.75 16 8.75H20" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.75L5 17.75L9 13.75" stroke="#B59131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>) },
];

    return (
        <div className={styles.docWrapper}>
    <div className={styles.pitchDeck}>
    <Pitchdeck/>
    </div>
    

    <div className={styles.container}>
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
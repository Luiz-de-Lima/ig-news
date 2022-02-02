import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton(){
    const isUserLoggedTrue=true

    return isUserLoggedTrue ?(
        <button className={styles.signInButton} type='button'>
        <FaGithub color='#04d361'/>
        Luiz de Lima
        <FiX color='#737380' className={styles.closeIcon}/>
    </button>):( 
         <button className={styles.signInButton} type='button'>
         <FaGithub color='#eba417'/>
         Sign with github
     </button>
    )

}
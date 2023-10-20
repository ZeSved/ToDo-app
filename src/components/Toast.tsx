import styles from './styles/Toast.module.css'

export default function Toast({toast}: Toast){
    return (
        <div className={toast ? styles.toast : styles.display}>
            <p>All items have been cleared and the database reset.</p>
        </div>
    )
}

type Toast = {
    toast: boolean
}
import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}>
        <div className={`${styles.border} spinner-border text-primary`} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Loading

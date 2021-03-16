import withLogger from '../../utils/withLogger'
import styles from './CommentItem.module.css'

interface ICommentItemParams {
  data: { [x: string]: any }
  [x: string]: any
}

function CommentItem({ data, ...otherProps }: ICommentItemParams) {
  const { logger } = otherProps
  logger()

  return (
    <div className={styles.comment}>
      <div className={styles.email}>{data.email}</div>
      <div className={styles.name}>
        <p>{data.name}</p>
      </div>
      <div className={styles.body}>
        <p>{data.body}</p>
      </div>
    </div>
  )
}

export default withLogger(CommentItem)

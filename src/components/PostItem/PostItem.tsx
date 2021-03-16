import { Link } from 'react-router-dom'

import withLogger from '../../utils/withLogger'
import CommentItem from '../CommentItem'
import styles from './PostItem.module.css'

interface IPostItemParams {
  data: { [x: string]: any }
  link?: string
  [x: string]: any
}

function PostItem({ data, link, ...otherProps }: IPostItemParams) {
  const { logger } = otherProps
  logger()

  return (
    <div className={styles.post}>
      <div className={styles.user}>{data.user.name}</div>
      <div className={styles.title}>
        <p>{link ? <Link to={link}>{data.title}</Link> : data.title}</p>
      </div>
      <div className={styles.body}>
        <p>{data.body}</p>
      </div>
      {data.comments.map((item: { id?: any; [x: string]: any }) => (
        <CommentItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export default withLogger(PostItem)

import { useState } from 'react'
import withLogger from '../../utils/withLogger'

function Btn({ name = 'Button', ...otherProps }) {
  const { logger } = otherProps
  const [click, setClick] = useState(0)

  logger()

  return (
    <button onClick={() => setClick(prev => prev + 1)}>
      {name} {click}
    </button>
  )
}

export default withLogger(Btn)

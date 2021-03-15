import { useEffect, useRef, useState } from 'react'
import withLogger from '../../utils/withLogger'

interface ISearchPostParams {
  onChange: (text: string) => void
  [x: string]: any
}

function SearchPost({ onChange, ...otherProps }: ISearchPostParams) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { logger } = otherProps
  logger()

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [inputRef])

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div className="search-post">
      <div className="input-group mb-3">
        <input
          type="text"
          value={inputValue}
          ref={inputRef}
          className="form-control"
          placeholder="Filter posts by user"
          aria-label="Filter posts by user"
          onChange={inputChange}
        />
      </div>
    </div>
  )
}

export default withLogger(SearchPost)

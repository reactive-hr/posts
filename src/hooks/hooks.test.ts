import { renderHook } from '@testing-library/react-hooks'
import useFetch from './useFetch'

test('useFetch real api call', async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch('users', 'https://jsonplaceholder.typicode.com/users')
  )

  await waitForNextUpdate()

  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.error).toBeNull()
  expect(result.current.data.length).toBe(10)
})

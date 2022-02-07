import { Box, Text } from '@ds-pack/components'

export default function App() {
  return (
    <Box>
      <form action="/api/form">
        <label>
          Name
          <input id="name-id" name="name-name" type="text" />
        </label>
        <button type="submit">Submit!</button>
      </form>
    </Box>
  )
}

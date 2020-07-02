import App from '../app'
import { Box, Button, ButtonGroup } from '@chakra-ui/core'

export default function () {
  return (
    <App>
      <Box bg='tomato' w='100%' p={4} color='white'>
        T
      </Box>
      <Button variantColor='green'>Button</Button>
      <ButtonGroup spacing={4}>
        <Button variantColor='teal' size='xs'>
          Button
        </Button>
        <Button variantColor='teal' size='sm'>
          Button
        </Button>
        <Button variantColor='teal' size='md'>
          Button
        </Button>
        <Button variantColor='teal' size='lg'>
          Button
        </Button>
      </ButtonGroup>
    </App>
  )
}

import { useState } from 'react'
import { MdAdd, MdQrCode2, MdShortText } from 'react-icons/md'

import AButton from '../common/components/AButton'
import Button from '../common/components/Button'

const HomePage = () => {
  const [isAdding, setIsAdding] = useState(false)

  return <>
    <div className="fixed bottom-4 right-4 flex flex-col-reverse gap-2">
      {isAdding ? <>
        <AButton href="qr-reader">
          <MdQrCode2 className="text-3xl text-purple-100"/>
        </AButton>
        <AButton href="/">
          <MdShortText className="text-3xl text-purple-100"/>
        </AButton>
      </>
      : <Button
          onClick={() => setIsAdding(true)}>
          <MdAdd className="text-3xl text-purple-100"/>
        </Button>
      }
    </div>
  </>
}

export default HomePage

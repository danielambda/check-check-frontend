import { useState } from 'react'
import { MdAdd, MdQrCode2, MdShortText } from 'react-icons/md'

import AButton from '../common/components/AButton'

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
      : <button
          className="rounded-2xl bg-purple-950 p-4"
          onClick={() => setIsAdding(true)}>
          <MdAdd className="text-3xl text-purple-100"/>
        </button>
      }
    </div>
  </>
}

export default HomePage

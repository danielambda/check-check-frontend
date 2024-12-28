import { useState } from 'react'
import { QrReader } from 'react-qr-reader'

const QrReaderPage = () => {
  const [data, setData] = useState('No result')

  return <main className="bg-purple-200">
    <video id="video"/>
    <QrReader
      onResult={(result, error) => {
        if (result !== undefined && result !== null)
          setData(result?.getText())

       if (!!error)
          console.info(error)
      }}
      constraints={{ facingMode: "environment" }}
      videoId="video"
    />
    <p>{data}</p>
  </main>
}

export default QrReaderPage

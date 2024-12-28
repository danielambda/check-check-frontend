import { useState } from 'react'
import { QrReader } from 'react-qr-reader'

const receiptRegExp: RegExp = /t=\d+T\d{4}&s=\d+\.\d{2}&fn=\d+&i=\d+&fp=\d+&n=1/

const QrReaderPage = () => {
  const [scannedData, setScannedData] = useState('No result')
  if (receiptRegExp.test(scannedData))
    return <div className="min-h-10 min-w-10 bg-purple-200">aboba</div>

  return <main className="bg-purple-200">
    <video id="video"/>
    <QrReader
      onResult={(result, error) => {
        if (result !== undefined && result !== null)
          setScannedData(result?.getText())

       if (!!error)
          console.info(error)
      }}
      constraints={{ facingMode: "environment" }}
      videoId="video"
    />
    <p>{scannedData}</p>
  </main>
}

export default QrReaderPage

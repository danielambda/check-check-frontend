import { QrReader } from 'react-qr-reader'

const receiptRegExp: RegExp = /t=\d+T\d{4}&s=\d+\.\d{2}&fn=\d+&i=\d+&fp=\d+&n=1/

const QrReaderPage = () => {
  return <main className="bg-purple-200">
    <video id="video"/>
    <QrReader
      onResult={(result, error) => {
        if (!!error) {
          console.info(error)
          return
        }
        if (result === undefined || result === null)
          return

        const resultText = result?.getText()
        console.log(resultText)
        if (receiptRegExp.test(resultText)) {
          window.open(`/items-selection/${resultText}`, "_self")
        }
      }}
      constraints={{ facingMode: "environment" }}
      videoId="video"
    />
  </main>
}

export default QrReaderPage

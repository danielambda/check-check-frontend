import { useState } from 'react';
import { MdAdd, MdQrCode2, MdShortText } from 'react-icons/md';
import { QrReader } from 'react-qr-reader';

const Header = () =>
  <header className="flex h-16 items-center bg-purple-950">
    <h1 className="ml-4 text-3xl text-purple-100 ">
      Чек-чек
    </h1>
  </header>

const App = () => {
  const [data, setData] = useState('No result');
  const [isAdding, setIsAdding] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  return <>
    <Header />

    <main className="bg-purple-200">
      {isScanning ? <>
        <video id="video"/>
        <QrReader
          onResult={(result, error) => {
            if (result !== undefined && result !== null) {
              setData(result?.getText());
            }

            if (!!error) {
              console.info(error);
            }
         }}
         constraints={{ facingMode: "environment" }}
         videoId="video"
        />
        <p>{data}</p>
      </>
      : <></>}
    </main>

    <div className="fixed bottom-4 right-4 flex flex-col-reverse gap-2">
      {isAdding ? <>
        <button
          className="rounded-2xl bg-purple-950 p-4"
          onClick={() => setIsScanning(true)}>
          <MdQrCode2 className="text-3xl text-purple-100"/>
        </button>
        <button
          className="rounded-2xl bg-purple-950 p-4"
          onClick={() => { setIsAdding(false)
            setIsScanning(false)
            }}>
          <MdShortText className="text-3xl text-purple-100"/>
        </button>
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

export default App;

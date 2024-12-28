import { useEffect, useState } from "react"
import { MdCheck } from "react-icons/md"
import { useParams } from "react-router-dom"
import { BACKEND_URL } from "../../Consts"
import Button from "../common/components/Button"
import { ReceiptData } from "./ReceiptData"
import ReceiptItem from "./ReceiptItem"

const ItemsSelectionPage = () => {
  const { qr } = useParams()
  const [receipt, setReceipt] = useState<ReceiptData | null>(null)
  useEffect(() => {
    fetch(`https://c3da59f4-3a7b-4df3-8181-9112063e191e.mock.pstmn.io/receipts/${qr}`, {
      method: "GET",
    }).then(response => response.json())
      .then(setReceipt)
      .catch(console.error)
  }, [qr])

  const isSelecting = window.location.search === ""
  if (isSelecting)
    return <form>
      <div className="flex flex-col">{
        receipt === null ?
          <div>
            the receipt is loading
          </div>
        : receipt.items.map((item, i) =>
            <ReceiptItem key={i} data={item} index={i} />
          )
      }</div>

      <div className="fixed bottom-4 right-4 flex flex-col-reverse gap-2">
        <Button>
          <MdCheck className="text-3xl text-purple-100"/>
        </Button>
      </div>
    </form>

  const selectedItems = window.location.search
    .substring(1) // remove leading '?'
    .split('&')
    .map(x => x.split('=')[0])
  return <>
    <div className="flex flex-col">{
      receipt === null ?
        <div>
          the receipt is loading
        </div>
        : receipt.items.filter(item => selectedItems.includes(item.name)).map((item, i) =>
          <ReceiptItem isSelected={true} key={i} data={item} index={i} />
        )
    }</div>

    <div className="fixed bottom-4 right-4 flex flex-col-reverse gap-2">
      <Button onClick={() => {
        fetch(`${BACKEND_URL}/receipts`, {
          method: "POST",
          body: JSON.stringify({

          })
        })
        alert("assume the items are added to the storage")
        window.open("/", "_self")
      }}>
        <MdCheck className="text-3xl text-purple-100"/>
      </Button>
    </div>
  </>
}

export default ItemsSelectionPage

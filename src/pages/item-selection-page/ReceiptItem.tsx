import { ReceiptItemData } from "./ReceiptData"

type ReceiptItemProps = {
  data: ReceiptItemData
  index: number
  isSelected?: boolean
}

const ReceiptItem = ({ data, index, isSelected = false }: ReceiptItemProps) => {
  const id = `receipt-item-checkbox-${index}`
  return <div className="p-2 bg-purple-100" >
    <input
      type="checkbox"
      name={data.name}
      id={id}
      className="mr-2"
      defaultChecked={isSelected}
      readOnly={isSelected}
    />
    <label htmlFor={id} className="m-1">{data.name}</label>
    <label htmlFor={id} className="m-1">{data.amount}шт.</label>
    <label htmlFor={id} className="m-1">{data.price}₽</label>
  </div>
}

export default ReceiptItem

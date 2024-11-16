import s from "./TransactionHistory.module.css"

function TransactionHistory({items}){
    return(
    <>
    <table className={s.container}>
  <thead>
    <tr className={s.titles}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item)=>
        <tr key={item.id} className={s.row}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    )}
  </tbody>
</table>
    </>
    )
}

export default TransactionHistory;
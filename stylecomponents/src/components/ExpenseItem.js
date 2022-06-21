import './ExpenseItem.css'
function ExpenseItem(){
    return <div className='expense-item'>
        <div>15 June 2022</div>
        <div className='expense-item__description'>
        <h2>Title1</h2>
        <div className='expense-item__price'>500000</div>
        </div>
        </div>
}
export default ExpenseItem;
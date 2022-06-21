import './ExpenseItem.css'
function ExpenseItem(){

    const expenseDate= new Date(2022, 6, 16);
    const  title = 'car';
    const expenseAmount= 50000;
    return <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
        </div>
        </div>
}
export default ExpenseItem;
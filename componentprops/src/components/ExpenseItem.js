import './ExpenseItem.css'
function ExpenseItem(props){
    console.log('props', props)
    const expenseDate= new Date(2022, 6, 16);
    const  title = 'car';
    const expenseAmount= 50000;
    return <div className='expense-item'>
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
        </div>
        </div>
}
export default ExpenseItem;
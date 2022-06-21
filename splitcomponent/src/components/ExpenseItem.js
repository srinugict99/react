import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
function ExpenseItem(props){
    
    // const expenseDate= new Date(2022, 6, 16);
    // const  title = 'car';
    // const expenseAmount= 50000;
    return <div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        {/* <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
            </div> */}
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
        </div>
        </div>
}
export default ExpenseItem;
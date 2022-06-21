import './ExpenseDate.css'
const ExpenseDate= (props) =>{
    console.log('props', props)
    const day= props.date.toLocaleString('en-US', {month: '2-digit'});
    const month= props.date.toLocaleString('en-US', {month: 'long'});
    const year= props.date.getFullYear();
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
    
}

export default ExpenseDate  
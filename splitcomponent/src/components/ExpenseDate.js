const ExpenseDate= (props) =>{
    console.log('props', props)
    const day= props.date.toLocaleString('en-US', {month: '2-digit'});
    const month= props.date.toLocaleString('en-US', {month: 'long'});
    const year= props.date.getFullYear();
    return (
        <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
    
}

export default ExpenseDate  
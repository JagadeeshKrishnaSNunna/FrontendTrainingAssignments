import './Rules.css'

function Rules(props) {
    // console.log(props.pass);
    const checked = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>);
    const checkLength = (n) => {
        return (n.length >= 10) ? true : false
    }
    const checkLowerCase = (n) => {
        return /[a-z]/.test(props.pass)
    }
    const checkUpperCase = (n) => {
        return /[A-Z]/.test(n)
    }
    const checkDigit = (n) => {
        return /\d/.test(n)
    }
    const checkSpecialChar = (n) => {
        return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(n)
    }
    const checkRepetation = (n) => {
        return /(.)\1\1/.test(n)
    }
    return (
        <div className='desc-container'>
            <div className='para'>Your password must contain:</div>
            <div className={checkLength(props.pass) ? 'paraGreen' : 'para'}>{checkLength(props.pass) ? checked : '.'} At least 10 characters in length</div>
            <div className='para'>At least 3 of the following:</div>
            <div className={checkLowerCase(props.pass) ? 'para2Green' : 'para2'}>{checkLowerCase(props.pass) ? checked : '.'} Lower case letters (a-z)</div>
            <div className={checkUpperCase(props.pass) ? 'para2Green' : 'para2'}>{checkUpperCase(props.pass) ? checked : '.'} Upper case letters (A-Z)</div>
            <div className={checkDigit(props.pass) ? 'para2Green' : 'para2'}>{checkDigit(props.pass) ? checked : '.'} Numbers (0-9)</div>
            <div className={checkSpecialChar(props.pass) ? 'para2Green' : 'para2'}>{checkSpecialChar(props.pass) ? checked : '.'} special characters(ex. !@#)</div>
            <div className={checkRepetation(props.pass) ? 'para' : 'paraGreen'}>{checkRepetation(props.pass) ? '.':checked } No more than 2 identical characters in a row</div>
        </div>
    );
}

export default Rules
import './Greeting.css'
function Greeting(){
    console.log('inside of my component')
    const myName = 'Omar'

    function handleClick(){
        console.log('clicked on element')
    }

    const isLoggedIn = false


    
    return(
        <div>
            {myName === 'Omar' ? <h1>Welcome Omar</h1> : <h1>You are not logged in</h1> }
            <p onClick={handleClick}  className="greeting-text">Hello my name is {myName.toUpperCase()} I love programming</p>
        </div>
    )
}

export default Greeting
function Footer(){
    const myStudents = ['Ebrahim','Mohammad','Ahmad']
    return(
        <div>
           {myStudents.map((oneStudent)=>
           <div key={oneStudent}>
                <h2>Student name is: {oneStudent}</h2>
           </div>
           )}
            <p>Thank you for coming</p>
            <p>Copyright by Omar</p>
        </div>
    )
}

export default Footer
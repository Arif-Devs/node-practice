var mysql = require ('mysql')


var DatabaseConnectionConfig = {
    host:'localhost',
    user: 'root',
    pass: '',
    database: 'school'
}

var con = mysql.createConnection(DatabaseConnectionConfig)

con.connect(function (error){

    if(error){
        console.log('Connection faild')
    }
    else{
        console.log('connect successful')
       // InsertData(con)
        //DeleteDataByid(con)
        UpdateData(con)
    }
});

function InsertData(con) {
    let SQLQuery ="INSERT INTO `student_list`( `Name`, `Roll`, `Class`, `email`) VALUES ('Tahmid', '01', 'ten', 'arif@gmail.com')"
    con.query(SQLQuery, function (error){
                if(error){
                    console.log('data faild')
                }
                else{
                    console.log('insert SUCCESS')
                }
    })

    function UpdateData(con){
        //let SQLQuery = "DELETE FROM `student_list` WHERE `id`='2'";
       let SQLQuery = "UPDATE `student_list` SET  `email`='[younus@gmail.com]' WHERE `id`='4'"
        con.query(SQLQuery,function (error){
            if(error){
                console.log('data update faild')
            }
            else{
                console.log('data update success')
            }
        })
    }

}
const express=require('express');
const app=express();
const cors=require('cors');
const mysql=require('./db')

app.use(cors('*'));

app.get('/',(request,response)=>{
    var query=`select * from Book_Tb`
    mysql.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("content-type","application/json");
            response.write(data);
        }
        else{
            response.setHeader("content-type","application/json");
            response.write(error);
        }
    })
    response.end();
})
app.post('/',(request,response)=>{
    var query=`insert into Book_Tb values (${request.body.id},'${request.body.b_name}',
    '${request.body.author}','${request.body.book_type}','${request.body.price}',
    '${request.body.publish_date}','${request.body.language}')`
    mysql.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("content-type","application/json");
            response.write(data);
        }
        else{
            response.setHeader("content-type","application/json");
            response.write(error);
        }
    })
    response.end();
})

app.put('/ :id',(request,response)=>{
    var query=`update into Book_Tb set price=${request.body.price} && language='${request.body.language}' where id=${request.params.id}`
    mysql.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("content-type","application/json");
            response.write(data);
        }
        else{
            response.setHeader("content-type","application/json");
            response.write(error);
        }
    })
    response.end();
})

app.listen(4000,'0.0.0.0',()=>{
    console.log("server started.......")
})


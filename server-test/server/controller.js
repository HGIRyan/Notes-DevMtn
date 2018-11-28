const todoList = [{title:'Sling some code', id:1}, {title:'dont break my computer', id:2}]

module.exports = {
    read: (req,res)=>{
        // console.log('fired');
        res.status(200).send(todoList)
    }
}



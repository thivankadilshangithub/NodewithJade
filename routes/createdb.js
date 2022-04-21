export function create(req,res){
    nano.db.create(req.body.dbname, function(){
        if(err){
            res.send("Error Creating the Database");
            return;
        }
        res.send("Database created successfully");
    });

    
};
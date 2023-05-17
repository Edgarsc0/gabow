import con from "./db/config";
export default function handler(req, res) {
    //res.status(200).json({ name: 'John Doe' })
    const {userInfo}=req.body;
    const {user}=userInfo;
    const {name,email,image}=user;
    con.query(`insert into user(email,imgUrl) values(${email},${image})`,(error,result)=>{
        if(error) {res.status(200).json({error:error})}
        else{
            res.status(200).json({
                status:"ok",
                user:result
            });
        }
    })
}
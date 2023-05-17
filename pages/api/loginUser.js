//import con from "./db/config";
export default function handler(req, res) {
    const {userInfo}=req.body;
    res.status(200).json({ name: 'John Doe',userInfo:userInfo });

}
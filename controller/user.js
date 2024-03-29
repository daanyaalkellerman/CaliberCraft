    import { getUsers,getUser,addUser,editUser,deleteUser} from "../model/user.js";

    export default   {
        getUsers: async (req,res)=>{
            try{
                res.send(await getUsers())
            }catch(e){
                res.status(404).json({
                    status: 404,
                    msg:'Cannot get users'
                })
            }
        },
        getUser:async (req,res)=>{
            try{
                res.send(await getUser(+req.params.userID))
            }catch(e){
                res.status(404).json({
                    status:404,
                    msg: 'No user found'
                })
            }
        },
        addUser:async (req,res)=>{
            try{
                
                // await addUser(firstName,lastName,userAge,gender,userRole,emailAdd,hash,userProfile)
            }catch(e){
                res.status(404).json({
                    status:404,
                    msg:'Unable to add a user'
                })
            }
        
        },
        editUser:async (req,res)=>{
            try{
                const [user] = await getUser(+req.params.userID)
                let {firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile} = req.body
                firstName ? firstName=firstName: {firstName}= user
                lastName ? lastName=lastName: {lastName}=user
                userAge ? userAge=userAge: {userAge}=user
                gender ? gender=gender: {gender}=user
                userRole ? userRole=userRole: {userRole}=user
                emailAdd ? emailAdd=emailAdd: {emailAdd}=user
            userPass ? userPass=userPass: {userPass}=user
                userProfile ? userProfile=userProfile: {userProfile}=user
                await editUser(+req.params.userID,firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile)
                res.json(await getUsers())
            }catch(e){
                res.status(404).json({
                    status:404,
                    msg:'Unable to edit a user'
                })
            }
        },
        deleteUser:async (req,res)=>{
            try{
                res.send(await deleteUser(req.params.userID))
            }catch(e){
                res.status(404).json({
                    status:404,
                    msg:'Cannot delete a user at this moment'
                })
            }
        },
        verifyUser:async(req,res)=>{
        //     // const {emailAdd,userPass} = req.body
        //     // const hashedPassword = await checkUser(emailAdd)
        //     // bcrypt.compare(userPass,hashedPassword,(err,result)=>{
        //     //     if(err) throw err
        //     //     if(result === true){
        //     //         const {emailAdd} = req.body
        //     //         const token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1h'})    
        //     //         res.cookie('jwt',token,{httpOnly:false})
        //     //         next()
        //     //     }else{
        //     //         res.send({msg:'Password doesnt match'})
        //     //     }
        //     // })
        }
    
    }
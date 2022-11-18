import admin from "@/config/firebase-config";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try{
    
    const decodeToken = await admin.auth().verifyIdToken(token);
    // console.log(decodeToken)
    if(decodeToken){
      // console.log("decode");
      return next();
    }
    return res.status(401).json({
      message: "Error 404 Unauthorized"
    });
  }catch(e){
    console.log(e.errorInfo.code)
    if(e.errorInfo.code === 'auth/id-token-expired'){
      return res.status(401).json({
        message: "Error 401 Token Expired"
      });
    }
    return res.status(500).json({
      error: "Internal Error"
    });
  }
};


export default authMiddleware;
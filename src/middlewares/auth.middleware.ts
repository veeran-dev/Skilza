// import userModel from "@/module/user/users.model";
// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
//     jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, function (err, decode) {
//       if (err) req.user = undefined;
//       userModel.findOne({
//           _id: decode.id
//         })
//         .exec((err, user) => {
//           if (err) {
//             res.status(500)
//               .send({
//                 message: err
//               });
//           } else {
//             req.user = user;
//             next();
//           }
//         })
//     });
//   } else {
//     req.user = undefined;
//     next();
//   }
// };
// export default authMiddleware;

import admin from "@/config/firebase-config";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try{
    const decodeToken = admin.auth().verifyIdToken(token);
    if(decodeToken){
      return next();
    }
    return res.json({message: 'Error 404 Unauthorized'})
  }catch(e){
    return res.json({error: 'Internal Error'})
  }
};

export default authMiddleware;
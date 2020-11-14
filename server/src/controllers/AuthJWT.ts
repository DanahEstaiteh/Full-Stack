import jwt from 'jsonwebtoken';
import { Request, Response ,NextFunction} from 'express';


const getCookie = (cName : string) => {
  var name = cName + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const verifyToken = (req : Request, res : Response , next : NextFunction) => {
  // Get auth header value
  const bearerHeader = req.cookies;
  console.log("bearerHeader",bearerHeader)
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    //const bearer = bearerHeader.split(' ')[1];
    // Get token from array
    const bearerToken = bearerHeader[1];
    // Set the token
    req.cookies.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    //console.log("no header")
    res.sendStatus(403);
  }

}
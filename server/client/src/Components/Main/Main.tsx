import React, { useState } from 'react';
import Form from '../Form/Form';
import AuthComponent from '../AuthComponent/AuthComponent';
const Main = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
    return (
       
            <> 
            {
                !isLogin ? <Form login='login' isLogin={false} onLogin={(isLogin)=> setIsLogin(isLogin)}/> :
                 <AuthComponent />
            }
           </>
        
    )
}

export default Main;

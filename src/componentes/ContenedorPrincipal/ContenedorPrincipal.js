import * as React from "react";
export default function ContenedorPrincipal ({ children })
{
    return (
        <div className='register-page-wrapper page'>
          <div className="register-page">
            { children }
          </div>
        </div>
    );
}
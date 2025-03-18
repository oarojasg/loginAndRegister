import * as React from "react";
export default function ContenedorPrincipal ({ children })
{
    return (
        <section className='register-page-wrapper page'>
          <div className="register-page">
            { children }
          </div>
        </section>
    );
}
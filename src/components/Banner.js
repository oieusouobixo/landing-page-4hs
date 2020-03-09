import React from 'react';

import './style.css';

function Banner() {
    return (
        <div className='hero'>
                <h1>Exemplo de formulário para o Show me the Leads</h1>
                <form method="POST" action="https://smtl.gama.academy/leads/4a6b3a44-5ffc-11ea-92b8-cb0262e26cca">
                    <input
                        name="name"
                        type="text"
                        pattern="^\D{2,}\s[\D\s]{2,}$"
                        title="Digite seu nome completo"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        title="Digite um email válido"
                        required
                    />
                    <input name="redirectTo" type="hidden" value="https://gama.academy" />
                    <input name="debugMode" type="hidden" value="true" />
                    <input className="button-send" type="submit" />
                </form>
            
        </div>
    )
}

export default Banner;
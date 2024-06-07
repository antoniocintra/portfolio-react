import './Main.css';

const Main = () => {
    return (
        <main>
            <div className='welcome-container'>
                <div className='welcome-text' >
                    <h1><span>Prazer, me chamo Antônio!</span></h1>
                    <p>Desenvolvedor FullStack.</p>
                    <div className='action-container'>
                        <button className='btn-curriculo'> Currículo</button>
                            <button className='btn-contato'>Contato</button>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;
import './Main.css';

const Main = () => {

    const handleCurriculoClick = () => {
        window.open('/curriculo.pdf', '_blank');
    };

    const handleContatoClick = () => {
        
        window.open('https://wa.me/5511997166116', '_blank');
    };

    return (
        <main>
            <div className='welcome-container'>
                <div className='welcome-text' >
                    <h1><span>Prazer, me chamo Antônio!</span></h1>
                    <p>Desenvolvedor FullStack.</p>
                    <div className='action-container'>
                        <button className='btn-curriculo'  onClick={handleCurriculoClick}> Currículo</button>
                            <button className='btn-contato' onClick={handleContatoClick}>Contato</button>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;
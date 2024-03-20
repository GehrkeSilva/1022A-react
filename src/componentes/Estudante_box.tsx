import './Estudante-box.css'

function Estudante_box() {

    return(
        <main>
            <div className="estudante-box">
                <img className='estudante-foto'src="https://github.com/GehrkeSilva.png" alt="" />
                <div className="informacoes">
                    <h3 className="estudante_nome">Matheus Gehrke da Silva</h3>
                    <p className="estudante_descricao">Estudante do IFMS campus Naviraí em curso técnico integrado</p>
                    <a className="link-git" href="https://github.com/vinizerahsz">GitHub</a>
                </div>
            </div>
        </main>
    )
}
export default Estudante_box
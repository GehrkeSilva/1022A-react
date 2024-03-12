//faça um componente que faça um retãngulo da largura da tela por 200rem

//crie uma variavel com LET no javascript que contenha o valor "meu componente"

//Crie uma div no componente que dentro dela mostre um <p> contendo a variavel
import './MeuComponente.css'
function MeuComponente() {
    let componente = "Meu componente"
    return (
      <div className="retangulo">
        <p>{componente}</p>
      </div>
    )
  }

  export default MeuComponente
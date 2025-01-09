/* eslint-disable react/react-in-jsx-scope */
import cardapio from "data/cardapio.json";
import styles from "./inicio.module.scss";
import stylesTema from "styles/Tema.module.scss";
import nossaCasa from "assets/nossa_casa.png";

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da Cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => {
          return (
            <div key={item.id} className={styles.recomendado}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button className={styles.recomendado__botao}> Ver Mais </button>
            </div>
          );
        })}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni"></img>
        <div className={styles.nossaCasa__endereco}>
          Rua tal, 123 <br /> <br /> Vila Matilde - SP
        </div>
      </div>
    </section>
  );
}


import styles from './descricao.module.css';


export default function DescricaoPag() {
  return (
    <>
      <head>
        <title>Descrição</title>
      </head>

    

      <div className={styles.container}>
        <div className={styles["card-produto"]}>
          <div className={styles["imagem-produto"]}>
            <div className={styles["imagem-placeholder"]}></div>
          </div>
          <div className={styles["detalhes-produto"]}>
            <h1>Caderno Fofo</h1>
            <h2>R$ 19,90</h2>
            <p>
              Caderno muito bonito e tals com detalhes de flores e paisagens de
              alguma coisa
            </p>
            <p>
              <strong>Especificações:</strong>
              <br />
              90 páginas; capa dura;
            </p>
            <div className={styles.botoes}>
              <button className={`${styles.btn} ${styles["com-icon"]}`}>
                🛒 Adicionar ao Carrinho
              </button>
              <button className={styles.btn}>Comprar Agora</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

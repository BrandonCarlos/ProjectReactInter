import { Title } from "./styles";

export function Text({ children, as }) {
  return (
    // De acordo com esse AS que eu vou passar irá ser a TAG
    // Componentes polimorfiscos ou seja TAGS que MUDAM DE ACORDO COM SEU QUERER
    // Igual lá na ContaCorrente uma hora quero que seja ContaCorrente
    // Outra hora ContaPoupança
    <Title as={as}>
      { children }
    </Title>
  )
}
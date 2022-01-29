import { Wrapper } from "./styles";

export function Layout({ children }) {//dentro do componente Layout terá 
  // código HTML
  return (
    <>
      <Wrapper>
        {/* Este CHILDREN e para dizer que vai ter código HTML dentro dente WRAPPER */}
        {children}
      </Wrapper> 
    </>
  )
}
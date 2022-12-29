import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function NavTasksDeliveryman() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Timer">
          A FAZER
        </NavLink>
        <NavLink to="/history" title="Histórico">
          ATRIBUIDAS A MIM
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

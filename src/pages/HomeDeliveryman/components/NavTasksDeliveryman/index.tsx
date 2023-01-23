import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function NavTasksDeliveryman() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/homedeliveryman" title="Timer">
          A FAZER
        </NavLink>
        <NavLink to="/minhastarefas/deliveryman" title="Histórico">
          ATRIBUIDAS A MIM
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

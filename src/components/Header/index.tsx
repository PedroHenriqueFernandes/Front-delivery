import img from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <img src={img} alt="Logo escrito to do" />
        </HeaderContainer>
    )
}
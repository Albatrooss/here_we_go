import { useRouter } from 'next/router';
// import Link from 'next/link';
import { NavWrapper, Nav, Logo, LogoTop, LogoBottom, NavRoutes, /*NavRoute, NavRouter,*/ RightSide, RightItem } from '../theme/comps/nav';
import { FaSearch, FaBell, FaRegUserCircle } from 'react-icons/fa';
import theme from '../theme';

interface Props {

}

const Navbar = ({}: Props) => {

    const router = useRouter();

    const clickLogo = () => {
        router.push('/');
    }

    return (
        <NavWrapper>
            <Nav>
                <Logo onClick={clickLogo}>
                    <LogoTop>OHOHOHOHOH</LogoTop>
                    <LogoBottom>OHOHOH</LogoBottom>
                </Logo>
                <NavRoutes>
                    {/* <NavRoute>
                        <Link href='/pilates'><NavRouter>WTF</NavRouter></Link>
                    </NavRoute> */}
                </NavRoutes>
                <RightSide>
                    <RightItem><FaSearch color={theme.color.black} fontWeight={'bold'}/></RightItem>
                    <RightItem><FaBell color={theme.color.black} fontWeight={'bold'}/></RightItem>
                    <RightItem last><FaRegUserCircle color={theme.color.black} fontWeight={'bold'}/></RightItem>
                </RightSide>
            </Nav>
        </NavWrapper >
    );
}

export default Navbar;
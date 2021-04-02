import styled from 'styled-components';

const hoverSize = '4px';

export const NavWrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.color.secondary};
`;

export const Nav = styled.nav`
    width: min(100%, 1366px);
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Logo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: ${hoverSize} solid ${({ theme }) => theme.color.secondary};
    margin-right: 2rem;

    &:hover {
        border-color: ${({ theme }) => theme.color.primary};
        cursor: pointer;
    }
`;

export const LogoTop = styled.div`
    color: ${({ theme }) => theme.color.primary};
    font-weight: bold;
    font-size: .8rem;
`;

export const LogoBottom = styled.div`
    color: ${({ theme }) => theme.color.white};
    font-size: 1.4rem;
    text-align: center;
`;


export const NavRoutes = styled.div`
    display: flex;
    height: 100%;
`;

export const NavRoute = styled.div`
    margin-left: ${({ theme }) => theme.spacing.nav};
    height: 100%;
    display: flex;
    border-bottom: ${hoverSize} solid ${({ theme }) => theme.color.secondary};

    &:hover {
        border-bottom: ${hoverSize} solid ${({ theme }) => theme.color.primary};
        cursor: pointer;
    }
`;

export const NavRouter = styled.p`
    align-self: center;
    color: ${({ theme }) => theme.color.black};
    font-size: 1rem;
`;

export const RightSide = styled.div`
    margin-left: auto;
    height: 100%;
    display: flex;
    align-items: center;
`;

interface RightProps {
    last?: boolean
}

export const RightItem = styled.div<RightProps>`
    margin-right: ${({theme, last}) => last ? 0 : theme.spacing.nav};
`;
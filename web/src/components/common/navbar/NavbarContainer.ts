import styled from 'styled-components'

import { Container } from '../'
import {IThemeContainer} from '../../../constants/themes'

export const NavbarContainer = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }: IThemeContainer) => theme.headerBorder};
    padding: 0 24px;
    transition: border 0.2s;

    ${Container} {
        justify-content: space-between;
        
        @media only screen and (min-width: 768px) {
            max-width: 740px;
            padding: 0;
        }
        @media only screen and (min-width: 1024px) {
            max-width: 920px;
        }
        @media only screen and (min-width: 1440px) {
            max-width: 1200px;
        }
    }
`

import styled from "styled-components";
import Bkg1 from '../../assets/primeira-bg.png';
import Bkg2 from '../../assets/segunda-bg.png';

export const GeneralContainer = styled.body`
  background: url(${Bkg1}) no-repeat 1010px, url(${Bkg2}) no-repeat 931px;
  background-size: cover;
`
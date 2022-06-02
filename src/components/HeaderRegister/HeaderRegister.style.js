import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Header = styled.header`
  box-shadow: 0 6px 6px #eee;
  /* border: 2px solid #000000; */
  /* border-bottom: 1px solid #333; */
  width: 100%;
  min-width: max-content;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2rem;
`
export const HeaderBrand = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderTitle = styled.div`
  color: #222;
  font-size: 2.4rem;
  margin-left: 1.2rem;
`
export const HeaderIcon = styled(Link)`
  margin-top: -0.5rem;
  svg {
    fill: #ee4d2d;
    height: 4.2rem ;
    width: auto;
  }
`

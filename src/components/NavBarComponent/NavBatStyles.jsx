import styled from 'styled-components';
export const NavStyle = styled.div`
  height: 90px;
  width: 100%;
  background-color: #2c2f3a;
`;

export const Logo = styled.img`
  height: 72px;
  width: 78px;
`;

export const Search = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  height: 40px;
  text-indent: 25px;
  border-radius: 20px;
  width: 100%;
  
  &:focus {
    box-shadow: none;
    border: 2px solid #2c2f3a;
  }
`;

export const SearchIcon = styled.i`
  position: absolute;
  top: 12px;
  left: 16px;
`;
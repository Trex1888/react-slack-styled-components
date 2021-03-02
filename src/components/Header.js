import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime, Help, Search } from "@material-ui/icons";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar></HeaderAvatar>
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <Search />
        <input placeholder="Search Andy's Web Dev" type="text" />
      </HeaderSearch>

      <HeaderRight>
        <Help />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  padding: 0 50px;
  color: #fff;
  border: 1px gray solid;
  text-align: center;

  > input {
    background: transparent;
    text-align: center;
    border: none;
    outline: none;
    color: #fff;
    min-width: 30vw;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

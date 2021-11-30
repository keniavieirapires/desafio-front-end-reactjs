import React, {useState}from "react";
import * as S from "./styled";
import userGithub from "../../hooks/github-hooks";

const Header = () => {
    const {getUser} = userGithub();
    const [usernameForSearch, setUsernameForSerch] = useState();

    const submitGetUser = () => {
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return (
        <header>
            <S.Wrapper>
                <input type="text"planeholder="Digite o username para pesquisa..."onChange={(event)=> setUserNameForSearch(event.target.value)}/>
                <button type="submit"onClick={submitGetUser}>
                    <span> Buscar</span>
                </button>
            </S.Wrapper>
        </header>

    );
};
export default Header;
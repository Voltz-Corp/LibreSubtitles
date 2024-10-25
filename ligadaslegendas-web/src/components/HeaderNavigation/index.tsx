import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import * as S from './styles';

export function HeaderNavigation() {
  const navigation = useNavigate();

  function handleGoToLogin() {
    navigation('/login');
  }

  return (
    <S.Wrapper>
      <img src="/fullLogo.png" alt="Logo Libre Subtitles" />
      <S.Navigation>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="#">Filmes sem Legendas</a>
          </li>
          <li>
            <a href="/upload">Enviar Legendas</a>
          </li>
          <li>
            <a href="#">Sincronizar Legendas</a>
          </li>
        </ul>
        <Button onClick={handleGoToLogin}>Entrar</Button>
      </S.Navigation>
    </S.Wrapper>
  );
}

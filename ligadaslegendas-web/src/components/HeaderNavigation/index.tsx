import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import * as S from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';

export function HeaderNavigation() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleGoToLogin() {
    navigate('/login');
  }

  function handleGoToLandingPage() {
    navigate('/');
  }

  function handleToggleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <S.Wrapper>
      <img
        src="/fullLogo.png"
        alt="Logo Libre Subtitles"
        onClick={handleGoToLandingPage}
      />
      <S.Navigation>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          {/* Funcionalidade não implementada */}
          {/* <li>
            <a href="#">Filmes sem Legendas</a>
          </li> */}
          <li>
            <a href="/upload">Enviar Legendas</a>
          </li>
          <li>
            <a href="/sincronizar">Sincronizar Legendas</a>
          </li>
        </ul>

        {user ? (
          <S.Profile>{user.name.charAt(0)}</S.Profile>
        ) : (
          <Button onClick={handleGoToLogin}>Entrar</Button>
        )}
      </S.Navigation>

      <S.ResponsiveNavigation>
        <S.HamburguerMenu
          onClick={handleToggleMenu}
          className={`hamburger hamburger--spin ${
            isMenuVisible ? 'is-active' : ''
          }`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </S.HamburguerMenu>

        <S.ResponsiveNavigationList isMenuVisible={isMenuVisible}>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            {/* Funcionalidade não implementada */}
            {/* <li>
              <a href="#">Filmes sem Legendas</a>
            </li> */}
            <li>
              <a href="/upload">Enviar Legendas</a>
            </li>
            <li>
              <a href="/sincronizar">Sincronizar Legendas</a>
            </li>
          </ul>

          {user ? (
            <S.Profile>{user.name.charAt(0)}</S.Profile>
          ) : (
            <Button onClick={handleGoToLogin} fullWidth>
              Entrar
            </Button>
          )}
        </S.ResponsiveNavigationList>
      </S.ResponsiveNavigation>
    </S.Wrapper>
  );
}

import { toast } from 'sonner';
import { Button } from '../../components/Button';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { Input } from '../../components/Input';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    toast.success('Usuário logado com sucesso!');
  }

  function handleRedirectToRegister() {
    navigate('/cadastro');
  }

  return (
    <>
      <Helmet title="Login" />
      <HeaderNavigation />
      <S.Wrapper>
        <S.Login>
          <S.Heading>Entre na sua conta</S.Heading>
          <Input name="email" placeholder="Email" type="text" />
          <Input name="password" placeholder="Senha" type="password" />
          <S.ForgotPassword>Esqueceu sua senha?</S.ForgotPassword>
          <Button fullWidth size="lg" type="button" onClick={handleLogin}>
            Entrar
          </Button>
        </S.Login>

        <S.SignUpContent>
          <p>Ainda não tem uma conta?</p>
          <Button variant="secondary" onClick={handleRedirectToRegister}>
            Crie sua conta
          </Button>
        </S.SignUpContent>
      </S.Wrapper>
    </>
  );
}

import { toast } from 'sonner';
import { Button } from '../../components/Button';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { Input } from '../../components/Input';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function Register() {
  const navigate = useNavigate();

  function handleRegister() {
    toast.success('Usuário cadastrado com sucesso!');
  }

  function handleRedirectToLogin() {
    navigate('/login');
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <HeaderNavigation />
      <S.Wrapper>
        <S.Register>
          <S.Heading>Crie sua conta</S.Heading>
          <Input name="text" placeholder="Nome" type="text" />
          <Input name="email" placeholder="Email" type="text" />
          <Input name="password" placeholder="Senha" type="password" />
          <Input
            name="confirm_password"
            placeholder="Confirme sua senha"
            type="password"
          />
          <Button fullWidth size="lg" type="button" onClick={handleRegister}>
            Criar conta
          </Button>
        </S.Register>

        <S.SignInContent>
          <p>Já tem uma conta?</p>
          <Button variant="secondary" onClick={handleRedirectToLogin}>
            Login
          </Button>
        </S.SignInContent>
      </S.Wrapper>
    </>
  );
}

import { toast } from 'sonner';
import { Button } from '../../components/Button';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { Input } from '../../components/Input';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

type Login = {
  email: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: login,
  });

  async function handleLogin({ email, password }: Login) {
    try {
      await authenticate({ email, password });

      toast.success('Usuário logado com sucesso!');
    } catch (error) {
      console.error(error);
      toast.error('Credenciais inválidas');
    }
  }

  function handleRedirectToRegister() {
    navigate('/cadastro');
  }

  return (
    <>
      <Helmet title="Login" />
      <HeaderNavigation />
      <S.Wrapper>
        <S.Login onSubmit={handleSubmit(handleLogin)}>
          <S.Heading>Entre na sua conta</S.Heading>
          <Input placeholder="Email" type="text" {...register('email')} />
          <Input
            placeholder="Senha"
            type="password"
            {...register('password')}
          />
          <S.ForgotPassword>Esqueceu sua senha?</S.ForgotPassword>
          <Button fullWidth size="lg">
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

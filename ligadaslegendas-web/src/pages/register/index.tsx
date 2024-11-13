import { toast } from 'sonner';
import { Button } from '../../components/Button';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { Input } from '../../components/Input';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@tanstack/react-query';
import { RegisterUser, UserService } from '../../services/http/user';
import { useForm } from 'react-hook-form';

export function Register() {
  const { register, handleSubmit } = useForm<RegisterUser>();
  const navigate = useNavigate();

  function handleRedirectToLogin() {
    navigate('/login');
  }

  const { mutate } = useMutation({
    mutationFn: async (data: RegisterUser) => await UserService.register(data),
    onSuccess: async () => {
      toast.success('Usuário cadastrado com sucesso!');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao cadastrar usuário!');
    },
  });

  function handleRegister(data: RegisterUser) {
    mutate(data);
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <HeaderNavigation />
      <S.Wrapper>
        <S.Register onSubmit={handleSubmit(handleRegister)}>
          <S.Heading>Crie sua conta</S.Heading>
          <Input placeholder="Nome" type="text" {...register('name')} />
          <Input placeholder="Email" type="text" {...register('email')} />
          <Input
            placeholder="Senha"
            type="password"
            {...register('password')}
          />
          <Input
            name="confirm_password"
            placeholder="Confirme sua senha"
            type="password"
          />
          <Button fullWidth size="lg">
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

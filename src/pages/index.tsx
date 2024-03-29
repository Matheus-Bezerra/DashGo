import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useContext } from 'react';
import { AuthContext, AuthProvider } from '../contexts/AuthContext';

type SignInFormData = {
  email: string;
  password: string;
};

const signInSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha não informada')
    .min(6, 'Digite ao menos 6 letras ou números'),
});

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const router = useRouter();

  const { signIn } = useContext(AuthContext);

  const errors = formState.errors;

  //const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
  function handleSignIn(values: SignInFormData) {
    setLoading(true);
    signIn(values);
    setLoading(false);
    // router.push('/dashboard');
  }

  return (
    <>
      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Flex
          as="form"
          flexDirection="column"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              name="email"
              type="email"
              label="E-mail"
              placeholder="E-mail"
              error={errors.email}
              {...register('email')}
            />

            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="Senha"
              error={errors.password}
              {...register('password')}
            />

            <Button
              type="submit"
              mt="6"
              colorScheme="twitter"
              size="lg"
              isLoading={formState.isSubmitting}
              cursor={loading ? 'progress' : 'default'}
              disabled={loading}
              _disabled={{
                bg: 'twitter.500',
                cursor: 'progress',
              }}
            >
              Entrar
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

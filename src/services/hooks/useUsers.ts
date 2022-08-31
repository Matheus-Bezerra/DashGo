import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[]
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data } = await api.get('users', {
    params: {
      page,
    }
  });

  const totalCount = 10

  const users = data.users.map((user: any) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return {users, totalCount};
}

export function useUsers(page: number) {
  return useQuery(
    ['users', page], () => getUsers(page), {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  );

}
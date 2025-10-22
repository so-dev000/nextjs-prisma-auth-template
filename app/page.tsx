"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Center,
  Loader,
} from "@mantine/core";

export default function HomePage() {
  const { data: session, status } = useSession();

  const onSignIn = useCallback(() => {
    signIn("google");
  }, []);

  const onSignOut = useCallback(() => {
    signOut();
  }, []);

  if (status === "loading") {
    return (
      <Center style={{ minHeight: "60vh" }}>
        <Loader />
      </Center>
    );
  }

  return (
    <Container
      size="sm"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        paddingTop: 24,
        paddingBottom: 24,
      }}
    >
      <Title order={2}>Next.js + Prisma + NextAuth</Title>
      <Text color="dimmed">
        シンプルなテンプレートページです。必要に応じてコンポーネントを追加してください。
      </Text>

      {session?.user ? (
        <>
          <Text>{`ようこそ、${session.user.name ?? session.user.email ?? "ユーザー"}`}</Text>

          <Group>
            <Button component="a" variant="outline" href="/about">
              About
            </Button>

            <Button color="red" onClick={onSignOut}>
              ログアウト
            </Button>
          </Group>

          <Text size="sm" color="dimmed">
            セッション情報は NextAuth で提供されています。
          </Text>
        </>
      ) : (
        <>
          <Text>ログインして続行してください。</Text>

          <Group>
            <Button onClick={onSignIn}>Googleでログイン</Button>
          </Group>
        </>
      )}
    </Container>
  );
}

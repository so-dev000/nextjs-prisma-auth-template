'use client';

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { css } from '@emotion/css';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem;
`;

const title = css`
  color: #333;
  margin-bottom: 2rem;
`;

const loginButton = css`
  background-color: #4285f4;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #357ae8;
  }
`;

const logoutButton = css`
  background-color: #dc3545;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c82333;
  }
`;

const aboutLink = css`
  color: #0070f3;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #0070f3;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background-color: #0070f3;
    color: white;
  }
`;

const userName = css`
  color: #333;
  font-weight: 500;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className={container}>
        <p>読み込み中...</p>
      </div>
    );
  }

  if (session?.user) {
    return (
      <div className={container}>
        <h1 className={title}>ホーム</h1>
        <p className={userName}>👤 {session.user.name}</p>
        <Link href="/about" className={aboutLink}>
          Aboutページへ
        </Link>
        <button onClick={() => signOut()} className={logoutButton}>
          ログアウト
        </button>
      </div>
    );
  }

  return (
    <div className={container}>
      <h1 className={title}>ログイン</h1>
      <button onClick={() => signIn("google")} className={loginButton}>
        Googleでログイン
      </button>
    </div>
  );
}

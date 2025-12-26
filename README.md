# 기술 블로그

Next.js (App Router) + TypeScript + MDX 기반 개인 기술 블로그입니다.

## 기능

- ✅ Next.js 16 App Router
- ✅ TypeScript
- ✅ MDX 파일로 글 관리
- ✅ Tailwind CSS 스타일링
- ✅ 다크 모드 지원
- ✅ Vercel 배포 최적화

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 새 글 작성하기

1. `content/posts` 디렉토리에 새로운 `.mdx` 파일을 생성하세요.
2. 파일명이 URL slug가 됩니다 (예: `my-first-post.mdx` → `/posts/my-first-post`)

3. 파일 상단에 프론트매터를 추가하세요:

```mdx
---
title: "글 제목"
date: "2024-12-27"
description: "글 설명"
tags: ["태그1", "태그2"]
---

# 글 내용

여기에 마크다운으로 글을 작성하세요.
```

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## Vercel 배포

1. GitHub에 저장소를 푸시하세요.
2. [Vercel](https://vercel.com)에 로그인하고 새 프로젝트를 생성하세요.
3. GitHub 저장소를 연결하세요.
4. Vercel이 자동으로 Next.js 프로젝트를 감지하고 배포합니다.

또는 Vercel CLI를 사용할 수 있습니다:

```bash
npm i -g vercel
vercel
```

## 프로젝트 구조

```
tech-blog/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈 페이지 (글 목록)
│   └── posts/
│       └── [slug]/
│           ├── page.tsx   # 글 상세 페이지
│           └── not-found.tsx
├── content/
│   └── posts/             # MDX 파일 저장 위치
│       └── *.mdx
├── lib/
│   └── mdx.ts             # MDX 파일 처리 유틸리티
└── public/                 # 정적 파일
```

## 기술 스택

- [Next.js](https://nextjs.org) - React 프레임워크
- [TypeScript](https://www.typescriptlang.org) - 타입 안전성
- [MDX](https://mdxjs.com) - 마크다운 + JSX
- [Tailwind CSS](https://tailwindcss.com) - 스타일링
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) - MDX 렌더링
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - 프론트매터 파싱
- [date-fns](https://date-fns.org) - 날짜 포맷팅

## 라이선스

MIT

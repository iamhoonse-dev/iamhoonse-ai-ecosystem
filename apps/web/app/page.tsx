import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/react-ui/common";
import { isEmptyString } from "@repo/common-utils/string";
import { ls } from "@repo/node-utils/fs";
import styles from "./page.module.css";
import TestBrowserUtils from "../containers/TestBrowserUtils";
import TestReactUtils from "../containers/TestReactUtils";

/**
 * 테마별 이미지 컴포넌트의 속성 인터페이스
 * Next.js Image 컴포넌트의 props에서 src를 제외하고 추가 속성을 정의합니다.
 */
type ThemeImageProps = Omit<ImageProps, "src"> & {
  /** 라이트 테마에서 표시할 이미지 경로 */
  srcLight: string;
  /** 다크 테마에서 표시할 이미지 경로 */
  srcDark: string;
};

/**
 * 테마에 따라 다른 이미지를 표시하는 컴포넌트
 *
 * 라이트/다크 테마에 따라 적절한 이미지를 자동으로 표시합니다.
 * CSS를 통해 테마별로 하나의 이미지만 보이도록 처리됩니다.
 *
 * @param props - 테마별 이미지 속성들
 * @param props.srcLight - 라이트 테마에서 표시할 이미지 경로
 * @param props.srcDark - 다크 테마에서 표시할 이미지 경로
 * @returns JSX 테마별 이미지 엘리먼트들
 *
 * @example
 * ```tsx
 * <ThemeImage
 *   srcLight="/logo-light.svg"
 *   srcDark="/logo-dark.svg"
 *   alt="로고"
 *   width={100}
 *   height={50}
 * />
 * ```
 */
const ThemeImage = (props: ThemeImageProps) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

/**
 * 웹 애플리케이션의 홈 페이지 컴포넌트
 *
 * Turborepo 모노레포 구조를 소개하고 관련 링크를 제공하는 랜딩 페이지입니다.
 * 테마별 로고, 시작 가이드, 외부 링크들을 포함합니다.
 *
 * @returns JSX 홈 페이지 엘리먼트
 */
export default async function Home() {
  // apps/web 디렉토리의 파일 및 디렉토리 목록을 가져옵니다.
  const entries = await ls("../../apps/web");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <TestReactUtils />
        <TestBrowserUtils />
        <ol>
          <li>
            Get started by editing <code>apps/web/app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
          <li>
            isEmptyString(&#34; &#34;): {JSON.stringify(isEmptyString("  "))}
          </li>
          <li>
            isEmptyString(&#34; a &#34;):{" "}
            {JSON.stringify(isEmptyString("  a "))}
          </li>
          {entries.map((entry) => (
            <li key={entry.name}>
              {entry.isDirectory && <code>DIR</code>}
              {entry.isFile && <code>FILE</code>}
              <span>-</span>
              <span>{entry.name}</span>
            </li>
          ))}
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://turborepo.com/docs?utm_source"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
        <Button variant="primary">Open alert</Button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://turborepo.com?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turborepo.com →
        </a>
      </footer>
    </div>
  );
}

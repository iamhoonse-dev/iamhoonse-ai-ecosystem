/**
 * CommitLint 설정
 * 
 * Git 커밋 메시지가 Conventional Commits 규약을 준수하는지 검증합니다.
 * 이 설정은 husky git hook과 연동되어 커밋 시 자동으로 메시지 형식을 검사합니다.
 * 
 * Conventional Commits 규약:
 * - feat: 새로운 기능 추가
 * - fix: 버그 수정
 * - docs: 문서 변경
 * - style: 코드 포맷팅 (기능 변경 없음)
 * - refactor: 리팩토링
 * - test: 테스트 추가/수정
 * - chore: 빌드 프로세스 또는 보조 도구 변경
 * 
 * @see https://www.conventionalcommits.org/
 * @see https://commitlint.js.org/
 */
module.exports = {
  /** Conventional Commits 표준 규칙 적용 */
  extends: ['@commitlint/config-conventional'],
};
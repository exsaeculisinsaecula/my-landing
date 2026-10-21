# 실제 검수 기록
이 표는 빈 기록지입니다. 실행하지 않은 항목은 미실행으로 남깁니다.

|주소·실행시각|브라우저·폭|입력/행동|예상|실제|수정·재검사|
|---|---|---|---|---|---|
|로컬 npm test · 2026-02-10|Node --test|validate 19자/20자 경계|19자 거절·20자 허용|5/5 통과 (19자 거절, 20자 허용 확인)|완료|
|로컬 npm run build · 2026-02-10|vite build|소스→dist|빌드 성공|✓ built in 556ms, index.html·react.html·assets 생성|완료|
| |390px|긴 제목·카드4개|넘침 없음|미실행 (CSS: 1000px↓ 2열, 700px↓ 1열로 설계)|학생 브라우저 확인 필요|
| |768px|그림·문구|비율·줄바꿈 유지|미실행 (CSS: 1000px↓ 카드 2열)|학생 브라우저 확인 필요|
| |1280px|주요 행동|문의 영역 도착|미실행 (CSS: 카드 4열, CTA→#contact 앵커)|학생 브라우저 확인 필요|
| |키보드|Tab·Enter·Space 메뉴/FAQ|초점·상태 일치|미실행 (aria-expanded·details/summary 사용)|학생 브라우저 확인 필요|
| |폼|빈 이름·잘못된 이메일|거절|미실행 (단위테스트로 거절 로직 확인)|학생 브라우저 확인 필요|
| |폼|19자/20자 경계|경계와 성공 안내|미실행 (단위테스트로 확인)|학생 브라우저 확인 필요|
| |React|Hero 수정→build→preview|원본 반영|빌드 성공. preview 화면 미실행|학생 preview 확인 필요|
| |공개URL|이미지·CSS·메뉴·폼|실제 공개 동작|미배포|GitHub Pages 진행 시 확인|

AI 요청·수정 범위·diff 검토: MiMoCode가 brief/design 작성, index.html·App.jsx·Hero.jsx·Header.jsx 콘텐츠 교체, tokens.css 색3개, layout.css 카드4열·1000px/700px 브레이크포인트, validate.js 20자, tests 19/20 경계 수정. 관련 파일만 최소 수정.

MCP 실제 연결 서버·도구 이름·주소·시각·실행 결과(없으면 미실행): 미실행

수동 검수 결과: npm test 5/5, npm run build 성공까지 기계적으로 확인. 브라우저 화면·키보드·390/768/1280 실사용 검수는 미실행. React FAQ 초기 state 비교 — false(닫힘): 첫 화면에서 답변 숨김, 버튼「열기」표시. true(열림): 첫 화면에서 모든 답변이 펼쳐져 스크롤이 길어짐. 3개 FAQ에서 false 유지 선택(코드로 기록).

공개 상태/미배포 사유: GitHub Pages 배포 미진행. 저장소 생성·Actions 승인 권한 필요. docs/deploy.md 순서로 진행.

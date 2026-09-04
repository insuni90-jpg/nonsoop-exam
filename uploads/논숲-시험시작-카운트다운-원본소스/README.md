# 논숲 시험 시작 카운트다운

시험 응시 화면과 분리된 독립형 `3 → 2 → 1 → 시작` 모션 프로토타입입니다.

## 원본 파일

- `index.html`: 화면 구조와 SVG 원형 라인
- `styles.css`: 색상, 크기, 타이포그래피와 반응형 스타일
- `app.js`: 카운트다운 순서와 애니메이션 타이밍
- `preview-server.cjs`: 로컬 확인용 간단한 서버

외부 라이브러리나 이미지 파일 없이 HTML, CSS, JavaScript만 사용합니다.

## 빠르게 수정하는 값

`app.js`의 `MOTION`에서 다음 값을 조정할 수 있습니다.

- `countdownDuration`: 숫자 하나가 표시되는 시간
- `startDuration`: 시작 링이 확장되는 시간
- `ringEasing`: 카운트다운 진행 라인의 속도감

`styles.css`의 `:root`에서 다음 값을 조정할 수 있습니다.

- `--background`: 배경색
- `--primary`: 숫자와 라인 색상
- `--caption`: 안내 문구 색상
- `--countdown-ring-size`: 카운트다운 원 크기
- `--countdown-ring-width`: 카운트다운 라인 두께
- `--start-ring-width`: 시작 라인 두께
- `--caption-offset`: 원과 안내 문구 사이 위치

## 실행 방법

폴더에서 아래 명령을 실행한 뒤 브라우저로 `http://127.0.0.1:4184/`에 접속합니다.

```bash
node preview-server.cjs
```

간단히 확인할 때는 `index.html`을 브라우저로 직접 열어도 됩니다.

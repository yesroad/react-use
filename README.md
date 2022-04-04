# React Use

### 1. openapi-typescript-codegen
> api response type 자동화
```
  # 패키지 설치
  $ npm i openapi-typescript-codegen -D
  $ npm i node-fetch -D

  # npm script 실행
  npm run generate:openApi-typescript
```
- yaml 파일 및 swagger 에서 설정된 model 값에서 타입 추론
- 백엔드 api 쪽에서 명확한 model 정의 필요
- 참고 자료
  - [openapi-codegen-example](https://github.com/hw0k-play/openapi-codegen-example/blob/main/scripts/generate-openapi-types.js)


// 백엔드 주소 설정
// - 내 컴퓨터(127.0.0.1 / localhost)에서 열면 로컬 FastAPI 사용
// - Vercel 등 배포 주소에서 열면 Railway 주소 사용 (Railway 도메인 생성 후 아래 값 교체, 끝에 / 없이)
const RAILWAY_API = "https://REPLACE-WITH-YOUR-RAILWAY-DOMAIN.up.railway.app";
const isLocal = ["127.0.0.1", "localhost"].includes(location.hostname);
window.API_URL = isLocal ? "http://127.0.0.1:8000" : RAILWAY_API;

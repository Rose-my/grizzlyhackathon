# Tump powered by Solana

## Git 다운받기
git clone https://github.com/TumpSolana/Web-App 
cd Web-App </p>
code . </p>
으로 VSCode에서 작업 </p>

가장 처음 다운 + git으로 다른 사람 작업 받을 때 </p>
yarn install 실행 </p>

## 자기 브랜치 생성 후 작업 단위로 Push
가장 처음 자기 branch 생성: git branch 사람이름 </p>
git checkout 사람이름 </p>

작업 단위 (프로필 상단 부분 완성 등) 별로 commit </p>
git add . </p>
git commit -m "작업단위 기록" </p>
git push origin 사람이름 </p>

## TODO
1. collection (figma - collection), customizaNFT (collectionDetail) 부분 완성
2. Home 버튼 라우팅 (NFTCollection -> collection.js)
- collectionDetail은 App.js 사용해서 작업하고 아직 라우팅 안해도 됩니다!
3. 지갑 연결 - ConenctButton 부분 참고 
4. 가능한 부분 백엔드 
5. NFT minting - CandyMachine, Solana Pay 연결 (주원)
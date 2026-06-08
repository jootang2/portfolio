export interface Project {
  slug: string
  title: string
  agent: string
  tagline: string
  problem: string
  process: { label: string; description: string }[]
  result: string
  status: 'complete' | 'in-progress'
  tags: string[]
  challenges: { problem: string; solution: string }[]
  screenshots?: string[]
  links?: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    slug: 'fivemonkeys',
    title: 'Fivemonkeys 팀 빌딩',
    agent: '총총 (오케스트레이터)',
    tagline: '반복 업무를 역할별로 분리해 5인 AI 팀에 위임하는 자동화 시스템 설계',
    problem:
      '운영 중인 업무 대부분이 수동 작업에 의존하고 있었다. 포스팅, 채용 리서치, 사이트 유지보수, 강의 운영까지 각각 따로 처리하다 보니 리소스가 분산되고 집중이 어려웠다.',
    process: [
      { label: '업무 분류', description: '현재 업무를 자동화 가능한 단위로 분류' },
      { label: '역할 설계', description: '포스팅(포포), AX 리서치(공공), 사이트 운영(유유), 강의 자동화(강강), 총괄(총총) 5개 역할로 구분' },
      { label: '격리 구조', description: '각 에이전트는 독립된 workspace 보유, 총총을 통해서만 소통하는 격리 원칙 수립' },
    ],
    result:
      '업무가 역할 단위로 명확히 분리되면서 각 작업의 경계와 상호 연관 관계가 눈에 보이기 시작했다. "무엇을 자동화할 수 있는가"를 구조화한 것 자체가 첫 번째 성과다.',
    status: 'complete',
    screenshots: ['/screenshots/Chongchong_1.png', '/screenshots/Chongchong_2.png'],
    tags: ['AI 에이전트', '시스템 설계', '업무 자동화'],
    links: [
      { label: 'Hermes+Codex 팀 구조 재설계', url: 'https://www.gpters.org/nocode/post/hermes-codex-telegram-environment-cV6apNPDeaHBSGN' },
    ],
    challenges: [
      {
        problem: '에이전트 역할 분리 기준이 처음엔 모호했다. 어디까지를 한 에이전트의 책임으로 볼지 경계가 불명확했다.',
        solution: '현재 진행 중인 업무를 자동화 단위로 먼저 나열한 뒤, 성격이 유사한 작업끼리 묶어 역할을 정의했다.',
      },
      {
        problem: '초기에는 Hermes+Codex 조합으로 시작했으나, 별도 하네스의 필요성을 느끼지 못했다.',
        solution: 'Claude Code 자체를 오케스트레이터로 활용하고 서브에이전트 팀 구조로 전환해 불필요한 레이어를 제거했다.',
      },
    ],
  },
  {
    slug: 'popo',
    title: '포포: 멀티플랫폼 포스팅 자동화',
    agent: '포포',
    tagline: '하나의 작업물로 여러 플랫폼에 맞는 포스팅을 자동 생성·게시하는 파이프라인',
    problem:
      '플랫폼마다 글을 따로 써야 했다. Instagram, LinkedIn, 블로그는 문체와 분위기가 달라 같은 내용을 매번 별도로 작업해야 했고, 반복에 드는 시간이 적지 않았다.',
    process: [
      { label: '초안 생성', description: '포포가 당일 작업 대화 내용을 읽고 /write-post 스킬로 초안 자동 작성' },
      { label: '검수', description: '대장이 초안 검토·수정' },
      { label: '자동 게시', description: '"포포야 포스팅 올려줘" 트리거 → 플랫폼별 문체로 변형 후 자동 게시' },
    ],
    result:
      '직접 플랫폼에 접속해 업로드하는 작업이 사라졌다. 현재는 운영 플랫폼이 적어 체감이 크지 않지만, 포스팅 빈도와 플랫폼 수가 늘어날수록 효과가 선형으로 커지는 구조다.',
    status: 'complete',
    screenshots: ['/screenshots/Popo.png', '/screenshots/Popo_2.png', '/screenshots/Popo_3.png'],
    tags: ['SNS 자동화', '콘텐츠 파이프라인', '멀티플랫폼'],
    links: [
      { label: 'Threads·LinkedIn 자동화 연결', url: 'https://www.gpters.org/nocode/post/hermes-codex-threads-linkedin-M8ZADcZznOD3w9Z' },
      { label: '티스토리 포스팅 자동화', url: 'https://www.gpters.org/nocode/post/hermes-codex-environment-tstory-ClF3yNyyPlmR641' },
      { label: 'gpters 자동 포스팅', url: 'https://www.gpters.org/nocode/post/gptersorg-automatic-posting-process-EJULQzNFFEDZyIr' },
    ],
    challenges: [
      {
        problem: '플랫폼마다 API 연동 방식이 달랐고, API를 아예 지원하지 않는 플랫폼도 있었다.',
        solution: 'API 미지원 플랫폼은 Playwright로 브라우저 자동화를 적용해 플랫폼별 개별 연동 방식을 구현했다.',
      },
      {
        problem: 'Tistory처럼 기존에 API를 제공하다가 서비스를 중단한 경우가 있어 기존 연동이 무효화됐다.',
        solution: '플랫폼별 연동 방식을 독립 모듈로 분리해 일부가 중단돼도 나머지에 영향이 없는 구조로 설계했다.',
      },
    ],
  },
  {
    slug: 'gonggong',
    title: '공공: AX 채용공고 크롤링',
    agent: '공공',
    tagline: '키워드 기반 자동 크롤링으로 AX 포지션 공고를 한 곳에 정리하는 리서치 파이프라인',
    problem:
      'AX 관련 포지션을 찾으려면 매번 잡코리아 등 여러 플랫폼에 직접 들어가 키워드를 검색해야 했다. 탐색 자체에 드는 반복 리소스가 컸다.',
    process: [
      { label: '크롤링', description: '공공이 잡코리아 등 채용 플랫폼에서 키워드 기반으로 공고 수집' },
      { label: 'CSV 정리', description: '수집된 공고를 제목·회사·링크 포함 CSV로 구조화' },
      { label: '탐색', description: '대장은 제목 목록을 훑고 관심 공고 링크 클릭 → 원문 이동' },
      { label: 'MCP 전환', description: '사람인 공고 수집을 REST API 방식에서 PlayMCP(카카오 공식 MCP 서버) 방식으로 전환 — API 키 없이 Claude Code와 대화형으로 공고 검색·수집' },
    ],
    result:
      '직접 플랫폼을 돌아다니며 탐색하는 시간이 줄었다. 공고 수집은 공공이, 판단은 대장이 — 역할이 명확히 분리됐다. MCP 전환 이후 API 키 발급·관리 없이도 사람인 공고를 대화 한 줄로 수집할 수 있게 됐다.',
    status: 'complete',
    screenshots: ['/screenshots/Gonggong_1.png', '/screenshots/Gonggong_2.png'],
    tags: ['크롤링', 'AX 리서치', '데이터 수집', 'MCP 연동'],
    links: [
      { label: '채용공고 크롤러 패키징', url: 'https://www.gpters.org/nocode/post/job-posting-crawler-packaging-9UwI6b5ImEGJIPm' },
    ],
    challenges: [
      {
        problem: '초기에는 크롤링 기준 없이 전체 수집하다 보니 500개 이상의 공고가 쌓였다. 토큰 낭비와 처리 시간 증가로 이어졌다.',
        solution: '최근 2주 이내 공고만 수집하는 필터 기준을 스킬에 추가해 수집량과 처리 비용을 대폭 줄였다.',
      },
      {
        problem: 'REST API 방식의 사람인 크롤러는 API 키 발급·관리가 필요했고, 미설정 사용자는 직접 설정 방법을 찾아야 했다.',
        solution: '사람인 공고 수집을 PlayMCP(카카오 공식 MCP 서버) 방식으로 전환했다. API 키가 불필요하며, MCP 미설정 시 Claude Code가 대화로 설치 안내를 자동 제공하는 UX를 구현했다.',
      },
    ],
  },
  {
    slug: 'youyou',
    title: '유유: 바이어 포털',
    agent: '유유',
    tagline: '바이어가 직접 에이전트와 소통하고 배포까지 요청할 수 있는 셀프서비스 포털 구축',
    problem:
      '바이어 관리가 전적으로 수동이었다. 상태 확인, 변경 요청, 진행 공유 모두 직접 연락해야 했고, 단순한 작업임에도 커뮤니케이션에 드는 리소스가 컸다.',
    process: [
      { label: '에이전트 채팅', description: '바이어가 직접 AI 에이전트와 대화하며 요청 처리' },
      { label: '변경사항 확인', description: '임시 홈페이지에서 업데이트 내용 실시간 확인' },
      { label: '원클릭 배포', description: '포털에서 배포 요청 시 실제 페이지에 자동 반영' },
    ],
    result:
      '현재 실 운영 전 단계. 포털이 완전히 가동되면 바이어의 단순 문의와 배포 요청이 대장을 거치지 않고 처리되는 구조가 완성된다.',
    status: 'complete',
    screenshots: ['/screenshots/Youyou_1.png', '/screenshots/Youyou_2.png', '/screenshots/Youyou_3.png'],
    tags: ['Next.js 15', '바이어 포털', '셀프서비스'],
    links: [
      { label: '고객 채팅→AI 코드 수정→자동 배포', url: 'https://www.gpters.org/nocode/post/automation-outsourced-project-maintenance-pDo06Dt7pDQb3Oi' },
    ],
    challenges: [
      {
        problem: '포털 전체 기획 방향을 어떻게 잡아야 할지 처음엔 막막했다. 바이어 입장에서 필요한 기능이 무엇인지 정의하는 것부터 어려웠다.',
        solution: '바이어가 반복적으로 요청하는 작업(상태 확인, 변경 요청, 배포)을 먼저 정리하고, 그것을 기능 단위로 포털에 집약했다.',
      },
      {
        problem: '바이어와 AI 에이전트 간 대화 기능 구현 방식이 명확하지 않았다.',
        solution: 'API 키 연결 시 해결될 구조로 설계해두었으며, 현재 연동 작업 진행 중이다.',
      },
    ],
  },
  {
    slug: 'kangkang',
    title: '강강: 강의 운영 자동화',
    agent: '강강',
    tagline: '강의 외 모든 운영 반복 업무를 자동화해 강의 본연에만 집중하는 시스템 설계',
    problem:
      '중등과학 강의를 운영하면서 실제 수업 외에 처리해야 할 일이 많다. 숙제 전달, 부모님 공지, 출석 체크, 진도표 관리 — 하나하나는 단순하지만 매번 반복되는 작업이 누적되면 상당한 리소스가 된다.',
    process: [
      { label: '공지 전달', description: '부모님께 수업 관련 공지 자동 발송' },
      { label: '숙제 배포', description: '학생별 숙제 전달 및 제출 확인 자동화' },
      { label: '출석·진도 관리', description: '출석 현황 자동 집계 및 수업별 진도 기록·공유' },
    ],
    result:
      '현재 설계 단계. 강강 에이전트 워크스페이스 구축 완료, 세부 자동화 작업 진행 중.',
    status: 'in-progress',
    tags: ['강의 운영', '교육 자동화', '반복업무 제거'],
    challenges: [
      {
        problem: '강의 운영 자동화의 범위와 구조를 어떻게 잡을지 초기 설계가 가장 큰 과제다.',
        solution: '운영 흐름을 준비-진행-사후 3단계로 구분하고 각 단계별 자동화 가능 항목을 우선순위 순으로 정리하는 방식으로 접근 중이다.',
      },
      {
        problem: '카카오톡·문자 발송 같은 메시지 자동화는 플랫폼 제약이 많아 연동이 까다롭다.',
        solution: '공식 API 제공 여부를 먼저 확인하고, 미지원 시 대안 채널(이메일, 알림 서비스) 활용을 검토 중이다.',
      },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export interface WikiTopic {
  slug: string
  icon: string
  title: string
  tagline: string
  overview: string
  tags: string[]
  sections: WikiSection[]
}

export type WikiSection =
  | { type: 'text'; heading: string; body: string }
  | { type: 'items'; heading: string; items: { label: string; description: string }[] }
  | { type: 'timeline'; heading: string; entries: { date: string; status: string; summary: string; evidence?: string }[] }
  | { type: 'rules'; heading: string; rules: string[] }

export const wikiTopics: WikiTopic[] = [
  {
    slug: 'activity-log',
    icon: '📋',
    title: '에이전트 활동 로그',
    tagline: '5개 에이전트의 일일 작업을 증거 기반으로 날짜별 누적 기록',
    overview:
      '총총·유유·강강·공공·포포의 작업 결과를 매일 status / summary / evidence / risk 형식으로 기록합니다. AI 추정 데이터 제공은 금지이며, 확인 불가 항목은 반드시 "확인 불가"로 명시합니다.',
    tags: ['활동 로그', '에이전트', '증거 기반'],
    sections: [
      {
        type: 'items',
        heading: '기록 형식',
        items: [
          { label: 'date', description: '작업 날짜 (YYYY-MM-DD)' },
          { label: 'status', description: 'success | fail | blocked | 확인 불가' },
          { label: 'summary', description: '작업 내용 한 줄 요약' },
          { label: 'evidence', description: '파일 경로, URL, 커밋 해시 등 실제 증거' },
          { label: 'risk', description: '잠재적 문제 또는 미완료 항목' },
        ],
      },
      {
        type: 'timeline',
        heading: '유유 최근 활동',
        entries: [
          {
            date: '2026-05-28',
            status: 'success',
            summary:
              '포트폴리오 기능 완성 + Vercel 배포 성공. 라이트박스, 네비게이션, 스크린샷, 프로필 사진, 게시글 링크, 전화번호 추가.',
            evidence: 'https://portfolio-wheat-beta-46.vercel.app/',
          },
          {
            date: '2026-05-27',
            status: 'success',
            summary:
              'Next.js 15 포트폴리오 사이트 신규 구축. 다크 테마, 5개 케이스 스터디 페이지, Challenges 섹션 완성.',
            evidence: 'agents/youyou/portfolio/',
          },
          {
            date: '2026-05-26',
            status: 'success',
            summary: '바이어 포털 Vercel 배포 완료, 버그 3건 수정, 유유 커넥터 CronCreate 방식으로 안정화.',
            evidence: 'https://youyou-iota.vercel.app',
          },
        ],
      },
      {
        type: 'items',
        heading: '에이전트 파일',
        items: [
          { label: 'agents/youyou.md', description: '유유 — 사이트 운영·바이어 포털' },
          { label: 'agents/popo.md', description: '포포 — 멀티플랫폼 포스팅' },
          { label: 'agents/gonggong.md', description: '공공 — AX 채용공고 크롤링·분석' },
          { label: 'agents/kangkang.md', description: '강강 — 강의 운영 자동화' },
        ],
      },
    ],
  },
  {
    slug: 'decisions',
    icon: '🧭',
    title: '의사결정 기록',
    tagline: '아키텍처·운영 결정을 맥락과 근거 함께 영구 보존',
    overview:
      '주요 결정을 내릴 때 검토한 대안, 선택 이유, 예상 리스크를 템플릿에 맞춰 기록합니다. 이후 같은 문제가 발생했을 때 근거 있는 판단을 빠르게 내릴 수 있습니다.',
    tags: ['의사결정', '아키텍처', '운영 기록'],
    sections: [
      {
        type: 'items',
        heading: '기록 형식',
        items: [
          { label: '날짜', description: '결정 일자' },
          { label: '참여자', description: '의사결정에 관여한 에이전트 및 대장' },
          { label: '검토 대안', description: '검토한 선택지 목록 (채택/폐기 표기)' },
          { label: '선택 이유', description: '채택 근거 — 기술적 제약, 운영 편의, 리스크 등' },
          { label: '예상 리스크', description: '해당 결정의 단점 및 주의 사항' },
        ],
      },
      {
        type: 'timeline',
        heading: '주요 결정 목록',
        entries: [
          {
            date: '2026-05-26',
            status: '채택',
            summary:
              '유유 커넥터 아키텍처 — CronCreate + Claude Code 직접 처리 채택. subprocess 간섭·API 크레딧 소진 문제 해결.',
            evidence: 'decisions/decision-connector-architecture-2026-05-26.md',
          },
          {
            date: '2026-05-22',
            status: '채택',
            summary:
              '그룹 단일 응답 게이트 — 총괄(총총) 단일 창구 응답 채택. 보고 형식·권한 경계 일관성 확보.',
            evidence: 'decisions/decision-single-orchestrator-gateway-2026-05-22.md',
          },
        ],
      },
    ],
  },
  {
    slug: 'structure',
    icon: '🗂',
    title: 'Obsidian 기반 구조',
    tagline: 'index / daily / agents / decisions / notes / raw 6개 레이어 지식 관리',
    overview:
      'Obsidian을 기반으로 구성된 Fivemonkeys 지식 관리 시스템입니다. 각 폴더는 명확한 역할을 가지며, 소스(raw) → 자유 기록(notes) → 구조화(decisions/daily) 순으로 지식이 흐릅니다.',
    tags: ['Obsidian', '지식 관리', '폴더 구조'],
    sections: [
      {
        type: 'items',
        heading: '폴더 구조',
        items: [
          { label: 'index.md', description: '위키 전체 인덱스. 최근 ingest 목록과 핵심 파일 포인터.' },
          { label: 'log.md', description: '작업 이력 및 검증 대기 단일 큐. 상충 정보 보류 공간.' },
          { label: 'SCHEMA.md', description: '운영 원칙 정의. ingest-first 규칙 및 decisions 템플릿.' },
          { label: 'agents/', description: '에이전트 5개별 활동 로그. 날짜·증거·리스크 기반 기록.' },
          { label: 'daily/', description: '날짜별 통합 리포트. 전체 에이전트 당일 작업 취합.' },
          { label: 'decisions/', description: '의사결정 기록. 대안·선택 이유·리스크 포함.' },
          { label: 'notes/', description: 'ingest 자유 기록 노트. 소스 처리 후 비구조화 기록.' },
          { label: 'raw/', description: '원문 소스 보관 (불변). 수정 없이 원본 그대로 유지.' },
        ],
      },
      {
        type: 'text',
        heading: '지식 흐름',
        body: 'raw/ (원문 보관) → notes/ (자유 기록) → decisions/ 또는 daily/ (구조화) → index.md (포인터 등록)\n\n소스를 먼저 raw/에 저장하고, notes/에 자유롭게 기록한 뒤, 충분한 컨텍스트가 쌓이면 decisions/나 daily/로 구조화합니다.',
      },
    ],
  },
  {
    slug: 'ingest-first',
    icon: '⚡',
    title: 'ingest-first 원칙',
    tagline: '선분류 금지 — 소스 1개 읽고 자유 기록, 구조는 나중에',
    overview:
      'Fivemonkeys 위키의 핵심 운영 원칙입니다. 지식을 수집할 때 먼저 구조를 잡으려 하면 소스의 실제 내용을 왜곡할 수 있습니다. 소스를 있는 그대로 읽고, 관찰한 것을 자유롭게 기록한 뒤, 패턴이 보이면 그때 구조를 결정합니다.',
    tags: ['운영 원칙', 'ingest-first', '지식 수집'],
    sections: [
      {
        type: 'rules',
        heading: '7가지 원칙',
        rules: [
          '선(先)스키마/선(先)분류를 하지 않는다.',
          '소스 1개를 먼저 읽고 관찰 결과를 자유 기록한다.',
          '구조(페이지 타입/폴더/상태 표기)는 소스 2~3개 처리 후 확정한다.',
          '확인된 사실과 해석을 분리한다.',
          '근거 없는 단정은 금지하며, 불명확하면 "확인 불가"로 기록한다.',
          '상충 정보는 임의로 덮어쓰지 않고 log.md의 "검증 대기" 섹션에 단일 큐로 등록한다.',
          '검증 완료 전까지 기존 주장과 신규 주장을 병기하며, 완료 시 결론/근거/반영 파일을 함께 기록한다.',
        ],
      },
      {
        type: 'items',
        heading: '1차 ingest 기록 방식',
        items: [
          { label: '반복적으로 등장하는 것', description: '소스에서 여러 번 나타나는 패턴, 키워드, 구조' },
          { label: '결정된 것', description: '명확히 확인된 사실이나 확정된 항목' },
          { label: '불명확한 것', description: '해석이 필요하거나 확인이 필요한 항목 → 검증 대기 큐에 등록' },
        ],
      },
    ],
  },
]

export function getWikiTopic(slug: string): WikiTopic | undefined {
  return wikiTopics.find((t) => t.slug === slug)
}

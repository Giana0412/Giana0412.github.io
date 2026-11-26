// Every stop on the route and the files kept there. Text is {en, ko}.
const t = (en, ko) => ({ en, ko: ko ?? en });

window.ROUTE = [
  {
    id: "jeju", lane: "kr", city: t("Jeju", "제주"), when: t("2004", "2004"),
    place: t("Jeju, Korea", "한국 제주"),
    intro: t("Born on Jeju, the island off Korea's southern coast. Primary school in Korea until grade 2.", "한국 남쪽 섬 제주에서 태어났습니다. 초등학교 2학년까지 한국에서 다녔습니다."),
    files: [
      { id: "born", no: "K-01", title: t("Born on Jeju", "제주 출생"), date: "2004",
        summary: t("Where the line starts. Korean is my first language.", "노선이 시작되는 곳. 한국어가 모국어입니다.") }
    ]
  },
  {
    id: "switzerland", lane: "ch", city: t("Switzerland", "스위스"), when: t("Grades 3–5", "초3–5"),
    place: t("Gland, on Lake Geneva", "제네바 호숫가, 글랑"),
    intro: t("First move abroad. Three years of primary school in an international school.", "처음으로 한국을 떠났습니다. 국제학교에서 초등학교 3년을 보냈습니다."),
    files: [
      { id: "lacote", no: "C-01", title: t("La Côte International School"), date: t("Grades 3–5", "초3–5"),
        place: t("Gland, Switzerland", "스위스 글랑"),
        summary: t("Grades 3 to 5, my first school outside Korea.", "초3부터 5학년까지, 한국 밖의 첫 학교.") }
    ]
  },
  {
    id: "qingdao", lane: "qd", city: t("Qingdao", "칭다오"), when: t("Grades 6–8", "초6–중2"),
    place: t("Qingdao, China", "중국 칭다오"),
    intro: t("Grades 6 to 8 at an international school. Chinese was a required class; I still study it.", "초6부터 중2까지 국제학교를 다녔습니다. 중국어가 필수였고, 지금도 공부합니다."),
    files: [
      { id: "qdschool", no: "Q-01", title: t("International school, Qingdao", "칭다오 국제학교"), date: t("Grades 6–8", "초6–중2"),
        summary: t("Chinese as a required subject, about HSK level 4 at the time.", "중국어 필수 수업. 당시 HSK 4급 정도.") }
    ]
  },
  {
    id: "jeju-again", lane: "kr", city: t("Jeju, again", "다시, 제주"), when: t("Middle school", "중학교"),
    place: t("Jeju, Korea", "한국 제주"),
    intro: t("Came home after Qingdao and finished middle school in a Korean school before leaving for Paris.", "칭다오에서 돌아와 한국 학교에서 중학교를 마치고 파리로 떠났습니다."),
    files: [
      { id: "shinsung", no: "K-02", title: t("Shinsung Girls' Middle School", "신성여자중학교"), date: t("Middle school", "중학교"),
        place: t("Jeju, Korea", "한국 제주"),
        summary: t("Back in the Korean school system, between Qingdao and Paris.", "칭다오와 파리 사이, 다시 한국 학교.") }
    ]
  },
  {
    id: "paris", lane: "pa", city: t("Paris", "파리"), when: t("2020–2023", "2020–2023"),
    place: t("ICS Paris", "ICS Paris"),
    intro: t("Finished school in English and French: the IB Diploma, and French to DELF B2.", "영어와 프랑스어로 학교를 마쳤습니다. IB 디플로마, 프랑스어 DELF B2."),
    files: [
      { id: "ib", no: "P-01", title: t("IB Diploma", "IB 디플로마"), date: t("May 2023", "2023.05"), place: t("ICS Paris"),
        summary: t("Higher Level: Korean A, English B, Business Management.", "HL: 한국어 A, 영어 B, 경영.") },
      { id: "delf", no: "P-02", title: t("DELF B2"), date: t("Aug 2022", "2022.08"),
        summary: t("French, upper intermediate.", "프랑스어 중상급.") },
      { id: "tutoring", no: "P-03", title: t("Tutoring club and clean-up day", "튜터링 클럽과 클린업 데이"), date: "2021–2023",
        summary: t("Tutoring club at ICS Paris (2022–2023); World Clean-up Day volunteer with UNESCO Paris (2021).", "ICS Paris 튜터링 클럽(2022–2023), UNESCO 파리 World Clean-up Day 봉사(2021).") }
    ]
  },
  {
    id: "hongkong", lane: "hk", city: t("Hong Kong", "홍콩"), when: t("2023–2025", "2023–2025"),
    place: t("HKUST, years one and two", "HKUST 1, 2학년"),
    intro: t("Started a BBA at HKUST and chose Information Systems. Most of what I learned came from running things: a finance society, an iGEM team's budget, a computer lab.", "HKUST 경영학부에 들어가 정보시스템을 전공으로 골랐습니다. 대부분은 무언가를 운영하며 배웠습니다. 금융 학회, iGEM 팀 예산, 컴퓨터랩."),
    files: [
      { id: "hkust", tab: t("HKUST BBA", "HKUST 정보시스템"), no: "H-01", title: t("HKUST, BBA in Information Systems", "HKUST 정보시스템 전공"), date: t("2023 – Dec 2027", "2023 – 2027.12"),
        summary: t("Business School, Information Systems major. Graduating December 2027.", "경영대 정보시스템 전공. 2027년 12월 졸업 예정.") },
      { id: "airbnb", no: "H-02", title: t("Airbnb price prediction", "Airbnb 가격 예측"), date: t("Spring 2025", "2025 봄"),
        team: t("Data mining course, team of 4", "데이터 마이닝 수업, 4인 팀"),
        summary: t("Drafted the model description and evaluation sections of the final report.", "기말 보고서의 모델 설명과 성능 평가 파트 초안을 썼습니다.") },
      { id: "kaleidoscope", no: "H-03", title: t("Kaleidoscope Capital"), date: t("Jun – Jul 2025", "2025.06 – 07"),
        team: t("Summer Analyst Training Program", "Summer Analyst Training Program"),
        summary: t("Five-week program. Contributed to the Mid-Year 2025 Strategy Outlook Report.", "5주 프로그램. Mid-Year 2025 Strategy Outlook Report 작성에 참여했습니다.") },
      { id: "kriss", no: "H-04", title: t("KRISS finance society", "KRISS 금융 학회"), date: t("2023 – 2025", "2023 – 2025"),
        team: t("Member; Management Team Feb – Nov 2025", "회원, 운영진 2025.02 – 11"),
        summary: t("HKUST KSA Research & Investment Strategy Society. In Fall 2025 ran recruiting interviews, dues and budget, career sessions and the final presentation.", "HKUST 한인학생회 금융 학회. 2025 가을 신입 면접, 회비·예산, 커리어세션, 학기말 파이널 발표를 맡았습니다.") },
      { id: "igem", no: "H-05", title: t("HKUST iGEM team", "HKUST iGEM 팀"), date: t("Jan – Oct 2025", "2025.01 – 10"),
        team: t("Team member, Treasurer", "팀원, 재무 담당"),
        summary: t("Synthetic biology project recovering cadmium from sewage-sludge ash. Minutes, team wiki and logo, cadmium research, and the budget.", "하수 슬러지 소각재에서 카드뮴을 회수하는 합성생물학 프로젝트. 서기, 팀 위키와 로고, 카드뮴 조사, 예산 관리.") },
      { id: "ta", tab: t("ISOM Teaching Assistant", "ISOM 조교"), no: "H-06", title: t("Undergraduate Teaching Assistant", "학부 조교"), date: t("2025 – 2026", "2025 – 2026"),
        team: t("HKUST ISOM"),
        summary: t("ISOM2010 computer lab (Spring 2025); ISOM2020 Coding for Business (Fall 2025, Fall 2026).", "ISOM2010 컴퓨터랩(2025 봄), ISOM2020 Coding for Business(2025 가을, 2026 가을).") },
      { id: "ambassador", no: "H-07", title: t("Business School Ambassador", "경영대 학생 홍보대사"), date: t("2024 – 2025", "2024 – 2025"),
        summary: t("Mentored Korean and IB students and gave campus tours.", "한국·IB 출신 학생 멘토링, 캠퍼스 투어.") },
      { id: "msa", tab: t("Microsoft Ambassador", "마이크로소프트 앰배서더"), no: "H-08", title: t("Microsoft Student Ambassador"), date: t("Oct 2025 –", "2025.10 –"),
        summary: t("Microsoft Student Ambassador, FY26.", "Microsoft Student Ambassador, FY26.") },
      { id: "metacode", no: "H-09", title: t("MetaCode BA Bootcamp", "MetaCode BA 부트캠프"), date: t("May – Jul 2025", "2025.05 – 07"),
        summary: t("Business Analysis Bootcamp, completed.", "Business Analysis Bootcamp 수료.") },
      { id: "korea-univ", tab: t("Korea Univ. Winter Campus", "고려대 윈터 캠퍼스"), no: "H-10", title: t("Korea University Winter Campus", "고려대 윈터 캠퍼스"), date: t("Dec 2024 – Jan 2025", "2024.12 – 2025.01"),
        summary: t("International Winter Campus, three weeks.", "International Winter Campus, 3주.") }
    ]
  },
  {
    id: "seoul", lane: "kr", city: t("Seoul", "서울"), when: t("2025–2026", "2025–2026"),
    place: t("A semester off to build", "만들기 위한 휴학"),
    intro: t("Took a semester off from HKUST to build real things: an 829-hour bootcamp, then an internship in Seoul where my work ran in production.", "진짜로 돌아가는 것을 만들려고 HKUST를 한 학기 쉬었습니다. 829시간 부트캠프, 그리고 만든 것이 프로덕션에서 돈 서울 인턴십."),
    files: [
      { id: "pipeline", no: "S-01", title: t("Event research pipeline", "이벤트 리서치 파이프라인"), date: t("Jul – Oct 2026", "2026.07 – 10"),
        team: t("OAO Corp. internship, owned end to end", "OAO 인턴, 처음부터 끝까지 담당"),
        summary: t("Agent pipeline that finds events and loads them into OAO's production database without manual data entry.", "대회·행사 정보를 사람 손 없이 찾아 OAO 프로덕션 DB에 채우는 에이전트 파이프라인."),
        sections: [
          { h: t("What", "무엇"), p: t("Finds competitions and events, enriches them with organizer details, and loads them into the production database. Stages: discover → enrich → org-enrich → adjudicate.", "대회·행사를 찾아 주최사 정보까지 보강한 뒤 프로덕션 DB에 채웁니다. 단계는 discover → enrich → org-enrich → adjudicate.") },
          { h: t("How", "어떻게"), li: [
            t("The LLM only proposes; code independently checks whether a change may be written.", "LLM은 제안만 하고, 반영 여부는 코드가 따로 확인합니다."),
            t("Report numbers come from code, not the model's own summary.", "리포트 숫자는 모델의 자기보고가 아니라 코드 집계입니다."),
            t("Started as an n8n workflow, then rebuilt as a scheduled Python pipeline.", "n8n 워크플로로 시작해 스케줄로 도는 Python 파이프라인으로 다시 만들었습니다."),
            t("A fix counted as done only after the job ran cleanly several days in a row.", "며칠 연속 정상 동작을 확인한 뒤에야 완료로 처리했습니다.") ] },
          { h: t("Role", "역할"), p: t("Design, implementation, production rollout and the operations hand-over document.", "설계, 구현, 프로덕션 이관, 운영 인계 문서.") }
        ],
        tags: ["Python", "LLM APIs", "cron", "n8n", "Claude Code"], private: t("Company code, not public.", "회사 코드라 공개하지 않습니다.") },
      { id: "wiki", no: "S-02", title: t("Team wiki and agent rules", "팀 위키와 에이전트 규칙"), date: t("Aug – Oct 2026", "2026.08 – 10"),
        team: t("OAO Corp. internship", "OAO 인턴"),
        summary: t("An LLM-maintained team wiki, then rules for the company's AI agents enforced in code rather than left as a document.", "LLM이 유지하는 팀 지식 위키, 그리고 회사 AI 에이전트의 규칙을 문서가 아니라 코드로 강제하는 장치."),
        sections: [
          { h: t("Wiki", "위키"), p: t("Wrote the proposal and first prototype, designed and validated the git sync policy, built the skills and collection scripts, and ran the company-wide onboarding. The team lead owned the final design.", "도입 제안서와 첫 프로토타입, git 동기화 정책 설계·검증, 스킬과 수집 스크립트 구현, 전사 온보딩을 맡았습니다. 본 설계는 팀 리드가 했습니다.") },
          { h: t("Constitution", "헌법"), p: t("Design, testing and implementation, with direction and approval from the team lead. Tested with dilemma questions whether rule wording changes model decisions; built a sandbox with deny rules, a git check that only humans edit the rules, per-agent budgets and a read-only dry run on real data.", "설계·검증·구현을 맡았고 방향과 승인은 팀 리드가 했습니다. 딜레마 문항으로 규칙 문장이 모델 판단을 바꾸는지 시험하고, deny 규칙·사람만 규칙을 고쳤는지 보는 git 검사·에이전트별 예산·실데이터 읽기 전용 dry-run을 갖춘 샌드박스를 만들었습니다.") },
          { h: t("Outcome", "결과"), p: t("Reported the results as they were: the rules changed judgment only on company-specific questions. Shared the draft company-wide before the internship ended.", "결과는 있는 그대로 보고했습니다. 규칙은 회사 고유 기준 문항에서만 차이를 냈습니다. 인턴 종료 전 초안을 전사에 공유했습니다.") }
        ],
        tags: ["Obsidian", "Git hooks", "Python", "Claude Code"], private: t("Company work, not public.", "회사 작업이라 공개하지 않습니다.") },
      { id: "alphaprobe", no: "S-03", title: t("AlphaProbe", "알파프로브"), date: t("Apr – May 2026", "2026.04 – 05"),
        team: t("Multicampus bootcamp, team of 4, team lead", "멀티캠퍼스 부트캠프, 4인 팀, 팀장"),
        big: t("30 → 3 min", "30분 → 3분"), bigNote: t("to collect, analyse and write one company report", "기업 1곳 수집·분석·보고서 작성"),
        summary: t("Committee-style multi-agent LLM system that evaluates 30 Korean semiconductor companies. “Best Project Team”, and I was named “Best Project Trainee”.", "국내 반도체 상장사 30곳을 평가하는 위원회형 멀티에이전트 LLM 시스템. “프로젝트 최우수팀”, 개인 “최우수 훈련생”."),
        sections: [
          { h: t("How", "어떻게"), p: t("Domain agents analyse, an Auditor checks, a Chair combines. Agent weights are updated with Dynamic Model Averaging (DMA).", "도메인 에이전트가 분석하고 Auditor가 검증하고 Chair가 통합합니다. 가중치는 DMA로 갱신합니다.") },
          { h: t("My part", "내 몫"), li: [
            t("Owned the Market and Issue agents; extended Market from 5 to 30 companies with automatic DART code mapping.", "Market·Issue 에이전트 담당. DART 코드 자동 매핑으로 Market 대상을 5곳에서 30곳으로 넓혔습니다."),
            t("Flagged look-ahead bias (no date cut-off) and added a cut-off.", "날짜 컷오프가 없어 생기는 look-ahead bias를 찾아 컷오프를 넣었습니다."),
            t("Backtest: DMA momentum +39% vs +19% simple momentum, before transaction costs.", "백테스트: DMA 모멘텀 +39%, 단순 모멘텀 +19%(거래 비용 미반영)."),
            t("First author of an abstract proposing an evidence–contribution agreement (GAA) metric.", "근거-기여도 일치율(GAA) 지표를 제안한 초록의 제1저자.") ] },
          { h: t("After", "이후"), p: t("The same team adapted it for the JB Financial Group contest, with me as PM.", "같은 팀이 JB금융그룹 공모전용으로 확장했고 저는 PM을 맡았습니다.") }
        ],
        tags: ["Python", "LangGraph", "OpenAI API", "Gemini API", "DART API", "SQLite"],
        links: [{ href: "https://github.com/Giana0412/jbproject", label: t("github.com/Giana0412/jbproject") }] },
      { id: "bootcamp", no: "S-04", title: t("Multicampus bootcamp", "멀티캠퍼스 부트캠프"), date: t("Dec 2025 – Jun 2026", "2025.12 – 2026.06"),
        team: t("Financial Data Analysis, 829 hours", "금융데이터분석, 829시간"),
        summary: t("Statistics, machine learning, time series, NLP, LLM agents (LangChain, LangGraph), quant strategy, recommender systems.", "통계, 머신러닝, 시계열, NLP, LLM 에이전트(LangChain, LangGraph), 퀀트 전략, 추천시스템.") },
      { id: "oao", no: "S-05", title: t("OAO Corp. internship", "OAO 인턴십"), date: t("Jun – Oct 2026", "2026.06 – 10"),
        team: t("Product Staff (Intern)", "Product Staff (인턴)"),
        summary: t("Full-time in Seoul over the summer, then remote part-time from Hong Kong from mid-September. AI and automation for the team.", "여름엔 서울 풀타임, 9월 중순부터 홍콩에서 원격 파트타임. 팀의 AI·자동화 업무.") },
      { id: "quant", no: "S-06", title: t("quant_auto"), date: t("Aug 2026 –", "2026.08 –"),
        team: t("Personal project, built and run alone", "개인 프로젝트, 혼자 만들고 운영"),
        summary: t("Market-research pipeline that runs every morning and sends a Telegram briefing before the Korean market opens.", "매일 아침 돌아 한국장 개장 전 텔레그램 브리핑을 보내는 시장 리서치 파이프라인."),
        sections: [
          { h: t("What's in it", "들어 있는 것"), li: [
            t("Sector and style rotation, screening, a 5–7 stock model book with correlation filters and position caps.", "섹터·스타일 로테이션, 스크리닝, 상관 필터와 비중 상한을 둔 5–7종목 모델 북."),
            t("Paper tracking that records and scores its own calls.", "자기 판단을 기록하고 채점하는 페이퍼 트래킹."),
            t("After a silent failure, evening jobs chained in order with timeouts and locks, and a watchdog outside the chain.", "조용한 실패 뒤 저녁 잡을 타임아웃·락이 있는 순차 체인으로 묶고 체인 밖 감시견을 뒀습니다."),
            t("Withdrew a backtest-based parameter choice when 12 samples swung with window alignment.", "12회 표본이 창 정렬에 따라 흔들리자 백테스트로 고른 파라미터 근거를 철회했습니다.") ] }
        ],
        tags: ["Python", "Shell", "launchd", "yfinance", "gs-quant", "Telegram"],
        links: [{ href: "https://github.com/Giana0412/quant_auto", label: t("github.com/Giana0412/quant_auto") }] },
      { id: "mirae", no: "S-07", title: t("Disclosure Q&A agent", "공시 Agent"), date: t("Jul – Sep 2026", "2026.07 – 09"),
        team: t("Mirae Asset Securities AI Festival, team of 2", "미래에셋증권 AI Festival, 2인 팀"),
        summary: t("Answers questions about Korean corporate filings with the supporting filing attached, keeping invented numbers out.", "기업 공시 질문에 근거 공시를 붙여 답하고, 지어낸 숫자가 들어가지 않게 한 에이전트."),
        sections: [
          { h: t("Key decision", "핵심 판단"), p: t("About a quarter of the corpus amended other filings, so filings were modelled as a time-ordered ledger of facts. Code fixes the evidence and numbers; the LLM only writes the prose.", "코퍼스의 약 4분의 1이 정정 공시라 공시를 시간 순 사실 원장으로 모델링했습니다. 근거와 숫자는 코드가, 서술만 LLM이 맡습니다.") },
          { h: t("My part", "내 몫"), li: [
            t("Planning and PM: scope, feature spec, meetings.", "기획·PM: 범위, 기능명세서, 회의."),
            t("Deterministic layer: correction chains, a SQLite ledger with “known on” and “effective on” dates, full-text search, an evaluation API server.", "결정론 계층: 정정 공시 체인, “알려진 날”·“유효한 날” SQLite 원장, 전문 검색, 평가용 API 서버."),
            t("QA before submission: rebuilt the teammate's branch from scratch and fixed answer bugs.", "제출 전 QA: 팀원 브랜치를 처음부터 다시 빌드해 검증하고 답변 버그를 고쳤습니다.") ] }
        ],
        tags: ["Python", "SQLite FTS5", "HyperCLOVA X", "Docker"], private: t("Repository is private.", "저장소는 비공개입니다.") },
      { id: "breathin", no: "S-08", title: t("Breathin"), date: t("Jul – Sep 2026", "2026.07 – 09"),
        team: t("Korea Tourism Organization data contest, team of 4", "한국관광공사 관광데이터 공모전, 4인 팀"),
        summary: t("Outdoor travel app for trails reachable by public transport, with missions and badges.", "대중교통으로 갈 수 있는 산·숲길을 미션·배지와 함께 추천하는 앱."),
        sections: [
          { h: t("My part", "내 몫"), li: [
            t("Service planner: final feature spec, reward policy, per-screen requirements, 30-mission dataset.", "서비스 기획: 최종 기능명세서, 보상 정책, 화면별 요구사항, 미션 데이터 30개."),
            t("Tested every backend API, fixed bugs, deployed to AWS EC2.", "백엔드 API 전수 테스트와 버그 수정, AWS EC2 배포."),
            t("Switched to a web release when app review needed a location-service filing.", "앱 심사에 위치정보 신고가 필요해지자 웹 출시로 전환.") ] }
        ],
        tags: ["Expo", "TypeScript", "Spring Boot", "MySQL", "AWS EC2"], private: t("Repository is private.", "저장소는 비공개입니다.") },
      { id: "jungo", no: "S-09", title: t("Chatbot consistency test", "챗봇 일관성 실험"), date: t("Jun 2026", "2026.06"),
        summary: t("A GPT-4o character bot tested on 30 automated scenarios, scored consistent / awkward / broken (67% / 30% / 3%), iterated v1 → v3.", "GPT-4o 캐릭터 챗봇을 30개 시나리오로 자동 테스트해 일관 / 어색 / 붕괴(67% / 30% / 3%)로 집계하고 v1 → v3로 고쳤습니다."),
        links: [{ href: "https://github.com/Giana0412/jungo-chatbot", label: t("github.com/Giana0412/jungo-chatbot") }] },
      { id: "backtest", no: "S-10", title: t("Multi-agent quant backtesting", "멀티에이전트 퀀트 백테스팅"), date: t("Mar 2026", "2026.03"),
        summary: t("Natural-language strategy → generated backtest → analysis → human-approved improvement → report.", "자연어 전략 → 백테스트 생성·실행 → 분석 → 사람 승인 개선 → 리포트.") }
    ]
  },
  {
    id: "hongkong-now", lane: "hk", city: t("Hong Kong, again", "다시, 홍콩"), when: t("2026 –", "2026 –"),
    place: t("HKUST, final year", "HKUST 마지막 학년"),
    intro: t("Back at HKUST for the last stretch, teaching a coding lab and building on my own again.", "마지막 구간을 위해 HKUST로 돌아왔습니다. 코딩 수업 조교를 하며 다시 혼자 만들고 있습니다."),
    files: [
      { id: "aurora", no: "H-11", title: t("Aurora Decision Desk"), date: t("Nov 2026", "2026.11"),
        team: t("AX Talent War round 1, Samil PwC case, solo", "AX인재전쟁 1회차, 삼일PwC 출제, 개인 참가"),
        big: t("Top 10%", "상위 10%"), bigNote: t("of 2,916 entrants", "참가자 2,916명 중"),
        summary: t("Approval tool for sales-incentive payouts: the rule engine calculates, AI explains, people approve.", "판매장려금 지급 승인 도구. 계산은 규칙 엔진이, 설명은 AI가, 승인은 사람이."),
        sections: [
          { h: t("Checks", "검증"), li: [
            t("AI text that cites a number or source the engine did not produce is discarded and replaced by a template (61 of 61 passed).", "엔진에 없는 숫자·근거를 쓴 AI 문안은 버리고 템플릿을 씁니다(61개 중 61개 통과)."),
            t("63 golden tests fix the key figures; source CSVs are pinned by sha256.", "골든 테스트 63개로 핵심 숫자를 고정하고 원본 CSV는 sha256으로 고정했습니다.") ] },
          { h: t("My part", "내 몫"), p: t("A Claude Code agent wrote most of the code. I set the design rules, approved each checkpoint, defined the decision logic and checked the results.", "코드 대부분은 Claude Code 에이전트가 썼습니다. 저는 설계 규칙을 정하고, 체크포인트마다 승인하고, 판정 논리를 정하고, 결과를 확인했습니다.") }
        ],
        tags: ["Node.js", "Postgres", "Anthropic API", "Claude Code"],
        links: [
          { href: "aurora-decision-desk.html", label: t("Read the case study", "케이스 스터디") },
          { href: "https://aurora-decision-desk-pvfi.axhub.app", label: t("Live app", "배포 앱") },
          { href: "https://axacademy.ai/axwar/cert/KYoa614kNjyVQr7mn4xbeoec", label: t("Certificate", "인증서") } ] },
      { id: "bloomberg", no: "H-12", title: t("Trading team chart app", "트레이딩 팀 차트 앱"), date: t("Sep – Nov 2026", "2026.09 – 11"),
        team: t("Bloomberg Trading Challenge, team of 3", "Bloomberg Trading Challenge, 3인 팀"),
        summary: t("Streamlit app for my team: charts with stop levels, portfolio tracker, earnings radar, news summaries and a chatbot.", "팀용 Streamlit 앱: 손절가 차트, 포트폴리오 트래커, 실적 레이더, 뉴스 요약, 챗봇."),
        sections: [
          { h: t("Notes", "메모"), li: [
            t("Trades told to the chatbot reach Google Sheets only after a person confirms.", "챗봇 거래 기록은 사람이 확인해야 Google Sheets에 들어갑니다."),
            t("Turned team decisions into screener rules (universe, sector caps, 5–7 positions) and kept a decision log.", "팀 결정을 스크리너 규칙(유니버스, 섹터 상한, 5–7종목)으로 옮기고 결정 로그를 남겼습니다.") ] }
        ],
        tags: ["Python", "Streamlit", "Google Sheets", "Gemini API"],
        links: [{ href: "https://github.com/Giana0412/bloomberg-chart-app", label: t("github.com/Giana0412/bloomberg-chart-app") }] }
    ]
  },
  {
    id: "manulife", lane: "hk", next: true, city: t("Manulife", "Manulife"), when: t("Jan – Jul 2027", "2027.01 – 07"),
    place: t("Next stop · Hong Kong", "다음 정거장 · 홍콩"),
    intro: t("Co-op in the Tech Placement Program, Digital Platforms. Then graduation in December 2027.", "Tech Placement Program Co-op, Digital Platforms. 이후 2027년 12월 졸업."),
    files: [
      { id: "manulife-coop", no: "N-01", title: t("Manulife Co-op", "Manulife 코업"), date: t("Jan – Jul 2027", "2027.01 – 07"),
        team: t("Tech Placement Program · Digital Platforms", "Tech Placement Program · Digital Platforms"),
        summary: t("Six months in Hong Kong, starting 11 January 2027.", "2027년 1월 11일부터 홍콩에서 6개월.") }
    ]
  }
];

window.SKILLS = [
  [t("AI and agents", "AI·에이전트"), t("LLM pipelines and multi-agent systems, LangGraph / LangChain, OpenAI, Anthropic, Gemini and HyperCLOVA X APIs, evaluation harnesses, Claude Code", "LLM 파이프라인과 멀티에이전트 시스템, LangGraph / LangChain, OpenAI·Anthropic·Gemini·HyperCLOVA X API, 평가 하네스, Claude Code")],
  [t("Engineering", "엔지니어링"), t("Python, Shell, SQLite, Postgres, Git, Docker, AWS EC2, Streamlit, launchd / cron", "Python, Shell, SQLite, Postgres, Git, Docker, AWS EC2, Streamlit, launchd / cron")],
  [t("Data and finance", "데이터·금융"), t("pandas, statsmodels, random forest, XGBoost, time series, backtesting, yfinance, gs-quant, DART filings", "pandas, statsmodels, 랜덤 포레스트, XGBoost, 시계열, 백테스트, yfinance, gs-quant, DART 공시")],
  [t("Product", "기획"), t("Feature specs, user flows, reward and pricing design, meeting facilitation and written decision records, Figma, Canva", "기능명세서, 유저 플로우, 보상·가격 설계, 회의 진행과 결정 기록, Figma, Canva")],
  [t("Languages", "언어"), t("Korean (native), English (TOEIC 910), French (DELF B2), Chinese (basic)", "한국어(모국어), 영어(TOEIC 910), 프랑스어(DELF B2), 중국어(기초)")]
];

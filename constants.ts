import type { Slide } from './types';

export const slides: Slide[] = [
  {
    id: 'intro',
    title: '강사 소개',
    section: '시작',
    content: [
      {
        type: 'title',
        data: {
          title: 'AI 활용 완벽 가이드',
          subtitle: '프롬프트 & 컨텍스트 엔지니어링 강의안',
          author: '이 상 수'
        }
      }
    ]
  },
  {
    id: 'objectives',
    title: '학습 목표',
    section: '시작',
    content: [
      {
        type: 'text',
        data: '이 강의를 통해 달성할 수 있는 목표들입니다.'
      },
      {
        type: 'list',
        data: [
          '프롬프트 엔지니어링의 기본 개념과 원리 이해',
          '효과적인 프롬프트 작성을 위한 6가지 핵심 공식 습득',
          '컨텍스트 엔지니어링의 5가지 기법 마스터',
          '실무에서 바로 활용 가능한 AI 활용 전략 습득'
        ]
      }
    ]
  },
  {
    id: 'prompt-importance',
    title: '1장: 프롬프트의 중요성',
    section: 'Part 1. 프롬프트 엔지니어링',
    content: [
      {
        type: 'text',
        data: '프롬프트는 AI와 소통하는 언어입니다. 좋은 프롬프트는 AI의 잠재력을 최대한 끌어내는 열쇠입니다.'
      },
      {
        type: 'list',
        data: [
          '프롬프트의 품질이 AI 결과물의 80%를 결정',
          '명확한 지시가 정확한 결과를 보장',
          '체계적인 접근법으로 일관된 품질 확보',
          '시간과 비용을 절약하는 효율적인 소통'
        ]
      }
    ]
  },
  {
    id: 'six-formulas',
    title: '2장: 핵심 공식 6가지',
    section: 'Part 1. 프롬프트 엔지니어링',
    content: [
      {
        type: 'text',
        data: '프롬프트 작성을 위한 6가지 검증된 공식을 소개합니다.'
      },
      {
        type: 'list',
        data: [
          'CO-STAR: 맥락, 목표, 스타일, 톤, 대상, 응답형식',
          'PTCF: 목적, 작업, 맥락, 형식',
          'CLEAR: 간결함, 논리성, 구체성, 적응성, 반복성',
          'RISE: 역할, 지시, 단계, 예시',
          'SMART: 구체적, 측정가능, 달성가능, 관련성, 시간제한',
          '5W1H: 누가, 무엇을, 언제, 어디서, 왜, 어떻게'
        ]
      }
    ]
  },
  {
    id: 'costar',
    title: '공식 1: CO-STAR',
    section: 'Part 1. 프롬프트 엔지니어링',
    subsection: '핵심 공식',
    content: [
      {
        type: 'text',
        data: 'CO-STAR는 가장 체계적인 프롬프트 작성 공식입니다.'
      },
      {
        type: 'example',
        data: `
**Context (맥락)**: 당신은 마케팅 전문가입니다.
**Objective (목표)**: SNS 광고 문구를 작성해주세요.
**Style (스타일)**: 친근하고 매력적인 톤으로
**Tone (어조)**: 젊은 층을 대상으로 한 활기찬 분위기
**Audience (대상)**: 20-30대 직장인
**Response (응답형식)**: 3개의 옵션으로 제시
        `
      }
    ]
  },
  {
    id: 'context-engineering',
    title: '4장: 컨텍스트의 이해',
    section: 'Part 2. 컨텍스트 엔지니어링',
    content: [
      {
        type: 'text',
        data: '컨텍스트는 AI가 상황을 이해하고 적절한 응답을 생성하는 기반입니다.'
      },
      {
        type: 'list',
        data: [
          '맥락 정보가 응답 품질을 좌우',
          '배경 지식과 상황 인식의 중요성',
          '단계적 정보 제공의 효과',
          '피드백을 통한 지속적 개선'
        ]
      }
    ]
  },
  {
    id: 'five-techniques',
    title: '5장: 컨텍스트 기법 5가지',
    section: 'Part 2. 컨텍스트 엔지니어링',
    content: [
      {
        type: 'text',
        data: '효과적인 컨텍스트 구성을 위한 5가지 핵심 기법입니다.'
      },
      {
        type: 'list',
        data: [
          '역할 할당법: AI에게 전문가 역할 부여',
          '데이터 기법: 구체적인 정보와 예시 제공',
          '시나리오 기법: 상황과 조건 설정',
          '단계별 학습: 점진적 정보 전달',
          '피드백 순환: 결과를 바탕으로 개선'
        ]
      }
    ]
  }
];
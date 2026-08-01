const Q1_DATA = {
  "meta": {
    "title": "연애에서 내가 갈망하는 장면: 균형형 분기 질문",
    "version": "3.0.0",
    "scenarioCount": 12,
    "questionsPerScenario": 5,
    "definedQuestionCount": 60,
    "optionsPerScenario": 20,
    "totalOptionCount": 240,
    "scoringNote": "각 선택지는 하나의 primaryDesire만 부여하며, 실제 검사 화면에서는 유형 코드를 숨긴다."
  },
  "desireTypes": {
    "safety": {
      "label": "안전성"
    },
    "belonging": {
      "label": "소속감"
    },
    "specialness": {
      "label": "특별함"
    },
    "caregiver": {
      "label": "보호자"
    },
    "autonomy": {
      "label": "독립심"
    },
    "competence": {
      "label": "유능함"
    },
    "growth": {
      "label": "성장·발전형"
    }
  },
  "scenarios": [
    {
      "id": "S01",
      "title": "갈등 뒤에도 굳건한 너",
      "primaryQuestion": {
        "id": "S01_Q1",
        "type": "single_select",
        "text": "연인과 크게 다툰 뒤 서로 마음이 상한 상태입니다. 상대가 어떻게 다가올 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S01_Q1_A",
            "label": "A",
            "text": "관계를 끝낼 생각은 없다고 분명히 말하며 대화를 제안한다.",
            "primaryDesire": "safety",
            "nextQuestionId": "S01_Q2_A",
            "score": 1
          },
          {
            "id": "S01_Q1_B",
            "label": "B",
            "text": "누가 이겼는지보다 우리가 다시 같은 편이 되는 것이 중요하다고 말한다.",
            "primaryDesire": "belonging",
            "nextQuestionId": "S01_Q2_B",
            "score": 1
          },
          {
            "id": "S01_Q1_C",
            "label": "C",
            "text": "다투는 중에도 내가 여전히 가장 소중한 사람이라고 표현한다.",
            "primaryDesire": "specialness",
            "nextQuestionId": "S01_Q2_C",
            "score": 1
          },
          {
            "id": "S01_Q1_D",
            "label": "D",
            "text": "내가 받은 상처를 먼저 살피고 편안해질 때까지 기다려준다.",
            "primaryDesire": "caregiver",
            "nextQuestionId": "S01_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S01_Q2_A",
          "triggerOptionId": "S01_Q1_A",
          "type": "single_select",
          "text": "상대가 관계를 끝낼 생각은 없다고 말하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S01_Q2_A_1",
              "label": "1",
              "text": "화해할지 말지 결정할 시간을 내 방식대로 가질 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S01_Q2_A_2",
              "label": "2",
              "text": "갈등을 피하지 않고 해결할 능력이 있는 사람처럼 느껴져서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S01_Q2_A_3",
              "label": "3",
              "text": "이번 갈등을 계기로 더 나은 관계 방식을 만들 수 있을 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S01_Q2_A_4",
              "label": "4",
              "text": "다투더라도 관계 자체는 쉽게 무너지지 않는다는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            }
          ]
        },
        {
          "id": "S01_Q2_B",
          "triggerOptionId": "S01_Q1_B",
          "type": "single_select",
          "text": "상대가 우리가 다시 같은 편이 되는 것을 중요하게 여기는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S01_Q2_B_1",
              "label": "1",
              "text": "문제 속에서도 둘이 한 팀이라는 느낌을 되찾을 수 있어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S01_Q2_B_2",
              "label": "2",
              "text": "갈등보다 나와의 관계를 우선한다는 느낌이 들어서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S01_Q2_B_3",
              "label": "3",
              "text": "누가 옳은지 따지기 전에 내 마음을 먼저 보살펴주는 것 같아서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S01_Q2_B_4",
              "label": "4",
              "text": "서로 다른 생각을 가진 채로도 각자의 입장을 존중할 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            }
          ]
        },
        {
          "id": "S01_Q2_C",
          "triggerOptionId": "S01_Q1_C",
          "type": "single_select",
          "text": "상대가 내가 여전히 소중하다고 표현하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S01_Q2_C_1",
              "label": "1",
              "text": "화가 난 상황에서도 내 가치가 부정되지 않는다는 느낌이 들어서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S01_Q2_C_2",
              "label": "2",
              "text": "서로의 부족한 점을 이해하며 관계가 성숙해질 수 있을 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S01_Q2_C_3",
              "label": "3",
              "text": "상대의 감정이 변해도 관계의 기반은 남아 있다는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S01_Q2_C_4",
              "label": "4",
              "text": "갈등 속에서도 정서적으로 연결되어 있다는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            }
          ]
        },
        {
          "id": "S01_Q2_D",
          "triggerOptionId": "S01_Q1_D",
          "type": "single_select",
          "text": "상대가 내 상처를 먼저 살피고 기다려주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S01_Q2_D_1",
              "label": "1",
              "text": "화가 난 순간에도 내가 특별히 보호받는 사람처럼 느껴져서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S01_Q2_D_2",
              "label": "2",
              "text": "내가 회복할 수 있도록 따뜻하게 돌봐주는 것 같아서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S01_Q2_D_3",
              "label": "3",
              "text": "당장 말하거나 용서하도록 압박하지 않아서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S01_Q2_D_4",
              "label": "4",
              "text": "내 감정을 스스로 정리하고 전달할 능력을 믿어주는 것 같아서",
              "primaryDesire": "competence",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S02",
      "title": "아플 때 곁에 있어주는 너",
      "primaryQuestion": {
        "id": "S02_Q1",
        "type": "single_select",
        "text": "몸이 아파 일상생활이 힘든 날입니다. 연인이 어떤 방식으로 반응할 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S02_Q1_A",
            "label": "A",
            "text": "회복한 뒤 생활을 다시 정돈할 수 있도록 작은 계획을 함께 세운다.",
            "primaryDesire": "growth",
            "nextQuestionId": "S02_Q2_A",
            "score": 1
          },
          {
            "id": "S02_Q1_B",
            "label": "B",
            "text": "급한 상황이 생기면 언제든 연락하라고 하며 확실한 도움 방법을 정한다.",
            "primaryDesire": "safety",
            "nextQuestionId": "S02_Q2_B",
            "score": 1
          },
          {
            "id": "S02_Q1_C",
            "label": "C",
            "text": "떨어져 있어도 하루 동안 내 상태를 계속 공유하며 함께 버틴다는 느낌을 준다.",
            "primaryDesire": "belonging",
            "nextQuestionId": "S02_Q2_C",
            "score": 1
          },
          {
            "id": "S02_Q1_D",
            "label": "D",
            "text": "다른 일보다 내 상태를 우선해 시간을 내고 찾아온다.",
            "primaryDesire": "specialness",
            "nextQuestionId": "S02_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S02_Q2_A",
          "triggerOptionId": "S02_Q1_A",
          "type": "single_select",
          "text": "상대가 회복 이후의 계획까지 함께 세워주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S02_Q2_A_1",
              "label": "1",
              "text": "아픈 동안 필요한 것을 세심하게 챙겨주는 마음이 느껴져서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S02_Q2_A_2",
              "label": "2",
              "text": "내가 원하는 회복 방식과 속도를 존중해줘서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S02_Q2_A_3",
              "label": "3",
              "text": "내가 다시 일상을 회복할 수 있는 사람이라고 믿어줘서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S02_Q2_A_4",
              "label": "4",
              "text": "이번 일을 계기로 더 건강한 생활 방식을 만들 수 있을 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            }
          ]
        },
        {
          "id": "S02_Q2_B",
          "triggerOptionId": "S02_Q1_B",
          "type": "single_select",
          "text": "상대가 확실한 도움 방법을 정해주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S02_Q2_B_1",
              "label": "1",
              "text": "위급할 때 실제로 의지할 곳이 있다는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S02_Q2_B_2",
              "label": "2",
              "text": "혼자 아픈 것이 아니라 둘이 함께 대처하는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S02_Q2_B_3",
              "label": "3",
              "text": "내 상태를 다른 일보다 중요하게 여기는 것 같아서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S02_Q2_B_4",
              "label": "4",
              "text": "말뿐 아니라 구체적인 행동으로 나를 돌봐줘서",
              "primaryDesire": "caregiver",
              "score": 2
            }
          ]
        },
        {
          "id": "S02_Q2_C",
          "triggerOptionId": "S02_Q1_C",
          "type": "single_select",
          "text": "상대가 떨어져 있어도 하루를 함께 버텨주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S02_Q2_C_1",
              "label": "1",
              "text": "필요할 때는 쉬고 싶다고 말할 수 있을 만큼 내 방식을 존중해줘서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S02_Q2_C_2",
              "label": "2",
              "text": "상태를 설명하고 도움을 조율할 능력을 인정받는 것 같아서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S02_Q2_C_3",
              "label": "3",
              "text": "힘든 경험도 함께 지나가며 관계가 깊어질 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S02_Q2_C_4",
              "label": "4",
              "text": "혼자 남겨진 것이 아니라는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            }
          ]
        },
        {
          "id": "S02_Q2_D",
          "triggerOptionId": "S02_Q1_D",
          "type": "single_select",
          "text": "상대가 다른 일보다 나를 우선해 찾아오는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S02_Q2_D_1",
              "label": "1",
              "text": "가장 힘든 순간을 함께하는 가까운 사람이라는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S02_Q2_D_2",
              "label": "2",
              "text": "내가 상대에게 우선적으로 선택받는 존재라는 증거 같아서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S02_Q2_D_3",
              "label": "3",
              "text": "약한 상태의 나를 기꺼이 보호해주는 것 같아서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S02_Q2_D_4",
              "label": "4",
              "text": "내가 원하는 도움의 범위는 스스로 정할 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S03",
      "title": "다른 사람들에게 나를 자랑하는 너",
      "primaryQuestion": {
        "id": "S03_Q1",
        "type": "single_select",
        "text": "연인과 함께 지인들의 모임에 참석했습니다. 상대가 나를 어떻게 대할 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S03_Q1_A",
            "label": "A",
            "text": "내가 잘하는 일과 성취를 구체적으로 소개하며 의견을 존중한다.",
            "primaryDesire": "competence",
            "nextQuestionId": "S03_Q2_A",
            "score": 1
          },
          {
            "id": "S03_Q1_B",
            "label": "B",
            "text": "내가 관심 있는 새로운 사람들과 자연스럽게 연결될 수 있도록 돕는다.",
            "primaryDesire": "growth",
            "nextQuestionId": "S03_Q2_B",
            "score": 1
          },
          {
            "id": "S03_Q1_C",
            "label": "C",
            "text": "낯선 자리에서도 내 편이 되어주고 불편한 상황이 생기면 함께 자리를 벗어난다.",
            "primaryDesire": "safety",
            "nextQuestionId": "S03_Q2_C",
            "score": 1
          },
          {
            "id": "S03_Q1_D",
            "label": "D",
            "text": "따로 대화하더라도 자주 눈을 맞추고 다시 나에게 돌아와 함께한다.",
            "primaryDesire": "belonging",
            "nextQuestionId": "S03_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S03_Q2_A",
          "triggerOptionId": "S03_Q1_A",
          "type": "single_select",
          "text": "상대가 내 성취와 의견을 존중해주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S03_Q2_A_1",
              "label": "1",
              "text": "여러 사람 중에서도 나를 자랑스럽게 여긴다는 느낌이 들어서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S03_Q2_A_2",
              "label": "2",
              "text": "내가 불편하지 않은지 살피며 대화를 이어가게 도와줘서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S03_Q2_A_3",
              "label": "3",
              "text": "나 대신 말하지 않고 내가 직접 표현하도록 공간을 줘서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S03_Q2_A_4",
              "label": "4",
              "text": "내 능력과 생각을 믿을 만한 것으로 인정해줘서",
              "primaryDesire": "competence",
              "score": 2
            }
          ]
        },
        {
          "id": "S03_Q2_B",
          "triggerOptionId": "S03_Q1_B",
          "type": "single_select",
          "text": "상대가 새로운 사람들과 연결되도록 돕는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S03_Q2_B_1",
              "label": "1",
              "text": "연애를 통해 내 세계와 가능성이 넓어지는 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S03_Q2_B_2",
              "label": "2",
              "text": "낯선 자리에서도 상대가 곁을 지켜줄 것이라는 확신이 있어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S03_Q2_B_3",
              "label": "3",
              "text": "서로의 인간관계를 나누며 한 공동체에 속한 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S03_Q2_B_4",
              "label": "4",
              "text": "상대가 내 매력을 다른 사람에게도 보여주고 싶어 하는 것 같아서",
              "primaryDesire": "specialness",
              "score": 2
            }
          ]
        },
        {
          "id": "S03_Q2_C",
          "triggerOptionId": "S03_Q1_C",
          "type": "single_select",
          "text": "상대가 불편한 상황에서 내 편이 되어주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S03_Q2_C_1",
              "label": "1",
              "text": "내 표정과 상태를 세심하게 살펴주는 것 같아서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S03_Q2_C_2",
              "label": "2",
              "text": "내가 남을지 떠날지 스스로 선택하도록 존중해줘서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S03_Q2_C_3",
              "label": "3",
              "text": "상황을 현명하게 처리할 수 있는 사람으로 나를 대우해줘서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S03_Q2_C_4",
              "label": "4",
              "text": "새로운 사회적 경험에 도전해도 함께 배울 수 있을 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            }
          ]
        },
        {
          "id": "S03_Q2_D",
          "triggerOptionId": "S03_Q1_D",
          "type": "single_select",
          "text": "상대가 다시 나에게 돌아와 함께하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S03_Q2_D_1",
              "label": "1",
              "text": "사람이 많은 곳에서도 우리 관계가 흔들리지 않는다는 느낌이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S03_Q2_D_2",
              "label": "2",
              "text": "각자 어울리다가도 결국 서로에게 돌아오는 한 팀 같아서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S03_Q2_D_3",
              "label": "3",
              "text": "여러 사람 중에서도 내가 가장 가까운 사람이라는 느낌이 들어서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S03_Q2_D_4",
              "label": "4",
              "text": "내가 혼자라고 느끼지 않도록 살펴주는 것 같아서",
              "primaryDesire": "caregiver",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S04",
      "title": "나의 결정을 응원하는 너",
      "primaryQuestion": {
        "id": "S04_Q1",
        "type": "single_select",
        "text": "진로나 이사처럼 내 삶에 큰 영향을 주는 결정을 앞두고 있습니다. 연인이 어떻게 반응할 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S04_Q1_A",
            "label": "A",
            "text": "충분히 생각할 시간과 최종 선택권이 내게 있다고 분명히 말해준다.",
            "primaryDesire": "autonomy",
            "nextQuestionId": "S04_Q2_A",
            "score": 1
          },
          {
            "id": "S04_Q1_B",
            "label": "B",
            "text": "내 판단의 강점과 놓친 부분을 구체적으로 짚어준다.",
            "primaryDesire": "competence",
            "nextQuestionId": "S04_Q2_B",
            "score": 1
          },
          {
            "id": "S04_Q1_C",
            "label": "C",
            "text": "이번 선택이 내 가능성을 넓히도록 새로운 관점과 정보를 함께 찾아준다.",
            "primaryDesire": "growth",
            "nextQuestionId": "S04_Q2_C",
            "score": 1
          },
          {
            "id": "S04_Q1_D",
            "label": "D",
            "text": "어떤 결과가 생겨도 관계와 지지는 달라지지 않을 것이라고 말한다.",
            "primaryDesire": "safety",
            "nextQuestionId": "S04_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S04_Q2_A",
          "triggerOptionId": "S04_Q1_A",
          "type": "single_select",
          "text": "상대가 내 시간과 선택권을 보장해주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S04_Q2_A_1",
              "label": "1",
              "text": "관계 안에서도 내 인생을 함께 살아가는 동반자라는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S04_Q2_A_2",
              "label": "2",
              "text": "상대의 기대보다 나라는 사람 자체를 우선해주는 것 같아서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S04_Q2_A_3",
              "label": "3",
              "text": "결정 과정에서 지치지 않도록 정서적으로 돌봐줘서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S04_Q2_A_4",
              "label": "4",
              "text": "내 속도와 기준으로 선택할 자유가 보장되어서",
              "primaryDesire": "autonomy",
              "score": 2
            }
          ]
        },
        {
          "id": "S04_Q2_B",
          "triggerOptionId": "S04_Q1_B",
          "type": "single_select",
          "text": "상대가 내 판단의 강점과 놓친 부분을 짚어주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S04_Q2_B_1",
              "label": "1",
              "text": "내가 충분히 좋은 결정을 내릴 능력이 있다고 인정받아서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S04_Q2_B_2",
              "label": "2",
              "text": "혼자 생각할 때보다 더 넓은 관점을 배우고 발전할 수 있어서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S04_Q2_B_3",
              "label": "3",
              "text": "잘못 선택해도 의지할 관계가 남아 있다는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S04_Q2_B_4",
              "label": "4",
              "text": "중요한 문제를 둘이 함께 고민하는 한 팀처럼 느껴져서",
              "primaryDesire": "belonging",
              "score": 2
            }
          ]
        },
        {
          "id": "S04_Q2_C",
          "triggerOptionId": "S04_Q1_C",
          "type": "single_select",
          "text": "상대가 새로운 관점과 정보를 함께 찾아주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S04_Q2_C_1",
              "label": "1",
              "text": "내 가능성을 다른 누구보다 특별하게 믿어주는 것 같아서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S04_Q2_C_2",
              "label": "2",
              "text": "결정의 부담을 혼자 감당하지 않도록 도와줘서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S04_Q2_C_3",
              "label": "3",
              "text": "조언을 받아들일지 여부는 내가 정할 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S04_Q2_C_4",
              "label": "4",
              "text": "새로운 정보를 이해하고 활용할 능력이 있다고 믿어줘서",
              "primaryDesire": "competence",
              "score": 2
            }
          ]
        },
        {
          "id": "S04_Q2_D",
          "triggerOptionId": "S04_Q1_D",
          "type": "single_select",
          "text": "상대가 결과와 무관하게 지지하겠다고 말하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S04_Q2_D_1",
              "label": "1",
              "text": "성공과 실패를 통해 함께 배우는 관계가 될 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S04_Q2_D_2",
              "label": "2",
              "text": "결과 때문에 사랑이나 관계를 잃지 않을 것이라는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S04_Q2_D_3",
              "label": "3",
              "text": "내 선택이 우리의 미래와 연결되어 있다는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S04_Q2_D_4",
              "label": "4",
              "text": "성과와 무관하게 내가 가장 소중한 사람이라는 느낌이 들어서",
              "primaryDesire": "specialness",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S05",
      "title": "중요한 결정을 나와 상의하는 너",
      "primaryQuestion": {
        "id": "S05_Q1",
        "type": "single_select",
        "text": "연인이 이직이나 이사처럼 자신의 삶에 큰 영향을 주는 결정을 앞두고 있습니다. 어떤 태도를 보일 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S05_Q1_A",
            "label": "A",
            "text": "힘든 감정과 걱정을 솔직히 말하며 내 위로를 받아들인다.",
            "primaryDesire": "caregiver",
            "nextQuestionId": "S05_Q2_A",
            "score": 1
          },
          {
            "id": "S05_Q1_B",
            "label": "B",
            "text": "내 의견을 듣되 최종 결정과 책임은 자신이 맡는다.",
            "primaryDesire": "autonomy",
            "nextQuestionId": "S05_Q2_B",
            "score": 1
          },
          {
            "id": "S05_Q1_C",
            "label": "C",
            "text": "내 판단이 필요하다며 구체적인 조언과 분석을 부탁한다.",
            "primaryDesire": "competence",
            "nextQuestionId": "S05_Q2_C",
            "score": 1
          },
          {
            "id": "S05_Q1_D",
            "label": "D",
            "text": "이번 변화를 통해 둘이 어떤 삶을 만들어갈 수 있을지 함께 상상한다.",
            "primaryDesire": "growth",
            "nextQuestionId": "S05_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S05_Q2_A",
          "triggerOptionId": "S05_Q1_A",
          "type": "single_select",
          "text": "상대가 내 위로를 받아들이는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S05_Q2_A_1",
              "label": "1",
              "text": "힘든 변화 속에서도 서로에게 기대도 되는 관계라는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S05_Q2_A_2",
              "label": "2",
              "text": "상대의 어려움을 함께 나누는 가장 가까운 사람이라는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S05_Q2_A_3",
              "label": "3",
              "text": "다른 누구보다 나에게 먼저 속마음을 보여주는 것 같아서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S05_Q2_A_4",
              "label": "4",
              "text": "내가 상대를 편안하게 해주고 돌볼 수 있어서",
              "primaryDesire": "caregiver",
              "score": 2
            }
          ]
        },
        {
          "id": "S05_Q2_B",
          "triggerOptionId": "S05_Q1_B",
          "type": "single_select",
          "text": "상대가 내 의견을 듣되 스스로 결정하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S05_Q2_B_1",
              "label": "1",
              "text": "서로의 삶과 선택권을 침해하지 않는 관계라서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S05_Q2_B_2",
              "label": "2",
              "text": "내 의견이 믿을 만하고 가치 있다고 인정받아서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S05_Q2_B_3",
              "label": "3",
              "text": "서로 다른 선택을 통해서도 함께 배우고 성장할 수 있어서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S05_Q2_B_4",
              "label": "4",
              "text": "의견이 달라도 관계는 안정적으로 유지될 것 같아서",
              "primaryDesire": "safety",
              "score": 2
            }
          ]
        },
        {
          "id": "S05_Q2_C",
          "triggerOptionId": "S05_Q1_C",
          "type": "single_select",
          "text": "상대가 구체적인 조언과 분석을 부탁하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S05_Q2_C_1",
              "label": "1",
              "text": "중요한 문제를 함께 다루는 동반자라는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S05_Q2_C_2",
              "label": "2",
              "text": "가장 먼저 의견을 구하는 특별한 사람으로 선택받아서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S05_Q2_C_3",
              "label": "3",
              "text": "상대가 지치지 않도록 실제적인 도움을 줄 수 있어서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S05_Q2_C_4",
              "label": "4",
              "text": "내 판단과 문제 해결 능력을 신뢰받는 것 같아서",
              "primaryDesire": "competence",
              "score": 2
            }
          ]
        },
        {
          "id": "S05_Q2_D",
          "triggerOptionId": "S05_Q1_D",
          "type": "single_select",
          "text": "상대가 둘의 미래를 함께 상상하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S05_Q2_D_1",
              "label": "1",
              "text": "이번 선택을 관계의 새로운 발전 기회로 만들 수 있어서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S05_Q2_D_2",
              "label": "2",
              "text": "미래가 바뀌어도 함께할 계획이 있다는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S05_Q2_D_3",
              "label": "3",
              "text": "상대의 미래 안에 내가 자연스럽게 포함되어 있어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S05_Q2_D_4",
              "label": "4",
              "text": "수많은 가능성 중 나와의 삶을 우선해 생각하는 것 같아서",
              "primaryDesire": "specialness",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S06",
      "title": "평범한 하루를 공유하는 우리",
      "primaryQuestion": {
        "id": "S06_Q1",
        "type": "single_select",
        "text": "서로 특별한 일정이 없는 평범한 하루입니다. 연인이 어떤 방식으로 일상을 나눌 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S06_Q1_A",
            "label": "A",
            "text": "바쁜 중에도 나를 떠올렸다며 짧은 메시지나 사진을 따로 보내준다.",
            "primaryDesire": "specialness",
            "nextQuestionId": "S06_Q2_A",
            "score": 1
          },
          {
            "id": "S06_Q1_B",
            "label": "B",
            "text": "내가 피곤해 보이면 묻지 않아도 쉴 수 있도록 배려하고 필요한 것을 챙긴다.",
            "primaryDesire": "caregiver",
            "nextQuestionId": "S06_Q2_B",
            "score": 1
          },
          {
            "id": "S06_Q1_C",
            "label": "C",
            "text": "각자의 일정에 집중하고 편한 시간에 연락하도록 부담을 주지 않는다.",
            "primaryDesire": "autonomy",
            "nextQuestionId": "S06_Q2_C",
            "score": 1
          },
          {
            "id": "S06_Q1_D",
            "label": "D",
            "text": "하루 중 고민한 일을 들려주며 내 생각과 조언을 구한다.",
            "primaryDesire": "competence",
            "nextQuestionId": "S06_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S06_Q2_A",
          "triggerOptionId": "S06_Q1_A",
          "type": "single_select",
          "text": "상대가 나를 떠올렸다며 메시지나 사진을 보내는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S06_Q2_A_1",
              "label": "1",
              "text": "평범한 일상에서도 관계에 새로운 즐거움이 생겨서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S06_Q2_A_2",
              "label": "2",
              "text": "떨어져 있어도 관계가 계속 이어지고 있다는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S06_Q2_A_3",
              "label": "3",
              "text": "서로의 하루에 자연스럽게 참여하는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S06_Q2_A_4",
              "label": "4",
              "text": "많은 일 중에서도 나를 따로 떠올렸다는 점이 특별해서",
              "primaryDesire": "specialness",
              "score": 2
            }
          ]
        },
        {
          "id": "S06_Q2_B",
          "triggerOptionId": "S06_Q1_B",
          "type": "single_select",
          "text": "상대가 내가 쉴 수 있도록 배려하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S06_Q2_B_1",
              "label": "1",
              "text": "내 상태를 살피고 편안하게 돌봐주는 마음이 느껴져서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S06_Q2_B_2",
              "label": "2",
              "text": "연락이나 설명을 강요하지 않고 내 필요를 존중해줘서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S06_Q2_B_3",
              "label": "3",
              "text": "내가 스스로 일상을 조절할 수 있는 사람이라고 믿어줘서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S06_Q2_B_4",
              "label": "4",
              "text": "서로에게 맞는 건강한 생활 방식을 함께 만들어가는 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            }
          ]
        },
        {
          "id": "S06_Q2_C",
          "triggerOptionId": "S06_Q1_C",
          "type": "single_select",
          "text": "상대가 각자의 일정에 집중하도록 해주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S06_Q2_C_1",
              "label": "1",
              "text": "연락이 잠시 없어도 관계가 안정적이라는 확신이 있어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S06_Q2_C_2",
              "label": "2",
              "text": "각자의 하루를 살면서도 같은 관계에 속해 있다는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S06_Q2_C_3",
              "label": "3",
              "text": "연락 빈도와 상관없이 각자의 일정을 자유롭게 보낼 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S06_Q2_C_4",
              "label": "4",
              "text": "내가 지쳤을 때 부담을 줄여주는 세심한 배려라서",
              "primaryDesire": "caregiver",
              "score": 2
            }
          ]
        },
        {
          "id": "S06_Q2_D",
          "triggerOptionId": "S06_Q1_D",
          "type": "single_select",
          "text": "상대가 내 생각과 조언을 구하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S06_Q2_D_1",
              "label": "1",
              "text": "내 일상과 상대의 일상을 어느 정도 분리하면서도 연결할 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S06_Q2_D_2",
              "label": "2",
              "text": "내 의견이 실제로 도움이 되는 가치 있는 판단이라고 느껴져서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S06_Q2_D_3",
              "label": "3",
              "text": "매일의 대화를 통해 서로의 관점을 배우고 발전할 수 있어서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S06_Q2_D_4",
              "label": "4",
              "text": "사소한 고민도 숨기지 않는 믿을 만한 관계라는 느낌이 들어서",
              "primaryDesire": "safety",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S07",
      "title": "각자의 시간을 존중하는 우리",
      "primaryQuestion": {
        "id": "S07_Q1",
        "type": "single_select",
        "text": "둘 다 쉬는 날이지만 하고 싶은 일이 서로 다릅니다. 어떤 방식으로 시간을 보낼 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S07_Q1_A",
            "label": "A",
            "text": "각자 하고 싶은 일을 한 뒤 저녁에 만나 하루를 함께 정리한다.",
            "primaryDesire": "belonging",
            "nextQuestionId": "S07_Q2_A",
            "score": 1
          },
          {
            "id": "S07_Q1_B",
            "label": "B",
            "text": "따로 있는 동안에도 나를 떠올렸다며 작은 메시지를 보내준다.",
            "primaryDesire": "specialness",
            "nextQuestionId": "S07_Q2_B",
            "score": 1
          },
          {
            "id": "S07_Q1_C",
            "label": "C",
            "text": "내가 편히 쉴 수 있도록 연락을 재촉하지 않고 필요한 때만 안부를 묻는다.",
            "primaryDesire": "caregiver",
            "nextQuestionId": "S07_Q2_C",
            "score": 1
          },
          {
            "id": "S07_Q1_D",
            "label": "D",
            "text": "하루 동안 연락하지 않아도 각자의 계획과 공간을 온전히 존중한다.",
            "primaryDesire": "autonomy",
            "nextQuestionId": "S07_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S07_Q2_A",
          "triggerOptionId": "S07_Q1_A",
          "type": "single_select",
          "text": "각자의 일을 한 뒤 하루를 함께 정리하는 방식이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S07_Q2_A_1",
              "label": "1",
              "text": "서로의 경험을 나누며 더 넓은 관점과 자극을 얻을 수 있어서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S07_Q2_A_2",
              "label": "2",
              "text": "각자의 경험이 관계를 더 풍부하게 만드는 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S07_Q2_A_3",
              "label": "3",
              "text": "떨어져 있어도 다시 만날 시간이 정해져 있어 안심돼서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S07_Q2_A_4",
              "label": "4",
              "text": "독립적으로 지내면서도 결국 같은 하루를 공유하는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            }
          ]
        },
        {
          "id": "S07_Q2_B",
          "triggerOptionId": "S07_Q1_B",
          "type": "single_select",
          "text": "상대가 따로 있는 동안 나를 떠올려주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S07_Q2_B_1",
              "label": "1",
              "text": "떨어져 있어도 내가 여전히 특별한 존재라는 느낌이 들어서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S07_Q2_B_2",
              "label": "2",
              "text": "내가 외롭거나 불편하지 않은지 살펴주는 것 같아서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S07_Q2_B_3",
              "label": "3",
              "text": "답장을 바로 하지 않아도 되는 자유가 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S07_Q2_B_4",
              "label": "4",
              "text": "각자 시간을 잘 보내는 능력을 서로 믿어주는 것 같아서",
              "primaryDesire": "competence",
              "score": 2
            }
          ]
        },
        {
          "id": "S07_Q2_C",
          "triggerOptionId": "S07_Q1_C",
          "type": "single_select",
          "text": "상대가 필요한 때만 안부를 묻는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S07_Q2_C_1",
              "label": "1",
              "text": "혼자 회복하는 방법을 배우고 관계의 균형도 발전시킬 수 있어서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S07_Q2_C_2",
              "label": "2",
              "text": "과도한 연락 없이도 관계가 유지된다는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S07_Q2_C_3",
              "label": "3",
              "text": "짧은 안부만으로도 서로 연결되어 있다고 느껴서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S07_Q2_C_4",
              "label": "4",
              "text": "내가 원하는 연락의 정도와 혼자 있는 방식을 존중해줘서",
              "primaryDesire": "autonomy",
              "score": 2
            }
          ]
        },
        {
          "id": "S07_Q2_D",
          "triggerOptionId": "S07_Q1_D",
          "type": "single_select",
          "text": "상대가 각자의 계획과 공간을 존중하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S07_Q2_D_1",
              "label": "1",
              "text": "내가 필요할 때 도움을 청할 수 있도록 조용히 곁을 지켜줘서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S07_Q2_D_2",
              "label": "2",
              "text": "연애 중에도 나만의 삶과 선택권을 유지할 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S07_Q2_D_3",
              "label": "3",
              "text": "혼자서도 시간을 잘 보낼 수 있는 사람으로 인정받아서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S07_Q2_D_4",
              "label": "4",
              "text": "서로 다른 관심사를 통해 각자 성장할 수 있어서",
              "primaryDesire": "growth",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S08",
      "title": "내 마음을 알아채고 다독이는 너",
      "primaryQuestion": {
        "id": "S08_Q1",
        "type": "single_select",
        "text": "내가 마음이 힘들지만 아직 감정을 충분히 정리하지 못했습니다. 연인이 어떻게 반응할 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S08_Q1_A",
            "label": "A",
            "text": "지금 말하지 않아도 관계는 괜찮다며 준비될 때 이야기하라고 한다.",
            "primaryDesire": "safety",
            "nextQuestionId": "S08_Q2_A",
            "score": 1
          },
          {
            "id": "S08_Q1_B",
            "label": "B",
            "text": "해결책을 서두르지 않고 곁에 머물며 내 감정을 함께 견뎌준다.",
            "primaryDesire": "belonging",
            "nextQuestionId": "S08_Q2_B",
            "score": 1
          },
          {
            "id": "S08_Q1_C",
            "label": "C",
            "text": "다른 사람에게는 하지 않는 세심한 관심을 나에게 기울인다.",
            "primaryDesire": "specialness",
            "nextQuestionId": "S08_Q2_C",
            "score": 1
          },
          {
            "id": "S08_Q1_D",
            "label": "D",
            "text": "내 상태를 살피고 식사나 휴식처럼 당장 필요한 것을 챙긴다.",
            "primaryDesire": "caregiver",
            "nextQuestionId": "S08_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S08_Q2_A",
          "triggerOptionId": "S08_Q1_A",
          "type": "single_select",
          "text": "상대가 준비될 때 말하라고 하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S08_Q2_A_1",
              "label": "1",
              "text": "감정을 표현할 시기와 방식을 내가 선택할 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S08_Q2_A_2",
              "label": "2",
              "text": "내가 감정을 정리하고 설명할 수 있는 사람이라고 믿어줘서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S08_Q2_A_3",
              "label": "3",
              "text": "이번 경험을 통해 내 감정을 더 잘 이해하고 성장할 수 있어서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S08_Q2_A_4",
              "label": "4",
              "text": "당장 말하지 않아도 상대가 떠나지 않을 것이라는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            }
          ]
        },
        {
          "id": "S08_Q2_B",
          "triggerOptionId": "S08_Q1_B",
          "type": "single_select",
          "text": "상대가 곁에서 내 감정을 함께 견뎌주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S08_Q2_B_1",
              "label": "1",
              "text": "힘든 감정도 둘이 나눌 수 있는 관계라는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S08_Q2_B_2",
              "label": "2",
              "text": "가장 약한 순간에도 내가 소중한 존재로 받아들여져서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S08_Q2_B_3",
              "label": "3",
              "text": "감정을 고치려 하지 않고 편안하게 보살펴줘서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S08_Q2_B_4",
              "label": "4",
              "text": "내가 필요한 거리와 대화의 정도를 조절할 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            }
          ]
        },
        {
          "id": "S08_Q2_C",
          "triggerOptionId": "S08_Q1_C",
          "type": "single_select",
          "text": "상대가 나에게만 세심한 관심을 기울이는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S08_Q2_C_1",
              "label": "1",
              "text": "내 감정을 이해할 수 있도록 정확히 질문하고 들어주는 능력이 느껴져서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S08_Q2_C_2",
              "label": "2",
              "text": "서로의 감정을 배우며 관계가 더 깊어질 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S08_Q2_C_3",
              "label": "3",
              "text": "내 감정이 흔들려도 관계는 안전하다는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S08_Q2_C_4",
              "label": "4",
              "text": "말하지 못한 마음까지 함께 나누는 가까운 사람처럼 느껴져서",
              "primaryDesire": "belonging",
              "score": 2
            }
          ]
        },
        {
          "id": "S08_Q2_D",
          "triggerOptionId": "S08_Q1_D",
          "type": "single_select",
          "text": "상대가 당장 필요한 것을 챙기는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S08_Q2_D_1",
              "label": "1",
              "text": "다른 누구보다 내 상태를 특별히 중요하게 여기는 것 같아서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S08_Q2_D_2",
              "label": "2",
              "text": "내가 약한 순간에 구체적으로 보호받는 느낌이 들어서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S08_Q2_D_3",
              "label": "3",
              "text": "원하지 않는 도움은 거절할 수 있도록 물어봐줘서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S08_Q2_D_4",
              "label": "4",
              "text": "내가 다시 안정을 찾고 문제를 다룰 힘이 있다고 믿어줘서",
              "primaryDesire": "competence",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S09",
      "title": "실패 앞에서도 든든한 너",
      "primaryQuestion": {
        "id": "S09_Q1",
        "type": "single_select",
        "text": "오랫동안 준비한 일의 결과가 기대와 다르게 나왔습니다. 연인이 어떻게 반응할 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S09_Q1_A",
            "label": "A",
            "text": "결과에서 배울 점을 함께 찾고 다음 도전을 준비하도록 격려한다.",
            "primaryDesire": "growth",
            "nextQuestionId": "S09_Q2_A",
            "score": 1
          },
          {
            "id": "S09_Q1_B",
            "label": "B",
            "text": "실패와 상관없이 곁에 있겠다고 말하며 관계의 변함없음을 보여준다.",
            "primaryDesire": "safety",
            "nextQuestionId": "S09_Q2_B",
            "score": 1
          },
          {
            "id": "S09_Q1_C",
            "label": "C",
            "text": "좋은 결과와 나쁜 결과 모두 함께 겪는 것이 우리 관계라고 말한다.",
            "primaryDesire": "belonging",
            "nextQuestionId": "S09_Q2_C",
            "score": 1
          },
          {
            "id": "S09_Q1_D",
            "label": "D",
            "text": "성과와 관계없이 내가 여전히 자랑스럽고 소중하다고 말한다.",
            "primaryDesire": "specialness",
            "nextQuestionId": "S09_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S09_Q2_A",
          "triggerOptionId": "S09_Q1_A",
          "type": "single_select",
          "text": "상대가 다음 도전을 준비하도록 격려하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S09_Q2_A_1",
              "label": "1",
              "text": "좌절한 내 상태를 먼저 살피고 다시 힘을 낼 때까지 도와줘서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S09_Q2_A_2",
              "label": "2",
              "text": "당장 다시 시작하도록 압박하지 않고 내 속도를 존중해줘서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S09_Q2_A_3",
              "label": "3",
              "text": "실패를 분석하고 다시 해낼 능력이 있다고 믿어줘서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S09_Q2_A_4",
              "label": "4",
              "text": "실패도 발전의 과정으로 바꿀 수 있을 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            }
          ]
        },
        {
          "id": "S09_Q2_B",
          "triggerOptionId": "S09_Q1_B",
          "type": "single_select",
          "text": "상대가 관계의 변함없음을 보여주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S09_Q2_B_1",
              "label": "1",
              "text": "성과가 나빠도 사랑과 관계를 잃지 않을 것이라는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S09_Q2_B_2",
              "label": "2",
              "text": "좋고 나쁜 시기를 함께 살아가는 한 팀처럼 느껴져서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S09_Q2_B_3",
              "label": "3",
              "text": "결과와 상관없이 내가 우선적인 사람이라는 느낌이 들어서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S09_Q2_B_4",
              "label": "4",
              "text": "좌절한 나를 판단하지 않고 따뜻하게 보호해줘서",
              "primaryDesire": "caregiver",
              "score": 2
            }
          ]
        },
        {
          "id": "S09_Q2_C",
          "triggerOptionId": "S09_Q1_C",
          "type": "single_select",
          "text": "상대가 결과를 함께 겪는 것이 관계라고 말하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S09_Q2_C_1",
              "label": "1",
              "text": "실패를 어떻게 받아들일지는 내가 선택할 수 있도록 존중해줘서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S09_Q2_C_2",
              "label": "2",
              "text": "내 노력과 능력을 결과 하나로 평가하지 않아서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S09_Q2_C_3",
              "label": "3",
              "text": "함께 경험을 돌아보며 더 나은 방향을 찾을 수 있어서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S09_Q2_C_4",
              "label": "4",
              "text": "힘든 일이 생겨도 혼자 남지 않을 것 같아서",
              "primaryDesire": "safety",
              "score": 2
            }
          ]
        },
        {
          "id": "S09_Q2_D",
          "triggerOptionId": "S09_Q1_D",
          "type": "single_select",
          "text": "상대가 내가 여전히 자랑스럽다고 말하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S09_Q2_D_1",
              "label": "1",
              "text": "성과가 없어도 서로의 삶에 중요한 사람이라는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S09_Q2_D_2",
              "label": "2",
              "text": "결과와 상관없이 특별하고 가치 있는 사람으로 선택받아서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S09_Q2_D_3",
              "label": "3",
              "text": "자책하지 않도록 내 마음을 다정하게 돌봐줘서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S09_Q2_D_4",
              "label": "4",
              "text": "실패를 내 방식대로 받아들이고 다시 결정할 시간을 줘서",
              "primaryDesire": "autonomy",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S10",
      "title": "새로운 세상을 함께 도전하는 우리",
      "primaryQuestion": {
        "id": "S10_Q1",
        "type": "single_select",
        "text": "새로운 취미나 프로젝트에 도전할 기회가 생겼습니다. 연인이 어떻게 반응할 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S10_Q1_A",
            "label": "A",
            "text": "내가 가진 강점이 이 도전에 잘 맞는다며 구체적으로 자신감을 북돋아준다.",
            "primaryDesire": "competence",
            "nextQuestionId": "S10_Q2_A",
            "score": 1
          },
          {
            "id": "S10_Q1_B",
            "label": "B",
            "text": "둘이 함께 배울 수 있는 새로운 목표를 제안한다.",
            "primaryDesire": "growth",
            "nextQuestionId": "S10_Q2_B",
            "score": 1
          },
          {
            "id": "S10_Q1_C",
            "label": "C",
            "text": "도전이 어려워져도 지원을 거두지 않겠다고 말한다.",
            "primaryDesire": "safety",
            "nextQuestionId": "S10_Q2_C",
            "score": 1
          },
          {
            "id": "S10_Q1_D",
            "label": "D",
            "text": "각자의 역할을 정해 하나의 팀으로 함께 참여한다.",
            "primaryDesire": "belonging",
            "nextQuestionId": "S10_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S10_Q2_A",
          "triggerOptionId": "S10_Q1_A",
          "type": "single_select",
          "text": "상대가 내 강점을 구체적으로 말해주는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S10_Q2_A_1",
              "label": "1",
              "text": "내 가능성을 다른 사람보다 특별하게 알아봐주는 것 같아서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S10_Q2_A_2",
              "label": "2",
              "text": "부담되거나 지칠 때 실질적으로 도와줄 것 같아서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S10_Q2_A_3",
              "label": "3",
              "text": "참여 여부와 방식은 내가 스스로 선택할 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S10_Q2_A_4",
              "label": "4",
              "text": "내 능력과 잠재력을 믿을 만한 것으로 인정해줘서",
              "primaryDesire": "competence",
              "score": 2
            }
          ]
        },
        {
          "id": "S10_Q2_B",
          "triggerOptionId": "S10_Q1_B",
          "type": "single_select",
          "text": "상대가 둘이 함께 배울 목표를 제안하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S10_Q2_B_1",
              "label": "1",
              "text": "관계를 통해 서로의 세계와 가능성이 넓어질 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S10_Q2_B_2",
              "label": "2",
              "text": "낯선 도전 속에서도 믿고 의지할 사람이 있어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S10_Q2_B_3",
              "label": "3",
              "text": "같은 목표를 향해 움직이는 한 팀이라는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S10_Q2_B_4",
              "label": "4",
              "text": "많은 활동 중 나와 함께하는 경험을 특별히 선택해서",
              "primaryDesire": "specialness",
              "score": 2
            }
          ]
        },
        {
          "id": "S10_Q2_C",
          "triggerOptionId": "S10_Q1_C",
          "type": "single_select",
          "text": "상대가 어려워져도 지원을 거두지 않겠다고 하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S10_Q2_C_1",
              "label": "1",
              "text": "힘든 과정에서 나를 세심하게 챙겨줄 것 같아서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S10_Q2_C_2",
              "label": "2",
              "text": "포기하거나 계속할 결정은 내게 맡겨줘서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S10_Q2_C_3",
              "label": "3",
              "text": "어려움을 해결하고 완수할 역량이 있다고 믿어줘서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S10_Q2_C_4",
              "label": "4",
              "text": "도전과 실패를 통해 함께 배울 수 있을 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            }
          ]
        },
        {
          "id": "S10_Q2_D",
          "triggerOptionId": "S10_Q1_D",
          "type": "single_select",
          "text": "상대가 역할을 정해 팀으로 참여하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S10_Q2_D_1",
              "label": "1",
              "text": "문제가 생겨도 서로 책임지고 끝까지 함께할 것 같아서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S10_Q2_D_2",
              "label": "2",
              "text": "각자의 역할이 연결되어 공동의 경험을 만드는 것 같아서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S10_Q2_D_3",
              "label": "3",
              "text": "상대가 가장 중요한 협력자로 나를 선택한 느낌이 들어서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S10_Q2_D_4",
              "label": "4",
              "text": "내가 부담되지 않도록 필요한 역할을 나눠줘서",
              "primaryDesire": "caregiver",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S11",
      "title": "갑작스러운 문제에도 대처하는 너",
      "primaryQuestion": {
        "id": "S11_Q1",
        "type": "single_select",
        "text": "갑작스러운 일정 변화나 경제적 어려움처럼 예상하지 못한 문제가 생겼습니다. 연인이 어떻게 대응할 때 가장 마음이 채워질까요?",
        "options": [
          {
            "id": "S11_Q1_A",
            "label": "A",
            "text": "내가 감당할 범위와 선택할 수 있는 부분을 먼저 물어본다.",
            "primaryDesire": "autonomy",
            "nextQuestionId": "S11_Q2_A",
            "score": 1
          },
          {
            "id": "S11_Q1_B",
            "label": "B",
            "text": "상황을 정리하고 해결책을 함께 세울 수 있도록 내 판단을 구한다.",
            "primaryDesire": "competence",
            "nextQuestionId": "S11_Q2_B",
            "score": 1
          },
          {
            "id": "S11_Q1_C",
            "label": "C",
            "text": "이번 문제를 계기로 더 나은 생활 방식과 대비책을 만들자고 한다.",
            "primaryDesire": "growth",
            "nextQuestionId": "S11_Q2_C",
            "score": 1
          },
          {
            "id": "S11_Q1_D",
            "label": "D",
            "text": "불확실한 상황에서도 관계를 지키고 함께 책임지겠다고 약속한다.",
            "primaryDesire": "safety",
            "nextQuestionId": "S11_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S11_Q2_A",
          "triggerOptionId": "S11_Q1_A",
          "type": "single_select",
          "text": "상대가 내 선택 가능한 범위를 먼저 묻는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S11_Q2_A_1",
              "label": "1",
              "text": "문제를 각자 떠넘기지 않고 함께 감당하는 관계라서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S11_Q2_A_2",
              "label": "2",
              "text": "위기 속에서도 내 필요와 선택을 우선적으로 고려해줘서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S11_Q2_A_3",
              "label": "3",
              "text": "내가 지치지 않도록 상태를 살피고 부담을 덜어줘서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S11_Q2_A_4",
              "label": "4",
              "text": "상황이 어렵더라도 내 결정권과 경계를 지킬 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            }
          ]
        },
        {
          "id": "S11_Q2_B",
          "triggerOptionId": "S11_Q1_B",
          "type": "single_select",
          "text": "상대가 내 판단을 구하며 해결책을 세우는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S11_Q2_B_1",
              "label": "1",
              "text": "내가 위기 해결에 기여할 수 있는 유능한 사람이라고 느껴져서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S11_Q2_B_2",
              "label": "2",
              "text": "문제를 통해 둘이 더 단단하고 현명해질 수 있을 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S11_Q2_B_3",
              "label": "3",
              "text": "해결이 늦어져도 관계가 무너지지 않을 것이라는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S11_Q2_B_4",
              "label": "4",
              "text": "어려움을 둘만의 문제가 아니라 공동의 과제로 다루는 것 같아서",
              "primaryDesire": "belonging",
              "score": 2
            }
          ]
        },
        {
          "id": "S11_Q2_C",
          "triggerOptionId": "S11_Q1_C",
          "type": "single_select",
          "text": "상대가 더 나은 대비책을 만들자고 하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S11_Q2_C_1",
              "label": "1",
              "text": "위기 속에서도 내 가능성과 역할을 특별히 믿어줘서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S11_Q2_C_2",
              "label": "2",
              "text": "내가 버거워하는 부분을 실제적으로 도와줘서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S11_Q2_C_3",
              "label": "3",
              "text": "새로운 방식에 동의할지 충분히 선택할 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S11_Q2_C_4",
              "label": "4",
              "text": "내 경험과 판단이 해결책에 중요한 기여를 한다고 느껴져서",
              "primaryDesire": "competence",
              "score": 2
            }
          ]
        },
        {
          "id": "S11_Q2_D",
          "triggerOptionId": "S11_Q1_D",
          "type": "single_select",
          "text": "상대가 관계를 지키고 함께 책임지겠다고 하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S11_Q2_D_1",
              "label": "1",
              "text": "어려움을 성장의 기회로 바꿀 수 있는 관계 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S11_Q2_D_2",
              "label": "2",
              "text": "상황이 나빠져도 혼자 버려지지 않을 것 같아서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S11_Q2_D_3",
              "label": "3",
              "text": "문제가 생겨도 둘이 같은 편이라는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S11_Q2_D_4",
              "label": "4",
              "text": "어려운 순간에도 나를 가장 중요한 사람으로 선택해서",
              "primaryDesire": "specialness",
              "score": 2
            }
          ]
        }
      ]
    },
    {
      "id": "S12",
      "title": "미래가 분명히 보이는 우리",
      "primaryQuestion": {
        "id": "S12_Q1",
        "type": "single_select",
        "text": "연인과 앞으로의 삶과 관계의 다음 단계를 이야기하고 있습니다. 어떤 모습이 가장 마음을 채워줄까요?",
        "options": [
          {
            "id": "S12_Q1_A",
            "label": "A",
            "text": "미래에 걱정되는 점을 솔직히 말하고 서로를 어떻게 돌볼지 의논한다.",
            "primaryDesire": "caregiver",
            "nextQuestionId": "S12_Q2_A",
            "score": 1
          },
          {
            "id": "S12_Q1_B",
            "label": "B",
            "text": "결혼이나 동거 등 어떤 형식도 당연시하지 않고 각자의 선택을 존중한다.",
            "primaryDesire": "autonomy",
            "nextQuestionId": "S12_Q2_B",
            "score": 1
          },
          {
            "id": "S12_Q1_C",
            "label": "C",
            "text": "재정·생활·역할에 관한 내 의견과 판단을 중요하게 반영한다.",
            "primaryDesire": "competence",
            "nextQuestionId": "S12_Q2_C",
            "score": 1
          },
          {
            "id": "S12_Q1_D",
            "label": "D",
            "text": "둘이 함께 이루고 싶은 새로운 목표와 경험을 구체적으로 그려본다.",
            "primaryDesire": "growth",
            "nextQuestionId": "S12_Q2_D",
            "score": 1
          }
        ]
      },
      "followUpQuestions": [
        {
          "id": "S12_Q2_A",
          "triggerOptionId": "S12_Q1_A",
          "type": "single_select",
          "text": "상대가 서로를 돌볼 방법을 의논하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S12_Q2_A_1",
              "label": "1",
              "text": "어려운 시기에도 서로를 책임질 관계라는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S12_Q2_A_2",
              "label": "2",
              "text": "앞으로의 삶을 함께 꾸리는 가족이나 한 팀처럼 느껴져서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S12_Q2_A_3",
              "label": "3",
              "text": "미래의 중요한 사람으로 내가 우선적으로 포함되어 있어서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S12_Q2_A_4",
              "label": "4",
              "text": "내 어려움과 필요를 미리 살피고 보호하려는 마음이 느껴져서",
              "primaryDesire": "caregiver",
              "score": 2
            }
          ]
        },
        {
          "id": "S12_Q2_B",
          "triggerOptionId": "S12_Q1_B",
          "type": "single_select",
          "text": "상대가 관계의 형식을 강요하지 않는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S12_Q2_B_1",
              "label": "1",
              "text": "사회적 기준보다 우리의 선택과 속도를 지킬 수 있어서",
              "primaryDesire": "autonomy",
              "score": 2
            },
            {
              "id": "S12_Q2_B_2",
              "label": "2",
              "text": "내가 현실적인 결정을 내릴 수 있는 사람이라고 믿어줘서",
              "primaryDesire": "competence",
              "score": 2
            },
            {
              "id": "S12_Q2_B_3",
              "label": "3",
              "text": "기존 방식에 얽매이지 않고 우리에게 맞는 관계를 만들 수 있어서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S12_Q2_B_4",
              "label": "4",
              "text": "형식이 달라져도 관계와 애정은 지속될 것 같아서",
              "primaryDesire": "safety",
              "score": 2
            }
          ]
        },
        {
          "id": "S12_Q2_C",
          "triggerOptionId": "S12_Q1_C",
          "type": "single_select",
          "text": "상대가 미래 계획에 내 판단을 반영하는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S12_Q2_C_1",
              "label": "1",
              "text": "미래를 함께 결정하는 동등한 동반자라는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S12_Q2_C_2",
              "label": "2",
              "text": "수많은 의견 중 내 의견을 가장 중요하게 여기는 것 같아서",
              "primaryDesire": "specialness",
              "score": 2
            },
            {
              "id": "S12_Q2_C_3",
              "label": "3",
              "text": "내가 부담을 혼자 지지 않도록 역할을 함께 조율해줘서",
              "primaryDesire": "caregiver",
              "score": 2
            },
            {
              "id": "S12_Q2_C_4",
              "label": "4",
              "text": "내 현실 감각과 판단 능력을 신뢰받는 것 같아서",
              "primaryDesire": "competence",
              "score": 2
            }
          ]
        },
        {
          "id": "S12_Q2_D",
          "triggerOptionId": "S12_Q1_D",
          "type": "single_select",
          "text": "상대가 둘의 새로운 목표와 경험을 그리는 모습이 왜 만족스러울까요?",
          "options": [
            {
              "id": "S12_Q2_D_1",
              "label": "1",
              "text": "관계가 멈추지 않고 계속 발전할 것 같아서",
              "primaryDesire": "growth",
              "score": 2
            },
            {
              "id": "S12_Q2_D_2",
              "label": "2",
              "text": "미래가 불확실해도 함께 갈 방향이 있다는 확신이 들어서",
              "primaryDesire": "safety",
              "score": 2
            },
            {
              "id": "S12_Q2_D_3",
              "label": "3",
              "text": "개인의 계획이 아니라 우리의 공동 미래를 만드는 느낌이 들어서",
              "primaryDesire": "belonging",
              "score": 2
            },
            {
              "id": "S12_Q2_D_4",
              "label": "4",
              "text": "많은 미래 중 나와 함께하는 삶을 특별히 선택한 것 같아서",
              "primaryDesire": "specialness",
              "score": 2
            }
          ]
        }
      ]
    }
  ]
};

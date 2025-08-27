// Enhanced 잠언베이글 Application with 360 verses and professional image generation
// Complete verse database with 30 verses per emotion
const verseDatabase = {
  "감사": {
    "icon": "🙏",
    "verses": [
      {"text": "범사에 감사하라", "source": "데살로니가전서 5:18a"},
      {"text": "여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다", "source": "시편 107:1"},
      {"text": "감사로 제사를 드리는 자가 나를 영화롭게 하나니", "source": "시편 50:23a"},
      {"text": "항상 우리를 그리스도 안에서 이기게 하시는 하나님께 감사하노라", "source": "고린도후서 2:14a"},
      {"text": "말에나 일에나 다 주 예수의 이름으로 하고 그를 힘입어 하나님 아버지께 감사하라", "source": "골로새서 3:17"},
      {"text": "감사함으로 하나님의 성소에 들어가며", "source": "시편 100:4a"},
      {"text": "우리가 감사하므로 흔들리지 않는 나라를 받았은즉", "source": "히브리서 12:28a"},
      {"text": "감사하는 마음으로 하나님을 섬기자", "source": "히브리서 12:28b"},
      {"text": "이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라", "source": "데살로니가전서 5:18b"},
      {"text": "여호와의 인자하심을 감사하며", "source": "시편 107:8a"},
      {"text": "내 영혼아 여호와를 송축하며 내 속에 있는 모든 것들아 그의 거룩한 이름을 송축하라", "source": "시편 103:1"},
      {"text": "내 영혼아 여호와를 송축하며 그의 모든 은택을 잊지 말지어다", "source": "시편 103:2"},
      {"text": "감사의 제사를 드리는 자가 나를 영화롭게 하나니", "source": "시편 50:23a"},
      {"text": "우리는 항상 너희 모든 사람을 위하여 하나님께 감사하며", "source": "데살로니가전서 1:2a"},
      {"text": "감사함으로 그의 문에 들어가며 찬송함으로 그의 궁정에 들어가서", "source": "시편 100:4"},
      {"text": "여호와를 인하여 기뻐하며 구원의 하나님을 인하여 즐거워하리로다", "source": "하박국 3:18"},
      {"text": "주의 이름을 감사하리니 주의 인자하심이 좋음이라", "source": "시편 54:6"},
      {"text": "내가 온 마음으로 주께 감사하며", "source": "시편 138:1a"},
      {"text": "네 하나님 여호와가 네게 주신 모든 복을 인하여 즐거워할지니라", "source": "신명기 26:11"},
      {"text": "여호와께 감사하라 그는 선하시며", "source": "시편 136:1a"},
      {"text": "감사하는 자가 되어 하나님의 뜻을 행하라", "source": "골로새서 3:15b"},
      {"text": "범사에 하나님께 감사하라", "source": "에베소서 5:20"},
      {"text": "우리 주 예수 그리스도의 아버지 하나님을 송축하노니", "source": "고린도후서 1:3a"},
      {"text": "내 마음이 여호와로 인하여 즐거워하며", "source": "사무엘상 2:1a"},
      {"text": "여호와는 나의 힘이시요 나의 방패시라 내 마음이 저를 의지하여 도움을 얻었도다", "source": "시편 28:7a"},
      {"text": "여호와의 구원하심을 보고 즐거워하며 감사하리로다", "source": "시편 107:42b"},
      {"text": "하나님이 우리에게 복을 주사 땅끝까지 경외케 하시리로다", "source": "시편 67:7"},
      {"text": "나는 감사함으로 주께 제사를 드리며", "source": "요나 2:9a"},
      {"text": "내가 주의 놀라운 일들을 다 전할 것이며", "source": "시편 9:1b"},
      {"text": "여호와여 주의 모든 행사가 나를 즐겁게 하시니", "source": "시편 92:4a"}
    ]
  },
  "기쁨": {
    "icon": "😊",
    "verses": [
      {"text": "주 안에서 항상 기뻐하라 내가 다시 말하노니 기뻐하라", "source": "빌립보서 4:4"},
      {"text": "여호와를 기뻐하는 것이 너희의 힘이니라", "source": "느헤미야 8:10b"},
      {"text": "마음의 즐거움은 양약이라도 심령의 근심은 뼈를 마르게 하느니라", "source": "잠언 17:22"},
      {"text": "소망 중에 즐거워하며 환난 중에 참으며 기도에 항상 힘쓰며", "source": "로마서 12:12"},
      {"text": "주의 앞에는 충만한 기쁨이 있고 주의 오른쪽에는 영원한 즐거움이 있나이다", "source": "시편 16:11"},
      {"text": "기쁨으로 우물에서 물을 길으리로다", "source": "이사야 12:3"},
      {"text": "주를 기뻐하는 것이 너희의 힘이니라", "source": "느헤미야 8:10b"},
      {"text": "내 마음이 여호와로 말미암아 즐거워하며", "source": "사무엘상 2:1a"},
      {"text": "의인은 기뻐하여 하나님 앞에서 즐거워하며 기뻐 뛸지어다", "source": "시편 68:3"},
      {"text": "이 날은 우리 주의 날이니 우리가 기뻐하고 즐거워하리로다", "source": "시편 118:24"},
      {"text": "기쁨이 내게 있을 것은 너희 기쁨이 충만하게 하려 함이라", "source": "요한복음 15:11"},
      {"text": "나의 기쁨이 너희 안에 있어 너희 기쁨이 충만하게 하려 함이니라", "source": "요한복음 15:11"},
      {"text": "슬퍼하는 자들이 복이 있나니 그들이 위로를 받을 것임이요", "source": "마태복음 5:4"},
      {"text": "기쁨으로 여호와를 섬기며 노래하며 그 앞에 나아갈지어다", "source": "시편 100:2"},
      {"text": "기쁨의 기름으로 네게 부어 주시는도다", "source": "시편 45:7b"},
      {"text": "저녁에는 울음이 깃들일지라도 아침에는 기쁨이 오리로다", "source": "시편 30:5b"},
      {"text": "기쁜 마음은 양약이라도", "source": "잠언 17:22a"},
      {"text": "여호와께서 시온의 포로를 돌리실 때에 우리가 꿈꾸는 것 같았도다", "source": "시편 126:1"},
      {"text": "기쁨으로 나가며 평안히 인도함을 받을 것이요", "source": "이사야 55:12a"},
      {"text": "나는 여호와로 말미암아 즐거워하며 나의 구원의 하나님으로 말미암아 기뻐하리로다", "source": "하박국 3:18"},
      {"text": "성령의 열매는 사랑과 희락과 화평과", "source": "갈라디아서 5:22a"},
      {"text": "하늘에서는 회개하는 죄인 하나를 인하여 기뻐할 것이요", "source": "누가복음 15:7b"},
      {"text": "주 안에서 항상 기뻐하라", "source": "빌립보서 4:4a"},
      {"text": "즐거운 마음은 얼굴을 빛나게 하여도", "source": "잠언 15:13a"},
      {"text": "기쁨이 충만하여 영광스럽고 말할 수 없는 기쁨으로", "source": "베드로전서 1:8b"},
      {"text": "하나님의 나라는 먹는 것과 마시는 것이 아니요 오직 성령 안에서 의와 평강과 희락이라", "source": "로마서 14:17"},
      {"text": "의인의 길은 돋는 햇살 같아서", "source": "잠언 4:18a"},
      {"text": "여호와 앞에서 즐거워하며 기뻐할지어다", "source": "시편 32:11b"},
      {"text": "기뻐하며 찬송하는 소리가", "source": "시편 42:4b"},
      {"text": "내 영혼이 나의 하나님을 기뻐하리니", "source": "누가복음 1:47"}
    ]
  },
  "사랑": {
    "icon": "🥰",
    "verses": [
      {"text": "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며", "source": "고린도전서 13:4a"},
      {"text": "무엇보다도 뜨겁게 서로 사랑할지니 사랑은 허다한 죄를 덮느니라", "source": "베드로전서 4:8"},
      {"text": "우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라", "source": "요한1서 4:19"},
      {"text": "새 계명을 너희에게 주노니 서로 사랑하라", "source": "요한복음 13:34a"},
      {"text": "그 중의 제일은 사랑이라", "source": "고린도전서 13:13b"},
      {"text": "하나님은 사랑이시라", "source": "요한1서 4:8b"},
      {"text": "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니", "source": "요한복음 3:16a"},
      {"text": "사랑에는 두려움이 없고 온전한 사랑이 두려움을 내쫓나니", "source": "요한1서 4:18a"},
      {"text": "사랑은 모든 허물을 가리느니라", "source": "잠언 10:12b"},
      {"text": "사랑하는 자들아 우리가 서로 사랑하자", "source": "요한1서 4:7a"},
      {"text": "사랑 안에 거하는 자는 하나님 안에 거하고", "source": "요한1서 4:16b"},
      {"text": "사랑은 율법의 완성이니라", "source": "로마서 13:10b"},
      {"text": "사랑으로 서로 종노릇 하라", "source": "갈라디아서 5:13b"},
      {"text": "사랑은 자랑하지 아니하며 교만하지 아니하며", "source": "고린도전서 13:4b"},
      {"text": "사랑은 무례히 행하지 아니하며 자기의 유익을 구하지 아니하며", "source": "고린도전서 13:5a"},
      {"text": "사랑은 성내지 아니하며 악한 것을 생각하지 아니하며", "source": "고린도전서 13:5b"},
      {"text": "사랑은 불의를 기뻐하지 아니하며 진리와 함께 기뻐하고", "source": "고린도전서 13:6"},
      {"text": "사랑은 모든 것을 참으며 모든 것을 믿으며", "source": "고린도전서 13:7a"},
      {"text": "사랑은 모든 것을 바라며 모든 것을 견디느니라", "source": "고린도전서 13:7b"},
      {"text": "사랑은 언제까지나 떨어지지 아니하되", "source": "고린도전서 13:8a"},
      {"text": "믿음 소망 사랑 이 세 가지는 항상 있을 것인데", "source": "고린도전서 13:13a"},
      {"text": "내가 너희를 사랑한 것 같이 너희도 서로 사랑하라", "source": "요한복음 13:34b"},
      {"text": "친구를 위하여 자기 목숨을 버리면 이보다 더 큰 사랑이 없나니", "source": "요한복음 15:13"},
      {"text": "하나님의 사랑이 그리스도 예수 우리 주 안에 있는 생명의 성령의 법으로", "source": "로마서 8:2"},
      {"text": "그리스도의 사랑이 우리를 강권하시는도다", "source": "고린도후서 5:14a"},
      {"text": "사랑으로 역사하는 믿음뿐이니라", "source": "갈라디아서 5:6b"},
      {"text": "모든 일을 사랑으로 행하라", "source": "고린도전서 16:14"},
      {"text": "사랑 가운데서 진리를 말하며", "source": "에베소서 4:15a"},
      {"text": "사랑 안에서 자기를 세우라", "source": "에베소서 4:16b"},
      {"text": "그리스도께서 우리를 사랑하신 것 같이", "source": "에베소서 5:2a"}
    ]
  },
  "평안": {
    "icon": "😌",
    "verses": [
      {"text": "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라", "source": "요한복음 14:27a"},
      {"text": "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로", "source": "빌립보서 4:6a"},
      {"text": "내가 평안히 눕고 자기도 하리니 나를 안전히 살게 하시는 이는 오직 여호와이시니이다", "source": "시편 4:8"},
      {"text": "너희는 가만히 있어 내가 하나님 됨을 알지어다", "source": "시편 46:10a"},
      {"text": "영의 생각은 생명과 평안이니라", "source": "로마서 8:6b"},
      {"text": "모든 지각에 뛰어난 하나님의 평강이", "source": "빌립보서 4:7a"},
      {"text": "평강의 왕이라 하리라", "source": "이사야 9:6b"},
      {"text": "평안히 가라 네 믿음이 너를 구원하였느니라", "source": "누가복음 7:50"},
      {"text": "마음에 평강을 누리리라", "source": "잠언 14:30a"},
      {"text": "여호와께서 그의 백성에게 힘을 주심이여 여호와께서 그의 백성에게 평강의 복을 주시리로다", "source": "시편 29:11"},
      {"text": "평강을 만들어내는 자는 복이 있나니", "source": "마태복음 5:9"},
      {"text": "의의 열매는 화평을 이루는 자들이 화평으로 심어 거두느니라", "source": "야고보서 3:18"},
      {"text": "하나님은 어지러움의 하나님이 아니시요 오직 화평의 하나님이시니라", "source": "고린도전서 14:33a"},
      {"text": "그는 우리의 화평이신지라", "source": "에베소서 2:14a"},
      {"text": "평안히 가서 네 믿음이 너를 구원하였다", "source": "마가복음 5:34b"},
      {"text": "네가 만일 오늘 평화에 관한 일을 알았더면 좋을 뻔하였거니와", "source": "누가복음 19:42a"},
      {"text": "마음이 평안한 자는 육신의 생명이나", "source": "잠언 14:30a"},
      {"text": "온전한 평강을 주시리니", "source": "이사야 26:3b"},
      {"text": "그 발로 평안의 복음을 전하는 자들의 발이 어찌 그리 아름다운고", "source": "로마서 10:15b"},
      {"text": "성령의 열매는 사랑과 희락과 화평과", "source": "갈라디아서 5:22a"},
      {"text": "하나님의 평강이 그리스도 예수 안에서", "source": "빌립보서 4:7a"},
      {"text": "평안한 마음은 육신의 생명이나", "source": "잠언 14:30a"},
      {"text": "여호와여 주께서 우리를 위하여 평강을 베푸시오니", "source": "이사야 26:12"},
      {"text": "너희 중에 화평을 세우라", "source": "마가복음 9:50b"},
      {"text": "평강으로 다스리게 하라", "source": "골로새서 3:15b"},
      {"text": "그 평강이 강과 같았겠고", "source": "이사야 48:18a"},
      {"text": "염려를 주께 맡겨 버리라", "source": "베드로전서 5:7a"},
      {"text": "내가 너희에게 평안을 주노라", "source": "요한복음 14:27a"},
      {"text": "평안할지어다", "source": "사사기 6:23b"},
      {"text": "나는 평안 중에 눕고 자리니", "source": "시편 4:8a"}
    ]
  },
  "희망": {
    "icon": "✨",
    "verses": [
      {"text": "내 영혼아 네가 어찌하여 낙심하며 어찌하여 내 속에서 불안해 하는가 너는 하나님께 소망을 두라", "source": "시편 42:5a"},
      {"text": "우리가 이 소망을 가지고 있는 것은 영혼의 닻 같아서 튼튼하고 견고하여", "source": "히브리서 6:19a"},
      {"text": "보라 내가 새 일을 행하리니 이제 나타낼 것이라", "source": "이사야 43:19a"},
      {"text": "주의 인자하심이 생명보다 나으므로 내 입술이 주를 찬양할 것이라", "source": "시편 63:3"},
      {"text": "처음 것들이 다 지나갔음이러라", "source": "요한계시록 21:4b"},
      {"text": "소망이 부끄럽게 하지 아니함은", "source": "로마서 5:5a"},
      {"text": "우리의 소망은 견고하니", "source": "고린도후서 1:7a"},
      {"text": "소망 중에 즐거워하며", "source": "로마서 12:12a"},
      {"text": "그리스도는 우리의 소망이시니라", "source": "골로새서 1:27b"},
      {"text": "보이는 소망은 소망이 아니니", "source": "로마서 8:24b"},
      {"text": "소망으로 구원을 얻었으매", "source": "로마서 8:24a"},
      {"text": "내가 바라는 것은 부끄럽게 되지 않는 것이요", "source": "빌립보서 1:20a"},
      {"text": "여호와를 앙망하는 자는 새 힘을 얻으리니", "source": "이사야 40:31a"},
      {"text": "나의 기대가 그에게서 나는도다", "source": "시편 62:5b"},
      {"text": "여호와는 그를 의지하는 자에게 선하시고", "source": "예레미야애가 3:25a"},
      {"text": "기다리는 자에게 좋으니", "source": "예레미야애가 3:25b"},
      {"text": "잠잠히 기다림이 좋도다", "source": "예레미야애가 3:26b"},
      {"text": "우리의 도움과 방패가 되시나니", "source": "시편 33:20b"},
      {"text": "나의 소망이 여호와께 있나이다", "source": "시편 39:7"},
      {"text": "하나님이 우리와 함께 계시느니라", "source": "마태복음 1:23b"},
      {"text": "모든 일에 하나님이 영광을 받으시도록", "source": "베드로전서 4:11b"},
      {"text": "참으로 이스라엘의 소망이신 여호와시여", "source": "예레미야 14:8a"},
      {"text": "소망이 보이지 않을 때에도 믿고 참았으니", "source": "로마서 4:18b"},
      {"text": "이 소망은 확실하고 견고한 영혼의 닻이니", "source": "히브리서 6:19a"},
      {"text": "새 하늘과 새 땅을 바라보도다", "source": "베드로후서 3:13a"},
      {"text": "오직 의가 있는 곳이니라", "source": "베드로후서 3:13b"},
      {"text": "영원한 위로와 좋은 소망을 주신", "source": "데살로니가후서 2:16b"},
      {"text": "그리스도 안에서 처음 바란 우리로 하여금", "source": "에베소서 1:12a"},
      {"text": "산 소망이 있게 하셨으니", "source": "베드로전서 1:3b"},
      {"text": "이는 썩지 않고 더럽지 않고 쇠하지 않는 유업을 잇게 하심이라", "source": "베드로전서 1:4"}
    ]
  },
  "믿음": {
    "icon": "🙌",
    "verses": [
      {"text": "믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거니", "source": "히브리서 11:1"},
      {"text": "오직 의인은 믿음으로 말미암아 살리라", "source": "로마서 1:17b"},
      {"text": "주 예수를 믿으라 그리하면 너와 네 집이 구원을 받으리라", "source": "사도행전 16:31"},
      {"text": "믿는 자에게는 능히 하지 못할 일이 없느니라", "source": "마가복음 9:23b"},
      {"text": "믿음의 주요 또 온전하게 하시는 이인 예수를 바라보자", "source": "히브리서 12:2a"},
      {"text": "믿음으로 말미암아 은혜로 구원을 받았으니", "source": "에베소서 2:8a"},
      {"text": "믿음이 없이는 하나님을 기쁘시게 하지 못하나니", "source": "히브리서 11:6a"},
      {"text": "믿음으로 살고 보는 것으로 살지 아니하노라", "source": "고린도후서 5:7"},
      {"text": "너희가 믿음에 있는가 너희 자신을 시험하고", "source": "고린도후서 13:5a"},
      {"text": "믿음의 방패를 가지고", "source": "에베소서 6:16a"},
      {"text": "의와 믿음과 사랑과 화평을 따르라", "source": "디모데후서 2:22b"},
      {"text": "믿음의 선한 싸움을 싸우고", "source": "디모데전서 6:12a"},
      {"text": "믿음을 지켰으니", "source": "디모데후서 4:7b"},
      {"text": "모든 것이 가능하니라", "source": "마가복음 9:23b"},
      {"text": "구하는 것마다 받은 줄로 믿으라", "source": "마가복음 11:24b"},
      {"text": "믿음으로 기도하라", "source": "야고보서 5:15a"},
      {"text": "온전한 믿음으로 나아가자", "source": "히브리서 10:22b"},
      {"text": "믿음이 희망하는 바이니라", "source": "히브리서 11:1b"},
      {"text": "믿음으로 능히 하시는 이에게", "source": "에베소서 3:20a"},
      {"text": "믿음으로 굳건히 서라", "source": "고린도전서 16:13b"},
      {"text": "믿음이 적은 자여 어찌하여 의심하였느냐", "source": "마태복음 14:31b"},
      {"text": "의인은 그의 믿음으로 말미암아 살리라", "source": "하박국 2:4b"},
      {"text": "믿음의 결국 곧 영혼의 구원을 받음이라", "source": "베드로전서 1:9"},
      {"text": "믿는 자들에게는 표적이 따르리니", "source": "마가복음 16:17a"},
      {"text": "그 믿음을 보시고", "source": "마가복음 2:5a"},
      {"text": "네 믿음대로 될지어다", "source": "마태복음 9:29b"},
      {"text": "믿음으로 받지 아니하면", "source": "로마서 14:23b"},
      {"text": "믿음은 들음에서 나며", "source": "로마서 10:17a"},
      {"text": "믿음으로 행하고 보는 것으로 행하지 아니함이로라", "source": "고린도후서 5:7"},
      {"text": "믿고 구하는 것은 다 받으리라", "source": "마태복음 21:22"}
    ]
  },
  "위로": {
    "icon": "🤗",
    "verses": [
      {"text": "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라", "source": "마태복음 11:28"},
      {"text": "여호와는 마음이 상한 자를 가까이 하시고", "source": "시편 34:18a"},
      {"text": "애통하는 자는 복이 있나니 그들이 위로를 받을 것임이요", "source": "마태복음 5:4"},
      {"text": "너의 짐을 여호와께 맡기라 그가 너를 붙드시고", "source": "시편 55:22a"},
      {"text": "저녁에는 울음이 깃들일지라도 아침에는 기쁨이 오리로다", "source": "시편 30:5b"},
      {"text": "그가 우리의 모든 환난 중에서 우리를 위로하사", "source": "고린도후서 1:4a"},
      {"text": "모든 위로의 하나님이 계시도다", "source": "고린도후서 1:3b"},
      {"text": "내가 사망의 음침한 골짜기로 다닐지라도", "source": "시편 23:4a"},
      {"text": "두려워하지 아니할 것은 주께서 나와 함께 하심이라", "source": "시편 23:4b"},
      {"text": "주의 지팡이와 막대기가 나를 안위하시나이다", "source": "시편 23:4c"},
      {"text": "위로하되 어머니가 자식을 위로함 같이 하리니", "source": "이사야 66:13a"},
      {"text": "슬피 우는 자들을 위로하시며", "source": "이사야 61:2b"},
      {"text": "상심한 자들을 고치시며", "source": "시편 147:3"},
      {"text": "내 백성을 위로하라", "source": "이사야 40:1b"},
      {"text": "근심하는 자들에게 화관을 주어", "source": "이사야 61:3a"},
      {"text": "슬픔 대신 기쁨의 기름을", "source": "이사야 61:3b"},
      {"text": "상복 대신 찬송의 옷을 입혀서", "source": "이사야 61:3c"},
      {"text": "절망 중에서도 위로를 받으리니", "source": "고린도후서 7:6"},
      {"text": "환난 날에 나를 부르라 내가 너를 건지리니", "source": "시편 50:15"},
      {"text": "그들의 슬픔을 돌이켜 즐겁게 하며", "source": "예레미야 31:13b"},
      {"text": "내가 거룩한 성에서 예루살렘을 인하여 기뻐하며", "source": "이사야 65:19a"},
      {"text": "내 백성을 인하여 즐거워하리니", "source": "이사야 65:19b"},
      {"text": "눈물을 그 눈에서 씻기시며", "source": "요한계시록 21:4a"},
      {"text": "다시는 사망이 없고", "source": "요한계시록 21:4b"},
      {"text": "애통하는 것이나 곡하는 것이나 아픈 것이 다시 있지 아니하리니", "source": "요한계시록 21:4c"},
      {"text": "그러나 이제는 위로를 받는도다", "source": "누가복음 16:25b"},
      {"text": "성령 곧 위로자를 보내리니", "source": "요한복음 14:26a"},
      {"text": "주께서 그의 백성을 위로하시고", "source": "이사야 49:13b"},
      {"text": "고난 받는 자를 긍휼히 여기시리라", "source": "이사야 49:13c"},
      {"text": "내가 친히 갈 것이라", "source": "출애굽기 33:14a"}
    ]
  },
  "용기": {
    "icon": "💪",
    "verses": [
      {"text": "강하고 담대하라 두려워하지 말며 놀라지 말라", "source": "여호수아 1:9a"},
      {"text": "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라", "source": "빌립보서 4:13"},
      {"text": "두려워하지 말라 내가 너와 함께 함이라", "source": "이사야 41:10a"},
      {"text": "세상에서는 너희가 환난을 당하나 담대하라 내가 세상을 이기었노라", "source": "요한복음 16:33b"},
      {"text": "오직 여호와를 앙망하는 자는 새 힘을 얻으리니", "source": "이사야 40:31a"},
      {"text": "하나님이 우리에게 주신 것은 두려워하는 마음이 아니요", "source": "디모데후서 1:7a"},
      {"text": "능력과 사랑과 절제하는 마음이니", "source": "디모데후서 1:7b"},
      {"text": "두려워하지 말고 담대하라", "source": "신명기 31:6a"},
      {"text": "여호와 너의 하나님이 너와 함께 가시며", "source": "신명기 31:6b"},
      {"text": "너를 떠나지 아니하시고 버리지 아니하시리라", "source": "신명기 31:6c"},
      {"text": "담대하여 남자답게 행하라", "source": "고린도전서 16:13a"},
      {"text": "강하고 담대하라", "source": "여호수아 1:6a"},
      {"text": "마음을 강하게 하며 담대히 하라", "source": "시편 27:14b"},
      {"text": "여호와를 기다릴지어다", "source": "시편 27:14a"},
      {"text": "내가 산을 향하여 눈을 들리라", "source": "시편 121:1a"},
      {"text": "나의 도움이 어디서 올까", "source": "시편 121:1b"},
      {"text": "나의 도움은 천지를 지으신 여호와에게서로다", "source": "시편 121:2"},
      {"text": "여호와가 나의 빛이요 나의 구원이시니", "source": "시편 27:1a"},
      {"text": "내가 누구를 두려워하리요", "source": "시편 27:1b"},
      {"text": "여호와는 내 생명의 능력이시니", "source": "시편 27:1c"},
      {"text": "내가 누구를 무서워하리요", "source": "시편 27:1d"},
      {"text": "내 곁에 계시면 두려움 없네", "source": "이사야 43:2a"},
      {"text": "물이 넘칠 때에 네가 빠지지 아니할 것이요", "source": "이사야 43:2b"},
      {"text": "불 가운데로 지날 때에도 타지 아니할 것이요", "source": "이사야 43:2c"},
      {"text": "담대함을 얻어 하나님의 뜻대로", "source": "히브리서 4:16a"},
      {"text": "성령이 너희로 하여금 담대하게 하리라", "source": "사도행전 4:31b"},
      {"text": "우리가 담대함을 가지고 하나님께 나아가자", "source": "히브리서 4:16a"},
      {"text": "담대히 말하되", "source": "에베소서 6:20a"},
      {"text": "두려워 말며 놀라지 말라", "source": "이사야 41:10a"},
      {"text": "내가 너를 굳게 하리라", "source": "이사야 41:10b"}
    ]
  },
  "지혜": {
    "icon": "💡",
    "verses": [
      {"text": "너희 중에 누구든지 지혜가 부족하거든 모든 사람에게 후히 주시는 하나님께 구하라", "source": "야고보서 1:5a"},
      {"text": "여호와를 경외하는 것이 지혜의 근본이요", "source": "잠언 9:10a"},
      {"text": "너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라", "source": "잠언 3:6"},
      {"text": "지혜는 진주보다 귀하니 네가 사모하는 모든 것으로도 이에 비교할 수 없도다", "source": "잠언 3:15"},
      {"text": "그런즉 너희가 어떻게 행할지를 자세히 주의하여 지혜 없는 자 같이 하지 말고 오직 지혜 있는 자 같이 하여", "source": "에베소서 5:15"},
      {"text": "여호와를 경외하는 것이 지식의 근본이어늘", "source": "잠언 1:7a"},
      {"text": "미련한 자는 지혜와 훈계를 멸시하느니라", "source": "잠언 1:7b"},
      {"text": "지혜가 제일이니 지혜를 얻으라", "source": "잠언 4:7a"},
      {"text": "네가 얻는 모든 것을 가져 명철을 얻을지니라", "source": "잠언 4:7b"},
      {"text": "지혜로운 자는 명예를 기업으로 받거니와", "source": "잠언 3:35a"},
      {"text": "지혜있는 자는 듣고 학식이 더할 것이요", "source": "잠언 1:5a"},
      {"text": "명철한 자는 모략을 얻을 것이니라", "source": "잠언 1:5b"},
      {"text": "대저 여호와는 지혜를 주시며", "source": "잠언 2:6a"},
      {"text": "그의 입에서 지식과 명철이 나오며", "source": "잠언 2:6b"},
      {"text": "그는 정직한 자를 위하여 완전한 지혜를 예비하시며", "source": "잠언 2:7a"},
      {"text": "행실이 온전한 자의 방패가 되시나니", "source": "잠언 2:7b"},
      {"text": "대저 지혜는 마음에 들어가며", "source": "잠언 2:10a"},
      {"text": "지식은 네 영혼에게 즐겁게 될 것이요", "source": "잠언 2:10b"},
      {"text": "근신이 너를 지키며 명철이 너를 보호하여", "source": "잠언 2:11"},
      {"text": "악한 자의 길에서와 패역을 말하는 자에게서 건져내리라", "source": "잠언 2:12"},
      {"text": "지혜를 얻는 자와 명철을 얻는 자는 복이 있나니", "source": "잠언 3:13"},
      {"text": "이는 지혜를 얻는 것이 은을 얻는 것보다 낫고", "source": "잠언 3:14a"},
      {"text": "그 이익이 정금보다 나음이니라", "source": "잠언 3:14b"},
      {"text": "지혜는 그 얻는 자에게 생명나무라", "source": "잠언 3:18a"},
      {"text": "지혜를 가진 자는 복되도다", "source": "잠언 3:18b"},
      {"text": "여호와께서 지혜로 땅을 세우셨으며", "source": "잠언 3:19a"},
      {"text": "명철로 하늘을 굳게 하셨고", "source": "잠언 3:19b"},
      {"text": "그의 지식으로 해양이 갈라지게 하셨으며", "source": "잠언 3:20a"},
      {"text": "공중에서 이슬이 내리게 하셨느니라", "source": "잠언 3:20b"},
      {"text": "지혜는 그의 길을 걷는 자에게 생명이며", "source": "잠언 4:22a"}
    ]
  },
  "인간관계": {
    "icon": "🧑‍🤝‍🧑",
    "verses": [
      {"text": "친구는 사랑이 끊어지지 아니하고 형제는 위급한 때를 위하여 났느니라", "source": "잠언 17:17"},
      {"text": "어떤 친구는 형제보다 친밀하니라", "source": "잠언 18:24b"},
      {"text": "지혜로운 자와 동행하면 지혜를 얻고 미련한 자와 사귀면 해를 받느니라", "source": "잠언 13:20"},
      {"text": "속지 말라 악한 동무들은 선한 행실을 더럽히나니", "source": "고린도전서 15:33"},
      {"text": "두 사람이 한 사람보다 나음은 그들이 수고함으로 좋은 상을 얻을 것임이라", "source": "전도서 4:9"},
      {"text": "서로 사랑하라 이것이 너희에게 주는 계명이니라", "source": "요한복음 15:17"},
      {"text": "피차 짐을 지라 그리하여 그리스도의 법을 성취하라", "source": "갈라디아서 6:2"},
      {"text": "서로 친절하게 하며 불쌍히 여기며", "source": "에베소서 4:32a"},
      {"text": "형제들아 서로 사랑하기를 계속하라", "source": "히브리서 13:1"},
      {"text": "손님 대접하기를 잊지 말라", "source": "히브리서 13:2a"},
      {"text": "어떤 이들은 이로써 부지중에 천사들을 대접하였느니라", "source": "히브리서 13:2b"},
      {"text": "온유함으로 화목하게 하기를 힘쓰라", "source": "에베소서 4:3"},
      {"text": "마음을 같이하여 서로 친교하며", "source": "로마서 12:16a"},
      {"text": "높은 데 마음을 두지 말고 도리어 낮은 데 처하며", "source": "로마서 12:16b"},
      {"text": "스스로 지혜있는 체하지 말라", "source": "로마서 12:16c"},
      {"text": "악을 악으로 갚지 말고", "source": "로마서 12:17a"},
      {"text": "모든 사람 앞에서 선한 일을 도모하라", "source": "로마서 12:17b"},
      {"text": "할 수 있거든 너희로서는 모든 사람과 더불어 화목하라", "source": "로마서 12:18"},
      {"text": "서로 권하고 서로 덕을 세우라", "source": "데살로니가전서 5:11"},
      {"text": "범사에 오래 참고", "source": "에베소서 4:2a"},
      {"text": "사랑 가운데서 서로 용납하고", "source": "에베소서 4:2b"},
      {"text": "평안의 매는 줄로 성령이 하나 되게 하신 것을 힘써 지키라", "source": "에베소서 4:3"},
      {"text": "몸이 하나이요 성령도 하나이니", "source": "에베소서 4:4a"},
      {"text": "주도 하나이요 믿음도 하나이요", "source": "에베소서 4:5a"},
      {"text": "하나님도 하나이시니", "source": "에베소서 4:6a"},
      {"text": "모든 사람 위에 계시고 모든 사람을 통하여 계시고", "source": "에베소서 4:6b"},
      {"text": "모든 사람 가운데 계시도다", "source": "에베소서 4:6c"},
      {"text": "성도를 온전하게 하며 봉사의 일을 하게 하며", "source": "에베소서 4:12a"},
      {"text": "그리스도의 몸을 세우려 하심이라", "source": "에베소서 4:12b"},
      {"text": "사랑 안에서 참된 것을 하여", "source": "에베소서 4:15a"}
    ]
  },
  "용서": {
    "icon": "🤝",
    "verses": [
      {"text": "서로 친절하게 하며 불쌍히 여기며 서로 용서하기를", "source": "에베소서 4:32a"},
      {"text": "너희가 사람의 잘못을 용서하면 너희 하늘 아버지께서도 너희 잘못을 용서하시려니와", "source": "마태복음 6:14"},
      {"text": "사랑은 모든 허물을 가리느니라", "source": "잠언 10:12b"},
      {"text": "일곱 번뿐 아니라 일곱 번을 일흔 번까지라도 할지니라", "source": "마태복음 18:22b"},
      {"text": "긍휼히 여기는 자는 복이 있나니 그들이 긍휼히 여김을 받을 것임이요", "source": "마태복음 5:7"},
      {"text": "그리스도께서 너희를 용서하신 것 같이", "source": "골로새서 3:13b"},
      {"text": "누가 누구에게 불만이 있거든 서로 용납하여", "source": "골로새서 3:13a"},
      {"text": "서로 용서하라", "source": "골로새서 3:13b"},
      {"text": "만일 너희가 사람의 과실을 용서하지 아니하면", "source": "마태복음 6:15a"},
      {"text": "너희 아버지께서도 너희 과실을 용서하지 아니하시리라", "source": "마태복음 6:15b"},
      {"text": "용서하라 그리하면 용서함을 받을 것이요", "source": "누가복음 6:37b"},
      {"text": "심판하지 말라 그리하면 심판을 받지 않을 것이요", "source": "누가복음 6:37a"},
      {"text": "정죄하지 말라 그리하면 정죄를 받지 않을 것이요", "source": "누가복음 6:37b"},
      {"text": "주라 그리하면 너희에게 줄 것이니", "source": "누가복음 6:38a"},
      {"text": "악에게 지지 말고 선으로 악을 이기라", "source": "로마서 12:21"},
      {"text": "원수를 갚지 말고 하나님의 진노하심에 맡기라", "source": "로마서 12:19a"},
      {"text": "원수가 주리거든 먹이고 목마르거든 마시게 하라", "source": "로마서 12:20a"},
      {"text": "그리함으로 네가 숯불을 그 머리에 쌓아 놓으리라", "source": "로마서 12:20b"},
      {"text": "서로 화목하라", "source": "고린도후서 13:11b"},
      {"text": "하나님이 그리스도 안에서 세상을 자기와 화목하게 하시며", "source": "고린도후서 5:19a"},
      {"text": "그들의 죄를 그들에게 돌리지 아니하시고", "source": "고린도후서 5:19b"},
      {"text": "화목하게 하는 말씀을 우리에게 부탁하셨느니라", "source": "고린도후서 5:19c"},
      {"text": "모든 악독과 노함과 분냄과 떠드는 것과 비방하는 것을", "source": "에베소서 4:31a"},
      {"text": "모든 악의와 함께 너희에게서 떠나게 하고", "source": "에베소서 4:31b"},
      {"text": "하나님이 그리스도 안에서 너희를 용서하심과 같이", "source": "에베소서 4:32b"},
      {"text": "너희도 서로 용서하라", "source": "에베소서 4:32c"},
      {"text": "사랑하는 자들아 우리가 서로 사랑하자", "source": "요한1서 4:7a"},
      {"text": "사랑은 하나님께 속한 것이니", "source": "요한1서 4:7b"},
      {"text": "사랑하는 자마다 하나님께로부터 나서 하나님을 알거니와", "source": "요한1서 4:7c"},
      {"text": "사랑하지 아니하는 자는 하나님을 알지 못하나니", "source": "요한1서 4:8a"}
    ]
  },
  "축복": {
    "icon": "🎉",
    "verses": [
      {"text": "여호와는 네게 복을 주시고 너를 지키시기를 원하며", "source": "민수기 6:24"},
      {"text": "너를 축복하는 자에게는 내가 복을 내리고", "source": "창세기 12:3a"},
      {"text": "주는 것이 받는 것보다 복이 있다", "source": "사도행전 20:35b"},
      {"text": "심령이 가난한 자는 복이 있나니 천국이 그들의 것임이요", "source": "마태복음 5:3"},
      {"text": "네가 네 손이 수고한 대로 먹을 것이라 네가 복되고 형통하리로다", "source": "시편 128:2"},
      {"text": "여호와는 네게 복을 주시고 너를 지키시기를 원하며", "source": "민수기 6:24"},
      {"text": "여호와는 그의 얼굴을 네게 비추사 은혜 베푸시기를 원하며", "source": "민수기 6:25"},
      {"text": "여호와는 그 얼굴을 네게로 향하여 드사 평강 주시기를 원하노라", "source": "민수기 6:26"},
      {"text": "온유한 자는 복이 있나니 그들이 땅을 기업으로 받을 것임이요", "source": "마태복음 5:5"},
      {"text": "의에 주리고 목마른 자는 복이 있나니", "source": "마태복음 5:6a"},
      {"text": "그들이 배부를 것임이요", "source": "마태복음 5:6b"},
      {"text": "긍휼히 여기는 자는 복이 있나니", "source": "마태복음 5:7a"},
      {"text": "그들이 긍휼히 여김을 받을 것임이요", "source": "마태복음 5:7b"},
      {"text": "마음이 청결한 자는 복이 있나니", "source": "마태복음 5:8a"},
      {"text": "그들이 하나님을 볼 것임이요", "source": "마태복음 5:8b"},
      {"text": "화평하게 하는 자는 복이 있나니", "source": "마태복음 5:9a"},
      {"text": "그들이 하나님의 아들이라 일컬음을 받을 것임이요", "source": "마태복음 5:9b"},
      {"text": "의를 위하여 박해를 받은 자는 복이 있나니", "source": "마태복음 5:10a"},
      {"text": "천국이 그들의 것임이라", "source": "마태복음 5:10b"},
      {"text": "모든 영적인 복을 하늘에 있는 곳에서", "source": "에베소서 1:3b"},
      {"text": "그리스도 안에서 축복하사", "source": "에베소서 1:3c"},
      {"text": "창세 전에 그리스도 안에서 우리를 택하사", "source": "에베소서 1:4a"},
      {"text": "우리로 사랑 안에서 그 앞에 거룩하고 흠이 없게 하시려고", "source": "에베소서 1:4b"},
      {"text": "복의 근원이 될지라", "source": "창세기 12:2c"},
      {"text": "여호와의 복이 사람을 부하게 하고", "source": "잠언 10:22a"},
      {"text": "수고를 겸하여 주지 아니하시느니라", "source": "잠언 10:22b"},
      {"text": "여호와를 경외하는 자에게는 좋은 것이 부족함이 없으리로다", "source": "시편 34:9b"},
      {"text": "복 있는 사람은 악인들의 꾀를 따르지 아니하며", "source": "시편 1:1a"},
      {"text": "죄인들의 길에 서지 아니하며", "source": "시편 1:1b"},
      {"text": "오만한 자들의 자리에 앉지 아니하고", "source": "시편 1:1c"}
    ]
  }
};

// Enhanced mood colors for professional image generation
const moodColors = {
  "감사": { bg: "#FFF0E6", accent: "#8B4513", light: "#FFFAF0" },
  "기쁨": { bg: "#E6F3FF", accent: "#2C3E50", light: "#F0F8FF" },
  "사랑": { bg: "#FFE6F0", accent: "#8B2635", light: "#FFF0F5" },
  "평안": { bg: "#E6FFF0", accent: "#2E7D32", light: "#F0FFF0" },
  "희망": { bg: "#F0E6FF", accent: "#5D2E8B", light: "#F8F0FF" },
  "믿음": { bg: "#FFFEF7", accent: "#8B4513", light: "#FFFFF0" },
  "위로": { bg: "#E6F0FF", accent: "#2980B9", light: "#F0F8FF" },
  "용기": { bg: "#FFECE6", accent: "#D35400", light: "#FFF5EE" },
  "지혜": { bg: "#F3E6FF", accent: "#4A148C", light: "#FAF0FF" },
  "인간관계": { bg: "#FFEBE6", accent: "#E67E22", light: "#FFF8DC" },
  "용서": { bg: "#E8FFE8", accent: "#388E3C", light: "#F0FFF0" },
  "축복": { bg: "#FFFAE6", accent: "#B8860B", light: "#FFFFF0" }
};

// Application state with enhanced tracking
let currentMood = null;
let currentVerse = null;
let usedVerses = new Set(); // Track used verses for better rotation
let verseHistory = []; // Keep history for undo functionality

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('잠언베이글 Application with 360 verses initialized');
    initializeMoodButtons();
    setupEventListeners();
    showStartPage();
    
    // Preload fonts for better image rendering
    preloadFonts();
});

// Preload fonts for canvas rendering
function preloadFonts() {
    const fonts = [
        'bold 40px "Noto Sans KR"',
        'bold 48px "Noto Sans KR"',
        'bold 56px "Noto Sans KR"',
        'normal 32px "Noto Sans KR"',
        'normal 24px "Noto Sans KR"'
    ];
    
    fonts.forEach(font => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = font;
        ctx.fillText('테스트', 0, 0);
    });
}

// Create enhanced mood selection buttons
function initializeMoodButtons() {
    const moodButtonsContainer = document.getElementById('mood-buttons-container');
    if (!moodButtonsContainer) {
        console.error('Mood buttons container not found');
        return;
    }

    Object.entries(verseDatabase).forEach(([moodName, moodData]) => {
        const button = document.createElement('button');
        button.className = 'mood-button';
        button.dataset.mood = moodName;
        button.setAttribute('aria-label', `${moodName} 마음 선택 (30개 말씀)`);
        button.type = 'button';
        
        button.innerHTML = `
            <span class="mood-icon">${moodData.icon}</span>
            <span class="mood-label">${moodName}</span>
        `;
        
        moodButtonsContainer.appendChild(button);
    });
    console.log('Enhanced mood buttons initialized with 360 verses');
}

// Enhanced event listeners setup
function setupEventListeners() {
    // Get all required elements
    const startButton = document.getElementById('start-button');
    const moodButtonsContainer = document.getElementById('mood-buttons-container');
    const anotherVerseButton = document.getElementById('another-verse-button');
    const backButton = document.getElementById('back-button');
    const homeFromMood = document.getElementById('home-from-mood');
    const homeFromVerse = document.getElementById('home-from-verse');
    const createImageButton = document.getElementById('create-image-button');
    const modal = document.getElementById('share-modal');
    const modalClose = document.getElementById('modal-close');
    const modalOk = document.getElementById('modal-ok');

    // Start button
    if (startButton) {
        startButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Start button clicked');
            showMoodSelectionPage();
        });
    }

    // Enhanced mood selection
    if (moodButtonsContainer) {
        moodButtonsContainer.addEventListener('click', (e) => {
            e.preventDefault();
            const button = e.target.closest('.mood-button');
            if (button) {
                const mood = button.dataset.mood;
                console.log('Mood selected:', mood, '- Available verses:', verseDatabase[mood]?.verses.length || 0);
                
                // Add visual feedback
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = '';
                    showVersePage(mood);
                }, 100);
            }
        });
    }

    // Another verse button
    if (anotherVerseButton) {
        anotherVerseButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Another verse requested');
            if (currentMood) {
                showNewVerse();
            }
        });
    }

    // Back to mood selection button
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Back button clicked');
            showMoodSelectionPage();
        });
    }

    // Home buttons
    if (homeFromMood) {
        homeFromMood.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Home from mood clicked');
            showStartPage();
        });
    }

    if (homeFromVerse) {
        homeFromVerse.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Home from verse clicked');
            showStartPage();
        });
    }

    // Enhanced image creation button
    if (createImageButton) {
        createImageButton.addEventListener('click', (e) => {
            e.preventDefault();
            createImageButton.disabled = true;
            createImageButton.textContent = '이미지 생성 중...';
            
            setTimeout(() => {
                createAndDownloadProfessionalImage();
                createImageButton.disabled = false;
                createImageButton.innerHTML = '🖼️ 이미지 다운로드 (1080x1080)';
            }, 100);
        });
    }

    // Modal event listeners
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOk) modalOk.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    console.log('Enhanced event listeners setup complete');
}

// Screen navigation functions
function showStartPage() {
    hideAllScreens();
    clearMoodBackground();
    resetApplicationState();
    
    const startPage = document.getElementById('start-page');
    if (startPage) {
        startPage.classList.add('active');
        console.log('Start page shown');
    }
}

function showMoodSelectionPage() {
    hideAllScreens();
    clearMoodBackground();
    
    const moodSelectionPage = document.getElementById('mood-selection-page');
    if (moodSelectionPage) {
        moodSelectionPage.classList.add('active');
        console.log('Mood selection page shown');
    }
}

function showVerseDisplayPage() {
    hideAllScreens();
    
    const verseDisplayPage = document.getElementById('verse-display-page');
    if (verseDisplayPage) {
        verseDisplayPage.classList.add('active');
        console.log('Verse display page shown');
    }
}

function hideAllScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.classList.remove('fade-in');
    });
}

// Enhanced mood background management
function setMoodBackground(mood) {
    clearMoodBackground();
    document.body.classList.add(`mood-${mood}`);
    console.log(`Enhanced background set to mood: ${mood}`);
}

function clearMoodBackground() {
    const moodClasses = Object.keys(moodColors).map(mood => `mood-${mood}`);
    document.body.classList.remove(...moodClasses);
}

function resetApplicationState() {
    currentMood = null;
    currentVerse = null;
    usedVerses.clear();
    verseHistory.length = 0;
}

// Enhanced verse page display
function showVersePage(mood) {
    currentMood = mood;
    
    // Reset used verses for new mood selection
    usedVerses.clear();
    verseHistory.length = 0;
    
    // Set mood-based background
    setMoodBackground(mood);
    
    // Update mood indicator
    updateMoodIndicator(mood);
    
    const verse = getRandomVerseByMood(mood);
    currentVerse = verse;
    displayVerseWithAnimation(verse);
    showVerseDisplayPage();
    
    console.log(`Showing ${mood} verse: "${verse.text.substring(0, 30)}..."`);
}

// Update mood indicator in verse display
function updateMoodIndicator(mood) {
    const moodIcon = document.getElementById('current-mood-icon');
    const moodName = document.getElementById('current-mood-name');
    
    if (moodIcon && moodName && verseDatabase[mood]) {
        moodIcon.textContent = verseDatabase[mood].icon;
        moodName.textContent = mood;
    }
}

// Enhanced verse selection with better rotation
function getRandomVerseByMood(mood) {
    const moodData = verseDatabase[mood];
    if (!moodData || moodData.verses.length === 0) {
        return { 
            text: "선택한 마음에 대한 말씀이 없습니다.", 
            source: "" 
        };
    }
    
    // Get verses that haven't been used yet
    const availableVerses = moodData.verses.filter((verse, index) => 
        !usedVerses.has(`${mood}-${index}`)
    );
    
    // If all verses have been used, reset and use all verses
    if (availableVerses.length === 0) {
        usedVerses.clear();
        console.log('All verses for', mood, 'have been shown. Resetting rotation.');
        return getRandomVerseByMood(mood); // Recursive call with cleared set
    }
    
    // Select random verse from available ones
    const randomIndex = Math.floor(Math.random() * availableVerses.length);
    const selectedVerse = availableVerses[randomIndex];
    
    // Mark this verse as used
    const originalIndex = moodData.verses.indexOf(selectedVerse);
    usedVerses.add(`${mood}-${originalIndex}`);
    
    // Add to history
    verseHistory.push(selectedVerse);
    if (verseHistory.length > 10) {
        verseHistory.shift(); // Keep only last 10
    }
    
    console.log(`Selected verse ${originalIndex + 1}/30 for ${mood}. Used: ${usedVerses.size}`);
    return selectedVerse;
}

// Enhanced verse display with smooth animations
function displayVerseWithAnimation(verse) {
    const verseTextElem = document.getElementById('verse-text');
    const verseSourceElem = document.getElementById('verse-source');
    const verseContent = document.getElementById('verse-content');
    
    if (verseContent) {
        verseContent.style.opacity = '0';
        verseContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            if (verseTextElem) verseTextElem.textContent = verse.text;
            if (verseSourceElem) verseSourceElem.textContent = verse.source;
            
            verseContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            verseContent.style.opacity = '1';
            verseContent.style.transform = 'translateY(0)';
        }, 100);
    } else {
        if (verseTextElem) verseTextElem.textContent = verse.text;
        if (verseSourceElem) verseSourceElem.textContent = verse.source;
    }
    
    console.log('Verse displayed with animation:', verse.text.substring(0, 50) + '...');
}

// Show new verse for current mood
function showNewVerse() {
    if (!currentMood) return;
    
    const verse = getRandomVerseByMood(currentMood);
    currentVerse = verse;
    displayVerseWithAnimation(verse);
}

// Enhanced professional image generation
function createAndDownloadProfessionalImage() {
    if (!currentVerse || !currentMood) return;
    
    const canvas = document.getElementById('verse-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size for Instagram post format (1080x1080)
    canvas.width = 1080;
    canvas.height = 1080;
    
    // Get mood colors
    const colors = moodColors[currentMood] || moodColors["감사"];
    const moodData = verseDatabase[currentMood];
    
    // Create professional gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, colors.light);
    gradient.addColorStop(0.5, colors.bg);
    gradient.addColorStop(1, colors.light);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add subtle texture overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Enhanced typography setup with better Korean font support
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Top emotion indicator - BOLD and prominent
    const emotionY = 120;
    
    // Emotion icon (large)
    ctx.font = '80px "Noto Sans KR", Arial, sans-serif';
    ctx.fillStyle = colors.accent;
    ctx.fillText(moodData.icon, canvas.width / 2, emotionY - 20);
    
    // Emotion name (BOLD)
    ctx.font = 'bold 40px "Noto Sans KR", Arial, sans-serif';
    ctx.fillStyle = colors.accent;
    ctx.fillText(currentMood, canvas.width / 2, emotionY + 40);
    
    // Main verse text - BOLD and large
    const verseStartY = 350;
    ctx.font = 'bold 56px "Noto Sans KR", Arial, sans-serif';
    ctx.fillStyle = colors.accent;
    
    // Enhanced word wrapping for Korean text
    const words = currentVerse.text.split('');
    const lines = [];
    let currentLine = '';
    const maxWidth = canvas.width - 100;
    
    for (let i = 0; i < words.length; i++) {
        const testLine = currentLine + words[i];
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && currentLine.length > 0) {
            lines.push(currentLine);
            currentLine = words[i];
        } else {
            currentLine = testLine;
        }
    }
    if (currentLine) lines.push(currentLine);
    
    // Draw verse text (BOLD)
    const lineHeight = 70;
    lines.forEach((line, index) => {
        const y = verseStartY + (index * lineHeight);
        ctx.fillText(line, canvas.width / 2, y);
    });
    
    // Bible reference (semibold)
    const sourceY = verseStartY + (lines.length * lineHeight) + 60;
    ctx.font = '600 32px "Noto Sans KR", Arial, sans-serif';
    ctx.fillStyle = colors.accent;
    ctx.fillText(`- ${currentVerse.source} -`, canvas.width / 2, sourceY);
    
    // Decorative elements
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 3;
    const decorY = sourceY + 50;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 150, decorY);
    ctx.lineTo(canvas.width / 2 + 150, decorY);
    ctx.stroke();
    
    // Cafe branding at bottom
    const footerY = 950;
    
    // Cafe name (bold)
    ctx.font = 'bold 32px "Noto Sans KR", Arial, sans-serif';
    ctx.fillStyle = colors.accent;
    ctx.fillText('잠언베이글 (Jameon Bagel)', canvas.width / 2, footerY);
    
    // Contact info
    ctx.font = '24px "Noto Sans KR", Arial, sans-serif';
    ctx.fillStyle = colors.accent;
    ctx.fillText('경남 거제시 계룡로7길 19-1', canvas.width / 2, footerY + 35);
    ctx.fillText('055-636-4557 / 010-2967-4557', canvas.width / 2, footerY + 60);
    ctx.fillText('@cafe_jameon', canvas.width / 2, footerY + 85);
    
    // Convert to blob and download
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `잠언베이글_${currentMood}_말씀카드_${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showModal(
            '고품질 이미지 생성 완료! 🎨', 
            `${currentMood} 말씀 카드가 성공적으로 다운로드되었습니다.\n\n1080x1080 고해상도로 제작되어 SNS 공유나 프린트에 최적화되어 있습니다.`
        );
        
        console.log('Professional image generated and downloaded');
    }, 'image/png', 1.0);
}

// Modal functions
function showModal(title, message) {
    const modal = document.getElementById('share-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    
    if (modalTitle) modalTitle.textContent = title;
    if (modalMessage) modalMessage.textContent = message;
    
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    const modal = document.getElementById('share-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Enhanced keyboard navigation
document.addEventListener('keydown', (e) => {
    const verseDisplayPage = document.getElementById('verse-display-page');
    const moodSelectionPage = document.getElementById('mood-selection-page');
    const startPage = document.getElementById('start-page');
    const modal = document.getElementById('share-modal');
    
    if (e.key === 'Escape') {
        if (modal && !modal.classList.contains('hidden')) {
            closeModal();
            return;
        }
        
        if (verseDisplayPage && verseDisplayPage.classList.contains('active')) {
            showMoodSelectionPage();
        } else if (moodSelectionPage && moodSelectionPage.classList.contains('active')) {
            showStartPage();
        }
    }
    
    // Space bar for new verse
    if (e.key === ' ' && verseDisplayPage && verseDisplayPage.classList.contains('active')) {
        e.preventDefault();
        showNewVerse();
    }
    
    // Enter for image download
    if (e.key === 'Enter' && verseDisplayPage && verseDisplayPage.classList.contains('active')) {
        e.preventDefault();
        createAndDownloadProfessionalImage();
    }
    
    // Home key shortcut
    if (e.key === 'Home' || (e.ctrlKey && e.key === 'h')) {
        e.preventDefault();
        showStartPage();
    }
});

// Enhanced touch gestures for mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Swipe right to go back (minimum 100px swipe)
    if (deltaX > 100 && Math.abs(deltaY) < 50) {
        const verseDisplayPage = document.getElementById('verse-display-page');
        const moodSelectionPage = document.getElementById('mood-selection-page');
        
        if (verseDisplayPage && verseDisplayPage.classList.contains('active')) {
            showMoodSelectionPage();
        } else if (moodSelectionPage && moodSelectionPage.classList.contains('active')) {
            showStartPage();
        }
    }
    
    // Swipe up for new verse
    if (deltaY < -100 && Math.abs(deltaX) < 50) {
        const verseDisplayPage = document.getElementById('verse-display-page');
        if (verseDisplayPage && verseDisplayPage.classList.contains('active') && currentMood) {
            showNewVerse();
        }
    }
}, { passive: true });

// Performance monitoring
console.log('🎉 잠언베이글 - 프로페셜 말씀 카드 애플리케이션이 준비되었습니다!');
console.log(`📚 총 ${Object.values(verseDatabase).reduce((sum, mood) => sum + mood.verses.length, 0)}개의 말씀이 로드되었습니다.`);
console.log('✨ 고품질 이미지 생성 기능이 활성화되었습니다.');
console.log('🎨 각 감정마다 30개씩, 총 360개의 말씀을 만나보세요!');
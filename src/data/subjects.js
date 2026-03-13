import mathTopics from './topics'
import khtn7Topics from './khtn7-topics'

const subjects = {
  'toan7': {
    slug: 'toan7',
    name: 'Toán Lớp 7',
    shortName: 'Toán 7',
    icon: '📚',
    basePath: '',
    heroTitle: 'Toán Lớp 7',
    heroSubtitle: 'Chân Trời Sáng Tạo',
    heroDesc: 'Ôn tập kiến thức qua lý thuyết, bài tập mẫu và trò chơi tương tác',
    topics: mathTopics,
    categories: [
      { key: 'all', label: 'Tất cả' },
      { key: 'dai-so', label: 'Đại số' },
      { key: 'hinh-hoc', label: 'Hình học' },
      { key: 'thong-ke', label: 'Thống kê & Xác suất' },
    ],
  },
  'khtn7': {
    slug: 'khtn7',
    name: 'Khoa học tự nhiên 7',
    shortName: 'KHTN 7',
    icon: '🔬',
    basePath: '/khtn7',
    heroTitle: 'Khoa học tự nhiên 7',
    heroSubtitle: 'Chân Trời Sáng Tạo',
    heroDesc: 'Ôn tập Sinh học, Vật lý, Hóa học qua lý thuyết và trò chơi tương tác',
    topics: khtn7Topics,
    categories: [
      { key: 'all', label: 'Tất cả' },
      { key: 'sinh-hoc', label: 'Sinh học' },
      { key: 'vat-ly', label: 'Vật lý' },
      { key: 'hoa-hoc', label: 'Hóa học' },
    ],
  },
}

export const subjectList = [
  subjects['toan7'],
  subjects['khtn7'],
]

export default subjects

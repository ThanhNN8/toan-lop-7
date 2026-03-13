const khtn7Topics = [
  {
    id: 101,
    name: 'Tế bào',
    icon: '🔬',
    category: 'sinh-hoc',
    categoryName: 'Sinh học',
    description: 'Cấu tạo và chức năng của tế bào - đơn vị cơ bản của sự sống',
    theory: [
      { title: 'Khái niệm tế bào', content: 'Tế bào là đơn vị cấu tạo và chức năng cơ bản của mọi cơ thể sống. Mọi sinh vật đều được cấu tạo từ tế bào.' },
      { title: 'Tế bào nhân sơ và nhân thực', content: 'Tế bào nhân sơ (vi khuẩn) chưa có màng nhân, vật chất di truyền nằm phân tán. Tế bào nhân thực có màng nhân bao bọc vật chất di truyền.' },
      { title: 'Cấu tạo tế bào động vật', content: 'Gồm: màng tế bào, tế bào chất chứa các bào quan (ti thể, ribosome, lưới nội chất...) và nhân tế bào chứa ADN.' },
      { title: 'Cấu tạo tế bào thực vật', content: 'Ngoài các thành phần giống tế bào động vật, tế bào thực vật còn có thành tế bào (cellulose), lục lạp và không bào lớn.' }
    ],
    exercises: [
      { question: 'So sánh tế bào nhân sơ và tế bào nhân thực.', solution: 'Tế bào nhân sơ: kích thước nhỏ, chưa có màng nhân, ít bào quan. Tế bào nhân thực: kích thước lớn hơn, có màng nhân, nhiều bào quan có màng bao bọc.' },
      { question: 'Nêu các thành phần chính của tế bào động vật.', solution: 'Tế bào động vật gồm 3 thành phần chính: màng tế bào (bảo vệ, trao đổi chất), tế bào chất (chứa các bào quan) và nhân tế bào (chứa vật chất di truyền ADN).' },
      { question: 'Tế bào thực vật khác tế bào động vật ở những điểm nào?', solution: 'Tế bào thực vật có thêm: thành tế bào bằng cellulose, lục lạp (quang hợp) và không bào trung tâm lớn. Tế bào động vật không có các thành phần này.' },
      { question: 'Chức năng của ti thể là gì?', solution: 'Ti thể là bào quan thực hiện quá trình hô hấp tế bào, phân giải chất hữu cơ để giải phóng năng lượng ATP cung cấp cho các hoạt động sống.' },
      { question: 'Tại sao nói tế bào là đơn vị cơ bản của sự sống?', solution: 'Vì tế bào là đơn vị nhỏ nhất có đầy đủ các đặc trưng của sự sống: trao đổi chất, sinh trưởng, sinh sản, cảm ứng. Mọi sinh vật đều cấu tạo từ tế bào.' }
    ],
    essays: [
      { question: 'Bào quan nào thực hiện quang hợp ở thực vật?', answer: 'lục lạp', acceptedAnswers: ['lục lạp', 'luc lap'], hint: 'Bào quan này có chứa chất diệp lục màu xanh', solution: 'Lục lạp là bào quan thực hiện quang hợp, chứa diệp lục hấp thụ ánh sáng để tổng hợp chất hữu cơ.', difficulty: 1 },
      { question: 'Thành tế bào thực vật được cấu tạo chủ yếu từ chất gì?', answer: 'cellulose', acceptedAnswers: ['cellulose', 'xenlulôzơ', 'xenlulozo', 'xenlulozơ'], hint: 'Đây là một loại carbohydrate phức tạp', solution: 'Thành tế bào thực vật cấu tạo chủ yếu từ cellulose (xenlulôzơ), giúp tế bào có hình dạng cố định và bảo vệ tế bào.', difficulty: 1 },
      { question: 'Loại tế bào nào chưa có màng nhân: nhân sơ hay nhân thực?', answer: 'nhân sơ', acceptedAnswers: ['nhân sơ', 'nhan so', 'tế bào nhân sơ'], hint: 'Vi khuẩn thuộc loại tế bào này', solution: 'Tế bào nhân sơ (như vi khuẩn) chưa có màng nhân, vật chất di truyền nằm phân tán trong tế bào chất.', difficulty: 1 },
      { question: 'Bào quan nào cung cấp năng lượng cho tế bào?', answer: 'ti thể', acceptedAnswers: ['ti thể', 'ti the', 'ty thể'], hint: 'Bào quan này được gọi là "nhà máy năng lượng" của tế bào', solution: 'Ti thể thực hiện hô hấp tế bào, phân giải chất hữu cơ thành CO₂ và H₂O, giải phóng năng lượng ATP.', difficulty: 2 }
    ],
    quizzes: [
      { question: 'Đơn vị cấu tạo và chức năng cơ bản của cơ thể sống là gì?', options: ['Mô', 'Tế bào', 'Cơ quan', 'Bào quan'], correct: 1, explanation: 'Tế bào là đơn vị cấu tạo và chức năng cơ bản của mọi cơ thể sống.' },
      { question: 'Tế bào nhân sơ có đặc điểm gì?', options: ['Có màng nhân', 'Chưa có màng nhân', 'Có lục lạp', 'Có ti thể phát triển'], correct: 1, explanation: 'Tế bào nhân sơ chưa có màng nhân bao bọc vật chất di truyền.' },
      { question: 'Thành phần nào CHỈ có ở tế bào thực vật mà KHÔNG có ở tế bào động vật?', options: ['Màng tế bào', 'Nhân tế bào', 'Lục lạp', 'Ti thể'], correct: 2, explanation: 'Lục lạp chỉ có ở tế bào thực vật, giúp thực hiện quang hợp.' },
      { question: 'Chức năng chính của nhân tế bào là gì?', options: ['Quang hợp', 'Chứa vật chất di truyền ADN', 'Hô hấp tế bào', 'Tổng hợp protein'], correct: 1, explanation: 'Nhân tế bào chứa ADN - vật chất di truyền, điều khiển mọi hoạt động sống của tế bào.' },
      { question: 'Bào quan nào được ví như "nhà máy năng lượng" của tế bào?', options: ['Lục lạp', 'Ribosome', 'Ti thể', 'Lưới nội chất'], correct: 2, explanation: 'Ti thể thực hiện hô hấp tế bào, cung cấp năng lượng ATP cho tế bào.' },
      { question: 'Sinh vật nào sau đây có tế bào nhân sơ?', options: ['Nấm', 'Vi khuẩn', 'Thực vật', 'Động vật'], correct: 1, explanation: 'Vi khuẩn là sinh vật nhân sơ, tế bào chưa có màng nhân.' },
      { question: 'Màng tế bào có chức năng gì?', options: ['Quang hợp', 'Bảo vệ và kiểm soát trao đổi chất', 'Lưu trữ ADN', 'Tổng hợp protein'], correct: 1, explanation: 'Màng tế bào bảo vệ tế bào và kiểm soát sự trao đổi chất giữa tế bào với môi trường.' },
      { question: 'Không bào lớn ở trung tâm thường thấy ở loại tế bào nào?', options: ['Tế bào động vật', 'Tế bào vi khuẩn', 'Tế bào thực vật', 'Tế bào nấm'], correct: 2, explanation: 'Tế bào thực vật thường có không bào trung tâm lớn chứa dịch tế bào.' },
      { question: 'Ribosome có chức năng gì?', options: ['Hô hấp tế bào', 'Quang hợp', 'Tổng hợp protein', 'Phân chia tế bào'], correct: 2, explanation: 'Ribosome là nơi tổng hợp protein cho tế bào.' },
      { question: 'ADN nằm ở đâu trong tế bào nhân thực?', options: ['Tế bào chất', 'Ti thể', 'Nhân tế bào', 'Màng tế bào'], correct: 2, explanation: 'Trong tế bào nhân thực, ADN nằm trong nhân tế bào, được bao bọc bởi màng nhân.' }
    ]
  },
  {
    id: 102,
    name: 'Cơ thể đơn bào và đa bào',
    icon: '🦠',
    category: 'sinh-hoc',
    categoryName: 'Sinh học',
    description: 'Phân biệt sinh vật đơn bào và đa bào, các cấp độ tổ chức cơ thể',
    theory: [
      { title: 'Cơ thể đơn bào', content: 'Cơ thể đơn bào chỉ gồm một tế bào duy nhất thực hiện mọi chức năng sống. Ví dụ: vi khuẩn, trùng roi, trùng giày, tảo đơn bào.' },
      { title: 'Cơ thể đa bào', content: 'Cơ thể đa bào gồm nhiều tế bào phối hợp hoạt động. Các tế bào chuyên hóa thành mô → cơ quan → hệ cơ quan → cơ thể.' },
      { title: 'Từ tế bào đến cơ thể', content: 'Tế bào → Mô (nhóm tế bào giống nhau) → Cơ quan (nhiều mô) → Hệ cơ quan (nhiều cơ quan) → Cơ thể.' },
      { title: 'Ưu điểm đa bào', content: 'Cơ thể đa bào có các tế bào chuyên hóa chức năng, phối hợp hiệu quả hơn, giúp sinh vật thích nghi tốt và phát triển kích thước lớn.' }
    ],
    exercises: [
      { question: 'Phân biệt cơ thể đơn bào và đa bào.', solution: 'Đơn bào: chỉ 1 tế bào, tế bào đó thực hiện mọi chức năng. Đa bào: nhiều tế bào, các tế bào chuyên hóa chức năng khác nhau, phối hợp hoạt động.' },
      { question: 'Nêu 3 ví dụ sinh vật đơn bào và 3 ví dụ sinh vật đa bào.', solution: 'Đơn bào: vi khuẩn E.coli, trùng giày, tảo lục đơn bào. Đa bào: con người, cây xanh, con mèo.' },
      { question: 'Sắp xếp các cấp độ tổ chức cơ thể từ nhỏ đến lớn.', solution: 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.' },
      { question: 'Mô là gì? Cho ví dụ.', solution: 'Mô là tập hợp các tế bào có hình dạng, cấu tạo giống nhau, cùng thực hiện một chức năng. Ví dụ: mô cơ, mô biểu bì, mô thần kinh.' },
      { question: 'Tại sao cơ thể đa bào có thể phát triển kích thước lớn hơn?', solution: 'Vì các tế bào chuyên hóa chức năng, phối hợp hiệu quả. Có hệ vận chuyển chất dinh dưỡng đến từng tế bào, không phụ thuộc vào khuếch tán như đơn bào.' }
    ],
    essays: [
      { question: 'Sinh vật chỉ có 1 tế bào gọi là sinh vật gì?', answer: 'đơn bào', acceptedAnswers: ['đơn bào', 'don bao', 'sinh vật đơn bào'], hint: 'Đơn = một, bào = tế bào', solution: 'Sinh vật chỉ có 1 tế bào gọi là sinh vật đơn bào. Ví dụ: vi khuẩn, trùng roi.', difficulty: 1 },
      { question: 'Nhóm tế bào giống nhau cùng thực hiện một chức năng gọi là gì?', answer: 'mô', acceptedAnswers: ['mô', 'mo'], hint: 'Đây là cấp độ tổ chức ngay trên tế bào', solution: 'Mô là tập hợp các tế bào có hình dạng, cấu tạo giống nhau, cùng thực hiện một chức năng nhất định.', difficulty: 1 },
      { question: 'Trùng giày là sinh vật đơn bào hay đa bào?', answer: 'đơn bào', acceptedAnswers: ['đơn bào', 'don bao'], hint: 'Trùng giày chỉ gồm một tế bào duy nhất', solution: 'Trùng giày là sinh vật đơn bào, cơ thể chỉ gồm một tế bào thực hiện mọi chức năng sống.', difficulty: 1 },
      { question: 'Sắp xếp đúng: Tế bào → ? → Cơ quan → Hệ cơ quan → Cơ thể. Điền vào dấu ?', answer: 'mô', acceptedAnswers: ['mô', 'mo'], hint: 'Cấp độ tổ chức giữa tế bào và cơ quan', solution: 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.', difficulty: 2 }
    ],
    quizzes: [
      { question: 'Sinh vật nào sau đây là sinh vật đơn bào?', options: ['Con mèo', 'Cây lúa', 'Trùng giày', 'Con ếch'], correct: 2, explanation: 'Trùng giày là sinh vật đơn bào, cơ thể chỉ gồm một tế bào.' },
      { question: 'Các cấp độ tổ chức cơ thể đa bào từ nhỏ đến lớn là:', options: ['Mô → Tế bào → Cơ quan → Cơ thể', 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể', 'Cơ quan → Mô → Tế bào → Cơ thể', 'Tế bào → Cơ quan → Mô → Cơ thể'], correct: 1, explanation: 'Đúng thứ tự: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.' },
      { question: 'Mô là gì?', options: ['Một tế bào đơn lẻ', 'Nhóm tế bào giống nhau cùng chức năng', 'Một cơ quan nhỏ', 'Toàn bộ cơ thể'], correct: 1, explanation: 'Mô là tập hợp các tế bào có hình dạng, cấu tạo giống nhau, cùng thực hiện một chức năng.' },
      { question: 'Vi khuẩn E.coli là sinh vật:', options: ['Đa bào nhân thực', 'Đơn bào nhân thực', 'Đơn bào nhân sơ', 'Đa bào nhân sơ'], correct: 2, explanation: 'Vi khuẩn E.coli là sinh vật đơn bào nhân sơ (chưa có màng nhân).' },
      { question: 'Ưu điểm của cơ thể đa bào so với đơn bào là:', options: ['Kích thước nhỏ hơn', 'Tế bào chuyên hóa, phối hợp hiệu quả', 'Sinh sản nhanh hơn', 'Không cần dinh dưỡng'], correct: 1, explanation: 'Cơ thể đa bào có tế bào chuyên hóa chức năng, phối hợp hoạt động hiệu quả hơn.' },
      { question: 'Mô biểu bì thuộc loại mô nào?', options: ['Mô cơ', 'Mô liên kết', 'Mô bao phủ bề mặt cơ thể', 'Mô thần kinh'], correct: 2, explanation: 'Mô biểu bì là mô bao phủ bề mặt ngoài cơ thể và lót bề mặt trong các cơ quan.' },
      { question: 'Cơ quan nào sau đây thuộc hệ tiêu hóa?', options: ['Phổi', 'Tim', 'Dạ dày', 'Thận'], correct: 2, explanation: 'Dạ dày là cơ quan thuộc hệ tiêu hóa, có chức năng nghiền và tiêu hóa thức ăn.' },
      { question: 'Trùng roi di chuyển nhờ bộ phận nào?', options: ['Chân giả', 'Roi', 'Lông bơi', 'Cánh'], correct: 1, explanation: 'Trùng roi di chuyển nhờ roi (flagellum) xoay tròn đẩy cơ thể tiến về phía trước.' },
      { question: 'Sinh vật nào sau đây là đa bào?', options: ['Trùng biến hình', 'Vi khuẩn', 'Tảo đơn bào', 'Cây hoa hồng'], correct: 3, explanation: 'Cây hoa hồng là sinh vật đa bào, cơ thể gồm nhiều tế bào chuyên hóa.' }
    ]
  },
  {
    id: 103,
    name: 'Trao đổi chất và năng lượng',
    icon: '🌱',
    category: 'sinh-hoc',
    categoryName: 'Sinh học',
    description: 'Quang hợp, hô hấp tế bào và quá trình trao đổi chất ở sinh vật',
    theory: [
      { title: 'Trao đổi chất', content: 'Trao đổi chất là quá trình cơ thể lấy các chất từ môi trường, biến đổi chúng và thải các chất không cần thiết ra ngoài. Đây là đặc trưng cơ bản của sự sống.' },
      { title: 'Quang hợp', content: 'Quang hợp là quá trình thực vật sử dụng ánh sáng để tổng hợp chất hữu cơ từ CO₂ và H₂O, đồng thời thải O₂. Phương trình: CO₂ + H₂O → (ánh sáng, diệp lục) → C₆H₁₂O₆ + O₂.' },
      { title: 'Hô hấp tế bào', content: 'Hô hấp tế bào là quá trình phân giải chất hữu cơ thành CO₂ và H₂O, giải phóng năng lượng ATP. Phương trình: C₆H₁₂O₆ + O₂ → CO₂ + H₂O + năng lượng (ATP).' },
      { title: 'Mối quan hệ quang hợp - hô hấp', content: 'Quang hợp và hô hấp là hai quá trình ngược nhau nhưng bổ sung. Sản phẩm quang hợp (glucose, O₂) là nguyên liệu hô hấp, và ngược lại.' }
    ],
    exercises: [
      { question: 'Viết phương trình quang hợp dạng chữ.', solution: 'Nước + Khí cacbonic → (ánh sáng, diệp lục) → Glucose + Khí oxy. Hay: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.' },
      { question: 'So sánh quang hợp và hô hấp tế bào.', solution: 'Quang hợp: cần ánh sáng, hấp thụ CO₂, thải O₂, tạo chất hữu cơ, tích lũy năng lượng. Hô hấp: không cần ánh sáng, hấp thụ O₂, thải CO₂, phân giải chất hữu cơ, giải phóng năng lượng.' },
      { question: 'Tại sao thực vật quan trọng đối với sự sống trên Trái Đất?', solution: 'Thực vật quang hợp tạo O₂ cho sinh vật hô hấp, tạo chất hữu cơ làm thức ăn cho sinh vật khác, hấp thụ CO₂ giảm hiệu ứng nhà kính.' },
      { question: 'Năng lượng ATP được sử dụng để làm gì?', solution: 'ATP cung cấp năng lượng cho mọi hoạt động sống: co cơ, vận chuyển chất, tổng hợp chất, dẫn truyền thần kinh, sinh trưởng...' },
      { question: 'Hô hấp tế bào xảy ra ở bào quan nào?', solution: 'Hô hấp tế bào chủ yếu xảy ra ở ti thể. Tại đây, glucose được phân giải với sự có mặt của O₂ để tạo ATP, CO₂ và H₂O.' }
    ],
    essays: [
      { question: 'Quá trình thực vật tổng hợp chất hữu cơ từ CO₂ và H₂O nhờ ánh sáng gọi là gì?', answer: 'quang hợp', acceptedAnswers: ['quang hợp', 'quang hop'], hint: 'Quang = ánh sáng, hợp = tổng hợp', solution: 'Quang hợp là quá trình thực vật sử dụng ánh sáng, diệp lục để tổng hợp chất hữu cơ từ CO₂ và H₂O.', difficulty: 1 },
      { question: 'Khí nào được thải ra trong quá trình quang hợp?', answer: 'O2', acceptedAnswers: ['O2', 'o2', 'oxy', 'oxi', 'O₂'], hint: 'Con người cần khí này để thở', solution: 'Quang hợp thải ra khí O₂ (oxy), cần thiết cho hô hấp của sinh vật.', difficulty: 1 },
      { question: 'Quá trình phân giải glucose để giải phóng năng lượng gọi là gì?', answer: 'hô hấp tế bào', acceptedAnswers: ['hô hấp tế bào', 'ho hap te bao', 'hô hấp', 'ho hap'], hint: 'Quá trình này xảy ra ở ti thể', solution: 'Hô hấp tế bào phân giải glucose thành CO₂ + H₂O và giải phóng năng lượng ATP.', difficulty: 2 },
      { question: 'Chất diệp lục có màu gì?', answer: 'xanh', acceptedAnswers: ['xanh', 'xanh lục', 'xanh lá', 'xanh la'], hint: 'Đây cũng là màu phổ biến của lá cây', solution: 'Diệp lục (chlorophyll) có màu xanh lục, hấp thụ ánh sáng đỏ và xanh dương cho quang hợp.', difficulty: 1 }
    ],
    quizzes: [
      { question: 'Quang hợp xảy ra ở bào quan nào?', options: ['Ti thể', 'Ribosome', 'Lục lạp', 'Nhân tế bào'], correct: 2, explanation: 'Quang hợp xảy ra ở lục lạp, nơi chứa chất diệp lục hấp thụ ánh sáng.' },
      { question: 'Sản phẩm của quang hợp là gì?', options: ['CO₂ và H₂O', 'Glucose và O₂', 'ATP và CO₂', 'H₂O và O₂'], correct: 1, explanation: 'Quang hợp tạo ra glucose (C₆H₁₂O₆) và O₂ từ CO₂ và H₂O.' },
      { question: 'Hô hấp tế bào cần chất nào?', options: ['Chỉ cần O₂', 'Glucose và O₂', 'Chỉ cần glucose', 'CO₂ và H₂O'], correct: 1, explanation: 'Hô hấp tế bào cần glucose (chất hữu cơ) và O₂ để tạo năng lượng ATP.' },
      { question: 'Phương trình nào đúng cho hô hấp tế bào?', options: ['CO₂ + H₂O → Glucose + O₂', 'Glucose + O₂ → CO₂ + H₂O + ATP', 'Glucose → O₂ + ATP', 'CO₂ + O₂ → Glucose + H₂O'], correct: 1, explanation: 'Hô hấp tế bào: Glucose + O₂ → CO₂ + H₂O + năng lượng ATP.' },
      { question: 'Quang hợp và hô hấp có mối quan hệ gì?', options: ['Giống nhau hoàn toàn', 'Không liên quan', 'Ngược nhau và bổ sung', 'Chỉ xảy ra cùng lúc'], correct: 2, explanation: 'Quang hợp và hô hấp là hai quá trình ngược nhau nhưng bổ sung cho nhau.' },
      { question: 'Thực vật thực hiện quá trình nào?', options: ['Chỉ quang hợp', 'Chỉ hô hấp', 'Cả quang hợp và hô hấp', 'Không quá trình nào'], correct: 2, explanation: 'Thực vật thực hiện cả quang hợp (tạo chất hữu cơ) lẫn hô hấp (phân giải để lấy năng lượng).' },
      { question: 'Năng lượng từ hô hấp tế bào được tích lũy dưới dạng gì?', options: ['Glucose', 'Protein', 'ATP', 'ADN'], correct: 2, explanation: 'Năng lượng giải phóng từ hô hấp tế bào được tích lũy trong phân tử ATP.' },
      { question: 'Nếu không có ánh sáng, thực vật có thể quang hợp không?', options: ['Có', 'Không', 'Chỉ ban đêm', 'Chỉ khi có nước'], correct: 1, explanation: 'Quang hợp cần ánh sáng làm nguồn năng lượng, không có ánh sáng thì không quang hợp được.' },
      { question: 'Vai trò của diệp lục trong quang hợp là gì?', options: ['Tạo màu xanh cho lá', 'Hấp thụ ánh sáng', 'Tạo O₂', 'Phân giải glucose'], correct: 1, explanation: 'Diệp lục hấp thụ năng lượng ánh sáng để cung cấp cho phản ứng quang hợp.' }
    ]
  },
  {
    id: 104,
    name: 'Cảm ứng ở sinh vật',
    icon: '🧬',
    category: 'sinh-hoc',
    categoryName: 'Sinh học',
    description: 'Khả năng phản ứng của sinh vật với các kích thích từ môi trường',
    theory: [
      { title: 'Khái niệm cảm ứng', content: 'Cảm ứng là khả năng tiếp nhận và phản ứng lại các kích thích từ môi trường. Đây là đặc trưng cơ bản của mọi sinh vật.' },
      { title: 'Cảm ứng ở thực vật', content: 'Thực vật phản ứng chậm với kích thích, thể hiện qua hướng động (hướng sáng, hướng nước, hướng trọng lực) và ứng động (cụp lá trinh nữ, nở hoa).' },
      { title: 'Cảm ứng ở động vật', content: 'Động vật phản ứng nhanh nhờ hệ thần kinh. Phản xạ là hình thức cảm ứng chủ yếu, gồm phản xạ không điều kiện (bẩm sinh) và phản xạ có điều kiện (học được).' },
      { title: 'Tập tính ở động vật', content: 'Tập tính là chuỗi phản ứng của động vật trả lời kích thích từ môi trường. Tập tính bẩm sinh (bản năng) có từ khi sinh ra. Tập tính học được hình thành qua học tập, rèn luyện.' }
    ],
    exercises: [
      { question: 'Cảm ứng là gì? Cho ví dụ.', solution: 'Cảm ứng là khả năng tiếp nhận và phản ứng lại kích thích từ môi trường. Ví dụ: cây hướng về phía có ánh sáng, tay rụt lại khi chạm vật nóng.' },
      { question: 'So sánh cảm ứng ở thực vật và động vật.', solution: 'Thực vật: phản ứng chậm, chủ yếu bằng sinh trưởng (hướng động), không có hệ thần kinh. Động vật: phản ứng nhanh nhờ hệ thần kinh, hình thức chính là phản xạ.' },
      { question: 'Nêu 3 ví dụ về hướng động ở thực vật.', solution: 'Hướng sáng: thân cây mọc về phía có ánh sáng. Hướng nước: rễ cây mọc về phía có nước. Hướng trọng lực: rễ cây mọc hướng xuống đất.' },
      { question: 'Phân biệt phản xạ không điều kiện và phản xạ có điều kiện.', solution: 'Phản xạ không điều kiện: bẩm sinh, di truyền, bền vững (VD: rụt tay khi nóng). Phản xạ có điều kiện: học được, không di truyền, có thể mất đi (VD: dừng xe khi đèn đỏ).' },
      { question: 'Thế nào là tập tính bẩm sinh? Cho ví dụ.', solution: 'Tập tính bẩm sinh là tập tính có từ khi sinh ra, mang tính bản năng, di truyền được. Ví dụ: nhện giăng tơ, chim di cư, ong xây tổ.' }
    ],
    essays: [
      { question: 'Cây mọc về phía có ánh sáng gọi là hiện tượng gì?', answer: 'hướng sáng', acceptedAnswers: ['hướng sáng', 'huong sang', 'tính hướng sáng'], hint: 'Hướng + tên loại kích thích', solution: 'Hiện tượng cây mọc về phía ánh sáng gọi là tính hướng sáng (hướng sáng dương).', difficulty: 1 },
      { question: 'Phản ứng rụt tay khi chạm vật nóng là loại phản xạ gì?', answer: 'không điều kiện', acceptedAnswers: ['không điều kiện', 'khong dieu kien', 'phản xạ không điều kiện'], hint: 'Đây là phản xạ bẩm sinh, không cần học', solution: 'Rụt tay khi chạm vật nóng là phản xạ không điều kiện - bẩm sinh, tự nhiên có.', difficulty: 1 },
      { question: 'Cụp lá khi chạm vào cây trinh nữ là hiện tượng gì?', answer: 'ứng động', acceptedAnswers: ['ứng động', 'ung dong', 'cảm ứng'], hint: 'Đây là phản ứng không theo hướng kích thích', solution: 'Cụp lá trinh nữ là hiện tượng ứng động - phản ứng không phụ thuộc hướng kích thích.', difficulty: 2 },
      { question: 'Nhện giăng tơ là tập tính bẩm sinh hay học được?', answer: 'bẩm sinh', acceptedAnswers: ['bẩm sinh', 'bam sinh', 'tập tính bẩm sinh'], hint: 'Nhện tự biết giăng tơ mà không cần ai dạy', solution: 'Nhện giăng tơ là tập tính bẩm sinh (bản năng), được di truyền, có từ khi sinh ra.', difficulty: 1 }
    ],
    quizzes: [
      { question: 'Cảm ứng là gì?', options: ['Quá trình sinh sản', 'Phản ứng lại kích thích từ môi trường', 'Quá trình trao đổi chất', 'Sự sinh trưởng của cơ thể'], correct: 1, explanation: 'Cảm ứng là khả năng tiếp nhận và phản ứng lại các kích thích từ môi trường.' },
      { question: 'Hiện tượng rễ cây mọc hướng xuống đất là:', options: ['Hướng sáng', 'Hướng nước', 'Hướng trọng lực', 'Ứng động'], correct: 2, explanation: 'Rễ cây mọc hướng xuống do ảnh hưởng của trọng lực (hướng trọng lực dương).' },
      { question: 'Động vật phản ứng nhanh với kích thích nhờ:', options: ['Thành tế bào', 'Hệ thần kinh', 'Lục lạp', 'Không bào'], correct: 1, explanation: 'Động vật có hệ thần kinh giúp tiếp nhận và phản ứng nhanh với kích thích.' },
      { question: 'Phản xạ nào sau đây là phản xạ có điều kiện?', options: ['Rụt tay khi nóng', 'Chảy nước bọt khi ăn', 'Dừng xe khi đèn đỏ', 'Ho khi bị sặc'], correct: 2, explanation: 'Dừng xe khi đèn đỏ là phản xạ có điều kiện - phải học mới biết, không phải bẩm sinh.' },
      { question: 'Cụp lá trinh nữ thuộc loại cảm ứng nào?', options: ['Hướng sáng', 'Hướng nước', 'Ứng động', 'Phản xạ'], correct: 2, explanation: 'Cụp lá trinh nữ là ứng động - phản ứng của thực vật không phụ thuộc hướng kích thích.' },
      { question: 'Tập tính nào là tập tính bẩm sinh?', options: ['Chó bắt tay', 'Nhện giăng tơ', 'Cá heo làm xiếc', 'Vẹt nói tiếng người'], correct: 1, explanation: 'Nhện giăng tơ là bản năng, có từ khi sinh ra, được di truyền.' },
      { question: 'Cây non mọc trong hộp kín có lỗ sáng sẽ:', options: ['Mọc thẳng đứng', 'Mọc hướng về phía lỗ sáng', 'Ngừng sinh trưởng', 'Mọc ngược lại'], correct: 1, explanation: 'Do tính hướng sáng, thân cây sẽ mọc cong hướng về phía có ánh sáng (lỗ sáng).' },
      { question: 'Hệ thần kinh ở động vật có vai trò gì trong cảm ứng?', options: ['Quang hợp', 'Tiếp nhận, xử lý kích thích và điều khiển phản ứng', 'Hô hấp', 'Tiêu hóa thức ăn'], correct: 1, explanation: 'Hệ thần kinh tiếp nhận kích thích, xử lý thông tin và điều khiển cơ quan trả lời.' },
      { question: 'Ví dụ nào thể hiện cảm ứng ở sinh vật?', options: ['Cây ra hoa', 'Cây hướng về ánh sáng', 'Cây hấp thụ nước', 'Cây quang hợp'], correct: 1, explanation: 'Cây hướng về ánh sáng là biểu hiện cảm ứng (tính hướng sáng) đối với kích thích ánh sáng.' }
    ]
  },
  {
    id: 105,
    name: 'Tốc độ',
    icon: '⚡',
    category: 'vat-ly',
    categoryName: 'Vật lý',
    description: 'Khái niệm tốc độ, đo tốc độ và chuyển đổi đơn vị',
    theory: [
      { title: 'Khái niệm tốc độ', content: 'Tốc độ cho biết mức độ nhanh hay chậm của chuyển động. Công thức: v = s/t, trong đó v là tốc độ, s là quãng đường, t là thời gian.' },
      { title: 'Đơn vị tốc độ', content: 'Đơn vị tốc độ phổ biến: m/s (mét trên giây) và km/h (kilômét trên giờ). Đổi: 1 m/s = 3,6 km/h hay 1 km/h = 1/3,6 m/s.' },
      { title: 'Tốc độ trung bình', content: 'Tốc độ trung bình trên cả quãng đường: v_tb = s_tổng / t_tổng. Chú ý: v_tb ≠ trung bình cộng các tốc độ.' },
      { title: 'Đo tốc độ', content: 'Dụng cụ đo tốc độ: đồng hồ bấm giây + thước đo, tốc kế (speedometer), súng bắn tốc độ. Cần đo quãng đường s và thời gian t rồi tính v = s/t.' }
    ],
    exercises: [
      { question: 'Một ô tô đi được 120 km trong 2 giờ. Tính tốc độ trung bình.', solution: 'v = s/t = 120/2 = 60 km/h.' },
      { question: 'Đổi 72 km/h ra m/s.', solution: '72 km/h = 72/3,6 = 20 m/s.' },
      { question: 'Một người đi bộ với tốc độ 5 km/h trong 30 phút. Tính quãng đường.', solution: '30 phút = 0,5 giờ. s = v × t = 5 × 0,5 = 2,5 km.' },
      { question: 'Đổi 15 m/s ra km/h.', solution: '15 m/s = 15 × 3,6 = 54 km/h.' },
      { question: 'Xe đạp đi nửa quãng đường đầu với tốc độ 12 km/h, nửa sau với tốc độ 8 km/h. Tính tốc độ trung bình cả quãng đường.', solution: 'Gọi nửa quãng đường là s. t₁ = s/12, t₂ = s/8. v_tb = 2s/(s/12 + s/8) = 2s/(2s+3s)/24 = 2s × 24/(5s) = 48/5 = 9,6 km/h.' }
    ],
    essays: [
      { question: 'Một xe đi 150 km trong 3 giờ. Tốc độ trung bình là bao nhiêu km/h?', answer: '50', acceptedAnswers: ['50', '50 km/h'], hint: 'v = s/t = 150/3', solution: 'v = s/t = 150/3 = 50 km/h.', difficulty: 1 },
      { question: 'Đổi 36 km/h ra m/s.', answer: '10', acceptedAnswers: ['10', '10 m/s'], hint: 'Chia cho 3,6', solution: '36 km/h = 36/3,6 = 10 m/s.', difficulty: 1 },
      { question: 'Đổi 25 m/s ra km/h.', answer: '90', acceptedAnswers: ['90', '90 km/h'], hint: 'Nhân với 3,6', solution: '25 m/s = 25 × 3,6 = 90 km/h.', difficulty: 1 },
      { question: 'Một người chạy với tốc độ 8 m/s trong 5 giây. Quãng đường là bao nhiêu mét?', answer: '40', acceptedAnswers: ['40', '40 m', '40m'], hint: 's = v × t', solution: 's = v × t = 8 × 5 = 40 m.', difficulty: 2 },
      { question: 'Ánh sáng có tốc độ 300000 km/s. Ánh sáng đi từ Mặt Trời đến Trái Đất (150 triệu km) mất bao nhiêu giây?', answer: '500', acceptedAnswers: ['500', '500 giây', '500s'], hint: 't = s/v = 150000000/300000', solution: 't = s/v = 150.000.000/300.000 = 500 giây ≈ 8 phút 20 giây.', difficulty: 3 }
    ],
    quizzes: [
      { question: 'Công thức tính tốc độ là:', options: ['v = s × t', 'v = s/t', 'v = t/s', 'v = s + t'], correct: 1, explanation: 'Tốc độ = quãng đường / thời gian, hay v = s/t.' },
      { question: '1 m/s bằng bao nhiêu km/h?', options: ['1', '3,6', '10', '0,36'], correct: 1, explanation: '1 m/s = 3,6 km/h (nhân với 3,6 để đổi từ m/s sang km/h).' },
      { question: 'Xe A đi 100 km trong 2h, xe B đi 150 km trong 3h. Xe nào nhanh hơn?', options: ['Xe A', 'Xe B', 'Bằng nhau', 'Không so sánh được'], correct: 2, explanation: 'v_A = 100/2 = 50 km/h, v_B = 150/3 = 50 km/h. Hai xe có tốc độ bằng nhau.' },
      { question: '72 km/h đổi ra m/s bằng:', options: ['72 m/s', '20 m/s', '7,2 m/s', '200 m/s'], correct: 1, explanation: '72 km/h = 72/3,6 = 20 m/s.' },
      { question: 'Tốc độ trung bình được tính bằng:', options: ['Trung bình cộng các tốc độ', 'Tổng quãng đường / tổng thời gian', 'Quãng đường lớn nhất / thời gian nhỏ nhất', 'Tốc độ đầu + tốc độ cuối'], correct: 1, explanation: 'Tốc độ trung bình = tổng quãng đường đi được / tổng thời gian đi.' },
      { question: 'Dụng cụ đo tốc độ trên xe ô tô gọi là gì?', options: ['Nhiệt kế', 'Tốc kế', 'Đồng hồ bấm giây', 'Thước dây'], correct: 1, explanation: 'Tốc kế (speedometer) là dụng cụ đo tốc độ lắp trên xe.' },
      { question: 'Đi bộ 4 km trong 1 giờ, tốc độ là bao nhiêu m/s?', options: ['4 m/s', '1,11 m/s', '0,4 m/s', '40 m/s'], correct: 1, explanation: '4 km/h = 4/3,6 ≈ 1,11 m/s.' },
      { question: 'Ánh sáng có tốc độ khoảng bao nhiêu km/s?', options: ['3000', '30000', '300000', '3000000'], correct: 2, explanation: 'Tốc độ ánh sáng trong chân không khoảng 300.000 km/s.' },
      { question: 'Một vật đi 60m trong 12 giây. Tốc độ là bao nhiêu m/s?', options: ['5', '72', '0,2', '720'], correct: 0, explanation: 'v = s/t = 60/12 = 5 m/s.' },
      { question: 'Người đi xe đạp với tốc độ 15 km/h đi trong 2 giờ. Quãng đường là:', options: ['7,5 km', '30 km', '15 km', '17 km'], correct: 1, explanation: 's = v × t = 15 × 2 = 30 km.' }
    ]
  },
  {
    id: 106,
    name: 'Âm thanh',
    icon: '🔊',
    category: 'vat-ly',
    categoryName: 'Vật lý',
    description: 'Nguồn âm, đặc trưng của âm thanh, sự truyền âm',
    theory: [
      { title: 'Nguồn âm', content: 'Âm thanh được tạo ra bởi sự dao động (rung động) của vật. Vật dao động phát ra âm thanh gọi là nguồn âm. Ví dụ: dây đàn rung, mặt trống rung.' },
      { title: 'Độ cao của âm', content: 'Độ cao phụ thuộc tần số dao động. Tần số càng lớn → âm càng cao (bổng). Tần số càng nhỏ → âm càng thấp (trầm). Đơn vị tần số: Hz.' },
      { title: 'Độ to của âm', content: 'Độ to phụ thuộc biên độ dao động. Biên độ càng lớn → âm càng to. Đơn vị đo độ to: decibel (dB). Ngưỡng đau: 130 dB.' },
      { title: 'Môi trường truyền âm', content: 'Âm truyền được qua chất rắn, lỏng, khí. Âm KHÔNG truyền được trong chân không. Tốc độ truyền âm: rắn > lỏng > khí.' }
    ],
    exercises: [
      { question: 'Tại sao trên Mặt Trăng, các nhà du hành phải dùng bộ đàm để nói chuyện?', solution: 'Vì Mặt Trăng không có khí quyển (gần như chân không), âm thanh không truyền được trong chân không. Nên phải dùng sóng điện từ (bộ đàm) để giao tiếp.' },
      { question: 'So sánh tốc độ truyền âm trong không khí, nước và thép.', solution: 'Tốc độ truyền âm: thép (~5000 m/s) > nước (~1500 m/s) > không khí (~340 m/s). Trong chất rắn âm truyền nhanh nhất, chất khí chậm nhất.' },
      { question: 'Giải thích tại sao tiếng muỗi vo ve nghe cao hơn tiếng bò rống.', solution: 'Cánh muỗi dao động với tần số cao (khoảng 500 Hz), bò rống có tần số thấp (khoảng 100-200 Hz). Tần số càng cao thì âm càng cao (bổng).' },
      { question: 'Ô nhiễm tiếng ồn là gì? Nêu biện pháp chống ô nhiễm tiếng ồn.', solution: 'Ô nhiễm tiếng ồn là tiếng ồn to, kéo dài gây hại sức khỏe. Biện pháp: trồng cây xanh, xây tường cách âm, dùng nút tai, hạn chế nguồn ồn.' },
      { question: 'Con người nghe được âm có tần số trong khoảng nào?', solution: 'Con người nghe được âm có tần số từ 20 Hz đến 20.000 Hz. Dưới 20 Hz là hạ âm (infrasound), trên 20.000 Hz là siêu âm (ultrasound).' }
    ],
    essays: [
      { question: 'Âm thanh không truyền được trong môi trường nào?', answer: 'chân không', acceptedAnswers: ['chân không', 'chan khong', 'trong chân không'], hint: 'Môi trường không có vật chất', solution: 'Âm thanh không truyền được trong chân không vì không có các phần tử vật chất để dao động truyền sóng.', difficulty: 1 },
      { question: 'Đơn vị đo độ to của âm thanh là gì?', answer: 'decibel', acceptedAnswers: ['decibel', 'dB', 'db', 'đề-xi-ben'], hint: 'Viết tắt là dB', solution: 'Đơn vị đo độ to (cường độ) âm thanh là decibel, kí hiệu dB.', difficulty: 1 },
      { question: 'Tốc độ truyền âm trong môi trường nào nhanh nhất: rắn, lỏng hay khí?', answer: 'rắn', acceptedAnswers: ['rắn', 'ran', 'chất rắn', 'chat ran'], hint: 'Các phần tử trong môi trường này xếp sít nhau nhất', solution: 'Âm truyền nhanh nhất trong chất rắn vì các phần tử xếp sít nhau, truyền dao động hiệu quả nhất.', difficulty: 1 },
      { question: 'Đơn vị đo tần số là gì?', answer: 'Hz', acceptedAnswers: ['Hz', 'hz', 'hertz', 'Hertz', 'héc'], hint: 'Mang tên nhà vật lý người Đức', solution: 'Đơn vị đo tần số là Hertz (Hz), 1 Hz = 1 dao động/giây.', difficulty: 1 }
    ],
    quizzes: [
      { question: 'Âm thanh được tạo ra do:', options: ['Sự nóng lên của vật', 'Sự dao động của vật', 'Sự đứng yên của vật', 'Sự phản xạ ánh sáng'], correct: 1, explanation: 'Âm thanh được tạo ra do sự dao động (rung động) của vật.' },
      { question: 'Âm thanh KHÔNG truyền được trong:', options: ['Nước', 'Không khí', 'Thép', 'Chân không'], correct: 3, explanation: 'Âm thanh không truyền được trong chân không vì không có phần tử vật chất.' },
      { question: 'Tần số dao động càng lớn thì âm:', options: ['Càng to', 'Càng nhỏ', 'Càng cao (bổng)', 'Càng thấp (trầm)'], correct: 2, explanation: 'Tần số càng lớn → âm càng cao (bổng). Tần số liên quan đến độ cao của âm.' },
      { question: 'Biên độ dao động càng lớn thì âm:', options: ['Càng cao', 'Càng thấp', 'Càng to', 'Càng nhỏ'], correct: 2, explanation: 'Biên độ dao động càng lớn → âm càng to. Biên độ liên quan đến độ to của âm.' },
      { question: 'Tốc độ truyền âm trong không khí khoảng bao nhiêu m/s?', options: ['34', '340', '3400', '34000'], correct: 1, explanation: 'Tốc độ truyền âm trong không khí ở 20°C khoảng 340 m/s.' },
      { question: 'Con người nghe được âm có tần số từ:', options: ['0 Hz - 100 Hz', '20 Hz - 20.000 Hz', '100 Hz - 100.000 Hz', '1 Hz - 1.000.000 Hz'], correct: 1, explanation: 'Tai người nghe được âm có tần số từ 20 Hz đến 20.000 Hz.' },
      { question: 'Âm truyền nhanh nhất trong môi trường nào?', options: ['Khí', 'Lỏng', 'Rắn', 'Chân không'], correct: 2, explanation: 'Âm truyền nhanh nhất trong chất rắn, chậm nhất trong chất khí.' },
      { question: 'Tiếng sét đến sau tia chớp vì:', options: ['Sét phát ra sau chớp', 'Âm truyền chậm hơn ánh sáng', 'Ánh sáng phát ra sau âm', 'Mắt nhạy hơn tai'], correct: 1, explanation: 'Tốc độ ánh sáng (300.000 km/s) lớn hơn nhiều so với tốc độ âm (340 m/s) nên ta thấy chớp trước, nghe sét sau.' },
      { question: 'Ngưỡng đau của tai người khoảng bao nhiêu dB?', options: ['50 dB', '80 dB', '100 dB', '130 dB'], correct: 3, explanation: 'Ngưỡng đau của tai người khoảng 130 dB. Tiếp xúc lâu với âm trên 85 dB có thể gây hại thính giác.' }
    ]
  },
  {
    id: 107,
    name: 'Ánh sáng',
    icon: '💡',
    category: 'vat-ly',
    categoryName: 'Vật lý',
    description: 'Sự truyền ánh sáng, phản xạ, khúc xạ và ánh sáng màu',
    theory: [
      { title: 'Sự truyền thẳng ánh sáng', content: 'Trong môi trường trong suốt và đồng tính, ánh sáng truyền theo đường thẳng. Đây là cơ sở giải thích bóng tối, nhật thực, nguyệt thực.' },
      { title: 'Phản xạ ánh sáng', content: 'Khi gặp bề mặt phản xạ, ánh sáng bị hắt lại. Định luật phản xạ: góc phản xạ bằng góc tới (i\' = i), tia phản xạ nằm trong mặt phẳng tới.' },
      { title: 'Ảnh qua gương phẳng', content: 'Gương phẳng tạo ảnh ảo, có kích thước bằng vật, đối xứng với vật qua mặt gương. Khoảng cách từ ảnh đến gương bằng khoảng cách từ vật đến gương.' },
      { title: 'Ánh sáng trắng và ánh sáng màu', content: 'Ánh sáng trắng (Mặt Trời) là hỗn hợp nhiều ánh sáng màu. Qua lăng kính, ánh sáng trắng bị tách thành dải màu: đỏ, cam, vàng, lục, lam, chàm, tím.' }
    ],
    exercises: [
      { question: 'Phát biểu định luật phản xạ ánh sáng.', solution: 'Tia phản xạ nằm trong mặt phẳng tới. Góc phản xạ bằng góc tới: i\' = i. (Góc tới và góc phản xạ đo từ pháp tuyến).' },
      { question: 'Tia sáng chiếu tới gương phẳng với góc tới 30°. Góc phản xạ bằng bao nhiêu?', solution: 'Theo định luật phản xạ: góc phản xạ = góc tới = 30°.' },
      { question: 'Nêu đặc điểm ảnh tạo bởi gương phẳng.', solution: 'Ảnh qua gương phẳng là ảnh ảo, cùng kích thước với vật, đối xứng vật qua mặt gương, khoảng cách ảnh-gương = khoảng cách vật-gương.' },
      { question: 'Giải thích hiện tượng nhật thực.', solution: 'Khi Mặt Trăng nằm giữa Mặt Trời và Trái Đất, ánh sáng Mặt Trời bị Mặt Trăng che khuất (do ánh sáng truyền thẳng), tạo vùng bóng tối trên Trái Đất → nhật thực.' },
      { question: 'Ánh sáng trắng qua lăng kính cho hiện tượng gì?', solution: 'Ánh sáng trắng qua lăng kính bị tán sắc (phân tách) thành dải nhiều màu: đỏ, cam, vàng, lục, lam, chàm, tím. Hiện tượng này gọi là sự tán sắc ánh sáng.' }
    ],
    essays: [
      { question: 'Góc phản xạ bằng bao nhiêu khi góc tới bằng 45°?', answer: '45', acceptedAnswers: ['45', '45°', '45 độ'], hint: 'Theo định luật phản xạ: góc phản xạ = ?', solution: 'Theo định luật phản xạ: góc phản xạ = góc tới = 45°.', difficulty: 1 },
      { question: 'Ảnh tạo bởi gương phẳng là ảnh thật hay ảnh ảo?', answer: 'ảnh ảo', acceptedAnswers: ['ảnh ảo', 'anh ao', 'ảo'], hint: 'Ảnh này không hứng được trên màn', solution: 'Gương phẳng tạo ảnh ảo - không hứng được trên màn, nhìn thấy trong gương.', difficulty: 1 },
      { question: 'Ánh sáng trắng qua lăng kính bị tách thành nhiều màu, hiện tượng này gọi là gì?', answer: 'tán sắc', acceptedAnswers: ['tán sắc', 'tan sac', 'tán sắc ánh sáng', 'sự tán sắc'], hint: 'Newton là người đầu tiên phát hiện hiện tượng này', solution: 'Hiện tượng ánh sáng trắng bị tách thành nhiều ánh sáng màu khi qua lăng kính gọi là sự tán sắc ánh sáng.', difficulty: 2 },
      { question: 'Trong môi trường trong suốt đồng tính, ánh sáng truyền theo đường gì?', answer: 'đường thẳng', acceptedAnswers: ['đường thẳng', 'duong thang', 'thẳng'], hint: 'Đây là định luật truyền thẳng ánh sáng', solution: 'Trong môi trường trong suốt và đồng tính, ánh sáng truyền theo đường thẳng.', difficulty: 1 }
    ],
    quizzes: [
      { question: 'Trong môi trường trong suốt đồng tính, ánh sáng truyền theo:', options: ['Đường cong', 'Đường thẳng', 'Đường gấp khúc', 'Mọi hướng'], correct: 1, explanation: 'Ánh sáng truyền thẳng trong môi trường trong suốt và đồng tính.' },
      { question: 'Theo định luật phản xạ, góc phản xạ:', options: ['Lớn hơn góc tới', 'Nhỏ hơn góc tới', 'Bằng góc tới', 'Bằng 90°'], correct: 2, explanation: 'Định luật phản xạ: góc phản xạ luôn bằng góc tới (i\' = i).' },
      { question: 'Ảnh tạo bởi gương phẳng có đặc điểm gì?', options: ['Ảnh thật, lớn hơn vật', 'Ảnh ảo, bằng vật', 'Ảnh thật, nhỏ hơn vật', 'Ảnh ảo, lớn hơn vật'], correct: 1, explanation: 'Gương phẳng tạo ảnh ảo, cùng kích thước với vật, đối xứng qua gương.' },
      { question: 'Hiện tượng tán sắc ánh sáng là:', options: ['Ánh sáng bị hấp thụ', 'Ánh sáng trắng tách thành nhiều màu', 'Ánh sáng bị phản xạ', 'Ánh sáng truyền thẳng'], correct: 1, explanation: 'Tán sắc là hiện tượng ánh sáng trắng bị tách thành dải nhiều ánh sáng màu khi qua lăng kính.' },
      { question: 'Nhật thực xảy ra khi:', options: ['Trái Đất ở giữa Mặt Trời và Mặt Trăng', 'Mặt Trăng ở giữa Mặt Trời và Trái Đất', 'Mặt Trời ở giữa Trái Đất và Mặt Trăng', 'Ba thiên thể thẳng hàng bất kỳ'], correct: 1, explanation: 'Nhật thực xảy ra khi Mặt Trăng nằm giữa Mặt Trời và Trái Đất, che khuất ánh sáng Mặt Trời.' },
      { question: 'Tốc độ ánh sáng trong chân không khoảng:', options: ['340 m/s', '3.000 km/s', '300.000 km/s', '3.000.000 km/s'], correct: 2, explanation: 'Tốc độ ánh sáng trong chân không khoảng 300.000 km/s (3 × 10⁸ m/s).' },
      { question: 'Vật nào sau đây là nguồn sáng?', options: ['Mặt Trăng', 'Gương phẳng', 'Ngọn nến đang cháy', 'Tờ giấy trắng'], correct: 2, explanation: 'Ngọn nến đang cháy tự phát ra ánh sáng nên là nguồn sáng. Mặt Trăng chỉ phản xạ ánh sáng Mặt Trời.' },
      { question: 'Ánh sáng trắng gồm bao nhiêu màu cơ bản khi tán sắc?', options: ['3', '5', '7', '9'], correct: 2, explanation: 'Ánh sáng trắng tán sắc thành 7 màu: đỏ, cam, vàng, lục, lam, chàm, tím.' },
      { question: 'Tia tới vuông góc với gương phẳng, góc phản xạ bằng:', options: ['0°', '45°', '90°', '180°'], correct: 0, explanation: 'Khi tia tới vuông góc với gương (song song pháp tuyến), góc tới = 0°, nên góc phản xạ = 0°. Tia phản xạ ngược chiều tia tới.' }
    ]
  },
  {
    id: 108,
    name: 'Từ trường',
    icon: '🧲',
    category: 'vat-ly',
    categoryName: 'Vật lý',
    description: 'Nam châm, từ trường, la bàn và ứng dụng',
    theory: [
      { title: 'Nam châm', content: 'Nam châm có hai cực: cực Bắc (N) và cực Nam (S). Hai cực cùng tên đẩy nhau, hai cực khác tên hút nhau. Nam châm hút được sắt, thép, niken, coban.' },
      { title: 'Từ trường', content: 'Xung quanh nam châm và dòng điện tồn tại từ trường. Từ trường tác dụng lực từ lên nam châm hoặc vật từ đặt trong nó. Biểu diễn bằng đường sức từ.' },
      { title: 'La bàn', content: 'La bàn là dụng cụ xác định phương hướng, gồm kim nam châm quay tự do. Kim luôn chỉ hướng Bắc - Nam do Trái Đất là một nam châm khổng lồ.' },
      { title: 'Từ trường của dòng điện', content: 'Dòng điện chạy trong dây dẫn tạo ra từ trường xung quanh. Cuộn dây có dòng điện chạy qua trở thành nam châm điện, có thể điều khiển được.' }
    ],
    exercises: [
      { question: 'Nêu tính chất của nam châm.', solution: 'Nam châm có 2 cực (Bắc N và Nam S). Cùng cực đẩy nhau, khác cực hút nhau. Nam châm hút được sắt, thép, niken, coban. Nam châm tự do luôn chỉ Bắc - Nam.' },
      { question: 'Tại sao la bàn có thể xác định phương hướng?', solution: 'Kim la bàn là một nam châm nhỏ quay tự do. Do Trái Đất có từ trường (là nam châm khổng lồ), kim la bàn luôn bị từ trường Trái Đất tác dụng lực, chỉ hướng Bắc - Nam.' },
      { question: 'So sánh nam châm vĩnh cửu và nam châm điện.', solution: 'Nam châm vĩnh cửu: từ tính ổn định, không điều khiển được. Nam châm điện: từ tính có khi dòng điện chạy, mất khi ngắt điện, điều khiển được (tăng/giảm cường độ).' },
      { question: 'Nêu 3 ứng dụng của nam châm trong đời sống.', solution: 'La bàn (xác định hướng), loa điện (biến điện thành âm thanh), nam châm điện trong cần cẩu, motor điện, ổ cứng máy tính.' },
      { question: 'Đường sức từ là gì? Đặc điểm của đường sức từ.', solution: 'Đường sức từ là đường cong khép kín biểu diễn từ trường. Đặc điểm: đi ra cực Bắc, đi vào cực Nam, không cắt nhau, nơi từ trường mạnh đường sức dày.' }
    ],
    essays: [
      { question: 'Nam châm có mấy cực?', answer: '2', acceptedAnswers: ['2', 'hai', '2 cực'], hint: 'Cực Bắc và cực Nam', solution: 'Nam châm có 2 cực: cực Bắc (N) và cực Nam (S).', difficulty: 1 },
      { question: 'Hai cực cùng tên của nam châm sẽ hút nhau hay đẩy nhau?', answer: 'đẩy nhau', acceptedAnswers: ['đẩy nhau', 'day nhau', 'đẩy'], hint: 'Giống nhau thì...', solution: 'Hai cực cùng tên (N-N hoặc S-S) đẩy nhau. Hai cực khác tên (N-S) hút nhau.', difficulty: 1 },
      { question: 'Dụng cụ dùng kim nam châm để xác định phương hướng gọi là gì?', answer: 'la bàn', acceptedAnswers: ['la bàn', 'la ban'], hint: 'Các thủy thủ hay dùng dụng cụ này', solution: 'La bàn là dụng cụ xác định phương hướng nhờ kim nam châm luôn chỉ hướng Bắc - Nam.', difficulty: 1 },
      { question: 'Xung quanh nam châm tồn tại cái gì?', answer: 'từ trường', acceptedAnswers: ['từ trường', 'tu truong'], hint: 'Đây là "trường" do nam châm tạo ra', solution: 'Xung quanh nam châm tồn tại từ trường, có thể tác dụng lực từ lên các vật từ.', difficulty: 1 }
    ],
    quizzes: [
      { question: 'Nam châm có mấy cực?', options: ['1', '2', '3', '4'], correct: 1, explanation: 'Nam châm luôn có 2 cực: cực Bắc (N) và cực Nam (S).' },
      { question: 'Hai cực khác tên của nam châm sẽ:', options: ['Đẩy nhau', 'Hút nhau', 'Không tương tác', 'Quay cùng chiều'], correct: 1, explanation: 'Hai cực khác tên (N-S) hút nhau, hai cực cùng tên đẩy nhau.' },
      { question: 'Nam châm hút được vật liệu nào?', options: ['Gỗ', 'Nhựa', 'Sắt', 'Thủy tinh'], correct: 2, explanation: 'Nam châm hút được sắt, thép, niken, coban (các vật liệu từ).' },
      { question: 'La bàn hoạt động dựa trên nguyên tắc nào?', options: ['Ánh sáng Mặt Trời', 'Từ trường Trái Đất', 'Trọng lực', 'Áp suất không khí'], correct: 1, explanation: 'Kim la bàn là nam châm, bị từ trường Trái Đất tác dụng nên luôn chỉ hướng Bắc - Nam.' },
      { question: 'Từ trường tồn tại ở đâu?', options: ['Chỉ trong nam châm', 'Xung quanh nam châm và dòng điện', 'Chỉ trong dây điện', 'Ở mọi nơi đều giống nhau'], correct: 1, explanation: 'Từ trường tồn tại xung quanh nam châm và xung quanh dây dẫn có dòng điện chạy qua.' },
      { question: 'Nam châm điện khác nam châm vĩnh cửu ở chỗ:', options: ['Không có cực', 'Có thể điều khiển từ tính', 'Không hút được sắt', 'Chỉ có 1 cực'], correct: 1, explanation: 'Nam châm điện có từ tính khi có dòng điện, mất từ tính khi ngắt điện → có thể điều khiển.' },
      { question: 'Đường sức từ đi ra từ cực nào của nam châm?', options: ['Cực Nam', 'Cực Bắc', 'Cả hai cực', 'Không có đường sức'], correct: 1, explanation: 'Đường sức từ đi ra từ cực Bắc (N) và đi vào cực Nam (S) của nam châm.' },
      { question: 'Vật nào sau đây KHÔNG bị nam châm hút?', options: ['Đinh sắt', 'Thanh thép', 'Thanh nhôm', 'Đồng xu niken'], correct: 2, explanation: 'Nhôm không phải vật liệu từ, không bị nam châm hút. Sắt, thép, niken bị nam châm hút.' },
      { question: 'Trái Đất có từ trường vì:', options: ['Có khí quyển', 'Có lõi sắt nóng chảy quay', 'Có nước biển', 'Gần Mặt Trời'], correct: 1, explanation: 'Trái Đất có lõi ngoài bằng sắt-niken nóng chảy chuyển động tạo ra từ trường.' }
    ]
  },
  {
    id: 109,
    name: 'Nguyên tử và Nguyên tố hóa học',
    icon: '⚛️',
    category: 'hoa-hoc',
    categoryName: 'Hóa học',
    description: 'Cấu tạo nguyên tử, nguyên tố hóa học và bảng tuần hoàn',
    theory: [
      { title: 'Cấu tạo nguyên tử', content: 'Nguyên tử gồm hạt nhân (proton mang điện +, neutron không mang điện) và lớp vỏ electron mang điện −. Số proton = số electron → nguyên tử trung hòa điện.' },
      { title: 'Nguyên tố hóa học', content: 'Nguyên tố hóa học là tập hợp các nguyên tử cùng loại, có cùng số proton trong hạt nhân. Mỗi nguyên tố có tên, kí hiệu hóa học và số hiệu nguyên tử riêng.' },
      { title: 'Kí hiệu hóa học', content: 'Mỗi nguyên tố được biểu diễn bằng 1 hoặc 2 chữ cái, chữ đầu viết hoa. Ví dụ: H (Hydrogen), O (Oxygen), Na (Natri), Fe (Sắt), Ca (Canxi).' },
      { title: 'Bảng tuần hoàn', content: 'Bảng tuần hoàn sắp xếp các nguyên tố theo số hiệu nguyên tử tăng dần. Ô = nguyên tố, hàng ngang = chu kỳ, cột dọc = nhóm. Nguyên tố cùng nhóm có tính chất hóa học tương tự.' }
    ],
    exercises: [
      { question: 'Nguyên tử Oxygen có 8 proton. Hỏi có bao nhiêu electron?', solution: 'Nguyên tử trung hòa điện nên số electron = số proton = 8 electron.' },
      { question: 'Cho biết kí hiệu hóa học của các nguyên tố: Sắt, Vàng, Bạc, Đồng.', solution: 'Sắt: Fe (Ferrum), Vàng: Au (Aurum), Bạc: Ag (Argentum), Đồng: Cu (Cuprum).' },
      { question: 'Phân biệt proton, neutron và electron.', solution: 'Proton: trong hạt nhân, điện tích +1, khối lượng ≈ 1 đvC. Neutron: trong hạt nhân, không mang điện, khối lượng ≈ 1 đvC. Electron: lớp vỏ, điện tích −1, khối lượng rất nhỏ.' },
      { question: 'Nguyên tử Na có 11 proton, 12 neutron. Tính số electron và số khối.', solution: 'Số electron = số proton = 11. Số khối A = proton + neutron = 11 + 12 = 23.' },
      { question: 'Tại sao nguyên tử trung hòa về điện?', solution: 'Vì số proton (điện tích +) bằng số electron (điện tích −), tổng điện tích dương và âm triệt tiêu nhau nên nguyên tử trung hòa điện.' }
    ],
    essays: [
      { question: 'Hạt mang điện tích dương trong hạt nhân nguyên tử là gì?', answer: 'proton', acceptedAnswers: ['proton', 'prôton', 'hạt proton'], hint: 'Bắt đầu bằng chữ P', solution: 'Proton là hạt mang điện tích dương (+) nằm trong hạt nhân nguyên tử.', difficulty: 1 },
      { question: 'Kí hiệu hóa học của nguyên tố Sắt là gì?', answer: 'Fe', acceptedAnswers: ['Fe', 'fe'], hint: 'Tên Latin của sắt là Ferrum', solution: 'Kí hiệu hóa học của Sắt là Fe (từ tiếng Latin: Ferrum).', difficulty: 1 },
      { question: 'Nguyên tử Carbon có 6 proton. Số electron là bao nhiêu?', answer: '6', acceptedAnswers: ['6', 'sáu'], hint: 'Nguyên tử trung hòa điện: số proton = số electron', solution: 'Nguyên tử trung hòa điện nên số electron = số proton = 6.', difficulty: 1 },
      { question: 'Kí hiệu hóa học của nguyên tố Natri là gì?', answer: 'Na', acceptedAnswers: ['Na', 'na'], hint: 'Tên Latin: Natrium, lấy 2 chữ cái đầu', solution: 'Kí hiệu hóa học của Natri là Na (từ Natrium).', difficulty: 1 },
      { question: 'Nguyên tử có 8 proton và 8 neutron. Số khối A là bao nhiêu?', answer: '16', acceptedAnswers: ['16'], hint: 'A = số proton + số neutron', solution: 'Số khối A = số proton + số neutron = 8 + 8 = 16.', difficulty: 2 }
    ],
    quizzes: [
      { question: 'Nguyên tử gồm những thành phần nào?', options: ['Proton và electron', 'Hạt nhân và lớp vỏ electron', 'Chỉ có electron', 'Chỉ có proton và neutron'], correct: 1, explanation: 'Nguyên tử gồm hạt nhân (proton + neutron) ở trung tâm và lớp vỏ electron bao quanh.' },
      { question: 'Hạt nào mang điện tích dương?', options: ['Electron', 'Neutron', 'Proton', 'Không hạt nào'], correct: 2, explanation: 'Proton mang điện tích dương (+), electron mang điện tích âm (−), neutron trung hòa điện.' },
      { question: 'Nguyên tử trung hòa điện vì:', options: ['Không có hạt mang điện', 'Số proton = số electron', 'Số neutron = 0', 'Electron không mang điện'], correct: 1, explanation: 'Số proton (+) = số electron (−) nên tổng điện tích bằng 0 → nguyên tử trung hòa điện.' },
      { question: 'Kí hiệu hóa học của Vàng là:', options: ['V', 'Go', 'Au', 'Ag'], correct: 2, explanation: 'Vàng có kí hiệu Au (từ tiếng Latin: Aurum). Ag là Bạc (Argentum).' },
      { question: 'Nguyên tố hóa học là tập hợp nguyên tử có cùng:', options: ['Số neutron', 'Số electron', 'Số proton', 'Khối lượng'], correct: 2, explanation: 'Nguyên tố hóa học là tập hợp nguyên tử có cùng số proton trong hạt nhân.' },
      { question: 'Trong bảng tuần hoàn, các nguyên tố cùng cột (nhóm) có:', options: ['Cùng số lớp electron', 'Tính chất hóa học tương tự', 'Cùng số neutron', 'Cùng khối lượng'], correct: 1, explanation: 'Các nguyên tố cùng nhóm (cột) có tính chất hóa học tương tự nhau.' },
      { question: 'Kí hiệu hóa học nào sau đây viết ĐÚNG?', options: ['fe', 'FE', 'Fe', 'fE'], correct: 2, explanation: 'Kí hiệu hóa học: chữ đầu viết HOA, chữ sau viết thường. Fe là đúng.' },
      { question: 'Electron nằm ở đâu trong nguyên tử?', options: ['Trong hạt nhân', 'Lớp vỏ bao quanh hạt nhân', 'Trung tâm nguyên tử', 'Bên ngoài nguyên tử'], correct: 1, explanation: 'Electron chuyển động ở lớp vỏ bao quanh hạt nhân nguyên tử.' },
      { question: 'Nguyên tử có 11 proton và 12 neutron. Số khối A là:', options: ['11', '12', '23', '1'], correct: 2, explanation: 'Số khối A = số proton + số neutron = 11 + 12 = 23.' },
      { question: 'Kí hiệu hóa học H là của nguyên tố nào?', options: ['Helium', 'Hydrogen', 'Hafnium', 'Holmium'], correct: 1, explanation: 'H là kí hiệu của Hydrogen (Hiđro). Helium là He.' }
    ]
  },
  {
    id: 110,
    name: 'Phân tử - Đơn chất - Hợp chất',
    icon: '🧪',
    category: 'hoa-hoc',
    categoryName: 'Hóa học',
    description: 'Phân tử, đơn chất, hợp chất và công thức hóa học',
    theory: [
      { title: 'Phân tử', content: 'Phân tử là hạt đại diện cho chất, gồm một nhóm nguyên tử liên kết với nhau. Phân tử thể hiện đầy đủ tính chất hóa học của chất. Ví dụ: H₂, O₂, H₂O, NaCl.' },
      { title: 'Đơn chất', content: 'Đơn chất là chất tạo thành từ một nguyên tố hóa học duy nhất. Có 2 loại: đơn chất kim loại (Fe, Cu, Au...) và đơn chất phi kim (O₂, N₂, C...).' },
      { title: 'Hợp chất', content: 'Hợp chất là chất tạo thành từ hai nguyên tố hóa học trở lên. Ví dụ: H₂O (Hydrogen + Oxygen), NaCl (Natri + Clo), CO₂ (Carbon + Oxygen).' },
      { title: 'Công thức hóa học', content: 'Công thức hóa học biểu diễn thành phần phân tử. Gồm kí hiệu nguyên tố và chỉ số (số nguyên tử). VD: H₂O gồm 2 nguyên tử H và 1 nguyên tử O.' }
    ],
    exercises: [
      { question: 'Phân loại các chất sau thành đơn chất và hợp chất: O₂, H₂O, Fe, NaCl, N₂, CO₂.', solution: 'Đơn chất: O₂ (chỉ có O), Fe (chỉ có Fe), N₂ (chỉ có N). Hợp chất: H₂O (có H và O), NaCl (có Na và Cl), CO₂ (có C và O).' },
      { question: 'Cho biết số nguyên tử mỗi nguyên tố trong phân tử H₂SO₄.', solution: 'H₂SO₄ gồm: 2 nguyên tử H (Hydrogen), 1 nguyên tử S (Lưu huỳnh), 4 nguyên tử O (Oxygen).' },
      { question: 'Phân biệt đơn chất kim loại và đơn chất phi kim.', solution: 'Kim loại: dẫn điện, dẫn nhiệt tốt, có ánh kim, dẻo (Fe, Cu, Au). Phi kim: không dẫn điện, không có ánh kim (O₂, N₂, S, C).' },
      { question: 'Tính phân tử khối của CO₂.', solution: 'Phân tử khối CO₂ = 12 + 16×2 = 12 + 32 = 44 đvC. (C = 12, O = 16).' },
      { question: 'Viết công thức hóa học của: nước, muối ăn, khí cacbonic.', solution: 'Nước: H₂O. Muối ăn: NaCl. Khí cacbonic (carbon dioxide): CO₂.' }
    ],
    essays: [
      { question: 'O₂ là đơn chất hay hợp chất?', answer: 'đơn chất', acceptedAnswers: ['đơn chất', 'don chat'], hint: 'O₂ chỉ chứa một loại nguyên tố', solution: 'O₂ là đơn chất vì chỉ được tạo từ một nguyên tố hóa học là Oxygen.', difficulty: 1 },
      { question: 'H₂O là đơn chất hay hợp chất?', answer: 'hợp chất', acceptedAnswers: ['hợp chất', 'hop chat'], hint: 'H₂O chứa 2 loại nguyên tố: H và O', solution: 'H₂O là hợp chất vì được tạo từ 2 nguyên tố: Hydrogen và Oxygen.', difficulty: 1 },
      { question: 'Phân tử nước H₂O có bao nhiêu nguyên tử tất cả?', answer: '3', acceptedAnswers: ['3', 'ba'], hint: 'Đếm: 2 nguyên tử H + ? nguyên tử O', solution: 'H₂O có 2 nguyên tử H + 1 nguyên tử O = 3 nguyên tử tất cả.', difficulty: 1 },
      { question: 'Tính phân tử khối của H₂O (H = 1, O = 16). Đáp án là số.', answer: '18', acceptedAnswers: ['18', '18 đvC'], hint: 'PTK = 2×1 + 16 = ?', solution: 'Phân tử khối H₂O = 2 × 1 + 16 = 18 đvC.', difficulty: 2 },
      { question: 'Tính phân tử khối của CO₂ (C = 12, O = 16). Đáp án là số.', answer: '44', acceptedAnswers: ['44', '44 đvC'], hint: 'PTK = 12 + 2×16 = ?', solution: 'Phân tử khối CO₂ = 12 + 2 × 16 = 12 + 32 = 44 đvC.', difficulty: 2 }
    ],
    quizzes: [
      { question: 'Đơn chất là chất được tạo nên từ:', options: ['2 nguyên tố', '3 nguyên tố', '1 nguyên tố', 'Nhiều nguyên tố'], correct: 2, explanation: 'Đơn chất là chất được tạo nên từ một nguyên tố hóa học duy nhất.' },
      { question: 'Chất nào sau đây là hợp chất?', options: ['O₂', 'N₂', 'Fe', 'H₂O'], correct: 3, explanation: 'H₂O là hợp chất vì gồm 2 nguyên tố: H và O. Các chất còn lại là đơn chất.' },
      { question: 'Phân tử H₂SO₄ có bao nhiêu nguyên tử tất cả?', options: ['3', '4', '7', '8'], correct: 2, explanation: 'H₂SO₄: 2 nguyên tử H + 1 nguyên tử S + 4 nguyên tử O = 7 nguyên tử.' },
      { question: 'Đơn chất nào sau đây là kim loại?', options: ['O₂', 'N₂', 'Cu', 'C'], correct: 2, explanation: 'Cu (Đồng) là đơn chất kim loại. O₂, N₂, C là đơn chất phi kim.' },
      { question: 'Công thức hóa học của muối ăn là:', options: ['H₂O', 'NaCl', 'CO₂', 'HCl'], correct: 1, explanation: 'Muối ăn có công thức NaCl (Natri clorua), gồm Na và Cl.' },
      { question: 'Phân tử khối của H₂O (H=1, O=16) bằng:', options: ['17', '18', '19', '20'], correct: 1, explanation: 'PTK H₂O = 2×1 + 16 = 18 đvC.' },
      { question: 'NaCl gồm những nguyên tố nào?', options: ['Na và C', 'N và Cl', 'Na và Cl', 'Na, C và L'], correct: 2, explanation: 'NaCl gồm nguyên tố Natri (Na) và Clo (Cl).' },
      { question: 'Chất nào sau đây là đơn chất?', options: ['CO₂', 'H₂O', 'NaCl', 'Fe'], correct: 3, explanation: 'Fe (Sắt) là đơn chất vì chỉ gồm một nguyên tố. Các chất còn lại là hợp chất.' },
      { question: 'Phân tử khối của CO₂ (C=12, O=16) bằng:', options: ['28', '44', '32', '56'], correct: 1, explanation: 'PTK CO₂ = 12 + 2×16 = 12 + 32 = 44 đvC.' },
      { question: 'Trong công thức H₂O, chỉ số 2 có ý nghĩa gì?', options: ['Có 2 phân tử nước', 'Có 2 nguyên tử Oxygen', 'Có 2 nguyên tử Hydrogen', 'Có 2 nguyên tố'], correct: 2, explanation: 'Chỉ số 2 ở H₂ nghĩa là trong 1 phân tử nước có 2 nguyên tử Hydrogen.' }
    ]
  }
]

export default khtn7Topics

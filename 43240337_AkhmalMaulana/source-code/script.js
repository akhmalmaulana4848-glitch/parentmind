/**
 * ParentMind — Pure Vanilla JavaScript
 * Interactive Storybook Sanctuary Engine
 */

// =============================================================================
// 1. DATA REPOSITORY: CHAPTERS & CHARACTERS
// =============================================================================

const CHAPTERS_DATA = [
  {
    id: 'bab-01',
    number: 'Bab 01',
    title: 'Hari yang Tidak Berjalan Sesuai Rencana',
    subtitle: 'Mangkuk Sup & Kerapuhan Pagi',
    category: 'Regulasi Diri',
    duration: '~3 Menit',
    image: 'public/assets/images/father_kneeling_daughter_1790922654933.jpg',
    heroTag: 'Keluarga Arga & Lila di Pintu Keluar',
    sceneTime: 'Pukul 07.15 WIB',
    sceneLocation: 'Lorong Depan Rumah',
    focusTopic: 'Empati Pagi Hari',
    prologueQuote: '“Pagi itu seharusnya berjalan seperti biasa. Tetapi satu permintaan kecil membuat semuanya berubah.”',
    prologueText: 'Jarum jam terus bergulir mendekati bel masuk sekolah. Sepatu sudah terikat rapi, namun sebuah boneka kelinci mungil tergeletak di sudut lorong, menahan langkah seluruh isi rumah dalam ketegangan yang hening.',
    breathingPrompt: 'Tidak ada respon orang tua yang sempurna. Ketika pilihan bab ini muncul nanti, pilihlah dari detak hatimu saat ini, bukan sekadar jawaban teoritis.',
    characters: [
      { name: 'Arga', role: 'Ayah', age: '34 Tahun', color: '#E8D5C4' },
      { name: 'Lila', role: 'Anak Bungsu', age: '5 Tahun', color: '#E2EAD8' },
      { name: 'Naya', role: 'Ibu (Bunda)', age: '32 Tahun', color: '#D5DFCF' },
      { name: 'Raka', role: 'Anak Sulung', age: '8 Tahun', color: '#F3DFC1' }
    ],
    narrativeScene: {
      situationKicker: 'SITUASI PAGI',
      situationText: 'Waktu berangkat sekolah tersisa sepuluh menit lagi. Sepatu Raka sudah terikat rapi, namun Lila (5 tahun) masih duduk memeluk erat boneka kelinci kesayangannya di dekat pintu keluar.',
      ambientSoundLabel: 'Detak jam dinding berpadu suara gerimis pagi',
      perspectiveTag: 'Sudut Pandang: Reflektif Orang Tua',
      dialogues: [
        {
          speaker: 'Lila',
          role: 'Anak Bungsu • 5 Tahun',
          text: '“Ayah, Lila mau bawa Mochi ke sekolah hari ini... Mochi sedih kalau ditinggal sendiri di kasur.”',
          emotion: 'Mata memohon dengan bibir mengerut perlahan'
        },
        {
          speaker: 'Arga',
          role: 'Ayah',
          text: '“Tapi kita sudah hampir terlambat, Sayang. Di sekolah nanti Mochi tidak boleh masuk ke dalam kelas, ingat kan?”',
          emotion: 'Menatap jam dinding sambil menahan desah napas'
        }
      ],
      emotionNote: 'Lila mulai memeluk bonekanya semakin erat dan menundukkan kepala. Sudut matanya mulai basah menahan kekecewaan.',
      psychologyTip: 'Perhatikan bahasa tubuh Lila. Bagi anak balita, benda transisional seperti boneka adalah jangkar rasa aman saat peralihan lingkungan.'
    },
    decisionPrompt: {
      question: 'Apa yang akan Ayah lakukan?',
      situationRecap: 'Lila menangis di depan pintu sambil memeluk Mochi, sementara jarum jam terus mendesak.',
      choices: [
        {
          id: 'A',
          quote: '“Sudah, jangan menangis. Kita berangkat sekarang.”',
          hint: 'Menelusuri dampak instruksi tegas langsung terhadap emosi yang mendesak di pagi hari.'
        },
        {
          id: 'B',
          quote: '“Ayah tahu kamu kecewa. Kita pilih satu barang yang paling penting, ya. Mochi tunggu di tas depan atau titip Bunda?”',
          hint: 'Menelusuri dampak validasi empati dibarengi batasan tegas dan pilihan mandiri yang terarah.'
        },
        {
          id: 'C',
          quote: '“Kalau kamu terus menangis, kita nggak jadi pergi.”',
          hint: 'Menelusuri dampak ancaman konsekuensi sesaat terhadap rasa aman emosional anak.'
        }
      ]
    },
    impacts: {
      A: {
        quote: '“Sudah, jangan menangis. Kita berangkat sekarang.”',
        expressionTitle: 'Lila Terdiam Lesu',
        expressionDesc: 'Tangisnya mereda secara tiba-tiba, namun bahunya masih sedikit tegang. Pandangannya beralih ke ujung sepatu, menahan perasaan yang belum sempat menemukan muaranya.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Anak mungkin merasa emosinya belum benar-benar didengar dan situasi dapat menjadi lebih tegang di kemudian waktu.',
          subNote: 'Tangisan mereda sering kali bukan tanda ketenangan, melainkan rasa gamang.'
        },
        whyPsychology: {
          title: 'Kenapa Demikian?',
          desc: 'Ketika orang tua langsung meminta anak berhenti menangis, anak bisa merasa bahwa perasaannya belum sepenuhnya diterima.',
          tagNeed: 'Kebutuhan Validasi Emosi',
          tagRole: 'Fokus Solusi Cepat'
        },
        recommendation: {
          title: 'Rekomendasi Sentuhan Lembut',
          desc: 'Coba beri sedikit ruang untuk memahami perasaan anak sebelum memberikan solusi atau meminta tindakan segera.',
          points: ['Beri jeda napas 5 detik', 'Rendahkan badan sejajar mata anak', 'Akui rasa sedihnya sebelum melangkah']
        },
        score: { label: 'Tertahan Sementara', percent: 42, depth: 'Resonansi Rendah' }
      },
      B: {
        quote: '“Ayah tahu kamu kecewa. Kita pilih satu barang yang paling penting, ya.”',
        expressionTitle: 'Kemarahan Mereda Menjadi Anggukan Pelan',
        expressionDesc: 'Tangan mungilnya yang sempat mengepal kini terbuka. Lila merasakan bahwa keinginannya tidak diabaikan begitu saja, melainkan diarahkan dengan penuh kehangatan.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Anak mendapatkan kesempatan untuk merasa dipahami sekaligus belajar memilih batasan yang aman secara sehat.',
          subNote: 'Mengurangi intensitas tantrum secara berangsur tanpa paksaan fisik.'
        },
        whyPsychology: {
          title: 'Landasan Psikologis',
          desc: 'Respons ini mengakui perasaan anak (validasi) tanpa membiarkan situasi menjadi tidak terarah (batasan ramah tapi kokoh).',
          tagNeed: 'Merasa Didengarkan',
          tagRole: 'Jangkar Regulasi Mandiri'
        },
        recommendation: {
          title: 'Langkah Nyata Rekomendasi',
          desc: 'Pertahankan komunikasi yang sederhana dan berikan pilihan yang sesuai dengan usia anak.',
          points: ['Batasi opsi hanya pada dua alternatif konkret (A atau B)', 'Rendahkan posisi tubuh sejajar kontak mata', 'Ucapkan terima kasih atas kerja sama si kecil']
        },
        score: { label: 'Terhubung Hangat', percent: 92, depth: 'Terserap Utuh & Damai' }
      },
      C: {
        quote: '“Kalau kamu terus menangis, kita nggak jadi pergi.”',
        expressionTitle: 'Hening yang Bertanya',
        expressionDesc: 'Ketika rasa takut kehilangan momen menyenangkan bercampur dengan luapan emosi yang belum sempat dimengerti.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Anak mungkin berhenti menangis karena merasa tertekan, tetapi masalah emosinya belum tentu selesai.',
          subNote: 'Tangisan tertahan memupuk keraguan untuk mengungkapkan rasa di masa depan.'
        },
        whyPsychology: {
          title: 'Dinamika Batin Anak',
          desc: 'Ancaman mengaktifkan respons bertahan hidup (freeze) pada anak, menghalangi perkembangan regulasi emosi mandiri.',
          tagNeed: 'Rasa Aman & Dekapan',
          tagRole: 'Respons Mengontrol'
        },
        recommendation: {
          title: 'Jalan Bersama Menuju Pulih',
          desc: 'Setelah situasi tenang, coba kembali membicarakan alasan anak merasa kecewa tanpa menyudutkan.',
          points: ['Beri jeda napas 5 menit', 'Gunakan nada suara bersahabat', 'Dengarkan tanpa memotong ceritanya']
        },
        score: { label: 'Cemas & Waspada', percent: 35, depth: 'Koneksi Terhambat' }
      }
    },
    insight: {
      quote: '“Dengarkan sebelum menyelesaikan masalah.”',
      desc: 'Anak tidak selalu membutuhkan solusi yang cepat. Kadang mereka hanya ingin merasa bahwa perasaannya dipahami.',
      card1Title: 'Ruang Emosi',
      card1Desc: 'Validasi bukan berarti menyetujui semua keinginan, melainkan mengakui bahwa emosi mereka nyata dan wajar dirasakan.',
      card2Title: 'Kehadiran Tenang',
      card2Desc: 'Napas tenang orang tua adalah jangkar keamanan pertama bagi anak yang sedang cemas atau berjuang menata rasa.'
    },
    completion: {
      title: 'Bab 1 Selesai',
      reflection: '“Hari ini, kamu belajar bahwa menghadapi emosi anak tidak selalu membutuhkan jawaban yang cepat.”',
      closingQuote: '“Terkadang pelukan lima detik di pagi hari mampu menyingkirkan terburu-burunya perjalanan sepanjang hari.”'
    }
  },
  {
    id: 'bab-02',
    number: 'Bab 02',
    title: 'Kenapa Kakak Selalu Mengalah?',
    subtitle: 'Keadilan Rasa & Sudut Pandang Anak Sulung',
    category: 'Resolusi Konflik',
    duration: '~4 Menit',
    image: 'public/assets/images/brother_holding_drawing_1790922666675.jpg',
    heroTag: 'Raka & Bunda Naya di Ruang Tamu',
    sceneTime: 'Pukul 13.30 WIB',
    sceneLocation: 'Ruang Tengah Rumah',
    focusTopic: 'Keadilan Rasa',
    prologueQuote: '“Raka ingin menunjukkan gambar yang baru saja ia buat. Tapi sebelum sempat bercerita, Lila datang meminta bantuan Bunda.”',
    prologueText: 'Di antara kesibukan merawat yang lebih kecil, sering kali ada mata bening seorang kakak yang menunggu dalam diam, memegang hasil karyanya dengan penuh harap.',
    breathingPrompt: 'Anak sulung sering memikul harapan tanpa disengaja. Di bab ini, luangkan satu tarikan napas perlahan sebelum menyimak langkah Bunda.',
    characters: [
      { name: 'Raka', role: 'Kakak', age: '8 Tahun', color: '#F3DFC1' },
      { name: 'Naya', role: 'Bunda', age: '32 Tahun', color: '#D5DFCF' },
      { name: 'Lila', role: 'Adik', age: '5 Tahun', color: '#E2EAD8' }
    ],
    narrativeScene: {
      situationKicker: 'SITUASI SIANG',
      situationText: 'Siang itu, Raka datang membawa gambar yang sudah ia buat sejak pagi. Warna krayonnya masih pekat, kertasnya ia pegang hati-hati dengan kedua tangannya.',
      ambientSoundLabel: 'Suara Hening Siang Hari & Gerimis Luar Rumah',
      perspectiveTag: 'Sudut Pandang: Reflektif Kakak Sulung',
      dialogues: [
        {
          speaker: 'Raka',
          role: 'Kakak • 8 Tahun',
          text: '“Bunda, lihat gambar Raka... ada rumah pohon dan jembatan tali.”',
          emotion: 'Mata berbinar penuh rasa bangga memegang kertas'
        },
        {
          speaker: 'Naya',
          role: 'Bunda',
          text: '“Sebentar ya, Kak. Bunda bantu Lila dulu, baloknya tersangkut di kolong meja.”',
          emotion: 'Berjongkok membelakangi Raka demi merapikan mainan adik'
        },
        {
          speaker: 'Lila',
          role: 'Adik • 5 Tahun',
          text: '“Bunda, mainanku rusak... tolong perbaiki sekarang!”',
          emotion: 'Menarik-narik ujung celemek Bunda'
        },
        {
          speaker: 'Raka',
          role: 'Kakak • 8 Tahun',
          text: '“Bunda lebih sayang Lila, ya?”',
          emotion: 'Dengan nada lirih dan mata berkaca-kaca menatap lantai'
        }
      ],
      emotionNote: 'Setelah menunggu Lila, tangan Raka yang memegang kertas gambar perlahan turun ke samping tubuhnya. Tatapannya meredup dalam hening.',
      psychologyTip: 'Pertanyaan seorang anak bukanlah tuduhan, melainkan pencarian rasa aman bahwa dirinya tetap berharga di tengah pembagian perhatian keluarga.'
    },
    decisionPrompt: {
      question: 'Apa yang akan Bunda lakukan?',
      situationRecap: 'Raka bertanya lirih setelah menunggu Bunda membantu adiknya. Tangannya memegang erat buku gambar karyanya.',
      choices: [
        {
          id: 'A',
          quote: '“Jangan berpikir begitu. Bunda sayang kalian berdua.”',
          hint: 'Menelusuri dampak reassurance langsung terhadap keresahan batin anak sulung.'
        },
        {
          id: 'B',
          quote: '“Lila memang masih butuh bantuan Bunda karena masih kecil.”',
          hint: 'Menelusuri dampak penjelasan rasional posisi adik terhadap perasaan kakak.'
        },
        {
          id: 'C',
          quote: '“Bunda minta maaf, tadi Bunda belum sempat lihat gambar kamu. Boleh Bunda lihat sekarang?”',
          hint: 'Menelusuri dampak pengakuan jeda waktu dan validasi kebutuhan anak.'
        }
      ]
    },
    impacts: {
      A: {
        quote: '“Jangan berpikir begitu. Bunda sayang kalian berdua.”',
        expressionTitle: 'Penenang Sesaat',
        expressionDesc: 'Raka mungkin merasa sedikit tenang, tetapi tetap merasa bahwa perhatiannya belum benar-benar didengar secara utuh.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Kata-kata penenang meredakan sesaat, namun rasa tersisih belum sempat terurai.',
          subNote: 'Anak sulung belajar menyembunyikan cemburu di balik wajah penurut.'
        },
        whyPsychology: {
          title: 'Kebutuhan Pengakuan',
          desc: 'Meyakinkan anak bahwa orang tua menyayangi semuanya memang penting, tetapi anak juga membutuhkan validasi atas perasaan cemburunya.',
          tagNeed: 'Validasi Emosi Sulung',
          tagRole: 'Reassurance Instan'
        },
        recommendation: {
          title: 'Langkah Lanjutan',
          desc: 'Setelah memberi reassurance, luangkan 5 menit khusus untuk melihat gambarnya bersama.',
          points: ['Duduk berdampingan melihat karyanya', 'Ungkapkan apresiasi spesifik atas kesabarannya', 'Peluk dengan erat tanpa tergesa']
        },
        score: { label: 'Terserap Bertahap', percent: 68, depth: 'Keseimbangan Afeksi 68%' }
      },
      B: {
        quote: '“Lila memang masih butuh bantuan Bunda karena masih kecil.”',
        expressionTitle: 'Persepsi Bobot Kebutuhan',
        expressionDesc: 'Raka bisa merasa bahwa kebutuhan Lila selalu lebih penting daripada dirinya, memupuk anggapan bahwa ia harus selalu mandiri.',
        whatHappens: {
          title: 'Persepsi Bobot Kebutuhan',
          desc: 'Raka tidak mempertanyakan apakah adiknya butuh pertolongan. Yang ia rasakan adalah penutupan pintu perhatian.',
          subNote: 'Anak menginternalisasi anggapan bahwa dirinya harus selalu mandiri.'
        },
        whyPsychology: {
          title: 'Kebutuhan Validasi Awal',
          desc: 'Menjelaskan kebutuhan adik tanpa terlebih dahulu memahami perasaan kakak membuat anak merasa dikesampingkan.',
          tagNeed: 'Rasa Dihargai Khusus',
          tagRole: 'Penjelasan Rasional Kering'
        },
        recommendation: {
          title: 'Sentuhan Kata Hangat',
          desc: 'Akui perasaan Raka terlebih dahulu sebelum menjelaskan situasi adiknya.',
          points: ['Katakan: “Bunda tahu Raka sudah sabar menunggu. Sekarang giliran Raka.”', 'Jadwalkan momen istimewa berdua tanpa adik', 'Beri pelukan pengakuan']
        },
        score: { label: 'Rasa Berjarak', percent: 50, depth: 'Butuh Validasi Ulang' }
      },
      C: {
        quote: '“Bunda minta maaf, tadi Bunda belum sempat lihat gambar kamu. Boleh Bunda lihat sekarang?”',
        expressionTitle: 'Binar Mata yang Kembali Pulih',
        expressionDesc: 'Senyum kecil terbit di bibir Raka. Ia melangkah mendekat dengan langkah ringan, siap menceritakan setiap garis warna karyanya.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Permintaan maaf yang tulus dan kesediaan hadir mengajarkan anak bahwa kesalahan bisa diperbaiki dengan kasih sayang.',
          subNote: 'Anak merasa dihormati sebagai individu yang bermartabat dan disayangi.'
        },
        whyPsychology: {
          title: 'Pengakuan Jeda & Validasi',
          desc: 'Mengakui keterlambatan respons orang tua mencontohkan kerendahan hati dan empati yang nyata bagi anak.',
          tagNeed: 'Kehadiran Nyata',
          tagRole: 'Teladan Kerendahan Hati'
        },
        recommendation: {
          title: 'Langkah Nyata Rekomendasi',
          desc: 'Ajak Raka menceritakan kisah di balik gambarnya dengan pertanyaan terbuka.',
          points: ['Tanyakan: “Warna ini ceritanya apa, Kak?”', 'Pajang gambarnya di dinding kulkas', 'Beri waktu khusus 10 menit tanpa gawai']
        },
        score: { label: 'Terhubung Mendalam', percent: 96, depth: 'Kehangatan Maksimal' }
      }
    },
    insight: {
      quote: '“Anak sulung sering memikul kedewasaan sebelum waktunya.”',
      desc: 'Di balik sikapnya yang mandiri, seorang anak sulung tetaplah anak yang merindukan dipeluk dan didengarkan layaknya si kecil.',
      card1Title: 'Keadilan Bukan Kesamaan',
      card1Desc: 'Keadilan bagi anak bukan memberi porsi waktu yang persis sama, melainkan memberikan perhatian yang utuh saat bersama mereka.',
      card2Title: 'Pengakuan atas Kesabaran',
      card2Desc: 'Ucapkan terima kasih saat kakak bersedia menunggu, agar kesabarannya tidak terasa sebagai beban yang tak dihargai.'
    },
    completion: {
      title: 'Bab 2 Selesai',
      reflection: '“Hari ini, kita belajar bahwa keadilan rasa bagi anak sulung hadir dari kesediaan kita melihat dan mendengar dunianya.”',
      closingQuote: '“Di antara setiap keletihan hari ini, ada pelukan hangat yang siap didengarkan.”'
    }
  },
  {
    id: 'bab-03',
    number: 'Bab 03',
    title: 'Kakak dan Adik Bertengkar',
    subtitle: 'Mediasi Sehat & Balok-Balok Kedamaian',
    category: 'Resolusi Konflik',
    duration: '~5 Menit',
    image: 'public/assets/images/siblings_toy_blocks_1790922678481.jpg',
    heroTag: 'Raka & Lila di Karpet Ruang Keluarga',
    sceneTime: 'Pukul 16.00 WIB',
    sceneLocation: 'Karpet Ruang Bermain',
    focusTopic: 'Mediasi Sehat',
    prologueQuote: '“Ketika balok kayu yang tersusun rapi roboh karena senggolan kecil, amarah meletup menjadi teriakan yang menuntut keadilan.”',
    prologueText: 'Konflik antara saudara kandung bukan tentang mencari siapa yang salah atau benar, melainkan laboratorium pertama bagi anak untuk belajar empati dan resolusi damai.',
    breathingPrompt: 'Ketika pertengkaran pecah, napas tenang orang tua adalah pelindung pertama yang mencegah eskalasi emosi.',
    characters: [
      { name: 'Raka', role: 'Kakak', age: '8 Tahun', color: '#F3DFC1' },
      { name: 'Lila', role: 'Adik', age: '5 Tahun', color: '#E2EAD8' },
      { name: 'Arga', role: 'Ayah', age: '34 Tahun', color: '#E8D5C4' }
    ],
    narrativeScene: {
      situationKicker: 'SITUASI SORE',
      situationText: 'Menara balok kayu setinggi lutut Raka tiba-tiba roboh berhamburan. Lila memegang satu balok segitiga merah, sementara Raka berdiri dengan mata memerah.',
      ambientSoundLabel: 'Dentang Balok Kayu & Suara Burung Senja',
      perspectiveTag: 'Sudut Pandang: Fasilitator Kedamaian',
      dialogues: [
        {
          speaker: 'Raka',
          role: 'Kakak • 8 Tahun',
          text: '“Ayah! Lila merusak istanaku sengaja! Lila nakal!”',
          emotion: 'Berteriak sambil menunjuk adiknya dengan tangan gemetar'
        },
        {
          speaker: 'Lila',
          role: 'Adik • 5 Tahun',
          text: '“Lila cuma mau pasang atap merahnya... Lila nggak sengaja...”',
          emotion: 'Menangis tersedu-sedu sambil meremas balok kayu'
        }
      ],
      emotionNote: 'Kedua anak saling memandang dengan curiga dan pertahanan diri yang tinggi, menanti siapa yang akan dibela oleh orang tua.',
      psychologyTip: 'Jangan tergesa menjadi hakim yang menentukan hukuman. Jadilah cermin yang memantulkan perasaan kedua belah pihak.'
    },
    decisionPrompt: {
      question: 'Bagaimana Ayah menengahi situasi ini?',
      situationRecap: 'Balok menara roboh, Raka menuduh Lila nakal, Lila menangis mengaku tidak sengaja.',
      choices: [
        {
          id: 'A',
          quote: '“Raka, kamu kan kakak, jangan bentak adik seperti itu. Minta maaf pada Lila.”',
          hint: 'Menelusuri dampak pemaksaan mengalah berbasis usia terhadap rasa keadilan anak sulung.'
        },
        {
          id: 'B',
          quote: '“Lila, kamu tahu itu istana kakak, kenapa kamu sentuh? Rapikan sekarang!”',
          hint: 'Menelusuri dampak menyalahkan adik langsung tanpa mendengarkan niat awalnya.'
        },
        {
          id: 'C',
          quote: '“Raka sedih karena istananya roboh. Dan Lila sedih karena niat membantu justru bikin balok jatuh, betul begitu?”',
          hint: 'Menelusuri dampak mendeskripsikan fakta dan memvalidasi emosi kedua pihak.'
        }
      ]
    },
    impacts: {
      A: {
        quote: '“Raka, kamu kan kakak, jangan bentak adik. Minta maaf!”',
        expressionTitle: 'Kekecewaan Mendalam Kakak',
        expressionDesc: 'Raka melipat tangan di dada dan membuang muka, merasa keadilannya dirampas.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Kakak merasa orang tua selalu berpihak pada yang kecil, merenggangkan hubungan saudara.',
          subNote: 'Pemaksaan minta maaf yang tidak tulus melatih perilaku pura-pura.'
        },
        whyPsychology: {
          title: 'Beban Usia',
          desc: 'Label “kamu kan kakak” menuntut kedewasaan kognitif di luar kapasitas emosional anak usia 8 tahun.',
          tagNeed: 'Keadilan yang Adil',
          tagRole: 'Hakim Tergesa'
        },
        recommendation: {
          title: 'Langkah Rekomendasi',
          desc: 'Hindari menggunakan usia sebagai alasan untuk menuntut anak mengalah.',
          points: ['Beri waktu tenang bagi kedua anak', 'Dengarkan kronologi dari kedua sudut pandang', 'Fokus pada solusi bersama']
        },
        score: { label: 'Kekecewaan Batin', percent: 38, depth: 'Konflik Terpendam' }
      },
      B: {
        quote: '“Lila, kenapa kamu sentuh? Rapikan sekarang!”',
        expressionTitle: 'Rasa Bersalah Berlebihan Adik',
        expressionDesc: 'Lila menangis kian keras dan ketakutan menyentuh mainan lagi.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Adik merasa ditolak dan takut mencoba hal baru karena takut salah.',
          subNote: 'Hukuman instan mengaburkan pelajaran tentang cara meminta izin.'
        },
        whyPsychology: {
          title: 'Niat vs Hasil',
          desc: 'Anak usia 5 tahun belum memiliki koordinasi motorik sempurna. Niat baik bisa berakhir kecelakaan.',
          tagNeed: 'Pengertian atas Keterbatasan',
          tagRole: 'Penghukum Otoriter'
        },
        recommendation: {
          title: 'Langkah Rekomendasi',
          desc: 'Ajak anak memahami dampak perbuatan tanpa menghukum niat baiknya.',
          points: ['Ajarkan kata: “Boleh Lila bantu pasang balok ini?”', 'Ajak adik memegang balok cadangan', 'Tunjukkan cara mendekati area bermain']
        },
        score: { label: 'Kecemasan Meningkat', percent: 44, depth: 'Hubungan Renggang' }
      },
      C: {
        quote: '“Raka sedih istana roboh, dan Lila sedih karena niat membantu justru bikin jatuh.”',
        expressionTitle: 'Jembatan Empati Terbentang',
        expressionDesc: 'Tangisan Lila mereda, dan napas Raka kembali teratur saat mendengar ayahnya merangkum isi hati mereka.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Kedua anak melihat bahwa emosi mereka valid, dan konflik bisa diselesaikan tanpa ada yang kalah.',
          subNote: 'Raka tergerak untuk mengajak Lila membangun kembali menara baru bersama.'
        },
        whyPsychology: {
          title: 'Mediasi Berbasis Empati',
          desc: 'Ketika orang tua memvalidasi perasaan kedua belah pihak, pertahanan diri anak menurun drastis.',
          tagNeed: 'Validasi Seimbang',
          tagRole: 'Fasilitator Damai'
        },
        recommendation: {
          title: 'Langkah Rekomendasi',
          desc: 'Tanyakan kepada mereka: “Menurut kalian, apa yang bisa kita lakukan bersama sekarang?”',
          points: ['Biarkan anak-anak mengusulkan ide solusi', 'Puji kerja sama dan kejujuran mereka', 'Peluk kedua anak bersamaan']
        },
        score: { label: 'Harmoni Pulih', percent: 95, depth: 'Resonansi Damai Utuh' }
      }
    },
    insight: {
      quote: '“Pertengkaran anak adalah ruang latihan empati paling berharga.”',
      desc: 'Tugas orang tua bukan menjadi hakim yang menentukan siapa bersalah, melainkan pemandu yang menuntun mereka saling memahami luka masing-masing.',
      card1Title: 'Validasi Ganda',
      card1Desc: 'Sebutkan perasaan kedua anak secara bergantian dengan nada netral penuh penerimaan.',
      card2Title: 'Serahkan Solusi',
      card2Desc: 'Ajak mereka berpikir mencari solusi bersama daripada memberikan instruksi satu arah.'
    },
    completion: {
      title: 'Bab 3 Selesai',
      reflection: '“Hari ini, kita belajar bahwa keharmonisan keluarga bertumbuh dari bagaimana kita menyelesaikan badai kecil.”',
      closingQuote: '“Kedamaian di rumah bukan berarti tanpa pertengkaran, melainkan ada ruang untuk selalu berdamai.”'
    }
  },
  {
    id: 'bab-04',
    number: 'Bab 04',
    title: 'Hari yang Melelahkan',
    subtitle: 'Pengasuhan Diri & Kehangatan di Ujung Senja',
    category: 'Regulasi Diri',
    duration: '~4 Menit',
    image: 'public/assets/images/parents_evening_rest_1790922691008.jpg',
    heroTag: 'Keluarga Arga & Naya Menjelang Malam',
    sceneTime: 'Pukul 19.30 WIB',
    sceneLocation: 'Ruang Keluarga Malam Hari',
    focusTopic: 'Pengasuhan Diri',
    prologueQuote: '“Ketika baterai energi orang tua berada di titik terendah, suara tawa anak pun terkadang terdengar seperti kebisingan yang membebani.”',
    prologueText: 'Merawat anak menuntut pasokan emosi yang tak ada habisnya. Namun kita tidak bisa menuangkan air dari teko yang sudah kosong.',
    breathingPrompt: 'Sebelum merespons anak di saat lelah, berikan satu pelukan hangat untuk dirimu sendiri yang telah berjuang sepanjang hari.',
    characters: [
      { name: 'Naya', role: 'Bunda', age: '32 Tahun', color: '#D5DFCF' },
      { name: 'Arga', role: 'Ayah', age: '34 Tahun', color: '#E8D5C4' },
      { name: 'Raka', role: 'Kakak', age: '8 Tahun', color: '#F3DFC1' },
      { name: 'Lila', role: 'Adik', age: '5 Tahun', color: '#E2EAD8' }
    ],
    narrativeScene: {
      situationKicker: 'SITUASI MALAM',
      situationText: 'Setelah seharian penuh berkutat dengan pekerjaan, Naya duduk bersandar di sofa. Di lantai, Lila menumpahkan susu sementara Raka merengek meminta main puzzle.',
      ambientSoundLabel: 'Suara Detik Jam Dinding & Gemersik Angin Malam',
      perspectiveTag: 'Sudut Pandang: Welas Asih Diri (Self-Compassion)',
      dialogues: [
        {
          speaker: 'Lila',
          role: 'Adik • 5 Tahun',
          text: '“Bunda, susunya tumpah ke bantal kucing... licin!”',
          emotion: 'Menatap cemas sambil memegang gelas kosong'
        },
        {
          speaker: 'Naya',
          role: 'Bunda',
          text: '“Kepala Bunda berdenyut kencang sekali malam ini...”',
          emotion: 'Memijat pelipis mata sambil menarik napas panjang'
        }
      ],
      emotionNote: 'Naya berada di ambang ledakan frustrasi. Dorongan untuk berteriak atau menangis terasa begitu kuat.',
      psychologyTip: 'Kelelahan ekstrem mempersempit toleransi emosional orang tua. Mengakui batas kapasitas diri adalah langkah bijak, bukan kegagalan.'
    },
    decisionPrompt: {
      question: 'Bagaimana Bunda mengelola momen lelah ini?',
      situationRecap: 'Susu tumpah, rengekan anak bertubi-tubi, dan energi fisik Bunda di titik nadir.',
      choices: [
        {
          id: 'A',
          quote: '“Bunda capek sekali! Kenapa selalu bikin masalah tiap malam? Masuk kamar sekarang!”',
          hint: 'Menelusuri dampak pelampiasan rasa lelah secara spontan terhadap suasana rumah.'
        },
        {
          id: 'B',
          quote: '“Ayah, boleh tolong gantikan Bunda sebentar? Bunda butuh jeda 10 menit untuk bernapas.”',
          hint: 'Menelusuri kekuatan meminta bantuan pasangan dan mengambil jeda regulasi diri.'
        },
        {
          id: 'C',
          quote: '“Anak-anak sayang, Bunda sangat lelah malam ini. Mari kita lap susu bersama lalu baca buku santai, ya?”',
          hint: 'Menelusuri komunikasi jujur tentang kerapuhan diri dan negosiasi aktivitas tenang.'
        }
      ]
    },
    impacts: {
      A: {
        quote: '“Bunda capek sekali! Masuk kamar sekarang!”',
        expressionTitle: 'Ketegangan yang Membekukan',
        expressionDesc: 'Kedua anak menunduk ketakutan, suasana malam yang seharusnya hangat berubah dingin.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Anak merasa bahwa rasa lelah orang tua adalah kesalahan mereka.',
          subNote: 'Orang tua sering kali merasa sangat bersalah setelah ledakan emosi mereda.'
        },
        whyPsychology: {
          title: 'Amigdala Overdrive',
          desc: 'Saat kelelahan, otak reptil mengambil alih kendali, memicu respons melawan atau lari.',
          tagNeed: 'Kepastian Cinta',
          tagRole: 'Reaksi Impulsif'
        },
        recommendation: {
          title: 'Langkah Pemulihan',
          desc: 'Jika terlanjur meledak, jangan ragu untuk memeluk anak dan meminta maaf setelah tenang.',
          points: ['Katakan: “Bunda berteriak karena lelah, bukan karena kalian salah.”', 'Berikan pelukan hangat sebelum tidur', 'Tidur lebih awal memulihkan raga']
        },
        score: { label: 'Penuh Rasa Bersalah', percent: 32, depth: 'Membutuhkan Pemulihan' }
      },
      B: {
        quote: '“Ayah, boleh tolong bantu Bunda sebentar? Bunda butuh jeda bernapas.”',
        expressionTitle: 'Jeda Berharga yang Menyelamatkan',
        expressionDesc: 'Arga sigap mengambil kain lap susu dan merangkul anak-anak, sementara Naya menikmati segelas air putih hangat.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Krisis malam terhindarkan, anak melihat kerja sama saling mendukung antar orang tua.',
          subNote: 'Meminta tolong bukanlah kelemahan, melainkan kematangan kepemimpinan keluarga.'
        },
        whyPsychology: {
          title: 'Regulasi Co-Parenting',
          desc: 'Dukungan pasangan berfungsi sebagai peredam kejut saat salah satu pasangan berada di titik burnout.',
          tagNeed: 'Stabilitas Pengasuhan',
          tagRole: 'Kerja Sama Sehat'
        },
        recommendation: {
          title: 'Langkah Rekomendasi',
          desc: 'Bangun kode rahasia atau sinyal jeda bersama pasangan ketika energi mendekati nol.',
          points: ['Sepakati sinyal “butuh jeda 10 menit”', 'Jangan saling mencela saat lelah', 'Saling ucapkan terima kasih di penghujung hari']
        },
        score: { label: 'Keluarga Menopang', percent: 94, depth: 'Resiliensi Tinggi' }
      },
      C: {
        quote: '“Bunda sangat lelah. Mari kita bereskan pelan-pelan lalu rebahan bersama.”',
        expressionTitle: 'Kehangatan yang Menyejukkan',
        expressionDesc: 'Raka mengambil lap kain untuk membantu adiknya, dan Lila mengusap lembut lengan Bunda.',
        whatHappens: {
          title: 'Yang Mungkin Terjadi',
          desc: 'Anak-anak belajar bahwa orang tua juga manusia yang bisa lelah dan butuh pengertian.',
          subNote: 'Menciptakan malam yang tenang dan intim dengan menurunkan ekspektasi.'
        },
        whyPsychology: {
          title: 'Modeling Kerapuhan Sehat',
          desc: 'Anak tidak membutuhkan orang tua super tanpa cela; mereka membutuhkan orang tua yang jujur dan mengelola lelah dengan bijak.',
          tagNeed: 'Koneksi Autentik',
          tagRole: 'Orang Tua Nyata'
        },
        recommendation: {
          title: 'Langkah Rekomendasi',
          desc: 'Turunkan ekspektasi rutinitas malam saat hari berjalan sangat berat.',
          points: ['Ganti aktivitas berat dengan dongeng singkat', 'Redupkan lampu kamar lebih awal', 'Fokus pada rasa aman dan pelukan']
        },
        score: { label: 'Kelembutan Tulus', percent: 98, depth: 'Koneksi Jiwa Mendalam' }
      }
    },
    insight: {
      quote: '“Pengasuhan terbaik berakar dari orang tua yang merawat dirinya sendiri.”',
      desc: 'Menjaga kewarasan dan kesehatan jiwa orang tua bukan bentuk keegoisan, melainkan hadiah terindah yang bisa kita berikan bagi anak-anak kita.',
      card1Title: 'Teko yang Terisi',
      card1Desc: 'Luangkan waktu kecil setiap hari untuk hal-hal yang menyegarkan jiwamu, walau hanya secangkir teh hangat dalam hening.',
      card2Title: 'Turunkan Beban Kesempurnaan',
      card2Desc: 'Rumah yang berantakan di malam hari bisa dibersihkan besok; yang terpenting adalah hati yang damai saat tidur.'
    },
    completion: {
      title: 'Bab 4 Selesai',
      reflection: '“Hari ini, kita belajar bahwa orang tua yang cukup baik adalah orang tua yang bersedia mengasihi dirinya sendiri di saat lelah.”',
      closingQuote: '“Di antara setiap keletihan hari ini, ada pelukan hangat yang siap didengarkan.”'
    }
  }
];

const FAMILY_MEMBERS = [
  {
    name: 'Arga',
    role: 'Ayah (34 Tahun)',
    desc: 'Ayah yang senantiasa belajar hadir dengan tenang di sela kesibukan kerja. Merendahkan posisi tubuh sejajar kontak mata anak saat berdialog.',
    color: '#E8D5C4',
    strength: 'Kehadiran yang Menenangkan'
  },
  {
    name: 'Naya',
    role: 'Ibu/Bunda (32 Tahun)',
    desc: 'Pilar kehangatan keluarga yang peka terhadap dinamika rasa anak-anak, berusaha mendengarkan tanpa terburu-buru menghakimi.',
    color: '#D5DFCF',
    strength: 'Empati & Validasi Rasa'
  },
  {
    name: 'Raka',
    role: 'Anak Sulung (8 Tahun)',
    desc: 'Kreatif, senang menggambar dan menyusun balok. Sebagai anak tertua, Raka kerap memendam keinginannya agar terlihat mandiri.',
    color: '#F3DFC1',
    strength: 'Peka & Berjiwa Pelindung'
  },
  {
    name: 'Lila',
    role: 'Anak Bungsu (5 Tahun)',
    desc: 'Penuh rasa ingin tahu dan ekspresif. Sangat terikat pada boneka kelinci Mochi sebagai jangkar rasa aman saat peralihan suasana.',
    color: '#E2EAD8',
    strength: 'Ekspresi Emosi yang Jujur'
  }
];

// =============================================================================
// 2. WEB AUDIO API SYNTHESIZER
// =============================================================================

let audioCtx = null;
let ambientGain = null;
let isAmbienceActive = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playLampClickSound(isLit) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(isLit ? 840 : 620, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch (err) {
    // Audio might require initial user gesture
  }
}

function toggleAmbienceSound() {
  try {
    const ctx = getAudioContext();
    const btn = document.getElementById('btn-ambience-toggle');

    if (isAmbienceActive) {
      if (ambientGain) {
        ambientGain.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
      }
      isAmbienceActive = false;
      if (btn) btn.classList.remove('active');
      return false;
    }

    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, ctx.currentTime);

    ambientGain = ctx.createGain();
    ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
    ambientGain.gain.setTargetAtTime(0.12, ctx.currentTime, 0.6);

    whiteNoise.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(ctx.destination);

    whiteNoise.start(0);
    isAmbienceActive = true;
    if (btn) btn.classList.add('active');
    return true;
  } catch (err) {
    return false;
  }
}

// =============================================================================
// 3. APPLICATION STATE & CONTROLLER
// =============================================================================

const AppState = {
  currentTab: 'beranda',
  isLampLit: false,
  isDarkMode: true,
  activeChapterId: null,
  pendingChapterId: null,
  readerStep: 'intro',
  selectedChoiceId: 'B',
  breathingInterval: null,
  breatheSeconds: 4,
  breathePhase: 'Tarik Napas',
  journalEntries: []
};

// =============================================================================
// 4. THEME & INITIALIZATION
// =============================================================================

function initTheme() {
  // Web opens in Dark Mode (lamp OFF) on initial entry
  const sessionLamp = sessionStorage.getItem('parentmind_session_lamp_state');
  if (sessionLamp === 'lit') {
    setLampLit(true);
  } else {
    // Default initial visit is always Dark Mode (lamp unlit)
    setLampLit(false);
  }
}

function toggleTheme() {
  handleLampPull();
}

// =============================================================================
// 5. VIEW NAVIGATION & TAB CONTROLLER
// =============================================================================

function switchTab(tabName) {
  AppState.currentTab = tabName;
  AppState.activeChapterId = null;

  // Update nav buttons active state
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('data-tab') === tabName);
  });

  // Hide reader container
  const readerContainer = document.getElementById('view-reader');
  if (readerContainer) readerContainer.classList.add('hidden');

  // Toggle main tab containers
  const tabs = ['beranda', 'daftar-bab', 'refleksi-hati', 'pohon-keluarga'];
  tabs.forEach((tab) => {
    const el = document.getElementById(`view-${tab}`);
    if (el) {
      if (tab === tabName) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================================================
// 6. BEDTIME LAMP COMPONENT & GATING LOGIC
// =============================================================================

let lampPromptTimeout = null;
let lampToastTimeout = null;

function setLampLit(isLit) {
  AppState.isLampLit = isLit;
  const lampWrapper = document.getElementById('bedtime-lamp');
  const pillText = document.getElementById('lamp-pill-text');
  const pillBtn = document.getElementById('lamp-status-btn');

  if (pillBtn) {
    pillBtn.classList.remove('pulse-prompt');
  }

  // Synchronize lamp with Dark/Light Mode:
  // Lamp ON (isLit = true) => Light Mode
  // Lamp OFF (isLit = false) => Dark Mode
  if (isLit) {
    AppState.isDarkMode = false;
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('dark');
    sessionStorage.setItem('parentmind_session_lamp_state', 'lit');
    localStorage.setItem('parentmind_theme', 'light');
  } else {
    AppState.isDarkMode = true;
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
    sessionStorage.setItem('parentmind_session_lamp_state', 'unlit');
    localStorage.setItem('parentmind_theme', 'dark');
  }

  if (lampWrapper) {
    lampWrapper.classList.toggle('lit', isLit);
  }

  if (pillText) {
    pillText.textContent = isLit
      ? '💡 CAHAYA HANGAT MENYALA • MODE TERANG'
      : '🌙 LAMPU PADAM • MODE GELAP';
  }
}

function handleLampPull() {
  const cord = document.querySelector('.lamp-cord-container');
  if (cord) {
    cord.classList.add('pulling');
    setTimeout(() => cord.classList.remove('pulling'), 450);
  }

  const nextState = !AppState.isLampLit;
  playLampClickSound(nextState);
  setLampLit(nextState);
  hideLampToast();

  // If turning ON and there was an attempt to open a story, open it automatically
  if (nextState && AppState.pendingChapterId) {
    const targetChapter = AppState.pendingChapterId;
    AppState.pendingChapterId = null;
    setTimeout(() => {
      openChapter(targetChapter);
    }, 400);
  }
}

// When story continuation is attempted before turning on the lamp
function promptTurnOnLamp(targetChapterId) {
  AppState.pendingChapterId = targetChapterId || 'bab-01';

  // Ensure user is on beranda so the lamp is visible
  if (AppState.currentTab !== 'beranda') {
    switchTab('beranda');
  }

  const lampWrapper = document.getElementById('bedtime-lamp');
  const lampCord = document.querySelector('.lamp-cord-container');
  const pillBtn = document.getElementById('lamp-status-btn');
  const pillText = document.getElementById('lamp-pill-text');

  // Trigger playful cord pull & highlight animation on lamp
  if (lampWrapper) {
    lampWrapper.classList.add('highlight-lamp');
    setTimeout(() => lampWrapper.classList.remove('highlight-lamp'), 1400);
  }

  if (lampCord) {
    lampCord.classList.add('pulling');
    setTimeout(() => lampCord.classList.remove('pulling'), 600);
  }

  if (pillBtn && pillText) {
    pillBtn.classList.add('pulse-prompt');
    pillText.textContent = '✨ TARIK TALI / KLIK LAMPU UNTUK MEMBACA 💡';

    if (lampPromptTimeout) clearTimeout(lampPromptTimeout);
    lampPromptTimeout = setTimeout(() => {
      pillBtn.classList.remove('pulse-prompt');
      if (!AppState.isLampLit) {
        pillText.textContent = '🌙 LAMPU PADAM • MODE GELAP';
      }
    }, 4500);
  }

  // Smooth scroll to lamp if out of view
  if (lampWrapper) {
    const rect = lampWrapper.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
      lampWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Show floating toast prompt
  showLampToast('Nyalakan lampu terlebih dahulu untuk melanjutkan cerita 💡');
}

function showLampToast(message) {
  let toast = document.getElementById('lamp-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'lamp-toast';
    toast.className = 'lamp-toast';
    toast.innerHTML = `
      <span class="lamp-toast-icon">💡</span>
      <span class="lamp-toast-msg">${message}</span>
      <button type="button" class="lamp-toast-btn" onclick="turnOnLampFromPrompt()">Nyalakan Sekarang</button>
    `;
    document.body.appendChild(toast);
  } else {
    const msgEl = toast.querySelector('.lamp-toast-msg');
    if (msgEl) msgEl.textContent = message;
    toast.classList.remove('hidden');
  }

  if (lampToastTimeout) clearTimeout(lampToastTimeout);
  lampToastTimeout = setTimeout(() => {
    hideLampToast();
  }, 4500);
}

function hideLampToast() {
  const toast = document.getElementById('lamp-toast');
  if (toast) toast.classList.add('hidden');
}

function turnOnLampFromPrompt() {
  hideLampToast();
  if (!AppState.isLampLit) {
    handleLampPull();
  }
}

// =============================================================================
// 7. STORY READER ENGINE
// =============================================================================

function openChapter(chapterId) {
  // Gate: Story continuation requires lamp to be ON
  if (!AppState.isLampLit) {
    promptTurnOnLamp(chapterId);
    return;
  }

  AppState.pendingChapterId = null;
  AppState.activeChapterId = chapterId;
  AppState.readerStep = 'intro';
  AppState.selectedChoiceId = 'B';

  // Hide tab views and display reader view
  document.querySelectorAll('.tab-view').forEach((el) => el.classList.add('hidden'));
  const readerView = document.getElementById('view-reader');
  if (readerView) readerView.classList.remove('hidden');

  renderReaderStep();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getActiveChapter() {
  return CHAPTERS_DATA.find((c) => c.id === AppState.activeChapterId) || CHAPTERS_DATA[0];
}

function renderReaderStep() {
  const ch = getActiveChapter();
  const container = document.getElementById('reader-content-root');
  if (!container) return;

  if (AppState.readerStep === 'intro') {
    renderReaderIntro(container, ch);
  } else if (AppState.readerStep === 'narrative') {
    renderReaderNarrative(container, ch);
  } else if (AppState.readerStep === 'decision') {
    renderReaderDecision(container, ch);
  } else if (AppState.readerStep === 'impact') {
    renderReaderImpact(container, ch);
  } else if (AppState.readerStep === 'insight') {
    renderReaderInsight(container, ch);
  } else if (AppState.readerStep === 'completion') {
    renderReaderCompletion(container, ch);
  }
}

// Phase 1: Intro Screen (Image 5, 11)
function renderReaderIntro(container, ch) {
  container.innerHTML = `
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
      <button class="btn btn-secondary" onclick="switchTab('daftar-bab')">
        ← Kembali ke Pilih Cerita
      </button>
      <div style="font-size: 0.75rem; color: var(--text-secondary);">
        ● ○ ○ ○ ○ Lembaran 01 dari 05 · Pengantar Bab
      </div>
    </div>

    <div class="reader-split">
      <div class="card reader-media-col">
        <div style="aspect-ratio: 3/4; overflow: hidden; background: #2a241f;">
          <img src="${ch.image}" alt="${ch.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 1rem; border-top: 1px solid var(--border); font-size: 0.75rem; display: flex; justify-content: space-between;">
          <span>🕒 ${ch.sceneTime} · ${ch.sceneLocation}</span>
          <span style="color: var(--text-muted);">Sketsa Lembaran Pagi</span>
        </div>
      </div>

      <div>
        <div style="font-size: 0.75rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;">
          📖 ${ch.number} · Resonansi Emosi
        </div>
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">
          ${ch.number} — ${ch.title}
        </h1>
        <p style="font-family: var(--font-serif); font-style: italic; font-size: 1.05rem; border-left: 2px solid var(--primary-accent); padding-left: 1rem; margin-bottom: 1.25rem;">
          ${ch.prologueQuote}
        </p>
        <p style="font-size: 0.875rem; line-height: 1.6; margin-bottom: 1.5rem;">
          ${ch.prologueText}
        </p>

        <div style="margin-bottom: 1.5rem;">
          <div style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.75rem;">
            Tokoh yang Hadir di Bab Ini (${ch.characters.length} Karakter)
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
            ${ch.characters.map(c => `
              <div class="card" style="padding: 0.75rem; display: flex; align-items: center; gap: 0.75rem;">
                <div style="width: 2.25rem; height: 2.25rem; border-radius: 50%; background: ${c.color}; color: #3e3934; display: flex; align-items: center; justify-content: center; font-weight: 700;">
                  ${c.name.charAt(0)}
                </div>
                <div>
                  <div style="font-weight: 600; font-size: 0.8125rem;">${c.name}</div>
                  <div style="font-size: 0.6875rem; color: var(--text-secondary);">${c.role} · ${c.age}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background-color: var(--sage-bg); border: 1px solid rgba(168,181,154,0.4); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem;">
          <div style="font-size: 0.75rem; font-weight: 700; color: #3d5232; text-transform: uppercase; margin-bottom: 0.35rem;">
            🍃 Ruang Bernapas Sebelum Membaca
          </div>
          <p style="font-size: 0.8125rem; color: var(--text-secondary);">
            ${ch.breathingPrompt}
          </p>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.75rem; color: var(--text-secondary);">Estimasi baca: ${ch.duration} per alur</span>
          <button class="btn btn-primary" onclick="setReaderStep('narrative')">
            Mulai Cerita →
          </button>
        </div>
      </div>
    </div>
  `;
}

// Phase 2: Narrative & Dialogue Screen (Image 4, 12)
function renderReaderNarrative(container, ch) {
  container.innerHTML = `
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
      <button class="btn btn-secondary" onclick="setReaderStep('intro')">
        ← Kembali ke Intro Bab
      </button>
      <div style="font-size: 0.75rem; color: var(--text-secondary);">
        📖 Fase Narasi: ${ch.number} Cerita & Dialog · Estimasi ${ch.duration}
      </div>
    </div>

    <div class="reader-split">
      <div class="card reader-media-col">
        <div style="aspect-ratio: 4/3; overflow: hidden; background: #2a241f;">
          <img src="${ch.image}" alt="${ch.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 1rem; font-size: 0.75rem; background: var(--surface);">
          <div style="margin-bottom: 0.5rem; font-style: italic;">🔊 ${ch.narrativeScene.ambientSoundLabel}</div>
          <div style="border-top: 1px solid var(--border); padding-top: 0.5rem; color: var(--text-muted); display: flex; justify-content: space-between;">
            <span>${ch.narrativeScene.perspectiveTag}</span>
            <span>Lembar 1 dari 4</span>
          </div>
        </div>
      </div>

      <div>
        <div class="card" style="padding: 1.25rem; margin-bottom: 1.25rem;">
          <div style="font-size: 0.6875rem; font-weight: 700; color: var(--primary-accent); margin-bottom: 0.5rem; text-transform: uppercase;">
            ${ch.narrativeScene.situationKicker}
          </div>
          <p style="font-family: var(--font-serif); font-size: 1rem; line-height: 1.6; font-style: italic; color: var(--text-primary);">
            “${ch.narrativeScene.situationText}”
          </p>
        </div>

        <div style="margin-bottom: 1.25rem;">
          ${ch.narrativeScene.dialogues.map(d => `
            <div class="dialogue-bubble">
              <div class="dialogue-speaker">
                <div class="speaker-avatar">${d.speaker.charAt(0)}</div>
                <div>
                  <div style="font-size: 0.8125rem; font-weight: 600;">${d.speaker}</div>
                  <div style="font-size: 0.6875rem; color: var(--text-secondary);">${d.role}</div>
                </div>
              </div>
              <div class="dialogue-text">${d.text}</div>
              ${d.emotion ? `<div style="font-size: 0.6875rem; color: var(--text-muted); font-style: italic; padding-left: 2.25rem; margin-top: 0.35rem;">· ${d.emotion}</div>` : ''}
            </div>
          `).join('')}
        </div>

        <div class="card" style="padding: 1rem; background-color: #fff8eb; border-color: rgba(245,158,11,0.3); margin-bottom: 1.25rem;">
          <div style="font-size: 0.6875rem; font-weight: 700; color: #b45309; text-transform: uppercase; margin-bottom: 0.25rem;">
            Catatan Dinamika Emosi
          </div>
          <p style="font-size: 0.8125rem; color: var(--text-secondary);">
            ${ch.narrativeScene.emotionNote}
          </p>
        </div>

        <div style="background-color: var(--sage-bg); border: 1px solid rgba(168,181,154,0.4); border-radius: var(--radius-md); padding: 1rem; font-size: 0.8125rem; margin-bottom: 1.5rem;">
          💡 <strong>Tips Kesadaran:</strong> ${ch.narrativeScene.psychologyTip}
        </div>

        <div class="card" style="padding: 1.25rem; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted);">
              Langkah Berikutnya:
            </div>
            <div style="font-family: var(--font-serif); font-weight: 700; font-size: 0.9375rem;">
              Pilih Respon Pengasuhan
            </div>
          </div>
          <button class="btn btn-primary" onclick="setReaderStep('decision')">
            Lanjut ke Pilihan Respons →
          </button>
        </div>
      </div>
    </div>
  `;
}

// Phase 3: Decision Screen (Image 13, 23)
function renderReaderDecision(container, ch) {
  container.innerHTML = `
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
      <button class="btn btn-secondary" onclick="setReaderStep('narrative')">
        ← Kembali ke Cerita ${ch.number}
      </button>
      <div style="font-size: 0.75rem; color: var(--text-secondary);">
        ● ● ○ ○ Langkah Interaktif 02 · Titik Keputusan
      </div>
    </div>

    <div class="reader-split">
      <div class="card reader-media-col" style="padding: 1.25rem;">
        <div style="aspect-ratio: 4/3; overflow: hidden; border-radius: var(--radius-md); background: #2a241f; margin-bottom: 1rem;">
          <img src="${ch.image}" alt="${ch.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; color: var(--primary-accent); margin-bottom: 0.35rem;">
          Situasi Saat Ini
        </div>
        <p style="font-size: 0.8125rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 1rem;">
          ${ch.decisionPrompt.situationRecap}
        </p>
        <div style="border-top: 1px solid var(--border); padding-top: 0.75rem; font-size: 0.6875rem; color: var(--text-muted); display: flex; justify-content: space-between;">
          <span>Hadirkan napas tenang sejenak</span>
          <span>Refleksi #${ch.number}</span>
        </div>
      </div>

      <div>
        <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--primary); margin-bottom: 0.5rem;">
          Eksplorasi Sudut Pandang Pengasuhan
        </div>
        <h2 style="font-size: 1.85rem; margin-bottom: 0.5rem;">
          ${ch.decisionPrompt.question}
        </h2>
        <p style="font-size: 0.875rem; margin-bottom: 1.5rem;">
          Setiap respon membawa nuansa berbeda bagi batin anak. Pilih tindakan yang ingin Anda telusuri:
        </p>

        <div style="margin-bottom: 1.5rem;">
          ${ch.decisionPrompt.choices.map(c => `
            <div class="choice-card" onclick="selectChoiceAndImpact('${c.id}')">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.6rem; background: var(--surface-subtle); border-radius: var(--radius-sm); color: var(--primary);">
                  Pilihan ${c.id}
                </span>
                <span style="font-size: 0.75rem; font-weight: 600; color: var(--primary);">
                  Telusuri alur ini →
                </span>
              </div>
              <p style="font-family: var(--font-serif); font-size: 1.05rem; font-style: italic; margin-bottom: 0.75rem; color: var(--text-primary);">
                ${c.quote}
              </p>
              <div style="font-size: 0.75rem; color: var(--text-secondary); border-top: 1px solid var(--border); padding-top: 0.5rem;">
                ✨ ${c.hint}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="card" style="padding: 1rem; background-color: var(--surface); font-size: 0.8125rem;">
          🛡️ <strong>Ruang Belajar yang Aman:</strong> Tidak ada penilaian mutlak dalam pengasuhan. Cerita ini dirancang sebagai cermin interaktif untuk mengamati dinamika batin anak dan orang tua secara utuh, jujur, dan penuh penerimaan.
        </div>
      </div>
    </div>
  `;
}

// Phase 4: Impact Screen (Images 6, 8, 14, 15, 25)
function renderReaderImpact(container, ch) {
  const impact = ch.impacts[AppState.selectedChoiceId];

  container.innerHTML = `
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
      <button class="btn btn-secondary" onclick="setReaderStep('decision')">
        ← Kembali ke Pilihan
      </button>
      <div style="font-size: 0.75rem; color: var(--text-secondary);">
        ● ● ● ○ ${ch.number} · Telaah Respons Opsi ${AppState.selectedChoiceId}
      </div>
    </div>

    <div class="card" style="padding: 1.5rem; margin-bottom: 2rem;">
      <div style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; color: var(--primary); margin-bottom: 0.5rem;">
        Kutipan Respons Terpilih (Opsi ${AppState.selectedChoiceId})
      </div>
      <p style="font-family: var(--font-serif); font-size: 1.35rem; font-style: italic; color: var(--text-primary); margin: 0;">
        ${impact.quote}
      </p>
    </div>

    <div style="margin-bottom: 2rem;">
      <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--primary); margin-bottom: 0.35rem;">
        Membaca Dinamika Hati
      </div>
      <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">
        Dampak Respons
      </h2>
      <p style="font-size: 0.875rem; max-width: 600px;">
        Setiap perkataan orang tua adalah cermin bagi anak. Mari menyusuri apa yang berdenyut di balik momen ini dengan welas asih dan kejernihan nurani.
      </p>
    </div>

    <div class="card" style="padding: 1.5rem; display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem;">
      <div style="width: 6rem; height: 6rem; border-radius: var(--radius-md); overflow: hidden; flex-shrink: 0; background: #2a241f;">
        <img src="${ch.image}" alt="Ekspresi" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div>
        <div style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; color: var(--primary-accent); margin-bottom: 0.25rem;">
          Kondisi Anak Saat Ini
        </div>
        <h3 style="font-size: 1.25rem; margin-bottom: 0.35rem;">
          ${impact.expressionTitle}
        </h3>
        <p style="font-size: 0.8125rem;">
          ${impact.expressionDesc}
        </p>
      </div>
    </div>

    <div class="impact-columns-grid">
      <div class="impact-col">
        <div>
          <div style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; color: #b45309; margin-bottom: 0.5rem;">
            1. Reaksi & Gejala Alami
          </div>
          <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">${impact.whatHappens.title}</h4>
          <p style="font-size: 0.8125rem; line-height: 1.5; margin-bottom: 1rem;">${impact.whatHappens.desc}</p>
        </div>
        <div style="font-size: 0.6875rem; color: var(--text-muted); font-style: italic; border-top: 1px solid var(--border); padding-top: 0.75rem;">
          ${impact.whatHappens.subNote}
        </div>
      </div>

      <div class="impact-col">
        <div>
          <div style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; color: var(--primary-accent); margin-bottom: 0.5rem;">
            2. Landasan Psikologis
          </div>
          <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">${impact.whyPsychology.title}</h4>
          <p style="font-size: 0.8125rem; line-height: 1.5; margin-bottom: 1rem;">${impact.whyPsychology.desc}</p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; border-top: 1px solid var(--border); padding-top: 0.75rem;">
          <span style="font-size: 0.625rem; padding: 0.2rem 0.5rem; background: var(--surface-subtle); border-radius: var(--radius-sm);">${impact.whyPsychology.tagNeed}</span>
          <span style="font-size: 0.625rem; padding: 0.2rem 0.5rem; background: rgba(217,185,155,0.25); border-radius: var(--radius-sm); color: var(--primary);">${impact.whyPsychology.tagRole}</span>
        </div>
      </div>

      <div class="impact-col sage-highlight">
        <div>
          <div style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; color: #3d5232; margin-bottom: 0.5rem;">
            3. Langkah Nyata
          </div>
          <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">${impact.recommendation.title}</h4>
          <p style="font-size: 0.8125rem; line-height: 1.5; margin-bottom: 0.75rem;">${impact.recommendation.desc}</p>
          <ul style="padding-left: 1.25rem; font-size: 0.75rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 1rem;">
            ${impact.recommendation.points.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
        <div style="font-size: 0.6875rem; color: var(--text-muted); font-style: italic; border-top: 1px solid rgba(168,181,154,0.3); padding-top: 0.75rem;">
          Langkah kesadaran kecil bermakna besar
        </div>
      </div>
    </div>

    <div class="card" style="padding: 1.25rem 1.5rem; display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
      <div>
        <div style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted);">
          Koneksi Emosional Anak & Orang Tua
        </div>
        <div style="font-family: var(--font-serif); font-size: 1.15rem; font-weight: 700;">
          ${impact.score.label}
        </div>
      </div>
      <div style="text-align: right; display: flex; align-items: center; gap: 1rem;">
        <div>
          <div style="font-size: 0.625rem; color: var(--text-muted); text-transform: uppercase;">Kedalaman Rasa</div>
          <div style="font-weight: 600; font-size: 0.8125rem;">${impact.score.depth}</div>
        </div>
        <div style="width: 3rem; height: 3rem; border-radius: 50%; border: 3px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-weight: 700; font-size: 0.875rem; color: var(--primary);">
          ${impact.score.percent}%
        </div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; border-top: 1px solid var(--border); padding-top: 1.5rem;">
      <button class="btn btn-secondary" onclick="setReaderStep('decision')">
        ← Kembali ke Pilihan
      </button>
      <button class="btn btn-primary" onclick="setReaderStep('insight')">
        Lanjutkan ke Insight Parenting →
      </button>
    </div>
  `;
}

// Phase 5: Insight Screen (Images 9, 19)
function renderReaderInsight(container, ch) {
  container.innerHTML = `
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
      <button class="btn btn-secondary" onclick="setReaderStep('impact')">
        ← Kembali ke Dampak Respons
      </button>
      <div style="font-size: 0.75rem; color: var(--text-secondary);">
        ● ● ● ● ${ch.number} · Catatan Kedamaian Hati
      </div>
    </div>

    <div style="text-align: center; max-width: 600px; margin: 0 auto 2.5rem auto;">
      <div style="font-size: 0.75rem; font-weight: 600; color: var(--primary); padding: 0.25rem 0.75rem; background: rgba(217,185,155,0.25); border-radius: var(--radius-full); display: inline-block; margin-bottom: 0.75rem;">
        Renungan Harian Ayah & Ibu
      </div>
      <h2 style="font-size: 2.25rem; margin-bottom: 0.5rem;">Insight untuk Orang Tua</h2>
      <p style="font-size: 0.875rem;">Secarik renungan dari perjalanan emosi mendampingi buah hati hari ini.</p>
    </div>

    <div class="card" style="padding: 2.5rem 1.5rem; text-align: center; margin-bottom: 2rem;">
      <div style="font-family: var(--font-serif); font-size: 3rem; color: rgba(185,130,98,0.3); line-height: 1; margin-bottom: 0.5rem;">“</div>
      <p style="font-family: var(--font-serif); font-size: 1.65rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; max-width: 580px; margin-left: auto; margin-right: auto;">
        ${ch.insight.quote}
      </p>
      <p style="font-size: 0.9375rem; max-width: 500px; margin: 0 auto; line-height: 1.6;">
        ${ch.insight.desc}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
      <div class="card" style="padding: 1.5rem;">
        <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--primary); margin-bottom: 0.5rem;">
          💖 ${ch.insight.card1Title}
        </div>
        <p style="font-size: 0.875rem; line-height: 1.6;">
          ${ch.insight.card1Desc}
        </p>
      </div>

      <div class="card" style="padding: 1.5rem;">
        <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--primary); margin-bottom: 0.5rem;">
          🍃 ${ch.insight.card2Title}
        </div>
        <p style="font-size: 0.875rem; line-height: 1.6;">
          ${ch.insight.card2Desc}
        </p>
      </div>
    </div>

    <div class="breathe-card">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div class="breathe-circle-anim" id="reader-breathe-circle">
          <span id="reader-breathe-text">4s</span>
        </div>
        <div>
          <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #3d5232; margin-bottom: 0.25rem;">
            Latihan Jeda & Bernapas Penuh Kesadaran
          </div>
          <p style="font-size: 0.8125rem; color: var(--text-secondary); max-width: 420px;" id="reader-breathe-desc">
            Tarik napas lembut selama 4 detik, tahan sejenak, dan embuskan perlahan sebelum merespons buah hati.
          </p>
        </div>
      </div>
      <button class="btn btn-secondary" id="reader-breathe-btn" onclick="toggleReaderBreathing()">
        Coba Sekarang
      </button>
    </div>

    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; border-top: 1px solid var(--border); padding-top: 2rem;">
      <button class="btn btn-primary" onclick="setReaderStep('completion')">
        Lanjutkan Cerita →
      </button>
      <button class="btn btn-secondary" onclick="setReaderStep('decision')">
        ↺ Lihat Kembali Alur ${ch.number}
      </button>
    </div>
  `;
}

// Phase 6: Completion Screen (Image 17, 19)
function renderReaderCompletion(container, ch) {
  const nextIdx = CHAPTERS_DATA.findIndex(c => c.id === ch.id) + 1;
  const nextChapter = CHAPTERS_DATA[nextIdx];

  container.innerHTML = `
    <div style="text-align: center; max-width: 600px; margin: 0 auto 2rem auto;">
      <div style="font-size: 0.75rem; font-weight: 600; color: #166534; padding: 0.25rem 0.75rem; background: rgba(34,197,94,0.15); border-radius: var(--radius-full); display: inline-block; margin-bottom: 0.75rem;">
        ✓ Momen Refleksi · Catatan Lembaran
      </div>
      <h2 style="font-size: 2.25rem; margin-bottom: 0.5rem;">${ch.completion.title}</h2>
      <p style="font-family: var(--font-serif); font-size: 1.15rem; font-style: italic;">${ch.completion.reflection}</p>
    </div>

    <div class="card" style="aspect-ratio: 16/9; overflow: hidden; margin-bottom: 2rem;">
      <img src="/assets/images/family_reading_couch.jpg" alt="Keluarga Damai" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <div style="margin-bottom: 2rem;">
      <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--primary); margin-bottom: 1rem;">
        Petikan Hikmah yang Kamu Temukan di ${ch.number}:
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
        <div class="card" style="padding: 1.5rem;">
          <div style="font-size: 1.5rem; font-family: var(--font-serif); font-weight: 700; color: var(--primary-accent); margin-bottom: 0.25rem;">01</div>
          <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Dengarkan emosinya.</h4>
          <p style="font-size: 0.8125rem; line-height: 1.5; margin-bottom: 1rem;">
            Berikan ruang bagi anak untuk menyampaikan perasaannya sebelum meminta mereka bergerak cepat.
          </p>
          <div style="font-size: 0.75rem; color: #166534; font-weight: 600;">✓ Meredakan badai hati tanpa menghakiminya</div>
        </div>

        <div class="card" style="padding: 1.5rem;">
          <div style="font-size: 1.5rem; font-family: var(--font-serif); font-weight: 700; color: var(--primary-accent); margin-bottom: 0.25rem;">02</div>
          <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Berikan pilihan sederhana.</h4>
          <p style="font-size: 0.8125rem; line-height: 1.5; margin-bottom: 1rem;">
            Anak bisa belajar mengambil keputusan tanpa merasa kehilangan kendali diri ketika diberi opsi terarah.
          </p>
          <div style="font-size: 0.75rem; color: #166534; font-weight: 600;">✓ Membangun rasa aman dan otonomi si kecil</div>
        </div>
      </div>
    </div>

    <div class="card" style="padding: 1.5rem; text-align: center; margin-bottom: 2rem;">
      <p style="font-family: var(--font-serif); font-style: italic; font-size: 1.05rem; margin: 0;">
        ${ch.completion.closingQuote}
      </p>
    </div>

    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
      <button class="btn btn-secondary" onclick="switchTab('daftar-bab')">
        📖 Kembali ke Pilih Cerita
      </button>
      ${nextChapter ? `
        <button class="btn btn-primary" onclick="openChapter('${nextChapter.id}')">
          Buka Bab Berikutnya (${nextChapter.number}) →
        </button>
      ` : ''}
    </div>
  `;
}

function setReaderStep(stepName) {
  if (!AppState.isLampLit) {
    promptTurnOnLamp(AppState.activeChapterId);
    return;
  }
  AppState.readerStep = stepName;
  renderReaderStep();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectChoiceAndImpact(choiceId) {
  if (!AppState.isLampLit) {
    promptTurnOnLamp(AppState.activeChapterId);
    return;
  }
  AppState.selectedChoiceId = choiceId;
  setReaderStep('impact');
}

// Guided breathing state on insight step
let readerBreathingTimer = null;
let readerBreatheSec = 4;
let readerBreathePhase = 'Tarik Napas';

function toggleReaderBreathing() {
  const circle = document.getElementById('reader-breathe-circle');
  const text = document.getElementById('reader-breathe-text');
  const desc = document.getElementById('reader-breathe-desc');
  const btn = document.getElementById('reader-breathe-btn');

  if (readerBreathingTimer) {
    clearInterval(readerBreathingTimer);
    readerBreathingTimer = null;
    if (circle) circle.classList.remove('pulsing');
    if (text) text.textContent = '4s';
    if (btn) btn.textContent = 'Coba Sekarang';
    if (desc) desc.textContent = 'Tarik napas lembut selama 4 detik, tahan sejenak, dan embuskan perlahan.';
    return;
  }

  if (btn) btn.textContent = 'Selesai';
  readerBreatheSec = 4;
  readerBreathePhase = 'Tarik Napas';

  readerBreathingTimer = setInterval(() => {
    readerBreatheSec--;
    if (readerBreatheSec <= 0) {
      if (readerBreathePhase === 'Tarik Napas') {
        readerBreathePhase = 'Tahan';
        if (circle) circle.classList.add('pulsing');
      } else if (readerBreathePhase === 'Tahan') {
        readerBreathePhase = 'Embuskan';
        if (circle) circle.classList.remove('pulsing');
      } else {
        readerBreathePhase = 'Tarik Napas';
      }
      readerBreatheSec = 4;
    }

    if (text) text.textContent = `${readerBreatheSec}s`;
    if (desc) desc.textContent = `${readerBreathePhase} — Rasakan ketenangan menjalar ke seluruh tubuh.`;
  }, 1000);
}

// =============================================================================
// 8. PERSONAL REFLECTION JOURNAL
// =============================================================================

function initJournal() {
  try {
    const saved = localStorage.getItem('parentmind_journal_entries');
    if (saved) {
      AppState.journalEntries = JSON.parse(saved);
    } else {
      AppState.journalEntries = [
        {
          id: '1',
          date: 'Hari Ini, 20.15 WIB',
          child: 'Lila (5 thn)',
          moment: 'Ketika Lila menolak merapikan balok kayu sebelum tidur.',
          lesson: 'Alih-alih menyuruh dengan nada tinggi, aku ikut duduk di lantai dan kami bernyanyi sambil membereskan bersama. Hati terasa jauh lebih damai.'
        }
      ];
    }
  } catch (e) {
    AppState.journalEntries = [];
  }
  renderJournalEntries();
}

function saveJournalEntry(child, moment, lesson) {
  const newEntry = {
    id: Date.now().toString(),
    date: new Date().toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }) + ' WIB',
    child: child || 'Si Kecil',
    moment: moment,
    lesson: lesson || 'Hadir dan mendengarkan dengan penuh penerimaan.'
  };

  AppState.journalEntries.unshift(newEntry);
  localStorage.setItem('parentmind_journal_entries', JSON.stringify(AppState.journalEntries));
  renderJournalEntries();
}

function deleteJournalEntry(id) {
  AppState.journalEntries = AppState.journalEntries.filter(e => e.id !== id);
  localStorage.setItem('parentmind_journal_entries', JSON.stringify(AppState.journalEntries));
  renderJournalEntries();
}

function renderJournalEntries() {
  const container = document.getElementById('journal-entries-list');
  if (!container) return;

  if (AppState.journalEntries.length === 0) {
    container.innerHTML = `
      <div class="card" style="padding: 2rem; text-align: center; color: var(--text-secondary); font-size: 0.8125rem;">
        Belum ada catatan refleksi tersimpan. Tuliskan momen pertama Anda di atas.
      </div>
    `;
    return;
  }

  container.innerHTML = AppState.journalEntries.map(e => `
    <div class="card" style="padding: 1.25rem; margin-bottom: 1rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
        <span style="font-weight: 700; color: var(--primary); font-size: 0.875rem;">${e.child}</span>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 0.6875rem; color: var(--text-muted);">${e.date}</span>
          <button style="color: var(--text-muted); font-size: 0.75rem;" onclick="deleteJournalEntry('${e.id}')">✕</button>
        </div>
      </div>
      <p style="font-family: var(--font-serif); font-size: 0.9375rem; color: var(--text-primary); margin-bottom: 0.5rem;">
        ${e.moment}
      </p>
      <div style="font-size: 0.75rem; color: var(--text-secondary); border-top: 1px solid var(--border); padding-top: 0.5rem;">
        ✨ ${e.lesson}
      </div>
    </div>
  `).join('');
}

// Global Journal Breathing Exercise
let globalBreatheTimer = null;
let globalBreatheSec = 4;
let globalBreathePhase = 'Tarik Napas';

function toggleGlobalBreathing() {
  const circle = document.getElementById('global-breathe-circle');
  const text = document.getElementById('global-breathe-text');
  const btn = document.getElementById('global-breathe-btn');

  if (globalBreatheTimer) {
    clearInterval(globalBreatheTimer);
    globalBreatheTimer = null;
    if (circle) circle.classList.remove('pulsing');
    if (text) text.innerHTML = `<span>Mulai</span>`;
    if (btn) btn.textContent = 'Mulai Latihan Napas Sekarang';
    return;
  }

  if (btn) btn.textContent = 'Hentikan Latihan';
  globalBreatheSec = 4;
  globalBreathePhase = 'Tarik Napas';

  globalBreatheTimer = setInterval(() => {
    globalBreatheSec--;
    if (globalBreatheSec <= 0) {
      if (globalBreathePhase === 'Tarik Napas') {
        globalBreathePhase = 'Tahan';
        if (circle) circle.classList.add('pulsing');
      } else if (globalBreathePhase === 'Tahan') {
        globalBreathePhase = 'Embuskan';
        if (circle) circle.classList.remove('pulsing');
      } else {
        globalBreathePhase = 'Tarik Napas';
      }
      globalBreatheSec = 4;
    }

    if (text) {
      text.innerHTML = `
        <span style="font-size: 1rem; font-family: var(--font-serif);">${globalBreathePhase}</span>
        <span style="font-size: 0.75rem; opacity: 0.9;">${globalBreatheSec}s</span>
      `;
    }
  }, 1000);
}

// =============================================================================
// 9. EVENT LISTENERS SETUP
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initJournal();

  // Dark Mode Toggle
  const themeToggle = document.getElementById('btn-theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Ambience Toggle
  const ambienceToggle = document.getElementById('btn-ambience-toggle');
  if (ambienceToggle) {
    ambienceToggle.addEventListener('click', toggleAmbienceSound);
  }

  // Lamp Cord Pull Action
  const lampCord = document.getElementById('lamp-cord');
  const lampCordTrigger = document.getElementById('lamp-cord-trigger');
  const lampShade = document.querySelector('.lamp-shade');
  const lampStatusBtn = document.getElementById('lamp-status-btn');
  const btnTurnOnLamp = document.getElementById('btn-turn-on-lamp');

  if (lampCord) lampCord.addEventListener('click', handleLampPull);
  if (lampCordTrigger) lampCordTrigger.addEventListener('click', handleLampPull);
  if (lampShade) lampShade.addEventListener('click', handleLampPull);
  if (lampStatusBtn) lampStatusBtn.addEventListener('click', handleLampPull);
  if (btnTurnOnLamp) btnTurnOnLamp.addEventListener('click', () => setLampLit(true));

  // Navigation Links
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      const tab = e.currentTarget.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  // Category Filtering on Chapters Page
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const cat = e.currentTarget.getAttribute('data-category');

      document.querySelectorAll('.chapter-card-item').forEach((card) => {
        if (cat === 'Semua' || card.getAttribute('data-category') === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Booklet Modal Triggers
  const bookletModal = document.getElementById('booklet-modal');
  const openBookletBtns = document.querySelectorAll('.trigger-open-booklet');
  const closeBookletBtns = document.querySelectorAll('.trigger-close-booklet');

  openBookletBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (bookletModal) bookletModal.classList.add('open');
    });
  });

  closeBookletBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (bookletModal) bookletModal.classList.remove('open');
    });
  });

  if (bookletModal) {
    bookletModal.addEventListener('click', (e) => {
      if (e.target === bookletModal) bookletModal.classList.remove('open');
    });
  }

  // Print Booklet
  const printBtn = document.getElementById('btn-print-booklet');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  // Journal Form Submit
  const journalForm = document.getElementById('journal-form');
  if (journalForm) {
    journalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const childInput = document.getElementById('input-child');
      const momentInput = document.getElementById('input-moment');
      const lessonInput = document.getElementById('input-lesson');

      saveJournalEntry(
        childInput ? childInput.value : '',
        momentInput ? momentInput.value : '',
        lessonInput ? lessonInput.value : ''
      );

      if (childInput) childInput.value = '';
      if (momentInput) momentInput.value = '';
      if (lessonInput) lessonInput.value = '';
    });
  }

  // Journal Sub-tabs (Latihan Napas vs Jurnal vs Mutiara)
  document.querySelectorAll('.reflection-subtab-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.reflection-subtab-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const section = e.currentTarget.getAttribute('data-section');

      ['breathe', 'journal', 'quotes'].forEach(s => {
        const el = document.getElementById(`subtab-${s}`);
        if (el) {
          if (s === section) el.classList.remove('hidden');
          else el.classList.add('hidden');
        }
      });
    });
  });

  // Set initial lamp state to Lit
  setLampLit(true);
});

// Export helper to global scope for inline button handlers
window.switchTab = switchTab;
window.openChapter = openChapter;
window.setReaderStep = setReaderStep;
window.selectChoiceAndImpact = selectChoiceAndImpact;
window.toggleReaderBreathing = toggleReaderBreathing;
window.toggleGlobalBreathing = toggleGlobalBreathing;
window.deleteJournalEntry = deleteJournalEntry;

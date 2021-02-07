import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: 'Flashback',
      artist: 'Blue Wednesday, Shopan',
      cover: 'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a.jpg',
      color: ['#644C71', '#9BA6DC'],
      id: uuidv4(),
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11225',
      active: true
    },
    {
      name: 'Clocks Forward',
      artist: 'Psalm Trees, Guillaume Muschalle',
      cover: 'https://chillhop.com/wp-content/uploads/2020/07/db956cc3e3bb2d3725d0ce3f9aaf7190671c9451.jpg',
      color: ['#7B5933', '#BB7B81'],
      id: uuidv4(),
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8094',
      active: false
    },
    {
      name: 'Toofpick',
      artist: 'Blue Wednesday, Shopan',
      cover: 'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a.jpg',
      color: ['#644C71', '#9BA6DC'],
      id: uuidv4(),
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11227',
      active: false
    },
    {
      name: 'Lilo',
      artist: 'Middle School, The Field Tapes',
      cover: 'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69.jpg',
      color: ['#2D3146', '#8C92A1'],
      id: uuidv4(),
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11244',
      active: false
    },
    {
      name: 'Déjà Vu',
      artist: 'Blue Wednesday, Shopan',
      cover: 'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a.jpg',
      color: ['#644C71', '#9BA6DC'],
      id: uuidv4(),
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11229',
      active: false
    },
    {
      name: 'Lax Incense',
      artist: 'Mama Aiuto, Daphné',
      cover: 'https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4.jpg',
      color: ['#332525', '#6A8884'],
      id: uuidv4(),
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=12125',
      active: false
    },
    {
      name: 'Sprial',
      artist: 'Monma, Misha',
      cover: 'https://chillhop.com/wp-content/uploads/2020/07/2a048a5780723e66fff64c3a60814ea64761284f.jpg',
      color: ['#44223B', '#F4C3C6'],
      id: uuidv4(),
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8462',
      active: false
    },
    {
      name: 'Belly Breathing',
      artist: 'Birocratic',
      cover: 'https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e.jpg',
      color: ['#133B63', '#5F7298'],
      id: uuidv4(),
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8675',
      active: false
    }
  ]
}

export default chillHop;
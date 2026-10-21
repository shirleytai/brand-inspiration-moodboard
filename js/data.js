const ITEMS = [
  {
    "id": 1,
    "title": "古方茶食",
    "category": 3,
    "image": "images/01.jpg",
    "description": "細長手寫線條結合茶食意象，留白讓字形保持輕盈。",
    "source": "IMG_5087.JPG",
    "width": 466,
    "height": 613,
    "tags": [
      "自然",
      "筆觸感"
    ]
  },
  {
    "id": 2,
    "title": "Mountain Mist",
    "category": 2,
    "image": "images/02.jpg",
    "description": "山形筆觸與霧氣般的層次構成符號，搭配襯線英文呈現沉靜感。",
    "source": "IMG_5118.JPG",
    "width": 1200,
    "height": 800,
    "tags": [
      "自然",
      "筆觸感"
    ]
  },
  {
    "id": 3,
    "title": "陶器圖像",
    "category": 2,
    "image": "images/03.jpg",
    "description": "以器皿造型作為主角，簡約的黑色手繪圖像帶出日常感。",
    "source": "IMG_5088.JPG",
    "width": 1080,
    "height": 1440,
    "tags": [
      "自然",
      "筆觸感"
    ]
  },
  {
    "id": 4,
    "title": "旅人站",
    "category": 1,
    "image": "images/04.jpg",
    "description": "手寫字形大小錯落，筆勢帶出旅途中停留的輕快節奏。",
    "source": "IMG_5089.JPG",
    "width": 1200,
    "height": 673,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 5,
    "title": "芦席汇",
    "category": 2,
    "image": "images/05.jpg",
    "description": "以屋簷、水波與水平線條形成獨立圖形，呼應水鄉建築及地景；下方品牌文字與符號分開呈現。",
    "source": "IMG_5115.JPG",
    "width": 736,
    "height": 981,
    "tags": [
      "清爽",
      "簡約"
    ]
  },
  {
    "id": 6,
    "title": "埋金木工所",
    "category": 2,
    "image": "images/06.jpg",
    "description": "山形輪廓與圓點組成木工識別，兼具器物與自然聯想。",
    "source": "IMG_5090.JPG",
    "width": 1200,
    "height": 849,
    "tags": [
      "沉穩",
      "雅緻"
    ]
  },
  {
    "id": 7,
    "title": "山与",
    "category": 3,
    "image": "images/07.jpg",
    "description": "中文字與山形並置，以少量元素建立簡潔的視覺關係。",
    "source": "IMG_5091.JPG",
    "width": 474,
    "height": 284,
    "tags": [
      "沉穩",
      "雅緻"
    ]
  },
  {
    "id": 8,
    "title": "自然曲線符號",
    "category": 2,
    "image": "images/08.jpg",
    "description": "流動的曲線與圓點呼應自然地景，留白強化符號辨識。",
    "source": "IMG_5092.JPG",
    "width": 1000,
    "height": 648,
    "tags": [
      "自然",
      "筆觸感"
    ]
  },
  {
    "id": 9,
    "title": "小物哲學",
    "category": 1,
    "image": "images/09.jpg",
    "description": "直排手寫字搭配小型印記，呈現樸實且具人情味的氣質。",
    "source": "IMG_5093.JPG",
    "width": 500,
    "height": 667,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 10,
    "title": "酒香",
    "category": 3,
    "image": "images/10.jpg",
    "description": "細筆中文字保留書寫感，以簡潔排版維持清爽節奏。",
    "source": "IMG_5094.JPG",
    "width": 800,
    "height": 480,
    "tags": [
      "清爽",
      "簡約"
    ]
  },
  {
    "id": 11,
    "title": "湖畔 Lakeside",
    "category": 1,
    "image": "images/11.jpg",
    "description": "湖與畔字的疏密和垂直編排，形成安靜且細膩的文字識別。",
    "source": "IMG_5109.JPG",
    "width": 700,
    "height": 1048,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 12,
    "title": "小食記",
    "category": 1,
    "image": "images/12.jpg",
    "description": "不規則筆觸與小印記結合，以縱向構圖呈現手寫韻味。",
    "source": "IMG_5095.JPG",
    "width": 736,
    "height": 736,
    "tags": [
      "自然",
      "筆觸感"
    ]
  },
  {
    "id": 13,
    "title": "鹹花生 Salt Peanuts",
    "category": 2,
    "image": "images/13.jpg",
    "description": "人物輪廓結合植物般的頭部造型，搭配活潑字體呈現故事感。",
    "source": "IMG_5096.JPG",
    "width": 333,
    "height": 333,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 14,
    "title": "竹石 ZhuShi",
    "category": 3,
    "image": "images/14.jpg",
    "description": "將竹與石的意象融入字形，讓文字和建築般的輪廓互相呼應。",
    "source": "IMG_5098.JPG",
    "width": 327,
    "height": 327,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 15,
    "title": "小山村",
    "category": 1,
    "image": "images/15.jpg",
    "description": "山形融入粗筆中文字，簡潔的字面結構保留鄉間意象。",
    "source": "IMG_5099.JPG",
    "width": 600,
    "height": 600,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 16,
    "title": "森山耕藝",
    "category": 1,
    "image": "images/16.jpg",
    "description": "細線山形與手寫字並排，強調自然、耕作與工藝的連結。",
    "source": "IMG_5100.JPG",
    "width": 761,
    "height": 521,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 17,
    "title": "Daichi Fruit",
    "category": 2,
    "image": "images/17.jpg",
    "description": "以果實幾何構成與拆解說明，展示圖像和品牌命名之間的關係。",
    "source": "IMG_5101.JPG",
    "width": 1200,
    "height": 850,
    "tags": [
      "沉穩",
      "雅緻"
    ]
  },
  {
    "id": 18,
    "title": "樹間",
    "category": 3,
    "image": "images/18.jpg",
    "description": "樹木與人物般的手繪輪廓結合，在綠色攝影中呈現自然氣息。",
    "source": "IMG_5102.JPG",
    "width": 1077,
    "height": 649,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 19,
    "title": "太陽・自然・人",
    "category": 2,
    "image": "images/19.jpg",
    "description": "將太陽、自然與人的圖形分解後重組，直接呈現識別的概念來源。",
    "source": "IMG_5103.JPG",
    "width": 1200,
    "height": 1200,
    "tags": [
      "沉穩",
      "雅緻"
    ]
  },
  {
    "id": 20,
    "title": "WATERS / WILD",
    "category": 2,
    "image": "images/20.jpg",
    "description": "粗細不一的白色筆觸搭配木紋背景，以材質對比傳達自然感。",
    "source": "IMG_5104.JPG",
    "width": 736,
    "height": 920,
    "tags": [
      "清爽",
      "簡約"
    ]
  },
  {
    "id": 21,
    "title": "山海自然符號",
    "category": 2,
    "image": "images/21.jpg",
    "description": "山、水、太陽等元素以曲線與圓點組合，構成具流動感的地景。",
    "source": "IMG_5105.JPG",
    "width": 1199,
    "height": 1799,
    "tags": [
      "清爽",
      "簡約"
    ]
  },
  {
    "id": 22,
    "title": "笠光",
    "category": 3,
    "image": "images/22.jpg",
    "description": "以太陽、山形與水波組成獨立符號，透過水平線條與留白傳達自然、平靜的感受。",
    "source": "IMG_5106.JPG",
    "width": 1200,
    "height": 1500,
    "tags": [
      "沉穩",
      "雅緻"
    ]
  },
  {
    "id": 23,
    "title": "谷中 Beer Hall",
    "category": 3,
    "image": "images/23.jpg",
    "description": "以人物化的黑色手繪圖像呼應谷中 Beer Hall，搭配多語文字呈現趣味。",
    "source": "IMG_5097.JPG",
    "width": 1000,
    "height": 667,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 24,
    "title": "光景 SCENE",
    "category": 1,
    "image": "images/24.jpg",
    "description": "放射線與水平線抽象化光線和地平線，構圖清楚而輕盈。",
    "source": "IMG_5107.JPG",
    "width": 1200,
    "height": 1200,
    "tags": [
      "沉穩",
      "雅緻"
    ]
  },
  {
    "id": 25,
    "title": "月・樹・水概念",
    "category": 2,
    "image": "images/25.jpg",
    "description": "以月亮、樹木與水紋的拆解，說明圖形如何形成品牌符號。",
    "source": "IMG_5108.JPG",
    "width": 600,
    "height": 420,
    "tags": [
      "清爽",
      "簡約"
    ]
  },
  {
    "id": 26,
    "title": "屋頂",
    "category": 3,
    "image": "images/26.jpg",
    "description": "以屋頂般的山形輪廓作為獨立符號，細線與小型自然點景呈現安靜、樸實的氛圍。",
    "source": "IMG_5110.JPG",
    "width": 991,
    "height": 1200,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 27,
    "title": "GELATO 空間應用",
    "category": 2,
    "image": "images/27.jpg",
    "description": "細線山形符號應用於玻璃門面，透過攝影觀察標誌與空間關係。",
    "source": "IMG_5111.JPG",
    "width": 750,
    "height": 1124,
    "tags": [
      "清爽",
      "簡約"
    ]
  },
  {
    "id": 28,
    "title": "floresta",
    "category": 2,
    "image": "images/28.jpg",
    "description": "重複的樹形符號與細線方框呼應自然，搭配字體建立親切感。",
    "source": "IMG_5112.JPG",
    "width": 550,
    "height": 661,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 29,
    "title": "綠色山屋符號",
    "category": 2,
    "image": "images/29.jpg",
    "description": "綠色線條構成山屋般的符號，下方拆解自然與建築的視覺來源。",
    "source": "IMG_5113.JPG",
    "width": 1200,
    "height": 849,
    "tags": [
      "清爽",
      "簡約"
    ]
  },
  {
    "id": 30,
    "title": "樂光",
    "category": 2,
    "image": "images/30.jpg",
    "description": "以圓潤山形、太陽與水面曲線構成自然地景符號，再搭配手寫品牌名稱。",
    "source": "IMG_5114.JPG",
    "width": 1200,
    "height": 1200,
    "tags": [
      "親切",
      "手作感"
    ]
  },
  {
    "id": 31,
    "title": "茶字概念",
    "category": 3,
    "image": "images/31.jpg",
    "description": "水平筆畫和屋頂般的曲線構成字形，搭配拆解圖說明視覺概念。",
    "source": "IMG_5116.JPG",
    "width": 1200,
    "height": 943,
    "tags": [
      "清爽",
      "簡約"
    ]
  },
  {
    "id": 32,
    "title": "草山木川",
    "category": 1,
    "image": "images/32.jpg",
    "description": "將草、山、木、川分別以手寫與圖像呈現，強調字形的自然聯想。",
    "source": "IMG_5117.JPG",
    "width": 703,
    "height": 590,
    "tags": [
      "自然",
      "筆觸感"
    ]
  },
  {
    "id": 33,
    "title": "山形圖像",
    "category": 2,
    "image": "images/33.jpg",
    "description": "層疊山形結合流動曲線，黑白對比帶出地景輪廓與留白。",
    "source": "IMG_5119.JPG",
    "width": 600,
    "height": 600,
    "tags": [
      "親切",
      "手作感"
    ]
  }
];

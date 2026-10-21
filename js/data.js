const ITEMS = [
  {
    "id": 1,
    "title": "古方茶食",
    "category": "brand",
    "image": "images/01.jpg",
    "description": "細長手寫線條結合茶食意象，留白讓字形保持輕盈。",
    "source": "IMG_5087.JPG",
    "width": 466,
    "height": 613,
    "tags": [
      "自然",
      "筆觸感"
    ],
    "subcategory": "3"
  },
  {
    "id": 2,
    "title": "Mountain Mist",
    "category": "brand",
    "image": "images/02.jpg",
    "description": "山形筆觸與霧氣般的層次構成符號，搭配襯線英文呈現沉靜感。",
    "source": "IMG_5118.JPG",
    "width": 1200,
    "height": 800,
    "tags": [
      "自然",
      "筆觸感"
    ],
    "subcategory": "2"
  },
  {
    "id": 3,
    "title": "陶器圖像",
    "category": "brand",
    "image": "images/03.jpg",
    "description": "以器皿造型作為主角，簡約的黑色手繪圖像帶出日常感。",
    "source": "IMG_5088.JPG",
    "width": 1080,
    "height": 1440,
    "tags": [
      "自然",
      "筆觸感"
    ],
    "subcategory": "2"
  },
  {
    "id": 4,
    "title": "旅人站",
    "category": "brand",
    "image": "images/04.jpg",
    "description": "手寫字形大小錯落，筆勢帶出旅途中停留的輕快節奏。",
    "source": "IMG_5089.JPG",
    "width": 1200,
    "height": 673,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "1"
  },
  {
    "id": 5,
    "title": "芦席汇",
    "category": "brand",
    "image": "images/05.jpg",
    "description": "以屋簷、水波與水平線條形成獨立圖形，呼應水鄉建築及地景；下方品牌文字與符號分開呈現。",
    "source": "IMG_5115.JPG",
    "width": 736,
    "height": 981,
    "tags": [
      "清爽",
      "簡約"
    ],
    "subcategory": "2"
  },
  {
    "id": 6,
    "title": "埋金木工所",
    "category": "brand",
    "image": "images/06.jpg",
    "description": "山形輪廓與圓點組成木工識別，兼具器物與自然聯想。",
    "source": "IMG_5090.JPG",
    "width": 1200,
    "height": 849,
    "tags": [
      "沉穩",
      "雅緻"
    ],
    "subcategory": "2"
  },
  {
    "id": 7,
    "title": "山与",
    "category": "brand",
    "image": "images/07.jpg",
    "description": "中文字與山形並置，以少量元素建立簡潔的視覺關係。",
    "source": "IMG_5091.JPG",
    "width": 474,
    "height": 284,
    "tags": [
      "沉穩",
      "雅緻"
    ],
    "subcategory": "3"
  },
  {
    "id": 8,
    "title": "自然曲線符號",
    "category": "brand",
    "image": "images/08.jpg",
    "description": "流動的曲線與圓點呼應自然地景，留白強化符號辨識。",
    "source": "IMG_5092.JPG",
    "width": 1000,
    "height": 648,
    "tags": [
      "自然",
      "筆觸感"
    ],
    "subcategory": "2"
  },
  {
    "id": 9,
    "title": "小物哲學",
    "category": "brand",
    "image": "images/09.jpg",
    "description": "直排手寫字搭配小型印記，呈現樸實且具人情味的氣質。",
    "source": "IMG_5093.JPG",
    "width": 500,
    "height": 667,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "1"
  },
  {
    "id": 10,
    "title": "酒香",
    "category": "brand",
    "image": "images/10.jpg",
    "description": "細筆中文字保留書寫感，以簡潔排版維持清爽節奏。",
    "source": "IMG_5094.JPG",
    "width": 800,
    "height": 480,
    "tags": [
      "清爽",
      "簡約"
    ],
    "subcategory": "3"
  },
  {
    "id": 11,
    "title": "湖畔 Lakeside",
    "category": "brand",
    "image": "images/11.jpg",
    "description": "湖與畔字的疏密和垂直編排，形成安靜且細膩的文字識別。",
    "source": "IMG_5109.JPG",
    "width": 700,
    "height": 1048,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "1"
  },
  {
    "id": 12,
    "title": "小食記",
    "category": "brand",
    "image": "images/12.jpg",
    "description": "不規則筆觸與小印記結合，以縱向構圖呈現手寫韻味。",
    "source": "IMG_5095.JPG",
    "width": 736,
    "height": 736,
    "tags": [
      "自然",
      "筆觸感"
    ],
    "subcategory": "1"
  },
  {
    "id": 13,
    "title": "鹹花生 Salt Peanuts",
    "category": "brand",
    "image": "images/13.jpg",
    "description": "人物輪廓結合植物般的頭部造型，搭配活潑字體呈現故事感。",
    "source": "IMG_5096.JPG",
    "width": 333,
    "height": 333,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "2"
  },
  {
    "id": 14,
    "title": "竹石 ZhuShi",
    "category": "brand",
    "image": "images/14.jpg",
    "description": "將竹與石的意象融入字形，讓文字和建築般的輪廓互相呼應。",
    "source": "IMG_5098.JPG",
    "width": 327,
    "height": 327,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "3"
  },
  {
    "id": 15,
    "title": "小山村",
    "category": "brand",
    "image": "images/15.jpg",
    "description": "山形融入粗筆中文字，簡潔的字面結構保留鄉間意象。",
    "source": "IMG_5099.JPG",
    "width": 600,
    "height": 600,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "1"
  },
  {
    "id": 16,
    "title": "森山耕藝",
    "category": "brand",
    "image": "images/16.jpg",
    "description": "細線山形與手寫字並排，強調自然、耕作與工藝的連結。",
    "source": "IMG_5100.JPG",
    "width": 761,
    "height": 521,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "1"
  },
  {
    "id": 17,
    "title": "Daichi Fruit",
    "category": "brand",
    "image": "images/17.jpg",
    "description": "以果實幾何構成與拆解說明，展示圖像和品牌命名之間的關係。",
    "source": "IMG_5101.JPG",
    "width": 1200,
    "height": 850,
    "tags": [
      "沉穩",
      "雅緻"
    ],
    "subcategory": "2"
  },
  {
    "id": 18,
    "title": "樹間",
    "category": "brand",
    "image": "images/18.jpg",
    "description": "樹木與人物般的手繪輪廓結合，在綠色攝影中呈現自然氣息。",
    "source": "IMG_5102.JPG",
    "width": 1077,
    "height": 649,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "3"
  },
  {
    "id": 19,
    "title": "太陽・自然・人",
    "category": "brand",
    "image": "images/19.jpg",
    "description": "將太陽、自然與人的圖形分解後重組，直接呈現識別的概念來源。",
    "source": "IMG_5103.JPG",
    "width": 1200,
    "height": 1200,
    "tags": [
      "沉穩",
      "雅緻"
    ],
    "subcategory": "2"
  },
  {
    "id": 20,
    "title": "WATERS / WILD",
    "category": "brand",
    "image": "images/20.jpg",
    "description": "粗細不一的白色筆觸搭配木紋背景，以材質對比傳達自然感。",
    "source": "IMG_5104.JPG",
    "width": 736,
    "height": 920,
    "tags": [
      "清爽",
      "簡約"
    ],
    "subcategory": "2"
  },
  {
    "id": 21,
    "title": "山海自然符號",
    "category": "brand",
    "image": "images/21.jpg",
    "description": "山、水、太陽等元素以曲線與圓點組合，構成具流動感的地景。",
    "source": "IMG_5105.JPG",
    "width": 1199,
    "height": 1799,
    "tags": [
      "清爽",
      "簡約"
    ],
    "subcategory": "2"
  },
  {
    "id": 22,
    "title": "笠光",
    "category": "brand",
    "image": "images/22.jpg",
    "description": "以太陽、山形與水波組成獨立符號，透過水平線條與留白傳達自然、平靜的感受。",
    "source": "IMG_5106.JPG",
    "width": 1200,
    "height": 1500,
    "tags": [
      "沉穩",
      "雅緻"
    ],
    "subcategory": "3"
  },
  {
    "id": 23,
    "title": "谷中 Beer Hall",
    "category": "brand",
    "image": "images/23.jpg",
    "description": "以人物化的黑色手繪圖像呼應谷中 Beer Hall，搭配多語文字呈現趣味。",
    "source": "IMG_5097.JPG",
    "width": 1000,
    "height": 667,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "3"
  },
  {
    "id": 24,
    "title": "光景 SCENE",
    "category": "brand",
    "image": "images/24.jpg",
    "description": "放射線與水平線抽象化光線和地平線，構圖清楚而輕盈。",
    "source": "IMG_5107.JPG",
    "width": 1200,
    "height": 1200,
    "tags": [
      "沉穩",
      "雅緻"
    ],
    "subcategory": "1"
  },
  {
    "id": 25,
    "title": "月・樹・水概念",
    "category": "brand",
    "image": "images/25.jpg",
    "description": "以月亮、樹木與水紋的拆解，說明圖形如何形成品牌符號。",
    "source": "IMG_5108.JPG",
    "width": 600,
    "height": 420,
    "tags": [
      "清爽",
      "簡約"
    ],
    "subcategory": "2"
  },
  {
    "id": 26,
    "title": "屋頂",
    "category": "brand",
    "image": "images/26.jpg",
    "description": "以屋頂般的山形輪廓作為獨立符號，細線與小型自然點景呈現安靜、樸實的氛圍。",
    "source": "IMG_5110.JPG",
    "width": 991,
    "height": 1200,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "3"
  },
  {
    "id": 27,
    "title": "GELATO 空間應用",
    "category": "brand",
    "image": "images/27.jpg",
    "description": "細線山形符號應用於玻璃門面，透過攝影觀察標誌與空間關係。",
    "source": "IMG_5111.JPG",
    "width": 750,
    "height": 1124,
    "tags": [
      "清爽",
      "簡約"
    ],
    "subcategory": "2"
  },
  {
    "id": 28,
    "title": "floresta",
    "category": "brand",
    "image": "images/28.jpg",
    "description": "重複的樹形符號與細線方框呼應自然，搭配字體建立親切感。",
    "source": "IMG_5112.JPG",
    "width": 550,
    "height": 661,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "2"
  },
  {
    "id": 29,
    "title": "綠色山屋符號",
    "category": "brand",
    "image": "images/29.jpg",
    "description": "綠色線條構成山屋般的符號，下方拆解自然與建築的視覺來源。",
    "source": "IMG_5113.JPG",
    "width": 1200,
    "height": 849,
    "tags": [
      "清爽",
      "簡約"
    ],
    "subcategory": "2"
  },
  {
    "id": 30,
    "title": "樂光",
    "category": "brand",
    "image": "images/30.jpg",
    "description": "以圓潤山形、太陽與水面曲線構成自然地景符號，再搭配手寫品牌名稱。",
    "source": "IMG_5114.JPG",
    "width": 1200,
    "height": 1200,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "2"
  },
  {
    "id": 31,
    "title": "茶字概念",
    "category": "brand",
    "image": "images/31.jpg",
    "description": "水平筆畫和屋頂般的曲線構成字形，搭配拆解圖說明視覺概念。",
    "source": "IMG_5116.JPG",
    "width": 1200,
    "height": 943,
    "tags": [
      "清爽",
      "簡約"
    ],
    "subcategory": "3"
  },
  {
    "id": 32,
    "title": "草山木川",
    "category": "brand",
    "image": "images/32.jpg",
    "description": "將草、山、木、川分別以手寫與圖像呈現，強調字形的自然聯想。",
    "source": "IMG_5117.JPG",
    "width": 703,
    "height": 590,
    "tags": [
      "自然",
      "筆觸感"
    ],
    "subcategory": "1"
  },
  {
    "id": 33,
    "title": "山形圖像",
    "category": "brand",
    "image": "images/33.jpg",
    "description": "層疊山形結合流動曲線，黑白對比帶出地景輪廓與留白。",
    "source": "IMG_5119.JPG",
    "width": 600,
    "height": 600,
    "tags": [
      "親切",
      "手作感"
    ],
    "subcategory": "2"
  },
  {
    "id": 34,
    "title": "版畫與手作風參考 01",
    "category": "web",
    "subcategory": "craft",
    "image": "images/34.jpg",
    "description": "自由手畫線條、器物圖像或紙感紋理，呈現樸實而有溫度的視覺。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5120.JPG",
    "width": 1200,
    "height": 1600,
    "tags": [
      "版畫與手作風"
    ]
  },
  {
    "id": 35,
    "title": "版畫與手作風參考 02",
    "category": "web",
    "subcategory": "craft",
    "image": "images/35.jpg",
    "description": "自由手畫線條、器物圖像或紙感紋理，呈現樸實而有溫度的視覺。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5121.JPG",
    "width": 884,
    "height": 1016,
    "tags": [
      "版畫與手作風"
    ]
  },
  {
    "id": 36,
    "title": "餐飲品牌識別｜器物符號",
    "category": "brand",
    "subcategory": "2",
    "image": "images/36.jpg",
    "description": "以碗、餐具與屋頂線條組合品牌圖形，觀察符號和品牌名稱的搭配。",
    "source": "IMG_5122.JPG",
    "width": 1080,
    "height": 1440,
    "tags": [
      "品牌符號"
    ]
  },
  {
    "id": 37,
    "title": "無印簡約風參考 04",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/37.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5123.JPG",
    "width": 1200,
    "height": 1635,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 38,
    "title": "日系雜誌風參考 05",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/38.jpg",
    "description": "照片、短文與留白交錯，觀察生活敘事與圖文節奏。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5124.JPG",
    "width": 1200,
    "height": 2133,
    "tags": [
      "日系雜誌風"
    ]
  },
  {
    "id": 39,
    "title": "日系雜誌風參考 06",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/39.jpg",
    "description": "照片、短文與留白交錯，觀察生活敘事與圖文節奏。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5125.JPG",
    "width": 1080,
    "height": 1440,
    "tags": [
      "日系雜誌風"
    ]
  },
  {
    "id": 40,
    "title": "無印簡約風參考 07",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/40.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5126.JPG",
    "width": 1200,
    "height": 2342,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 41,
    "title": "法式鄉村風參考 08",
    "category": "web",
    "subcategory": "country",
    "image": "images/41.jpg",
    "description": "暖色、木質與復古家具構成悠閒氛圍，觀察空間影像與版面的搭配。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5127.JPG",
    "width": 1200,
    "height": 2254,
    "tags": [
      "法式鄉村風"
    ]
  },
  {
    "id": 42,
    "title": "無印簡約風參考 09",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/42.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5128.JPG",
    "width": 1199,
    "height": 726,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 43,
    "title": "無印簡約風參考 10",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/43.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5129.JPG",
    "width": 1000,
    "height": 1280,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 44,
    "title": "無印簡約風參考 11",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/44.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5130.JPG",
    "width": 1200,
    "height": 2070,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 45,
    "title": "法式鄉村風參考 12",
    "category": "web",
    "subcategory": "country",
    "image": "images/45.jpg",
    "description": "暖色、木質與復古家具構成悠閒氛圍，觀察空間影像與版面的搭配。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5131.JPG",
    "width": 1199,
    "height": 1237,
    "tags": [
      "法式鄉村風"
    ]
  },
  {
    "id": 46,
    "title": "法式鄉村風參考 13",
    "category": "web",
    "subcategory": "country",
    "image": "images/46.jpg",
    "description": "暖色、木質與復古家具構成悠閒氛圍，觀察空間影像與版面的搭配。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5132.JPG",
    "width": 1200,
    "height": 1497,
    "tags": [
      "法式鄉村風"
    ]
  },
  {
    "id": 47,
    "title": "無印簡約風參考 14",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/47.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5133.JPG",
    "width": 1199,
    "height": 1499,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 48,
    "title": "無印簡約風參考 15",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/48.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5134.JPG",
    "width": 1200,
    "height": 2202,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 52,
    "title": "版畫與手作風參考 19",
    "category": "web",
    "subcategory": "craft",
    "image": "images/52.jpg",
    "description": "自由手畫線條、器物圖像或紙感紋理，呈現樸實而有溫度的視覺。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5138.JPG",
    "width": 1200,
    "height": 1500,
    "tags": [
      "版畫與手作風"
    ]
  },
  {
    "id": 53,
    "title": "版畫與手作風參考 20",
    "category": "web",
    "subcategory": "craft",
    "image": "images/53.jpg",
    "description": "自由手畫線條、器物圖像或紙感紋理，呈現樸實而有溫度的視覺。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5139.JPG",
    "width": 1200,
    "height": 800,
    "tags": [
      "版畫與手作風"
    ]
  },
  {
    "id": 54,
    "title": "無印簡約風參考 21",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/54.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5140.JPG",
    "width": 756,
    "height": 1000,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 55,
    "title": "日系雜誌風參考 22",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/55.jpg",
    "description": "照片、短文與留白交錯，觀察生活敘事與圖文節奏。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5141.JPG",
    "width": 1200,
    "height": 2361,
    "tags": [
      "日系雜誌風"
    ]
  },
  {
    "id": 56,
    "title": "日系雜誌風參考 23",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/56.jpg",
    "description": "照片、短文與留白交錯，觀察生活敘事與圖文節奏。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5142.JPG",
    "width": 564,
    "height": 1128,
    "tags": [
      "日系雜誌風"
    ]
  },
  {
    "id": 57,
    "title": "無印簡約風參考 24",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/57.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5143.JPG",
    "width": 640,
    "height": 900,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 58,
    "title": "日系雜誌風參考 25",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/58.jpg",
    "description": "照片、短文與留白交錯，觀察生活敘事與圖文節奏。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5144.JPG",
    "width": 563,
    "height": 712,
    "tags": [
      "日系雜誌風"
    ]
  },
  {
    "id": 60,
    "title": "無印簡約風參考 27",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/60.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5146.JPG",
    "width": 1200,
    "height": 1725,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 61,
    "title": "日系雜誌風參考 28",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/61.jpg",
    "description": "照片、短文與留白交錯，觀察生活敘事與圖文節奏。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5147.JPG",
    "width": 1200,
    "height": 1298,
    "tags": [
      "日系雜誌風"
    ]
  },
  {
    "id": 62,
    "title": "日系雜誌風參考 29",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/62.jpg",
    "description": "照片、短文與留白交錯，觀察生活敘事與圖文節奏。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5148.JPG",
    "width": 1000,
    "height": 1577,
    "tags": [
      "日系雜誌風"
    ]
  },
  {
    "id": 63,
    "title": "無印簡約風參考 30",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/63.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5149.JPG",
    "width": 1080,
    "height": 1920,
    "tags": [
      "無印簡約風"
    ]
  },
  {
    "id": 64,
    "title": "日系雜誌風參考 31",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/64.jpg",
    "description": "照片、短文與留白交錯，觀察生活敘事與圖文節奏。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5150.JPG",
    "width": 768,
    "height": 1365,
    "tags": [
      "日系雜誌風"
    ]
  },
  {
    "id": 65,
    "title": "無印簡約風參考 32",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/65.jpg",
    "description": "以節制配色、整齊編排與自然材質，呈現清楚、安靜的產品展示。 此為靜態參考圖，互動效果需另行設計。",
    "source": "IMG_5151.JPG",
    "width": 735,
    "height": 1005,
    "tags": [
      "無印簡約風"
    ]
  }
];

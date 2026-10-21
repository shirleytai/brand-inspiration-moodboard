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
    "description": "以室內照片搭配黑色細線手繪，將燈具、桌面與器物延伸到留白中。照片提供真實材質，插畫則帶出輕鬆的生活感，可參考作為首頁情境圖或品牌故事的呈現方式。",
    "source": "IMG_5120.JPG",
    "width": 1200,
    "height": 1600,
    "tags": []
  },
  {
    "id": 35,
    "title": "版畫與手作風參考 02",
    "category": "web",
    "subcategory": "craft",
    "image": "images/35.jpg",
    "description": "將閱讀角落的暖色照片與桌燈、桌椅輪廓相接，搭配自由排列的手寫文字。圖像沒有被限制在方框內，讓畫面像生活筆記，適合表達親近、隨性的品牌氣氛。",
    "source": "IMG_5121.JPG",
    "width": 884,
    "height": 1016,
    "tags": []
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
    "title": "法式鄉村風參考 04",
    "category": "web",
    "subcategory": "country",
    "image": "images/37.jpg",
    "description": "以米色底、大幅陶器靜物照與細緻文字建立安靜的首頁。下方依序安排商品列與品牌故事，讓產品展示和內容介紹有清楚層次；可參考其色彩一致性與區塊節奏。",
    "source": "IMG_5123.JPG",
    "width": 1200,
    "height": 1635,
    "tags": []
  },
  {
    "id": 38,
    "title": "法式鄉村風參考 05",
    "category": "web",
    "subcategory": "country",
    "image": "images/38.jpg",
    "description": "以暖米色背景、柔和側光和大量留白凸顯木器的紋理。不同大小的照片與細小文字錯落安排，像雜誌專題頁，適合用來介紹單件作品的細節與工藝。",
    "source": "IMG_5124.JPG",
    "width": 1200,
    "height": 2133,
    "tags": []
  },
  {
    "id": 39,
    "title": "日系雜誌風參考 06",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/39.jpg",
    "description": "上方以深綠森林與小型文字營造安靜氣氛，下方切換成日光照射的抹茶與木桌近景。遠景與近景的對照，將自然環境連結到日常使用情境，可參考作為品牌故事的影像順序。",
    "source": "IMG_5125.JPG",
    "width": 1080,
    "height": 1440,
    "tags": []
  },
  {
    "id": 40,
    "title": "無印簡約風參考 07",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/40.jpg",
    "description": "以建築情境照開場，搭配米白底、細字與整齊的商品區塊。版面透過規律間距串起空間、家具及選物，適合參考官網如何兼顧整體氛圍與商品瀏覽。",
    "source": "IMG_5126.JPG",
    "width": 1200,
    "height": 2342,
    "tags": []
  },
  {
    "id": 41,
    "title": "法式鄉村風參考 08",
    "category": "web",
    "subcategory": "country",
    "image": "images/41.jpg",
    "description": "大字標題與木質空間照片形成鮮明開場，下方以整齊網格展示家具。復古家具、自然材質與暖色影像帶出悠閒氣氛，可參考其情境照片與單品展示的轉換。",
    "source": "IMG_5127.JPG",
    "width": 1200,
    "height": 2254,
    "tags": []
  },
  {
    "id": 42,
    "title": "無印簡約風參考 09",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/42.jpg",
    "description": "以淺色背景和規律排列的器物照片建立清楚的商品目錄，旁邊搭配精簡說明；家具區則放大單品、保留更多空白。可參考如何用不同圖文比例凸顯商品類型與形體。",
    "source": "IMG_5128.JPG",
    "width": 1199,
    "height": 726,
    "tags": []
  },
  {
    "id": 43,
    "title": "無印簡約風參考 10",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/43.jpg",
    "description": "以白底、大幅家具去背圖及簡短文字構成首頁，讓家具輪廓成為主角。下方品牌介紹延續寬鬆間距與小型圖文，呈現克制、乾淨的閱讀節奏。",
    "source": "IMG_5129.JPG",
    "width": 1000,
    "height": 1280,
    "tags": []
  },
  {
    "id": 44,
    "title": "法式鄉村風參考 11",
    "category": "web",
    "subcategory": "country",
    "image": "images/44.jpg",
    "description": "以自然色調的居家情境作為主視覺，下方用簡短介紹與小型照片網格延伸內容。米白背景、木質與植物保持一致，適合參考生活選物品牌如何串連空間和商品。",
    "source": "IMG_5130.JPG",
    "width": 1200,
    "height": 2070,
    "tags": []
  },
  {
    "id": 45,
    "title": "法式鄉村風參考 12",
    "category": "web",
    "subcategory": "country",
    "image": "images/45.jpg",
    "description": "上方以米色背景陳列不同家具，下方轉入帶有復古家具、地毯與木質細節的室內全景。單品與空間交替出現，讓人理解產品如何融入生活，可參考其溫暖而有年代感的搭配。",
    "source": "IMG_5131.JPG",
    "width": 1199,
    "height": 1237,
    "tags": []
  },
  {
    "id": 46,
    "title": "法式鄉村風參考 13",
    "category": "web",
    "subcategory": "country",
    "image": "images/46.jpg",
    "description": "以大幅客廳照片搭配醒目標題，強調家具在空間中的存在感；下方再穿插器物近景與人物工作照。暖色光線、布料和木質表面共同形成悠閒氣氛，兼顧產品與生活故事。",
    "source": "IMG_5132.JPG",
    "width": 1200,
    "height": 1497,
    "tags": []
  },
  {
    "id": 47,
    "title": "法式鄉村風參考 14",
    "category": "web",
    "subcategory": "country",
    "image": "images/47.jpg",
    "description": "以陶盤近拍、米色底及大小交錯的字體構成首頁，再銜接陶器商品列。背景與器物的土色相近，視覺柔和統一；可參考如何讓產品材質成為整站的色彩來源。",
    "source": "IMG_5133.JPG",
    "width": 1199,
    "height": 1499,
    "tags": []
  },
  {
    "id": 48,
    "title": "法式鄉村風參考 15",
    "category": "web",
    "subcategory": "country",
    "image": "images/48.jpg",
    "description": "以清楚分隔的內容區塊安排情境照片、色票、商品網格與品牌介紹。大量淺色留白讓不同類型的家具與器物仍保持秩序，適合參考商品較多時的版面層級。",
    "source": "IMG_5134.JPG",
    "width": 1200,
    "height": 2202,
    "tags": []
  },
  {
    "id": 52,
    "title": "版畫與手作風參考 19",
    "category": "web",
    "subcategory": "craft",
    "image": "images/52.jpg",
    "description": "以粗糙、不規則的黑色門框插畫包住真實室內照片，搭配米色底與簡短標題。手畫輪廓和攝影的對比，讓空間介紹多一點趣味，適合參考品牌首頁的主視覺構成。",
    "source": "IMG_5138.JPG",
    "width": 1200,
    "height": 1500,
    "tags": []
  },
  {
    "id": 53,
    "title": "版畫與手作風參考 20",
    "category": "web",
    "subcategory": "craft",
    "image": "images/53.jpg",
    "description": "以灰黑色器物插畫、石頭般的色塊與紙感紋理組成畫面。元素疏落分布、尺寸大小不同，留白帶出樸實感，可參考作為背景圖案、章節分隔或品牌裝飾語彙。",
    "source": "IMG_5139.JPG",
    "width": 1200,
    "height": 800,
    "tags": []
  },
  {
    "id": 54,
    "title": "無印簡約風參考 21",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/54.jpg",
    "description": "上方以陶杯近拍搭配簡短標題，下方採整齊商品列呈現不同器物。柔和自然光與灰米色背景讓材質清楚可見，適合參考陶器官網如何由情境引導至商品。",
    "source": "IMG_5140.JPG",
    "width": 756,
    "height": 1000,
    "tags": []
  },
  {
    "id": 55,
    "title": "日系雜誌風參考 22",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/55.jpg",
    "description": "以白底、細小文字、空間照片與手繪圖標交錯編排，呈現生活刊物般的內容感。大小不同的照片讓頁面有閱讀節奏，可參考品牌如何把空間、人物與文章整合到首頁。",
    "source": "IMG_5141.JPG",
    "width": 1200,
    "height": 2361,
    "tags": []
  },
  {
    "id": 56,
    "title": "日系雜誌風參考 23",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/56.jpg",
    "description": "以柔和的居家照片開場，搭配直排文字、小型插畫與細緻分隔。下方以文章卡片延伸生活內容，適合參考如何讓官網兼具品牌氛圍與可持續更新的閱讀內容。",
    "source": "IMG_5142.JPG",
    "width": 564,
    "height": 1128,
    "tags": []
  },
  {
    "id": 57,
    "title": "無印簡約風參考 24",
    "category": "web",
    "subcategory": "minimal",
    "image": "images/57.jpg",
    "description": "大幅明亮室內照片放在頁首，下方以白底網格排列碗盤與小型商品資訊。細線導覽和寬鬆間距讓產品容易辨認，可參考乾淨的購物首頁與自然採光風格。",
    "source": "IMG_5143.JPG",
    "width": 640,
    "height": 900,
    "tags": []
  },
  {
    "id": 58,
    "title": "日系雜誌風參考 25",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/58.jpg",
    "description": "以長頁面串連空間攝影、手繪圖像、地圖及文字介紹，各區塊保持留白。整體像一篇介紹場所的專題，可參考如何用不同內容形式延伸同一個品牌故事。",
    "source": "IMG_5144.JPG",
    "width": 563,
    "height": 712,
    "tags": []
  },
  {
    "id": 60,
    "title": "日系雜誌風參考 27",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/60.jpg",
    "description": "將家具、燈具與空間照片依主題分成清楚區塊，搭配簡潔標題與小型商品圖。白底和一致的間距維持秩序，可參考如何整理品項較多的首頁，同時保留情境感。",
    "source": "IMG_5146.JPG",
    "width": 1200,
    "height": 1725,
    "tags": []
  },
  {
    "id": 61,
    "title": "日系雜誌風參考 28",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/61.jpg",
    "description": "以山景與小型品牌標誌開場，下方結合手繪地圖、直排文字及生活內容。自然風景和細緻圖文讓頁面像地方刊物，可參考如何表達品牌與所在地的連結。",
    "source": "IMG_5147.JPG",
    "width": 1200,
    "height": 1298,
    "tags": []
  },
  {
    "id": 62,
    "title": "日系雜誌風參考 29",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/62.jpg",
    "description": "以街景招牌照片建立場所印象，下方穿插建築、食物與空間影像，並用細線圖形與文字補充。可參考如何以雜誌式的圖文節奏介紹餐飲、選物或生活空間。",
    "source": "IMG_5148.JPG",
    "width": 1000,
    "height": 1577,
    "tags": []
  },
  {
    "id": 63,
    "title": "法式鄉村風參考 30",
    "category": "web",
    "subcategory": "country",
    "image": "images/63.jpg",
    "description": "以黑白陶器近拍與暖米色器物照交錯排列，搭配大量留白及細小文字。不同光線與材質形成細膩對比，可參考如何以近景攝影凸顯作品質地，同時保持版面安靜。",
    "source": "IMG_5149.JPG",
    "width": 1080,
    "height": 1920,
    "tags": []
  },
  {
    "id": 64,
    "title": "日系雜誌風參考 31",
    "category": "web",
    "subcategory": "magazine",
    "image": "images/64.jpg",
    "description": "深綠色主視覺結合店面、人物攝影與小型手繪元素，再以不規則邊界切換至淺色內容區。下方圖文和圓形資訊塊讓頁面更有變化，適合參考帶有地方生活感的品牌網站。",
    "source": "IMG_5150.JPG",
    "width": 768,
    "height": 1365,
    "tags": []
  },
  {
    "id": 65,
    "title": "版畫與手作風參考 32",
    "category": "web",
    "subcategory": "craft",
    "image": "images/65.jpg",
    "description": "以黑白海岸攝影和器物輪廓建立安靜的開場，下方轉為黑底、金色文字與作品照片。深淺區塊的對比凸顯作品與故事，可參考藝術或工藝品牌如何營造沉靜的展示氛圍。",
    "source": "IMG_5151.JPG",
    "width": 735,
    "height": 1005,
    "tags": []
  }
];

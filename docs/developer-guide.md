---
title: 規格書
sidebar_position: 4
---

# 規格書

## 前端使用技術

- next： ~14.2.2
- react： ~18
- tailwindcss： ^3.4.1
- react-hook-form： ^7.51.4
- swr： ^2.2.5
- sweetalert2： ^11.12.2
- swiper： ^11.1.1
- eslint： ^8.57.0
- jest： ^29.7.0
- cypress： ^13.14.0
- sonar-qube

## 建議主機伺服器規格

- 測試伺服器規格：
  - 主機板：ASUSTeK COMPUTER INC. ROG STRIX Z390-FGAMING
  - 記憶體：31.2 GiB
  - CPU：Intel(R) Core(TM) i9-9900K CPU @3.60GHz x 16
  - 繪圖：NVIDIA GeForce TRX 2080 Ti/PCle/SSE2
  - 磁碟：WDC WD1003FZEX-0 (1TB)
    - [讀寫速度約 150 MB/s](https://documents.westerndigital.com/content/dam/doc-library/zh_tw/assets/public/western-digital/product/internal-drives/wd-black-hdd/product-brief-western-digital-wd-black-pc-hdd.pdf)
- 測試場景 (JMeter)：
  - 極端情境 (1秒內達到指定併發量)：
    - 測試配置：模擬 1000 名用戶同時發送請求，執行加載首頁、文章列表及搜尋、文章詳情頁、用戶註冊及登入流程。
      - 測試結果：系統運行穩定。
    - 測試配置：模擬 2000 名用戶同時發送請求，執行相同操作。
      - 測試結果：系統錯誤率約為 1%，降至 1700 名使用者則無錯誤。
    - 測試配置：模擬 3000 名用戶同時發送請求，執行相同操作。
      - 測試結果：系統錯誤率急劇上升至 15% ~ 20%。
  - 正常情境 (10秒內達到指定併發量)：
    - 測試配置：模擬 1000 名用戶同時發送請求，執行加載首頁、文章列表及搜尋、文章詳情頁、用戶註冊及登入流程。
      - 測試結果：系統運行穩定。
    - 測試配置：模擬 2000 名用戶同時發送請求，執行相同操作。
      - 測試結果：系統錯誤率約為 1.5%，降至 1900 名使用者則無錯誤。
    - 測試配置：模擬 3000 名用戶同時發送請求，執行相同操作。
      - 測試結果：系統錯誤率急劇上升至 1.5% ~ 12%。

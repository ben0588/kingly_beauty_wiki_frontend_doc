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
  - 磁碟：1000 GB
- 測試場景 (JMeter)：
  - 測試項目：模擬 1000 人同時訪問或執行 (首頁/文章列表&搜尋/文章詳情/註冊/登入)
    - 結果：正常。
  - 測試項目：模擬 2000 人同時訪問或執行 (首頁/文章列表&搜尋/文章詳情/註冊/登入)
    - 結果：系統錯誤率約 1%。
  - 測試項目：模擬 3000 人同時訪問或執行 (首頁/文章列表&搜尋/文章詳情/註冊/登入)
    - 結果：系統錯誤率約 15~20%。

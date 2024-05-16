var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://41223136.github.io/wcm2024/ \n 網誌:  https://41223136.github.io/wcm2024/blog \n 簡報:  https://41223136.github.io/wcm2024/reveal \n 倉儲:  https://github.com/41223136/wcm2024 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Homework', 'text': '', 'tags': '', 'url': 'Homework.html'}, {'title': 'w2', 'text': '在使用replit 近端或遠端，編輯維護網站，可用新的維護網站Codespaces進行維護 \n 1.可以跳過近端反鎖步驟，直接開啟動態網站編輯。 \n 2.幾乎與replit的操作系統一樣。(和其最近更新的動態網站連結亂碼) \n 3.受限於這個只是給你試用的，所以有 每個月的使用時數上限 。 \n 以下連結為使用 Codespaces 編輯維護晚站後的靜態連結 \n https://41223136.github.io/wcm2024 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '上課內容： \n 1.wink的使用方法 \n 2.使用git常用指令 \n 3.另用指令分組網站成員倉儲分組子模組 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'wink', 'text': '以下網址為wink的安裝地方 \n https://www.debugmode.com/wink.html \n', 'tags': '', 'url': 'wink.html'}, {'title': 'git order', 'text': 'git add .  (新增) \n git commit -m "說明字串" \xa0 (提交及名稱) \n git  push  (推送) \n git version  (查詢目前所使用的 git 版本) \n git status  (一般是用來檢查目前近端改版情況) \n 若在遠端倉儲已經改版了，就必須先 git pull ，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 \n git pull=git fetch + git merge \n git submodule add  倉儲網址子目錄 \n git clone --recurse-submodules  (.git 指定目錄與否) \n token \n git config --global \n ------------------------ \n 以下為其他其他指令 \n git submodule update --init (抓下子模組) \n git log (檢視 Git 紀錄 Q鍵離開) \n ls -l (瀏覽) \n pwd (列出現在工作目錄) \n acp ("輸入" 直接上傳) \n dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) \n dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) \n ./b(代表執行、運行)(執行可執行檔) \n', 'tags': '', 'url': 'git order.html'}, {'title': '建立分組倉儲', 'text': '利用Codespaces建立分組倉儲建立個人子模組 \n 另用終端機打出指令 \n git status \n ls -l \n clear \n git submodule add 自己倉儲網址.git空格+學號 \n git add . \n git commit -m "add 學號 submodule" \n git push \n 就可以將自己的個人子模組加入到分組倉儲 \n', 'tags': '', 'url': '建立分組倉儲.html'}, {'title': 'w4', 'text': '', 'tags': '', 'url': 'w4.html'}, {'title': 'w6', 'text': '將下面題目解答並放入自己的網站上 \n 1.根據您的專業, 就 git 的使用, 從與 ChatGPT 的對話, 將內容整理到個人的第六網誌, 其中包含: git 的發展歷史, 創作人的相關履歷, 以及一般相同專業人士如何利用 \xa0git 解決內容管理問題? \n 2. 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? 請將相關操作流程整理至個人第六週網誌中. \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'git的基本用法:', 'text': 'git是一個分散式版本控制系統，廣泛用於協作開發和版本管理。 \n 如何配置git? \n 配置git，包括設置使用者名稱和郵箱地址。可使用命令配置 \n git config --global user.name "Your name" \n git config --global user.email "your.email@example.com" \n 初始化倉庫: \n 要開新專案時，需要初始化一個git倉庫，可透過指令配置 \n git init \n 提交更改: \n 增加了檔案需提交這些更改來保存它們的狀態 \n git commit -m "Your commit message" \n 增加檔案: \n 可以用 git add . 指令 \n 查看狀態: \n 可以使用 git status 指令來查看倉儲當前狀態，包括已修改、已暫存何未追蹤的檔案 \n 查看歷史紀錄: \n 可使用 git log 指令查看提交歷史，包括提交作者、日期和提交訊息等資訊。 \n 建立分支: \n 使用分支可以方便在不影響主線開發的情況下進行實驗和開發。可使用指令來創建分支 \n git brash <branch_name> \n 如果要 切換分支 可以用 git checkout <branch_name> \n 合併分支 則是 git merge <branch_name> \n 遠程操作: \n git支持源成倉儲進行交互，可以通過添加遠程倉儲地址來實現 \n git remote add origin <remote_repository_URL> \n 提交操作: \n 可以利用 git push 推送到倉儲 \n 使用 git pull 從遠程倉儲拉取更改到最新版本 \n \n', 'tags': '', 'url': 'git的基本用法:.html'}, {'title': 'git的發展歷史', 'text': 'git是由Linus Torvalds在2005年開發的分散式版本系統 \n 1.2005年git誕生:開發者在Linux內核開發過程中遇到了對版本控制系統的需求，由於對當時版本控制系統不滿意，他決定開發全新的版本控制系統，這就是git。 \n 2.2005年4月:git首次公開發布。 \n 3.2005年6月: Linux內核項目轉向git進行版本控制 ， 這是git發展歷史上的一個重要轉折點 ，也是git得到廣泛認可的開始。 \n 4.2007年Github成立，他是一個基於git的程式碼託管平台，成立於2007年，為開發者提供了一個便捷的程式碼託管、協作開發的平台，推動了git的普及和發展。 \n 5.2008年git1.5.6發布，引進一些重要的功能和改進，使git更加穩定和易用。 \n 6.2016年 Microsoft收購Github ，推動了git在開發者社區的地位，並加速Github平台發展。 \n 7.2020年git2.28發布，帶來新功能和改進，包括 增強子模組支持、改進的性能和穩定性 等。 \n 8.2020年Github推出Codespaces和Discussions，為開發者提供更多便利和交流機會。 \n 9.2020年Github宣布支持密碼存儲庫存儲，支持私人存儲庫存在冷藏狀態，以解決長期存儲和備份的問題。 \n', 'tags': '', 'url': 'git的發展歷史.html'}, {'title': '創作人的相關履歷', 'text': 'Linus Torvalds是git的創辦人之一 \n 本名: Linus Benedict Torvalds \n 出生日期: 1969年12月28日 \n 出生地: 芬蘭赫爾辛基 \n 教育背景: \n 1988年，進入芬蘭赫爾辛基大學就讀，主修計算機科學。 \n 1996年，獲得赫爾辛基大學計算機科學學士學位。 \n 職業生涯 \n 1991年，創建了 Linux 操作系統核心，並開始在全球範圍內發佈。 \n 2005年，開始開發 git 分散式版本控制系統，並於同年向社區發佈。 \n 除了 Linux 和 git 之外，他還參與了許多開源項目的開發和管理，並在計算機科學研究領域發表了許多論文。 \n 獎項和榮譽 \n 1997年，獲得愛因斯坦獎。 \n 1998年，獲得 Free Software Foundation 授予的 Free Software Award。 \n 2010年，獲得 Millennium Technology Prize。 \n 2012年，獲得共享獎。 \n 2014年，獲得亞瑟·克拉克獎。 \n 一般相同專業人士如何利用 \xa0git 解決內容管理問題? \n 1. 版本控制 \n git 可以追蹤文件的變更歷史，可讓專業人士可以輕鬆地管理文件的不同版本，對於軟體開發者來說尤其重要，他們可以隨時回溯到過去的版本，比較不同版本之間的差異，甚至回滾到較早的版本。對於文檔編輯和內容創作也非常有用，可以追蹤編輯歷史並輕鬆地合併不同版本的變更。 \n 2. 協作開發 \n git 支持多人同時協作開發，多個開發者可以在不同的分支上進行工作，並通過合併操作將自己的工作合併到主分支中。這使得團隊成員可以同時進行工作，而不會互相干擾，從而提高了開發效率。 \n 3. 分支管理 \n git 的分支功能非常強大，可以讓專業人士輕鬆地創建、切換和合併分支。這使得專業人士可以方便地在不影響主要開發流程的情況下進行實驗、修復錯誤或者開發新的功能。 \n 4. 代碼審查 \n git 支持代碼審查功能，開發者可以通過發送合併請求（Pull Request）的方式將自己的代碼提交給其他成員進行審查。這有助於提高代碼質量、發現潛在的問題和增進團隊之間的溝通。 \n 5. 文檔管理 \n git\xa0可以作為一個強大的工具。專業人士可以使用 git 來追蹤文檔的修改歷史，並通過分支和合併操作來管理不同版本的文檔。這使得團隊成員可以輕鬆地協作編輯文檔，同時保持文檔的統一性和準確性。 \n 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? \n 配置git使用者資訊: \n 打開命令(CMDorPowerShell)，並輸入命令配置 \n git config --global user.name "Your Name" git config --global user.email "your.email@example.com" \n 建立本地git倉庫: \n 輸入 git init 指令 \n 建立檔案並提交更改: \n 可使用 git add . 添加到暫存區，再提交這些更改到倉庫中 git commit -m "Initial commit " \n 設置git伺服器: \n 在 Windows 上搭建 git 伺服器可以使用軟體如 GitLab、Gitea 或者搭建裸倉庫。 \n 選擇一個合適文件夾作為git伺服器的存儲目錄。可使用 git init --bare 指令執行 \n 連結git客戶端和伺服器: \n 增加遠程倉庫地址輸入指令 git remote add origin <server_address>/<repo_name>.git \n 其中 <server_address>是你git伺服器地址 ， <repo_name>是你在伺服器上創建的倉庫名稱 。 \n 將本地倉庫的內容推送到git伺服器上: \n 使用指令 git push -u origin master 即可 \n 在使用 git pull 拉取伺服器上的更改 \n', 'tags': '', 'url': '創作人的相關履歷.html'}, {'title': 'w7-w8', 'text': '期中成績登記，並輸入自己想要的理想分數。 \n 第八週上課內容 \n 1.了解教育的本質、意義 \n 2.如何把影片嵌入自己的個人網站上 \n \n', 'tags': '', 'url': 'w7-w8.html'}, {'title': 'w9', 'text': '', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '在mdewcm2024/1astud-site新增各組的心得，並解決衝突的問題 \n 並使用超文件到網誌中 \n 介紹acp的功用 \n git add . \n git commit -m "$1" --author="$2" \n git push \n \xa0 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w13', 'text': '利用 wsgi_v2_py 擷取個學期的課表', 'tags': '', 'url': 'w13.html'}, {'title': '期中課程整理', 'text': '', 'tags': '', 'url': '期中課程整理.html'}, {'title': '網頁式內容管理', 'text': 'Q1:如何建立 Github 上的網站?Q2:如何管理內容?Q3: 如何建立章節式網站?Q4:能放入甚麼多媒體內容?Q5:靜態圖文?Q6:動態圖文?Q7:線上遊戲?Q8:3D 零組件展示?Q9:如何建立網頁系統中的網誌?Q10:如何建立網頁系統中的簡報? \n A1:  GitHub 上建立網站可以使用 GitHub Pages ，先創立一個儲存庫，名稱為username.github.io，在存儲庫中創建一個名為「index.html」的 HTML 文件，用於構建你的網站主頁。將網站的代碼添加到 index.html 文件中，然後把它推到 GitHub 存儲庫。 \n A2: GitHub 上管理網站內容通常使用版本控制工具 Git。可以在本地創建一個 Git 存儲庫，將網站代碼下載到本地，然後在本地修改和更新網站內容。完成修改後，使用 Git 將更改推送到 GitHub 存儲庫。另外，可以使用分支（Branches）來開發新功能或進行實驗，然後將分支合併（Merge）到主分支（通常是 master 或 main）中。 \n A3:建立章節式網站可以使用靜態網站生成器，如Replit、Codespaces或Gitpods等。首先，需要選擇一個適合你需求的生成器，然後在本地開發環境中創建你的網站再使用生成器提供的模板和功能來創建不同的章節和內容頁面，組織你的網站內容。完成編輯後，使用生成器將網站生成為靜態文件，然後將這些文件推送到GitHub存儲庫中。最後，你的章節式網站將通過GitHub Pages或其他靜態網站托管服務進行部署，讓其他人可以訪問和瀏覽你的網站。 \n A4: \n 1.圖片:嵌入YouTube、Vimeo等視頻平台提供的影片連結，或者將視頻文件直接嵌入到網頁中，讓讀者可以觀看視頻內容。 \n 2.影片:嵌入YouTube、Vimeo等視頻平台提供的影片連結，或者將視頻文件直接嵌入到網頁中，讓讀者可以觀看視頻內容。 \n 3.音頻: 嵌入音樂或語音文件，如Podcast等，讓讀者可以聆聽音頻內容。 \n 4.地圖:嵌入地圖服務，如Google Maps，以展示地理位置或路線信息。 \n 5.表格:使用HTML或Markdown格式來創建和展示表格內容，以整理和呈現數據。 \n 6.圖表和圖形:使用JavaScript圖表庫或其他數據可視化工具來創建和展示圖表和圖形，以呈現數據和統計信息。 \n 7.放入網站:嵌入其他網站提供的媒體內容，如Twitter貼文、Instagram照片等，以擴展你的內容範圍。 \n A5: \n 1.圖片:將圖片文件直接插入到章節內容中。你可以使用HTML的\xa0 <img> \xa0標籤或Markdown的圖片語法（例如\xa0 ![圖片描述](圖片URL) ）來添加圖片。 \n 2.文本:使用Markdown或HTML來編寫文本內容，包括標題、段落、列表等。Markdown提供了簡單易讀的語法，而HTML則提供更多的自定義和控制。 \n 3.超連結:使用超連結來連接不同章節或其他網站。在HTML中，你可以使用\xa0 <a> \xa0標籤來創建超連結，而Markdown則提供了\xa0 [連結文字](連結URL) \xa0的語法。 \n 4.引用:引用其他資料或文字也是常見的做法。你可以使用Markdown的引用語法（ > 引用文字 ）或HTML的\xa0 <blockquote> \xa0標籤來添加引用內容。 \n A6: \n 1.動畫:使用CSS或JavaScript來創建和控制動畫效果，使圖片、文本或其他元素呈現動態效果。你可以使用CSS的\xa0 @keyframes \xa0樣式或JavaScript的動畫庫（如Animate.css）來添加動畫。 \n 2.交互式元素:加入JavaScript互動元素，例如按鈕、滑塊、表單等，讓用戶可以與你的網站互動。這些元素可以通過事件監聽器來實現動態效果，例如點擊按鈕後顯示或隱藏特定內容。 \n 3.即時更新:用JavaScript或AJAX來實現即時更新功能，例如在不刷新整個頁面的情況下加載新的內容或更新現有內容。這可以通過向後端API發送請求並處理返回的數據來實現。 \n 4.影片和音頻播放器:嵌入視頻和音頻播放器，讓用戶可以播放多媒體內容。你可以使用HTML5的\xa0 <video> \xa0和\xa0 <audio> \xa0標籤來添加視頻和音頻播放器，並使用JavaScript控制播放器的功能。 \n 5.即時更新圖表:使用JavaScript圖表庫（如Chart.js、D3.js等）來創建動態圖表，並實現即時更新功能，使圖表可以根據用戶操作或數據變化而動態更新。 \n A7: \n 1.使用嵌入式代碼:將線上遊戲的嵌入代碼（embed code）添加到你的網站中。許多線上遊戲提供了嵌入代碼，你只需將其添加到網站的HTML中的相應位置即可。 \n 2.使用iframe元素:使用HTML的\xa0 <iframe> \xa0元素來嵌入線上遊戲。你可以將遊戲的URL添加到\xa0 <iframe> \xa0元素的\xa0 src \xa0屬性中，然後將\xa0 <iframe> \xa0元素添加到你的網站中的任何位置。 \n 補充 : <iframe>  元素是HTML中的一個標記，用於在網頁中嵌入另一個獨立的HTML文檔或外部網頁。它提供了一種在當前網頁中包含其他網頁內容的方法，讓你可以將其他網站的內容嵌入到網頁中，或者在同一網站中的不同頁面之間嵌入內容。 \n <iframe>  元素有一個  src  屬性，用於指定要嵌入的外部文檔或網頁的URL。除此之外，還可以設置其他屬性來調整iframe的大小、邊框、樣式等。通過iframe，你可以在網頁中創建內嵌的互動元素，如Google地圖、YouTube視頻、線上遊戲等，為網站提供更豐富的內容和功能。 \n 3.設置遊戲頁面:在網站中創建一個專門的遊戲頁面，將遊戲嵌入到該頁面中。這樣做可以使遊戲與網站的其他內容分開，並為用戶提供更好的遊戲體驗。 \n 4.安全性:確保嵌入的遊戲代碼來源可信，以防止可能的安全風險。如果可能的話，最好使用來自可靠和信任的遊戲提供商的嵌入代碼。 \n A8: \n 1.使用Javascript 3D庫:使用像Three.js這樣的JavaScript 3D庫，可以輕鬆在網站中展示3D零組件。你可以將3D模型導入到你的網站中，並使用Three.js等庫來渲染和顯示它們。這樣的庫通常提供了各種功能，如照明、動畫、交互等，以增強3D模型的表現力。 \n 2.使用網頁GL視窗:利用WebGL技術，你可以在網頁中嵌入可交互的3D場景。這需要一些較高級的編程知識，但它可以讓你在網頁中直接渲染3D模型，使它們能夠與用戶互動。 \n 3.嵌入式3D查看器:使用嵌入式3D查看器，如Sketchfab，可以將3D模型嵌入到你的網站中。Sketchfab提供了一個簡單的嵌入代碼，你可以將它添加到你的網站中，以便在線上展示和互動3D模型。 \n A9:步驟 \n 1.選擇網誌平台 \n 2.設置網誌 \n 3.編輯內容 \n 4.發布文章 \n 5.促進網誌 \n 6.定期更新 \n A10:步驟 \n 1.選擇簡報工具 \n 2.建立簡報 \n 3.增加內容 \n 4.設置轉場效果 \n 5.編輯和分享 \n 6.儲存 \n \n', 'tags': '', 'url': '網頁式內容管理.html'}, {'title': 'Python 程式系統', 'text': '學習議題: 如何利用電腦輔助設計室的舊 Python 建立新的可攜環境? 在網頁中置入 Python 語法的程式加上對 Javascript 與超文件語法的了解後, 能夠應用在那些領域? (精密)機械設計流程? 設計運算? 特定系統模擬? \n', 'tags': '', 'url': 'Python 程式系統.html'}, {'title': '網頁上的 IDE', 'text': 'IDE 是甚麼? 可以將 Replit、Codespaces 與 Gitpod 當成 IDE 用來開發各種程式嗎? 與近端操作系統上的開發有何不同? 多人協同? 這樣安全嗎? \n 學習議題: 學會使用網頁上的各種 IDE 之後, 有沒有甚麼感想或心得? \n', 'tags': '', 'url': '網頁上的 IDE.html'}, {'title': 'AI 工具', 'text': 'ChatGPT 與 Gemini Pro 都可以直接利用 Gmail 帳號登入, 初級應用目前都可免費使用, 這兩個 AI 工具可以協助我們解決甚麼問題? 為什麼有人驚這些工具為天人? 有人卻覺得還好而已, 並無法從中挖出甚麼資料? \n 學習議題: AI 工具曾經協助我們解決甚麼問題? \n', 'tags': '', 'url': 'AI 工具.html'}, {'title': '實作練習問題', 'text': '', 'tags': '', 'url': '實作練習問題.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};
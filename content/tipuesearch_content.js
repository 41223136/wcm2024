var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://41223136.github.io/wcm2024/ \n 網誌:  https://41223136.github.io/wcm2024/blog \n 簡報:  https://41223136.github.io/wcm2024/reveal \n 倉儲:  https://github.com/41223136/wcm2024 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Homework', 'text': '', 'tags': '', 'url': 'Homework.html'}, {'title': 'w2', 'text': '在使用replit 近端或遠端，編輯維護網站，可用新的維護網站Codespaces進行維護 \n 1.可以跳過近端反鎖步驟，直接開啟動態網站編輯。 \n 2.幾乎與replit的操作系統一樣。(和其最近更新的動態網站連結亂碼) \n 3.受限於這個只是給你試用的，所以有 每個月的使用時數上限 。 \n 以下連結為使用 Codespaces 編輯維護晚站後的靜態連結 \n https://41223136.github.io/wcm2024 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '上課內容： \n 1.wink的使用方法 \n 2.使用git常用指令 \n 3.另用指令分組網站成員倉儲分組子模組 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'wink', 'text': '以下網址為wink的安裝地方 \n https://www.debugmode.com/wink.html \n', 'tags': '', 'url': 'wink.html'}, {'title': 'git order', 'text': 'git add .  (新增) \n git commit -m "說明字串" \xa0 (提交及名稱) \n git  push  (推送) \n git version  (查詢目前所使用的 git 版本) \n git status  (一般是用來檢查目前近端改版情況) \n 若在遠端倉儲已經改版了，就必須先 git pull ，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 \n git pull=git fetch + git merge \n git submodule add  倉儲網址子目錄 \n git clone --recurse-submodules  (.git 指定目錄與否) \n token \n git config --global \n ------------------------ \n 以下為其他其他指令 \n git submodule update --init (抓下子模組) \n git log (檢視 Git 紀錄 Q鍵離開) \n ls -l (瀏覽) \n pwd (列出現在工作目錄) \n acp ("輸入" 直接上傳) \n dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) \n dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) \n ./b(代表執行、運行)(執行可執行檔) \n', 'tags': '', 'url': 'git order.html'}, {'title': '建立分組倉儲', 'text': '利用Codespaces建立分組倉儲建立個人子模組 \n 另用終端機打出指令 \n git status \n ls -l \n clear \n git submodule add 自己倉儲網址.git空格+學號 \n git add . \n git commit -m "add 學號 submodule" \n git push \n 就可以將自己的個人子模組加入到分組倉儲 \n', 'tags': '', 'url': '建立分組倉儲.html'}, {'title': 'w4', 'text': '上課內容： \n 1.有關建立網站 \n 2.Replit靜態網站檢視 \n 3.建立Replit分組倉儲權限 \n 4.Replit,Codespaces與Gitpods執行靜態與動態網站 \n 5.複習前三週上課內容與git介紹', 'tags': '', 'url': 'w4.html'}, {'title': 'w6', 'text': '將下面題目解答並放入自己的網站上 \n 1.根據您的專業, 就 git 的使用, 從與 ChatGPT 的對話, 將內容整理到個人的第六網誌, 其中包含: git 的發展歷史, 創作人的相關履歷, 以及一般相同專業人士如何利用 \xa0git 解決內容管理問題? \n 2. 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? 請將相關操作流程整理至個人第六週網誌中. \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'git的基本用法:', 'text': 'git是一個分散式版本控制系統，廣泛用於協作開發和版本管理。 \n 如何配置git? \n 配置git，包括設置使用者名稱和郵箱地址。可使用命令配置 \n git config --global user.name "Your name" \n git config --global user.email "your.email@example.com" \n 初始化倉庫: \n 要開新專案時，需要初始化一個git倉庫，可透過指令配置 \n git init \n 提交更改: \n 增加了檔案需提交這些更改來保存它們的狀態 \n git commit -m "Your commit message" \n 增加檔案: \n 可以用 git add . 指令 \n 查看狀態: \n 可以使用 git status 指令來查看倉儲當前狀態，包括已修改、已暫存何未追蹤的檔案 \n 查看歷史紀錄: \n 可使用 git log 指令查看提交歷史，包括提交作者、日期和提交訊息等資訊。 \n 建立分支: \n 使用分支可以方便在不影響主線開發的情況下進行實驗和開發。可使用指令來創建分支 \n git brash <branch_name> \n 如果要 切換分支 可以用 git checkout <branch_name> \n 合併分支 則是 git merge <branch_name> \n 遠程操作: \n git支持源成倉儲進行交互，可以通過添加遠程倉儲地址來實現 \n git remote add origin <remote_repository_URL> \n 提交操作: \n 可以利用 git push 推送到倉儲 \n 使用 git pull 從遠程倉儲拉取更改到最新版本 \n \n', 'tags': '', 'url': 'git的基本用法:.html'}, {'title': 'git的發展歷史', 'text': 'git是由Linus Torvalds在2005年開發的分散式版本系統 \n 1.2005年git誕生:開發者在Linux內核開發過程中遇到了對版本控制系統的需求，由於對當時版本控制系統不滿意，他決定開發全新的版本控制系統，這就是git。 \n 2.2005年4月:git首次公開發布。 \n 3.2005年6月: Linux內核項目轉向git進行版本控制 ， 這是git發展歷史上的一個重要轉折點 ，也是git得到廣泛認可的開始。 \n 4.2007年Github成立，他是一個基於git的程式碼託管平台，成立於2007年，為開發者提供了一個便捷的程式碼託管、協作開發的平台，推動了git的普及和發展。 \n 5.2008年git1.5.6發布，引進一些重要的功能和改進，使git更加穩定和易用。 \n 6.2016年 Microsoft收購Github ，推動了git在開發者社區的地位，並加速Github平台發展。 \n 7.2020年git2.28發布，帶來新功能和改進，包括 增強子模組支持、改進的性能和穩定性 等。 \n 8.2020年Github推出Codespaces和Discussions，為開發者提供更多便利和交流機會。 \n 9.2020年Github宣布支持密碼存儲庫存儲，支持私人存儲庫存在冷藏狀態，以解決長期存儲和備份的問題。 \n', 'tags': '', 'url': 'git的發展歷史.html'}, {'title': '創作人的相關履歷', 'text': 'Linus Torvalds是git的創辦人之一 \n 本名: Linus Benedict Torvalds \n 出生日期: 1969年12月28日 \n 出生地: 芬蘭赫爾辛基 \n 教育背景: \n 1988年，進入芬蘭赫爾辛基大學就讀，主修計算機科學。 \n 1996年，獲得赫爾辛基大學計算機科學學士學位。 \n 職業生涯 \n 1991年，創建了 Linux 操作系統核心，並開始在全球範圍內發佈。 \n 2005年，開始開發 git 分散式版本控制系統，並於同年向社區發佈。 \n 除了 Linux 和 git 之外，他還參與了許多開源項目的開發和管理，並在計算機科學研究領域發表了許多論文。 \n 獎項和榮譽 \n 1997年，獲得愛因斯坦獎。 \n 1998年，獲得 Free Software Foundation 授予的 Free Software Award。 \n 2010年，獲得 Millennium Technology Prize。 \n 2012年，獲得共享獎。 \n 2014年，獲得亞瑟·克拉克獎。 \n 一般相同專業人士如何利用 \xa0git 解決內容管理問題? \n 1. 版本控制 \n git 可以追蹤文件的變更歷史，可讓專業人士可以輕鬆地管理文件的不同版本，對於軟體開發者來說尤其重要，他們可以隨時回溯到過去的版本，比較不同版本之間的差異，甚至回滾到較早的版本。對於文檔編輯和內容創作也非常有用，可以追蹤編輯歷史並輕鬆地合併不同版本的變更。 \n 2. 協作開發 \n git 支持多人同時協作開發，多個開發者可以在不同的分支上進行工作，並通過合併操作將自己的工作合併到主分支中。這使得團隊成員可以同時進行工作，而不會互相干擾，從而提高了開發效率。 \n 3. 分支管理 \n git 的分支功能非常強大，可以讓專業人士輕鬆地創建、切換和合併分支。這使得專業人士可以方便地在不影響主要開發流程的情況下進行實驗、修復錯誤或者開發新的功能。 \n 4. 代碼審查 \n git 支持代碼審查功能，開發者可以通過發送合併請求（Pull Request）的方式將自己的代碼提交給其他成員進行審查。這有助於提高代碼質量、發現潛在的問題和增進團隊之間的溝通。 \n 5. 文檔管理 \n git\xa0可以作為一個強大的工具。專業人士可以使用 git 來追蹤文檔的修改歷史，並通過分支和合併操作來管理不同版本的文檔。這使得團隊成員可以輕鬆地協作編輯文檔，同時保持文檔的統一性和準確性。 \n 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? \n 配置git使用者資訊: \n 打開命令(CMDorPowerShell)，並輸入命令配置 \n git config --global user.name "Your Name" git config --global user.email "your.email@example.com" \n 建立本地git倉庫: \n 輸入 git init 指令 \n 建立檔案並提交更改: \n 可使用 git add . 添加到暫存區，再提交這些更改到倉庫中 git commit -m "Initial commit " \n 設置git伺服器: \n 在 Windows 上搭建 git 伺服器可以使用軟體如 GitLab、Gitea 或者搭建裸倉庫。 \n 選擇一個合適文件夾作為git伺服器的存儲目錄。可使用 git init --bare 指令執行 \n 連結git客戶端和伺服器: \n 增加遠程倉庫地址輸入指令 git remote add origin <server_address>/<repo_name>.git \n 其中 <server_address>是你git伺服器地址 ， <repo_name>是你在伺服器上創建的倉庫名稱 。 \n 將本地倉庫的內容推送到git伺服器上: \n 使用指令 git push -u origin master 即可 \n 在使用 git pull 拉取伺服器上的更改 \n', 'tags': '', 'url': '創作人的相關履歷.html'}, {'title': 'w7-w8', 'text': '期中成績登記，並輸入自己想要的理想分數。 \n 第八週上課內容 \n 1.了解教育的本質、意義 \n 2.如何把影片嵌入自己的個人網站上 \n \n', 'tags': '', 'url': 'w7-w8.html'}, {'title': 'w10', 'text': '在mdewcm2024/1astud-site新增各組的心得，並解決衝突的問題 \n 並使用超文件到網誌中 \n 介紹acp的功用 \n git add . \n git commit -m "$1" --author="$2" \n git push', 'tags': '', 'url': 'w10.html'}, {'title': 'w13', 'text': '利用 wsgi_v2_py 擷取個學期的課表 \n 一年級上學期的課表 \n 將上方的連結下載後放入可攜，儲存後放入cmd \n 要先確認是否有flask和flask-cors \n 輸入 \n pip list \n 如果有就可執行下面內容 \n cd tmp \n python wsgi_v2.py \n 即可開啟班級課表 \n \n \n 112年第1學期 \n \n \n 112年第2學期課表 \n \n \n 102年第1學期 \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '了解有關可攜 Python版本，版本是非常重要的，可以透過兩個指令是在哪一個環境 \n path \n set \n set通常都是windows的內容，如果需要改變的話，要修改。 \n 如果版本不對就無法開啟。 \n', 'tags': '', 'url': 'w14.html'}, {'title': '期中課程整理', 'text': '', 'tags': '', 'url': '期中課程整理.html'}, {'title': '網頁式內容管理', 'text': 'Q1:如何建立 Github 上的網站?Q2:如何管理內容?Q3: 如何建立章節式網站?Q4:能放入甚麼多媒體內容?Q5:靜態圖文?Q6:動態圖文?Q7:線上遊戲?Q8:3D 零組件展示?Q9:如何建立網頁系統中的網誌?Q10:如何建立網頁系統中的簡報? \n A1:  GitHub 上建立網站可以使用 GitHub Pages ，先創立一個儲存庫，名稱為username.github.io，在存儲庫中創建一個名為「index.html」的 HTML 文件，用於構建你的網站主頁。將網站的代碼添加到 index.html 文件中，然後把它推到 GitHub 存儲庫。 \n A2: GitHub 上管理網站內容通常使用版本控制工具 Git。可以在本地創建一個 Git 存儲庫，將網站代碼下載到本地，然後在本地修改和更新網站內容。完成修改後，使用 Git 將更改推送到 GitHub 存儲庫。另外，可以使用分支（Branches）來開發新功能或進行實驗，然後將分支合併（Merge）到主分支（通常是 master 或 main）中。 \n A3:建立章節式網站可以使用靜態網站生成器，如Replit、Codespaces或Gitpods等。首先，需要選擇一個適合你需求的生成器，然後在本地開發環境中創建你的網站再使用生成器提供的模板和功能來創建不同的章節和內容頁面，組織你的網站內容。完成編輯後，使用生成器將網站生成為靜態文件，然後將這些文件推送到GitHub存儲庫中。最後，你的章節式網站將通過GitHub Pages或其他靜態網站托管服務進行部署，讓其他人可以訪問和瀏覽你的網站。 \n A4: \n 1.圖片:嵌入YouTube、Vimeo等視頻平台提供的影片連結，或者將視頻文件直接嵌入到網頁中，讓讀者可以觀看視頻內容。 \n 2.影片:嵌入YouTube、Vimeo等視頻平台提供的影片連結，或者將視頻文件直接嵌入到網頁中，讓讀者可以觀看視頻內容。 \n 3.音頻: 嵌入音樂或語音文件，如Podcast等，讓讀者可以聆聽音頻內容。 \n 4.地圖:嵌入地圖服務，如Google Maps，以展示地理位置或路線信息。 \n 5.表格:使用HTML或Markdown格式來創建和展示表格內容，以整理和呈現數據。 \n 6.圖表和圖形:使用JavaScript圖表庫或其他數據可視化工具來創建和展示圖表和圖形，以呈現數據和統計信息。 \n 7.放入網站:嵌入其他網站提供的媒體內容，如Twitter貼文、Instagram照片等，以擴展你的內容範圍。 \n A5: \n 1.圖片:將圖片文件直接插入到章節內容中。你可以使用HTML的\xa0 <img> \xa0標籤或Markdown的圖片語法（例如\xa0 ![圖片描述](圖片URL) ）來添加圖片。 \n 2.文本:使用Markdown或HTML來編寫文本內容，包括標題、段落、列表等。Markdown提供了簡單易讀的語法，而HTML則提供更多的自定義和控制。 \n 3.超連結:使用超連結來連接不同章節或其他網站。在HTML中，你可以使用\xa0 <a> \xa0標籤來創建超連結，而Markdown則提供了\xa0 [連結文字](連結URL) \xa0的語法。 \n 4.引用:引用其他資料或文字也是常見的做法。你可以使用Markdown的引用語法（ > 引用文字 ）或HTML的\xa0 <blockquote> \xa0標籤來添加引用內容。 \n A6: \n 1.動畫:使用CSS或JavaScript來創建和控制動畫效果，使圖片、文本或其他元素呈現動態效果。你可以使用CSS的\xa0 @keyframes \xa0樣式或JavaScript的動畫庫（如Animate.css）來添加動畫。 \n 2.交互式元素:加入JavaScript互動元素，例如按鈕、滑塊、表單等，讓用戶可以與你的網站互動。這些元素可以通過事件監聽器來實現動態效果，例如點擊按鈕後顯示或隱藏特定內容。 \n 3.即時更新:用JavaScript或AJAX來實現即時更新功能，例如在不刷新整個頁面的情況下加載新的內容或更新現有內容。這可以通過向後端API發送請求並處理返回的數據來實現。 \n 4.影片和音頻播放器:嵌入視頻和音頻播放器，讓用戶可以播放多媒體內容。你可以使用HTML5的\xa0 <video> \xa0和\xa0 <audio> \xa0標籤來添加視頻和音頻播放器，並使用JavaScript控制播放器的功能。 \n 5.即時更新圖表:使用JavaScript圖表庫（如Chart.js、D3.js等）來創建動態圖表，並實現即時更新功能，使圖表可以根據用戶操作或數據變化而動態更新。 \n A7: \n 1.使用嵌入式代碼:將線上遊戲的嵌入代碼（embed code）添加到你的網站中。許多線上遊戲提供了嵌入代碼，你只需將其添加到網站的HTML中的相應位置即可。 \n 2.使用iframe元素:使用HTML的\xa0 <iframe> \xa0元素來嵌入線上遊戲。你可以將遊戲的URL添加到\xa0 <iframe> \xa0元素的\xa0 src \xa0屬性中，然後將\xa0 <iframe> \xa0元素添加到你的網站中的任何位置。 \n 補充 : <iframe>  元素是HTML中的一個標記，用於在網頁中嵌入另一個獨立的HTML文檔或外部網頁。它提供了一種在當前網頁中包含其他網頁內容的方法，讓你可以將其他網站的內容嵌入到網頁中，或者在同一網站中的不同頁面之間嵌入內容。 \n <iframe>  元素有一個  src  屬性，用於指定要嵌入的外部文檔或網頁的URL。除此之外，還可以設置其他屬性來調整iframe的大小、邊框、樣式等。通過iframe，你可以在網頁中創建內嵌的互動元素，如Google地圖、YouTube視頻、線上遊戲等，為網站提供更豐富的內容和功能。 \n 3.設置遊戲頁面:在網站中創建一個專門的遊戲頁面，將遊戲嵌入到該頁面中。這樣做可以使遊戲與網站的其他內容分開，並為用戶提供更好的遊戲體驗。 \n 4.安全性:確保嵌入的遊戲代碼來源可信，以防止可能的安全風險。如果可能的話，最好使用來自可靠和信任的遊戲提供商的嵌入代碼。 \n A8: \n 1.使用Javascript 3D庫:使用像Three.js這樣的JavaScript 3D庫，可以輕鬆在網站中展示3D零組件。你可以將3D模型導入到你的網站中，並使用Three.js等庫來渲染和顯示它們。這樣的庫通常提供了各種功能，如照明、動畫、交互等，以增強3D模型的表現力。 \n 2.使用網頁GL視窗:利用WebGL技術，你可以在網頁中嵌入可交互的3D場景。這需要一些較高級的編程知識，但它可以讓你在網頁中直接渲染3D模型，使它們能夠與用戶互動。 \n 3.嵌入式3D查看器:使用嵌入式3D查看器，如Sketchfab，可以將3D模型嵌入到你的網站中。Sketchfab提供了一個簡單的嵌入代碼，你可以將它添加到你的網站中，以便在線上展示和互動3D模型。 \n A9:步驟 \n 1.選擇網誌平台 \n 2.設置網誌 \n 3.編輯內容 \n 4.發布文章 \n 5.促進網誌 \n 6.定期更新 \n A10:步驟 \n 1.選擇簡報工具 \n 2.建立簡報 \n 3.增加內容 \n 4.設置轉場效果 \n 5.編輯和分享 \n 6.儲存 \n \n \n', 'tags': '', 'url': '網頁式內容管理.html'}, {'title': 'Python 程式系統', 'text': '學習議題: 如何利用電腦輔助設計室的舊 Python 建立新的可攜環境? \n 1.確認原始Python環境 \n 2.安裝 Python 和 Virtualenv \n 3.創建新的虛擬環境 \n 4.啟動虛擬環境 \n 5.安裝依賴庫 \n 6.確認安裝 \n 7.可攜環境打包 \n 在網頁中置入 Python 語法的程式加上對 Javascript 與超文件語法的了解後, 能夠應用在那些領域? \n 1.Web 開發 \n 後端開發：使用 Python（例如 Flask 或 Django 框架）來處理伺服器邏輯，數據庫交互，以及 API 開發。 \n 前端與後端整合：使用 JavaScript 和 HTML 來建立前端界面，然後透過 AJAX 或 Fetch API 與後端的 Python 服務器進行通信，實現動態數據加載和交互。 \n 2.數據可視化 \n 動態數據展示：使用 Python 的數據處理能力（例如 Pandas 和 Matplotlib），結合 JavaScript 的圖表庫（例如 D3.js 或 Chart.js），將處理好的數據以圖表形式動態展示在網頁中。 \n 儀表板：利用 Dash（基於 Flask 和 Plotly）創建交互式儀表板，這些儀表板可以嵌入到網頁中，展示實時數據。 \n 3.機器學習與人工智慧 \n 預測模型展示：將 Python 訓練的機器學習模型嵌入到網頁應用中，並使用 JavaScript 來實現交互式預測輸入和結果展示。 \n AI 驅動的應用：例如聊天機器人、推薦系統等，前端使用 JavaScript 進行交互，後端使用 Python 處理 AI 邏輯。 \n 4.Web 爬蟲與數據收集 \n 數據展示：使用 Python 爬蟲收集數據，然後將這些數據展示在網頁上，並結合 JavaScript 進行動態更新和視覺化。 \n 用戶交互：用戶可以通過網頁界面提供關鍵字或 URL，後端使用 Python 爬蟲實時收集數據並返回展示結果。 \n 5.自動化任務 \n 網頁表單填寫：使用 Python 腳本自動填寫和提交網頁表單，結合 JavaScript 進行結果處理和展示。 \n 資料收集和報告生成：使用 Python 自動生成報告並通過網頁展示，使用 JavaScript 進行交互和下載。 \n 6.教育與培訓 \n 互動教學工具：結合 Python 和 JavaScript 開發互動編程教學工具，讓學生在網頁中即時編寫和運行 Python 代碼。 \n 在線實驗平台：建立在線實驗平台，讓用戶通過網頁界面進行數據輸入，後端 Python 處理並返回結果，前端 JavaScript 展示結果。 \n 7.電子商務 \n 動態推薦系統：利用 Python 的數據分析和機器學習能力，結合 JavaScript 實時向用戶推薦產品。 \n 後台管理系統：使用 Python 開發後端系統，管理產品、訂單和用戶，前端用 JavaScript 和 HTML 創建交互界面。 \n (精密)機械設計流程? \n 1.需求分析 \n 確定設計需求：與客戶或內部團隊討論，明確產品功能、性能要求、成本限制和時間表。 \n 技術規格：列出詳細的技術規格，包括尺寸、精度、材料、環境條件等。 \n 2.概念設計 \n 頭腦風暴：創造性思考，產生多種設計概念。 \n 初步草圖：繪製簡單的設計草圖，展示不同的設計方案。 \n 可行性研究：評估每個設計概念的可行性，包括技術、經濟和時間方面的考慮。 \n 3.詳細設計 \n 3D 建模：使用 CAD 軟件（如 SolidWorks、AutoCAD）創建精確的三維模型。 \n 材料選擇：根據設計需求選擇適合的材料。 \n 工程分析：進行有限元分析（FEA）和計算流體動力學（CFD）等模擬，確保設計的強度和性能滿足要求。 \n 4.設計驗證 \n 5.製造準備 \n 6.製造與裝配 \n 7.最終測試與驗證 \n 8.文件編制 \n 9.生產和市場推廣 \n 10.售後服務與反饋 \n 設計運算? \n 1.需求分析與初步運算 \n 2.材料選擇與特性計算 \n 3.結構與強度計算 \n 4.運動學與動力學計算 \n 5.熱分析與散熱設計 \n 6.摩擦與磨損計算 \n 7.振動與聲學分析 \n 8.流體動力學計算 \n 9.成本分析與優化 \n 10.安全性與可靠性計算 \n 特定系統模擬? \n 1.有限元分析: 軟件:ANSYS、Abaqus、SolidWorks Simulation \n 2.計算流體動力學: 軟件:ANSYS Fluent、OpenFOAM \n 3.動力學與運動學模擬: 軟件:ATLAB/Simulink、ADAMS \n 4.熱模擬: 軟件:ANSYS、COMSOL Multiphysics \n 5.電磁模擬: 軟件:ANSYS Maxwell、COMSOL Multiphysics \n 6.聲學模擬: 軟件:COMSOL Multiphysics、ANSYS Sound \n 7.機器學習與優化: 軟件:Python、MATLAB \n 8.製造過程模擬: 軟件:Siemens NX CAM、Mastercam \n 9.多物理場模擬: 軟件:COMSOL Multiphysics \n 10.虛擬現實與增強現實（VR/AR）模擬: 軟件:Unity、Unreal Engine \n \n', 'tags': '', 'url': 'Python 程式系統.html'}, {'title': '網頁上的 IDE', 'text': 'IDE 是甚麼? \n IDE 是「整合開發環境」的縮寫。它是一種軟體應用程式，旨在為軟體開發人員提供一個統一的界面，讓他們可以在同一個地方進行程式碼編寫、測試和除錯。IDE 通常包括程式碼編輯器、編譯器或解譯器、除錯器以及其他工具，如版本控制系統集成和專案管理功能。透過提供這些功能，IDE 可以提高開發效率，減少編碼錯誤，並提供更流暢的開發體驗。常見的 IDE 包括 Visual Studio、Eclipse、IntelliJ IDEA 等。 \n 可以將 Replit、Codespaces 與 Gitpod 當成 IDE 用來開發各種程式嗎? \n Replit、Codespaces 和 Gitpod 都可以被視為一種IDE，用來開發各種程式。它們都提供了一個整合開發環境，讓開發者可以在線上進行程式碼編寫、測試和除錯。這些平台通常包括程式碼編輯器、執行環境、版本控制工具和其他開發相關功能，讓開發者可以在同一個地方完成整個開發流程。 \n 遠端與近端操作系統上的開發有何不同? \n 1.無需本地安裝環境 \n 2.跨平台兼容性 \n 3.資源共享和協作 \n 4.自動化部署和集成 \n 5.資源消耗 \n 多人協同? \n 雲端IDE通常支援多人協同開發。這意味著多個開發者可以同時在同一個項目上工作，他們可以實時共享代碼、查看彼此的編輯和變更，並即時進行通信。這樣可以極大地促進團隊之間的合作和溝通，使得軟體開發過程更加流暢和高效。 \n 這樣安全嗎? \n 雲端IDE通常會採取一些安全措施來確保多人協同開發的安全性，但最終安全性取決於使用的平台和使用者的實際操作。 \n 學習議題: 學會使用網頁上的各種 IDE 之後, 有沒有甚麼感想或心得? \n 學習IDE之後了解到IDE是一個整合開發環境，讓開發者可以在同一個地方完整地開發，並支援多人協同，可以促進團隊的合作，讓開發過程更順利，完整度越高。 \n', 'tags': '', 'url': '網頁上的 IDE.html'}, {'title': 'AI 工具', 'text': 'ChatGPT 與 Gemini Pro 都可以直接利用 Gmail 帳號登入, 初級應用目前都可免費使用, 這兩個 AI 工具可以協助我們解決甚麼問題? \n ChatGPT : \xa0是一個對話式人工智能模型，它可以理解和生成自然語言文本。 \n 例如： \n 回答問題：ChatGPT 可以回答關於各種主題的問題，提供信息和解釋。 \n 提供建議：ChatGPT 可以提供建議和指導，例如在技術、創意或生活方面。 \n 訓練對話：ChatGPT 可以用於訓練對話模型，例如客服機器人或虛擬助手。 \n 創作文本：ChatGPT 可以生成各種類型的文本，包括故事、文章和詩歌。 \n Gemini Pro 是一個自然語言處理工具，它提供了多種功能，可以解決各種問題，例如： \n 文本分析：Gemini Pro 可以分析文本，提取關鍵信息，並進行情感分析、主題分類等任務。 \n 信息檢索：Gemini Pro 可以通過文本搜索引擎來檢索相關信息，幫助你找到所需的內容。 \n 自然語言生成：Gemini Pro 可以生成自然語言文本，例如摘要、說明或報告。 \n \n 為什麼有這些工具驚為天人? \n 這些工具驚艷人心的原因在於它們的創新性、功能性和應用廣泛性。 \n 1.智能化和自動化 \n 2.便捷性和可用性 \n 3.多功能性 \n 4.創新性和前瞻性 \n 有人卻覺得還好而已, 並無法從中挖出甚麼資料? \n 在別人眼中可能只是一項交作業的工具而已，但在我自己眼中是一款非常大的發明，了解自己所未知的世界，去探討增加自己的不足能力，來提升自己的未來優勢。 \n 學習議題: AI 工具曾經協助我們解決甚麼問題? \n AI幫我們解決過程式和課業問題，AI也可以幫我們規劃旅遊計畫表等等。 了解AI產業的感想 \n', 'tags': '', 'url': 'AI 工具.html'}, {'title': '期末專案', 'text': '在做專案的過程中，有用到JavacSript和CSS語法，因為自己還對這些不太了解，自己整理了 基礎語法整理 可前往自己整理的基礎語法頁面。 \n 我製作了一個小遊戲:俄羅斯方塊 \n 需要的程式:JavaScript、CSS、HTML、Python \n 首先要確認自己的ip位址 \n 輸入指令 ipconfig/all 即可查看自己所在位址 \n \n 每當要開啟一次時，就要更改自己所在的位置 \n 把位址複製貼到自己要開啟的內容，更改它的位址，然後儲存 \n \n 在準備自己所需要的程式代碼 \n 輸入cd (自己所創的資料夾名稱) \n 用python開啟app.py \n 就可以開啟自己的網頁 \n \n 我優化了網頁內容增加了網頁背景、重新開始按鍵、方向鍵會卡頓的問題。 \n \n \n', 'tags': '', 'url': '期末專案.html'}, {'title': '基礎語法介紹', 'text': '介紹JavaScript和css的基本語法內容 \n', 'tags': '', 'url': '基礎語法介紹.html'}, {'title': '了解基本 html 語法', 'text': '1.學習html的基本架構 \n HTML 文檔由元素組成， 元素由標籤定義。 每個標籤都有其自己的含義和用途。 例如， <p>  標籤用於創建段落， 而  <h1>  標籤用於創建標題。 \n 2.練習創建簡單的html頁面 \n 了解html基本架構，就可以開始練習創建簡單的html頁面。需要有一個文本編輯器和一個Web瀏覽器。 \n 打開編輯器並創建新文件，將以下代碼保存為index.html： \n <!DOCTYPE html>\n<html>\n<head>\n  <title>My First Web Page</title>\n</head>\n<body>\n  <h1>This is my first heading</h1>\n  <p>This is a paragraph of text.</p>\n</body>\n</html> \n \n 再打開Web瀏覽器並將文件拖到瀏覽器窗口，就可以看到頁面了。', 'tags': '', 'url': '了解基本 html 語法.html'}, {'title': 'JavaScript基礎語法', 'text': 'Q:什麼是JavaScript? \n A:JavaScript是用來建立互動式網頁的程式設計語言，從重新整理社交媒體送到顯示動畫與互動式地圖，JavaScript 的功能可以提升使用者體驗。JavaScript 作為用戶端指令碼語言，是全球資訊網的核心技術之一。當瀏覽網際網路時，只要在網頁上看見浮動切換影像，一按即顯示的下拉式功能表，或是動態變更的元件色彩，這些都是 JavaScript 呈現的。 \n 在JavaScript還未上市時，早期都是用html語法，製作出一個靜態網站，但無法讓網頁有更多變化，若想要更精緻，就需要用到Script語言。 \n JavaScript前名是Live Script。 \n 很多人搞錯的觀念:Java和JavaScript程式是完全不同的東西。 \n 如何撰寫基本的JavaScript? \n JavaScript最常使用在網頁上，所以所有的瀏覽器都可以來執行JavaScript程式，我們可以做一個簡單的練習，例如hello.html，代碼如下 \n <!DOCTYPE html>\n<html>\n  <head>\n    <meta http-equiv="content-type" content="text/html;\n charset=utf-8">\n    <meta charset="utf-8">\n    <title>Hello World!</title>\n    <script>\n      document.write(\'Hello world!\');\n    </script>\n  </head>\n  <body>\n  </body>\n</html> \n document.write表示寫入資料夾到文件中(因為當前文件尚未關閉，所以會寫到文件未端，而瀏覽器會自動寫到<body>尾端，但如果沒有建立<body>，則會在建立後跑到<body>的開始處)，接著利用瀏覽器開啟網頁檔，就可以看到程式的結果。 \n 如何在html中加入JavaScript? \n 第一種方法:如上面的範例，在html中直接使用<script>...</script>的標籤來表示嵌入一段JavaScript程式，而嵌入的位置可以在<head>和<body>之中的任意位置(不建議放在<head>最前面，因為<head>第一個節點通常為編碼宣告)。 \n <html>\n<body>\n<script type="text/javascript">\nvar x =6, y=8;\nvar s = "Hello! "\n\nt = s + x;\nz = x * y;\n\ndocument.write("<pre>x="+x+"\\ny="+y+"\\ns="+s+"\\nt="+t+"\\nz="+z+"</pre>");\n</script>\n</body>\n</html> \n 結果為:x=6 y=8 s=Hello! 6 z=48 \n 第二種方法:是將JavaScript程式獨立寫成別的檔案，不直接和html檔案寫在一起，JavaScript的檔案副檔名為js檔，例如建立一個hello.js檔，裡面寫入: \n document.write(‘Hello world!’); \n 然後html檔案則改為: \n <!DOCTYPE html>\n  <html>\n  <head>\n    <meta http-equiv="content-type" content="text/html;\n charset=utf-8">\n    <meta charset="utf-8">\n    <title>Hello World!</title>\n    <script src="hello.js"></script>\n  </head>\n  <body>\n  </body>\n</html> \n 如上所示，在<script>中使用src的屬性指出外部js的位址 \n 註解 \n 註解部分不會執行，是給人看的，JavaScript中有兩種註解方式: \n 1.//單行註解:兩個斜線後面的部分將不會處理。 \n 2./*...*/多行註解:註解中間的部分將不會處理。 \n \n 分號結尾 \n 一般程式語言，每段程式結尾都是以分號表示，但JavaScript能夠自動幫你在位加上分號的結尾加上分號，JavaScript容許這樣的錯誤發生，但有時候JavaScript會誤解你的意思而造成錯誤。 \n 基本語法範例 \n 1.運算式 \n 2.分支 \n 3.迴圈 \n 4.函數 \n 5.陣列 \n 運算式範例 \n <html>\n<body>\n<script type="text/javascript">\nvar x =6, y=8;\nvar s = "Hello! "\n\nt = s + x;\nz = x * y;\n\ndocument.write("<pre>x="+x+"\\ny="+y+"\\ns="+s+"\\nt="+t+"\\nz="+z+"</pre>");\n</script>\n</body>\n</html> \n 執行結果 x=6 y=8 s=Hello! t=Hello! 6 z=48 \n 分支範例 \n <html>\n<body>\n<script type="text/javascript">\nvar score = 70;\nif (score >= 60)\n  document.write("及格");\nelse\n  document.write("不及格");\n</script>\n</body>\n</html> \n 執行結果:及格 \n 迴圈範例 \n <html>\n<body>\n<script type="text/javascript">\nfor (i=1;i<=10;i++) {\n  if (i == 3) continue;\n  if (i == 8) break;\n  document.write("i="+i+"<BR/>");\n}\n</script>\n</body>\n</html> \n 執行結果: \n i=1 i=2 i=4 i=5 i=6 i=7 \n 函數範例 \n <html>\n<body>\n\n<script type="text/javascript">\nvar add = function(a,b) {     // 第一種寫法，將匿名函數指定給變數。\n  return a+b;\n}\n\nfunction sub(a,b) {            // 第二種寫法，直接宣告函數，該函式是一個函數物件，\n  return a-b;\n}\n\ndocument.write("add(3,5)="+add(3,5)+" sub(7,2)="+sub(7,2));\n</script>\n\n</body>\n</html> \n 執行結果 add(3,5)=8 sub(7,2)=5 \n 陣列範例 \n <html>\n<body>\n<script type="text/javascript">\nvar x;\nvar friends = new Array();\nfriends[0] = "John";\nfriends[1] = "Mary";\nfriends[2] = "George";\nfor (p in friends) {\n  document.write(p + ":"+ friends[p] + "<br />");\n}\n</script>\n</body>\n</html> \n 執行結果 0:John 1:Mary 2:George \n', 'tags': '', 'url': 'JavaScript基礎語法.html'}, {'title': '了解如何在頁面啟動 Brython 程式解譯環境', 'text': '要在頁面啟動Brython程式，可將下面代碼放入html頁面中 \n <!DOCTYPE html>\n<html>\n<head>\n  <title>Brython Example</title>\n  <script src="https://cdn.jsdelivr.net/npm/brython@3.10.0/dist/brython.js"></script>\n</head>\n<body>\n  <script type="text/python">\n    print("Hello, world!")\n  </script>\n</body>\n</html>\n \n \n 代碼將在頁面加載時執行以下操作: \n 1.它將從 CDN 加載 Brython JavaScript 庫。 \n 2. 它將定義一個  <script>  標籤， 其  type  屬性設置為  text/python 。 這告訴 Brython 解譯器將標籤內的代碼視為 Python 程式碼。 \n 3. 它將在 Python 程式碼中打印“Hello,  world! ”。 \n 打開此頁面就會看到Hello,world！ \n Brython是Python嗎? \n 是 ， Brython 是 Python 的一種實現 \n Brython 是在瀏覽器中運行的 Python 3 的實現。它具有 DOM 元素和事件的接口。這意味著可以使用 Brython 在瀏覽器中創建 Web 應用程序。 \n', 'tags': '', 'url': '了解如何在頁面啟動 Brython 程式解譯環境.html'}, {'title': '了解如何利用 Brython 透過網址讀取資料', 'text': '要使用 Brython 透過網址讀取資料， 可以使用  XMLHttpRequest  物件。 以下是一個例子： \n <!DOCTYPE html>\n<html>\n<head>\n  <title>Brython Example</title>\n  <script src="https://cdn.jsdelivr.net/npm/brython@3.10.0/dist/brython.js"></script>\n</head>\n<body>\n  <script type="text/python">\n    def load_data():\n      xhr = brython.XMLHttpRequest()\n      xhr.open("GET", "https://www.example.com/data.json")\n      xhr.onreadystatechange = lambda: on_request_change(xhr)\n      xhr.send()\n\n    def on_request_change(xhr):\n      if xhr.readyState == 4 and xhr.status == 200:\n        data = brython.json.loads(xhr.responseText)\n        print(data)\n\n    load_data()\n  </script>\n</body>\n</html>\n \n 代碼執行操作 \n \n 它將創建一個  XMLHttpRequest  物件。 \n 它將打開一個 GET 請求到 URL  https://www.example.com/data.json 。 \n 它將定義一個  onreadystatechange  處理程序， 該處理程序將在請求完成時運行。 \n 它將發送請求。 \n', 'tags': '', 'url': '了解如何利用 Brython 透過網址讀取資料.html'}, {'title': '了解如何利用 Brython 程式分割 .csv 檔案, 了解數列的資料儲存方式', 'text': '要使用 Brython 程式分割 .csv 檔案，您可以使用  csv  模塊。以下是一個範例: \n <!DOCTYPE html>\n<html>\n<head>\n  <title>Brython Example</title>\n  <script src="https://cdn.jsdelivr.net/npm/brython@3.10.0/dist/brython.js"></script>\n  <script src="https://cdn.jsdelivr.net/npm/brython-csv@0.2.0/dist/csv.js"></script>\n</head>\n<body>\n  <script type="text/python">\n    import csv\n\n    def load_data():\n      with open("data.csv", "r") as f:\n        reader = csv.reader(f)\n        for row in reader:\n          print(row)\n\n    load_data()\n  </script>\n</body>\n</html>\n \n 代碼將執行以下操作: \n \n \n 它將導入  csv  模塊。 \n 它將打開名為  data.csv  的文件。 \n 它將創建一個  csv.reader  物件，該物件將用於迭代文件中的行。 \n 它將為文件中的每一行打印一個列表。 \n \n', 'tags': '', 'url': '了解如何利用 Brython 程式分割 .csv 檔案, 了解數列的資料儲存方式.html'}, {'title': '了解如何使用 Brython 重複迴圈', 'text': '\n \n \n Brython 提供了兩種常用的重複迴圈： for  迴圈和  while  迴圈。 \n 1.  for  迴圈 \n for  迴圈用於迭代可迭代對象中的元素。可迭代對象可以是列表、字符串、元組或字典等。 \n 以下是  for  迴圈的語法： \n for variable in iterable:\n  # 迴圈體\n \n \n \n \n 其中： \n \n variable  是用於遍歷可迭代對象的變量。 \n iterable  是要遍歷的可迭代對象。 \n \n 以下是  for  迴圈的示例： \n <!DOCTYPE html>\n<html>\n<head>\n  <title>Brython Example</title>\n  <script src="https://cdn.jsdelivr.net/npm/brython@3.10.0/dist/brython.js"></script>\n</head>\n<body>\n  <script type="text/python">\n    numbers = [1, 2, 3, 4, 5]\n\n    for number in numbers:\n      print(number)\n  </script>\n</body>\n</html>\n \n 此代碼將打印以下輸出： \n 1 \n 2 \n 3 \n 4 \n 5 \n 2.  while  迴圈 \n while  迴圈用於重複執行程式碼塊，直到指定的條件為假。 \n 以下是  while  迴圈的語法： \n while condition:\n  # 迴圈體 \n 其中： \n \n condition  是要檢查的條件。 \n \n 以下是  while  迴圈的示例： \n <!DOCTYPE html>\n<html>\n<head>\n  <title>Brython Example</title>\n  <script src="https://cdn.jsdelivr.net/npm/brython@3.10.0/dist/brython.js"></script>\n</head>\n<body>\n  <script type="text/python">\n    i = 0\n\n    while i < 5:\n      print(i)\n      i += 1\n  </script>\n</body>\n</html>\n \n 此代碼將打印以下輸出： \n \n \n \n \n 0\n1\n2\n3\n4 \n \n \n \n \n \n', 'tags': '', 'url': '了解如何使用 Brython 重複迴圈.html'}, {'title': '了解 Brython html 模組的應用, 了解 html DOM 運作方式', 'text': 'Brython 的  html  模塊提供了用於與 HTML DOM（文件對象模型）交互的函數和類別。 可以使用此模塊來創建、 修改和刪除 HTML 元素， 以及處理用戶事件。 \n HTML DOM 運作方式 \n HTML DOM 是表示 HTML 文檔的樹狀結構。 每個元素都是一個節點， 並且可以具有子節點。 可以使用 DOM 來訪問和修改文檔中的元素。 \n 以下是一些常見的 DOM 操作： \n \n 創建元素 ：可使用  document.createElement()  函數創建新的 HTML 元素。 \n 插入元素 ：可以使用  appendChild()  函數將元素插入到另一個元素中。 \n 刪除元素 ：可以使用  removeChild()  函數刪除元素。 \n 修改元素屬性 ：可以使用  setAttribute()  函數修改元素的屬性。 \n 獲取元素內容 ：可以使用  textContent  屬性獲取元素的內容。 \n 處理用戶事件 ：可以使用  addEventListener()  函數為元素添加事件處理程序。 \n \n Brython html 模塊的應用 \n 可以使用 Brython 的  html  模塊來執行以下操作： \n \n 創建動態 Web 頁面 ：可以使用  html  模塊來創建和修改 HTML 元素， 從而創建動態 Web 頁面。 \n 處理用戶輸入 ：使用  html  模塊來處理用戶輸入， 例如來自表單或按鈕的點擊。 \n 創建交互式 Web 應用程序 ：可以使用  html  模塊來創建交互式 Web 應用程序， 例如遊戲或計算器。 \n', 'tags': '', 'url': '了解 Brython html 模組的應用, 了解 html DOM 運作方式.html'}, {'title': '了解 Brython 如何與 Javascript 程式互動', 'text': '1.使用  window  物件 \n window  物件是 JavaScript 全局對象， 可讓訪問 JavaScript 函數和變量。 可以使用 Brython 的  window  對象來調用 JavaScript 函數和獲取 JavaScript 變量。 \n 2. 使用  js_eval()  函數 \n js_eval()  函數可讓運行 JavaScript 程式碼。 可以使用此函數來執行複雜的 JavaScript 操作， 例如創建自定義 DOM 元素或處理 JSON 數據。 \n  3.使用 Brython 模塊 \n 一些 Brython 模塊提供了與 JavaScript 庫交互的功能。 例如， brython_websocket  模塊可使用 WebSocket 與服務器通信。 \n 要使用 Brython 模塊， 需要先安裝它 \n 4.使用  @JS()  裝飾器 \n @JS()  裝飾器可將 Python 函數標記為 JavaScript 函數。 這可以使用戶端 JavaScript 程式碼調用 Python 函數。', 'tags': '', 'url': '了解 Brython 如何與 Javascript 程式互動.html'}, {'title': '了解 Brython 如何與 Python server 程式互動', 'text': '1. 使用  XMLHttpRequest \n XMLHttpRequest  物件可向 Python 伺服器發送 HTTP 請求。 可以使用此物件來獲取數據、 發布數據或調用伺服器端函數。 \n 2. 使用  WebSocket \n WebSocket  物件可在客戶端和 Python 伺服器之間建立雙向實時連接。 可以使用此物件來傳送和接收數據， 以及在客戶端和伺服器之間觸發事件。 \n 3. 使用 Brython 服務器框架 \n Brython 提供了一些服務器框架， 可輕鬆創建 Python 伺服器應用程序。 這些框架通常提供內置功能來處理 HTTP 請求、 管理 WebSocket 連接和渲染 Brython 模板。 \n 例如， 可以使用  bottle  框架創建一個簡單的 Web 伺服器， 該伺服器提供以下端點： \n \n / ：返回 "Hello from Brython! " 消息 \n /data ：返回 JSON 數據 \n', 'tags': '', 'url': '了解 Brython 如何與 Python server 程式互動.html'}, {'title': 'CSS基本語法', 'text': 'Q:CSS是什麼? \n A:是一個階層式樣式表(英語： Cascading Style Sheets)，是一種用來為結構化文件添加樣式的電腦語言。 \n CSS可以靜態地修飾網頁，能夠對網頁中的元素位置的排版進行像素級精確控制，支援幾乎所有的字型字號樣式，擁有對網頁對象和模型樣式編輯的能力。但CSS不能單獨使用，必須與html一起協同工作，CSS可以用於設定頁面布局、設定頁面元素樣式、設定適用於所有網頁的全域樣式。 \n CSS不能單獨使用，必須與html或XML一起協同工作，CSS是輔助他們，讓網頁變得更多樣化，例如字型顏色、背景應該是怎樣的、如何排列、邊界等等都自須在html檔案內列出，有時重複列出。CSS可以幫作者將這些資訊中的大部分個隔離出來，簡化html檔案，比如html中的H2標誌這個為二級標誌，它在級別上比一級H1還要低，比三級標題H3高。這些資訊都是結構上的資訊。 \n 一般來說級別越高的標題其字型也是越大的，H1字型最大，字型越大它表示的內容就重要，此外一般標題都使用粗字體，突現他們的重要性。 \n 假如要確定H2標題顏色、字型、大小，要使用html中的font或其他樣式指令。一個標題要用斜體字、紅色的字元、白色的底色的話，就要這樣寫出: \n <H2><font color="red" bgcolor="white"><i>使用CSS</i></font></H2> \n 這些顯示用的指令使得html變得更複雜，要維護也比較難。假如所有的二級標題都要這樣顯示的話，所有二級標題燈要這麼複雜。別人就無法改變這些規定，假如別人喜歡藍色標題的話，它就無法更改標題的顏色。 \n 使用CSS的話H2指令只規定文章結構，其顯示由樣式表來規定，上面例子可以變成這樣: \n <H2>使用CSS</H2> \n 服從的樣式表可以規定H2指令使用斜體字、紅色背景和白色背景: \n H2 { color: red; background: white; font-style: italic; } \n 這樣顯示與內容就分開了，html只表達文章結構，CSS表達所有的顯示。', 'tags': '', 'url': 'CSS基本語法.html'}, {'title': '了解AI產業的發展過程', 'text': '為什麼會想了解AI的由來? \n 因為看了黃仁勳的主題演講，裡面有提到ChatGPT的發展過程，而記錄下來。 \n \n', 'tags': '', 'url': '了解AI產業的發展過程.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};
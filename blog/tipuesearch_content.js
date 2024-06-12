var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 w2 課程","text":"wcm2024 第二週上課內容 介紹各個應用程式 使用者可以使用Replit如何使用Codespace、Gitpod 如何使用Codespaces維護自己倉儲? 可使用init_replit指令安裝Python模組 chmod u+x init_replit ./init_replit 接著輸入(這是動態網站) python3 main.py 再開啟新的終端機 python3 -m http.server 這是靜態網站 即可編輯網站 利用Github Classroom建立分組網站 在 mdewcm2024 帳號下, 期中分組作業名稱為 1a, 第一組組長建立 ag1, 則分組倉儲名稱將為 1a-ag1, 而且各分組 Team 名稱不能相同","tags":"w2","url":"./2024-w2-blog-course.html"},{"title":"2024 w3 課程","text":"wcm2024 第三週上課內容 利用 Github Classroom 分組 取得 mdewcm2024 帳號下的 1a-ag1 倉儲, 所有第一組的組員均對此分組倉儲有管理權, 可以使用登入 Github 的帳號權限進行改版 由於在 Replit 免費帳號下, 僅能與登入 Github 的帳號進行授權, 且在 Replit 導入的倉儲, 任何人都能夠取得倉儲下 .git 的所有資料, 因此無法利用組員的 Github 帳號 token 取得管理授權, 而必須動態在 /home/runner/.ssh 下建立 id_rsa 與 config 連線設定, 各組組員才能利用 Replit 管理分組網站內容 git 指令 git 的新增、提交與推送指令: git add . git commit -m \"說明字串\" git push 使用 git add . 表示要認列所進行的全部改版內容, git commit -m 執行之前, 若在近端使用, 必須先行設定 git config, 將 home_ipv6 目錄下的 .gitconfig 中明確列出改版者的身分, 其中包括: git config --global user.name \"提交者的 github 帳號名稱\" git config --global user.email \"提交者在 github 所登錄的 email address\" 使用者也可以利用 git version 查詢目前所使用的 git 版本. git status 通常用來查核目前近端的改版狀況, 例如: 是否與遠端倉儲同步, 或者遠端倉儲已經有了新版本. 若遠端倉儲已經有新的版本, 則在 git push 之前, 必須設法取下遠端資料進行合併後, 才能再提交新的版本並推送到遠端. git pull = git fetch + git merge 由於要將各組員的 wcm2024 設定為各分組倉儲的子模組, 因此必須利用 git submodule add 以各組員的學號作為子目錄名稱, 利用下列指令, 將組員倉儲新增為分組倉儲的子模組: git submodule add 倉儲網址 子目錄 若只要取下倉儲的主要內容, 可以使用下列指令: git clone 倉儲網址_協定.git 指定目錄與否 若要取下帶有子模組的倉儲, 且可能該子模組還有設定其他子模組, 則必須要加上 --recurse-submodules: git log (檢視 Git 紀錄 Q鍵離開) ls -l (瀏覽) pwd (列出現在工作目錄) acp (\"輸入\" 直接上傳) dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) ./b(代表執行、運行)(執行可執行檔) 利用Gitpod維護倉儲 https://www.gitpod.io/ - gitpod的使用與 Codespaces 類似,每個月有 50 小時的免費使用時間, 可以使用 Github 帳號登入 利用 localhost 維護倉儲 透過 Windows 環境中的 USB 隨身碟, 配置可攜程式系統, 用來管理個人與分組的分組倉儲與網站, 可使用老師給的portable_2024.7z(密碼為:kmolab) Wink和Sharex使用教學 Sharex 可用於電腦畫面截圖, 也可以錄製電腦連續操作影片, 而 Wink 則可取電腦操作過程的關鍵影格, 可加上文字說明標籤","tags":"w3","url":"./2024-w3-blog-course.html"},{"title":"2024 w1 課程","text":"wcm2024 第一週上課內容 建立Github帳號 在Google搜尋Github並Sign up可用來建立並維護個人的課程倉儲與網站 建立個人課程網站 請至 cmsimde_site 倉儲,以此倉儲作為Template 建立個人的wcm2024倉儲,並設定個人的Github Pages課程網頁","tags":"w1","url":"./2024-w1-blog-course.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};
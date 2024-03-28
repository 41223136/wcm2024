var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://41223136.github.io/wcm2024/ \n 網誌:  https://41223136.github.io/wcm2024/blog \n 簡報:  https://41223136.github.io/wcm2024/reveal \n 倉儲:  https://github.com/41223136/wcm2024 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Codespaces', 'text': 'https://41223136.github.io/wcm2024 \n', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'Homework', 'text': '', 'tags': '', 'url': 'Homework.html'}, {'title': 'w6', 'text': 'git的基本用法: \n git是一個分散式版本控制系統，廣泛用於協作開發和版本管理。 \n 如何配置git? \n 配置git，包括設置使用者名稱和郵箱地址。可使用命令配置 \n git config --global user.name "Your name" \n git config --global user.email "your.email@example.com" \n 初始化倉庫: \n 要開新專案時，需要初始化一個git倉庫，可透過指令配置 \n git init \n 提交更改: \n 增加了檔案需提交這些更改來保存它們的狀態 \n git commit -m "Your commit message" \n 增加檔案: \n 可以用 git add . 指令 \n 查看狀態: \n 可以使用 git status 指令來查看倉儲當前狀態，包括已修改、已暫存何未追蹤的檔案 \n 查看歷史紀錄: \n 可使用 git log 指令查看提交歷史，包括提交作者、日期和提交訊息等資訊。 \n 建立分支: \n 使用分支可以方便在不影響主線開發的情況下進行實驗和開發。可使用指令來創建分支 \n git brash <branch_name> \n 如果要 切換分支 可以用 git checkout <branch_name> \n 合併分支 則是 git merge <branch_name> \n 遠程操作: \n git支持源成倉儲進行交互，可以通過添加遠程倉儲地址來實現 \n git remote add origin <remote_repository_URL> \n 提交操作: \n 可以利用 git push 推送到倉儲 \n 使用 git pull 從遠程倉儲拉取更改到最新版本 \n \n git的發展歷史 \n git是由Linus Torvalds在2005年開發的分散式版本系統 \n 1.2005年git誕生:開發者在Linux內核開發過程中遇到了對版本控制系統的需求，由於對當時版本控制系統不滿意，他決定開發全新的版本控制系統，這就是git。 \n 2.2005年4月:git首次公開發布。 \n 3.2005年6月: Linux內核項目轉向git進行版本控制 ， 這是git發展歷史上的一個重要轉折點 ，也是git得到廣泛認可的開始。 \n 4.2007年Github成立，他是一個基於git的程式碼託管平台，成立於2007年，為開發者提供了一個便捷的程式碼託管、協作開發的平台，推動了git的普及和發展。 \n 5.2008年git1.5.6發布，引進一些重要的功能和改進，使git更加穩定和易用。 \n 6.2016年 Microsoft收購Github ，推動了git在開發者社區的地位，並加速Github平台發展。 \n 7.2020年git2.28發布，帶來新功能和改進，包括 增強子模組支持、改進的性能和穩定性 等。 \n 8.2020年Github推出Codespaces和Discussions，為開發者提供更多便利和交流機會。 \n 9.2020年Github宣布支持密碼存儲庫存儲，支持私人存儲庫存在冷藏狀態，以解決長期存儲和備份的問題。 \n 創作人的相關履歷 \n Linus Torvalds是git的創辦人之一 \n 本名: Linus Benedict Torvalds \n 出生日期: 1969年12月28日 \n 出生地: 芬蘭赫爾辛基 \n 教育背景: \n 1988年，進入芬蘭赫爾辛基大學就讀，主修計算機科學。 \n 1996年，獲得赫爾辛基大學計算機科學學士學位。 \n 職業生涯 \n 1991年，創建了 Linux 操作系統核心，並開始在全球範圍內發佈。 \n 2005年，開始開發 git 分散式版本控制系統，並於同年向社區發佈。 \n 除了 Linux 和 git 之外，他還參與了許多開源項目的開發和管理，並在計算機科學研究領域發表了許多論文。 \n 獎項和榮譽 \n 1997年，獲得愛因斯坦獎。 \n 1998年，獲得 Free Software Foundation 授予的 Free Software Award。 \n 2010年，獲得 Millennium Technology Prize。 \n 2012年，獲得共享獎。 \n 2014年，獲得亞瑟·克拉克獎。 \n 一般相同專業人士如何利用 \xa0git 解決內容管理問題? \n 1. 版本控制 \n git 可以追蹤文件的變更歷史，可讓專業人士可以輕鬆地管理文件的不同版本，對於軟體開發者來說尤其重要，他們可以隨時回溯到過去的版本，比較不同版本之間的差異，甚至回滾到較早的版本。對於文檔編輯和內容創作也非常有用，可以追蹤編輯歷史並輕鬆地合併不同版本的變更。 \n 2. 協作開發 \n git 支持多人同時協作開發，多個開發者可以在不同的分支上進行工作，並通過合併操作將自己的工作合併到主分支中。這使得團隊成員可以同時進行工作，而不會互相干擾，從而提高了開發效率。 \n 3. 分支管理 \n git 的分支功能非常強大，可以讓專業人士輕鬆地創建、切換和合併分支。這使得專業人士可以方便地在不影響主要開發流程的情況下進行實驗、修復錯誤或者開發新的功能。 \n 4. 代碼審查 \n git 支持代碼審查功能，開發者可以通過發送合併請求（Pull Request）的方式將自己的代碼提交給其他成員進行審查。這有助於提高代碼質量、發現潛在的問題和增進團隊之間的溝通。 \n 5. 文檔管理 \n git\xa0可以作為一個強大的工具。專業人士可以使用 git 來追蹤文檔的修改歷史，並通過分支和合併操作來管理不同版本的文檔。這使得團隊成員可以輕鬆地協作編輯文檔，同時保持文檔的統一性和準確性。 \n 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? \n 配置git使用者資訊: \n 打開命令(CMDorPowerShell)，並輸入命令配置 \n git config --global user.name "Your Name" git config --global user.email "your.email@example.com" \n 建立本地git倉庫: \n 輸入 git init 指令 \n 建立檔案並提交更改: \n 可使用 git add . 添加到暫存區，再提交這些更改到倉庫中 git commit -m "Initial commit " \n 設置git伺服器: \n 在 Windows 上搭建 git 伺服器可以使用軟體如 GitLab、Gitea 或者搭建裸倉庫。 \n 選擇一個合適文件夾作為git伺服器的存儲目錄。可使用 git init --bare 指令執行 \n 連結git客戶端和伺服器: \n 增加遠程倉庫地址輸入指令 git remote add origin <server_address>/<repo_name>.git \n 其中 <server_address>是你git伺服器地址 ， <repo_name>是你在伺服器上創建的倉庫名稱 。 \n 將本地倉庫的內容推送到git伺服器上: \n 使用指令 git push -u origin master 即可 \n 在使用 git pull 拉取伺服器上的更改', 'tags': '', 'url': 'w6.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};
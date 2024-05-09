$(document).ready(function() {
    // カウンターの初期値
    let winCount = 0;
    let loseCount = 0;
    let drawCount = 0;

    // プレイヤーが手を選択したときの処理
    $(".item img").click(function() {
        // プレイヤーの手を取得
        let playerHand = $(this).attr("alt");
        let playerHandIndex = $(this).parent().index();

        // プレイヤーの手を表示
        $("#player-hand-img").attr("src", $(this).attr("src"));
        $("#player-choice-text").text(playerHand);

        // コンピュータの手をランダムで決定
        let computerHandIndex = Math.floor(Math.random() * 3);
        let computerHand = ["ぐー", "ちょき", "ぱー"][computerHandIndex];

        // コンピュータの手を表示
        $("#computer-hand-img").attr("src", $(".item img").eq(computerHandIndex).attr("src"));
        $("#computer-choice-text").text(computerHand);

        // 勝敗の判定
        let result;
        if (playerHandIndex === computerHandIndex) {
            result = "結果：あいこ";
            drawCount++;
        } else if ((playerHandIndex === 0 && computerHandIndex === 1) ||
                   (playerHandIndex === 1 && computerHandIndex === 2) ||
                   (playerHandIndex === 2 && computerHandIndex === 0)) {
            result = "結果：あなたの勝ち";
            winCount++;
        } else {
            result = "結果：ねこの勝ち";
            loseCount++;
        }

        // 勝敗の結果を表示
        $("#result-message").text(result);

        // カウンターの更新
        $("#win-count").text(winCount);
        $("#lose-count").text(loseCount);
        $("#draw-count").text(drawCount);

        // 勝率の計算と表示
        let totalGames = winCount + loseCount + drawCount;
        let winRate = (winCount / totalGames * 100).toFixed(2);
        $("#win-rate").text(winRate + "%");
    });

    // リセットボタンがクリックされたときの処理
        
    // $("reset-button").onclick(function() {
        setButtonElement.onclick = function() {

    
        // カウンターをリセット
        let winCount = 0;
        let loseCount = 0;
        let drawCount = 0;
        let winRate = 0;
        }
        // // 表示を更新
        // $("#win-count").text(winCount);
        // $("#lose-count").text(loseCount);
        // $("#draw-count").text(drawCount);
        // $("#win-rate").text("0%");
        // $("#result-message").text("");

        // プレイヤーとコンピュータの手を非表示にする
        $("#player-hand-img").attr("src", "");
        $("#player-choice-text").text("");
        $("#computer-hand-img").attr("src", "");
        $("#computer-choice-text").text("");
    });


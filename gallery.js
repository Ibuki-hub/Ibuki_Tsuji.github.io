function pw(){
  PRO = prompt("パスワードを入力して「ok」ボタンを押してください","");
  if(!(PRO=="" || PRO==null)){location.href=/drive.google.com/drive/folders/PRO}
  else{alert("なにも入力されていないか、[Cancel]ボタンが押されました。")}
}

document.addEventListener("DOMContentLoaded", () => {
  setUpAccordion();
});
  
  /**
   * ブラウザの標準機能(Web Animations API)を使ってアコーディオンのアニメーションを制御します
   */
  const setUpAccordion = () => {
    const details = document.querySelectorAll(".js-details");
    const RUNNING_VALUE = "running"; // アニメーション実行中のときに付与する予定のカスタムデータ属性の値
    const IS_OPENED_CLASS = "is-opened"; // アイコン操作用のクラス名
  
    details.forEach((element) => {
      const summary = element.querySelector(".js-summary");
      const content = element.querySelector(".js-content");
  
      summary.addEventListener("click", (event) => {
        // デフォルトの挙動を無効化
        event.preventDefault();
  
        // 連打防止用。アニメーション中だったらクリックイベントを受け付けないでリターンする
        if (element.dataset.animStatus === RUNNING_VALUE) {
          return;
        }
  
        // detailsのopen属性を判定
        if (element.open) {
          // アコーディオンを閉じるときの処理
          // アイコン操作用クラスを切り替える(クラスを取り除く)
          element.classList.toggle(IS_OPENED_CLASS);
  
          // アニメーションを実行
          const closingAnim = content.animate(closingAnimKeyframes(content), animTiming);
          // アニメーション実行中用の値を付与
          element.dataset.animStatus = RUNNING_VALUE;
  
          // アニメーションの完了後に
          closingAnim.onfinish = () => {
            // open属性を取り除く
            element.removeAttribute("open");
            // アニメーション実行中用の値を取り除く
            element.dataset.animStatus = "";
          };
        } else {
          // アコーディオンを開くときの処理
          // open属性を付与
          element.setAttribute("open", "true");
  
          // アイコン操作用クラスを切り替える(クラスを付与)
          element.classList.toggle(IS_OPENED_CLASS);
  
          // アニメーションを実行
          const openingAnim = content.animate(openingAnimKeyframes(content), animTiming);
          // アニメーション実行中用の値を入れる
          element.dataset.animStatus = RUNNING_VALUE;
  
          // アニメーション完了後にアニメーション実行中用の値を取り除く
          openingAnim.onfinish = () => {
            element.dataset.animStatus = "";
          };
        }
      });
    });
  }
  
  /**
   * アニメーションの時間とイージング
   */
  const animTiming = {
    duration: 400,
    easing: "ease-out"
  };
  
  /**
   * アコーディオンを閉じるときのキーフレーム
   */
  const closingAnimKeyframes = (content) => [
    {
      height: content.offsetHeight + 'px', // height: "auto"だとうまく計算されないため要素の高さを指定する
      opacity: 1,
    }, {
      height: 0,
      opacity: 0,
    }
  ];
  
  /**
   * アコーディオンを開くときのキーフレーム
   */
  const openingAnimKeyframes = (content) => [
    {
      height: 0,
      opacity: 0,
    }, {
      height: content.offsetHeight + 'px',
      opacity: 1,
    }
  ];

  // キーを押したとき
$(window).on('keydown', function(e){
  var keyCode = e.keyCode;
  
  if(keyCode == 16 || keyCode == 44 || keyCode == 91 || keyCode == 92){
      $('img').hide();
      return false;
  }
});

// キーを離したとき
$(window).on('keyup', function(){
   $('img').show();
});

document.addEventListener("DOMContentLoaded", () => {
  setUpAccordion();
});

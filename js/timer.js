/**
 * HTMLエレメント内に書かれたdata属性の日付に従い、
 * コンテンツを表示・非表示処理する。
 */
 window.onload = () => {
  const elements = document.querySelectorAll('.js-timer');
  elements.forEach((el) => {
    const now = new Date().getTime();
    const start = new Date(el.dataset.start).getTime();
    const end = new Date(el.dataset.end).getTime();
    let flag = false; // Global Flag
    /**
     * 現在が開始日以降か判定
     *
     * @return Boolean;
     */
    const checkerStart = () => {
      if (now > start) {
        return true;
      } else {
        return false;
      }
    };
    /**
     * 現在が終了日以前か判定
     *
     * @return Boolean;
     */
    const checkerEnd = () => {
      if (now < end) {
        return true;
      } else {
        return false;
      }
    };
    /*
     * メイン判定処理
     */
    if (start && end) {
      if (checkerStart() && checkerEnd()) flag = true;
    } else if (start && !end) {
      if (checkerStart()) flag = true;
    } else if (!start && end) {
      if (checkerEnd()) flag = true;
    } else {
      flag = false;
    }
    if (!flag) el.setAttribute('style', 'display: none;');
  });
};
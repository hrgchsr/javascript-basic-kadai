 // dateオブジェクトを用いてtodayオブジェクトを作成する
 const today = new Date();

 const year = today.getFullYear();
 //getMonth()メソッドは0から11までの数値を返すため、実際の月を得るには1を足す
 const month = today.getMonth()+1;
 const day = today.getDate();

 // 値を出力する
 console.log(year+"年"+month+"月"+day+"日");

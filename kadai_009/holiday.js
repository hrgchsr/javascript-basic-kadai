const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

//for文を使用し、配列に代入されたすべての祝日をコンソールに出力する
// 0～15までの数値を順番に出力する
for (let i = 0; i <= 15; i++) {
  console.log(holidays[i]);
}

//while文を使用し、配列に代入されたすべての祝日がコンソールに出力されている

 // 変数の宣言・値の代入
let num = 0;

while (num <= 15) {
  console.log(holidays[num]);
  num++
}
// 定数の宣言・値の代入
const element = document.getElementById('animal');

element.addEventListener('click', () => {
  document.getElementById('animal').style.display = 'none';
  });

  // 定数の宣言・値の代入
const change = () => {

  if (document.getElementById('disAppear').style.display== 'block') {
      document.getElementById('disAppear').style.display = 'none';
    } else {
      document.getElementById('disAppear').style.display='block';
  }
  };

const Btn = document.querySelector('button');
const block1 = document.getElementsByClassName('block1');

/*ボタンを押すことで表示・非表示の切り替えをします*/
Btn.addEventListener('click', function (event) {
  block1[0].classList.toggle('hide');
});
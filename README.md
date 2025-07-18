const menus = [
  {
    image: "images/menu1.jpg",
    html: `
      <h2>Day 1｜鶏むね肉のグリル バジルソース</h2>
      <p><strong>材料（1人分）</strong><br>
      鶏むね肉 150g、オリーブオイル 小さじ1、バジル 少々、ブロッコリー 50g、卵 1個、もち麦ごはん 100g</p>
      <p><strong>作り方</strong><br>
      1. 鶏むね肉に塩こしょうとバジルをふり、グリルする。<br>
      2. ブロッコリーと卵をゆでて盛り付ける。<br>
      3. もち麦ごはんを添えて完成。</p>
      <p><strong>PFCバランス</strong><br>
      たんぱく質：38g / 脂質：7g / 炭水化物：38g / カロリー：約400kcal</p>
    `
  },
  // {
  image: "images/menu3.jpg",
  html: `
    <h2>Day 3｜豆腐ハンバーグ 和風おろしソース</h2>
    <p><strong>材料（1人分）</strong><br>
    鶏ひき肉 80g、木綿豆腐 100g、玉ねぎ 1/4個、大根おろし 30g、醤油 小さじ1、ブロッコリー、雑穀ご飯 100g</p>
    <p><strong>作り方</strong><br>
    1. 豆腐は水切りし、ひき肉・みじん切り玉ねぎと混ぜて焼く。<br>
    2. 大根おろしと醤油を合わせ、上からかける。</p>
    <p><strong>PFCバランス</strong><br>
    たんぱく質：35g / 脂質：8g / 炭水化物：38g / カロリー：約400kcal</p>
  `
},
{
  image: "images/menu4.jpg",
  html: `
    <h2>Day 4｜チキンと彩り野菜のトマト煮</h2>
    <p><strong>材料（1人分）</strong><br>
    鶏もも皮なし 100g、パプリカ、ズッキーニ、玉ねぎ、トマト缶 1/4缶、もち麦ご飯 100g</p>
    <p><strong>作り方</strong><br>
    1. 鶏と野菜を炒め、トマト缶を加えて煮込む。<br>
    2. 味を塩で整え、もち麦ごはんと一緒に。</p>
    <p><strong>PFCバランス</strong><br>
    たんぱく質：32g / 脂質：9g / 炭水化物：42g / カロリー：約410kcal</p>
  `
},
{
  image: "images/menu5.jpg",
  html: `
    <h2>Day 5｜白身魚の南蛮漬け</h2>
    <p><strong>材料（1人分）</strong><br>
    タラ 100g、玉ねぎ・にんじん・ピーマン適量、酢・しょうゆ・みりん 各大さじ1、雑穀米 100g</p>
    <p><strong>作り方</strong><br>
    1. タラに軽く片栗粉をまぶして焼く。<br>
    2. 野菜と調味料で漬け汁を作り、魚を漬け込む。</p>
    <p><strong>PFCバランス</strong><br>
    たんぱく質：34g / 脂質：6g / 炭水化物：37g / カロリー：約380kcal</p>
  `
},
{
  image: "images/menu6.jpg",
  html: `
    <h2>Day 6｜サバの味噌煮と青菜おひたし</h2>
    <p><strong>材料（1人分）</strong><br>
    サバ 80g、味噌 小さじ2、みりん・砂糖 各小さじ1、ほうれん草 50g、雑穀ご飯 100g</p>
    <p><strong>作り方</strong><br>
    1. サバを調味料で煮込む。<br>
    2. ほうれん草を茹でて醤油で味付け。</p>
    <p><strong>PFCバランス</strong><br>
    たんぱく質：30g / 脂質：10g / 炭水化物：35g / カロリー：約400kcal</p>
  `
},
{
  image: "images/menu7.jpg",
  html: `
    <h2>Day 7｜豚ヒレの生姜焼き</h2>
    <p><strong>材料（1人分）</strong><br>
    豚ヒレ肉 100g、生姜・醤油・酒 各小さじ1、キャベツ千切り、雑穀ご飯 100g</p>
    <p><strong>作り方</strong><br>
    1. 豚ヒレを調味料に漬けて焼く。<br>
    2. キャベツと一緒に盛り付ける。</p>
    <p><strong>PFCバランス</strong><br>
    たんぱく質：36g / 脂質：7g / 炭水化物：40g / カロリー：約410kcal</p>
  `
}
];

function loadRandomMenu() {
  const index = Math.floor(Math.random() * menus.length);
  const menu = menus[index];
  document.getElementById("menu-image").src = menu.image;
  document.getElementById("menu-details").innerHTML = menu.html;
}

// ページ読み込み時にランダムで表示
window.onload = loadRandomMenu;

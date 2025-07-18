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
  // 今後、menu2～menu30をここに追加
];

function loadRandomMenu() {
  const index = Math.floor(Math.random() * menus.length);
  const menu = menus[index];
  document.getElementById("menu-image").src = menu.image;
  document.getElementById("menu-details").innerHTML = menu.html;
}

// ページ読み込み時にランダムで表示
window.onload = loadRandomMenu;

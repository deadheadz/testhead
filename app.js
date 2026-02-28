const result = document.getElementById("result");

function search() {
  const keyword = document.getElementById("keyword").value.trim();
  result.innerHTML = "";

  if (!keyword) return;

  // デモ用（radikoは直接API叩けないため）
  const demoData = [
    { station: "TOKYO FM", title: "山下達郎のサンデー・ソングブック" },
    { station: "RKBラジオ", title: "ゴリけんのもりもりマニア" },
    { station: "NHK-FM", title: "伊集院光 深夜の馬鹿力" }
  ];

  demoData
    .filter(p => p.title.includes(keyword))
    .forEach(p => {
      const li = document.createElement("li");
      li.textContent = `${p.station}：${p.title}`;
      result.appendChild(li);
    });
}
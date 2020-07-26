let stage = 1;
let bossStage = false;
let bossFlag1 = [250, 500, 1000, 2000];
let bossFlag2 = [30, 125, 300, 900];
let bossDown = false;
let nEXP = 0;
let nATK = 0;
let clear = false;
let YoN;
let plyName = prompt("名前を入力", "村人A");
let flag = true;
//player data
let plyLv = 1;
let plyHP = 6;
let plyHPMax = 6;
let plyATK = 1;
let plyHeal = 1;
let plyExp = 0;
let plyExpNext = 5;
let ExpEX = 0;
let plyExpNeed = 5;
let plyImg = document.getElementById("plyImg");
let plySt = ["Name", "Lv", "HP", "ATK", "healing", "Exp", "ExpNext"];
for (let i = 0; i < plySt.length; i++) {
  plySt[i] = document.getElementById("plySt" + i);
  console.log(plySt[i]);
}
//player healing
plySt0.textContent = plyName;
plyImg.addEventListener("mousedown", () => {
  if (flag) {
    plyImg.src = "img/playerC.png";
  }
});
plyImg.addEventListener("mouseup", () => {
  if (flag) {
    plyImg.src = "img/playerA.png";
    if (plyHP < plyHPMax) {
      plyHP += plyHeal;
    }
    if (plyHP > plyHPMax) {
      plyHP = plyHPMax;
    }
    plySt2.textContent = "HP:" + plyHP;
  }
});

//enemy data
let eneLv = 1;
let eneHP = 10;
let eneHPMax0 = 10;
let eneATK0 = 2;
let eneKilled0 = 0;
let eneExp = 1;
let eneCnt = 5;
let eneCntMax0 = 5;
let eneImg = document.getElementById("eneImg");
let eneSt = ["Name", "Lv", "HP", "ATK", "Killed"];
for (let i = 0; i < eneSt.length; i++) {
  eneSt[i] = document.getElementById("eneSt" + i);
  console.log(eneSt[i]);
}
let monster = new Array(26);
for (let i = 0; i < monster.length; i++) {
  monster[i] = new Object();
}
monster[0].name = "スライム";
monster[0].hp = 10;
monster[0].atk = 1;
monster[1].name = "コウモリ";
monster[1].hp = 12;
monster[1].atk = 13;
monster[2].name = "ネズミ";
monster[2].hp = 14;
monster[2].atk = 16;
monster[3].name = "ヘビ";
monster[3].hp = 16;
monster[3].atk = 19;
monster[4].name = "オオカミ";
monster[4].hp = 18;
monster[4].atk = 22;
monster[5].name = "ゴブリン";
monster[5].hp = 20;
monster[5].atk = 25;
monster[6].name = "ゴースト";
monster[6].hp = 22;
monster[6].atk = 28;
monster[7].name = "ゾンビ";
monster[7].hp = 24;
monster[7].atk = 31;
monster[8].name = "ファイアスピリット";
monster[8].hp = 26;
monster[8].atk = 34;
monster[9].name = "ベアー";
monster[9].hp = 28;
monster[9].atk = 37;
monster[10].name = "大木";
monster[10].hp = 30;
monster[10].atk = 40;
monster[11].name = "ニワトリ";
monster[11].hp = 32;
monster[11].atk = 43;
monster[12].name = "毒キノコ";
monster[12].hp = 34;
monster[12].atk = 46;
monster[13].name = "ミミック";
monster[13].hp = 36;
monster[13].atk = 49;
monster[14].name = "ダークゴースト";
monster[14].hp = 38;
monster[14].atk = 52;
monster[15].name = "黒トカゲ";
monster[15].hp = 40;
monster[15].atk = 55;
monster[16].name = "シャドウ";
monster[16].hp = 42;
monster[16].atk = 58;
monster[17].name = "兵士";
monster[17].hp = 44;
monster[17].atk = 61;
monster[18].name = "赤鬼";
monster[18].hp = 46;
monster[18].atk = 64;
monster[19].name = "レッドドラゴン";
monster[19].hp = 48;
monster[19].atk = 67;
monster[20].name = "グリフォン";
monster[20].hp = 50;
monster[20].atk = 70;
monster[21].name = "サソリ";
monster[21].hp = 52;
monster[21].atk = 73;
monster[22].name = "ケルベロス";
monster[22].hp = 54;
monster[22].atk = 76;
monster[23].name = "メージ";
monster[23].hp = 56;
monster[23].atk = 79;
monster[24].name = "パンプキンヘッド";
monster[24].hp = 58;
monster[24].atk = 82;
monster[25].name = "アンコウ";
monster[25].hp = 60;
monster[25].atk = 85;

//boss status
let boss = new Array(4);
for (let i = 0; i < boss.length; i++) {
  boss[i] = new Object();
}
boss[0].name = "四天王の中でも最弱";
boss[0].hp = 500;
boss[0].atk = 60;
boss[0].exp = 100;
boss[1].name = "カルト司教";
boss[1].hp = 600;
boss[1].atk = 250;
boss[1].exp = 500;
boss[2].name = "ぼわぼわ";
boss[2].hp = 1600;
boss[2].atk = 600;
boss[2].exp;
boss[3].name = "第二形態はありません";
boss[3].hp = 6000;
boss[3].atk = 1800;

//enemy event
eneSt0.textContent = "スライム";
eneImg.addEventListener("mousedown", () => {
  if (flag) {
    //boss event
    if (stage <= 4) {
      if (bossFlag1[stage - 1] < eneKilled0 && bossFlag2[stage - 1] < plyLv) {
        bossStage = true;
        stage++;
        if (bossStage) {
          console.log("eneExp" + eneExp);
          console.log("eneATK0" + eneATK0);
          nExp = eneExp;
          nATK = eneATK0;
          bossSpn();
        }
      }
      if (bossDown) {
        eneExp = nExp;
        eneATK0 = nATK;
        console.log("eneExp" + eneExp);
        console.log("eneATK0" + eneATK0);
        clear = true;
        eneSpn();
        eneCntMax0 = 5;
        console.log("downed");
        console.log(clear);
        bossDown = false;
      }
    }

    if (bossStage) {
      eneImg.src = "img/bossA" + (stage - 2) + ".png";
    } else {
      eneImg.src = "img/enemyB" + (eneLv - 1) + ".png";
    }
  }
});
eneImg.addEventListener("mouseup", () => {
  if (flag) {
    if (bossStage) {
      eneImg.src = "img/bossB" + (stage - 2) + ".png";
    } else {
      eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
    }
    if (eneHP > 0) {
      eneHP -= plyATK;
    } else {
      if (bossStage) {
        clear = true;
        bossDown = true;
        bossStage = false;
      }
      eneHP = eneHPMax0;
      eneKilled0++;
      eneSt4.textContent = "倒した回数:" + eneKilled0;
      //経験値処理
      plyExp += eneExp;
      plySt5.textContent = "経験値:" + plyExp;
      plyExpNext -= eneExp;
      //Lv UP処理
      if (plyExpNext == 0 || plyExpNext < 0) {
        if (plyExpNext < 0) {
          ExpEX = plyExpNext;
          plyExp -= ExpEX;
        } else {
          ExpEX = 0;
        }
        plyLv++;
        plyExpNext = plyLv * 5;
        plyExpNext += ExpEX;
        plySt1.textContent = "レベル:" + plyLv;
        plyHPMax = plyLv * 2 + 6;
        plyHP = plyHPMax;
        plySt2.textContent = "HP:" + plyHP;
        plyATK += 2;
        plySt3.textContent = "攻撃力:" + plyATK;
        plyHeal++;
        plySt4.textContent = "回復魔力:" + plyHeal;
      }
      plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
    }
    eneSt2.textContent = "HP:" + eneHP;
  }
});

//敵が時間毎に攻撃
let eneSec = document.getElementById("eneSec");
let loop = setInterval(() => {
  if (eneCnt > 0) {
    eneCnt--;
    eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
  } else {
    plyImg.src = "img/playerB.png";
    plyHP -= eneATK0;
    if (plyHP > 0) {
      plySt2.textContent = "HP:" + plyHP;
      eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
    } else {
      plyHP = 0;
      clearInterval(loop);
      flag = false;
      plySt2.textContent = "HP:" + plyHP;
      eneSec.textContent = "GAME OVER";
    }
    setTimeout(() => {
      if (flag) {
        eneCnt = eneCntMax0;
        plyImg.src = "img/playerA.png";
      }
    }, 500);
  }
  if (clear) {
    console.log("clear");
    flag = false;
    YoN = prompt("Game Clear!\nContinue?\nYes:y , No:n", "n");
    if (YoN == "y") {
      flag = true;
      clear = false;
    } else {
      clearInterval(loop);
      document.querySelector("table").remove();
      document.querySelector("h2").remove();
      document.querySelector("p").remove();
      document.querySelector("p").remove();
      eneImg.style.display = "none";
      plyImg.src = "img/clear.png";
    }
  }
}, 1000);

document.getElementById("left").addEventListener("mouseup", () => {
  if (flag) {
    if (eneLv > 1) {
      eneLv--;
      eneExp--;
      eneSpn();
    }
  }
});
document.getElementById("right").addEventListener("mouseup", () => {
  if (flag) {
    if (eneLv > 0 && eneLv != 26) {
      eneLv++;
      eneExp++;
      eneSpn();
    }
  }
});

function eneSpn() {
  eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
  eneSt0.textContent = monster[eneLv - 1].name;
  eneHPMax0 = monster[eneLv - 1].hp;
  eneATK0 = monster[eneLv - 1].atk;
  eneHP = eneHPMax0;
  eneSt1.textContent = "レベル:" + eneLv;
  eneSt2.textContent = "HP:" + eneHP;
  eneSt3.textContent = "攻撃力:" + eneATK0;
  console.log(eneLv);
}
function bossSpn() {
  eneImg.src = "img/bossA" + (stage - 2) + ".png";
  eneSt0.textContent = boss[stage - 2].name;
  eneHP = boss[stage - 2].hp;
  eneATK0 = boss[stage - 2].atk;
  eneExp = boss[stage - 2].exp;
  eneCntMax0 = 10;
  eneSt1.textContent = "レベル:???";
  eneSt2.textContent = "HP:" + boss[stage - 2].hp;
  eneSt3.textContent = "攻撃力:" + boss[stage - 2].atk;
  console.log(eneLv);
}

// cursor animation
function cursor() {
              var body = document.querySelector("body");
              var cursor = document.querySelector("#cursor")

              body.addEventListener("mousemove", function (dets) {
                            gsap.to(cursor, {
                                          x: dets.x,
                                          y: dets.y,
                                          duration: 1,
                                          opacity: 1,
                                          ease: "back.out"
                            })
              })       
}

cursor()


// function allText() {
//               // logo animtion
//               function breakTheTest() {
//                             var h1 = document.querySelector("#nav h1");
//                             var h1Text = h1.textContent

//                             var splittedText = h1Text.split("")

//                             var clutter = ""

//                             var halfValue = Math.floor(splittedText.length / 2)
//                             splittedText.forEach(function (elem, idx) {
//                                           if (idx < halfValue) {
//                                                         clutter += `<span class="a">${elem}</span>`
//                                           }
//                                           else {
//                                                         clutter += `<span class="b">${elem}</span>`
//                                           }
//                             })

//                             h1.innerHTML = clutter
//               }
//               breakTheTest()

//               function textContent() {
//                             gsap.from("h1 .a", {
//                                           y: 50,
//                                           opacity: 0,
//                                           duration: 0.7,
//                                           delay: 1,
//                                           stagger: 0.15
//                             });

//                             gsap.from("h1 .b", {
//                                           y: 50,
//                                           opacity: 0,
//                                           duration: 0.7,
//                                           delay: 1,
//                                           stagger: -0.15
//                             });
//               }

//               textContent()

//               // locomotive
//               const scroll = new LocomotiveScroll({
//                             el: document.querySelector('#main'),
//                             smooth: true,
//               });
// }

// allText()

function makeBubble() {
              var clutter = ""

              for (var i = 1; i <= 168; i++) {
                            var rn = Math.floor(Math.random() * 10);
                            clutter += `<div id="bubble">${rn}</div>`;
              }

              document.querySelector("#pbtm").innerHTML = clutter;
}

makeBubble()


var timer = 60;
function runTimer() {
              var timerint = setInterval(function () {
                            if (timer > 0) {
                                          timer--;
                                          document.querySelector("#timerval").textContent = timer;         
                            }
                            else {
                                          clearInterval(timerint);
                                          document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
                            }
              }, 1000);
}

runTimer()


var hitrn = 0;
function getNewHit() {
              hitrn = Math.floor(Math.random() * 10);
              document.querySelector("#hitval").textContent = hitrn;
}

getNewHit()

var score = 0;

function increaseScore() {
              score += 5;
              document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
              var clickednum = Number(dets.target.textContent);
              if (clickednum === hitrn) {
                            increaseScore();
                            makeBubble();
                            getNewHit();
              }
})

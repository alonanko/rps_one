function computerPlay(){
    a = ["rock", "paper", "scissors"]
    return a[Math.floor(Math.random()*3)]
}

ans = computerPlay();
console.log(ans)
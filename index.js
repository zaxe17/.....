var name = window.prompt("enter your name:");
var ques = window.prompt(`hello ${name}`);
if (ques) {
    var ques2 = window.prompt("kumusta ka?");
    const ok = ["ok", "okay", "k", "oky"];
    if (ok.some(word => ques2.includes(word))) {
        var conf = window.confirm("wala ka jowa?");
        if (conf) {
            alert(`ako nalang ${name} please`);
        }//if conf
        else {
            alert("mag hihiwalay rin kayo")
        }//else conf
    }//if ques2
    else {
        alert("ok lang yan lods");
        alert("be happy lang ok");
    }//else ques2
} //if ques
else {
    alert("haha");
}//else ques

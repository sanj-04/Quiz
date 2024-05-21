function store() {

    var n = document.querySelector("input[name=r1]:checked").value;
    localStorage.setItem("q1", n);
    var n = document.querySelector("input[name=r2]:checked").value;
    localStorage.setItem("q2", n);
    var n = document.querySelector("input[name=r3]:checked").value;
    localStorage.setItem("q3", n);
    var n = document.querySelector("input[name=r4]:checked").value;
    localStorage.setItem("q4", n);
    var n = document.querySelector("input[name=r5]:checked").value;
    localStorage.setItem("q5", n);
    }
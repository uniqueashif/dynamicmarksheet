var student = []
document.getElementById("btn").onclick = function() {
    let name = document.getElementById("name").value
    let roll = document.getElementById("roll").value
    let hindi = parseInt(document.getElementById("hindi").value)
    let english = parseInt(document.getElementById("english").value)
    let math = parseInt(document.getElementById("math").value)
    let science = parseInt(document.getElementById("science").value)
    let computer = parseInt(document.getElementById("computer").value)
    var detail = {
        name: name,
        roll: roll,
        hindi: hindi,
        english: english,
        math: math,
        science: science,
        computer: computer,
        total: function() {
            var tot = this.hindi + this.english + this.math + this.science + this.computer;
            return tot

        },
        per: function() {
            return this.total() / 5
        },
        grade: function() {
            if (this.hindi < 33 || this.english < 33 || this.math < 33 || this.science < 33 || this.computer < 33) {
                return "Fail"
            } else if (this.hindi > 100 || this.english > 100 || this.math > 100 || this.science > 100 || this.computer > 100) {
                return "Invalid Result"
            } else {

                if (this.per() >= 60) {
                    return "First Division"
                } else if (this.per() >= 45) {
                    return "Second Division"
                } else if (this.per() >= 33) {
                    return "Third Division"
                }
            }
        }

    }
    student.push(detail)
    var tbl = `<table class="table table-striped table-dark">
        <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Hindi</th>
            <th>English</th>
            <th>Math</th>
            <th>Science</th>
            <th>Computer</th>
            <th>Total</th>       
            <th>per </th>       
            <th>Grade </th>       
        </tr>`
    student.forEach(function(sdata) {
        tbl += ` <tr><td>${sdata.name}</td><td>${sdata.roll}</td><td>${sdata.hindi}</td><td>${sdata.english}</td><td>${sdata.math}</td><td>${sdata.science}</td><td>${sdata.computer}</td><td>${sdata.total()}</td><td>${sdata.per()}</td><td>${sdata.grade()}</td></tr>`
    })


    document.getElementById("tb").innerHTML = tbl
    document.getElementById("name").value = ""
    document.getElementById("roll").value = ""
    document.getElementById("hindi").value = ""
    document.getElementById("english").value = ""
    document.getElementById("math").value = ""
    document.getElementById("science").value = ""
    document.getElementById("computer").value = ""
}
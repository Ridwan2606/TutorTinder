var current_user = -1;
var search_user = -1;

function sign_up () {

    if (($("#pass").val()) !== ($("#re_pass").val())){
        alert("Not same password")


        
    } else {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/api/add_record",
            data: {
                "name": $("#name").val(),
                "password": $("#pass").val(),
                "location": $("#location").val(),
                "phone": $("#phone").val(),
                "email": $("#email").val(),
                "role": $("input[name='prof']:checked").val()
            }
        }).done(function(data) {

            console.log(data)
            window.location.replace("index.html")
        }).fail(function() {
            console.log("fail")
        });
    }
}

function sign_in(){
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/get_user", // another link
        data: {
            "username": $("#name").val(),
            "password": $("#pass").val(),
        }
    }).done(function(data) {
        if (data.Successful === "False") {
            alert("Wrong username or password")
        } else {
            current_user = data.Userid
            $("#displayName").text(data.Name)
            $("#displayLocation").text(data.Location)
            $("#displayPhone").text(data.Phone_number)
            $("#displayEmail").text(data.Username)
            $("#displayProf").text(data.Role)

            if (data.Role === "Student") {
                $("#displayBudget").text(data.isSpecialNeed)
                $("#displayBudget").text(data.Budget)
                $("#displayYear1").text(data.year1)
                $("#displayYear2").text(data.year2)
                $("#displayYear3").text(data.year3)
                $("#displayEdu1").text(data.education1)
                $("#displayEdu2").text(data.education2)
                $("#displayEdu3").text(data.education3)
                window.location.replace("profileStudent.html")
            } else {
                $("#displayBudget").text(data.canTakeSpecialNeed)
                $("#displaySkill1").text(data.Skill1 + " - " + data.price1)
                $("#displaySkill2").text(data.Skill2 + " - " + data.price2)
                $("#displaySkill3").text(data.Skill3 + " - " + data.price3)
                $("#displayWorkYear1").text(data.year1)
                $("#displayWorkYear2").text(data.year2)
                $("#displayWorkYear3").text(data.year3)
                $("#displayExp1").text(data.work1)
                $("#displayExp2").text(data.work1)
                $("#displayExp3").text(data.work1)
                window.location.replace("profileTutor.html")
            }
        }

        console.log(data)

    }).fail(function() {
        console.log("fail")
    });
}

function update(){
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/get_user", // another link
        data: {
            "Userid": current_user
        }
    }).done(function(data) {
        if (data.Successful === "False") {
            alert("Wrong username or password")
        } else {
            current_user = data.Userid
            $("#displayName").text(data.Name)
            $("#displayLocation").text(data.Location)
            $("#displayPhone").text(data.Phone_number)
            $("#displayEmail").text(data.Username)
            $("#displayProf").text(data.Role)

            if (data.Role === "Student") {
                $("#displayAmSpecialNeeds").text(data.isSpecialNeed)
                $("#displayBudget").text(data.Budget)
                $("#displayYear1").text(data.year1)
                $("#displayYear2").text(data.year2)
                $("#displayYear3").text(data.year3)
                $("#displayEdu1").text(data.education1)
                $("#displayEdu2").text(data.education2)
                $("#displayEdu3").text(data.education3)
                //window.location.replace("profileStudent.html")
            } else {
                $("#displayTeachSpecialNeeds").text(data.canTakeSpecialNeed)
                $("#displaySkill1").text(data.Skill1 + " - " + data.price1)
                $("#displaySkill2").text(data.Skill2 + " - " + data.price2)
                $("#displaySkill3").text(data.Skill3 + " - " + data.price3)
                $("#displayWorkYear1").text(data.year1)
                $("#displayWorkYear2").text(data.year2)
                $("#displayWorkYear3").text(data.year3)
                $("#displayExp1").text(data.work1)
                $("#displayExp2").text(data.work1)
                $("#displayExp3").text(data.work1)
                //window.location.replace("profileTutor.html")
            }
        }

        console.log(data)

    }).fail(function() {
        console.log("fail")
    });
}

function edit_education() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/edit_edu",
        data: {
            "Userid": current_user,
            "year1": $("#year1").val(),
            "year2": $("#year2").val(),
            "year3": $("#year3").val(),
            "edu1": $("#edu1").val(),
            "edu2": $("#edu2").val(),
            "edu3": $("#edu3").val(),
            "budget": $("#budget").val(),
            "amSpecialNeeds": $("input[name='amSpecialNeeds']:checked").val()
        }
    }).done(function(data) {
        $("#displayBudget").text(data.Budget)
        $("#displayAmSpecialNeed").text(data.isSpecialNeed)
        $("#displayYear1").text(data.year1)
        $("#displayYear2").text(data.year2)
        $("#displayYear3").text(data.year3)
        $("#displayEdu1").text(data.education1)
        $("#displayEdu2").text(data.education2)
        $("#displayEdu3").text(data.education3)

        console.log(data)
        window.location.replace("profileStudent.html")
    }).fail(function() {
        console.log("fail")
    });
}

function edit_experience() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/add_record",
        data: {
            "Userid": current_user,
            "workyear1": $("#workyear1").val(),
            "workyear1": $("#workyear1").val(),
            "workyear3": $("#workyear3").val(),
            "exp1": $("#exp1").val(),
            "exp2": $("#exp2").val(),
            "exp3": $("#exp3").val(),
            "teachSpecialNeeds": $("input[name='teachSpecialNeeds']:checked").val()
        }
    }).done(function(data) {
        /*
        $("#displayCanTeachSpecialNeed").text(data.CanTakeSpecialNeed)
        $("#displayWorkYear1").text(data.year1)
        $("#displayWorkYear2").text(data.year2)
        $("#displayWorkYear3").text(data.year3)
        $("#displayExp1").text(data.work1)
        $("#displayExp2").text(data.work2)
        $("#displayExp3").text(data.work2)
        */
        update()
        console.log(data)
        window.location.replace("profileTutor.html")
    }).fail(function() {
        console.log("fail")
    });
}

function edit_skill() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/add_record",
        data: {
            "Userid": current_user,
            "skill1": $("#skill1").val(),
            "skill2": $("#skill2").val(),
            "skill3": $("#skill3").val(),
        }
    }).done(function(data) {
        $("#displaySkill1").text(data.skill1 + " - " + data.price1)
        $("#displaySkill2").text(data.skill2 + " - " + data.price2)
        $("#displaySkill3").text(data.skill3 + " - " + data.price3)

        console.log(data)
        window.location.replace("profileTutor.html")
    }).fail(function() {
        console.log("fail")
    });
}

function search() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/add_record",
        data: {
            "Userid": current_user,
            "searchSkill": $("#searchSkill").val(),
            "searchLocation": $("#searchLocation").val(),
        }
    }).done(function(data) {
        $("#displaySkill1").text(data.skill1 + " - " + data.price1)
        $("#displaySkill2").text(data.skill2 + " - " + data.price2)
        $("#displaySkill3").text(data.skill3 + " - " + data.price3)

        console.log(data)
        window.location.replace("profileTutor.html")
    }).fail(function() {
        console.log("fail")
    });
}

function getTutor(x) {
    window.alert(x)
}
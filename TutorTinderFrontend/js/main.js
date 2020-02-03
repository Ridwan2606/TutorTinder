var current_user = -1;
var search_user = -1;

function sign_up() {

    if (($("#pass").val()) !== ($("#re_pass").val())) {
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
        }).done(function (data) {

            console.log(data)
            window.location.replace("index.html")
        }).fail(function () {
            console.log("fail")
        });
    }
}

function sign_in() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/get_user", // another link
        data: {
            "username": $("#your_name").val(),
            "password": $("#your_pass").val(),
        }
    }).done(function (data) {
        if (data.Successful === "False") {
            alert("Wrong username or password")
        } else {
            sessionStorage.setItem('current_user', data.Userid)
            /*
            $("#displayName").text("KOI")
            $("#displayLocation").text(data.Location)
            $("#displayPhone").text(data.Phone_number)
            $("#displayEmail").text(data.Username)
            $("#displayProf").text(data.Role)
            */
            sessionStorage.setItem('displayName1', data.Name)
            sessionStorage.setItem('displayLocation1', data.Location)
            sessionStorage.setItem('displayPhone1', data.Phone_number)
            sessionStorage.setItem('displayEmail1', data.Username)
            sessionStorage.setItem('displayProf1', data.Role)
            
            console.log("test")
            console.log(data.Role)
            if (data.Role === "Student") {
                sessionStorage.setItem('displayAmSpecialNeed', data.isSpecialNeed)
                sessionStorage.setItem('displayBudget1', data.Budget)
                sessionStorage.setItem('displayYear11', data.year1)
                sessionStorage.setItem('displayYear21', data.year2)
                sessionStorage.setItem('displayYear31', data.year3)
                sessionStorage.setItem('displayEdu11', data.education1)
                sessionStorage.setItem('displayEdu21', data.education2)
                sessionStorage.setItem('displayEdu31', data.education3)
                /*
                $("#displayBudget").text(data.isSpecialNeed)
                $("#displayBudget").text(data.Budget)
                $("#displayYear1").text(data.year1)
                $("#displayYear2").text(data.year2)
                $("#displayYear3").text(data.year3)
                $("#displayEdu1").text(data.education1)
                $("#displayEdu2").text(data.education2)
                $("#displayEdu3").text(data.education3)
                */
                window.location.replace("profileStudent.html")


            } else {

                sessionStorage.setItem('3canTakeSpecialNeed', data.isSpecialNeed)
                sessionStorage.setItem('3displaySkill1', data.skill1)
                sessionStorage.setItem('3displaySkill2', data.skill2)
                sessionStorage.setItem('3displaySkill3', data.skill3)
                sessionStorage.setItem('3displayWorkYear1', data.year1)
                sessionStorage.setItem('3displayWorkYear2', data.year2)
                sessionStorage.setItem('3displayWorkYear3', data.year3)
                sessionStorage.setItem('3displayExp1', data.work1)
                sessionStorage.setItem('3displayExp2', data.work2)
                sessionStorage.setItem('3displayExp3', data.work3)

                /*
                $("#canTakeSpecialNeed3").text(data.canTakeSpecialNeed)
                $("#displaySkill1").text(data.Skill1 + " - " + data.price1)
                $("#displaySkill2").text(data.Skill2 + " - " + data.price2)
                $("#displaySkill3").text(data.Skill3 + " - " + data.price3)
                $("#displayWorkYear1").text(data.year1)
                $("#displayWorkYear2").text(data.year2)
                $("#displayWorkYear3").text(data.year3)
                $("#displayExp1").text(data.work1)
                $("#displayExp2").text(data.work1)
                $("#displayExp3").text(data.work1)
                */
                window.location.replace("profileTutor.html")
            }
        }


    }).fail(function () {
        console.log("fail")
    });
}

function updateSelf() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/get_user", // another link
        data: {
            "Userid": current_user
        }
    }).done(function (data) {
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
                window.location.replace("profileStudent.html")
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
                window.location.replace("profileTutor.html")
            }
        }

        console.log(data)

    }).fail(function () {
        console.log("fail")
    });
}

function updateView() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/get_user", // another link
        data: {
            "Userid": search_user
        }
    }).done(function (data) {
        if (data.Successful === "False") {
            alert("Wrong username or password")
        } else {
            current_user = data.Userid
            $("#2displayName").text(data.Name)
            $("#2displayLocation").text(data.Location)
            $("#2displayPhone").text(data.Phone_number)
            $("#2displayEmail").text(data.Username)
            $("#2displayProf").text(data.Role)
            $("#2displayTeachSpecialNeeds").text(data.canTakeSpecialNeed)
            $("#2displaySkill1").text(data.Skill1 + " - " + data.price1)
            $("#2displaySkill2").text(data.Skill2 + " - " + data.price2)
            $("#2displaySkill3").text(data.Skill3 + " - " + data.price3)
            $("#2displayWorkYear1").text(data.year1)
            $("#2displayWorkYear2").text(data.year2)
            $("#2displayWorkYear3").text(data.year3)
            $("#2displayExp1").text(data.work1)
            $("#2displayExp2").text(data.work1)
            $("#2displayExp3").text(data.work1)
        
    }

    console.log(data)

    }).fail(function () {
        console.log("fail")
    });
}

function edit_education() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/edit_edu",
        data: {
            "Userid": sessionStorage.getItem('current_user'),
            "year1": $("#year1").val(),
            "year2": $("#year2").val(),
            "year3": $("#year3").val(),
            "edu1": $("#edu1").val(),
            "edu2": $("#edu2").val(),
            "edu3": $("#edu3").val(),
            "budget": $("#budget").val(),
            "amSpecialNeeds": $("input[name='amSpecialNeeds']:checked").val()
        }
    }).done(function (data) {

        console.log($("#year1").val())
        /*
        $("#displayBudget").text(data.Budget)
        $("#displayAmSpecialNeed").text(data.isSpecialNeed)
        $("#displayYear1").text(data.year1)
        $("#displayYear2").text(data.year2)
        $("#displayYear3").text(data.year3)
        $("#displayEdu1").text(data.education1)
        $("#displayEdu2").text(data.education2)
        $("#displayEdu3").text(data.education3)
        */
        sessionStorage.setItem('displayAmSpecialNeed', data.isSpecialNeed)
        sessionStorage.setItem('displayBudget1', data.Budget)
        sessionStorage.setItem('displayYear11', data.year1)
        sessionStorage.setItem('displayYear21', data.year2)
        sessionStorage.setItem('displayYear31', data.year3)
        sessionStorage.setItem('displayEdu11', data.education1)
        sessionStorage.setItem('displayEdu21', data.education2)
        sessionStorage.setItem('displayEdu31', data.education3)

        console.log(data)
        window.location.replace("profileStudent.html")
    }).fail(function () {
        console.log("fail")
    });
}

function edit_experience() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/add_record",
        data: {
            "Userid": sessionStorage.getItem("current_user"),
            "workyear1": $("#workyear1").val(),
            "workyear1": $("#workyear1").val(),
            "workyear3": $("#workyear3").val(),
            "exp1": $("#exp1").val(),
            "exp2": $("#exp2").val(),
            "exp3": $("#exp3").val(),
            "teachSpecialNeeds": $("input[name='teachSpecialNeeds']:checked").val()
        }
    }).done(function (data) {
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
    }).fail(function () {
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
            "price1": $("#price1").val(),
            "price2": $("#price2").val(),
            "price3": $("#price3").val(),
            
        }
    }).done(function (data) {
        $("#displaySkill1").text(data.skill1 + " - " + data.price1)
        $("#displaySkill2").text(data.skill2 + " - " + data.price2)
        $("#displaySkill3").text(data.skill3 + " - " + data.price3)

        console.log(data)
        window.location.replace("profileTutor.html")
    }).fail(function () {
        console.log("fail")
    });
}

function search() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/searchLocationSkill",
        data: {
            "Userid": sessionStorage.getItem("current_user"),
            "searchSkill": $("#searchSkill").val(),
            "searchLocation": $("#searchLocation").val(),
        }
    }).done(function (data) {
        var tutor1 = data[0]
        var tutor2 = data[1]
        var tutor3 = data[2]

        sessionStorage.setItem("search_user1",data[0].Userid)

        sessionStorage.setItem('displaySearchSkills_1', tutor1.skill1+"("+tutor1.price1+") " + tutor1.skill2+"("+tutor1.price2+") " + tutor1.skill3+"("+tutor1.price3+") ")
        /*
        sessionStorage.setItem('displayBudget1', data.Budget)
        sessionStorage.setItem('displayYear11', data.year1)
        sessionStorage.setItem('displayYear21', data.year2)
        sessionStorage.setItem('displayYear31', data.year3)
        sessionStorage.setItem('displayEdu11', data.education1)
        sessionStorage.setItem('displayEdu21', data.education2)
        sessionStorage.setItem('displayEdu31', data.education3)
        */
        /*
        $("#displaySearchSkills1").text(tutor1.skill1+"("+tutor1.price1+") " + tutor1.skill2+"("+tutor1.price2+") " + tutor1.skill3+"("+tutor1.price3+") ")
        $("#displaySearchSkills2").text(tutor2.skill1+"("+tutor2.price1+") " + tutor2.skill2+"("+tutor2.price2+") " + tutor2.skill3+"("+tutor2.price3+") ")
        $("#displaySearchSkills3").text(tutor3.skill1+"("+tutor3.price1+") " + tutor3.skill2+"("+tutor3.price2+") " + tutor3.skill3+"("+tutor3.price3+") ")
        $("#displaySearchName1").text(tutor1.Name)
        $("#displaySearchName2").text(tutor2.Name)
        $("#displaySearchName3").text(tutor3.Name)
        $("#displaySearchLocation1").text(tutor1.Location)
        $("#displaySearchLocation2").text(tutor2.Location)
        $("#displaySearchLocation3").text(tutor3.Location)
        */
        console.log(data)
        window.location.replace("SearchPage.html")
    }).fail(function () {
        console.log("fail")
    });
}

function getTutor(x) {
    search_user = sessionStorage.getItem("search_user" + x)
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/get_user_by_id", // another link
        data: {
            "Userid": search_user
        }
    }).done(function (data) {
        if (data.Successful === "False") {
            alert("Wrong username or password")
        } else {

            console.log(data)

            sessionStorage.setItem('!displayName1', data.Name)
            sessionStorage.setItem('!displayLocation1', data.Location)
            sessionStorage.setItem('!displayPhone1', data.Phone_number)
            sessionStorage.setItem('!displayEmail1', data.Username)
            sessionStorage.setItem('!displayProf1', data.Role)

            sessionStorage.setItem('!displayTeachSpecialNeeds', data.canTakeSpecialNeed)
            sessionStorage.setItem('!displaySkill1', data.skill1)
            sessionStorage.setItem('!displaySkill2', data.skill2)
            sessionStorage.setItem('!displaySkill3', data.skill3)

            sessionStorage.setItem('!displayWorkYear1', data.year1)
            sessionStorage.setItem('!displayWorkYear2', data.year2)
            sessionStorage.setItem('!displayWorkYear3', data.year3)

            sessionStorage.setItem('!displayExp1', data.work1)
            sessionStorage.setItem('!displayExp2', data.work2)
            sessionStorage.setItem('!displayExp3', data.work3)

            window.location.replace("otherTutor.html")
            /*
            $("#displayName").text(data.Name)
            $("#displayLocation").text(data.Location)
            $("#displayPhone").text(data.Phone_number)
            $("#displayEmail").text(data.Username)
            $("#displayProf").text(data.Role)

            $("#displayTeachSpecialNeeds").text(data.canTakeSpecialNeed)
            $("#displaySkill1").text(data.Skill1 + " - " + data.price1)
            $("#displaySkill2").text(data.Skill2 + " - " + data.price2)
            $("#displaySkill3").text(data.Skill3 + " - " + data.price3)
            $("#displayWorkYear1").text(data.year1)
            $("#displayWorkYear2").text(data.year2)
            $("#displayWorkYear3").text(data.year3)
            $("#displayExp1").text(data.work1)
            $("#displayExp2").text(data.work2)
            $("#displayExp3").text(data.work3)
            window.location.replace("profileTutor.html")
            */
        }

    }).fail(function () {
        console.log("fail")
    });
}

function goHome() {
    updateSelf()

}
/**
 * Created by h205p2 on 11/15/16.
 */

var books =[];


$(document).ready(function(){
    $(".search").hide();
    $(".borrow").hide();
    $(".return").hide();
    $(".review").hide();
    $(".catalogue").hide();
    $(".add").hide();
    $("#actionbutton").change(function(){
        if($("#actionbutton").val()=="returnaction"){
            $(".return").show();
            $("#action").hide();
        }
        else if($("#actionbutton").val()=="borrowaction"){
            $(".borrow").show();
            $("#action").hide();
        }
        else if ($("#actionbutton").val()=="searchaction"){
            $(".search").show();
            $("#action").hide();
        }
        else if ($("#actionbutton").val()=="addaction"){
            $(".add").show();
            $("#action").hide();
        }
        else if ($("#actionbutton").val()=="reviewaction"){
            $(".review").show();
            $("#action").hide();
        }
        else if ($("#actionbutton").val()=="catalogueaction"){
            $(".catalogue").show();
            $("#action").hide();
        }
    });
});

$(document).ready(function(){
    $(".search").hide();
    $(".borrow").hide();
    $(".return").hide();
    $(".catalogue").hide();
    $(".add").hide();
    $(".review").hide();
    $("#searchanotherbutton").change(function(){
        if($("#searchanotherbutton").val()=="returnmore"){
            $(".search").hide();
            $(".borrow").hide();
            $(".catalogue").hide();
            $(".add").hide();
            $(".review").hide();
            $("#action").hide();
            $("#output").empty();
            $(".return").show();
        }
        else if($("#searchanotherbutton").val()=="borrowmore"){
            $("#action").hide();
            $(".search").hide();
            $(".return").hide();
            $(".catalogue").hide();
            $(".review").hide();
            $(".add").hide();
            $("#output").empty();
            $(".borrow").show();
        }
        else if ($("#searchanotherbutton").val()=="searchmore"){
            $("#action").hide();
            $(".borrow").hide();
            $(".return").hide();
            $(".catalogue").hide();
            $(".review").hide();
            $(".add").hide();
            $("#output").empty();
            $(".search").show();
        }
        else if ($("#searchanotherbutton").val()=="addmore"){
            $("#action").hide();
            $(".search").hide();
            $(".borrow").hide();
            $(".review").hide();
            $(".return").hide();
            $(".catalogue").hide();
            $("#output").empty();
            $(".add").show();
        }
        else if ($("#searchanotherbutton").val()=="reviewmore"){
            $("#action").hide();
            $(".search").hide();
            $(".borrow").hide();
            $(".return").hide();
            $(".catalogue").hide();
            $("#output").empty();
            $(".add").hide();
            $(".review").show();
        }
        else if ($("#searchanotherbutton").val()=="catalogue"){
            $("#action").hide();
            $(".search").hide();
            $(".borrow").hide();
            $(".review").hide();
            $(".return").hide();
            $("#output").empty();
            $(".add").hide();
            $(".catalogue").show();
        }
    });
});

$(document).ready(function(){
    $("#categories").hide();
    $("#searchvalue").hide();
    $("#searchbutton").hide();
    $("#searchby").change(function(){
        if($("#searchby").val()=="category") {
            $("#categories").show();
            $("#searchvalue").hide();
            $("#searchbutton").show();
        }
        else if($("#searchby").val()=="title" || $("#searchby").val()=="author" || $("#searchby").val()=="studentName"){
            $("#searchvalue").show();
            $("#categories").hide();
            $("#searchbutton").show();
        }
    })
});

function Book(title, author, category, isbn) {
    this.bookTitle = title;
    this.author = author;
    this.category = category;
    this.student = "N/A";
    this.borrowDate = "";
    this.email = "";
    this.status = "available";
    this.isbn = isbn;

    books.nextIndex++
}


//add book to database
function addBook() {
    var bookTitle = document.getElementById("bookTitle").value;
    var author = document.getElementById("author").value;
    var category = document.getElementById("categoriesadd").value;
    var isbn = document.getElementById("isbn").value;
    var bookadded = []
    var newbook = new Book(bookTitle, author, category, isbn);
    books["book" + books.nextIndex] = newbook;
    bookadded.push(newbook)
    function syntax() {
        var syntax = [];
        for (var i = 0; i < bookadded.length; i++) {
            var text = "ADDED: " + bookadded[i].bookTitle.italics()+ "<br>" + " Author: ".bold() + bookadded[i].author+ "<br>" + " Status: ".bold() + bookadded[i].status+ "<br>" +
                " Category: ".bold() + bookadded[i].category + "<br>"
            syntax.push(text)
        }
        return syntax.join(" ")
    }
    document.getElementById("output").innerHTML = syntax();
    console.log(books);
    books.nextIndex++
}

function logBorrow() {
    var bookTitle = document.getElementById("bookTitle").value;
    var studentName = document.getElementById("studentName").value;
    var author = document.getElementById("author").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var email = document.getElementById("email").value;
    var date1 = month.concat(day);
    var finalDate = date1.concat(year);
    var borrowed = [];
    for (key in books) {
        if (bookTitle === books[key].bookTitle && author === books[key].author) {
            books[key].student = studentName;
            books[key].borrowDate = finalDate;
            books[key].email = email;
            books[key].status = "borrowed";
            borrowed.push(books[key])
        }
        function syntax() {
            var syntax = [];
                for (var i = 0; i < borrowed.length; i++) {
                    var text = borrowed[i].bookTitle.italics() + "<br>"+" Author: ".bold() + borrowed[i].author+ "<br>" + " Status: ".bold() + borrowed[i].status+ "<br>" +
                        " Student: ".bold() + borrowed[i].student+ "<br>" + " Date Borrowed: ".bold() + borrowed[i].borrowDate+ "<br>" + " Student email: ".bold() + borrowed[i].email + "<br>"
                    syntax.push(text)
                }
                return syntax.join(" ")
        }
    }
     document.getElementById("output").innerHTML = syntax();
}

function logReturn() {
    var bookTitle = document.getElementById("bookTitle").value;
    var studentName = document.getElementById("studentName").value;
    var author = document.getElementById("author").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var date1 = month.concat(day);
    var finalDate = date1.concat(year);
    var returned = [];
    for (key in books) {
        if (bookTitle === books[key].bookTitle && author === books[key].author) {
            books[key].student = "N/A";
            books[key].borrowDate = "";
            books[key].email = "N/A";
            books[key].status = "available";
            returned.push(books[key])
        }
        function syntax() {
            var syntax = [];
                for (var i = 0; i < returned.length; i++) {
                    var text = returned[i].bookTitle.italics() +"<br>"+ " Author: ".bold() + returned[i].author + "<br>"+" Status: ".bold() + "Returned" + "<br>" +
                        " Student: ".bold() + studentName + "<br>"+" Date Returned: ".bold() + finalDate + "<br>"
                    syntax.push(text)
                }
                return syntax.join(" ")
            }
        }
    document.getElementById("output").innerHTML = syntax()
}

function search() {
    var bookSearch = [];
    var search = document.getElementById("searchvalue").value;
    var searchCat = document.getElementById("categories").value;
    for(key in books) {
        if (search === books[key].bookTitle) {
            bookSearch.push(books[key])
        }
        else if (search === books[key].student) {
            bookSearch.push(books[key])
        }
        else if (search === books[key].author) {
            bookSearch.push(books[key])
        }
        else if (searchCat === books[key].category) {
            bookSearch.push(books[key])
        }
        function output() {
            if (bookSearch.length === 0){
                return "Sorry, we couldn't find that!";
            }
            else {
                function syntax() {
                    var syntax = [];
                    for (var i = 0; i < bookSearch.length; i++) {
                        var text = bookSearch[i].bookTitle.italics() + "<br>" + " Author: ".bold() + bookSearch[i].author + "<br>" + " Status: ".bold() + bookSearch[i].status
                            + "<br>" + " Student: ".bold()
                            + bookSearch[i].student + "<br>" + "<br>"
                        syntax.push(text)
                    }
                    return syntax.join(" ")
                }
                return syntax();
            }
        }
    }
    document.getElementById("output").innerHTML = output()
}

function urlcreate(){
    function findISBN() {
        var booktitle= document.getElementById("reviewsearch").value;
        for (key in books) {
            if (booktitle === books[key].bookTitle) {
                return (books[key].isbn)
            }
        }
    }
    var text = "https://www.goodreads.com/book/isbn/"+findISBN()+"?format=json&user_id=23902904";
    console.log(text);
    return text;
}

$(document).ready( function() {
        $("#reviewbutton").click(function () {
            $.ajax({

                url: urlcreate(),
                type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                success: function(result) { document.getElementById("output").innerHTML = result.reviews_widget; },
                error: function() { alert('Failed!'); }
            });

        });
    });


function catalogue(){
    var table = document.getElementById("cataloguetab");
    inn = "<tr><th>Title</th><th>Author</th><th>Category</th><th>Status</th><th>Student</th><th>Borrow Date</th></th></tr>"
    for(var propt in books) {
        if (books[propt].hasOwnProperty('bookTitle')) {
            if (books[propt].status == "available") {
                s = "<tr>" +
                    "<td>" + books[propt].bookTitle + "</td>" +
                    "<td>" + books[propt].author + "</td>" +
                    "<td>" + books[propt].category + "</td>" +
                    "<td>" + books[propt].status + "</td>" +
                    "</tr>";
                inn += s
            }
            if (books[propt].status == "borrowed"){
                s = "<tr>" +
                    "<td>" + books[propt].bookTitle + "</td>" +
                    "<td>" + books[propt].author + "</td>" +
                    "<td>" + books[propt].category + "</td>" +
                    "<td>" + books[propt].status + "</td>" +
                    "<td>" + books[propt].student + "</td>" +
                    "<td>" + books[propt].borrowDate + "</td>" +
                    "</tr>";
                inn += s
            }
        }
    }
    table.innerHTML += inn
}



function download() {
    var data = books;
    var json = JSON.stringify(data);
    var blob = new Blob([json], {type: "application/json"});
    var url  = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.download    = "backup.json";
    a.href        = url;
    a.textContent = "Download backup.json";
    document.getElementById('content').appendChild(a);
}
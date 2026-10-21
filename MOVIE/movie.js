let name = prompt("Enter Your Name :")
let industry, movie, showTime;
let tickets, seatPrice, foodPrice, foodQty;
let subtotal, cgst, sgst, total;

industry = prompt("Select Industry:\n1. Hollywood\n2. Bollywood\n3. Tollywood");

switch (industry) {
    case "1":
        industry = "Hollywood";
        movie = prompt("Select Movie:\n1. Avatar\n2. Avengers");

        switch (movie) {
            case "1":
                movie = "Avatar";
                break;
            case "2":
                movie = "Avengers";
                break;
            default:
                movie = "Invalid Movie";
        }
        break;

    case "2":
        industry = "Bollywood";
        movie = prompt("Select Movie:\n1. Jawan\n2. Pathaan");

        switch (movie) {
            case "1":
                movie = "Jawan";
                break;
            case "2":
                movie = "Pathaan";
                break;
            default:
                movie = "Invalid Movie";
        }
        break;

    case "3":
        industry = "Tollywood";
        movie = prompt("Select Movie:\n1. RRR\n2. Baahubali");

        switch (movie) {
            case "1":
                movie = "RRR";
                break;
            case "2":
                movie = "Baahubali";
                break;
            default:
                movie = "Invalid Movie";
        }
        break;

    default:
        industry = "Invalid Industry";
        movie = "Not Selected";
}

tickets = parseInt(prompt("Enter Number of Tickets:"));

let seat = prompt("Select Seat:\n1. Silver - 150\n2. Gold - 250\n3. Platinum - 350");

switch (seat) {
    case "1":
        seatPrice = 150;
        seat = "Silver";
        break;
    case "2":
        seatPrice = 250;
        seat = "Gold";
        break;
    case "3":
        seatPrice = 350;
        seat = "Platinum";
        break;
    default:
        seatPrice = 0;
        seat = "Invalid Seat";
}

let time = prompt("Select Show Time:\n1. Morning 10 AM\n2. Afternoon 2 PM\n3. Evening 6 PM\n4. Night 9:30 PM");

switch (time) {
    case "1":
        showTime = "Morning 10 AM";
        break;
    case "2":
        showTime = "Afternoon 2 PM";
        break;
    case "3":
        showTime = "Evening 6 PM";
        break;
    case "4":
        showTime = "Night 9:30 PM";
        break;
    default:
        showTime = "Invalid Time";
}

let food = prompt("Select Food:\n1. Popcorn - 120\n2. Coke - 80\n3. Cold Coffee - 200\n4. French Fries - 170\n5. No Food");

switch (food) {
    case "1":
        foodPrice = 120;
        food = "Popcorn";
        break;
    case "2":
        foodPrice = 80;
        food = "Coke";
        break;
    case "3":
        foodPrice = 200;
        food = "Cold Coffee";
        break;
    case "4":
        foodPrice = 170;
        food = "French Fries";
        break;
    case "5":
        foodPrice = 0;
        food = "No Food";
        break;
    default:
        foodPrice = 0;
        food = "No Food";
}

foodQty = parseInt(prompt("Enter Food Quantity:"));

if (tickets > 0 && foodQty >= 0) {

    subtotal = (tickets * seatPrice) + (foodPrice * foodQty);
    cgst = subtotal * 9 / 100;
    sgst = subtotal * 9 / 100;
    total = subtotal + cgst + sgst;

    document.write("<center>");
    document.write("<h1>DEEPKAMAL CINEMAS</h1>");
    document.write("<h2>MOVIE TICKET / BILL</h2>");
    document.write("<hr>");

    document.write("<h3>Customer: " + name + "</h3>");
    document.write("<p>Industry: " + industry + "</p>");
    document.write("<p>Movie: " + movie + "</p>");
    document.write("<p>Show Time: " + showTime + "</p>");
    document.write("<p>Seat Type: " + seat + "</p>");
    document.write("<p>Number of Tickets: " + tickets + "</p>");
    document.write("<p>Ticket Price: Rs. " + seatPrice + "</p>");

    document.write("<hr>");
    document.write("<p>Food: " + food + "</p>");
    document.write("<p>Food Quantity: " + foodQty + "</p>");
    document.write("<p>Food Total: Rs. " + (foodPrice * foodQty) + "</p>");

    document.write("<hr>");
    document.write("<p>Subtotal: Rs. " + subtotal.toFixed(2) + "</p>");
    document.write("<p>CGST (9%): Rs. " + cgst.toFixed(2) + "</p>");
    document.write("<p>SGST (9%): Rs. " + sgst.toFixed(2) + "</p>");

    document.write("<h2>FINAL TOTAL: Rs. " + total.toFixed(2) + "</h2>");
    document.write("<hr>");
    document.write("<h3>Thank You For Visiting!</h3>");
    document.write("<h4>Created By: " + name + "</h4>");
    document.write("</center>");

} else {
    document.write("<h2>Please enter valid ticket and food quantity!</h2>");
}
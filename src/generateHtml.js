





function generateHtml(data) {
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/style.css" >
    <title>Profile Generator</title>
    </head>

    <body>
    <header>My Team</header>
    <h2>${data.managerName}</h2> 
    <h3>ID: ${data.managerId}</h3>
    <h3>Email: ${data.managerEmail}</h3>
    <h3>Office number: ${data.managerOffice}</h3>


    
    <h2>${data.engineerName}</h2> 
    <h3>ID: ${data.engineerId}</h3>
    <h3>Email: ${data.engineerEmail}</h3>
    <h3>Office number: ${data.engineerGithub}</h3>


    <h2>${data.internName}</h2> 
    <h3>ID: ${data.internId}</h3>
    <h3>Email: ${data.internEmail}</h3>
    <h3>Office number: ${data.internSchool}</h3>
    
    
    </body>
    </html>
    `;
}






module.exports = generateHtml;






function generateHtml(data) {
    return ` 
    <head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></head>
    <header>My Team</header>
    <h2>${data.managername}</h2> 
    <h3>ID: ${data.managerid}</h3>
    <h3>Email: ${data.manageremail}</h3>
    <h3>Office number: ${data.manageroffice}</h3>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    `;
}






module.exports = generateHtml;
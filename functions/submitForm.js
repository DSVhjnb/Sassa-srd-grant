// functions/submitForm.js
exports.handler = async (event, context) => {
    try {
        // Parse the incoming JSON data
        const data = JSON.parse(event.body);

        // Perform any logic you need with the data
        console.log(data);

        // Return a success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Form submitted successfully!" }),
        };
    } catch (error) {
        // Handle any errors
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error processing the form." }),
        };
    }
};

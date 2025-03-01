exports.getChatResponse = (req, res) => {
    const { message } = req.body;
    let response = "I don't know that yet, but I'll learn! 😊";

    // Handling addition
    if (message.includes("+")) {
        const [a, b] = message.split("+").map(Number);
        response = `Ohh! Adding is like making new friends. If you have ${a} apples 🍏 and your friend gives you ${b} more, now you have **${a + b} apples**! 🍎🍎`;
    } 
    
    // Handling subtraction
    else if (message.includes("-")) {
        const [a, b] = message.split("-").map(Number);
        response = `Subtracting means some things go away! Imagine there are ${a} pigeons 🐦 sitting, and ${b} fly away. Now, only **${a - b} pigeons** are left! 🕊️`;
    } 
    
    // Handling multiplication
    else if (message.includes("*") || message.toLowerCase().includes("times")) {
        const [a, b] = message.replace("times", "*").split("*").map(Number);
        response = `Multiplication is like groups! If you have ${a} baskets 🧺 with ${b} oranges 🍊 in each, you have **${a * b} oranges** in total!`;
    } 
    
    // Handling division
    else if (message.includes("/") || message.toLowerCase().includes("divide")) {
        const [a, b] = message.replace("divide", "/").split("/").map(Number);
        response = `Division is like sharing! If you have ${a} chocolates 🍫 and share with ${b} friends, each will get **${(a / b).toFixed(2)} chocolates**!`;
    } 
    
    // Handling float numbers
    else if (message.toLowerCase().includes("what is a float")) {
        response = `"Float" is a number with a **decimal**! Like if you drink **half** of a glass of milk 🥛, that’s **0.5 glass**!`;
    }
    
    // Handling boolean values
    else if (message.toLowerCase().includes("what is a boolean")) {
        response = `"Boolean" is like answering Yes ✅ or No ❌! Like **Do you like ice cream?** 🍦 Yes (True) or No (False)!`;
    }
    
    // Checking if a number is even or odd
    else if (message.toLowerCase().includes("even or odd")) {
        const num = parseInt(message.replace(/\D/g, ""), 10);
        response = num % 2 === 0 
            ? `The number ${num} is **even**! 🚀 It can be shared equally!` 
            : `The number ${num} is **odd**! 🌟 It has one left out when shared!`;
    }
    
    // Checking greater or smaller number
    else if (message.includes(">")) {
        const [a, b] = message.split(">").map(Number);
        response = `${a} is ${a > b ? "greater" : "not greater"} than ${b}! 📈`;
    } 
    
    else if (message.includes("<")) {
        const [a, b] = message.split("<").map(Number);
        response = `${a} is ${a < b ? "smaller" : "not smaller"} than ${b}! 📉`;
    }

    res.json({ response });
};

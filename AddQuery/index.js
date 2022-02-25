module.exports = async function (context, req) {
    try {
        const { num1, num2 } =  req.query;
        const result = Number(num1) + Number(num2);
        context.res = {
            body: `${num1} + ${num2} = ${result}`
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: error.message
        };
    }
}
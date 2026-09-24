// Strike Platform - Welcome Code
const welcome = async () => {
    const user = await getUser();
    console.log(`Welcome ${user.name}!`);
    console.log(`Level: ${user.level}`);
    return { status: "success" };
};

const getUser = async () => ({
    name: "Guest User",
    level: "Beginner"
});

welcome();
